const fs = require('fs');
const { VOCABULARY } = require('./data_vocabulary.cjs');

// Read existing wordVisuals.ts
const content = fs.readFileSync('src/data/wordVisuals.ts', 'utf8');

// Parse entries from wordVisuals.ts using regex
const map = {};
const regex = /'([a-zA-Z0-9_\-]+)':\s*\{\s*url:\s*'([^']+)',\s*type:\s*'([^']+)',\s*alt:\s*'([^']+)'\s*\}/g;
let m;
while ((m = regex.exec(content)) !== null) {
  map[m[1]] = { url: m[2], type: m[3], alt: m[4] };
}

console.log('Existing visuals count:', Object.keys(map).length);

const allWords = [...new Set(VOCABULARY.map(v => v.word.toLowerCase()))];
const missing = allWords.filter(w => !map[w]);
console.log('Total unique words in vocabulary:', allWords.length);
console.log('Missing visuals to generate:', missing.length);

fs.writeFileSync('scripts/missing_words.json', JSON.stringify(missing, null, 2), 'utf8');
