import { DEFAULT_LOCALE } from '../i18n/locales';
import { parseLocalizedPath } from '../i18n/paths';
import { getTranslations } from '../i18n/registry';
import { LOCALE_STRINGS } from '../i18n/overrides/strings';
import { DISCORD_URL, SITE_URL, TITLE_PREFIX } from './site';
import { getPageSeoEntry, type PageSeoEntry } from './pageSeo';
import { getProductPage } from '../data/products';
import type { BlogPostFull } from '../data/blog/types';

export const SITE_ORIGIN = SITE_URL;
export const RSS_FEED_PATH = '/rss.xml';
export const TWITTER_SITE = '@fifa27hacks';
export const TWITTER_CREATOR = '@fifa27hacks';

export const DEFAULT_OG_IMAGE = '/images/gameplay/fifa-27-pitch-overlay.png';
export const DEFAULT_OG_IMAGE_WIDTH = 1200;
export const DEFAULT_OG_IMAGE_HEIGHT = 630;

export const GA_MEASUREMENT_ID =
  typeof import.meta.env.PUBLIC_GA_MEASUREMENT_ID === 'string'
    ? import.meta.env.PUBLIC_GA_MEASUREMENT_ID.trim()
    : '';

const CHEAT_META_PREFIX = 'EA FC 27 hacks guide — ';

export function canonicalUrl(pathname: string): string {
  let path = pathname || '/';
  if (!path.startsWith('/')) path = `/${path}`;
  if (path !== '/' && !path.endsWith('/')) path = `${path}/`;
  return `${SITE_ORIGIN}${path}`;
}

export function absoluteAssetUrl(path: string): string {
  if (path.startsWith('http://') || path.startsWith('https://')) return path;
  const normalized = path.startsWith('/') ? path : `/${path}`;
  return `${SITE_ORIGIN}${normalized}`;
}

export function getOrganizationSameAs(): string[] {
  const links = [DISCORD_URL];
  return links.filter(Boolean);
}

export function pageTitle(title: string): string {
  const trimmed = title.trim();
  if (!trimmed) return TITLE_PREFIX;
  if (trimmed.includes('|')) return trimmed;
  return `${trimmed} | ${TITLE_PREFIX}`;
}

export function cheatMetaDescription(text: string): string {
  const trimmed = text.trim();
  if (!trimmed) return TITLE_PREFIX;
  const lower = trimmed.toLowerCase();
  if (lower.startsWith('ea fc 27') || lower.startsWith('buy ')) return trimmed;
  return `${CHEAT_META_PREFIX}${trimmed}`;
}

export function blogPostDocumentTitle(post: Pick<BlogPostFull, 'seoTitle' | 'title'>): string {
  return post.seoTitle?.trim() || post.title;
}

function localizedHubPageSeo(path: string, locale: string): PageSeoEntry | undefined {
  const s = LOCALE_STRINGS[locale];
  if (!s) return undefined;

  switch (path) {
    case '/':
      return s.pageSeoHome;
    case '/products/fifa-27-hacks/':
      return s.pageSeoProducts;
    case '/blog/':
      return s.pageSeoBlog;
    case '/about/':
      return s.legalAbout;
    case '/privacy/':
      return s.legalPrivacy;
    case '/terms/':
      return s.legalTerms;
    case '/support/':
      return s.legalSupport;
    default:
      return undefined;
  }
}

function productSlugFromPath(path: string): string | undefined {
  const match = path.match(/^\/products\/fifa-27-hacks\/([^/]+)\/$/);
  if (!match) return undefined;
  const slug = match[1];
  if (!slug || slug === 'utilities') return undefined;
  return slug;
}

export function resolvePageSeo(pathname: string): { title: string; description: string } {
  const { locale, path } = parseLocalizedPath(pathname);

  if (locale === DEFAULT_LOCALE) {
    const pageEntry = getPageSeoEntry(path);
    if (pageEntry) return pageEntry;
  } else {
    const localized = localizedHubPageSeo(path, locale);
    if (localized) {
      return {
        title: pageTitle(localized.title),
        description: localized.description,
      };
    }
  }

  const productSlug = productSlugFromPath(path);
  if (productSlug) {
    const enSeo = locale === DEFAULT_LOCALE ? getPageSeoEntry(path) : undefined;
    if (enSeo) return enSeo;

    const product = getProductPage(productSlug, locale);
    if (product) {
      return {
        title: pageTitle(product.title),
        description: cheatMetaDescription(product.desc),
      };
    }
  }

  const t = getTranslations(locale);

  switch (path) {
    case '/':
      return { title: t.site.title, description: t.site.description };
    case '/products/fifa-27-hacks/':
      return {
        title: pageTitle(t.products.title),
        description: t.products.subtitle,
      };
    case '/products/fifa-27-hacks/utilities/':
      return {
        title: pageTitle('EA FC 27 hack utilities'),
        description: t.products.subtitle,
      };
    case '/blog/':
      return {
        title: t.blog.latestTitle || t.blog.title,
        description: t.blog.latestSubtitle || t.blog.subtitle,
      };
    case '/forum/':
      return {
        title: pageTitle(t.forum.title),
        description: t.forum.subtitle,
      };
    case '/faq/':
      return {
        title: pageTitle(t.faq.title),
        description: t.faq.subtitle,
      };
    case '/support/':
      return {
        title: t.legalPages.support.title,
        description: t.legalPages.support.description,
      };
    case '/about/':
      return {
        title: t.legalPages.about.title,
        description: t.legalPages.about.description,
      };
    case '/privacy/':
      return {
        title: t.legalPages.privacy.title,
        description: t.legalPages.privacy.description,
      };
    case '/terms/':
      return {
        title: t.legalPages.terms.title,
        description: t.legalPages.terms.description,
      };
    default:
      return { title: t.site.title, description: t.site.description };
  }
}
