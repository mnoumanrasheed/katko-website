// Checks that every reference to a known siteData export is imported in that file.
import { readdirSync, readFileSync, statSync } from 'fs';
import { join } from 'path';

const root = 'd:\\katkcoz\\src';
const exports = ['siteConfig','navigationLinks','footerLinks','heroSlides','threeOfferings','ourApproachStages'];

const files = [];
(function walk(dir){ for(const n of readdirSync(dir)){ const p=join(dir,n); if(statSync(p).isDirectory()) walk(p); else if(/\.(jsx?|mjs)$/.test(n)) files.push(p);} })(root);

let problems = 0;
for (const file of files) {
  const src = readFileSync(file,'utf8');
  for (const name of exports) {
    // reference as a standalone identifier (not inside an import specifier)
    const refRe = new RegExp(`\\b${name}\\b`, 'g');
    // an import line that includes this name (handles "as" aliases minimally)
    const imported = new RegExp(`import\\s+(?:[\\w$]+\\s*,\\s*)?\\{[^}]*\\b${name}\\b[^}]*\\}`).test(src)
                  || new RegExp(`import\\s+${name}\\b`).test(src);
    // count references outside import statements: remove import lines
    const noImports = src.replace(/^\s*import .*$/gm,'');
    if (refRe.test(noImports) && !imported) {
      problems++;
      console.log(`${file.replace(root,'src')}: uses "${name}" but does not import it from siteData`);
    }
  }
}
console.log(problems===0 ? 'OK: all siteData exports are properly imported where used.' : `\n${problems} missing siteData import(s).`);
process.exit(problems===0?0:1);
