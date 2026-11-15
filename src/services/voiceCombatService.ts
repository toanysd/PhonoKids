import { heroStorage } from './heroStorage';
import { normalizeSpeech, scorePronunciation } from '../utils/pronunciationScorer';

export interface DistractorWordOption {
  wordEn: string;
  labelVi: string;
}

export interface VoiceStrikeResult {
  transcript: string;
  grade: 'super' | 'good' | 'retry';
  starsEarned: 3 | 2 | 0;
  damagePercent: number;
  feedbackVi: string;
  peakVolume: number;
  silentTimeout?: boolean;
  matchedDistractor?: string;
}

export interface VoiceStrikeCallbacks {
  onVolumeChange: (level: number) => void;
  onInterimText: (text: string) => void;
  onResult: (result: VoiceStrikeResult) => void;
  onStatusChange: (status: 'listening' | 'processing' | 'idle') => void;
}

export interface VoiceStrikeOptions {
  distractors?: DistractorWordOption[];
  coreKeywords?: string[];
  windowMs?: number;
}

class VoiceCombatService {
  private recognition: any = null;
  private mediaStream: MediaStream | null = null;
  private mediaSource: MediaStreamAudioSourceNode | null = null;
  private audioCtx: AudioContext | null = null;
  private analyser: AnalyserNode | null = null;
  private rafId: number | null = null;
  private activeTimer: ReturnType<typeof setTimeout> | null = null;

  private isListening = false;
  private strikeSeq = 0;
  private peakVolume = 0;
  private loudStartMs: number | null = null;
  private maxLoudDurationMs = 0;
  private settled = false;
  private latestTranscript = '';

  public isSpeechApiSupported(): boolean {
    const w = window as unknown as {
      SpeechRecognition?: unknown;
      webkitSpeechRecognition?: unknown;
    };
    return Boolean(w.SpeechRecognition || w.webkitSpeechRecognition);
  }

  public async warmUpSession(): Promise<boolean> {
    heroStorage.enableMicQuickConsent();
    if (
      this.mediaStream &&
      this.mediaStream.active &&
      this.analyser &&
      this.audioCtx &&
      this.audioCtx.state !== 'closed'
    ) {
      if (this.audioCtx.state === 'suspended') {
        try {
          await this.audioCtx.resume();
        } catch {
          // Ignore resume block without user gesture
        }
      }
      return true;
    }

    if (!navigator.mediaDevices?.getUserMedia) {
      return false;
    }

    try {
      this.mediaStream = await navigator.mediaDevices.getUserMedia({
        audio: {
          echoCancellation: true,
          noiseSuppression: true,
          autoGainControl: true,
        },
      });
      const AudioCtx =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.audioCtx = new AudioCtx();
      if (this.audioCtx.state === 'suspended') {
        await this.audioCtx.resume().catch(() => undefined);
      }
      this.mediaSource = this.audioCtx.createMediaStreamSource(this.mediaStream);
      this.analyser = this.audioCtx.createAnalyser();
      this.analyser.fftSize = 256;
      this.mediaSource.connect(this.analyser);
      return true;
    } catch {
      return false;
    }
  }

  public async startVoiceStrike(
    targetEn: string,
    acceptableKeywords: string[],
    toddlerForgivingMode: boolean,
    callbacks: VoiceStrikeCallbacks,
    options?: VoiceStrikeOptions
  ): Promise<void> {
    this.stopListening();
    const mySeq = ++this.strikeSeq;
    const windowMs = options?.windowMs ?? 4300;
    const distractors = options?.distractors ?? [];
    const coreKeywords = options?.coreKeywords ?? [];

    this.isListening = true;
    this.settled = false;
    this.peakVolume = 0;
    this.loudStartMs = null;
    this.maxLoudDurationMs = 0;
    this.latestTranscript = '';
    callbacks.onStatusChange('listening');

    await this.startVolumeMeter(callbacks.onVolumeChange);
    if (this.strikeSeq !== mySeq || !this.isListening) return;

    const cleanTarget = normalizeSpeech(targetEn);
    const speechSupported = this.isSpeechApiSupported();

    // Master window timer ensures zero deadlock and preserves full listening window
    // even if browser SpeechRecognition errors early (e.g. offline/no permission).
    this.activeTimer = setTimeout(() => {
      if (this.strikeSeq !== mySeq || !this.isListening || this.settled) return;
      if (this.latestTranscript) {
        const evalRes = this.evaluateCandidates(
          targetEn,
          acceptableKeywords,
          [this.latestTranscript],
          toddlerForgivingMode,
          distractors,
          coreKeywords
        );
        this.finishWithResult(mySeq, evalRes, callbacks);
        return;
      }

      const hasRealVoiceAttempt = this.peakVolume >= 16 && this.maxLoudDurationMs >= 200;
      // Only fall back to mic loudness when Web Speech API is absent on the browser
      if (!speechSupported && toddlerForgivingMode && hasRealVoiceAttempt) {
        this.finishWithResult(
          mySeq,
          {
            transcript: '',
            grade: 'good',
            starsEarned: 2,
            damagePercent: 75,
            feedbackVi: '🎙️ Trình duyệt chưa hỗ trợ nhận diện chữ — tính theo âm lượng mic!',
            peakVolume: this.peakVolume,
          },
          callbacks
        );
      } else {
        this.finishWithResult(
          mySeq,
          {
            transcript: '',
            grade: 'retry',
            starsEarned: 0,
            damagePercent: 0,
            silentTimeout: true,
            feedbackVi: `Bé cùng nghe lại và hô to "${targetEn}" nhé!`,
            peakVolume: this.peakVolume,
          },
          callbacks
        );
      }
    }, windowMs);

    const w = window as unknown as {
      SpeechRecognition?: new () => any;
      webkitSpeechRecognition?: new () => any;
    };
    const SpeechRecClass = w.SpeechRecognition || w.webkitSpeechRecognition;
    if (!SpeechRecClass) return;

    try {
      const rec = new SpeechRecClass();
      this.recognition = rec;
      rec.lang = 'en-US';
      rec.continuous = false;
      rec.interimResults = true;
      rec.maxAlternatives = 4;

      rec.onresult = (event: any) => {
        if (this.strikeSeq !== mySeq || !this.isListening || this.settled) return;
        const resultItem = event.results?.[event.results.length - 1];
        if (!resultItem) return;

        const firstTranscript = String(resultItem[0]?.transcript || '').trim();
        const confidence = resultItem[0]?.confidence;
        if (typeof confidence === 'number' && confidence > 0 && confidence < 0.35 && resultItem.isFinal) {
          this.latestTranscript = firstTranscript;
          callbacks.onInterimText(firstTranscript);
          this.finishWithResult(
            mySeq,
            {
              transcript: firstTranscript,
              grade: 'retry',
              starsEarned: 0,
              damagePercent: 0,
              feedbackVi: `🎙️ Nghe chưa rõ ("${firstTranscript}") — bé đọc lại "${targetEn}" nhé!`,
              peakVolume: this.peakVolume,
            },
            callbacks
          );
          return;
        }

        this.latestTranscript = firstTranscript;
        callbacks.onInterimText(firstTranscript);

        // Only short-circuit before isFinal on exact full-target match
        if (cleanTarget && normalizeSpeech(firstTranscript) === cleanTarget) {
          this.finishWithResult(
            mySeq,
            {
              transcript: firstTranscript,
              grade: 'super',
              starsEarned: 3,
              damagePercent: 100,
              feedbackVi: `SIÊU CHUẨN! Bé phát âm "${firstTranscript || targetEn}" tuyệt vời!`,
              peakVolume: this.peakVolume,
            },
            callbacks
          );
          return;
        }

        if (resultItem.isFinal) {
          const candidates: string[] = [];
          for (let i = 0; i < resultItem.length; i++) {
            const alt = String(resultItem[i]?.transcript || '').trim();
            if (alt) candidates.push(alt);
          }
          if (candidates.length === 0) return;

          const evalRes = this.evaluateCandidates(
            targetEn,
            acceptableKeywords,
            candidates,
            toddlerForgivingMode,
            distractors,
            coreKeywords
          );
          this.finishWithResult(mySeq, evalRes, callbacks);
        }
      };

      rec.onerror = () => {
        if (this.recognition === rec) {
          this.recognition = null;
        }
      };

      rec.onend = () => {
        if (this.recognition === rec) {
          this.recognition = null;
        }
      };

      rec.start();
    } catch {
      this.recognition = null;
    }
  }

  public evaluateCandidates(
    targetEn: string,
    acceptableKeywords: string[],
    candidates: string[],
    toddlerForgivingMode: boolean,
    distractors: DistractorWordOption[] = [],
    coreKeywords: string[] = []
  ): VoiceStrikeResult {
    return scorePronunciation({
      targetEn,
      acceptableKeywords,
      coreKeywords,
      candidates,
      toddlerForgivingMode,
      distractors,
      peakVolume: this.peakVolume,
    });
  }

  private async startVolumeMeter(onVolumeChange: (level: number) => void): Promise<void> {
    const ok = await this.warmUpSession();
    if (!ok || !this.analyser || !this.isListening) {
      onVolumeChange(0);
      return;
    }

    const data = new Uint8Array(this.analyser.frequencyBinCount);
    const tick = () => {
      if (!this.isListening || !this.analyser) return;
      this.analyser.getByteFrequencyData(data);
      let sum = 0;
      for (let i = 0; i < data.length; i++) sum += data[i];
      const avg = sum / data.length;
      const normalized = Math.min(100, Math.round(avg * 1.8));
      if (normalized > this.peakVolume) this.peakVolume = normalized;

      const now = performance.now();
      if (normalized >= 16) {
        if (this.loudStartMs === null) this.loudStartMs = now;
        const dur = now - this.loudStartMs;
        if (dur > this.maxLoudDurationMs) this.maxLoudDurationMs = dur;
      } else {
        this.loudStartMs = null;
      }

      onVolumeChange(normalized);
      this.rafId = requestAnimationFrame(tick);
    };
    this.rafId = requestAnimationFrame(tick);
  }

  private finishWithResult(
    expectedSeq: number,
    result: VoiceStrikeResult,
    callbacks: VoiceStrikeCallbacks
  ) {
    if (this.settled || this.strikeSeq !== expectedSeq) return;
    this.settled = true;
    callbacks.onStatusChange('processing');
    this.stopListening();
    callbacks.onVolumeChange(0);
    callbacks.onStatusChange('idle');
    callbacks.onResult(result);
  }

  /**
   * Stops active speech recognition and RAF sampling while keeping
   * the warmed MediaStream & AudioContext alive for zero-lag next rounds.
   */
  public stopListening(): void {
    this.isListening = false;
    this.strikeSeq++;
    if (this.activeTimer) {
      clearTimeout(this.activeTimer);
      this.activeTimer = null;
    }
    if (this.rafId !== null) {
      cancelAnimationFrame(this.rafId);
      this.rafId = null;
    }
    if (this.recognition) {
      try {
        this.recognition.onresult = null;
        this.recognition.onerror = null;
        this.recognition.onend = null;
        this.recognition.stop();
      } catch {
        // Ignore
      }
      this.recognition = null;
    }
  }

  /** Fully releases hardware microphone tracks & AudioContext when leaving combat/lessons. */
  public releaseSession(): void {
    this.stopListening();
    if (this.mediaSource) {
      try {
        this.mediaSource.disconnect();
      } catch {
        // Ignore
      }
      this.mediaSource = null;
    }
    if (this.mediaStream) {
      this.mediaStream.getTracks().forEach((t) => t.stop());
      this.mediaStream = null;
    }
    if (this.audioCtx) {
      try {
        if (this.audioCtx.state !== 'closed') {
          this.audioCtx.close();
        }
      } catch {
        // Ignore
      }
      this.audioCtx = null;
      this.analyser = null;
    }
  }
}

export const voiceCombatService = new VoiceCombatService();
