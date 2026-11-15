export type UniverseId =
  | 'hesman'
  | 'anpanman'
  | 'spiderman'
  | 'ultraman'
  | 'pikachu'
  | 'custom';

export type HeroTemplateType =
  | 'mecha_lion'
  | 'bread_hero'
  | 'spider_hero'
  | 'cosmic_ultra'
  | 'thunder_pet'
  | 'galra_boss'
  | 'robeast_mech'
  | 'germ_ufo'
  | 'dokin_ufo'
  | 'goblin_glider'
  | 'octo_mech'
  | 'alien_baltan'
  | 'meowth_balloon';

export type AttackEffectType =
  | 'blazing_sword'
  | 'an_punch'
  | 'web_burst'
  | 'specium_ray'
  | 'thunder_bolt';

export type AgeBandFilter =
  | 'all'
  | '3–4 Tuổi'
  | '3.5–4.5 Tuổi'
  | '4–5 Tuổi'
  | '5–6 Tuổi'
  | '5.5–7 Tuổi'
  | '6–8 Tuổi';

export interface HeroCharacter {
  id: string;
  nameVi: string;
  nameEn: string;
  japaneseTitle?: string;
  universe: UniverseId;
  template: HeroTemplateType;
  primaryColor: string;
  secondaryColor: string;
  accentColor: string;
  weaponName: string;
  attackEffect: AttackEffectType;
  attackCalloutEn: string;
  greetingEn: string;
  taglineVi: string;
  moveStyle: 'fly' | 'run' | 'swing';
  defaultRivalId: string;
  isCustom?: boolean;
  customAvatarUrl?: string;
}

export interface RivalCharacter {
  id: string;
  nameVi: string;
  nameEn: string;
  universe: UniverseId;
  template: HeroTemplateType;
  primaryColor: string;
  secondaryColor: string;
  accentColor: string;
  tauntEn: string;
  taglineVi: string;
  isCustom?: boolean;
  customAvatarUrl?: string;
}

export interface CutsceneSlide {
  id: string;
  wordOrPhraseEn: string;
  highlightToken?: string;
  phonemeId?: string;
  meaningVi: string;
  heroActionLineEn: string;
  visualWordKey: string;
  emoji: string;
  visemeKey?: string;
}

export interface StageTargetOption {
  id: string;
  labelEn: string;
  subLabelVi: string;
  phonemeOrWord: string;
  speakTextEn: string;
  emoji: string;
  visualWordKey?: string;
  isCorrect: boolean;
}

export interface TargetHuntRound {
  id: string;
  instructionVi: string;
  promptAudioEn: string;
  targetBadge: string;
  hintPhonemeId?: string;
  options: StageTargetOption[];
}

export type CombatMode = 'target_hunt' | 'letter_trace' | 'echo_duel' | 'victory';

export interface QaChoiceOption {
  id: string;
  answerEn: string;
  answerVi: string;
  emoji: string;
  visualWordKey?: string;
  isCorrect: boolean;
}

export interface LetterTraceChallenge {
  id: string;
  phonemeId: string;
  displayChar: string;
  soundPromptEn: string;
  exampleWordEn: string;
  meaningVi: string;
  instructionVi: string;
  emoji: string;
}

export interface DialogueChallenge {
  id: string;
  speakerPromptEn: string;
  childTargetEn: string;
  meaningVi: string;
  interactionType?: 'echo' | 'qa';
  questionMeaningVi?: string;
  qaChoices?: QaChoiceOption[];
  hintPhonemeId?: string;
  visualWordKey: string;
  emoji: string;
  acceptableKeywords: string[];
}

export interface CurriculumUnit {
  id: string;
  worldId: 1 | 2 | 3 | 4 | 5 | 6;
  unitNumber: number;
  titleEn: string;
  titleVi: string;
  ageBand: Exclude<AgeBandFilter, 'all'>;
  methodologyTag: string;
  summaryVi: string;
  cutsceneSlides: CutsceneSlide[];
  targetHuntRounds: TargetHuntRound[];
  letterTraceRound?: LetterTraceChallenge;
  echoDuelRounds: DialogueChallenge[];
  bossRounds: DialogueChallenge[];
  rewardPhonemeIds?: string[];
}

export type BackdropTheme =
  | 'meadow_sun'
  | 'alpha_forest'
  | 'cvc_canyon'
  | 'city_park'
  | 'sky_harbor'
  | 'galaxy_core';

export interface CurriculumWorld {
  id: 1 | 2 | 3 | 4 | 5 | 6;
  titleEn: string;
  titleVi: string;
  subtitleVi: string;
  ageBand: Exclude<AgeBandFilter, 'all'>;
  curriculumSource: string;
  backdropTheme: BackdropTheme;
  accentGradient: string;
  badgeEmoji: string;
}

export interface HeroSaveState {
  selectedHeroId: string;
  rivalSelectionMode: 'story_match' | 'manual';
  selectedRivalId: string;
  ageGroupFilter: AgeBandFilter;
  toddlerForgivingMode: boolean;
  completedUnitIds: string[];
  unitStars: Record<string, number>;
  customHeroes: HeroCharacter[];
  customRivals: RivalCharacter[];
  studioPrivacyBlur: boolean;
}
