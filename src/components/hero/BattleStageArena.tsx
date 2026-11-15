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
  const [echoIdx, setEchoIdx] = useState(0);

  const [isAttacking, setIsAttacking] = useState(false);
  const [beamActive, setBeamActive] = useState(false);
  const [earnedStars, setEarnedStars] = useState(0);
  const [calloutBanner, setCalloutBanner] = useState('');
  const [manualFeedback, setManualFeedback] = useState('');
  const [victoryCountdownSec, setVictoryCountdownSec] = useState<number | null>(null);
  const [selectedQaChoiceId, setSelectedQaChoiceId] = useState<string | null>(null);
  const [wrongQaChoiceId, setWrongQaChoiceId] = useState<string | null>(null);

  const allEchoRounds = useMemo(
    () => [...unit.echoDuelRounds, ...unit.bossRounds],
    [unit.echoDuelRounds, unit.bossRounds]
  );
  const currentHunt = unit.targetHuntRounds[huntIdx];
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
        currentEcho,
      }),
    [mode, currentHunt, correctHuntOption, currentEcho]
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

  useEffect(() => {
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
    setEchoIdx(0);
    setIsAttacking(false);
    setBeamActive(false);
    setEarnedStars(0);
    setManualFeedback('');
    setVictoryCountdownSec(null);
    setSelectedQaChoiceId(null);
    setWrongQaChoiceId(null);

    return () => {
      if (attackTimerRef.current) clearTimeout(attackTimerRef.current);
      voiceCombatService.stopListening();
      audioService.stopSpeaking();
    };
  }, [unit.id, unit.targetHuntRounds.length]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (mode === 'victory') return;
    waypointRef.current = null;
    lastTappedOptionIdRef.current = null;
    heroPosRef.current = layout.heroHome;
    setHeroPos(layout.heroHome);
    setManualFeedback('');
    setSelectedQaChoiceId(null);
    setWrongQaChoiceId(null);
  }, [mode, huntIdx, echoIdx, layout.heroHome]);

  const roundStateRef = useRef({
    mode,
    huntIdx,
    echoIdx,
    earnedStars,
    currentHunt,
    allEchoRounds,
    layout,
    unit,
    hero,
    onUnitVictory,
    onNextUnit,
  });
  roundStateRef.current = {
    mode,
    huntIdx,
    echoIdx,
    earnedStars,
    currentHunt,
    allEchoRounds,
    layout,
    unit,
    hero,
    onUnitVictory,
    onNextUnit,
  };

  const performDashAndStrike = useCallback((roundStars: number, feedback?: string) => {
    const s = roundStateRef.current;
    if (strikeLockRef.current || s.mode === 'victory') return;
    strikeLockRef.current = true;
    setIsAttacking(true);
    waypointRef.current = null;

    let targetCoord = s.layout.bossPos;
    let dashCoord = isPortrait ? { x: 50, y: 54 } : { x: 52, y: 56 };

    if (s.mode === 'target_hunt' && s.currentHunt) {
      const cIdx = Math.max(
        0,
        s.currentHunt.options.findIndex((o) => o.isCorrect)
      );
      targetCoord = s.layout.targetSlots[cIdx % s.layout.targetSlots.length];
      dashCoord = isPortrait
        ? { x: targetCoord.x, y: Math.min(72, targetCoord.y + 22) }
        : { x: Math.max(24, targetCoord.x - 18), y: targetCoord.y };
    }

    heroPosRef.current = dashCoord;
    setHeroPos(dashCoord);
    setBeamTargetPos(targetCoord);
    setHeroPose('attack');
    setBeamActive(true);
    setRivalPose('hit');
    setCalloutBanner(s.hero.attackCalloutEn);
    if (feedback) setManualFeedback(feedback);

    audioService.playSuccessJingle();
    audioService.speakEnglish(s.hero.attackCalloutEn, 1.05);

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

    const stepPreview = resolveNextCombatStep({
      mode: s.mode,
      huntIdx: s.huntIdx,
      echoIdx: s.echoIdx,
      huntCount: s.unit.targetHuntRounds.length,
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
        echoIdx: cur.echoIdx,
        huntCount: cur.unit.targetHuntRounds.length,
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
        setEchoIdx(stepRes.nextEchoIdx);
      }
    }, 950);
  }, [isPortrait]);

  const director = useVoiceDirector({
    stepKey: `${unit.id}_${mode}_${huntIdx}_${echoIdx}`,
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
    setManualFeedback('');
    setMode(nextMode);
    if (nextMode === 'target_hunt') setHuntIdx(0);
    if (nextMode === 'echo_duel') setEchoIdx(0);
  };

  const handleSelectQaChoice = (choice: QaChoiceOption) => {
    if (isAttacking || mode !== 'echo_duel') return;
    if (!choice.isCorrect) {
      setWrongQaChoiceId(choice.id);
      audioService.playGentleTryAgain();
      audioService.speakEnglish(choice.answerEn, 0.92);
      setManualFeedback(`"${choice.answerEn}" (${choice.answerVi}) chưa khớp câu hỏi rồi! Bé chọn thẻ khác nhé!`);
      window.setTimeout(() => setWrongQaChoiceId((prev) => (prev === choice.id ? null : prev)), 900);
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
        toddlerMode={toddlerMode}
        mode={mode}
        hasLetterTrace={Boolean(unit.letterTraceRound)}
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
        currentEcho={currentEcho}
        selectedQaChoiceId={selectedQaChoiceId}
        wrongQaChoiceId={wrongQaChoiceId}
        onStageTap={handleStageTap}
        onTapTargetOption={handleTapTargetOption}
        onSelectQaChoice={handleSelectQaChoice}
        onTraceComplete={handleTraceComplete}
        onTapRival={() => {
          if (currentEcho) {
            audioService.speakEnglish(currentEcho.speakerPromptEn, 0.92);
            director.triggerManualListen();
          }
        }}
        onReplay={() => {
          setVictoryCountdownSec(null);
          setBossHp(100);
          setSelectedQaChoiceId(null);
          setWrongQaChoiceId(null);
          setMode(unit.targetHuntRounds.length > 0 ? 'target_hunt' : 'echo_duel');
          setHuntIdx(0);
          setEchoIdx(0);
          setEarnedStars(0);
        }}
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
