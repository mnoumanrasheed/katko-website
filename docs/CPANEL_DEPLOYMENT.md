# Katko Website — cPanel Deployment & Configuration Guide

This guide walks you through deploying the Katko website and connecting the production contact form using **Resend (Email API)** and **Google reCAPTCHA v2 Checkbox ("I'm not a robot")** on cPanel Apache/LiteSpeed hosting.

---

## 1. Prerequisites Checklist

Before going live, ensure you have:
1. **cPanel Hosting Account** with PHP 8.1, 8.2, or 8.3 enabled.
2. **Domain attached and SSL certificate active** (Let's Encrypt / cPanel AutoSSL) so requests run over `https://`.
3. **Resend Account** ([resend.com](https://resend.com)):
   - Generated API Key (starts with `re_...`).
   - Sending domain verified under **Domains** (DNS records for SPF/DKIM added and showing *Verified*).
   - Authorised sender email matching that domain (e.g. `noreply@katko.co.za`).
4. **Google reCAPTCHA v2 Checkbox Keys** ([google.com/recaptcha/admin](https://www.google.com/recaptcha/admin)):
   - Type: **reCAPTCHA v2 -> "I'm not a robot" Checkbox** (Do NOT choose v3 or invisible v2).
   - Domains added: `katko.co.za` and `www.katko.co.za` (plus any staging domains).
   - You will receive a **Site Key** (public) and a **Secret Key** (private).

---

## 2. Generate the Deployable Package

On your local machine, run:

```bash
npm run build:cpanel
```

This creates:
- `cpanel-release/public_html/` — Complete static site + PHP API endpoints + `.htaccess`.
- `cpanel-release/private-config/` — `katko-config.php.example` configuration template.
- `katko-cpanel-release.zip` — Ready-to-upload archive.

---

## 3. Directory Layout on cPanel

A secure deployment separates private configuration from web-accessible files:

```text
/home/CPANEL_USERNAME/
  ├── katko-config.php             <-- PRIVATE CONFIGURATION (contains API keys)
  ├── katko-rate-limit/            <-- Automatically created rate-limit directory
  └── public_html/                 <-- WEB ROOT (accessible to the public)
        ├── index.html
        ├── .htaccess              <-- Apache SPA rewrite & API protection rules
        ├── assets/
        ├── images/
        ├── logo.png
        └── api/
              ├── contact.php      <-- Backend submission processor
              └── public-config.php <-- Delivers ONLY public site key & CSRF token
```

> **Security Note:** `katko-config.php` lives in your cPanel user home directory (`/home/CPANEL_USERNAME/`), **one level above** `public_html`. Web visitors cannot access it, download it, or execute it directly.

---

## 4. Step-by-Step Deployment Instructions

### Step A: Verify PHP Version & Extensions in cPanel
1. Log into your cPanel dashboard.
2. Open **MultiPHP Manager** and ensure your domain is set to **PHP 8.1, 8.2, or 8.3**.
3. Under **Select PHP Version** / **PHP Extensions**, ensure `curl`, `json`, `mbstring`, `openssl`, and `session` are enabled (these are active by default on standard cPanel installations).

### Step B: Upload Public Files to the Web Root
1. Open **cPanel File Manager**.
2. Navigate into your website document root (typically `public_html/` for primary domains, or `subdomain.example.com/` for addon domains).
3. Upload the contents of `cpanel-release/public_html/` (or upload `katko-cpanel-release.zip`, extract it in a temporary folder, and move the files from `public_html/` into your live document root).
4. Verify that `.htaccess` is present in the document root (in cPanel File Manager, click **Settings** in the top right and ensure **"Show Hidden Files (dotfiles)"** is checked).

### Step C: Create & Configure the Private Configuration File
1. In cPanel File Manager, navigate up to your home folder: `/home/CPANEL_USERNAME/` (outside `public_html`).
2. Upload `cpanel-release/private-config/katko-config.php.example` into `/home/CPANEL_USERNAME/`.
3. Rename the file to:
   ```text
   katko-config.php
   ```
4. Right-click `katko-config.php` and select **Edit**.
5. Paste your verified credentials and save the file:

```php
<?php
return [
    // 1. Resend API Key
    'resend_api_key'        => 're_1234567890abcdef...',

    // 2. Google reCAPTCHA v2 Checkbox Keys
    'recaptcha_site_key'   => '6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI',
    'recaptcha_secret_key' => '6LeIxAcTAAAAAGG-vFI1TnRWxMZNFuojJ4WifJWe',

    // 3. Sender settings (must match verified Resend domain)
    'from_email'           => 'noreply@katko.co.za',
    'from_name'            => 'Katko Website',

    // 4. Recipient for customer enquiries
    'to_email'             => 'info@katko.co.za',

    // 5. Hostname & Origin allowlists
    'allowed_hostnames'    => [
        'katko.co.za',
        'www.katko.co.za'
    ],
    'allowed_origins'      => [
        'https://katko.co.za',
        'https://www.katko.co.za'
    ],

    // 6. Rate Limiting (5 requests per hour per IP)
    'rate_limit_max'       => 5,
    'rate_limit_window_s'  => 3600,
];
```

6. **Permissions:** In File Manager, right-click `katko-config.php`, click **Change Permissions**, and set it to **`600`** (or `640`) so only your user process can read it.

*(Optional for Addon / Nested Domains: If your document root is nested, e.g. `/home/user/domains/katko.co.za/public_html`, you can explicitly set the environment variable `KATKO_CONFIG_PATH = /home/user/katko-config.php` via `.htaccess` using `SetEnv KATKO_CONFIG_PATH "/home/user/katko-config.php"`).*

---

## 5. Verifying the Live Installation

1. **Verify Public Config Endpoint:**
   Open in your browser:
   `https://katko.co.za/api/public-config.php`
   - **Expected response:**
     ```json
     {"success":true,"recaptchaSiteKey":"6Le...","csrfToken":"..."}
     ```
   - Notice that your Resend key and reCAPTCHA secret key are **NEVER** returned.

2. **Test Contact Form:**
   Navigate to `https://katko.co.za/contact-us`.
   - The Google reCAPTCHA **"I'm not a robot"** checkbox appears cleanly below the privacy notice.
   - Fill in a test name, valid email, select an enquiry type, enter message details, tick the privacy consent, and check the reCAPTCHA box.
   - Click **Submit Enquiry**.
   - You should see the green confirmation banner:
     *"Thank you. Your enquiry has been submitted successfully."*
   - Check your Resend dashboard under **Emails** to confirm delivery to `info@katko.co.za`.

---

## 6. Updating the Website in the Future

When you update React code or assets:
1. Re-run `npm run build:cpanel`.
2. Upload the new files from `cpanel-release/public_html/` to your cPanel document root.
3. **You DO NOT need to touch `katko-config.php` or rebuild the site when updating keys.** The frontend dynamically reads the public site key from PHP at runtime.

---

## 7. Troubleshooting Matrix

| Issue | Likely Cause | Solution |
| :--- | :--- | :--- |
| **"Initializing security verification..." stays stuck** | `/api/public-config.php` returning error or blocked | Check browser console (F12) Network tab. If it returns `503 CONFIG_PENDING`, check that you replaced `PASTE_...` in `katko-config.php`. |
| **"Verification system is currently offline" alert** | Missing `katko-config.php` file | Ensure `katko-config.php` is located at `/home/USERNAME/katko-config.php` or set `SetEnv KATKO_CONFIG_PATH ...` in `.htaccess`. |
| **reCAPTCHA widget error: "Invalid domain for site key"** | Domain not added in Google reCAPTCHA admin | In Google reCAPTCHA console, add `katko.co.za` and `www.katko.co.za` under registered domains. |
| **HTTP 403 "CSRF verification token expired"** | Browser session cookie expired or blocked | Refresh page and submit with fresh token. |
| **HTTP 429 "Too many enquiries submitted"** | Rate limit triggered (default 5 per hour) | Wait for the `Retry-After` window or increase `rate_limit_max` in `katko-config.php`. |
| **HTTP 500 "We could not submit your enquiry"** | Resend API rejected domain/key | Ensure the domain is verified in your Resend account, and `from_email` matches that domain (e.g. `noreply@katko.co.za`). |
| **404 on page refresh (e.g. `/nourdoc` or `/contact-us`)** | `.htaccess` not active or ignored | Ensure `.htaccess` was uploaded to `public_html/` and Apache `mod_rewrite` is enabled. |

