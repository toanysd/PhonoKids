import { CurriculumUnit, CurriculumWorld } from '../types/heroGame';
import { UNITS_STAGE_1_TO_3 } from './curriculumUnitsStage1To3';
import { UNITS_STAGE_4_TO_6 } from './curriculumUnitsStage4To6';
import { CAMPAIGN_EXPANSION_W1_TO_3 } from './campaignExpansionW1To3';
import { CAMPAIGN_EXPANSION_W4_TO_6 } from './campaignExpansionW4To6';
import { LETTER_TRACE_BY_UNIT, QA_CHALLENGES_BY_UNIT } from './curriculumInteractiveData';
import { enrichCampaignStages } from './campaignStageEnricher';

export const CURRICULUM_WORLDS: CurriculumWorld[] = [
  {
    id: 1,
    titleEn: 'World 1: Sunny Playground',
    titleVi: 'Thế Giới 1: Khởi Động Phản Xạ (3–4 Tuổi)',
    subtitleVi: 'Chào hỏi, màu sắc, trái cây và hành động TPR vui nhộn',
    ageBand: '3–4 Tuổi',
    curriculumSource: 'Wow English & Super Simple Songs',
    backdropTheme: 'meadow_sun',
    accentGradient: 'from-amber-400 via-orange-400 to-rose-400',
    badgeEmoji: '🌈',
  },
  {
    id: 2,
    titleEn: 'World 2: Phonics Forest',
    titleVi: 'Thế Giới 2: Biệt Đội Âm Đầu A–Z (3.5–4.5 Tuổi)',
    subtitleVi: 'Nhận diện âm vị thuần khiết và săn đúng phụ âm/nguyên âm',
    ageBand: '3.5–4.5 Tuổi',
    curriculumSource: 'Oxford Phonics World Level 1',
    backdropTheme: 'alpha_forest',
    accentGradient: 'from-emerald-400 via-teal-500 to-cyan-500',
    badgeEmoji: '🌲',
  },
  {
    id: 3,
    titleEn: 'World 3: Blending Canyon',
    titleVi: 'Thế Giới 3: Ghép Vần Ngắn CVC (4–5 Tuổi)',
    subtitleVi: 'Ghép vần -at, -an, -en, -ig, -og, -un và đọc cụm từ',
    ageBand: '4–5 Tuổi',
    curriculumSource: 'Oxford Phonics World Level 2',
    backdropTheme: 'cvc_canyon',
    accentGradient: 'from-sky-400 via-blue-500 to-indigo-500',
    badgeEmoji: '🏔️',
  },
  {
    id: 4,
    titleEn: 'World 4: Hero City Park',
    titleVi: 'Thế Giới 4: Giao Tiếp Tình Huống (5–6 Tuổi)',
    subtitleVi: 'Cơ thể, gia đình, phương tiện, thời tiết và đếm số CLIL',
    ageBand: '5–6 Tuổi',
    curriculumSource: 'Wow English Preschool & GrapeSEED Oral',
    backdropTheme: 'city_park',
    accentGradient: 'from-violet-400 via-purple-500 to-fuchsia-500',
    badgeEmoji: '🏙️',
  },
  {
    id: 5,
    titleEn: 'World 5: Sky Digraph Harbor',
    titleVi: 'Thế Giới 5: Nguyên Âm Dài & Âm Ghép (5.5–7 Tuổi)',
    subtitleVi: 'Magic E, cặp nguyên âm ee/oa/ai, tổ hợp và âm ghép sh/ch/th',
    ageBand: '5.5–7 Tuổi',
    curriculumSource: 'Oxford Phonics World Levels 3 & 4',
    backdropTheme: 'sky_harbor',
    accentGradient: 'from-pink-500 via-rose-500 to-amber-500',
    badgeEmoji: '⛵',
  },
  {
    id: 6,
    titleEn: 'World 6: Starters Galaxy',
    titleVi: 'Thế Giới 6: Đấu Trường Phản Xạ Toàn Diện (6–8 Tuổi)',
    subtitleVi: 'Vần nâng cao ar/or/ou/oi, mẫu câu I can & giới từ Starters',
    ageBand: '6–8 Tuổi',
    curriculumSource: 'Oxford Phonics L5 & Cambridge Starters',
    backdropTheme: 'galaxy_core',
    accentGradient: 'from-slate-800 via-indigo-700 to-cyan-600',
    badgeEmoji: '🌌',
  },
];

const BASE_UNITS: CurriculumUnit[] = [
  ...UNITS_STAGE_1_TO_3,
  ...CAMPAIGN_EXPANSION_W1_TO_3,
  ...UNITS_STAGE_4_TO_6,
  ...CAMPAIGN_EXPANSION_W4_TO_6,
]
  .sort((a, b) => a.worldId - b.worldId || a.unitNumber - b.unitNumber)
  .map((unit) => {
    const qaChallenge = QA_CHALLENGES_BY_UNIT[unit.id];
    const mergedEcho =
      qaChallenge && unit.echoDuelRounds.length >= 2
        ? [unit.echoDuelRounds[0], qaChallenge, ...unit.echoDuelRounds.slice(2)]
        : qaChallenge
        ? [...unit.echoDuelRounds, qaChallenge]
        : unit.echoDuelRounds;
    return {
      ...unit,
      letterTraceRound: LETTER_TRACE_BY_UNIT[unit.id] || unit.letterTraceRound,
      echoDuelRounds: mergedEcho,
    };
  });

export const ALL_CURRICULUM_UNITS: CurriculumUnit[] = enrichCampaignStages(BASE_UNITS);

export function getUnitsByWorld(worldId: number): CurriculumUnit[] {
  return ALL_CURRICULUM_UNITS.filter((u) => u.worldId === worldId);
}

export function getUnitById(unitId: string): CurriculumUnit | undefined {
  return ALL_CURRICULUM_UNITS.find((u) => u.id === unitId);
}

export function getNextRecommendedUnit(completedUnitIds: string[]): CurriculumUnit {
  const next = ALL_CURRICULUM_UNITS.find((u) => !completedUnitIds.includes(u.id));
  return next || ALL_CURRICULUM_UNITS[0];
}
