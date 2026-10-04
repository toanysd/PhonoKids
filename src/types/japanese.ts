// TypeScript Type Definitions for PhonoKids Japanese Module (KanaPhonics / Nihongo Ehon)
// Grounded in Kodomo Challenge (Benesse), Kumon Kokugo, and Gakken Yoji Pedagogical Standards

export type JapaneseScript = 'hiragana' | 'katakana' | 'romaji';

export type KanaRowKey = 
  | 'a' 
  | 'ka' 
  | 'sa' 
  | 'ta' 
  | 'na' 
  | 'ha' 
  | 'ma' 
  | 'ya' 
  | 'ra' 
  | 'wa' 
  | 'dakuon' 
  | 'handakuon';

export interface JapaneseWord {
  word: string;             // e.g. "あめ"
  kanji?: string;           // e.g. "雨" / "飴"
  furigana: string;         // e.g. "あめ"
  romaji: string;           // e.g. "ame"
  meaningVi: string;        // e.g. "cơn mưa" hoặc "kẹo ngọt"
  pitchPattern?: 'HL' | 'LH'; // High-Low or Low-High accent
  visualUrl: string;        // Ehon artwork URL
  visualAlt: string;
}

export interface JapaneseStroke {
  strokeNumber: number;
  directionVi: string;      // e.g. "Nét ngang từ trái sang phải"
  pathD: string;            // SVG path d attribute for rendering stroke
  guidePoint: { x: number; y: number }; // Starting number circle coordinate
}

export interface KanaItem {
  id: string;               // e.g. "ja_a", "ja_ka"
  hiragana: string;         // "あ"
  katakana: string;         // "ア"
  romaji: string;           // "a"
  row: KanaRowKey;
  variant?: 'basic' | 'dakuon' | 'handakuon';
  orderInRow: number;       // 1 to 5
  vowel?: 'a' | 'i' | 'u' | 'e' | 'o' | 'n';
  soundDescriptionVi: string;
  mouthGuide: {
    mouthShape: 'open_wide' | 'smile' | 'round_pucker' | 'open_mid' | 'round_mid';
    instructionsVi: string;
  };
  sampleWords: JapaneseWord[];
  tprAction: {
    titleVi: string;
    chantJa: string;        // e.g. "あ・あ・あめ！"
    descriptionVi: string;
    icon: string;
  };
  strokeOrder: {
    strokeCount: number;
    descriptionVi: string;
    strokes: JapaneseStroke[];
  };
}

export interface KanaRowGroup {
  rowKey: KanaRowKey;
  rowNameVi: string;        // e.g. "Hàng A (5 Nguyên Âm Cốt Lõi)"
  rowNameJa: string;        // e.g. "あ行（あぎょう）"
  themeColor: string;
  themeBanner: string;
  characters: KanaItem[];
}
