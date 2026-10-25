import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import { sitemapSerialize } from './src/config/sitemap.ts';
import { DEFAULT_LOCALE } from './src/i18n/locales.ts';
import { localePath } from './src/i18n/paths.ts';
const toDefaultLocale = (path) => localePath(path, DEFAULT_LOCALE);

export default defineConfig({
  site: 'https://fifa27hacks.com',
  trailingSlash: 'always',
  server: {
    port: 4321,
    host: true,
  },
  redirects: {
    '/cheats/': toDefaultLocale('/products/fifa-27-hacks/'),
    '/cheats/lite/': toDefaultLocale('/products/fifa-27-hacks/'),
    '/cheats/pro/': toDefaultLocale('/products/fifa-27-hacks/'),
    '/cheats/elite/': toDefaultLocale('/products/fifa-27-hacks/elite/'),
    '/cheats/compare/': toDefaultLocale('/blog/fifa-27-lite-vs-pro/'),
    '/products/dota-2-cheats/': toDefaultLocale('/products/fifa-27-hacks/'),
    '/products/dota-2-cheats/elite/': toDefaultLocale('/products/fifa-27-hacks/elite/'),
    '/products/dota-2-cheats/utilities/': toDefaultLocale('/products/fifa-27-hacks/utilities/'),
    '/contact/': toDefaultLocale('/support/'),
    '/products/fortnite-cheats/': toDefaultLocale('/products/fifa-27-hacks/'),
    '/products/fortnite-cheats/elite/': toDefaultLocale('/products/fifa-27-hacks/elite/'),
    '/products/fortnite-cheats/utilities/': toDefaultLocale('/products/fifa-27-hacks/utilities/'),
    '/go/fortnite/': '/go/fifa-27/',
    '/faq/': toDefaultLocale('/faq/'),
    '/products/fifa-27-hacks/': toDefaultLocale('/products/fifa-27-hacks/'),
    '/products/fifa-27-hacks/elite/': toDefaultLocale('/products/fifa-27-hacks/elite/'),
    '/products/fifa-27-hacks/lite/': toDefaultLocale('/products/fifa-27-hacks/lite/'),
    '/products/fifa-27-hacks/pro/': toDefaultLocale('/products/fifa-27-hacks/pro/'),
    '/products/fifa-27-hacks/hwid-spoofer/': toDefaultLocale('/products/fifa-27-hacks/hwid-spoofer/'),
    '/products/fifa-27-hacks/ugc/': toDefaultLocale('/products/fifa-27-hacks/ugc/'),
    '/products/fifa-27-hacks/unlock-all/': toDefaultLocale('/products/fifa-27-hacks/unlock-all/'),
    '/products/fifa-27-hacks/utilities/': toDefaultLocale('/products/fifa-27-hacks/utilities/'),
    '/blog/': toDefaultLocale('/blog/'),
    '/forum/': toDefaultLocale('/forum/'),
    '/support/': toDefaultLocale('/support/'),
    '/about/': toDefaultLocale('/about/'),
    '/privacy/': toDefaultLocale('/privacy/'),
    '/terms/': toDefaultLocale('/terms/'),
  },
  compressHTML: true,
  prefetch: {
    prefetchAll: false,
    defaultStrategy: 'hover',
  },
  devToolbar: {
    enabled: false,
  },
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/404') && !page.includes('/go/'),
      serialize: sitemapSerialize,
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
    build: {
      cssMinify: true,
      minify: 'esbuild',
      target: 'es2022',
      modulePreload: { polyfill: false },
    },
  },
  build: {
    inlineStylesheets: 'always',
  },
});
