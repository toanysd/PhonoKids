const fs = require('fs');

const wbContent = fs.readFileSync('src/data/phonicsWordBank.ts', 'utf8');
const wb = JSON.parse(wbContent.split('export const PHONICS_WORD_BANK: PhonicsWordBankItem[] = ')[1].split(';\n\n// Helper selectors')[0]);

const fallbacks = wb.filter(item => item.visual.url.includes('theme_'));
console.log('Total fallback items:', fallbacks.length);

const words = [...new Set(fallbacks.map(f => f.word.toLowerCase()))];
console.log('Total unique words falling back:', words.length);

const byTheme = {};
fallbacks.forEach(f => {
  const t = f.theme;
  byTheme[t] = byTheme[t] || [];
  byTheme[t].push(f.word);
});

for (const [t, wList] of Object.entries(byTheme)) {
  console.log(`\nTheme [${t}] (${wList.length} items):`, [...new Set(wList)].join(', '));
}
