import {
  CombatMode,
  DialogueChallenge,
  LetterTraceChallenge,
  MysteryChestChallenge,
  SoundForgeChallenge,
  StageTargetOption,
  TargetHuntRound,
} from '../../types/heroGame';

export interface RoundAdvanceInput {
  mode: CombatMode;
  huntIdx: number;
  forgeIdx?: number;
  chestIdx?: number;
  echoIdx: number;
  huntCount: number;
  forgeCount?: number;
  chestCount?: number;
  echoTotal: number;
  hasLetterTrace: boolean;
}

export interface RoundAdvanceResult {
  nextMode: CombatMode;
  nextHuntIdx: number;
  nextForgeIdx: number;
  nextChestIdx: number;
  nextEchoIdx: number;
  nextBossHp: number;
}

export function resolveNextCombatStep(input: RoundAdvanceInput): RoundAdvanceResult {
  const {
    mode,
    huntIdx,
    forgeIdx = 0,
    chestIdx = 0,
    echoIdx,
    huntCount,
    forgeCount = 0,
    chestCount = 0,
    echoTotal,
    hasLetterTrace,
  } = input;

  const totalSteps = Math.max(
    1,
    huntCount + forgeCount + chestCount + (hasLetterTrace ? 1 : 0) + echoTotal
  );
  const calcHp = (completedSteps: number) =>
    Math.max(0, Math.round(((totalSteps - completedSteps) / totalSteps) * 100));

  const enterPostForge = (done: number): RoundAdvanceResult => {
    if (chestCount > 0) {
      return { nextMode: 'mystery_chest', nextHuntIdx: 0, nextForgeIdx: 0, nextChestIdx: 0, nextEchoIdx: 0, nextBossHp: calcHp(done) };
    }
    if (hasLetterTrace) {
      return { nextMode: 'letter_trace', nextHuntIdx: 0, nextForgeIdx: 0, nextChestIdx: 0, nextEchoIdx: 0, nextBossHp: calcHp(done) };
    }
    if (echoTotal > 0) {
      return { nextMode: 'echo_duel', nextHuntIdx: 0, nextForgeIdx: 0, nextChestIdx: 0, nextEchoIdx: 0, nextBossHp: calcHp(done) };
    }
    return { nextMode: 'victory', nextHuntIdx: 0, nextForgeIdx: 0, nextChestIdx: 0, nextEchoIdx: 0, nextBossHp: 0 };
  };

  if (mode === 'target_hunt') {
    if (huntIdx + 1 < huntCount) {
      return { nextMode: 'target_hunt', nextHuntIdx: huntIdx + 1, nextForgeIdx: 0, nextChestIdx: 0, nextEchoIdx: 0, nextBossHp: calcHp(huntIdx + 1) };
    }
    if (forgeCount > 0) {
      return { nextMode: 'sound_forge', nextHuntIdx: 0, nextForgeIdx: 0, nextChestIdx: 0, nextEchoIdx: 0, nextBossHp: calcHp(huntCount) };
    }
    return enterPostForge(huntCount);
  }

  if (mode === 'sound_forge') {
    if (forgeIdx + 1 < forgeCount) {
      return { nextMode: 'sound_forge', nextHuntIdx: 0, nextForgeIdx: forgeIdx + 1, nextChestIdx: 0, nextEchoIdx: 0, nextBossHp: calcHp(huntCount + forgeIdx + 1) };
    }
    return enterPostForge(huntCount + forgeCount);
  }

  if (mode === 'mystery_chest') {
    if (chestIdx + 1 < chestCount) {
      return { nextMode: 'mystery_chest', nextHuntIdx: 0, nextForgeIdx: 0, nextChestIdx: chestIdx + 1, nextEchoIdx: 0, nextBossHp: calcHp(huntCount + forgeCount + chestIdx + 1) };
    }
    const done = huntCount + forgeCount + chestCount;
    if (hasLetterTrace) {
      return { nextMode: 'letter_trace', nextHuntIdx: 0, nextForgeIdx: 0, nextChestIdx: 0, nextEchoIdx: 0, nextBossHp: calcHp(done) };
    }
    if (echoTotal > 0) {
      return { nextMode: 'echo_duel', nextHuntIdx: 0, nextForgeIdx: 0, nextChestIdx: 0, nextEchoIdx: 0, nextBossHp: calcHp(done) };
    }
    return { nextMode: 'victory', nextHuntIdx: 0, nextForgeIdx: 0, nextChestIdx: 0, nextEchoIdx: 0, nextBossHp: 0 };
  }

  if (mode === 'letter_trace') {
    const doneSteps = huntCount + forgeCount + chestCount + (hasLetterTrace ? 1 : 0);
    if (echoTotal > 0) {
      return { nextMode: 'echo_duel', nextHuntIdx: 0, nextForgeIdx: 0, nextChestIdx: 0, nextEchoIdx: 0, nextBossHp: calcHp(doneSteps) };
    }
    return { nextMode: 'victory', nextHuntIdx: 0, nextForgeIdx: 0, nextChestIdx: 0, nextEchoIdx: 0, nextBossHp: 0 };
  }

  if (mode === 'echo_duel') {
    if (echoIdx + 1 < echoTotal) {
      const doneSteps = huntCount + forgeCount + chestCount + (hasLetterTrace ? 1 : 0) + (echoIdx + 1);
      return { nextMode: 'echo_duel', nextHuntIdx: 0, nextForgeIdx: 0, nextChestIdx: 0, nextEchoIdx: echoIdx + 1, nextBossHp: calcHp(doneSteps) };
    }
    return { nextMode: 'victory', nextHuntIdx: 0, nextForgeIdx: 0, nextChestIdx: 0, nextEchoIdx: 0, nextBossHp: 0 };
  }

  return { nextMode: 'victory', nextHuntIdx: 0, nextForgeIdx: 0, nextChestIdx: 0, nextEchoIdx: 0, nextBossHp: 0 };
}

export function buildPhaseLabelVi(params: {
  mode: CombatMode;
  huntIdx: number;
  huntCount: number;
  forgeIdx?: number;
  forgeCount?: number;
  chestIdx?: number;
  chestCount?: number;
  echoIdx: number;
  echoTotal: number;
  traceRound?: LetterTraceChallenge;
}): string {
  const { mode, huntIdx, huntCount, forgeIdx = 0, forgeCount = 0, chestIdx = 0, chestCount = 0, echoIdx, echoTotal, traceRound } = params;
  if (mode === 'target_hunt') {
    return `Săn Đúng Mục Tiêu (${huntIdx + 1}/${huntCount})`;
  }
  if (mode === 'sound_forge') {
    return `Lò Rèn Ghép Âm (${forgeIdx + 1}/${forgeCount})`;
  }
  if (mode === 'mystery_chest') {
    return `Rương Thính Âm (${chestIdx + 1}/${chestCount})`;
  }
  if (mode === 'letter_trace') {
    return `Vẽ Phù Hiệu "${traceRound?.displayChar || ''}"`;
  }
  if (mode === 'echo_duel') {
    return `Hỏi Đáp & Đấu Chiêu (${echoIdx + 1}/${echoTotal})`;
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
  currentForge?: SoundForgeChallenge;
  currentChest?: MysteryChestChallenge;
  currentEcho?: DialogueChallenge;
}): RoundSpeechConfig {
  const { mode, currentHunt, correctHuntOption, currentForge, currentChest, currentEcho } = params;
  if (mode === 'target_hunt') {
    const targetSpeechEn = currentHunt?.promptAudioEn || correctHuntOption?.speakTextEn || '';
    return {
      targetSpeechEn,
      speakerPromptEn: currentHunt?.promptAudioEn || '',
      targetMeaningVi: currentHunt?.instructionVi || '',
      acceptableKeywords: [targetSpeechEn, correctHuntOption?.phonemeOrWord || ''].filter(Boolean),
      coreKeywords: [correctHuntOption?.phonemeOrWord || '', correctHuntOption?.speakTextEn || ''].filter(Boolean),
      hintPhonemeId: currentHunt?.hintPhonemeId,
    };
  }
  if (mode === 'sound_forge' && currentForge) {
    return {
      targetSpeechEn: currentForge.targetWord,
      speakerPromptEn: currentForge.targetWord,
      targetMeaningVi: `Hợp âm đọc từ "${currentForge.targetWord}" (${currentForge.meaningVi})`,
      acceptableKeywords: [currentForge.targetWord, currentForge.exampleSentenceEn],
      coreKeywords: [currentForge.targetWord],
    };
  }
  if (mode === 'mystery_chest' && currentChest) {
    return {
      targetSpeechEn: currentChest.targetWord,
      speakerPromptEn: currentChest.promptEn,
      targetMeaningVi: `Nghe và mở đúng rương "${currentChest.targetWord}"`,
      acceptableKeywords: [currentChest.targetWord],
      coreKeywords: [currentChest.targetWord],
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

export function computeStrikeCoords(params: {
  mode: CombatMode;
  isPortrait: boolean;
  bossPos: { x: number; y: number };
  targetSlots: Array<{ x: number; y: number }>;
  currentHunt?: TargetHuntRound;
}) {
  const { mode, isPortrait, bossPos, targetSlots, currentHunt } = params;
  let targetCoord = bossPos;
  let dashCoord = isPortrait ? { x: 50, y: 54 } : { x: 52, y: 56 };
  if (mode === 'target_hunt' && currentHunt) {
    const cIdx = Math.max(0, currentHunt.options.findIndex((o) => o.isCorrect));
    targetCoord = targetSlots[cIdx % targetSlots.length];
    dashCoord = isPortrait
      ? { x: targetCoord.x, y: Math.min(72, targetCoord.y + 22) }
      : { x: Math.max(24, targetCoord.x - 18), y: targetCoord.y };
  }
  return { targetCoord, dashCoord };
}

export function collectStageVoiceTexts(
  huntRounds: TargetHuntRound[],
  forgeRounds: SoundForgeChallenge[] | undefined,
  chestRounds: MysteryChestChallenge[] | undefined,
  echoRounds: DialogueChallenge[]
): string[] {
  const texts: string[] = [];
  for (const h of huntRounds) {
    texts.push(h.promptAudioEn);
    h.options.forEach((o) => texts.push(o.speakTextEn));
  }
  for (const fg of forgeRounds || []) texts.push(fg.targetWord, fg.exampleSentenceEn);
  for (const ch of chestRounds || []) texts.push(ch.promptEn, ch.targetWord, ch.distractorWord);
  for (const ec of echoRounds) {
    texts.push(ec.speakerPromptEn, ec.childTargetEn);
    ec.qaChoices?.forEach((c) => texts.push(c.answerEn));
  }
  return texts;
}
