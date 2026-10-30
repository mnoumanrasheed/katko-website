<?php
/**
 * /api/contact.php — Katko Secure Contact Form Endpoint
 * 
 * Verifies request origin, CSRF, honeypot, rate limits, and Google reCAPTCHA v2 Checkbox,
 * then dispatches email via Resend REST API using cURL.
 */

declare(strict_types=1);

ini_set('display_errors', '0');
error_reporting(E_ALL);

// Security Headers
header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-store, no-cache, must-revalidate, max-age=0');
header('Pragma: no-cache');
header('X-Content-Type-Options: nosniff');
header('X-Frame-Options: SAMEORIGIN');

// Helper function to send standard JSON errors
function send_json_response(int $status, bool $success, string $code, string $message, array $extra = []): void {
    http_response_code($status);
    $payload = array_merge([
        'success' => $success,
        'code'    => $code,
        'message' => $message
    ], $extra);
    echo json_encode($payload, JSON_UNESCAPED_SLASHES);
    exit;
}

// 1. Enforce POST Method
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    header('Allow: POST');
    send_json_response(405, false, 'METHOD_NOT_ALLOWED', 'Only POST requests are permitted.');
}

// 2. Validate Content-Type
$contentType = $_SERVER['CONTENT_TYPE'] ?? $_SERVER['HTTP_CONTENT_TYPE'] ?? '';
if (!str_contains(strtolower($contentType), 'application/json')) {
    send_json_response(415, false, 'UNSUPPORTED_MEDIA_TYPE', 'Content-Type must be application/json.');
}

// 3. Limit Request Body Size (16 KB max)
$contentLength = (int)($_SERVER['CONTENT_LENGTH'] ?? 0);
if ($contentLength > 16384) {
    send_json_response(413, false, 'PAYLOAD_TOO_LARGE', 'Submission exceeds maximum permitted size.');
}

$rawInput = file_get_contents('php://input', false, null, 0, 16385);
if ($rawInput === false || strlen($rawInput) > 16384 || strlen($rawInput) === 0) {
    send_json_response(400, false, 'INVALID_PAYLOAD', 'Unable to process submission data.');
}

$data = json_decode($rawInput, true);
if (!is_array($data)) {
    send_json_response(400, false, 'INVALID_JSON', 'Malformed JSON payload.');
}

// 4. Load Private Configuration
$configPath = getenv('KATKO_CONFIG_PATH');
if (!$configPath || !is_string($configPath)) {
    $configPath = dirname(__DIR__, 2) . '/katko-config.php';
}

$realConfigPath = realpath($configPath);
if (!$realConfigPath || !is_file($realConfigPath) || !is_readable($realConfigPath)) {
    send_json_response(503, false, 'SERVICE_UNAVAILABLE', 'Backend configuration is unavailable.');
}

if (!empty($_SERVER['DOCUMENT_ROOT'])) {
    $realDocRoot = realpath($_SERVER['DOCUMENT_ROOT']);
    if ($realDocRoot && str_starts_with($realConfigPath, $realDocRoot)) {
        send_json_response(500, false, 'CONFIG_ERROR', 'Security boundary violation detected.');
    }
}

$config = require $realConfigPath;
if (!is_array($config)) {
    send_json_response(503, false, 'CONFIG_ERROR', 'Service configuration error.');
}

$resendApiKey      = $config['resend_api_key'] ?? '';
$recaptchaSecret   = $config['recaptcha_secret_key'] ?? '';
$fromEmail         = $config['from_email'] ?? 'noreply@katko.co.za';
$fromName          = $config['from_name'] ?? 'Katko Website';
$toEmail           = $config['to_email'] ?? 'info@katko.co.za';
$allowedHostnames  = $config['allowed_hostnames'] ?? ['katko.co.za', 'www.katko.co.za'];
$allowedOrigins    = $config['allowed_origins'] ?? ['https://katko.co.za', 'https://www.katko.co.za'];
$rateLimitMax      = (int)($config['rate_limit_max'] ?? 5);
$rateLimitWindow   = (int)($config['rate_limit_window_s'] ?? 3600);

if (empty($resendApiKey) || str_contains($resendApiKey, 'PASTE_') ||
    empty($recaptchaSecret) || str_contains($recaptchaSecret, 'PASTE_')) {
    send_json_response(503, false, 'CONFIG_PENDING', 'Email service configuration is pending completion.');
}

// 5. Host and Origin Validation
$requestHost = $_SERVER['HTTP_HOST'] ?? $_SERVER['SERVER_NAME'] ?? '';
$requestHost = strtolower(explode(':', (string)$requestHost)[0]);

// Allow localhost for dev testing if allowed_hostnames includes it or if local
$isConfiguredHost = false;
foreach ($allowedHostnames as $h) {
    if (strcasecmp($requestHost, (string)$h) === 0) {
        $isConfiguredHost = true;
        break;
    }
}
if (!$isConfiguredHost && !in_array($requestHost, ['localhost', '127.0.0.1'], true)) {
    send_json_response(403, false, 'INVALID_HOST', 'Request host is not authorized.');
}

// Check Origin or Referer if provided by browser
$origin = $_SERVER['HTTP_ORIGIN'] ?? '';
if (!empty($origin)) {
    $normalizedOrigin = strtolower(rtrim($origin, '/'));
    $isAllowedOrigin = false;
    foreach ($allowedOrigins as $ao) {
        if ($normalizedOrigin === strtolower(rtrim((string)$ao, '/'))) {
            $isAllowedOrigin = true;
            break;
        }
    }
    // Also allow localhost/127.0.0.1 origins for local testing
    if (!$isAllowedOrigin && !str_starts_with($normalizedOrigin, 'http://localhost') && !str_starts_with($normalizedOrigin, 'http://127.0.0.1')) {
        send_json_response(403, false, 'ORIGIN_MISMATCH', 'Cross-origin submission rejected.');
    }
}

// 6. CSRF Verification
$isHttps = (!empty($_SERVER['HTTPS']) && $_SERVER['HTTPS'] !== 'off') 
    || (!empty($_SERVER['SERVER_PORT']) && (int)$_SERVER['SERVER_PORT'] === 443)
    || (!empty($_SERVER['HTTP_X_FORWARDED_PROTO']) && strtolower((string)$_SERVER['HTTP_X_FORWARDED_PROTO']) === 'https');

if (session_status() === PHP_SESSION_NONE) {
    session_set_cookie_params([
        'lifetime' => 0,
        'path'     => '/',
        'domain'   => '',
        'secure'   => $isHttps,
        'httponly' => true,
        'samesite' => 'Lax'
    ]);
    session_start();
}

$sessionCsrf = $_SESSION['katko_csrf_token'] ?? '';
$providedCsrf = $data['csrfToken'] ?? '';
session_write_close();

if (!empty($sessionCsrf)) {
    if (!is_string($providedCsrf) || !hash_equals($sessionCsrf, $providedCsrf)) {
        send_json_response(403, false, 'CSRF_FAILED', 'Security verification token expired or invalid. Please refresh the page.');
    }
}

// 7. Honeypot check (hidden "website" field must be strictly empty)
$honeypot = $data['website'] ?? '';
if (!empty($honeypot)) {
    // Silently reject bot submissions
    send_json_response(200, true, 'ENQUIRY_RECEIVED', 'Your enquiry has been submitted successfully.');
}

// 8. Privacy Consent check
$privacyConsent = $data['privacyConsent'] ?? false;
if ($privacyConsent !== true) {
    send_json_response(422, false, 'CONSENT_REQUIRED', 'You must acknowledge the privacy notice to proceed.');
}

// 9. Input Sanitization & Validation
$fullName     = trim((string)($data['fullName'] ?? ''));
$email        = trim((string)($data['email'] ?? ''));
$organisation = trim((string)($data['organisation'] ?? ''));
$enquiryType  = trim((string)($data['enquiryType'] ?? ''));
$message      = trim((string)($data['message'] ?? ''));
$recaptcha    = (string)($data['recaptchaToken'] ?? '');

$allowedEnquiryTypes = [
    'NourDoc Demo',
    'LeadHive AI Demo',
    'AI Engineering Services',
    'Customer Experience Discovery',
    'Risk & Compliance Scoping',
    'General Enquiry'
];

$errors = [];

if (empty($fullName) || mb_strlen($fullName, 'UTF-8') > 120) {
    $errors['fullName'] = 'Please provide your full name (up to 120 characters).';
}

if (empty($email) || mb_strlen($email, 'UTF-8') > 254 || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $errors['email'] = 'Please provide a valid business email address.';
}

if (!empty($organisation) && mb_strlen($organisation, 'UTF-8') > 150) {
    $errors['organisation'] = 'Organisation name cannot exceed 150 characters.';
}

if (!in_array($enquiryType, $allowedEnquiryTypes, true)) {
    $errors['enquiryType'] = 'Please select a valid enquiry type.';
}

if (empty($message) || mb_strlen($message, 'UTF-8') < 10 || mb_strlen($message, 'UTF-8') > 5000) {
    $errors['message'] = 'Please provide project details between 10 and 5,000 characters.';
}

if (empty($recaptcha)) {
    $errors['recaptcha'] = 'Please complete the reCAPTCHA verification checkbox.';
}

if (!empty($errors)) {
    send_json_response(422, false, 'VALIDATION_FAILED', 'Please correct the highlighted fields.', ['errors' => $errors]);
}

// 10. Rate Limiting (File-locked counter per hashed IP, stored outside web root)
$clientIp = $_SERVER['REMOTE_ADDR'] ?? 'unknown';
$ipHash = hash('sha256', $clientIp . 'katko_salt_2026');

// Location for rate limit storage (default to alongside config outside document root)
$rateLimitDir = dirname($realConfigPath) . '/katko-rate-limit';
if (!is_dir($rateLimitDir)) {
    @mkdir($rateLimitDir, 0700, true);
}

if (is_dir($rateLimitDir) && is_writable($rateLimitDir)) {
    $rateLimitFile = $rateLimitDir . '/' . substr($ipHash, 0, 32) . '.json';
    $now = time();
    $rateData = ['count' => 0, 'start' => $now];

    $fp = @fopen($rateLimitFile, 'c+');
    if ($fp && flock($fp, LOCK_EX)) {
        $size = filesize($rateLimitFile);
        if ($size > 0) {
            $contents = fread($fp, $size);
            $parsed = json_decode($contents, true);
            if (is_array($parsed) && isset($parsed['start'], $parsed['count'])) {
                if (($now - $parsed['start']) < $rateLimitWindow) {
                    $rateData = $parsed;
                }
            }
        }

        if ($rateData['count'] >= $rateLimitMax) {
            flock($fp, LOCK_UN);
            fclose($fp);
            $retryAfter = max(1, $rateLimitWindow - ($now - $rateData['start']));
            header("Retry-After: {$retryAfter}");
            send_json_response(429, false, 'RATE_LIMIT_EXCEEDED', "Too many enquiries submitted from this network. Please try again in {$retryAfter} seconds.");
        }

        $rateData['count']++;
        ftruncate($fp, 0);
        rewind($fp);
        fwrite($fp, json_encode($rateData));
        fflush($fp);
        flock($fp, LOCK_UN);
        fclose($fp);
    }
}

// 11. Google reCAPTCHA v2 Checkbox Server-to-Server Verification
$verifyUrl = 'https://www.google.com/recaptcha/api/siteverify';
$verifyPostData = http_build_query([
    'secret'   => $recaptchaSecret,
    'response' => $recaptcha,
    'remoteip' => $clientIp
]);

$ch = curl_init();
curl_setopt_array($ch, [
    CURLOPT_URL            => $verifyUrl,
    CURLOPT_POST           => true,
    CURLOPT_POSTFIELDS     => $verifyPostData,
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_CONNECTTIMEOUT => 5,
    CURLOPT_TIMEOUT        => 8,
    CURLOPT_SSL_VERIFYPEER => true,
    CURLOPT_SSL_VERIFYHOST => 2,
    CURLOPT_HTTPHEADER     => ['Content-Type: application/x-www-form-urlencoded']
]);

$verifyResponse = curl_exec($ch);
$curlErrno = curl_errno($ch);
curl_close($ch);

if ($curlErrno !== 0 || !$verifyResponse) {
    send_json_response(502, false, 'CAPTCHA_VERIFY_FAILED', 'Unable to reach the CAPTCHA verification service. Please try again.');
}

$verifyJson = json_decode((string)$verifyResponse, true);
if (!is_array($verifyJson) || empty($verifyJson['success'])) {
    send_json_response(400, false, 'CAPTCHA_INVALID', 'reCAPTCHA verification failed. Please check the box again.');
}

// Hostname verification from Google response
$captchaHostname = (string)($verifyJson['hostname'] ?? '');
if (!empty($captchaHostname)) {
    $captchaHostnameClean = strtolower($captchaHostname);
    $matchedHostname = false;
    foreach ($allowedHostnames as $ah) {
        if ($captchaHostnameClean === strtolower((string)$ah)) {
            $matchedHostname = true;
            break;
        }
    }
    // Allow localhost/127.0.0.1 for local developer test keys
    if (!$matchedHostname && !in_array($captchaHostnameClean, ['localhost', '127.0.0.1', 'testkey.google.com'], true)) {
        send_json_response(400, false, 'CAPTCHA_HOSTNAME_MISMATCH', 'reCAPTCHA security check origin mismatch.');
    }
}

// 12. Build Email Payload for Resend
$safeFullName     = htmlspecialchars($fullName, ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8');
$safeEmail        = htmlspecialchars($email, ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8');
$safeOrg          = htmlspecialchars($organisation ?: 'Not specified', ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8');
$safeEnquiryType  = htmlspecialchars($enquiryType, ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8');
$safeMessageHtml  = nl2br(htmlspecialchars($message, ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8'));
$currentDateUtc   = gmdate('Y-m-d H:i:s \U\T\C');

$emailSubject = "Katko Website Enquiry: {$enquiryType} — {$fullName}";

// HTML Email Body
$htmlBody = <<<HTML
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Katko Enquiry</title>
</head>
<body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; line-height: 1.6; color: #1E293B; background-color: #F8FAFC; margin: 0; padding: 24px;">
  <div style="max-width: 600px; margin: 0 auto; background-color: #FFFFFF; border-radius: 12px; border: 1px solid #E2E8F0; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.05);">
    <div style="background-color: #0F172A; padding: 20px 24px; border-bottom: 3px solid #F38C13;">
      <h2 style="color: #FFFFFF; margin: 0; font-size: 18px; font-weight: 700;">New Enquiry from Katko Website</h2>
      <div style="color: #94A3B8; font-size: 12px; margin-top: 4px;">{$currentDateUtc}</div>
    </div>
    <div style="padding: 24px;">
      <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
        <tr>
          <td style="padding: 8px 0; color: #64748B; font-size: 13px; width: 140px; font-weight: 600;">Full Name:</td>
          <td style="padding: 8px 0; color: #0F172A; font-size: 14px; font-weight: 700;">{$safeFullName}</td>
        </tr>
        <tr>
          <td style="padding: 8px 0; color: #64748B; font-size: 13px; font-weight: 600;">Business Email:</td>
          <td style="padding: 8px 0; color: #0F172A; font-size: 14px;"><a href="mailto:{$safeEmail}" style="color: #F38C13; text-decoration: none;">{$safeEmail}</a></td>
        </tr>
        <tr>
          <td style="padding: 8px 0; color: #64748B; font-size: 13px; font-weight: 600;">Organisation:</td>
          <td style="padding: 8px 0; color: #0F172A; font-size: 14px;">{$safeOrg}</td>
        </tr>
        <tr>
          <td style="padding: 8px 0; color: #64748B; font-size: 13px; font-weight: 600;">Enquiry Type:</td>
          <td style="padding: 8px 0; color: #0F172A; font-size: 14px; font-weight: 600;">{$safeEnquiryType}</td>
        </tr>
      </table>

      <div style="background-color: #F8FAFC; border-radius: 8px; border: 1px solid #E2E8F0; padding: 16px; margin-bottom: 20px;">
        <div style="color: #64748B; font-size: 12px; font-weight: 700; text-transform: uppercase; margin-bottom: 8px;">Project Details / Message</div>
        <div style="color: #1E293B; font-size: 14px; line-height: 1.6;">{$safeMessageHtml}</div>
      </div>

      <div style="font-size: 12px; color: #94A3B8; border-top: 1px solid #E2E8F0; padding-top: 16px;">
        Submitted via Katko.co.za · Reply directly to this email to contact the sender.
      </div>
    </div>
  </div>
</body>
</html>
HTML;

// Plain text alternative
$textBody = "New Enquiry from Katko Website ({$currentDateUtc})\n\n"
    . "Full Name: {$fullName}\n"
    . "Business Email: {$email}\n"
    . "Organisation: " . ($organisation ?: 'Not specified') . "\n"
    . "Enquiry Type: {$enquiryType}\n\n"
    . "Project Details / Message:\n{$message}\n\n"
    . "---\nSubmitted via Katko.co.za contact form. Reply directly to this email.";

// 13. Dispatch Email via Resend REST API (cURL)
$resendPayload = [
    'from'     => "{$fromName} <{$fromEmail}>",
    'to'       => [$toEmail],
    'reply_to' => $email,
    'subject'  => $emailSubject,
    'html'     => $htmlBody,
    'text'     => $textBody
];

$resendJson = json_encode($resendPayload, JSON_UNESCAPED_SLASHES);

$resendCh = curl_init();
curl_setopt_array($resendCh, [
    CURLOPT_URL            => 'https://api.resend.com/emails',
    CURLOPT_POST           => true,
    CURLOPT_POSTFIELDS     => $resendJson,
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_CONNECTTIMEOUT => 5,
    CURLOPT_TIMEOUT        => 10,
    CURLOPT_SSL_VERIFYPEER => true,
    CURLOPT_SSL_VERIFYHOST => 2,
    CURLOPT_HTTPHEADER     => [
        'Authorization: Bearer ' . $resendApiKey,
        'Content-Type: application/json',
        'User-Agent: Katko-Website-cPanel/1.0'
    ]
]);

$resendResponse = curl_exec($resendCh);
$resendHttpCode = curl_getinfo($resendCh, CURLINFO_HTTP_CODE);
$resendErrno    = curl_errno($resendCh);
curl_close($resendCh);

if ($resendErrno !== 0 || !$resendResponse) {
    send_json_response(502, false, 'EMAIL_GATEWAY_TIMEOUT', 'Unable to dispatch email through the delivery gateway. Please try again or email us directly.');
}

$resendResult = json_decode((string)$resendResponse, true);

if ($resendHttpCode >= 200 && $resendHttpCode < 300 && !empty($resendResult['id'])) {
    send_json_response(200, true, 'SUBMIT_SUCCESS', 'Thank you. Your enquiry has been submitted successfully.');
} else {
    // Log non-sensitive reference for debugging if needed, but do not leak keys/payload to visitor
    send_json_response(500, false, 'DELIVERY_FAILED', 'We could not submit your enquiry at this time. Please try again or email us directly at ' . $toEmail);
}

