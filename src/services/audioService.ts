import voiceManifestJson from '../data/voiceManifest.json';
import { normalizeVoiceLookup, VoiceRole } from '../utils/voiceKey';
import {
  playAnimalSfx,
  playGentleTryAgainSfx,
  playMagicChimeSfx,
  playPopSfx,
  playSuccessJingleSfx,
} from './sfxService';

interface VoiceManifestEntry {
  f: string;
  w?: number[][];
}

const VOICE_MANIFEST = voiceManifestJson as Record<string, VoiceManifestEntry>;

// Web Audio API and Studio Neural Voice Service for Children
class AudioService {
  private audioCtx: AudioContext | null = null;
  private voiceSpeed: number = 0.85; // 0.85 = default natural kid pacing for studio clips
  private accent: 'US' | 'UK' = 'US';
  private soundEnabled: boolean = true;
  private activeUtterance: SpeechSynthesisUtterance | null = null;
  private activeVoiceAudio: HTMLAudioElement | null = null;
  private activeSpeechResolve: (() => void) | null = null;
  private speakTimerId: ReturnType<typeof setTimeout> | null = null;
  private wordTimers: number[] = [];
  private voiceAudioCache: Record<string, HTMLAudioElement> = {};
  private lastCancelAt: number = 0;

  constructor() {
    // AudioContext will be initialized on first user gesture
  }

  private getContext(): AudioContext {
    if (!this.audioCtx) {
      const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.audioCtx = new AudioContextClass();
    }
    if (this.audioCtx.state === 'suspended') {
      this.audioCtx.resume();
    }
    return this.audioCtx;
  }

  public setSoundEnabled(enabled: boolean) {
    this.soundEnabled = enabled;
  }

  public isSoundEnabled(): boolean {
    return this.soundEnabled;
  }

  public setVoiceSpeed(speed: number) {
    this.voiceSpeed = speed;
  }

  public setAccent(accent: 'US' | 'UK') {
    this.accent = accent;
  }

  // Play procedural sound effects cleanly without external asset risk
  public playPopSound(pitch: number = 440) {
    if (!this.soundEnabled) return;
    try { playPopSfx(this.getContext(), pitch); } catch { /* ignore */ }
  }

  public playSuccessJingle() {
    if (!this.soundEnabled) return;
    try { playSuccessJingleSfx(this.getContext()); } catch { /* ignore */ }
  }

  public playGentleTryAgain() {
    if (!this.soundEnabled) return;
    try { playGentleTryAgainSfx(this.getContext()); } catch { /* ignore */ }
  }

  public playMagicChime() {
    if (!this.soundEnabled) return;
    try { playMagicChimeSfx(this.getContext()); } catch { /* ignore */ }
  }

  public playAnimalSound(type: string) {
    if (!this.soundEnabled) return;
    try { playAnimalSfx(this.getContext(), type); } catch { this.playPopSound(600); }
  }

  public isCurrentlySpeaking(): boolean {
    const audioBusy = Boolean(
      this.activeVoiceAudio && !this.activeVoiceAudio.paused && !this.activeVoiceAudio.ended
    );
    const synthBusy = Boolean(
      typeof window !== 'undefined' &&
        'speechSynthesis' in window &&
        (window.speechSynthesis.speaking || window.speechSynthesis.pending)
    );
    return audioBusy || synthBusy;
  }

  private lookupVoiceEntry(text: string, role: VoiceRole): VoiceManifestEntry | null {
    const norm = normalizeVoiceLookup(text);
    if (!norm) return null;
    return VOICE_MANIFEST[`${role}|${norm}`] || VOICE_MANIFEST[`teacher|${norm}`] || null;
  }

  public preloadVoiceClips(texts: string[], role: VoiceRole = 'teacher'): void {
    if (typeof Audio === 'undefined') return;
    let added = 0;
    for (const raw of texts) {
      if (added >= 24) break;
      const entry = this.lookupVoiceEntry(raw, role);
      if (entry && !this.voiceAudioCache[entry.f]) {
        const audio = new Audio(entry.f);
        audio.preload = 'auto';
        this.voiceAudioCache[entry.f] = audio;
        added += 1;
      }
    }
  }

  private clearWordTimers() {
    for (const tid of this.wordTimers) {
      clearTimeout(tid);
    }
    this.wordTimers = [];
  }

  private cancelSpeechInternal() {
    if (this.speakTimerId !== null) {
      clearTimeout(this.speakTimerId);
      this.speakTimerId = null;
    }
    this.clearWordTimers();

    if (this.activeVoiceAudio) {
      try {
        this.activeVoiceAudio.onended = null;
        this.activeVoiceAudio.onerror = null;
        this.activeVoiceAudio.pause();
        this.activeVoiceAudio.currentTime = 0;
      } catch {
        // Ignore audio reset errors
      }
      this.activeVoiceAudio = null;
    }

    const prevResolve = this.activeSpeechResolve;
    this.activeSpeechResolve = null;
    this.activeUtterance = null;
    if (prevResolve) prevResolve();

    if (
      typeof window !== 'undefined' &&
      'speechSynthesis' in window &&
      (window.speechSynthesis.speaking || window.speechSynthesis.pending)
    ) {
      window.speechSynthesis.cancel();
      this.lastCancelAt = performance.now();
    }
  }

  private playManifestEntry(
    entry: VoiceManifestEntry,
    onWordIndex?: (idx: number | null) => void
  ): Promise<void> {
    this.cancelSpeechInternal();
    return new Promise((resolve) => {
      let settled = false;
      let audio = this.voiceAudioCache[entry.f];
      if (!audio) {
        audio = new Audio(entry.f);
        audio.preload = 'auto';
        if (Object.keys(this.voiceAudioCache).length < 90) {
          this.voiceAudioCache[entry.f] = audio;
        }
      }

      const finish = () => {
        if (settled) return;
        settled = true;
        this.clearWordTimers();
        if (this.speakTimerId !== null) {
          clearTimeout(this.speakTimerId);
          this.speakTimerId = null;
        }
        audio.onended = null;
        audio.onerror = null;
        if (this.activeVoiceAudio === audio) {
          this.activeVoiceAudio = null;
        }
        if (this.activeSpeechResolve === finish) {
          this.activeSpeechResolve = null;
        }
        onWordIndex?.(null);
        resolve();
      };

      const rate =
        Math.abs(this.voiceSpeed - 0.85) < 0.02
          ? 1.0
          : Math.max(0.8, Math.min(1.25, this.voiceSpeed / 0.85));

      try {
        audio.currentTime = 0;
      } catch {
        // Ignore seek errors before metadata loads
      }
      audio.playbackRate = rate;
      if ('preservesPitch' in audio) audio.preservesPitch = true;
      const webkitAudio = audio as HTMLAudioElement & { webkitPreservesPitch?: boolean };
      if ('webkitPreservesPitch' in webkitAudio) webkitAudio.webkitPreservesPitch = true;

      this.activeVoiceAudio = audio;
      this.activeSpeechResolve = finish;
      audio.onended = finish;
      audio.onerror = finish;
      this.speakTimerId = setTimeout(finish, 18000);

      if (onWordIndex && entry.w && entry.w.length > 0) {
        entry.w.forEach(([startMs], idx) => {
          const tid = window.setTimeout(() => {
            if (!settled) onWordIndex(idx);
          }, Math.round(startMs / rate));
          this.wordTimers.push(tid);
        });
      }

      audio.play().catch(finish);
    });
  }

  private dispatchUtterance(utterance: SpeechSynthesisUtterance): Promise<void> {
    this.cancelSpeechInternal();
    return new Promise((resolve) => {
      let settled = false;
      const finish = () => {
        if (settled) return;
        settled = true;
        if (this.activeUtterance === utterance) {
          this.activeUtterance = null;
        }
        if (this.activeSpeechResolve === finish) {
          this.activeSpeechResolve = null;
        }
        resolve();
      };

      // Hold strong reference on instance so Chromium V8 does not GC mid-sentence
      this.activeUtterance = utterance;
      this.activeSpeechResolve = finish;
      utterance.onend = finish;
      utterance.onerror = finish;

      const startSpeaking = () => {
        if (this.activeUtterance !== utterance || settled) return;
        if (window.speechSynthesis.paused) {
          window.speechSynthesis.resume();
        }
        window.speechSynthesis.speak(utterance);
      };

      const elapsedSinceCancel = performance.now() - this.lastCancelAt;
      if (this.lastCancelAt > 0 && elapsedSinceCancel < 45) {
        this.speakTimerId = setTimeout(() => {
          this.speakTimerId = null;
          startSpeaking();
        }, Math.max(10, Math.ceil(45 - elapsedSinceCancel)));
      } else {
        startSpeaking();
      }
    });
  }

  // High-fidelity studio voice playback with zero-pitch-distortion fallback
  public speakEnglish(
    text: string,
    rateMultiplier: number = 1.0,
    role: VoiceRole = 'teacher'
  ): Promise<void> {
    if (!this.soundEnabled || !text.trim()) {
      return Promise.resolve();
    }

    // Strict Architecture Guard: Never pass Vietnamese text into English TTS engine
    if (/[à-ỹ]/i.test(text)) {
      console.warn('[audioService] Vietnamese text rejected by speakEnglish to protect pronunciation:', text);
      return Promise.resolve();
    }

    const entry = this.lookupVoiceEntry(text, role);
    if (entry) {
      return this.playManifestEntry(entry);
    }

    if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
      return Promise.resolve();
    }

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = Math.max(0.85, Math.min(1.15, this.voiceSpeed * rateMultiplier));
    utterance.pitch = 1.0; // Natural pitch (no robotic high-pitch stretch)
    utterance.lang = this.accent === 'US' ? 'en-US' : 'en-GB';

    const voices = window.speechSynthesis.getVoices();
    const preferredVoice = voices.find(
      (v) =>
        (this.accent === 'US'
          ? v.lang.includes('en-US') || v.lang.includes('en_US')
          : v.lang.includes('en-GB') || v.lang.includes('en_GB')) &&
        (v.name.includes('Natural') ||
          v.name.includes('Google') ||
          v.name.includes('Samantha') ||
          v.name.includes('Daniel') ||
          v.name.includes('Karen'))
    );

    if (preferredVoice) {
      utterance.voice = preferredVoice;
    }

    return this.dispatchUtterance(utterance);
  }

  /**
   * Plays a connected native storyteller recording while synchronizing word highlight indices.
   */
  public speakEnglishTimed(
    text: string,
    onWordIndex: (idx: number | null) => void,
    role: VoiceRole = 'teacher'
  ): Promise<void> {
    if (!this.soundEnabled || !text.trim()) {
      onWordIndex(null);
      return Promise.resolve();
    }
    if (/[à-ỹ]/i.test(text)) {
      onWordIndex(null);
      return Promise.resolve();
    }
    const entry = this.lookupVoiceEntry(text, role);
    if (entry) {
      return this.playManifestEntry(entry, onWordIndex);
    }
    onWordIndex(null);
    return this.speakEnglish(text, 1.0, role);
  }

  /**
   * High-fidelity Japanese speech synthesis for children (ja-JP).
   * Automatically picks native Japanese voices (Google 日本語, Kyoko, Nanami, Ayumi, Haruka).
   */
  public speakJapanese(text: string, rateMultiplier: number = 0.85): Promise<void> {
    if (!('speechSynthesis' in window) || !this.soundEnabled) {
      return Promise.resolve();
    }

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = this.voiceSpeed * rateMultiplier;
    utterance.pitch = 1.15; // Friendly, natural Japanese tone
    utterance.lang = 'ja-JP';

    const voices = window.speechSynthesis.getVoices();
    const preferredVoice = voices.find(v =>
      (v.lang.includes('ja-JP') || v.lang.includes('ja_JP') || v.lang.startsWith('ja')) &&
      (v.name.includes('Natural') || v.name.includes('Google') || v.name.includes('Kyoko') || v.name.includes('Nanami') || v.name.includes('Ayumi') || v.name.includes('Haruka'))
    ) || voices.find(v => v.lang.includes('ja'));

    if (preferredVoice) {
      utterance.voice = preferredVoice;
    }

    return this.dispatchUtterance(utterance);
  }

  /**
   * Play authentic native Japanese TPR chant:
   * Speaks the rhythmic chant (e.g. "あ・あ・あめ！"), short pause, then speaks target word.
   */
  public async playJapaneseTprAction(chantJa: string, wordJa: string): Promise<void> {
    if (!this.soundEnabled) return;
    try {
      await this.speakJapanese(chantJa, 0.85);
      await new Promise((r) => setTimeout(r, 260));
      await this.speakJapanese(wordJa, 0.85);
    } catch {
      // Ignore
    }
  }

  /**
   * Play authentic native TPR action: speaks natural English chant,
   * followed by pure native sound clips of the target phoneme repeated 3 times.
   */
  public async playTprAction(phonemeId: string, chantEn: string): Promise<void> {
    if (!this.soundEnabled) return;
    try {
      // 1. Speak natural English action chant
      await this.speakEnglish(chantEn, 0.9);
      await new Promise((r) => setTimeout(r, 220));
      // 2. Play pure authentic phoneme sound 3 times (/p/ ... /p/ ... /p/)
      for (let i = 0; i < 3; i++) {
        await this.playPhoneme(phonemeId);
        await new Promise((r) => setTimeout(r, 180));
      }
    } catch {
      // Ignore
    }
  }

  private phonemeAudioCache: Record<string, HTMLAudioElement> = {};

  /**
   * Play authentic pure phoneme sound recording (100% Synthetic Phonics compliant, NO schwa).
   * E.g. /p/ plays pure unvoiced puff of air, NOT "pu" or "puh"!
   */
  public async playPhoneme(phonemeId: string): Promise<void> {
    if (!this.soundEnabled) return;
    try {
      const cleanId = phonemeId.toLowerCase().replace(/[\/\[\]]/g, '').trim();
      const ipaToFileMap: Record<string, string> = {
        'ʃ': 'sh',
        'θ': 'th_unvoiced',
        'ð': 'th_voiced',
        'ŋ': 'ng',
        'tʃ': 'ch',
        'dʒ': 'j',
        'sh': 'sh',
        'ch': 'ch',
        'th': 'th_unvoiced',
        'ng': 'ng',
        'ai': 'ai',
        'ee': 'ee',
        'ie': 'ie',
        'oa': 'oa',
        'ue': 'ue',
        'oo': 'oo_short',
        'ar': 'ar',
        'or': 'or',
        'er': 'er',
        'oi': 'oi',
        'ou': 'ou',
        'qu': 'qu',
      };
      const audioKey = ipaToFileMap[cleanId] || cleanId;

      let audio = this.phonemeAudioCache[audioKey];
      if (!audio) {
        audio = new Audio(`/assets/audio/phonemes/${audioKey}.mp3`);
        audio.preload = 'auto';
        this.phonemeAudioCache[audioKey] = audio;
      }

      audio.pause();
      audio.currentTime = 0;

      return new Promise<void>((resolve) => {
        let isDone = false;
        const done = () => {
          if (!isDone) {
            isDone = true;
            audio.removeEventListener('ended', done);
            audio.removeEventListener('error', done);
            resolve();
          }
        };

        audio.addEventListener('ended', done);
        audio.addEventListener('error', done);

        audio.play().catch(() => {
          done();
        });
      });
    } catch {
      // Fallback
    }
  }

  /**
   * Speak single phoneme using pure native audio recording.
   * Completely eliminates schwa /ə/ addition (e.g. /p/ is crisp /p/, not 'puh' / 'pu').
   */
  public speakPhoneme(phonemeId: string, _ipa?: string): Promise<void> {
    return this.playPhoneme(phonemeId);
  }

  /**
   * Sequentially blend multiple phonemes with a crisp, realistic interval.
   */
  public async blendPhonemes(phonemeIds: string[], gapMs: number = 90): Promise<void> {
    for (const ph of phonemeIds) {
      await this.playPhoneme(ph);
      await new Promise((r) => setTimeout(r, gapMs));
    }
  }

  public stopSpeaking() {
    this.cancelSpeechInternal();
    // Stop any active phoneme audio
    Object.values(this.phonemeAudioCache).forEach((audio) => {
      try {
        audio.pause();
        audio.currentTime = 0;
      } catch {
        // Ignore
      }
    });
  }
}

export const audioService = new AudioService();
