# Lighthouse baselines (mobile lab)

Run after `npm run build && npm run preview`:

```bash
npx lighthouse http://localhost:4321/en/ --only-categories=performance,accessibility,best-practices,seo --form-factor=mobile --quiet
```

## Targets (Oct 2026 preview, post SEO/a11y/perf pass)

| URL | Perf | A11y | BP | SEO |
| --- | ---: | ---: | ---: | ---: |
| `/en/` | ~68 | ~94 | 100 | 100 |
| `/en/products/fifa-27-hacks/elite/` | ~84 | ~92 | 100 | 100 |
| `/en/blog/` | ~90 | ~96 | 100 | 100 |
| `/en/blog/fifa-27-hacks-features-guide/` | ~72 | ~96 | 100 | 100 |
| `/en/faq/` | ~94 | ~91 | 100 | 100 |
| `/en/forum/` | ~88 | ~95 | 100 | 100 |

Changes in this pass:

- **SEO:** FC 27 blog SERP titles (`seoTitles.ts`), legal `PAGE_SEO` (`/about/`, `/privacy/`, `/terms/`), blog body keyword alignment.
- **A11y:** Forum vote `role="group"`, screen-reader labels, checkout muted text contrast (`text-foreground/85`).
- **Perf:** Products carousel defers init (`autoInit` off + idle/viewport boot), Google Fonts `display=swap`.

SEO and Best Practices remain at **100** on indexed EN routes. Home performance is still limited by hero imagery and slider JS; carousel work is deferred below the fold.

Locale-less paths (`/blog/{slug}/`) use static redirect stubs plus `public/_redirects` 301 rules on deploy hosts (Netlify/Cloudflare).
