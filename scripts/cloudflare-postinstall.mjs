/**
 * Cloudflare Workers Builds often run `npx wrangler deploy` without a separate build step.
 * When install runs on buildhome, produce dist/ so wrangler assets.directory exists.
 */
import { existsSync, rmSync } from 'node:fs';
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

const distDir = path.join('dist');
if (existsSync(distDir)) {
  console.log('[cloudflare] Removing cached dist/ so deploy matches this commit.');
  rmSync(distDir, { recursive: true, force: true });
}

console.log('[cloudflare] Building Astro site (dist/) for Wrangler static assets...');
execSync('npm run build', { stdio: 'inherit' });
