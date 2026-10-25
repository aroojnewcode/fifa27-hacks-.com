import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const { blogPosts } = await import(pathToFileURL(path.join(root, 'src/data/blog/posts.ts')).href);

const enPath = path.join(root, 'src/i18n/en.ts');
let en = fs.readFileSync(enPath, 'utf8');

const blogStart = en.indexOf('  blog: {');
if (blogStart < 0) throw new Error('blog block not found');
const start = en.indexOf('    items: [', blogStart);
const end = en.indexOf('\n  toolkit:', blogStart);
if (start < 0 || end < 0) throw new Error('Could not locate blog items block');

const cards = blogPosts.map((post) => {
  const card = {
    tag: post.tag,
    title: post.title,
    slug: post.slug,
    image: post.image,
    desc: post.desc,
    date: post.date,
    readTime: post.readTime.replace(/\d+ min read/, (m) => {
      const n = parseInt(m, 10);
      return n > 12 ? `${Math.min(n, 12)} min read` : m;
    }),
  };
  return card;
});

function esc(s) {
  return s.replace(/\\/g, '\\\\').replace(/'/g, "\\'");
}

const lines = cards.map(
  (c) => `      {
        tag: '${esc(c.tag)}',
        title: '${esc(c.title)}',
        slug: '${c.slug}',
        image: '${c.image}',
        desc: '${esc(c.desc)}',
        date: '${c.date}',
        readTime: '${c.readTime}',
      }`,
);

const block = `    items: [\n${lines.join(',\n')},\n    ]`;
en = en.slice(0, start) + block + '\n  },' + en.slice(end);

fs.writeFileSync(enPath, en, 'utf8');
console.log(`Rewrote ${cards.length} blog items in en.ts from posts.ts`);
