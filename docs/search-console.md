# Search Console workflow (fifa27hacks.com)

If `src/config/seo.ts` or `src/config/pageSeo.ts` are empty after a failed build (disk full), restore from git:

`git checkout HEAD -- src/config/seo.ts src/config/pageSeo.ts`

Then re-apply lite/pro `PAGE_SEO` entries and elite `$150 lifetime` pricing in `pageSeo.ts`.

You verify the domain at your DNS provider—no HTML meta tags in the repo.

## Setup (once)

1. Open [Google Search Console](https://search.google.com/search-console) and add the **domain** property for `fifa27hacks.com` if it is not already there.
2. Under **Sitemaps**, submit the index first (required):
   - `https://fifa27hacks.com/sitemap.xml`
3. Optional — submit child sitemaps too (same URLs, clearer GSC status per section):
   - `https://fifa27hacks.com/sitemap-pages.xml`
   - `https://fifa27hacks.com/sitemap-products.xml`
   - `https://fifa27hacks.com/sitemap-blog.xml`
   - `https://fifa27hacks.com/sitemap-forum.xml`
4. Repeat in [Bing Webmaster Tools](https://www.bing.com/webmasters) if you use Bing.

## Monthly tune (15 minutes)

1. Search Console → **Performance** → **Search results**.
2. Sort by **Impressions** (last 28 days).
3. For each query that already maps to a page on your site, open the matching path in [`src/config/pageSeo.ts`](../src/config/pageSeo.ts).
4. Adjust `title` and `description` so the primary query appears naturally in the title (keep under ~60 characters for the title where possible).
5. Deploy. Allow 1–2 weeks before judging click-through changes.

## Path cheat sheet

| Common query intent | Edit path in `pageSeo.ts` |
| ------------------- | ------------------------- |
| EA FC 27 hacks (broad) | `/` |
| lite / pro / elite | `/en/products/fifa-27-hacks/lite/`, `/pro/`, `/elite/` |
| auto green, pitch overlay | `/en/products/fifa-27-hacks/pro/`, blog guides |
| hwid, icon unlocker | `/en/products/fifa-27-hacks/utilities/` |
| purchase / refund | `/en/terms/`, `/en/support/` |

Product and blog article pages still use their own titles from content; add entries to `PAGE_SEO` only when you want a fixed override for a specific pathname.

## Blog hreflang policy

- **English:** `/en/blog/{slug}/` is always indexed. SERP titles live in [`src/data/blog/seoTitles.ts`](../src/data/blog/seoTitles.ts); on-page H1 stays the long `post.title`.
- **Other locales:** A blog article is indexed only when `src/i18n/generated/{locale}.json` includes a full translated `body` for that slug (see `localeHasFullBlogTranslation` in [`src/data/blog/locale.ts`](../src/data/blog/locale.ts)). Until then, non-EN article URLs stay `noindex` and are omitted from the sitemap.
- **Hreflang on articles:** Reciprocal alternates are emitted when a localized body exists; otherwise English articles use `en` only. Blog **hub** pages (`/de/blog/`, etc.) keep full locale alternates.

After deploy, URL-inspect `/en/blog/…` for indexability. For a locale with completed `i18n:sync` output, inspect `/de/blog/{slug}/` only when that slug has generated body content.
