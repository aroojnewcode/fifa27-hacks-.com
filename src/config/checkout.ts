import { CHECKOUT_URLS, LEVO_FC27_CHECKOUT } from './checkout-redirects.mjs';

export { LEVO_FC27_CHECKOUT };

/** Levo affiliate checkout destinations (also used on buy / access CTAs). */
export const CHECKOUT = CHECKOUT_URLS;

export type CheckoutProduct = keyof typeof CHECKOUT;

/** URL slug for /go/[slug]/ checkout redirect pages. */
export const CHECKOUT_SLUGS: Record<CheckoutProduct, string> = {
  fifa27: 'fifa-27',
  skinChanger: 'skin-changer',
  hwidSpoofer: 'hwid-spoofer',
  ugc: 'ugc',
};

export const CHECKOUT_SLUG_TO_PRODUCT = Object.fromEntries(
  Object.entries(CHECKOUT_SLUGS).map(([product, slug]) => [slug, product as CheckoutProduct]),
) as Record<string, CheckoutProduct>;

/** Affiliate checkout URL for buy / access CTAs (Levo FC 27). */
export function checkoutPath(product: CheckoutProduct = 'fifa27'): string {
  return CHECKOUT[product];
}

/** Internal /go/ path (middleware, static redirects, legacy links). */
export function checkoutGoPath(product: CheckoutProduct = 'fifa27'): string {
  return `/go/${CHECKOUT_SLUGS[product]}/`;
}

/** Default product checkout redirect (replaces legacy Discord CTAs). */
export const PRIMARY_CHECKOUT_PATH = checkoutPath('fifa27');

/** Map internal product slugs to checkout redirect paths. */
export function checkoutForSlug(slug: string): string {
  switch (slug) {
    case 'unlock-all':
      return checkoutPath('skinChanger');
    case 'hwid-spoofer':
      return checkoutPath('hwidSpoofer');
    case 'ugc':
    case 'account-recovery':
      return checkoutPath('ugc');
    case 'lite':
    case 'pro':
    case 'elite':
    default:
      return checkoutPath('fifa27');
  }
}

/** Resolve blog CTA or legacy href values to internal checkout paths. */
export function resolveCheckoutHref(href: string): string {
  if (href.startsWith('/go/')) {
    const slug = href.replace(/^\/go\//, '').replace(/\/$/, '').split('?')[0] ?? '';
    const product = CHECKOUT_SLUG_TO_PRODUCT[slug];
    if (product) return CHECKOUT[product];
    return LEVO_FC27_CHECKOUT;
  }

  if (!href.startsWith('http')) {
    return href.startsWith('/') ? href : `/${href}`;
  }

  for (const [product, url] of Object.entries(CHECKOUT) as [CheckoutProduct, string][]) {
    if (href === url || href.startsWith(`${url}?`) || href.startsWith(`${url}/`)) {
      return checkoutPath(product);
    }
  }

  // Legacy / encoded product paths → internal checkout
  if (href.includes('%2Fproducts%2Fcloud-dma') || href.includes('/products/cloud-dma')) {
    return checkoutPath('fifa27');
  }
  if (href.includes('%2Fproducts%2Fskin-changer') || href.includes('/products/skin-changer')) {
    return checkoutPath('skinChanger');
  }
  if (href.includes('%2Fproducts%2Fhwid-spoofer') || href.includes('/products/hwid-spoofer')) {
    return checkoutPath('hwidSpoofer');
  }
  if (href.includes('%2Fproducts%2Fugc') || href.includes('/products/ugc')) {
    return checkoutPath('ugc');
  }
  if (href.includes('%2Fproducts%2Ffifa-27') || href.includes('/products/fifa-27')) {
    return checkoutPath('fifa27');
  }
  if (
    href.includes('levocheats.com') ||
    href.includes('%2Ffc-27-cheats') ||
    href.includes('/fc-27-cheats')
  ) {
    return checkoutPath('fifa27');
  }

  return href;
}
