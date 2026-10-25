import type { SitemapItem } from '@astrojs/sitemap';
import { DEFAULT_LOCALE } from '../i18n/locales';
import { parseLocalizedPath } from '../i18n/paths';
import { blogPosts } from '../data/blog';
import { localeHasFullBlogTranslation } from '../data/blog/locale';
import { parseBlogDate } from '../utils/schema';

const blogLastmod = new Map(
  blogPosts.map((post) => [`/blog/${post.slug}/`, parseBlogDate(post.date)] as const),
);

function pathnameFromUrl(url: string): string {
  const path = new URL(url).pathname;
  return path.endsWith('/') ? path : `${path}/`;
}

/** Path without locale prefix for routing rules. */
function sitePath(pathname: string): string {
  const { path } = parseLocalizedPath(pathname);
  return path;
}

function localeFromPathname(pathname: string): string {
  return parseLocalizedPath(pathname).locale;
}

export function sitemapSerialize(item: SitemapItem): SitemapItem | undefined {
  const pathname = pathnameFromUrl(item.url);
  const path = sitePath(pathname);
  const locale = localeFromPathname(pathname);

  if (path.includes('/404') || path.startsWith('/go/') || path.includes('/rss.xml')) {
    return undefined;
  }

  // Non-EN blog posts only when generated translation includes full body.
  if (path.startsWith('/blog/') && path !== '/blog/' && locale !== DEFAULT_LOCALE) {
    if (!localeHasFullBlogTranslation(locale)) return undefined;
  }

  delete item.lastmod;

  if (path === '/') {
    item.priority = 1;
    item.changefreq = 'weekly';
    return item;
  }

  if (path === '/blog/') {
    item.priority = 0.9;
    item.changefreq = 'weekly';
    return item;
  }

  if (path === '/forum/') {
    item.priority = 0.8;
    item.changefreq = 'daily';
    return item;
  }

  if (path.startsWith('/forum/')) {
    item.priority = 0.6;
    item.changefreq = 'weekly';
    return item;
  }

  if (path.startsWith('/blog/')) {
    item.priority = 0.7;
    item.changefreq = 'monthly';
    item.lastmod = blogLastmod.get(path);
    return item;
  }

  if (path.startsWith('/products/')) {
    item.priority = 0.8;
    item.changefreq = 'weekly';
    return item;
  }

  if (
    path === '/about/' ||
    path === '/support/' ||
    path === '/privacy/' ||
    path === '/terms/' ||
    path === '/faq/'
  ) {
    item.priority = 0.5;
    item.changefreq = 'yearly';
    return item;
  }

  item.priority = 0.6;
  item.changefreq = 'monthly';
  return item;
}
