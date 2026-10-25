/**
 * Generates src/i18n/generated/{locale}.json from English source (UI, blog, forum, FAQ, products).
 * Uses Google Translate (unofficial client=gtx). Run: npm run i18n:sync
 * Optional: npm run i18n:sync -- --locale de (single locale)
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');
const outDir = path.join(root, 'src/i18n/generated');

const LOCALE_TO_GOOGLE = {
  de: 'de',
  es: 'es',
  fr: 'fr',
  it: 'it',
  'pt-br': 'pt',
  ar: 'ar',
  nl: 'nl',
  tr: 'tr',
  pl: 'pl',
  pt: 'pt',
  id: 'id',
};

const SKIP_KEYS = new Set([
  'href',
  'domain',
  'discord',
  'slug',
  'image',
  'scrollTarget',
  'ctaPrimaryHref',
  'ctaSecondaryHref',
  'ctaHref',
  'icon',
  'variant',
  'bento',
  'num',
  'phase',
  'step',
  'categoryTone',
  'sourcePath',
  'sku',
  'id',
  'topic',
  'scopes',
]);

function shouldSkipKey(key, value) {
  if (SKIP_KEYS.has(key)) return true;
  if (typeof value === 'string') {
    if (value.startsWith('http') || value.startsWith('/') || value.startsWith('mailto:')) return true;
    if (value.includes('@') && value.includes('.')) return true;
    if (/^[a-z0-9_-]+$/i.test(value) && value.length < 24 && !value.includes(' ')) return true;
  }
  return false;
}

const cache = new Map();

async function translateText(text, targetLang, attempt = 1) {
  const key = `${targetLang}:${text}`;
  if (cache.has(key)) return cache.get(key);
  const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=${targetLang}&dt=t&q=${encodeURIComponent(text)}`;
  const res = await fetch(url);
  if (!res.ok) {
    if (res.status >= 500 && attempt < 4) {
      await new Promise((r) => setTimeout(r, 1500 * attempt));
      return translateText(text, targetLang, attempt + 1);
    }
    throw new Error(`Translate failed ${res.status} for ${text.slice(0, 40)}…`);
  }
  const data = await res.json();
  const out = data[0].map((part) => part[0]).join('');
  cache.set(key, out);
  await new Promise((r) => setTimeout(r, 80));
  return out;
}

async function translateValue(value, targetLang, key = '') {
  if (typeof value === 'string') {
    if (shouldSkipKey(key, value)) return value;
    if (!value.trim()) return value;
    return translateText(value, targetLang);
  }
  if (Array.isArray(value)) {
    const out = [];
    for (let i = 0; i < value.length; i++) {
      out.push(await translateValue(value[i], targetLang, key));
    }
    return out;
  }
  if (value && typeof value === 'object') {
    const out = {};
    for (const [k, v] of Object.entries(value)) {
      if (shouldSkipKey(k, v)) {
        out[k] = v;
        continue;
      }
      out[k] = await translateValue(v, targetLang, k);
    }
    return out;
  }
  return value;
}

function extractProductCopy(pages) {
  const products = {};
  for (const p of pages) {
    products[p.slug] = {
      overview: p.overview,
      goodToKnow: p.goodToKnow,
      limitations: p.limitations,
      fullFeatures: p.fullFeatures,
      acquisition: {
        title: p.acquisition.title,
        steps: p.acquisition.steps.map((s) => ({ title: s.title, desc: s.desc })),
      },
      body: p.body,
      about: p.about,
      images: p.images.map((img) => ({
        caption: img.caption,
        captionDesc: img.captionDesc,
        alt: img.alt,
      })),
    };
  }
  return products;
}

function blogToRecord(posts) {
  const blog = {};
  for (const post of posts) {
    blog[post.slug] = {
      title: post.title,
      desc: post.desc,
      tag: post.tag,
      readTime: post.readTime,
      seoTitle: post.seoTitle ?? post.title,
      body: post.body,
    };
  }
  return blog;
}

async function main() {
  const onlyLocale = process.argv.includes('--locale')
    ? process.argv[process.argv.indexOf('--locale') + 1]
    : null;

  const enUrl = pathToFileURL(path.join(root, 'src/i18n/en.ts')).href;
  const blogUrl = pathToFileURL(path.join(root, 'src/data/blog/posts.ts')).href;
  const forumUrl = pathToFileURL(path.join(root, 'src/data/forum.ts')).href;
  const faqUrl = pathToFileURL(path.join(root, 'src/data/faq.ts')).href;
  const productsUrl = pathToFileURL(path.join(root, 'src/data/products.ts')).href;

  const { en } = await import(enUrl);
  const { blogPosts: rawBlogPosts } = await import(blogUrl);
  const { forumPosts, forumCategories } = await import(forumUrl);
  const { siteFaqs, SITE_FAQ_SECTION_COPY, CONTEXTUAL_FAQ_SECTION_COPY } = await import(faqUrl);
  const { getProductPages } = await import(productsUrl);

  const { DEFAULT_LOCALE } = await import(pathToFileURL(path.join(root, 'src/i18n/locales.ts')).href);
  const englishProducts = getProductPages(DEFAULT_LOCALE);

  const targets = onlyLocale ? [onlyLocale] : Object.keys(LOCALE_TO_GOOGLE);

  fs.mkdirSync(outDir, { recursive: true });

  for (const locale of targets) {
    const tl = LOCALE_TO_GOOGLE[locale];
    if (!tl) {
      console.warn(`Skip unknown locale ${locale}`);
      continue;
    }
    console.log(`\n=== Translating ${locale} (${tl}) ===`);

    const ui = await translateValue(
      {
        site: en.site,
        nav: en.nav,
        hero: en.hero,
        features: en.features,
        whyUs: en.whyUs,
        setup: en.setup,
        compatibility: en.compatibility,
        cheats: en.cheats,
        products: en.products,
        blog: en.blog,
        toolkit: en.toolkit,
        workflow: en.workflow,
        fieldNotes: en.fieldNotes,
        support: en.support,
        faq: en.faq,
        footer: en.footer,
        legalPages: en.legalPages,
        forum: en.forum,
        ui: en.ui,
      },
      tl,
    );

    const blog = await translateValue(blogToRecord(rawBlogPosts), tl);
    const forum = await translateValue(
      {
        categories: forumCategories.map((c) => ({ name: c.name })),
        posts: forumPosts,
      },
      tl,
    );
    const faqs = await translateValue(siteFaqs, tl);
    const faqSectionCopy = await translateValue(
      {
        full: SITE_FAQ_SECTION_COPY,
        contextual: CONTEXTUAL_FAQ_SECTION_COPY,
      },
      tl,
    );
    const products = await translateValue(extractProductCopy(englishProducts), tl);

    const bundle = { ui, blog, forum, faqs, faqSectionCopy, products };
    const outPath = path.join(outDir, `${locale}.json`);
    fs.writeFileSync(outPath, JSON.stringify(bundle, null, 2), 'utf8');
    console.log(`Wrote ${outPath}`);
  }

  console.log('\nDone. Restart dev server to load new translations.');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
