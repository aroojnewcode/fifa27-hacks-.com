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
| **Deploy command** | `npm run deploy` (preferred) or `npx wrangler deploy` |

If the dashboard only runs `npx wrangler deploy`, `postinstall` builds `dist/` on Cloudflare’s `buildhome` CI so Wrangler can upload assets. Prefer **`npm run deploy`** so build and deploy stay in one explicit step.
