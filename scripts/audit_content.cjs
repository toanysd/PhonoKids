const fs = require('fs');

console.log('=== AUDITING PHONICS WORD BANK & VISUALS ===');

// 1. Phonics Word Bank
const wbContent = fs.readFileSync('src/data/phonicsWordBank.ts', 'utf8');
const wb = JSON.parse(wbContent.split('export const PHONICS_WORD_BANK: PhonicsWordBankItem[] = ')[1].split(';\n\n// Helper selectors')[0]);

console.log('Total items in Word Bank:', wb.length);

// Check duplicate words within the same phoneme
const phWordCounts = {};
wb.forEach(item => {
  const k = `${item.phonemeId}_${item.word.toLowerCase()}`;
  phWordCounts[k] = (phWordCounts[k] || 0) + 1;
});
const dupInSamePhoneme = Object.entries(phWordCounts).filter(([k, c]) => c > 1);
console.log('Duplicates in SAME phoneme:', dupInSamePhoneme.length, dupInSamePhoneme);

// Words appearing in multiple phonemes
const wordToPhs = {};
wb.forEach(item => {
  const w = item.word.toLowerCase();
  if (!wordToPhs[w]) wordToPhs[w] = [];
  if (!wordToPhs[w].includes(item.phonemeId)) wordToPhs[w].push(item.phonemeId);
});
const multiPhonemeWords = Object.entries(wordToPhs).filter(([w, phs]) => phs.length > 1);
console.log('Words appearing across multiple phonemes:', multiPhonemeWords.length);
console.log('Sample cross-phoneme words:', multiPhonemeWords.slice(0, 20));

// Check image reuse
const urlCounts = {};
wb.forEach(item => {
  const url = item.visual.url;
  urlCounts[url] = (urlCounts[url] || 0) + 1;
});
const topUrls = Object.entries(urlCounts).sort((a,b) => b[1] - a[1]);
console.log('\nTotal unique URLs in Word Bank:', Object.keys(urlCounts).length);
console.log('Top 15 most reused URLs:');
topUrls.slice(0, 15).forEach(([u, c]) => console.log(`  ${c}x: ${u}`));

// 2. Stories Audit
console.log('\n=== AUDITING STORIES (EHON BOOKS) ===');
const storiesContent = fs.readFileSync('src/data/stories.ts', 'utf8');
const storiesJson = storiesContent.split('export const DECODABLE_STORIES: DecodableStory[] = ')[1].split(';\n\n/**')[0];
const stories = JSON.parse(storiesJson);
console.log('Total Decodable Stories:', stories.length);
stories.forEach((st, i) => {
  console.log(`Story ${i+1}: [${st.id}] "${st.title}" (Group ${st.level}, Pages: ${st.pages.length})`);
  st.pages.forEach(p => {
    console.log(`   P${p.pageNumber}: "${p.sentence}" -> img: ${p.visual?.url}`);
  });
});




// 3. Word Visuals Map
console.log('\n=== AUDITING WORD_VISUALS_MAP ===');
const visualsContent = fs.readFileSync('src/data/wordVisuals.ts', 'utf8');
const visRegex = /"([a-zA-Z0-9_\-]+)":\s*\{\s*"url":\s*"([^"]+)",\s*"type":\s*"([^"]+)",\s*"alt":\s*"([^"]+)"\s*\}/g;
let m;
const visMap = {};
const visUrlCounts = {};
const visemeMisuses = [];
while ((m = visRegex.exec(visualsContent)) !== null) {
  visMap[m[1]] = { url: m[2], type: m[3], alt: m[4] };
  visUrlCounts[m[2]] = (visUrlCounts[m[2]] || 0) + 1;
  if (m[2].includes('viseme')) {
    visemeMisuses.push({ word: m[1], url: m[2] });
  }
}
console.log('Total entries in wordVisuals.ts:', Object.keys(visMap).length);
console.log('Misused visemes as word visuals:', visemeMisuses);
const topVisUrls = Object.entries(visUrlCounts).sort((a,b) => b[1] - a[1]);
console.log('Top reused URLs in wordVisuals.ts:');
topVisUrls.slice(0, 15).forEach(([u, c]) => console.log(`  ${c}x: ${u}`));

