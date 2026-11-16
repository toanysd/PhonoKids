import React, { useEffect, useState } from 'react';
import { SoundForgeChallenge } from '../../types/heroGame';
import { audioService } from '../../services/audioService';
import { getWordVisual } from '../../services/imageService';
import { Sparkles, Volume2, Wand2 } from 'lucide-react';

interface SoundFusionForgeOverlayProps {
  challenge: SoundForgeChallenge;
  heroNameVi: string;
  showGuidingHand: boolean;
  onForgeComplete: () => void;
}

export const SoundFusionForgeOverlay: React.FC<SoundFusionForgeOverlayProps> = ({
  challenge,
  heroNameVi,
  showGuidingHand,
  onForgeComplete,
}) => {
  const [litIndices, setLitIndices] = useState<number[]>([]);
  const [isForging, setIsForging] = useState(false);

  useEffect(() => {
    setLitIndices([]);
    setIsForging(false);
    const t = window.setTimeout(() => {
      audioService.speakEnglish(challenge.targetWord, 1.0, 'teacher');
    }, 200);
    return () => window.clearTimeout(t);
  }, [challenge.id, challenge.targetWord]);

  const visual = getWordVisual(challenge.visualWordKey);

  const triggerFusion = async () => {
    if (isForging) return;
    setIsForging(true);
    setLitIndices(challenge.phonemes.map((_, i) => i));
    audioService.playMagicChime();
    await audioService.blendPhonemes(challenge.phonemes, 95);
    await audioService.speakEnglish(challenge.targetWord, 1.0, 'teacher');
    onForgeComplete();
  };

  const handleTapCrystal = (phoneme: string, idx: number) => {
    if (isForging) return;
    audioService.playPhoneme(phoneme);
    const next = litIndices.includes(idx) ? litIndices : [...litIndices, idx];
    setLitIndices(next);
    if (next.length >= challenge.phonemes.length) {
      window.setTimeout(() => {
        triggerFusion();
      }, 280);
    }
  };

  return (
    <div
      data-testid="sound-forge-overlay"
      data-forge-word={challenge.targetWord}
      onPointerDown={(e) => e.stopPropagation()}
      onClick={(e) => e.stopPropagation()}
      className="pointer-events-auto w-full max-w-xl mx-auto px-2.5 sm:px-4"
    >
      <div className="bg-slate-900/92 backdrop-blur-md border-2 border-cyan-400 rounded-3xl p-3 sm:p-4 shadow-2xl text-white flex flex-col gap-2.5">
        <div className="flex items-center justify-between gap-2">
          <span className="text-[11px] sm:text-xs font-black px-2.5 py-0.5 rounded-full bg-cyan-400/20 border border-cyan-300/40 text-cyan-200">
            ⚒️ Lò Rèn Ghép Âm • Nạp kiếm cho {heroNameVi}
          </span>
          <button
            type="button"
            onClick={() => audioService.speakEnglish(challenge.exampleSentenceEn, 1.0, 'teacher')}
            className="min-h-[34px] px-2.5 rounded-xl bg-amber-400/20 hover:bg-amber-400/35 border border-amber-300/50 text-amber-200 text-xs font-black inline-flex items-center gap-1 cursor-pointer shrink-0"
          >
            <Volume2 className="w-3.5 h-3.5" />
            <span>Nghe Câu</span>
          </button>
        </div>

        {/* Target Word + Picture */}
        <div className="flex items-center gap-3 bg-white/10 rounded-2xl p-2 sm:p-2.5 border border-white/15">
          <img
            src={visual.url}
            alt={visual.alt}
            className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl object-cover border-2 border-amber-300 shrink-0"
          />
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-2">
              <span className="text-2xl leading-none">{challenge.emoji}</span>
              <span className="font-display text-2xl sm:text-3xl font-extrabold text-amber-300 tracking-wide">
                {challenge.targetWord}
              </span>
              <button
                type="button"
                onClick={() => audioService.speakEnglish(challenge.targetWord, 1.0, 'teacher')}
                aria-label={`Nghe từ ${challenge.targetWord}`}
                className="w-8 h-8 rounded-full bg-cyan-500 text-slate-950 flex items-center justify-center cursor-pointer active:scale-90 shrink-0"
              >
                <Volume2 className="w-4 h-4" />
              </button>
            </div>
            <p className="text-xs sm:text-sm font-bold text-slate-200 truncate">
              {challenge.meaningVi} • “{challenge.exampleSentenceEn}”
            </p>
          </div>
        </div>

        {/* Interactive Phoneme Crystals */}
        <div className="flex items-center justify-center gap-2 sm:gap-3 flex-wrap">
          {challenge.phonemes.map((ph, idx) => {
            const lit = litIndices.includes(idx);
            const nextHint = showGuidingHand && !lit && idx === litIndices.length;
            return (
              <button
                key={`${ph}_${idx}`}
                type="button"
                data-testid={`forge-crystal-${idx}`}
                onClick={() => handleTapCrystal(ph, idx)}
                className={`relative min-w-[68px] sm:min-w-[82px] min-h-[58px] px-3 py-2 rounded-2xl border-2 font-display text-2xl sm:text-3xl font-extrabold flex flex-col items-center justify-center transition-all cursor-pointer active:scale-90 ${
                  lit
                    ? 'bg-amber-400 text-slate-950 border-white shadow-[0_0_20px_rgba(251,191,36,0.75)] scale-105'
                    : 'bg-indigo-900/90 hover:bg-indigo-800 text-cyan-200 border-cyan-400/70'
                }`}
              >
                {nextHint && (
                  <span className="absolute -top-3 px-1.5 py-0.5 rounded-full bg-amber-300 text-slate-950 text-[10px] font-black animate-bounce">
                    👆 Chạm
                  </span>
                )}
                <span>{ph === 'oo_long' || ph === 'oo_short' ? 'oo' : ph.startsWith('th_') ? 'th' : ph}</span>
              </button>
            );
          })}
        </div>

        {/* Fuse & Strike CTA */}
        <button
          type="button"
          onClick={triggerFusion}
          disabled={isForging}
          className="w-full min-h-[48px] rounded-2xl bg-gradient-to-r from-cyan-400 to-amber-400 hover:brightness-105 text-slate-950 font-black text-sm sm:text-base inline-flex items-center justify-center gap-2 shadow-lg cursor-pointer active:scale-95"
        >
          <Wand2 className="w-5 h-5" />
          <span>{isForging ? 'Đang hợp âm tung chiêu...' : `Hợp Âm & Đọc "${challenge.targetWord}"`}</span>
          <Sparkles className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
