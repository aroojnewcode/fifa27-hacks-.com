import { en } from '../en';
import type { DeepPartial } from '../merge';
import type { Translations } from '../types';
import { LOCALE_STRINGS } from './strings';
export function buildLocaleOverrides(locale: string): DeepPartial<Translations> {
  const s = LOCALE_STRINGS[locale];
  if (!s) return {};

  return {
    site: {
      ...en.site,
      name: s.site.name,
      title: s.site.title,
      description: s.site.description,
    },
    nav: en.nav.map((link, i) => ({ ...link, label: s.nav[i] ?? link.label })),
    hero: {
      ...en.hero,
      status: s.hero.status,
      eyebrow: s.hero.eyebrow,
      titleLine1: s.hero.titleLine1,
      titleLine2: s.hero.titleLine2,
      subtitle: s.hero.subtitle,
      ctaPrimary: s.hero.ctaPrimary,
      ctaDiscord: s.hero.ctaDiscord,
      modesLabel: s.hero.modesLabel,
      modes: [...s.hero.modes],
      metrics: [...s.hero.metrics],
    },
    features: {
      eyebrow: s.features.eyebrow,
      title: s.features.title,
      subtitle: s.features.subtitle,
      items: en.features.items.map((item, i) => {
        const f = s.features.items[i];
        if (!f) return item;
        return { ...item, ...f, bullets: [...f.bullets], tags: [...f.tags] };
      }),
    },
    whyUs: {
      ...en.whyUs,
      usLabel: s.site.name,
    },
    products: {
      ...en.products,
      title: s.pageSeoProducts.title.split('|')[0]?.trim() ?? en.products.title,
      subtitle: s.pageSeoProducts.description,
    },
    cheats: {
      ...en.cheats,
      title: s.pageSeoProducts.title.split('|')[0]?.trim() ?? en.cheats.title,
      subtitle: s.pageSeoProducts.description,
    },
    blog: {
      ...en.blog,
      title: s.pageSeoBlog.title,
      subtitle: s.pageSeoBlog.description,
      latestTitle: s.pageSeoBlog.title,
      latestSubtitle: s.pageSeoBlog.description,
      eyebrow: s.pageSeoBlog.title.split('|')[0]?.trim() ?? en.blog.eyebrow,
    },
    faq: {
      eyebrow: s.faq.eyebrow,
      title: s.faq.title,
      subtitle: s.faq.subtitle,
      items: en.faq.items.map((item, i) => ({ ...item, ...(s.faq.items[i] ?? {}) })),
    },
    footer: {
      ...en.footer,
      tagline: s.footer.tagline,
      explore: s.footer.explore,
      support: s.footer.support,
      legal: s.footer.legal,
      privacy: s.footer.privacy,
      terms: s.footer.terms,
      about: s.footer.about,
    },
    legalPages: {
      about: { ...en.legalPages.about, title: s.legalAbout.title, description: s.legalAbout.description },
      privacy: { ...en.legalPages.privacy, title: s.legalPrivacy.title, description: s.legalPrivacy.description },
      terms: { ...en.legalPages.terms, title: s.legalTerms.title, description: s.legalTerms.description },
      support: { ...en.legalPages.support, title: s.legalSupport.title, description: s.legalSupport.description },
    },
    ui: { ...en.ui, ...s.ui },
  };
}
