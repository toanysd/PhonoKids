export function playPopSfx(ctx: AudioContext, pitch: number = 440) {
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
}

export function playSuccessJingleSfx(ctx: AudioContext) {
  const notes = [523.25, 659.25, 783.99, 1046.5];
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
}

export function playGentleTryAgainSfx(ctx: AudioContext) {
  const notes = [440, 392];
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
}

export function playMagicChimeSfx(ctx: AudioContext) {
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
}

export function playAnimalSfx(ctx: AudioContext, type: string) {
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
    playPopSfx(ctx, 500);
  }
}
