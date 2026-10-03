export interface PhonemeInfo {
  id: string; // e.g., 's', 'a', 't'
  grapheme: string; // 's'
  ipa: string; // '/s/'
  group: number; // 1 to 7
  stage: 1 | 2 | 3 | 4; // 1: 3-4yo, 2: 4-5yo, 3: 5-6yo, 4: 6-8yo
  soundDescription: string;
  sampleWords: {
    word: string;
    meaningVi: string;
    emoji: string;
  }[];
  tprAction: {
    title: string;
    descriptionVi: string;
    actionPrompt: string;
    icon: string;
  };
  mouthGuide: {
    mouthShape: 'open' | 'closed' | 'round' | 'wide' | 'teeth_together' | 'lip_bite';
    tonguePosition: 'flat' | 'behind_top_teeth' | 'up_back' | 'curled';
    airFlow: 'continuous' | 'puff' | 'voiced_hum' | 'nasal';
    instructionsVi: string;
  };
  color: string;
}

export interface PhonicsGroup {
  groupNumber: number;
  stage: 1 | 2 | 3 | 4;
  stageName: string;
  ageBand: string;
  name: string;
  islandTheme: string;
  themeColor: string;
  islandEmoji: string;
  phonemes: string[]; // ids of phonemes
  decodableWords: string[];
}

export interface MinimalPairItem {
  id: string;
  pairName: string; // e.g. '/p/ vs /b/'
  phonemeA: string; // '/p/'
  phonemeB: string; // '/b/'
  questionPrompt: string;
  targetWord: string;
  distractorWord: string;
  correctPhoneme: string;
  targetEmoji: string;
  distractorEmoji: string;
  hintVi: string;
}

export interface BlendActivity {
  word: string;
  emoji: string;
  meaningVi: string;
  phonemes: string[];
  audioTiming?: number[];
}

export interface VocabularyItem {
  id: string;
  word: string;
  phonemeId: string;
  group: number;
  stage: 1 | 2 | 3 | 4;
  phonemes: string[];
  meaningVi: string;
  emoji: string;
  sampleSentence: string;
  sampleSentenceVi: string;
}

export type WordBankTheme = 'animals' | 'nature' | 'objects_food' | 'actions';

export interface PhonicsWordBankItem {
  id: string;
  word: string;
  phonemeId: string;
  group: number;
  stage: 1 | 2 | 3 | 4;
  phonemes: string[];
  theme: WordBankTheme;
  meaningVi: string;
  emoji: string;
  sampleSentence: string;
  sampleSentenceVi: string;
  visual: {
    url: string;
    type: 'ehon' | 'photo';
    alt: string;
  };
}

