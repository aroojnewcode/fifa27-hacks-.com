import fs from 'node:fs';
import path from 'node:path';

const base = path.join('src', 'pages', '[locale]');

function walk(dir, out = []) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) walk(full, out);
    else if (e.name.endsWith('.astro')) out.push(full);
  }
  return out;
}

for (const file of walk(base)) {
  const rel = path.relative(base, file);
  const depth = rel.split(path.sep).length - 1;
  const up = '../'.repeat(depth + 2);
  let s = fs.readFileSync(file, 'utf8');
  s = s.replace(/from '\.\.\/[^']*\/(layouts|i18n|config|components|data|utils|styles|scripts)\//g, `from '${up}$1/`);
  s = s.replace(/from "\.\.\/[^"]*\/(layouts|i18n|config|components|data|utils|styles|scripts)\//g, `from "${up}$1/`);
  fs.writeFileSync(file, s);
  console.log('fixed', rel, '->', up);
}
