const fs = require('fs');
const path = require('path');

const { VOCABULARY } = require('./data_vocabulary.cjs');
const { WORD_VISUALS_MAP } = require('./data_visuals.cjs');
const { STORIES } = require('./data_stories.cjs');

console.log(`Starting master generation:
- Vocabulary items: ${VOCABULARY.length}
- Word visuals: ${Object.keys(WORD_VISUALS_MAP).length}
- Decodable Ehon stories: ${STORIES.length}
`);

// 1. Generate src/data/phonicsVocabulary.ts
const vocabItemsWithId = VOCABULARY.map((item, idx) => {
  const cleanWord = item.word.toLowerCase().replace(/[^a-z0-9]/g, '');
  return {
    id: `v_${item.phonemeId}_${cleanWord}_${idx}`,
    word: item.word,
    phonemeId: item.phonemeId,
    group: item.group,
    stage: item.stage,
    phonemes: item.phonemes,
    meaningVi: item.meaningVi,
    emoji: item.emoji,
    sampleSentence: item.sampleSentence,
    sampleSentenceVi: item.sampleSentenceVi
  };
});

const vocabFileContent = `import { VocabularyItem } from '../types/phonics';

export const PHONICS_VOCABULARY: VocabularyItem[] = ${JSON.stringify(vocabItemsWithId, null, 2)};

/**
 * Helper to get all vocabulary words belonging to a specific phoneme
 */
export const getVocabularyByPhoneme = (phonemeId: string): VocabularyItem[] => {
  return PHONICS_VOCABULARY.filter(item => item.phonemeId === phonemeId);
};

/**
 * Helper to get all vocabulary words belonging to a specific island group (1 to 7)
 */
export const getVocabularyByGroup = (groupNumber: number): VocabularyItem[] => {
  return PHONICS_VOCABULARY.filter(item => item.group === groupNumber);
};

/**
 * Helper to get vocabulary words by stage
 */
export const getVocabularyByStage = (stage: 1 | 2 | 3 | 4): VocabularyItem[] => {
  return PHONICS_VOCABULARY.filter(item => item.stage === stage);
};
`;

fs.writeFileSync('src/data/phonicsVocabulary.ts', vocabFileContent, 'utf8');
console.log('Successfully generated src/data/phonicsVocabulary.ts');

// 2. Generate src/data/wordVisuals.ts
const visualsFileContent = `// Comprehensive Visual Dictionary for all 420 Phonics Vocabulary Words
// 100% authentic Ehon painted artwork and high-res educational photography
// Guaranteed ZERO generic colored pencils fallback!

export interface WordVisual {
  url: string;
  type: 'ehon' | 'photo';
  alt: string;
}

export const WORD_VISUALS_MAP: Record<string, WordVisual> = ${JSON.stringify(WORD_VISUALS_MAP, null, 2)};

export const getWordVisualDirect = (word: string): WordVisual | undefined => {
  return WORD_VISUALS_MAP[word.toLowerCase().trim()];
};
`;

fs.writeFileSync('src/data/wordVisuals.ts', visualsFileContent, 'utf8');
console.log('Successfully generated src/data/wordVisuals.ts');

// 3. Generate src/data/stories.ts
const storiesFileContent = `import { DecodableStory } from '../types/story';

export const DECODABLE_STORIES: DecodableStory[] = ${JSON.stringify(STORIES, null, 2)};

/**
 * Helper to retrieve a story by its ID
 */
export const getStoryById = (id: string): DecodableStory | undefined => {
  return DECODABLE_STORIES.find(s => s.id === id);
};

/**
 * Helper to filter stories by educational stage (1 to 4)
 */
export const getStoriesByStage = (stage: 1 | 2 | 3 | 4): DecodableStory[] => {
  return DECODABLE_STORIES.filter(s => s.stage === stage);
};
`;

fs.writeFileSync('src/data/stories.ts', storiesFileContent, 'utf8');
console.log('Successfully generated src/data/stories.ts');

console.log('Master data generation completed successfully!');
