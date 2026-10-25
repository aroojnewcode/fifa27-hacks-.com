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
  if (file.endsWith(`${path.sep}index.astro`) && file.includes(`${path.sep}[locale]${path.sep}index.astro`)) continue;
  let s = fs.readFileSync(file, 'utf8');
  if (s.includes('initLocalePage')) continue;

  const rel = path.relative(base, file);
  const depth = rel.split(path.sep).length - 1;
  const up = '../'.repeat(depth + 2);

  const importLine = `import { localeStaticPaths, initLocalePage, pathsWithLocale } from '${up}i18n/page';\n`;

  s = s.replace('---\n', `---\n${importLine}`);

  if (file.includes('[slug].astro')) {
    s = s.replace(/export function getStaticPaths\(\) \{\s*return ([^;]+);\s*\}/, (_m, ret) => {
      const expr = ret.trim();
      if (expr.startsWith('pathsWithLocale')) return _m;
      return `export function getStaticPaths() {
  return pathsWithLocale(() => ${expr});
}`;
    });
  } else if (!s.includes('export const getStaticPaths')) {
    s = s.replace(importLine, `${importLine}export const getStaticPaths = localeStaticPaths;\n`);
  }

  if (!s.includes('const locale = initLocalePage')) {
    s = s.replace(/(export const getStaticPaths[\s\S]*?;\n|export function getStaticPaths[\s\S]*?\}\n)/, (m) => `${m}\nconst locale = initLocalePage(Astro);\n`);
  }

  s = s.replace(/<BaseLayout/g, '<BaseLayout locale={locale}');
  fs.writeFileSync(file, s);
  console.log('init', rel);
}
