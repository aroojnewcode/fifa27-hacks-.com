/** Canonical blog card / OG cover — one PNG per slug under public/images/blog/. */
export function blogCoverPath(slug: string): string {
  return `/images/blog/${slug}.png`;
}
