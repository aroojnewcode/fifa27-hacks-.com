import { getTranslations } from '../../i18n/registry';
import { getLocaleContent } from '../../i18n/fullLocales';
import { DEFAULT_LOCALE } from '../../i18n/locales';
import { blogPosts } from '../blog';
import type { BlogPostFull } from './types';

export function localizeBlogPost(post: BlogPostFull, locale: string): BlogPostFull {
  if (locale === DEFAULT_LOCALE) return post;

  const generated = getLocaleContent(locale)?.blog?.[post.slug];
  const t = getTranslations(locale);
  const card = t.blog.items.find((i) => i.slug === post.slug);

  const title = generated?.title ?? card?.title ?? post.title;
  const desc = generated?.desc ?? card?.desc ?? post.desc;
  const tag = generated?.tag ?? card?.tag ?? post.tag;
  const readTime = generated?.readTime ?? card?.readTime ?? post.readTime;
  const body = generated?.body ?? post.body;

  return {
    ...post,
    title,
    desc,
    tag,
    readTime,
    body,
    seoTitle: generated?.seoTitle ?? title,
  };
}

export function getLocalizedBlogPost(slug: string, locale: string): BlogPostFull | undefined {
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return undefined;
  return localizeBlogPost(post, locale);
}

export function getBlogPostsForLocale(locale: string): BlogPostFull[] {
  return blogPosts.map((p) => localizeBlogPost(p, locale));
}

export function localeHasFullBlogTranslation(locale: string): boolean {
  if (locale === DEFAULT_LOCALE) return true;
  const blog = getLocaleContent(locale)?.blog;
  if (!blog) return false;
  return blogPosts.some((p) => Boolean(blog[p.slug]?.body?.length));
}
