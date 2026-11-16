import { useCallback, useEffect, useRef, useState } from 'react';
import { audioService } from '../services/audioService';
import {
  DistractorWordOption,
  voiceCombatService,
  VoiceStrikeResult,
} from '../services/voiceCombatService';

export type VoiceDirectorPhase =
  | 'model_speaking'
  | 'listening_1'
  | 'nudge_hint'
  | 'listening_2'
  | 'coop_assist'
  | 'celebrating';

export interface UseVoiceDirectorOptions {
  stepKey: string;
  enabled: boolean;
  paused: boolean;
  heroNameVi: string;
  promptPhonemeId?: string;
  speakerPromptEn: string;
  targetSpeechEn: string;
  acceptableKeywords: string[];
  coreKeywords?: string[];
  isQuestionAnswer?: boolean;
  questionMeaningVi?: string;
  distractors?: DistractorWordOption[];
  toddlerMode: boolean;
  onVoiceSuccess: (stars: 2 | 3, isCoopAssist: boolean, feedbackVi: string) => void;
}

export interface UseVoiceDirectorState {
  directorPhase: VoiceDirectorPhase;
  isListening: boolean;
  micVolume: number;
  interimText: string;
  feedbackText: string;
  showGuidingHand: boolean;
  replayModelAndListen: () => void;
  triggerManualListen: () => void;
  cancelForManualAction: () => void;
}

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/** Plays phoneme + English TTS with timeout protection against silent/headless speechSynthesis stalls. */
async function speakGuarded(
  textEn: string,
  rate: number,
  phonemeId?: string
): Promise<void> {
  if (phonemeId) {
    await Promise.race([audioService.playPhoneme(phonemeId), sleep(1600)]);
  }
  if (!textEn) return;

  const speechPromise = audioService.speakEnglish(textEn, rate, 'teacher');
  const maxMs = Math.min(8500, Math.max(2200, textEn.length * 135));

  await Promise.race([
    speechPromise,
    (async () => {
      await sleep(750);
      if (!audioService.isCurrentlySpeaking()) {
        await sleep(300);
        if (!audioService.isCurrentlySpeaking()) {
          return;
        }
      }
      await sleep(maxMs - 750);
    })(),
  ]);
}

function listenOnceAsync(
  targetEn: string,
  keywords: string[],
  toddlerMode: boolean,
  distractors: DistractorWordOption[],
  coreKeywords: string[],
  onVolume: (v: number) => void,
  onInterim: (txt: string) => void
): Promise<VoiceStrikeResult> {
  return new Promise((resolve) => {
    voiceCombatService.startVoiceStrike(
      targetEn,
      keywords,
      toddlerMode,
      {
        onVolumeChange: onVolume,
        onInterimText: onInterim,
        onStatusChange: () => {},
        onResult: (res) => resolve(res),
      },
      { distractors, coreKeywords, windowMs: 4300 }
    );
  });
}

export function useVoiceDirector(options: UseVoiceDirectorOptions): UseVoiceDirectorState {
  const [directorPhase, setDirectorPhase] = useState<VoiceDirectorPhase>('model_speaking');
  const [isListening, setIsListening] = useState(false);
  const [micVolume, setMicVolume] = useState(0);
  const [interimText, setInterimText] = useState('');
  const [feedbackText, setFeedbackText] = useState('');
  const [showGuidingHand, setShowGuidingHand] = useState(false);

  const runIdRef = useRef(0);
  const cfgRef = useRef(options);
  cfgRef.current = options;

  const runSequence = useCallback(
    async (startFrom: 'model_speaking' | 'listening_1', initialDelayMs: number = 0) => {
      const myRunId = ++runIdRef.current;
      const isAlive = () =>
        runIdRef.current === myRunId && cfgRef.current.enabled && !cfgRef.current.paused;

      voiceCombatService.stopListening();
      audioService.stopSpeaking();
      setIsListening(false);
      setMicVolume(0);
      setInterimText('');
      setShowGuidingHand(false);

      if (!isAlive()) return;
      if (initialDelayMs > 0) {
        setDirectorPhase('model_speaking');
        await sleep(initialDelayMs);
        if (!isAlive()) return;
      }
      const cfg = cfgRef.current;

    if (startFrom === 'model_speaking') {
      setDirectorPhase('model_speaking');
      setFeedbackText(
        cfg.isQuestionAnswer
          ? `❓ Nghe câu hỏi: "${cfg.speakerPromptEn}"${cfg.questionMeaningVi ? ` (${cfg.questionMeaningVi})` : ''}`
          : `🔊 Nghe mẫu rồi cùng nói "${cfg.targetSpeechEn}" nhé!`
      );
      await speakGuarded(cfg.speakerPromptEn, 0.93, cfg.promptPhonemeId);
      if (!isAlive()) return;
      await sleep(180);
      if (!isAlive()) return;
    }

    // Tier 1: Auto-open Mic
    setDirectorPhase('listening_1');
    setIsListening(true);
    setFeedbackText(
      cfg.isQuestionAnswer
        ? `💬 Chọn thẻ đúng hoặc nói to: "${cfg.targetSpeechEn}"`
        : `🎙️ Tới lượt bé nói: "${cfg.targetSpeechEn}"`
    );
    audioService.playPopSound(740);

    const res1 = await listenOnceAsync(
      cfg.targetSpeechEn,
      cfg.acceptableKeywords,
      cfg.toddlerMode,
      cfg.distractors || [],
      cfg.coreKeywords || [],
      (v) => isAlive() && setMicVolume(v),
      (txt) => isAlive() && setInterimText(txt)
    );
    if (!isAlive()) return;
    setIsListening(false);
    setMicVolume(0);

    if (res1.grade !== 'retry') {
      setDirectorPhase('celebrating');
      setFeedbackText(res1.feedbackVi);
      cfgRef.current.onVoiceSuccess(res1.starsEarned === 3 ? 3 : 2, false, res1.feedbackVi);
      return;
    }

    // Tier 2 (~4.5s): Spotlight Guiding Hand + Slow Model Replay + Second Mic Window
    setDirectorPhase('nudge_hint');
    setShowGuidingHand(true);
    setFeedbackText(
      res1.matchedDistractor
        ? res1.feedbackVi
        : `👆 Nhìn bàn tay vàng và nói theo nhé: "${cfg.targetSpeechEn}"!`
    );
    await speakGuarded(cfg.targetSpeechEn, 0.82);
    if (!isAlive()) return;
    await sleep(180);
    if (!isAlive()) return;

    setDirectorPhase('listening_2');
    setIsListening(true);
    audioService.playPopSound(760);

    const res2 = await listenOnceAsync(
      cfg.targetSpeechEn,
      cfg.acceptableKeywords,
      cfg.toddlerMode,
      cfg.distractors || [],
      cfg.coreKeywords || [],
      (v) => isAlive() && setMicVolume(v),
      (txt) => isAlive() && setInterimText(txt)
    );
    if (!isAlive()) return;
    setIsListening(false);
    setMicVolume(0);

    if (res2.grade !== 'retry') {
      setDirectorPhase('celebrating');
      setFeedbackText(res2.feedbackVi);
      cfgRef.current.onVoiceSuccess(res2.starsEarned === 3 ? 3 : 2, false, res2.feedbackVi);
      return;
    }

    // Tier 3 (~9s): Zero-Deadlock Hero Co-op Assist
    setDirectorPhase('coop_assist');
    const coopLine = `🤝 ${cfg.heroNameVi} trợ lực cùng bé hô vang: "${cfg.targetSpeechEn}"!`;
    setFeedbackText(coopLine);
    await speakGuarded(cfg.targetSpeechEn, 0.9);
    if (!isAlive()) return;
    await sleep(220);
    if (!isAlive()) return;

    setDirectorPhase('celebrating');
    const assistDone = `🤝 ${cfg.heroNameVi} & bé cùng tung chiêu "${cfg.targetSpeechEn}"!`;
    setFeedbackText(assistDone);
    cfgRef.current.onVoiceSuccess(2, true, assistDone);
  }, []);

  useEffect(() => {
    if (!options.enabled || options.paused) {
      runIdRef.current++;
      voiceCombatService.stopListening();
      audioService.stopSpeaking();
      setIsListening(false);
      setMicVolume(0);
      return;
    }
    runSequence('model_speaking', 160);

    return () => {
      runIdRef.current++;
      voiceCombatService.stopListening();
      audioService.stopSpeaking();
    };
  }, [options.stepKey, options.enabled, options.paused, runSequence]);

  const replayModelAndListen = useCallback(() => {
    if (!cfgRef.current.enabled || cfgRef.current.paused) return;
    runSequence('model_speaking');
  }, [runSequence]);

  const triggerManualListen = useCallback(() => {
    if (!cfgRef.current.enabled || cfgRef.current.paused) return;
    runSequence('listening_1');
  }, [runSequence]);

  const cancelForManualAction = useCallback(() => {
    runIdRef.current++;
    voiceCombatService.stopListening();
    audioService.stopSpeaking();
    setDirectorPhase('celebrating');
    setIsListening(false);
    setMicVolume(0);
    setInterimText('');
    setShowGuidingHand(false);
  }, []);

  return {
    directorPhase,
    isListening,
    micVolume,
    interimText,
    feedbackText,
    showGuidingHand,
    replayModelAndListen,
    triggerManualListen,
    cancelForManualAction,
  };
}
