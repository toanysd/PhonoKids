import { MicCaptureResult } from '../types/comicGame';
import { audioService } from './audioService';
import { normalizeSpeech, scorePronunciation, tokenSimilarity } from '../utils/pronunciationScorer';

export interface MicCaptureOptions {
  targetText: string;
  acceptableKeywords?: string[];
  toddlerFriendly?: boolean;
  windowMs?: number;
  onWaveform?: (bars: number[], volume: number) => void;
  onInterim?: (transcript: string) => void;
  onStatus?: (status: 'listening' | 'processing' | 'idle') => void;
}

interface PhonoTestMicHook {
  mode: 'stt_match' | 'stt_wrong' | 'stt_network_error_with_voice_wave' | 'blocked';
  transcript?: string;
  peakVolume?: number;
}

interface SpeechRecLike {
  lang: string;
  continuous: boolean;
  interimResults: boolean;
  maxAlternatives: number;
  onresult: ((ev: any) => void) | null;
  onerror: ((ev: any) => void) | null;
  onend: (() => void) | null;
  start: () => void;
  stop: () => void;
}

type SpeechRecCtor = new () => SpeechRecLike;

const DEFAULT_WINDOW_MS = 3400;
const BAR_COUNT = 16;
const IDLE_BARS = new Array<number>(BAR_COUNT).fill(4);
const STT_FALLBACK_ERRORS = new Set(['network', 'service-not-allowed', 'aborted', 'audio-capture', 'no-speech', 'not-allowed']);

const getSpeechRecCtor = (): SpeechRecCtor | null => {
  if (typeof window === 'undefined') return null;
  const w = window as unknown as { SpeechRecognition?: SpeechRecCtor; webkitSpeechRecognition?: SpeechRecCtor };
  return w.SpeechRecognition || w.webkitSpeechRecognition || null;
};

const getTestMicHook = (): PhonoTestMicHook | null => {
  if (typeof window === 'undefined') return null;
  const hook = (window as unknown as { __PHONO_TEST_MIC__?: PhonoTestMicHook }).__PHONO_TEST_MIC__;
  return hook && typeof hook === 'object' && hook.mode ? hook : null;
};

const buildSimulatedBars = (volume: number, phase: number): number[] =>
  Array.from({ length: BAR_COUNT }, (_, i) =>
    Math.max(6, Math.min(100, Math.round(volume * (0.55 + 0.45 * Math.sin(phase * 0.45 + i * 0.65)))))
  );

const computeWrongAccuracy = (target: string, transcript: string): number => {
  const ct = normalizeSpeech(target);
  const cs = normalizeSpeech(transcript);
  return !ct || !cs ? 15 : Math.max(12, Math.min(54, Math.round(tokenSimilarity(ct, cs, false) * 60)));
};

const makeVoiceWavePass = (peakVolume: number): MicCaptureResult => ({
  passed: true, accuracy: Math.min(94, 78 + Math.round(peakVolume / 6)), grade: 'good', transcript: '', mode: 'voice_wave', messageEn: 'GREAT VOICE!',
});

const makeBlockedResult = (): MicCaptureResult => ({
  passed: false, accuracy: 0, grade: 'retry', transcript: '', mode: 'blocked', messageEn: 'ALLOW MIC!',
});

function scoreTranscriptCandidates(options: MicCaptureOptions, candidates: string[], peakVolume: number): MicCaptureResult {
  const primary = (candidates[0] || '').trim();
  const scored = scorePronunciation({
    targetEn: options.targetText,
    acceptableKeywords: options.acceptableKeywords || [],
    candidates,
    toddlerForgivingMode: options.toddlerFriendly ?? true,
    peakVolume,
  });
  if (scored.grade === 'super') {
    const accuracy = Math.min(99, 94 + Math.min(5, Math.round(peakVolume / 25)));
    return { passed: true, accuracy, grade: 'super', transcript: scored.transcript || primary, mode: 'stt', messageEn: 'SUPER!' };
  }
  if (scored.grade === 'good') {
    const accuracy = Math.min(91, 82 + Math.min(9, Math.round(peakVolume / 15)));
    return { passed: true, accuracy, grade: 'good', transcript: scored.transcript || primary, mode: 'stt', messageEn: 'GREAT!' };
  }
  const accuracy = computeWrongAccuracy(options.targetText, primary);
  return { passed: false, accuracy, grade: 'retry', transcript: primary, mode: 'stt', messageEn: primary ? 'TRY AGAIN!' : 'SPEAK LOUDER!' };
}

function extractVoiceBandStats(freqData: Uint8Array, minBin: number, maxBin: number, barMaxBin: number) {
  const voiceBins: number[] = [];
  let sum = 0;
  for (let i = minBin; i <= maxBin; i++) {
    voiceBins.push(freqData[i]);
    sum += freqData[i];
  }
  const bandAvg = voiceBins.length > 0 ? sum / voiceBins.length : 0;
  voiceBins.sort((a, b) => b - a);
  const topCount = Math.min(6, voiceBins.length);
  let topSum = 0;
  for (let i = 0; i < topCount; i++) topSum += voiceBins[i];
  const topAvg = topCount > 0 ? topSum / topCount : 0;
  const volume = Math.min(100, Math.round(((topAvg * 0.75 + bandAvg * 0.25) / 255) * 140));
  const span = Math.max(1, barMaxBin - minBin + 1);
  const bars = Array.from({ length: BAR_COUNT }, (_, b) => {
    const start = minBin + Math.floor((b * span) / BAR_COUNT);
    const end = Math.max(start, minBin + Math.floor(((b + 1) * span) / BAR_COUNT) - 1);
    let peak = 0;
    for (let k = start; k <= end; k++) if (freqData[k] > peak) peak = freqData[k];
    return Math.max(5, Math.min(100, Math.round((peak / 255) * 115)));
  });
  return { bars, volume };
}

class MicEngineService {
  private mediaStream: MediaStream | null = null;
  private audioCtx: AudioContext | null = null;
  private mediaSource: MediaStreamAudioSourceNode | null = null;
  private analyser: AnalyserNode | null = null;
  private recognition: SpeechRecLike | null = null;
  private sampleInterval: ReturnType<typeof setInterval> | null = null;
  private windowTimer: ReturnType<typeof setTimeout> | null = null;
  private activeResolve: ((res: MicCaptureResult) => void) | null = null;
  private captureSeq = 0;
  private capturing = false;

  public isCapturing(): boolean {
    return this.capturing;
  }

  public async warmUp(): Promise<boolean> {
    return this.ensureAudioAnalyser();
  }

  public startCapture(options: MicCaptureOptions): Promise<MicCaptureResult> {
    audioService.stopSpeaking();
    this.stop();
    const seq = ++this.captureSeq;
    this.capturing = true;
    options.onStatus?.('listening');

    const hook = getTestMicHook();
    if (hook) return this.runTestHookCapture(seq, hook, options);

    const SpeechRec = getSpeechRecCtor();
    const speechSupported = Boolean(SpeechRec);
    let rec: SpeechRecLike | null = null;
    let sttErrored = false;
    let sttPermDenied = false;

    // Start SpeechRecognition synchronously inside click handler before any await.
    if (SpeechRec) {
      try {
        rec = new SpeechRec();
        rec.lang = 'en-US';
        rec.continuous = false;
        rec.interimResults = true;
        rec.maxAlternatives = 5;
        this.recognition = rec;
      } catch {
        sttErrored = true;
        rec = null;
      }
    }

    return new Promise<MicCaptureResult>((resolve) => {
      this.activeResolve = resolve;
      let latestTranscript = '';
      let peakVolume = 0;
      let voicedMs = 0;
      let hadSpeech = false;
      let lastSpeechAt = 0;
      let micBlocked = false;
      let hasLiveMic = false;

      const finish = (result: MicCaptureResult) => {
        if (this.captureSeq !== seq) return;
        options.onStatus?.('processing');
        this.clearTimers();
        this.stopRecognitionOnly();
        this.capturing = false;
        this.activeResolve = null;
        options.onWaveform?.([...IDLE_BARS], 0);
        options.onStatus?.('idle');
        resolve(result);
      };

      const evaluateWindowEnd = (): MicCaptureResult => {
        if (micBlocked || (sttPermDenied && !hasLiveMic)) return makeBlockedResult();
        if (latestTranscript) return scoreTranscriptCandidates(options, [latestTranscript], peakVolume);
        const canWave = !speechSupported || sttErrored;
        if (canWave && peakVolume >= 18 && voicedMs >= 220 && voicedMs <= 3000) return makeVoiceWavePass(peakVolume);
        return {
          passed: false,
          accuracy: peakVolume >= 12 ? 32 : 0,
          grade: 'retry',
          transcript: '',
          mode: canWave ? 'voice_wave' : 'stt',
          messageEn: peakVolume < 14 ? 'SPEAK LOUDER!' : 'TRY AGAIN!',
        };
      };

      if (rec) {
        const cleanTarget = normalizeSpeech(options.targetText);
        rec.onresult = (event: any) => {
          if (this.captureSeq !== seq) return;
          const item = event.results?.[event.results.length - 1];
          if (!item) return;
          const first = String(item[0]?.transcript || '').trim();
          if (first) { latestTranscript = first; options.onInterim?.(first); }
          if (cleanTarget && normalizeSpeech(first) === cleanTarget) { finish(scoreTranscriptCandidates(options, [first], peakVolume)); return; }
          if (item.isFinal) {
            const alts = Array.from({ length: item.length }, (_, i) => String(item[i]?.transcript || '').trim()).filter(Boolean);
            if (alts.length > 0) finish(scoreTranscriptCandidates(options, alts, peakVolume));
          }
        };
        rec.onerror = (ev: any) => {
          const code = String(ev?.error || '');
          if (code === 'not-allowed') sttPermDenied = true;
          if (STT_FALLBACK_ERRORS.has(code)) sttErrored = true;
          if (this.recognition === rec) this.recognition = null;
        };
        rec.onend = () => { if (this.recognition === rec) this.recognition = null; };
        try { rec.start(); } catch { sttErrored = true; this.recognition = null; }
      }

      this.windowTimer = setTimeout(() => finish(evaluateWindowEnd()), options.windowMs ?? DEFAULT_WINDOW_MS);

      this.ensureAudioAnalyser()
        .then((ok) => {
          if (this.captureSeq !== seq) return;
          if (!ok || !this.analyser || !this.audioCtx) {
            micBlocked = true;
            if (!speechSupported || sttErrored || sttPermDenied) finish(makeBlockedResult());
            return;
          }
          hasLiveMic = true;
          const analyser = this.analyser;
          const freqData = new Uint8Array(analyser.frequencyBinCount);
          const binHz = (this.audioCtx.sampleRate || 48000) / analyser.fftSize;
          const minBin = Math.max(1, Math.floor(150 / binHz));
          const maxBin = Math.min(freqData.length - 1, Math.ceil(3200 / binHz));
          const barMaxBin = Math.min(freqData.length - 1, Math.ceil(4200 / binHz));
          let lastTick = performance.now();

          this.sampleInterval = setInterval(() => {
            if (this.captureSeq !== seq) return;
            const now = performance.now();
            const dt = Math.min(80, Math.max(10, now - lastTick));
            lastTick = now;
            analyser.getByteFrequencyData(freqData);
            const { bars, volume } = extractVoiceBandStats(freqData, minBin, maxBin, barMaxBin);
            if (volume > peakVolume) peakVolume = volume;
            if (volume >= 18) { voicedMs += dt; hadSpeech = true; lastSpeechAt = now; }
            options.onWaveform?.(bars, volume);
            if ((!speechSupported || sttErrored) && !latestTranscript && hadSpeech && voicedMs >= 320 && now - lastSpeechAt >= 650) {
              finish(evaluateWindowEnd());
            }
          }, 33);
        })
        .catch(() => { if (this.captureSeq === seq) { micBlocked = true; finish(makeBlockedResult()); } });
    });
  }

  private runTestHookCapture(seq: number, hook: PhonoTestMicHook, options: MicCaptureOptions): Promise<MicCaptureResult> {
    return new Promise<MicCaptureResult>((resolve) => {
      this.activeResolve = resolve;
      if (hook.mode === 'blocked') {
        this.capturing = false;
        this.activeResolve = null;
        options.onStatus?.('idle');
        resolve(makeBlockedResult());
        return;
      }
      const simPeak = hook.peakVolume ?? (hook.mode === 'stt_wrong' ? 42 : 56);
      let step = 0;
      this.sampleInterval = setInterval(() => {
        if (this.captureSeq !== seq) return;
        step += 1;
        const vol = Math.max(20, Math.min(95, Math.round(simPeak * (0.75 + 0.25 * Math.sin(step)))));
        options.onWaveform?.(buildSimulatedBars(vol, step), vol);
      }, 50);

      this.windowTimer = setTimeout(() => {
        if (this.captureSeq !== seq) return;
        options.onStatus?.('processing');
        this.clearTimers();
        this.capturing = false;
        this.activeResolve = null;
        options.onWaveform?.([...IDLE_BARS], 0);
        options.onStatus?.('idle');
        if (hook.mode === 'stt_match') {
          const transcript = (hook.transcript || options.targetText).trim();
          const res = scoreTranscriptCandidates(options, [transcript], simPeak);
          resolve({ passed: true, accuracy: Math.max(93, res.accuracy), grade: 'super', transcript, mode: 'stt', messageEn: 'SUPER!' });
        } else if (hook.mode === 'stt_wrong') {
          const wrongText = (hook.transcript || 'apple').trim();
          scorePronunciation({ targetEn: options.targetText, candidates: [wrongText], toddlerForgivingMode: options.toddlerFriendly ?? true });
          resolve({ passed: false, accuracy: computeWrongAccuracy(options.targetText, wrongText), grade: 'retry', transcript: wrongText, mode: 'stt', messageEn: 'TRY AGAIN!' });
        } else {
          resolve(makeVoiceWavePass(simPeak));
        }
      }, 350);
    });
  }

  private async ensureAudioAnalyser(): Promise<boolean> {
    if (this.mediaStream?.active && this.analyser && this.audioCtx && this.audioCtx.state !== 'closed') {
      if (this.audioCtx.state === 'suspended') await this.audioCtx.resume().catch(() => undefined);
      return true;
    }
    if (typeof navigator === 'undefined' || !navigator.mediaDevices?.getUserMedia) return false;
    try {
      this.mediaStream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.audioCtx = new AudioCtx();
      if (this.audioCtx.state === 'suspended') await this.audioCtx.resume().catch(() => undefined);
      this.mediaSource = this.audioCtx.createMediaStreamSource(this.mediaStream);
      this.analyser = this.audioCtx.createAnalyser();
      this.analyser.fftSize = 512;
      this.mediaSource.connect(this.analyser);
      return true;
    } catch { return false; }
  }

  private clearTimers(): void {
    if (this.sampleInterval !== null) clearInterval(this.sampleInterval);
    if (this.windowTimer !== null) clearTimeout(this.windowTimer);
    this.sampleInterval = null;
    this.windowTimer = null;
  }

  private stopRecognitionOnly(): void {
    if (!this.recognition) return;
    try { this.recognition.onresult = null; this.recognition.onerror = null; this.recognition.onend = null; this.recognition.stop(); } catch { /* Ignore */ }
    this.recognition = null;
  }

  public stop(): void {
    this.captureSeq += 1;
    this.capturing = false;
    this.clearTimers();
    this.stopRecognitionOnly();
    const pending = this.activeResolve;
    this.activeResolve = null;
    if (pending) pending({ passed: false, accuracy: 0, grade: 'retry', transcript: '', mode: 'stt', messageEn: 'STOPPED' });
  }

  public release(): void {
    this.stop();
    try { this.mediaSource?.disconnect(); } catch { /* Ignore */ }
    this.mediaSource = null;
    this.mediaStream?.getTracks().forEach((t) => t.stop());
    this.mediaStream = null;
    if (this.audioCtx) {
      try { if (this.audioCtx.state !== 'closed') this.audioCtx.close(); } catch { /* Ignore */ }
      this.audioCtx = null;
      this.analyser = null;
    }
  }
}

export const micEngine = new MicEngineService();
