import fs from 'node:fs';
import path from 'node:path';

const root = path.join('src', 'pages', '[locale]');

function walk(dir, out = []) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) walk(full, out);
    else if (e.name.endsWith('.astro')) out.push(full);
  }
  return out;
}

const initImport = `import { localeStaticPaths, initLocalePage, pathsWithLocale } from '../../i18n/page';\n`;
const initImportDeep = `import { initLocalePage, pathsWithLocale } from '../../../../i18n/page';\n`;
const initImportMid = `import { localeStaticPaths, initLocalePage, pathsWithLocale } from '../../../i18n/page';\n`;

for (const file of walk(root)) {
  if (file.endsWith(`${path.sep}index.astro`) && file.includes(`${path.sep}[locale]${path.sep}index.astro`)) continue;

  let src = fs.readFileSync(file, 'utf8');
  const depth = file.split(path.sep).length - 3; // after src/pages/[locale]
  const up = '../'.repeat(depth + 1);

  src = src.replaceAll(`from '${up.slice(0, -3)}layouts/`, `from '${up}layouts/`);
  src = src.replaceAll(`from "${up.slice(0, -3)}layouts/`, `from "${up}layouts/`);

  // fix one-level wrong imports (about, faq, etc.)
  src = src.replaceAll("from '../layouts/", `from '${up}layouts/`);
  src = src.replaceAll("from '../i18n", `from '${up}i18n`);
  src = src.replaceAll("from '../config/", `from '${up}config/`);
  src = src.replaceAll("from '../components/", `from '${up}components/`);
  src = src.replaceAll("from '../data/", `from '${up}data/`);
  src = src.replaceAll("from '../utils/", `from '${up}utils/`);
  src = src.replaceAll("from '../styles/", `from '${up}styles/`);
  src = src.replaceAll("from '../../scripts/", `from '${up}scripts/`);

  if (!src.includes('initLocalePage')) {
    const i18nImport = depth >= 3 ? initImportDeep : depth >= 2 ? initImportMid : initImport;
    src = src.replace('---\n', `---\n${i18nImport}`);
    if (file.includes('[slug].astro')) {
      src = src.replace(
        /export function getStaticPaths\(\) \{[\s\S]*?\}\n/,
        (block) => {
          const inner = block.match(/return ([\s\S]*?);\s*\}/)?.[1] ?? '[]';
          return `export function getStaticPaths() {
  return pathsWithLocale(() => ${inner.replace(/^\s*return\s*/, '').replace(/;\s*$/, '')});
}
`;
        },
      );
      if (!src.includes('pathsWithLocale')) {
        // fallback
      }
    } else if (!src.includes('export function getStaticPaths')) {
      src = src.replace(
        i18nImport,
        `${i18nImport}export const getStaticPaths = localeStaticPaths;\n`,
      );
    }
    src = src.replace(
      /const \{ slug \} = Astro\.params;/,
      `const locale = initLocalePage(Astro);\nconst { slug } = Astro.params;`,
    );
    if (!src.includes('const locale = initLocalePage')) {
      src = src.replace(
        /export const getStaticPaths[\s\S]*?;\n\n/,
        (m) => `${m}const locale = initLocalePage(Astro);\n\n`,
      );
    }
  }

  src = src.replace(/<BaseLayout(\s)/g, '<BaseLayout locale={locale}$1');
  fs.writeFileSync(file, src);
  console.log('patched', file);
}
