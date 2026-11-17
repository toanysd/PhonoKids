export type PortalId =
  | 'hub'
  | 'sound_lab'
  | 'reading_planet'
  | 'battle_arena'
  | 'story_map'
  | 'hero_squad'
  | 'star_zone'
  | 'mini_games'
  | 'daily_quest';

export type HeroId = 'hesman' | 'anpanman' | 'spiderman' | 'ultraman';

export type VillainId =
  | 'galra_boss'
  | 'robeast_mech'
  | 'germ_ufo'
  | 'goblin_glider'
  | 'octo_mech'
  | 'alien_baltan';

export type SpritePose = 'idle' | 'speaking' | 'attack' | 'hit' | 'victory';

export type MangaCameraShot =
  | 'vs_split'
  | 'eye_cutin'
  | 'finisher_splash'
  | 'clash_shoulder'
  | 'victory_cover';

export interface ComicHero {
  id: HeroId;
  nameEn: string;
  jpTitle: string;
  taglineVi: string;
  attackCalloutEn: string;
  greetingEn: string;
  accentColor: string;
  arenaScene: string;
  lockHorizontalSymmetry?: boolean;
  sprites: Record<SpritePose, string>;
  mangaCutinUrl: string;
  mangaSplashUrl: string;
  mangaSfxEn: string;
  mangaKatakana: string;
}

export interface ComicVillain {
  id: VillainId;
  nameEn: string;
  tauntEn: string;
  sprites: Record<SpritePose, string>;
  mangaMenaceUrl: string;
  accentColor?: string;
  taglineVi?: string;
}

export type PhonemeCategory = 'air' | 'pop' | 'nasal_liquid' | 'vowel';

export type LipMode = 'spread' | 'neutral' | 'rounded' | 'closed' | 'teeth_lip';

export type TongueMode =
  | 'alveolar_tip'
  | 'postalveolar_dome'
  | 'interdental'
  | 'velar_back'
  | 'bilabial_flat'
  | 'retroflex'
  | 'high_front'
  | 'low_open'
  | 'mid_back';

export type FrontMouthMode =
  | 'smile'
  | 'round_o'
  | 'pucker_sh'
  | 'closed_mm'
  | 'teeth_th'
  | 'open_ah';

export interface PhonemeArticulation {
  id: string;
  symbol: string;
  ipa: string;
  category: PhonemeCategory;
  exampleWord: string;
  wordImageUrl: string;
  phonemeAudioUrl: string;
  voiced: boolean;
  nasal: boolean;
  airflow: 'stream' | 'puff' | 'vowel';
  jawOpen: number;
  lipMode: LipMode;
  tongueMode: TongueMode;
  frontMouthMode: FrontMouthMode;
  tipVi: string;
}

export type ComicBookLevel = 'aa' | 'A' | 'B' | 'C';

export interface ComicBookPage {
  textEn: string;
  targetWord: string;
  wordId: string;
}

export interface ComicBook {
  id: string;
  level: ComicBookLevel;
  titleEn: string;
  coverWordId: string;
  pages: ComicBookPage[];
  quizQuestionEn: string;
  quizChoices: [string, string, string];
  quizAnswerWordId: string;
  rewardStars: number;
}

export interface StoryStage {
  id: string;
  worldId: number;
  stageNumber: number;
  isBoss: boolean;
  wordId: string;
  displayWord: string;
  phonemeId: string;
  imageUrl: string;
  villainId: VillainId;
  hintVi: string;
}

export interface StoryWorld {
  id: number;
  nameEn: string;
  titleVi: string;
  phonemeId: string;
  phonemeLabel: string;
  accentColor: string;
  arenaScene: string;
  villainId: VillainId;
  mouthTipVi: string;
  stages: StoryStage[];
}

export interface RocketUpgradeItem {
  id: string;
  nameEn: string;
  nameVi: string;
  slot: 'thruster' | 'radar' | 'shield' | 'cabin' | 'companion' | 'decor';
  costStars: number;
  costGems: number;
  accentColor: string;
  descriptionVi: string;
}

export type DailyQuestGoalType =
  | 'battles_won'
  | 'sound_lab_practiced'
  | 'books_finished'
  | 'mini_games_won';

export interface DailyQuestItem {
  id: string;
  titleEn: string;
  titleVi: string;
  goalType: DailyQuestGoalType;
  targetCount: number;
  rewardStars: number;
  rewardGems: number;
}

export interface BookProgressRecord {
  listened: boolean;
  spoken: boolean;
  quizPassed: boolean;
}

export interface DailyQuestProgress {
  battlesWon: number;
  soundLabPracticed: number;
  booksFinished: number;
  miniGamesWon: number;
  claimedQuestIds: string[];
}

export interface ComicSaveState {
  selectedHeroId: HeroId;
  selectedVillainId: VillainId;
  stars: number;
  gems: number;
  energy: number;
  soundEnabled: boolean;
  toddlerFriendly: boolean;
  reducedMotion: boolean;
  sessionMinutes: number;
  parentPin: string;
  stageStars: Record<string, number>;
  practicedPhonemes: string[];
  bookProgress: Record<string, BookProgressRecord>;
  ownedUpgradeIds: string[];
  equippedUpgradeIds: string[];
  dailyProgress: DailyQuestProgress;
}

export interface MicCaptureResult {
  passed: boolean;
  accuracy: number;
  grade: 'super' | 'good' | 'retry';
  transcript: string;
  mode: 'stt' | 'voice_wave' | 'blocked';
  messageEn: string;
}
