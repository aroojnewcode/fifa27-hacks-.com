/**
 * One-off FC 27 terminology pass on src/data/blog/posts.ts
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const file = path.join(path.dirname(fileURLToPath(import.meta.url)), '../src/data/blog/posts.ts');
let text = fs.readFileSync(file, 'utf8');

const replacements = [
  [/Creative islands/gi, 'Skill Games drills'],
  [/Creative and bot-lobby/gi, 'Skill Games and offline friendly'],
  [/Creative and bot lobbies/gi, 'Skill Games and offline friendlies'],
  [/bot-lobby/gi, 'offline friendly'],
  [/bot lobbies/gi, 'offline friendlies'],
  [/Bot lobbies/gi, 'Offline friendlies'],
  [/practice islands/gi, 'Skill Games'],
  [/after Creative/gi, 'after Skill Games'],
  [/Creative vs/gi, 'Skill Games vs'],
  [/in Creative/gi, 'in Skill Games'],
  [/Creative practice/gi, 'Skill Games practice'],
  [/Creative tips/gi, 'Skill Games tips'],
  [/Ranked and Ultimate Team/gi, 'Division Rivals and Ultimate Team'],
  [/in Ranked/gi, 'in Division Rivals'],
  [/before Ranked/gi, 'before Division Rivals'],
  [/ranked replays/gi, 'Division Rivals replays'],
  [/ranked play/gi, 'Division Rivals'],
  [/ranked preset/gi, 'Rivals preset'],
  [/Ranked preset/gi, 'Rivals preset'],
  [/climbing ranked/gi, 'climbing Division Rivals'],
  [/ranked grind/gi, 'Rivals grind'],
  [/ranked sessions/gi, 'Rivals sessions'],
  [/ranked aimbot/gi, 'Rivals auto green'],
  [/private ranked/gi, 'private Division Rivals'],
  [/live ranked/gi, 'live Division Rivals'],
  [/Ultimate Team and Ranked/gi, 'Ultimate Team and Division Rivals'],
  [/Career Mode and Ranked/gi, 'Career Mode and Division Rivals'],
  [/aimbot/gi, 'auto green'],
  [/Aimbot/gi, 'Auto green'],
  [/Weapon auto green guide/gi, 'auto green finishing guide'],
  [/Weapon aimbot guide/gi, 'auto green finishing guide'],
  [/aimbot for ranked/gi, 'auto green for Division Rivals'],
  [/ESP wallhack/gi, 'pitch overlay'],
  [/ESP Wallhack/gi, 'pitch overlay'],
  [/ESP ranges/gi, 'overlay ranges'],
  [/ESP range/gi, 'overlay range'],
  [/player ESP/gi, 'pitch player overlay'],
  [/ESP and/gi, 'pitch overlay and'],
  [/ESP,/gi, 'pitch overlay,'],
  [/ESP /gi, 'pitch overlay '],
  [/loot ESP/gi, 'pack radar'],
  [/chest ESP/gi, 'pack highlights'],
  [/AR mid-range/gi, 'long-range finesse'],
  [/AR spray/gi, 'power shot chains'],
  [/AR, then winger/gi, 'finesse, then wing play'],
  [/SMG tracking/gi, 'close-control dribble'],
  [/shotgun push/gi, 'low driven finish'],
  [/Per-weapon auto green/gi, 'Per-shot-type auto green'],
  [/weapon profile/gi, 'shot profile'],
  [/Weapon profile/gi, 'Shot profile'],
  [/Hotkey macros/gi, 'skill-move macros'],
  [/heals, shields/gi, 'stamina boosts'],
  [/Loot Assist/gi, 'FUT snipe assist'],
  [/Auto Shield Break/gi, 'press bypass assist'],
  [/fogged targets/gi, 'defenders in smoke'],
  [/combo players/gi, 'skill move spammers'],
  [/combo help/gi, 'auto green help'],
  [/combo bursts/gi, 'timed finish bursts'],
  [/combo fire/gi, 'timed finish chains'],
  [/map awareness/gi, 'pitch awareness'],
  [/Map awareness/gi, 'Pitch awareness'],
  [/reboot vans/gi, 'set pieces'],
  [/chest and loot/gi, 'pack and market'],
  [/chest markers/gi, 'pack markers'],
  [/loot timers/gi, 'pack timers'],
];

for (const [from, to] of replacements) {
  text = text.replace(from, to);
}

fs.writeFileSync(file, text, 'utf8');
console.log('Updated', file);
