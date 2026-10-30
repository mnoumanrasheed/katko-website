// Heuristic scanner: finds JSX component tags (<Foo>) used in a file that are
// neither imported nor locally defined. This is the class of bug that blanked
// the site (Footer used <Link> without importing it) and which the bundler
// does NOT catch at build time.
import { readdirSync, readFileSync, statSync } from 'fs';
import { join } from 'path';

const root = 'd:\\katkcoz\\src';
const files = [];
function walk(dir) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) walk(p);
    else if (/\.(jsx?|mjs)$/.test(name)) files.push(p);
  }
}
walk(root);

// Built-in / known globals that are fine to use without import
const allow = new Set(['React', 'Fragment', 'Suspense', 'StrictMode', 'SuspenseList']);

let problems = 0;
for (const file of files) {
  const src = readFileSync(file, 'utf8');
  // remove comments to reduce false positives
  const clean = src.replace(/\/\*[\s\S]*?\*\//g, '').replace(/\/\/.*$/gm, '');

  // imported identifiers
  const imported = new Set();
  let m;
  const importRe = /import\s+(?:([A-Za-z_$][\w$]*)\s*,\s*)?\{([^}]*)\}|import\s+([A-Za-z_$][\w$]*)\s+from/g;
  while ((m = importRe.exec(clean))) {
    if (m[1]) imported.add(m[1]); // default in "import D, { ... }"
    if (m[2]) m[2].split(',').forEach(s => { const t = s.trim().split(/\s+as\s+/)[0].trim(); if (t) imported.add(t); });
    if (m[3]) imported.add(m[3]); // default import
  }
  // also catch "import React, { X, Y }" handled by m[1]+m[2]; and side-effect imports ignored

  // locally defined identifiers
  const local = new Set();
  const localRe = /(?:export\s+default\s+)?(?:function|class|const|let|var)\s+([A-Za-z_$][\w$]*)\s*(?:=|\(|<|extends)/g;
  while ((m = localRe.exec(clean))) local.add(m[1]);
  const defFn = /function\s+([A-Za-z_$][\w$]*)\s*\(/g;
  while ((m = defFn.exec(clean))) local.add(m[1]);

  // JSX tags used: <Identifier ...  (capitalized), and <Identifier. member starts
  const used = new Set();
  const tagRe = /<([A-Z][A-Za-z0-9_$]*)/g;
  while ((m = tagRe.exec(clean))) used.add(m[1]);

  const missing = [...used].filter(u => !imported.has(u) && !local.has(u) && !allow.has(u));
  if (missing.length) {
    problems++;
    console.log(`\n${file.replace(root, 'src')}:`);
    for (const u of missing) console.log(`  - <${u}> used but not imported/defined`);
  }
}
console.log(problems === 0
  ? '\nOK: no obviously-undefined JSX components found.'
  : `\nFOUND ${problems} file(s) with possibly-undefined JSX components.`);
process.exit(problems === 0 ? 0 : 1);
