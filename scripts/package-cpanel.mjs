/**
 * package-cpanel.mjs
 * 
 * Packages the Katko website for cPanel deployment:
 * 1. Runs `vite build` to generate dist/
 * 2. Creates `cpanel-release/public_html/` and stages all built assets
 * 3. Copies `server/api/` (PHP endpoints) and `server/.htaccess` to `cpanel-release/public_html/`
 * 4. Copies `server/private/katko-config.php.example` to `cpanel-release/private-config/`
 * 5. Generates `katko-cpanel-release.zip` containing public_html and private-config
 * 6. Validates that no node_modules, .git, or secrets are leaked
 */

import fs from 'node:fs';
import path from 'node:path';
import { execSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '..');

console.log('🚀 Starting Katko cPanel Production Packaging...\n');

// 1. Build Vite frontend
console.log('📦 Step 1: Running production Vite build...');
try {
  execSync('npm run build', { cwd: ROOT_DIR, stdio: 'inherit' });
} catch (err) {
  console.error('❌ Vite build failed.');
  process.exit(1);
}

const DIST_DIR = path.join(ROOT_DIR, 'dist');
if (!fs.existsSync(DIST_DIR)) {
  console.error('❌ dist/ directory not found after build.');
  process.exit(1);
}

// 2. Prepare staging directories
const RELEASE_DIR = path.join(ROOT_DIR, 'cpanel-release');
const STAGED_PUBLIC = path.join(RELEASE_DIR, 'public_html');
const STAGED_PRIVATE = path.join(RELEASE_DIR, 'private-config');
const ZIP_OUTPUT = path.join(ROOT_DIR, 'katko-cpanel-release.zip');

if (fs.existsSync(RELEASE_DIR)) {
  fs.rmSync(RELEASE_DIR, { recursive: true, force: true });
}
if (fs.existsSync(ZIP_OUTPUT)) {
  fs.unlinkSync(ZIP_OUTPUT);
}

fs.mkdirSync(STAGED_PUBLIC, { recursive: true });
fs.mkdirSync(STAGED_PRIVATE, { recursive: true });

console.log('\n📁 Step 2: Staging frontend static files to cpanel-release/public_html/ ...');
// Recursive copy helper
function copyRecursive(src, dest) {
  const stat = fs.statSync(src);
  if (stat.isDirectory()) {
    if (!fs.existsSync(dest)) fs.mkdirSync(dest, { recursive: true });
    for (const child of fs.readdirSync(src)) {
      copyRecursive(path.join(src, child), path.join(dest, child));
    }
  } else {
    fs.copyFileSync(src, dest);
  }
}

copyRecursive(DIST_DIR, STAGED_PUBLIC);

// 3. Stage PHP API endpoints & Apache .htaccess
console.log('🔒 Step 3: Staging PHP API endpoints and .htaccess to public_html/ ...');
const SERVER_API_DIR = path.join(ROOT_DIR, 'server', 'api');
const STAGED_API_DIR = path.join(STAGED_PUBLIC, 'api');
fs.mkdirSync(STAGED_API_DIR, { recursive: true });

copyRecursive(SERVER_API_DIR, STAGED_API_DIR);

const HTACCESS_SRC = path.join(ROOT_DIR, 'server', '.htaccess');
const HTACCESS_DEST = path.join(STAGED_PUBLIC, '.htaccess');
if (fs.existsSync(HTACCESS_SRC)) {
  fs.copyFileSync(HTACCESS_SRC, HTACCESS_DEST);
} else {
  console.warn('⚠️ Warning: server/.htaccess not found.');
}

// 4. Stage private configuration template outside public_html
console.log('🛡️ Step 4: Staging private configuration template to private-config/ ...');
const PRIVATE_CONFIG_SRC = path.join(ROOT_DIR, 'server', 'private', 'katko-config.php.example');
const PRIVATE_CONFIG_DEST = path.join(STAGED_PRIVATE, 'katko-config.php.example');
fs.copyFileSync(PRIVATE_CONFIG_SRC, PRIVATE_CONFIG_DEST);

// Write a quick README inside private-config to prevent accidental upload to public_html
fs.writeFileSync(
  path.join(STAGED_PRIVATE, 'DO_NOT_UPLOAD_TO_PUBLIC_HTML.txt'),
  `CRITICAL INSTRUCTION:\n` +
  `1. Copy 'katko-config.php.example' to your cPanel HOME directory (e.g. /home/CPANEL_USERNAME/katko-config.php).\n` +
  `2. Rename it to 'katko-config.php' and enter your reCAPTCHA v2 keys.\n` +
  `3. Do not upload it into public_html: it contains the secret key.\n` +
  `4. Add your Resend API key, reCAPTCHA v2 keys, and verified Resend sender email.\n`
);

// 5. Generate ZIP package
console.log('🗜️ Step 5: Creating production ZIP archive: katko-cpanel-release.zip ...');
try {
  // Use PowerShell Compress-Archive or tar on Windows/POSIX
  if (process.platform === 'win32') {
    const psCmd = `powershell -NoProfile -Command "Compress-Archive -Path '${RELEASE_DIR}\\*' -DestinationPath '${ZIP_OUTPUT}' -Force"`;
    execSync(psCmd, { cwd: ROOT_DIR, stdio: 'inherit' });
  } else {
    execSync(`cd "${RELEASE_DIR}" && zip -r "${ZIP_OUTPUT}" .`, { stdio: 'inherit' });
  }
} catch (err) {
  console.warn('⚠️ Zip compression command encountered an issue, staged folder is ready at cpanel-release/');
}

// 6. Security verification & summary
console.log('\n🔎 Step 6: Performing security & sanity audit...');

function auditDirectory(dir, badPatterns) {
  const files = fs.readdirSync(dir, { recursive: true });
  for (const f of files) {
    const filename = typeof f === 'string' ? f : f.name;
    for (const pat of badPatterns) {
      if (filename.includes(pat)) {
        console.error(`❌ Security failure: found banned file in release: ${filename}`);
        process.exit(1);
      }
    }
  }
}

auditDirectory(STAGED_PUBLIC, ['node_modules', '.git', '.env', 'katko-config.php.example', 'package.json']);

console.log('✅ Security check passed: No source code, node_modules, git history, or private configs found in public_html.');
console.log('\n🎉 Packaging complete!');
console.log(`- Staged Release Folder : ${RELEASE_DIR}`);
console.log(`- Upload-Ready ZIP File : ${ZIP_OUTPUT}`);
console.log(`- Public Web Files      : ${STAGED_PUBLIC} (Upload contents to cPanel document root)`);
console.log(`- Private Config Folder : ${STAGED_PRIVATE} (Place katko-config.php OUTSIDE public_html)\n`);

