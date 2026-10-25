/** Forum category id for filters and data-category (matches index + sidebar). */
export function forumCategoryKey(name: string): string {
  return name.toLowerCase().replace(/[^a-z0-9]/g, '');
}

export function forumPostPath(slug: string): string {
  return `/forum/${slug}/`;
}
