// Web Audio API and Speech Synthesis Service for Toddlers
class AudioService {
  private audioCtx: AudioContext | null = null;
  private voiceSpeed: number = 0.85; // Slightly slower for 3-5yo toddlers
  private accent: 'US' | 'UK' = 'US';
  private soundEnabled: boolean = true;

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

  // Play charming procedural sound effects (No external asset loading failure risk)
  public playPopSound(pitch: number = 440) {
    if (!this.soundEnabled) return;
    try {
      const ctx = this.getContext();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(pitch, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(pitch * 2.2, ctx.currentTime + 0.08);

      gain.gain.setValueAtTime(0.3, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.09);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + 0.1);
    } catch {
      // Audio context error ignore
    }
  }

  public playSuccessJingle() {
    if (!this.soundEnabled) return;
    try {
      const ctx = this.getContext();
      const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
      const duration = 0.12;

      notes.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, ctx.currentTime + idx * duration);

        gain.gain.setValueAtTime(0, ctx.currentTime + idx * duration);
        gain.gain.linearRampToValueAtTime(0.25, ctx.currentTime + idx * duration + 0.02);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + (idx + 1) * duration + 0.05);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(ctx.currentTime + idx * duration);
        osc.stop(ctx.currentTime + (idx + 1) * duration + 0.06);
      });
    } catch {
      // Ignore
    }
  }

  public playGentleTryAgain() {
    if (!this.soundEnabled) return;
    try {
      const ctx = this.getContext();
      const notes = [440, 392]; // A4, G4 gentle descending
      const duration = 0.18;

      notes.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, ctx.currentTime + idx * duration);

        gain.gain.setValueAtTime(0.2, ctx.currentTime + idx * duration);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + (idx + 1) * duration);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(ctx.currentTime + idx * duration);
        osc.stop(ctx.currentTime + (idx + 1) * duration + 0.02);
      });
    } catch {
      // Ignore
    }
  }

  public playMagicChime() {
    if (!this.soundEnabled) return;
    try {
      const ctx = this.getContext();
      const freqs = [659.25, 880, 1174.66, 1318.51];
      freqs.forEach((freq, i) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, ctx.currentTime + i * 0.06);
        gain.gain.setValueAtTime(0.15, ctx.currentTime + i * 0.06);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + i * 0.06 + 0.25);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(ctx.currentTime + i * 0.06);
        osc.stop(ctx.currentTime + i * 0.06 + 0.26);
      });
    } catch {
      // Ignore
    }
  }

  // Play special animal sound effects synthesized cleanly
  public playAnimalSound(type: string) {
    if (!this.soundEnabled) return;
    try {
      const ctx = this.getContext();
      if (type === 'meow') {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(600, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(950, ctx.currentTime + 0.2);
        osc.frequency.exponentialRampToValueAtTime(500, ctx.currentTime + 0.5);

        gain.gain.setValueAtTime(0.12, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.55);

        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();
        osc.stop(ctx.currentTime + 0.56);
      } else if (type === 'bark') {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(250, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(140, ctx.currentTime + 0.15);

        gain.gain.setValueAtTime(0.3, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.2);

        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();
        osc.stop(ctx.currentTime + 0.21);
      } else {
        this.playPopSound(500);
      }
    } catch {
      this.playPopSound(600);
    }
  }

  // High-fidelity speech synthesis for children
  public speakEnglish(text: string, rateMultiplier: number = 1.0): Promise<void> {
    return new Promise((resolve) => {
      if (!('speechSynthesis' in window) || !this.soundEnabled) {
        resolve();
        return;
      }

      // Strict Architecture Guard: Never pass Vietnamese text into English TTS engine
      // This prevents the engine from pronouncing letters like 'p' as Vietnamese letter name 'pê'!
      if (/[à-ỹ]/i.test(text)) {
        console.warn("[audioService] Vietnamese text rejected by speakEnglish to protect pronunciation:", text);
        resolve();
        return;
      }

      window.speechSynthesis.cancel(); // Stop previous utterance

      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = this.voiceSpeed * rateMultiplier;
      utterance.pitch = 1.25; // Friendly, slightly higher child-friendly pitch
      utterance.lang = this.accent === 'US' ? 'en-US' : 'en-GB';

      // Pick the best natural English voice if available
      const voices = window.speechSynthesis.getVoices();
      const preferredVoice = voices.find(v => 
        (this.accent === 'US' ? (v.lang.includes('en-US') || v.lang.includes('en_US')) : (v.lang.includes('en-GB') || v.lang.includes('en_GB'))) &&
        (v.name.includes('Natural') || v.name.includes('Google') || v.name.includes('Samantha') || v.name.includes('Daniel') || v.name.includes('Karen'))
      );

      if (preferredVoice) {
        utterance.voice = preferredVoice;
      }

      utterance.onend = () => resolve();
      utterance.onerror = () => resolve();

      window.speechSynthesis.speak(utterance);
    });
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
      const audioKey = cleanId;

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
    // Stop speech synthesis if speaking
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
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
