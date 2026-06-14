// Bygger nettstedet: setter verdiene fra data/site.json inn i templates/ -> public/
const fs = require('fs');
const path = require('path');

const data = JSON.parse(fs.readFileSync('data/site.json', 'utf8'));
const TPL = 'templates';
const OUT = 'public';

function render(str) {
  return str.replace(/\{\{(\w+)\}\}/g, (m, key) =>
    Object.prototype.hasOwnProperty.call(data, key) ? data[key] : m
  );
}
function copyDir(src, dst) {
  fs.mkdirSync(dst, { recursive: true });
  for (const e of fs.readdirSync(src, { withFileTypes: true })) {
    const s = path.join(src, e.name), d = path.join(dst, e.name);
    e.isDirectory() ? copyDir(s, d) : fs.copyFileSync(s, d);
  }
}

fs.rmSync(OUT, { recursive: true, force: true });
fs.mkdirSync(OUT, { recursive: true });

for (const f of fs.readdirSync(TPL)) {
  fs.writeFileSync(path.join(OUT, f), render(fs.readFileSync(path.join(TPL, f), 'utf8')));
}
// Kopier statiske ressurser hvis de finnes (logo, program-PDF osv.)
for (const dir of ['images', 'downloads', 'assets']) {
  if (fs.existsSync(dir)) copyDir(dir, path.join(OUT, dir));
}
console.log('Bygget public/ med år ' + data.year + ' (' + data.dateDisplay + ')');
