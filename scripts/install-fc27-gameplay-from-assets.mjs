/**
 * Install EA FC 27 cheat screenshots from project assets/ into public/images/gameplay.
 * Run: node scripts/install-fc27-gameplay-from-assets.mjs
 */
import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const root = path.resolve('.');

const SOURCES = {
  mciLiv: 'c__Users_DELL_7280_AppData_Roaming_Cursor_User_workspaceStorage_e8201b72bc32e20f125a52d04245f0a7_images_image-b7ed20bd-5aa1-4ff3-bfb1-836b3aa922bb.png',
  barRma: 'c__Users_DELL_7280_AppData_Roaming_Cursor_User_workspaceStorage_e8201b72bc32e20f125a52d04245f0a7_images_image-0b56f1a3-601c-4230-810f-a1d3d67ccba6.png',
  viniDias: 'c__Users_DELL_7280_AppData_Roaming_Cursor_User_workspaceStorage_e8201b72bc32e20f125a52d04245f0a7_images_image-96970eef-97df-4123-b316-211a97aee10e.png',
  viniRudiger: 'c__Users_DELL_7280_AppData_Roaming_Cursor_User_workspaceStorage_e8201b72bc32e20f125a52d04245f0a7_images_image-aaa62d4b-32c3-402c-be85-dd51b54a1f38.png',
  mciLiv2: 'c__Users_DELL_7280_AppData_Roaming_Cursor_User_workspaceStorage_e8201b72bc32e20f125a52d04245f0a7_images_image-b708713d-5759-4ef6-957d-3ca3d99f2c18.jpg',
  rmaBar: 'c__Users_DELL_7280_AppData_Roaming_Cursor_User_workspaceStorage_e8201b72bc32e20f125a52d04245f0a7_images_image-082be160-75b0-49a8-90a0-29ffc48bcf9d.jpg',
};

function resolveAssetsDir() {
  const local = path.join(root, 'assets');
  const probe = path.join(local, SOURCES.mciLiv);
  if (fs.existsSync(probe)) return local;
  const cursor = path.join(
    process.env.USERPROFILE || '',
    '.cursor',
    'projects',
    'c-Users-DELL-7280-Documents-fifa-27',
    'assets',
  );
  if (fs.existsSync(path.join(cursor, SOURCES.mciLiv))) return cursor;
  return local;
}

const assetsDir = resolveAssetsDir();
const gameplayDir = path.join(root, 'public', 'images', 'gameplay');
const altsPath = path.join(root, 'scripts', 'gameplay-image-alts.json');

/** file → source key (must match scripts/gameplay-image-alts.json alts) */
const GAMEPLAY = [
  { file: 'fifa-27-pitch-overlay.png', src: 'mciLiv' },
  { file: 'fifa-27-perfect-shot.png', src: 'barRma' },
  { file: 'fifa-27-player-overlay.png', src: 'barRma' },
  { file: 'fifa-27-mini-pitch-radar.png', src: 'mciLiv2' },
  { file: 'fifa-27-auto-green.png', src: 'viniDias' },
  { file: 'fifa-27-fut-snipe-assist.png', src: 'rmaBar' },
  { file: 'fifa-27-icon-unlocker.png', src: 'viniRudiger' },
  { file: 'fifa-27-thermal-esp.png', src: 'barRma' },
  { file: 'fifa-27-build-fight-esp.png', src: 'viniDias' },
  { file: 'fifa-27-arena-wallhack.png', src: 'rmaBar' },
  { file: 'fifa-27-spawn-island-esp.png', src: 'mciLiv' },
  { file: 'fifa-27-long-range-esp.png', src: 'barRma' },
  { file: 'fifa-27-aimbot-lock.png', src: 'viniDias' },
  { file: 'fifa-27-chams-esp.png', src: 'viniRudiger' },
  { file: 'fifa-27-squad-esp.png', src: 'mciLiv2' },
  { file: 'fifa-27-combat-esp.png', src: 'viniRudiger' },
];

async function writePng(fromPath, destPath) {
  const buf = await sharp(fromPath)
    .rotate()
    .resize({ width: 1600, withoutEnlargement: true })
    .png({ compressionLevel: 8 })
    .toBuffer();
  fs.writeFileSync(destPath, buf);
  console.log('wrote', path.basename(destPath), buf.length);
}

fs.mkdirSync(gameplayDir, { recursive: true });

const altsJson = JSON.parse(fs.readFileSync(altsPath, 'utf8'));
const altByFile = new Map(altsJson.gameplay.map((e) => [e.file, e.alt]));

for (const { file, src } of GAMEPLAY) {
  const rel = SOURCES[src];
  const from = path.join(assetsDir, rel);
  if (!fs.existsSync(from)) {
    console.error('Missing source:', from);
    process.exit(1);
  }
  await writePng(from, path.join(gameplayDir, file));
}

console.log('Done. Run: npm run optimize:images');
