import { defineMiddleware } from 'astro:middleware';
import { resolveCheckoutPathRedirect } from './config/checkout-redirects.mjs';
import { resolveSitePathRedirect } from './i18n/request-redirects';
import { parseLocalizedPath } from './i18n/paths';
import { checkoutRedirectUrl } from './utils/checkoutRedirect';

export const onRequest = defineMiddleware((context, next) => {
  const requestUrl = new URL(context.request.url);
  const { pathname } = requestUrl;
  const { path: pathWithoutLocale } = parseLocalizedPath(pathname);

  const checkout =
    resolveCheckoutPathRedirect(pathname) ?? resolveCheckoutPathRedirect(pathWithoutLocale);
  if (checkout) {
    return context.redirect(checkoutRedirectUrl(checkout, requestUrl), 302);
  }

  const siteRedirect = resolveSitePathRedirect(pathname);
  if (siteRedirect) {
    return context.redirect(siteRedirect, 301);
  }

  return next();
});
