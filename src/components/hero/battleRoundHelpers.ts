import {
  CombatMode,
  DialogueChallenge,
  LetterTraceChallenge,
  StageTargetOption,
  TargetHuntRound,
} from '../../types/heroGame';

export interface RoundAdvanceInput {
  mode: CombatMode;
  huntIdx: number;
  echoIdx: number;
  huntCount: number;
  echoTotal: number;
  hasLetterTrace: boolean;
}

export interface RoundAdvanceResult {
  nextMode: CombatMode;
  nextHuntIdx: number;
  nextEchoIdx: number;
  nextBossHp: number;
}

export function resolveNextCombatStep(input: RoundAdvanceInput): RoundAdvanceResult {
  const { mode, huntIdx, echoIdx, huntCount, echoTotal, hasLetterTrace } = input;
  const totalSteps = Math.max(1, huntCount + (hasLetterTrace ? 1 : 0) + echoTotal);
  const calcHp = (completedSteps: number) =>
    Math.max(0, Math.round(((totalSteps - completedSteps) / totalSteps) * 100));

  if (mode === 'target_hunt') {
    if (huntIdx + 1 < huntCount) {
      return {
        nextMode: 'target_hunt',
        nextHuntIdx: huntIdx + 1,
        nextEchoIdx: 0,
        nextBossHp: calcHp(huntIdx + 1),
      };
    }
    if (hasLetterTrace) {
      return {
        nextMode: 'letter_trace',
        nextHuntIdx: 0,
        nextEchoIdx: 0,
        nextBossHp: calcHp(huntCount),
      };
    }
    if (echoTotal > 0) {
      return {
        nextMode: 'echo_duel',
        nextHuntIdx: 0,
        nextEchoIdx: 0,
        nextBossHp: calcHp(huntCount),
      };
    }
    return { nextMode: 'victory', nextHuntIdx: 0, nextEchoIdx: 0, nextBossHp: 0 };
  }

  if (mode === 'letter_trace') {
    const doneSteps = huntCount + (hasLetterTrace ? 1 : 0);
    if (echoTotal > 0) {
      return {
        nextMode: 'echo_duel',
        nextHuntIdx: 0,
        nextEchoIdx: 0,
        nextBossHp: calcHp(doneSteps),
      };
    }
    return { nextMode: 'victory', nextHuntIdx: 0, nextEchoIdx: 0, nextBossHp: 0 };
  }

  if (mode === 'echo_duel') {
    if (echoIdx + 1 < echoTotal) {
      const doneSteps = huntCount + (hasLetterTrace ? 1 : 0) + (echoIdx + 1);
      return {
        nextMode: 'echo_duel',
        nextHuntIdx: 0,
        nextEchoIdx: echoIdx + 1,
        nextBossHp: calcHp(doneSteps),
      };
    }
    return { nextMode: 'victory', nextHuntIdx: 0, nextEchoIdx: 0, nextBossHp: 0 };
  }

  return { nextMode: 'victory', nextHuntIdx: 0, nextEchoIdx: 0, nextBossHp: 0 };
}

export function buildPhaseLabelVi(params: {
  mode: CombatMode;
  huntIdx: number;
  huntCount: number;
  echoIdx: number;
  echoTotal: number;
  traceRound?: LetterTraceChallenge;
}): string {
  const { mode, huntIdx, huntCount, echoIdx, echoTotal, traceRound } = params;
  if (mode === 'target_hunt') {
    return `Chặng 1 • Săn Đúng Mục Tiêu (${huntIdx + 1}/${huntCount})`;
  }
  if (mode === 'letter_trace') {
    return `Chặng 2 • Tô Nét Chữ "${traceRound?.displayChar || ''}"`;
  }
  if (mode === 'echo_duel') {
    const actNum = traceRound ? 3 : 2;
    return `Chặng ${actNum} • Hỏi Đáp & Đấu Chiêu (${echoIdx + 1}/${echoTotal})`;
  }
  return 'Chiến Thắng Rực Rỡ!';
}

export interface RoundSpeechConfig {
  targetSpeechEn: string;
  speakerPromptEn: string;
  targetMeaningVi: string;
  acceptableKeywords: string[];
  coreKeywords: string[];
  hintPhonemeId?: string;
}

export function deriveRoundSpeechConfig(params: {
  mode: CombatMode;
  currentHunt?: TargetHuntRound;
  correctHuntOption?: StageTargetOption;
  currentEcho?: DialogueChallenge;
}): RoundSpeechConfig {
  const { mode, currentHunt, correctHuntOption, currentEcho } = params;
  if (mode === 'target_hunt') {
    const targetSpeechEn = currentHunt?.promptAudioEn || correctHuntOption?.speakTextEn || '';
    return {
      targetSpeechEn,
      speakerPromptEn: currentHunt?.promptAudioEn || '',
      targetMeaningVi: currentHunt?.instructionVi || '',
      acceptableKeywords: [targetSpeechEn, correctHuntOption?.phonemeOrWord || ''].filter(Boolean),
      coreKeywords: [correctHuntOption?.phonemeOrWord || '', correctHuntOption?.speakTextEn || ''].filter(
        Boolean
      ),
      hintPhonemeId: currentHunt?.hintPhonemeId,
    };
  }
  const targetSpeechEn = currentEcho?.childTargetEn || '';
  return {
    targetSpeechEn,
    speakerPromptEn: currentEcho?.speakerPromptEn || '',
    targetMeaningVi: currentEcho?.meaningVi || '',
    acceptableKeywords: currentEcho?.acceptableKeywords || [targetSpeechEn],
    coreKeywords: currentEcho?.interactionType === 'qa' ? currentEcho?.acceptableKeywords || [] : [],
    hintPhonemeId: currentEcho?.hintPhonemeId,
  };
}
