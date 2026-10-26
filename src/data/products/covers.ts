/** Blog PNG basename (no extension) used when seeding public/images/products/{slug}.png */
export const productCatalogBlogSource: Record<string, string> = {
  'hwid-spoofer': 'fifa-27-hwid-spoofer-after-ban',
  'unlock-all': 'fifa-27-icon-unlocker-guide',
  ugc: 'how-to-buy-fifa-27-hacks-2026',
};

/** Product catalog card art — WebP variants generated from public/images/products/{slug}.png */
export function productCatalogCoverPath(slug: string): string {
  return `/images/products/${slug}.png`;
}
