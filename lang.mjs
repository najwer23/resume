// extract.mjs  (run: node extract.mjs)
import fs from 'fs';
import path from 'path';

const SRC = 'src';
const OUT = 'src/locales';
const LANGS = ['pl'];

const walk = (d) =>
  fs
    .readdirSync(d, { withFileTypes: true })
    .flatMap((e) =>
      e.isDirectory()
        ? e.name === 'locales' || e.name === 'node_modules'
          ? []
          : walk(path.join(d, e.name))
        : [path.join(d, e.name)],
    );

// matches T("..."), T('...'), T(`...`)
const RE = /(?<![\w$.])T\(\s*(?:"((?:[^"\\\n]|\\.)*)"|'((?:[^'\\\n]|\\.)*)'|`((?:[^`\\$]|\\.)*)`)/g;

const unescape = (s) => s.replace(/\\(.)/g, (_, c) => (c === 'n' ? '\n' : c === 't' ? '\t' : c));

const found = new Set();

for (const file of walk(SRC).filter((f) => /\.(jsx?|tsx?)$/.test(f))) {
  const code = fs.readFileSync(file, 'utf8');
  for (const m of code.matchAll(RE)) {
    found.add(unescape(m[1] ?? m[2] ?? m[3]));
  }
}

fs.mkdirSync(OUT, { recursive: true });

for (const lang of LANGS) {
  const file = path.join(OUT, `${lang}.json`);
  const old = fs.existsSync(file) ? JSON.parse(fs.readFileSync(file, 'utf8')) : {};
  const next = {};
  for (const s of [...found].sort()) next[s] = old[s] ?? '';
  fs.writeFileSync(file, JSON.stringify(next, null, 2) + '\n');
}

console.log(`Found ${found.size} phrases → ${LANGS.join(', ')}`);
