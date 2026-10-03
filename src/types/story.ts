export interface WordTiming {
  word: string;
  cleanWord: string;
  startMs: number;
  endMs: number;
}

export interface Hotspot {
  id: string;
  label: string;
  xPercent: number; // 0-100%
  yPercent: number; // 0-100%
  emoji: string;
  soundName: string;
  speechText?: string;
  animationType: 'jump' | 'spin' | 'shake' | 'heart';
}

export interface ComprehensionQuestion {
  questionText: string;
  questionAudioText: string;
  options: {
    id: string;
    text: string;
    emoji: string;
    isCorrect: boolean;
  }[];
}

export interface StoryPage {
  pageNumber: number;
  sentence: string;
  vietnameseMeaning: string;
  backgroundTheme: string;
  sceneryEmoji: string;
  wordsTiming: WordTiming[];
  hotspots: Hotspot[];
  speakingTargetWord?: string;
  comprehension?: ComprehensionQuestion;
}

export interface DecodableStory {
  id: string;
  title: string;
  level: 1 | 2 | 3;
  levelName: string;
  coverEmoji: string;
  summaryVi: string;
  targetPhonics: string[];
  sightWords: string[];
  pages: StoryPage[];
}
