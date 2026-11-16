import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import confetti from 'canvas-confetti';
import {
  CombatMode,
  CurriculumUnit,
  HeroCharacter,
  QaChoiceOption,
  RivalCharacter,
  StageTargetOption,
} from '../../types/heroGame';
import { BattleBottomControls, BattleTopBar } from './BattleHudOverlay';
import { BattleStageViewport, getStageLayoutCoords } from './BattleStageViewport';
import {
  buildPhaseLabelVi,
  collectStageVoiceTexts,
  computeStrikeCoords,
  deriveRoundSpeechConfig,
  resolveNextCombatStep,
} from './battleRoundHelpers';
import { audioService } from '../../services/audioService';
import { getVisemePhoto } from '../../services/imageService';
import { voiceCombatService } from '../../services/voiceCombatService';
import { useVoiceDirector } from '../../hooks/useVoiceDirector';
import { useArenaMovement } from '../../hooks/useArenaMovement';

interface BattleStageArenaProps {
  unit: CurriculumUnit;
  hero: HeroCharacter;
  rival: RivalCharacter;
  toddlerMode: boolean;
  isOverlayPaused?: boolean;
  onToggleToddlerMode: () => void;
  onOpenRoster: () => void;
  onUnitVictory: (starsEarned: number) => void;
  onNextUnit: () => void;
  onBackToHub: () => void;
}

export const BattleStageArena: React.FC<BattleStageArenaProps> = ({
  unit,
  hero,
  rival,
  toddlerMode,
  isOverlayPaused = false,
  onToggleToddlerMode,
  onOpenRoster,
  onUnitVictory,
  onNextUnit,
  onBackToHub,
}) => {
  const stageRef = useRef<HTMLDivElement | null>(null);
  const [isPortrait, setIsPortrait] = useState<boolean>(() =>
    typeof window !== 'undefined' ? window.innerWidth < 768 : false
  );

  const layout = useMemo(() => getStageLayoutCoords(isPortrait), [isPortrait]);

  const heroPosRef = useRef(layout.heroHome);
  const dpadVelRef = useRef({ dx: 0, dy: 0 });
  const waypointRef = useRef<{ x: number; y: number } | null>(null);
  const lastTappedOptionIdRef = useRef<string | null>(null);
  const strikeLockRef = useRef<boolean>(false);
  const attackTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const [heroPos, setHeroPos] = useState(layout.heroHome);
  const [beamTargetPos, setBeamTargetPos] = useState(layout.bossPos);
  const [heroPose, setHeroPose] = useState<'idle' | 'move' | 'attack' | 'victory'>('idle');
  const [rivalPose, setRivalPose] = useState<'idle' | 'hit'>('idle');
  const [heroHp] = useState(100);
  const [bossHp, setBossHp] = useState(100);

  const [mode, setMode] = useState<CombatMode>(
    unit.targetHuntRounds.length > 0 ? 'target_hunt' : 'echo_duel'
  );
  const [huntIdx, setHuntIdx] = useState(0);
  const [forgeIdx, setForgeIdx] = useState(0);
  const [chestIdx, setChestIdx] = useState(0);
  const [echoIdx, setEchoIdx] = useState(0);

  const [isAttacking, setIsAttacking] = useState(false);
  const [beamActive, setBeamActive] = useState(false);
  const [earnedStars, setEarnedStars] = useState(0);
  const [comboCount, setComboCount] = useState(0);
  const [calloutBanner, setCalloutBanner] = useState('');
  const [manualFeedback, setManualFeedback] = useState('');
  const [victoryCountdownSec, setVictoryCountdownSec] = useState<number | null>(null);
  const [selectedQaChoiceId, setSelectedQaChoiceId] = useState<string | null>(null);
  const [wrongQaChoiceId, setWrongQaChoiceId] = useState<string | null>(null);
  const [selectedChestWord, setSelectedChestWord] = useState<string | null>(null);
  const [wrongChestWord, setWrongChestWord] = useState<string | null>(null);

  const forgeRounds = unit.soundForgeRounds || [];
  const chestRounds = unit.mysteryChestRounds || [];
  const allEchoRounds = useMemo(
    () => [...unit.echoDuelRounds, ...unit.bossRounds],
    [unit.echoDuelRounds, unit.bossRounds]
  );
  const currentHunt = unit.targetHuntRounds[huntIdx];
  const currentForge = forgeRounds[forgeIdx];
  const currentChest = chestRounds[chestIdx];
  const currentEcho = allEchoRounds[echoIdx] || allEchoRounds[0];

  const correctHuntOption = useMemo(
    () => currentHunt?.options.find((o) => o.isCorrect),
    [currentHunt]
  );

  const speechCfg = useMemo(
    () =>
      deriveRoundSpeechConfig({
        mode,
        currentHunt,
        correctHuntOption,
        currentForge,
        currentChest,
        currentEcho,
      }),
    [mode, currentHunt, correctHuntOption, currentForge, currentChest, currentEcho]
  );

  const visemeUrl = useMemo(() => {
    if (!speechCfg.hintPhonemeId) return null;
    return getVisemePhoto('', speechCfg.hintPhonemeId)?.url || null;
  }, [speechCfg.hintPhonemeId]);

  const distractors = useMemo(() => {
    if (mode !== 'target_hunt' || !currentHunt) return [];
    return currentHunt.options
      .filter((o) => !o.isCorrect)
      .map((o) => ({ wordEn: o.speakTextEn, labelVi: o.subLabelVi }));
  }, [mode, currentHunt]);

  useEffect(() => {
    const onResize = () => {
      setIsPortrait(window.innerWidth < 768);
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const resetCombatProgress = useCallback(() => {
    heroPosRef.current = layout.heroHome;
    waypointRef.current = null;
    strikeLockRef.current = false;
    lastTappedOptionIdRef.current = null;
    if (attackTimerRef.current) clearTimeout(attackTimerRef.current);

    setHeroPos(layout.heroHome);
    setBeamTargetPos(layout.bossPos);
    setBossHp(100);
    setMode(unit.targetHuntRounds.length > 0 ? 'target_hunt' : 'echo_duel');
    setHuntIdx(0);
    setForgeIdx(0);
    setChestIdx(0);
    setEchoIdx(0);
    setIsAttacking(false);
    setBeamActive(false);
    setEarnedStars(0);
    setComboCount(0);
    setManualFeedback('');
    setVictoryCountdownSec(null);
    setSelectedQaChoiceId(null);
    setWrongQaChoiceId(null);
    setSelectedChestWord(null);
    setWrongChestWord(null);
  }, [layout.heroHome, layout.bossPos, unit.targetHuntRounds.length]);

  useEffect(() => {
    resetCombatProgress();
    audioService.preloadVoiceClips(
      collectStageVoiceTexts(unit.targetHuntRounds, forgeRounds, chestRounds, allEchoRounds),
      'teacher'
    );
    audioService.preloadVoiceClips([hero.attackCalloutEn], 'hero');
    return () => {
      if (attackTimerRef.current) clearTimeout(attackTimerRef.current);
      voiceCombatService.stopListening();
      audioService.stopSpeaking();
    };
  }, [unit.id]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (mode === 'victory') return;
    waypointRef.current = null;
    lastTappedOptionIdRef.current = null;
    heroPosRef.current = layout.heroHome;
    setHeroPos(layout.heroHome);
    setManualFeedback('');
    setSelectedQaChoiceId(null);
    setWrongQaChoiceId(null);
    setSelectedChestWord(null);
    setWrongChestWord(null);
  }, [mode, huntIdx, forgeIdx, chestIdx, echoIdx, layout.heroHome]);

  const roundStateRef = useRef({
    mode, huntIdx, forgeIdx, chestIdx, echoIdx, earnedStars, currentHunt,
    forgeCount: forgeRounds.length, chestCount: chestRounds.length, allEchoRounds,
    layout, unit, hero, onUnitVictory, onNextUnit,
  });
  roundStateRef.current = {
    mode, huntIdx, forgeIdx, chestIdx, echoIdx, earnedStars, currentHunt,
    forgeCount: forgeRounds.length, chestCount: chestRounds.length, allEchoRounds,
    layout, unit, hero, onUnitVictory, onNextUnit,
  };

  const performDashAndStrike = useCallback((roundStars: number, feedback?: string) => {
    const s = roundStateRef.current;
    if (strikeLockRef.current || s.mode === 'victory') return;
    strikeLockRef.current = true;
    setIsAttacking(true);
    waypointRef.current = null;

    const { targetCoord, dashCoord } = computeStrikeCoords({
      mode: s.mode,
      isPortrait,
      bossPos: s.layout.bossPos,
      targetSlots: s.layout.targetSlots,
      currentHunt: s.currentHunt,
    });

    heroPosRef.current = dashCoord;
    setHeroPos(dashCoord);
    setBeamTargetPos(targetCoord);
    setHeroPose('attack');
    setBeamActive(true);
    setRivalPose('hit');
    setCalloutBanner(s.hero.attackCalloutEn);
    if (feedback) setManualFeedback(feedback);

    audioService.playSuccessJingle();
    audioService.speakEnglish(s.hero.attackCalloutEn, 1.0, 'hero');

    try {
      confetti({
        particleCount: 28,
        spread: 60,
        origin: { x: targetCoord.x / 100, y: targetCoord.y / 100 },
      });
    } catch {
      // Ignore
    }

    const nextStars = Math.max(s.earnedStars, roundStars);
    setEarnedStars(nextStars);
    setComboCount((c) => c + 1);

    const stepPreview = resolveNextCombatStep({
      mode: s.mode,
      huntIdx: s.huntIdx,
      forgeIdx: s.forgeIdx,
      chestIdx: s.chestIdx,
      echoIdx: s.echoIdx,
      huntCount: s.unit.targetHuntRounds.length,
      forgeCount: s.forgeCount,
      chestCount: s.chestCount,
      echoTotal: s.allEchoRounds.length,
      hasLetterTrace: Boolean(s.unit.letterTraceRound),
    });
    setBossHp(stepPreview.nextBossHp);

    if (attackTimerRef.current) clearTimeout(attackTimerRef.current);
    attackTimerRef.current = setTimeout(() => {
      const cur = roundStateRef.current;
      setBeamActive(false);
      setHeroPose('idle');
      setRivalPose('idle');
      setCalloutBanner('');
      strikeLockRef.current = false;
      setIsAttacking(false);

      const stepRes = resolveNextCombatStep({
        mode: cur.mode,
        huntIdx: cur.huntIdx,
        forgeIdx: cur.forgeIdx,
        chestIdx: cur.chestIdx,
        echoIdx: cur.echoIdx,
        huntCount: cur.unit.targetHuntRounds.length,
        forgeCount: cur.forgeCount,
        chestCount: cur.chestCount,
        echoTotal: cur.allEchoRounds.length,
        hasLetterTrace: Boolean(cur.unit.letterTraceRound),
      });

      if (stepRes.nextMode === 'victory') {
        setBossHp(0);
        setMode('victory');
        setHeroPose('victory');
        setVictoryCountdownSec(6);
        cur.onUnitVictory(Math.max(2, nextStars));
        try {
          confetti({ particleCount: 80, spread: 90, origin: { y: 0.6 } });
        } catch {
          // Ignore
        }
      } else {
        setMode(stepRes.nextMode);
        setHuntIdx(stepRes.nextHuntIdx);
        setForgeIdx(stepRes.nextForgeIdx);
        setChestIdx(stepRes.nextChestIdx);
        setEchoIdx(stepRes.nextEchoIdx);
      }
    }, 950);
  }, [isPortrait]);

  const director = useVoiceDirector({
    stepKey: `${unit.id}_${mode}_${huntIdx}_${forgeIdx}_${chestIdx}_${echoIdx}`,
    enabled: mode !== 'victory' && mode !== 'letter_trace',
    paused: Boolean(isOverlayPaused) || isAttacking,
    heroNameVi: hero.nameVi,
    promptPhonemeId: speechCfg.hintPhonemeId,
    speakerPromptEn: speechCfg.speakerPromptEn,
    targetSpeechEn: speechCfg.targetSpeechEn,
    acceptableKeywords: speechCfg.acceptableKeywords,
    coreKeywords: speechCfg.coreKeywords,
    isQuestionAnswer: mode === 'echo_duel' && currentEcho?.interactionType === 'qa',
    questionMeaningVi: currentEcho?.questionMeaningVi,
    distractors,
    toddlerMode,
    onVoiceSuccess: (stars, _isCoop, feedback) => {
      performDashAndStrike(stars, feedback);
    },
  });

  // Auto-advance countdown on victory screen
  useEffect(() => {
    if (mode !== 'victory' || victoryCountdownSec === null || isOverlayPaused) return;
    if (victoryCountdownSec <= 0) {
      roundStateRef.current.onNextUnit();
      return;
    }
    const t = setTimeout(() => {
      setVictoryCountdownSec((c) => (c !== null ? c - 1 : null));
    }, 1000);
    return () => clearTimeout(t);
  }, [mode, victoryCountdownSec, isOverlayPaused]);

  const { triggerManualListen, replayModelAndListen } = director;

  useArenaMovement({
    mode,
    isAttacking,
    isOverlayPaused,
    currentHunt,
    targetSlots: layout.targetSlots,
    targetSpeechEn: speechCfg.targetSpeechEn,
    heroPosRef,
    waypointRef,
    dpadVelRef,
    setHeroPos,
    setHeroPose,
    setManualFeedback,
    triggerManualListen,
    replayModelAndListen,
  });

  const handleStageTap = (e: React.PointerEvent<HTMLDivElement>) => {
    if (mode === 'victory' || !stageRef.current) return;
    const rect = stageRef.current.getBoundingClientRect();
    const xPct = ((e.clientX - rect.left) / rect.width) * 100;
    const yPct = ((e.clientY - rect.top) / rect.height) * 100;
    waypointRef.current = {
      x: Math.max(10, Math.min(88, xPct)),
      y: Math.max(18, Math.min(84, yPct)),
    };
  };

  const handleTapTargetOption = (slot: { x: number; y: number }, opt: StageTargetOption) => {
    if (isAttacking || mode !== 'target_hunt') return;
    if (opt.isCorrect) {
      if (lastTappedOptionIdRef.current === opt.id) {
        director.cancelForManualAction();
        performDashAndStrike(3, `⚡ ${hero.nameVi} chạm mục tiêu tung chiêu!`);
        return;
      }
      lastTappedOptionIdRef.current = opt.id;
      waypointRef.current = { x: slot.x, y: isPortrait ? Math.min(72, slot.y + 18) : slot.y };
      audioService.playPopSound(620);
      audioService.speakEnglish(opt.speakTextEn, 0.92);
      director.triggerManualListen();
      return;
    }

    audioService.playGentleTryAgain();
    audioService.speakEnglish(opt.speakTextEn, 0.95);
    setManualFeedback(
      `Đó là "${opt.labelEn}" (${opt.subLabelVi})! Bé thử nói hoặc chạm "${speechCfg.targetSpeechEn}" nhé!`
    );
  };

  const handleSwitchMode = (nextMode: Exclude<CombatMode, 'victory'>) => {
    if (strikeLockRef.current || isAttacking) return;
    director.cancelForManualAction();
    audioService.stopSpeaking();
    setSelectedQaChoiceId(null);
    setWrongQaChoiceId(null);
    setSelectedChestWord(null);
    setWrongChestWord(null);
    setManualFeedback('');
    setMode(nextMode);
    if (nextMode === 'target_hunt') setHuntIdx(0);
    if (nextMode === 'sound_forge') setForgeIdx(0);
    if (nextMode === 'mystery_chest') setChestIdx(0);
    if (nextMode === 'echo_duel') setEchoIdx(0);
  };

  const handleForgeComplete = () => {
    performDashAndStrike(3, `⚒️ ${hero.nameVi} hợp âm "${currentForge?.targetWord || ''}" tung chiêu!`);
  };

  const handlePickChest = (word: string, isTarget: boolean) => {
    if (isAttacking || mode !== 'mystery_chest') return;
    if (!isTarget) {
      setWrongChestWord(word);
      setComboCount(0);
      audioService.playGentleTryAgain();
      audioService.speakEnglish(word, 1.0);
      setManualFeedback(`"${word}" chưa đúng rương rồi! Nghe kỹ và chọn rương còn lại nhé!`);
      window.setTimeout(() => setWrongChestWord((prev) => (prev === word ? null : prev)), 1800);
      return;
    }
    if (selectedChestWord === word) {
      director.cancelForManualAction();
      performDashAndStrike(3, `🧰 Mở đúng kho báu "${word}"!`);
      return;
    }
    setWrongChestWord(null);
    setSelectedChestWord(word);
    audioService.playPopSound(660);
    audioService.speakEnglish(word, 1.0);
    setManualFeedback(`🎙️ Chuẩn rồi! Nói to "${word}" hoặc chạm rương lần nữa để mở!`);
    director.triggerManualListen();
  };

  const handleSelectQaChoice = (choice: QaChoiceOption) => {
    if (isAttacking || mode !== 'echo_duel') return;
    if (!choice.isCorrect) {
      setWrongQaChoiceId(choice.id);
      audioService.playGentleTryAgain();
      audioService.speakEnglish(choice.answerEn, 0.92);
      setManualFeedback(`"${choice.answerEn}" (${choice.answerVi}) chưa khớp câu hỏi rồi! Bé chọn thẻ khác nhé!`);
      window.setTimeout(() => setWrongQaChoiceId((prev) => (prev === choice.id ? null : prev)), 1800);
      return;
    }

    if (selectedQaChoiceId === choice.id) {
      director.cancelForManualAction();
      performDashAndStrike(3, `💬 Chính xác! ${hero.nameVi} hô vang "${choice.answerEn}" tung chiêu!`);
      return;
    }

    setWrongQaChoiceId(null);
    setSelectedQaChoiceId(choice.id);
    audioService.playPopSound(660);
    audioService.speakEnglish(choice.answerEn, 0.92);
    setManualFeedback(`🎙️ Đúng rồi! Bé nói to "${choice.answerEn}" hoặc chạm thẻ lần nữa để đánh!`);
    director.triggerManualListen();
  };

  const handleTraceComplete = () => {
    performDashAndStrike(
      3,
      `✍️ ${hero.nameVi} vẽ chuẩn chữ "${unit.letterTraceRound?.displayChar || ''}" nạp đủ năng lượng!`
    );
  };

  const phaseLabel = buildPhaseLabelVi({
    mode,
    huntIdx,
    huntCount: unit.targetHuntRounds.length,
    forgeIdx,
    forgeCount: forgeRounds.length,
    chestIdx,
    chestCount: chestRounds.length,
    echoIdx,
    echoTotal: allEchoRounds.length,
    traceRound: unit.letterTraceRound,
  });

  return (
    <div className="w-full h-full flex flex-col justify-between overflow-hidden bg-slate-950">
      <BattleTopBar
        unitTitleVi={unit.titleVi}
        phaseLabelVi={phaseLabel}
        hero={hero}
        rival={rival}
        heroHp={heroHp}
        bossHp={bossHp}
        starsEarned={earnedStars}
        comboCount={comboCount}
        toddlerMode={toddlerMode}
        mode={mode}
        hasLetterTrace={Boolean(unit.letterTraceRound)}
        hasSoundForge={forgeRounds.length > 0}
        hasMysteryChest={chestRounds.length > 0}
        onSwitchMode={handleSwitchMode}
        onToggleToddlerMode={onToggleToddlerMode}
        onOpenRoster={onOpenRoster}
        onBackToHub={() => {
          voiceCombatService.releaseSession();
          onBackToHub();
        }}
      />

      <BattleStageViewport
        stageRef={stageRef}
        unit={unit}
        hero={hero}
        rival={rival}
        mode={mode}
        isPortrait={isPortrait}
        heroPos={heroPos}
        beamTargetPos={beamTargetPos}
        heroPose={heroPose}
        rivalPose={rivalPose}
        directorPhase={director.directorPhase}
        showGuidingHand={director.showGuidingHand}
        isListening={director.isListening}
        micVolume={director.micVolume}
        beamActive={beamActive}
        calloutBanner={calloutBanner}
        earnedStars={earnedStars}
        victoryCountdownSec={victoryCountdownSec}
        currentHunt={currentHunt}
        currentForge={currentForge}
        currentChest={currentChest}
        currentEcho={currentEcho}
        selectedQaChoiceId={selectedQaChoiceId}
        wrongQaChoiceId={wrongQaChoiceId}
        selectedChestWord={selectedChestWord}
        wrongChestWord={wrongChestWord}
        onStageTap={handleStageTap}
        onTapTargetOption={handleTapTargetOption}
        onSelectQaChoice={handleSelectQaChoice}
        onForgeComplete={handleForgeComplete}
        onPickChest={handlePickChest}
        onReplayChestPrompt={() => {
          if (currentChest) {
            audioService.speakEnglish(currentChest.promptEn, 1.0);
            director.triggerManualListen();
          }
        }}
        onTraceComplete={handleTraceComplete}
        onTapRival={() => {
          if (currentEcho) {
            audioService.speakEnglish(currentEcho.speakerPromptEn, 0.92);
            director.triggerManualListen();
          }
        }}
        onReplay={resetCombatProgress}
        onNextUnit={onNextUnit}
        onCancelVictoryCountdown={() => setVictoryCountdownSec(null)}
      />

      <BattleBottomControls
        isListening={director.isListening}
        micVolume={director.micVolume}
        directorPhase={director.directorPhase}
        targetSpeechEn={
          mode === 'letter_trace' ? unit.letterTraceRound?.exampleWordEn || '' : speechCfg.targetSpeechEn
        }
        targetMeaningVi={
          mode === 'letter_trace' ? unit.letterTraceRound?.instructionVi || '' : speechCfg.targetMeaningVi
        }
        interimText={mode === 'letter_trace' ? '' : director.interimText}
        feedbackText={mode === 'letter_trace' ? manualFeedback : manualFeedback || director.feedbackText}
        visemeUrl={visemeUrl}
        onListenModel={
          mode === 'letter_trace'
            ? () => {
                if (unit.letterTraceRound) {
                  audioService.speakPhoneme(unit.letterTraceRound.phonemeId);
                  audioService.speakEnglish(unit.letterTraceRound.exampleWordEn, 0.9);
                }
              }
            : director.replayModelAndListen
        }
        onStartVoiceStrike={director.triggerManualListen}
        onTapBackupStrike={() => {
          director.cancelForManualAction();
          performDashAndStrike(3, `⚡ ${hero.nameVi} tung chiêu xuất sắc!`);
        }}
        onDpadPress={(dx, dy) => {
          waypointRef.current = null;
          dpadVelRef.current = { dx, dy };
        }}
        onDpadRelease={() => {
          dpadVelRef.current = { dx: 0, dy: 0 };
        }}
      />
    </div>
  );
};
