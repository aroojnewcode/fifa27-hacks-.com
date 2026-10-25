/**
 * Cloudflare Workers Builds often run `npx wrangler deploy` without a separate build step.
 * When install runs on buildhome, produce dist/ so wrangler assets.directory exists.
 */
import { existsSync } from 'node:fs';
import { execSync } from 'node:child_process';
import path from 'node:path';

function isCloudflareWorkersCi() {
  if (process.env.SKIP_CF_BUILD === '1') return false;
  const cwd = process.cwd();
  if (cwd.includes('buildhome')) return true;
  if (process.env.CF_BUILD_ID || process.env.WORKERS_CI === '1') return true;
  return false;
}

if (!isCloudflareWorkersCi()) {
  process.exit(0);
}

const distIndex = path.join('dist', 'en', 'index.html');
if (existsSync(distIndex)) {
  console.log('[cloudflare] dist/ present; skipping postinstall build.');
  process.exit(0);
}

console.log('[cloudflare] Building Astro site (dist/) for Wrangler static assets...');
execSync('npm run build', { stdio: 'inherit' });
