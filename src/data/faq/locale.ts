import { getLocaleContent } from '../../i18n/fullLocales';
import { getTranslations } from '../../i18n/registry';
import { DEFAULT_LOCALE } from '../../i18n/locales';
import {
  CONTEXTUAL_FAQ_SECTION_COPY,
  SITE_FAQ_SECTION_COPY,
  getAllFaqs,
  getLandingFaqs,
  type SiteFaqItem,
} from '../faq';

export function getFaqsForLocale(locale: string): SiteFaqItem[] {
  if (locale === DEFAULT_LOCALE) return getAllFaqs();
  const generated = getLocaleContent(locale)?.faqs;
  if (generated?.length) return generated;
  return getAllFaqs();
}

export function getLandingFaqsForLocale(locale: string): SiteFaqItem[] {
  if (locale === DEFAULT_LOCALE) return getLandingFaqs();
  const all = getFaqsForLocale(locale);
  return all.filter((f) =>
    ['status', 'after-buy', 'ban-risk', 'platforms', 'license-move', 'products-page'].includes(f.id),
  );
}

export function getFaqSectionCopy(locale: string, variant: 'full' | 'contextual') {
  const generated = getLocaleContent(locale)?.faqSectionCopy;
  if (variant === 'full') {
    return generated?.full ?? {
      ...SITE_FAQ_SECTION_COPY,
      title: getTranslations(locale).faq.title,
      subtitle: getTranslations(locale).faq.subtitle,
    };
  }
  return (
    generated?.contextual ?? {
      ...CONTEXTUAL_FAQ_SECTION_COPY,
      title: getTranslations(locale).faq.title,
      subtitle: getTranslations(locale).faq.subtitle,
    }
  );
}
