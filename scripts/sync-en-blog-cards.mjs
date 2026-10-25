/**
 * Sync t.blog.items desc/title in en.ts from blogPosts in posts.ts (slug-matched).
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const postsPath = path.join(root, 'src/data/blog/posts.ts');
const enPath = path.join(root, 'src/i18n/en.ts');

const postsSrc = fs.readFileSync(postsPath, 'utf8');
const bySlug = new Map();
const blockRe =
  /slug:\s*"([^"]+)"[\s\S]*?title:\s*"((?:\\.|[^"\\])*)"[\s\S]*?desc:\s*"((?:\\.|[^"\\])*)"/g;
let m;
while ((m = blockRe.exec(postsSrc))) {
  bySlug.set(m[1], { title: m[2], desc: m[3] });
}

let en = fs.readFileSync(enPath, 'utf8');
let updated = 0;
for (const [slug, { title, desc }] of bySlug) {
  const slugRe = new RegExp(
    `(slug:\\s*'${slug.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}',\\s*\\n\\s*image:[^\\n]+\\n\\s*desc:\\s*)'[^']*'`,
  );
  const titleRe = new RegExp(
    `(slug:\\s*'${slug.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}'[^}]*?title:\\s*)'[^']*'`,
    's',
  );
  if (slugRe.test(en)) {
    en = en.replace(slugRe, `$1'${desc.replace(/'/g, "\\'")}'`);
    updated++;
  }
  const titleBlock = new RegExp(
    `slug:\\s*'${slug.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}'[\\s\\S]*?title:\\s*'[^']*'`,
  );
  if (titleBlock.test(en)) {
    en = en.replace(titleBlock, (chunk) =>
      chunk.replace(/title:\s*'[^']*'/, `title: '${title.replace(/'/g, "\\'")}'`),
    );
  }
}

fs.writeFileSync(enPath, en, 'utf8');
console.log(`Synced ${updated} blog card descriptions in en.ts (${bySlug.size} posts parsed).`);
