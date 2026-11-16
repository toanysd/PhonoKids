import React, { useMemo } from 'react';
import { MysteryChestChallenge } from '../../types/heroGame';
import { getWordVisual } from '../../services/imageService';
import { Mic, Sparkles, Volume2 } from 'lucide-react';

interface MinimalPairChestOverlayProps {
  challenge: MysteryChestChallenge;
  selectedWord: string | null;
  wrongWord: string | null;
  showGuidingHand: boolean;
  onReplayPrompt: () => void;
  onPickChest: (word: string, isTarget: boolean) => void;
}

export const MinimalPairChestOverlay: React.FC<MinimalPairChestOverlayProps> = ({
  challenge,
  selectedWord,
  wrongWord,
  showGuidingHand,
  onReplayPrompt,
  onPickChest,
}) => {
  const options = useMemo(() => {
    const targetCard = {
      word: challenge.targetWord,
      meaningVi: challenge.targetMeaningVi,
      emoji: challenge.targetEmoji,
      visualKey: challenge.targetVisualKey,
      isTarget: true,
    };
    const distractorCard = {
      word: challenge.distractorWord,
      meaningVi: challenge.distractorMeaningVi,
      emoji: challenge.distractorEmoji,
      visualKey: challenge.distractorVisualKey,
      isTarget: false,
    };
    const lastDigit = challenge.id.charCodeAt(challenge.id.length - 1) || 0;
    return lastDigit % 2 === 0 ? [targetCard, distractorCard] : [distractorCard, targetCard];
  }, [challenge]);

  return (
    <div
      data-testid="mystery-chest-overlay"
      onPointerDown={(e) => e.stopPropagation()}
      onClick={(e) => e.stopPropagation()}
      className="pointer-events-auto w-full max-w-xl mx-auto px-2.5 sm:px-4"
    >
      <div className="bg-slate-900/92 backdrop-blur-md border-2 border-amber-400 rounded-3xl p-3 sm:p-4 shadow-2xl text-white flex flex-col gap-2.5">
        <div className="flex items-center justify-between gap-2 bg-white/10 rounded-2xl px-3 py-2 border border-amber-300/35">
          <div className="min-w-0">
            <span className="text-[10px] sm:text-xs font-black uppercase tracking-wider text-amber-300">
              👂 Đôi Tai Thám Tử • Mở Đúng Rương Kho Báu
            </span>
            <p className="font-display text-sm sm:text-lg font-bold text-white leading-tight truncate">
              “{challenge.promptEn}”
            </p>
          </div>
          <button
            type="button"
            onClick={onReplayPrompt}
            aria-label="Nghe lại từ kho báu"
            className="shrink-0 w-10 h-10 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 flex items-center justify-center shadow cursor-pointer active:scale-90"
          >
            <Volume2 className="w-5 h-5" />
          </button>
        </div>

        <div className="grid grid-cols-2 gap-2.5 sm:gap-3">
          {options.map((opt) => {
            const vis = getWordVisual(opt.visualKey);
            const isSelected = selectedWord === opt.word;
            const isWrong = wrongWord === opt.word;
            const guide = showGuidingHand && opt.isTarget && !isSelected;

            return (
              <button
                key={opt.word}
                type="button"
                data-testid={`chest-option-${opt.word}`}
                data-chest-target={opt.isTarget ? 'true' : 'false'}
                onClick={() => onPickChest(opt.word, opt.isTarget)}
                className={`relative rounded-2xl border-2 p-2.5 sm:p-3 flex flex-col items-center text-center gap-1.5 transition-all cursor-pointer active:scale-95 ${
                  isSelected
                    ? 'bg-emerald-500/25 border-emerald-400 ring-4 ring-emerald-400/40'
                    : isWrong
                    ? 'bg-rose-500/25 border-rose-400 animate-shake'
                    : 'bg-white/10 hover:bg-white/15 border-amber-300/60'
                }`}
              >
                {guide && (
                  <span className="absolute -top-3 px-2 py-0.5 rounded-full bg-amber-400 text-slate-950 text-[10px] font-black shadow animate-bounce">
                    👆 Chọn rương này!
                  </span>
                )}
                <div className="flex items-center gap-1.5">
                  <span className="text-xl">{isSelected ? '🪙' : '🧰'}</span>
                  <span className="text-xl">{opt.emoji}</span>
                </div>
                <img
                  src={vis.url}
                  alt={vis.alt}
                  className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl object-cover border border-amber-200/60"
                />
                <div className="font-display text-lg sm:text-2xl font-extrabold text-amber-200 leading-none">
                  {opt.word}
                </div>
                <div className="text-[11px] font-bold text-slate-200 leading-tight">
                  {opt.meaningVi}
                </div>
                {isSelected && (
                  <span className="mt-0.5 px-2 py-0.5 rounded-full bg-emerald-500 text-slate-950 text-[10px] font-black inline-flex items-center gap-1">
                    <Mic className="w-3 h-3" />
                    <span>Đọc hoặc chạm lần 2!</span>
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {wrongWord && (
          <div className="px-3 py-1.5 rounded-xl bg-rose-500/20 border border-rose-400/50 text-rose-100 text-xs font-bold flex items-center gap-1.5">
            <Sparkles className="w-4 h-4 text-amber-300 shrink-0" />
            <span>{challenge.hintVi}</span>
          </div>
        )}
      </div>
    </div>
  );
};
