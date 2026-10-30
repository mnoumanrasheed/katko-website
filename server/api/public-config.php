<?php
/**
 * /api/public-config.php — Katko Public Runtime Configuration
 * 
 * Delivers public configuration (reCAPTCHA v2 site key and CSRF token)
 * to the frontend at runtime.
 * 
 * NEVER echoes Resend API keys, reCAPTCHA secret keys, or filesystem paths.
 */

declare(strict_types=1);

// Disable error display to prevent information leakage
ini_set('display_errors', '0');
error_reporting(E_ALL);

// Security Headers
header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-store, no-cache, must-revalidate, max-age=0');
header('Pragma: no-cache');
header('X-Content-Type-Options: nosniff');
header('X-Frame-Options: SAMEORIGIN');

// Method check: GET only
if ($_SERVER['REQUEST_METHOD'] !== 'GET') {
    header('Allow: GET');
    http_response_code(405);
    echo json_encode([
        'success' => false,
        'code'    => 'METHOD_NOT_ALLOWED',
        'message' => 'Method not allowed.'
    ], JSON_UNESCAPED_SLASHES);
    exit;
}

// -----------------------------------------------------------------------------
// Resolve and Validate Private Configuration
// -----------------------------------------------------------------------------
$configPath = getenv('KATKO_CONFIG_PATH');

if (!$configPath || !is_string($configPath)) {
    // Default standard cPanel structure:
    // /home/USERNAME/public_html/api/public-config.php -> /home/USERNAME/katko-config.php
    $configPath = dirname(__DIR__, 2) . '/katko-config.php';
}

$realConfigPath = realpath($configPath);

// Ensure file exists and is readable
if (!$realConfigPath || !is_file($realConfigPath) || !is_readable($realConfigPath)) {
    http_response_code(503);
    echo json_encode([
        'success' => false,
        'code'    => 'CONFIG_UNAVAILABLE',
        'message' => 'Configuration service is currently unavailable.'
    ], JSON_UNESCAPED_SLASHES);
    exit;
}

// Safety check: ensure config is physically outside web document root if DOCUMENT_ROOT is set
if (!empty($_SERVER['DOCUMENT_ROOT'])) {
    $realDocRoot = realpath($_SERVER['DOCUMENT_ROOT']);
    if ($realDocRoot && str_starts_with($realConfigPath, $realDocRoot)) {
        http_response_code(500);
        echo json_encode([
            'success' => false,
            'code'    => 'INSECURE_CONFIGURATION',
            'message' => 'Configuration location is insecure.'
        ], JSON_UNESCAPED_SLASHES);
        exit;
    }
}

// Load config array
$config = require $realConfigPath;

if (!is_array($config)) {
    http_response_code(503);
    echo json_encode([
        'success' => false,
        'code'    => 'INVALID_CONFIG',
        'message' => 'Configuration structure is invalid.'
    ], JSON_UNESCAPED_SLASHES);
    exit;
}

$siteKey = $config['recaptcha_site_key'] ?? '';

// Check if keys are still default placeholders
if (empty($siteKey) || str_contains($siteKey, 'PASTE_') || $siteKey === 'PASTE_RECAPTCHA_V2_SITE_KEY_HERE') {
    http_response_code(503);
    echo json_encode([
        'success' => false,
        'code'    => 'CONFIG_PENDING',
        'message' => 'Service setup is pending completion.'
    ], JSON_UNESCAPED_SLASHES);
    exit;
}

// -----------------------------------------------------------------------------
// Session & CSRF Token Management
// -----------------------------------------------------------------------------
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

// Generate or retrieve session CSRF token
if (empty($_SESSION['katko_csrf_token'])) {
    $_SESSION['katko_csrf_token'] = bin2hex(random_bytes(32));
}
$csrfToken = $_SESSION['katko_csrf_token'];

// Release session lock so future requests are not blocked
session_write_close();

// Return ONLY public values
http_response_code(200);
echo json_encode([
    'success'          => true,
    'recaptchaSiteKey' => $siteKey,
    'csrfToken'        => $csrfToken
], JSON_UNESCAPED_SLASHES);
exit;

