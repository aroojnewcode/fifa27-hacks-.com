import { getLocaleContent } from '../../i18n/fullLocales';
import { DEFAULT_LOCALE } from '../../i18n/locales';
import { forumCategories, forumPosts, type ForumPost } from '../forum';

export function getForumCategoriesForLocale(locale: string) {
  if (locale === DEFAULT_LOCALE) return forumCategories;
  const cats = getLocaleContent(locale)?.forum?.categories;
  if (!cats?.length) return forumCategories;
  return forumCategories.map((c, i) => ({
    ...c,
    name: cats[i]?.name ?? c.name,
  }));
}

export function getForumPostsForLocale(locale: string): ForumPost[] {
  if (locale === DEFAULT_LOCALE) return forumPosts;
  const posts = getLocaleContent(locale)?.forum?.posts;
  if (!posts?.length) return forumPosts;
  const bySlug = new Map(posts.map((p) => [p.slug, p]));
  return forumPosts.map((p) => {
    const localized = bySlug.get(p.slug);
    return localized ? { ...p, ...localized } : p;
  });
}

export function getForumPostForLocale(slug: string, locale: string): ForumPost | undefined {
  return getForumPostsForLocale(locale).find((p) => p.slug === slug);
}
