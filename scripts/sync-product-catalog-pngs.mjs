/**
 * Ensure public/images/products/{slug}.png exist before optimize-images runs.
 * Copies from matching blog covers when a product PNG is missing (CI-safe).
 */
import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const blogDir = path.join(root, 'public/images/blog');
const productsDir = path.join(root, 'public/images/products');

/** Product slug → blog PNG basename (without .png). */
const fromBlog = {
  'hwid-spoofer': 'fifa-27-hwid-spoofer-after-ban',
  'unlock-all': 'fifa-27-icon-unlocker-guide',
  ugc: 'how-to-buy-fifa-27-hacks-2026',
};

if (!fs.existsSync(productsDir)) {
  fs.mkdirSync(productsDir, { recursive: true });
}

for (const [slug, blogBase] of Object.entries(fromBlog)) {
  const dest = path.join(productsDir, `${slug}.png`);
  if (fs.existsSync(dest)) continue;
  const src = path.join(blogDir, `${blogBase}.png`);
  if (!fs.existsSync(src)) {
    console.warn(`[sync-product-catalog] missing blog source for ${slug}: ${src}`);
    continue;
  }
  fs.copyFileSync(src, dest);
  console.log(`[sync-product-catalog] wrote ${path.relative(root, dest)} from blog`);
}
