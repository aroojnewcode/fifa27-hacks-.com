import type { FaqItem } from '../i18n/types';
import { getActiveLocale } from '../i18n/active';
import { getLocaleDefinition, isValidLocale } from '../i18n/locales';
import { localePath } from '../i18n/paths';
import { SUPPORT_EMAIL } from '../config/site';
import { SITE_ORIGIN, absoluteAssetUrl, canonicalUrl, getOrganizationSameAs } from '../config/seo';
import { getProductPlans } from '../data/productPricing';

export interface BreadcrumbItem {
  name: string;
  path: string;
}

function schemaInLanguage(): string {
  return getLocaleDefinition(getActiveLocale()).ogLocale.replace('_', '-');
}

function localizedCanonicalPath(path: string): string {
  const first = path.split('/').filter(Boolean)[0];
  if (first && isValidLocale(first)) {
    let normalized = path || '/';
    if (!normalized.startsWith('/')) normalized = `/${normalized}`;
    if (normalized !== '/' && !normalized.endsWith('/')) normalized = `${normalized}/`;
    return normalized;
  }
  return localePath(path, getActiveLocale());
}

function priceValidUntilDate(): string {
  const until = new Date();
  until.setFullYear(until.getFullYear() + 1);
  return until.toISOString().slice(0, 10);
}

export function breadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: canonicalUrl(localizedCanonicalPath(item.path)),
    })),
  };
}

export function websiteSchema() {
  const homeUrl = canonicalUrl(localePath('/', getActiveLocale()));
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'EA FC 27 Hacks & Cheats',
    url: homeUrl,
    inLanguage: schemaInLanguage(),
    description:
      'EA FC 27 hacks with auto green, pitch overlay, FUT snipe assist, Icon Unlocker and Rivals-safe tiers for PC.',
  };
}

export function organizationSchema() {
  const sameAs = getOrganizationSameAs();
  const homeUrl = canonicalUrl(localePath('/', getActiveLocale()));

  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'EA FC 27 Hacks & Cheats',
    url: homeUrl,
    logo: `${SITE_ORIGIN}/logo.svg`,
    email: SUPPORT_EMAIL,
    ...(sameAs.length > 0 ? { sameAs } : {}),
    contactPoint: [
      {
        '@type': 'ContactPoint',
        contactType: 'customer support',
        email: SUPPORT_EMAIL,
        url: canonicalUrl(localizedCanonicalPath('/support/')),
        availableLanguage: ['English'],
        areaServed: 'Worldwide',
      },
    ],
  };
}

export function collectionPageSchema(input: { name: string; description: string; url: string }) {
  const homeUrl = canonicalUrl(localePath('/', getActiveLocale()));
  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: input.name,
    description: input.description,
    url: canonicalUrl(localizedCanonicalPath(input.url)),
    inLanguage: schemaInLanguage(),
    isPartOf: {
      '@type': 'WebSite',
      name: 'EA FC 27 Hacks & Cheats',
      url: homeUrl,
    },
  };
}

export function webPageSchema(input: { name: string; description: string; url: string }) {
  const homeUrl = canonicalUrl(localePath('/', getActiveLocale()));
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: input.name,
    description: input.description,
    url: canonicalUrl(localizedCanonicalPath(input.url)),
    inLanguage: schemaInLanguage(),
    isPartOf: {
      '@type': 'WebSite',
      name: 'EA FC 27 Hacks & Cheats',
      url: homeUrl,
    },
  };
}

export function faqPageSchema(items: FaqItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a,
      },
    })),
  };
}

export function itemListSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      url: canonicalUrl(localizedCanonicalPath(item.url)),
    })),
  };
}

export function discussionForumPostingSchema(input: {
  name: string;
  text: string;
  url: string;
  author: string;
  comments: number;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'DiscussionForumPosting',
    headline: input.name,
    articleBody: input.text,
    url: canonicalUrl(localizedCanonicalPath(input.url)),
    author: { '@type': 'Person', name: input.author },
    commentCount: input.comments,
    isPartOf: {
      '@type': 'CollectionPage',
      name: 'EA FC 27 Hacks & Cheats Forum',
      url: canonicalUrl(localizedCanonicalPath('/forum/')),
    },
  };
}

function offerUrl(path: string): string {
  if (path.startsWith('http://') || path.startsWith('https://')) return path;
  return canonicalUrl(localizedCanonicalPath(path));
}

export function productSchema(input: {
  name: string;
  description: string;
  url: string;
  offerUrl: string;
  image?: string;
  sku?: string;
  productSlug?: string;
  priceUsd?: number;
}) {
  const plans = input.productSlug ? getProductPlans(input.productSlug) : [];
  const lowestPrice =
    input.priceUsd ??
    (plans.length > 0
      ? Math.min(...plans.map((plan) => plan.priceUsd))
      : undefined);

  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: input.name,
    description: input.description,
    sku: input.sku ?? input.url.replace(/\//g, '-'),
    brand: {
      '@type': 'Brand',
      name: 'EA FC 27 Hacks & Cheats',
    },
    ...(input.image ? { image: absoluteAssetUrl(input.image) } : {}),
    offers: {
      '@type': 'Offer',
      url: offerUrl(input.offerUrl),
      priceCurrency: 'USD',
      ...(lowestPrice !== undefined
        ? { price: lowestPrice.toFixed(2), priceValidUntil: priceValidUntilDate() }
        : {}),
      availability: 'https://schema.org/InStock',
      seller: {
        '@type': 'Organization',
        name: 'EA FC 27 Hacks & Cheats',
      },
    },
  };
}

/** @deprecated Prefer productSchema for product/cheat detail pages. */
export function softwareApplicationSchema(input: {
  name: string;
  description: string;
  url: string;
  image?: string;
  offerUrl?: string;
  productSlug?: string;
}) {
  return productSchema({
    name: input.name,
    description: input.description,
    url: input.url,
    offerUrl: input.offerUrl ?? input.url,
    image: input.image,
    productSlug: input.productSlug,
  });
}

export function articleSchema(input: {
  name: string;
  description: string;
  url: string;
  image: string;
  datePublished: string;
  dateModified?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: input.name,
    description: input.description,
    url: canonicalUrl(localizedCanonicalPath(input.url)),
    image: absoluteAssetUrl(input.image),
    datePublished: input.datePublished,
    dateModified: input.dateModified ?? input.datePublished,
    inLanguage: schemaInLanguage(),
    author: {
      '@type': 'Organization',
      name: 'EA FC 27 Hacks & Cheats',
    },
    publisher: {
      '@type': 'Organization',
      name: 'EA FC 27 Hacks & Cheats',
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_ORIGIN}/logo.svg`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': canonicalUrl(localizedCanonicalPath(input.url)),
    },
  };
}

export function parseBlogDate(date: string): string {
  const parsed = Date.parse(date);
  if (Number.isNaN(parsed)) return new Date().toISOString().slice(0, 10);
  return new Date(parsed).toISOString().slice(0, 10);
}
