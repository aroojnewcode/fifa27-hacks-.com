# fifa27hacks.com — EA FC 27 Hacks & Cheats

Astro site for **EA FC 27 Hacks & Cheats** at [fifa27hacks.com](https://fifa27hacks.com).

```bash
npm install
npm run dev
npm run build    # output → dist/
npm run deploy   # build + wrangler (Cloudflare Workers static assets)
```

## Cloudflare deploy

`wrangler.toml` serves the Astro build from [`dist/`](dist/). The repo does **not** commit `dist/`; CI must build first.

| Setting | Value |
|--------|--------|
| **Build command** (optional if deploy runs build) | `npm ci` |
| **Deploy command** | `npm run deploy` |

Do **not** use `npx wrangler deploy` alone — it fails with “Could not detect a directory containing static files” when `dist/` is missing.
