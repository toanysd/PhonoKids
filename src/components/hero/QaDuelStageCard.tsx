import React from 'react';
import { Volume2, Sparkles, Mic } from 'lucide-react';
import { DialogueChallenge, QaChoiceOption } from '../../types/heroGame';

interface QaDuelStageCardProps {
  challenge: DialogueChallenge;
  rivalNameVi: string;
  selectedChoiceId: string | null;
  wrongChoiceId: string | null;
  showGuidingHand: boolean;
  isListening: boolean;
  onSpeakQuestion: () => void;
  onSelectChoice: (choice: QaChoiceOption) => void;
}

export const QaDuelStageCard: React.FC<QaDuelStageCardProps> = ({
  challenge,
  rivalNameVi,
  selectedChoiceId,
  wrongChoiceId,
  showGuidingHand,
  isListening,
  onSpeakQuestion,
  onSelectChoice,
}) => {
  const choices = challenge.qaChoices || [];

  return (
    <div
      data-testid="qa-duel-card"
      onPointerDown={(e) => e.stopPropagation()}
      onClick={(e) => e.stopPropagation()}
      className="pointer-events-auto w-full max-w-2xl mx-auto px-2 sm:px-3"
    >
      {/* Question prompt box */}
      <div className="bg-white/95 backdrop-blur-md border-2 border-indigo-400 rounded-2xl px-3 py-2 sm:px-4 sm:py-2.5 shadow-xl mb-2">
        <div className="flex items-center justify-between gap-2">
          <div className="min-w-0">
            <span className="inline-block text-[10px] sm:text-xs font-extrabold uppercase tracking-wider text-indigo-700 bg-indigo-50 border border-indigo-200 rounded-full px-2 py-0.5 mb-0.5">
              💬 {rivalNameVi} hỏi bé nè:
            </span>
            <p className="font-display text-sm sm:text-lg font-extrabold text-slate-950 leading-tight truncate sm:whitespace-normal">
              &ldquo;{challenge.speakerPromptEn}&rdquo;
            </p>
            {challenge.questionMeaningVi && (
              <p className="text-[11px] sm:text-xs font-semibold text-indigo-700 mt-0.5">
                👉 Nghĩa là: {challenge.questionMeaningVi}
              </p>
            )}
          </div>
          <button
            type="button"
            onClick={onSpeakQuestion}
            title="Nghe lại câu hỏi"
            className="shrink-0 w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-indigo-600 hover:bg-indigo-700 active:scale-95 text-white flex items-center justify-center shadow cursor-pointer"
          >
            <Volume2 className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>
      </div>

      {/* 3 Visual Answer Cards */}
      <div className="grid grid-cols-3 gap-1.5 sm:gap-2.5">
        {choices.map((choice) => {
          const isSelected = selectedChoiceId === choice.id;
          const isWrong = wrongChoiceId === choice.id;
          const showHand = showGuidingHand && choice.isCorrect && !isSelected;

          return (
            <button
              key={choice.id}
              type="button"
              data-testid={`qa-choice-${choice.id}`}
              data-qa-correct={choice.isCorrect ? 'true' : 'false'}
              data-qa-selected={isSelected ? 'true' : 'false'}
              onClick={() => onSelectChoice(choice)}
              className={`relative text-left rounded-2xl p-2 sm:p-3 border-2 transition-all shadow-md cursor-pointer active:scale-95 flex flex-col justify-between ${
                isSelected
                  ? 'bg-emerald-50 border-emerald-500 ring-4 ring-emerald-400/50 shadow-emerald-500/30 -translate-y-0.5'
                  : isWrong
                  ? 'bg-rose-50 border-rose-400 animate-shake'
                  : 'bg-white/95 hover:bg-amber-50 border-amber-300 hover:border-amber-500'
              }`}
            >
              {showHand && (
                <div className="absolute -top-3 right-1 px-1.5 py-0.5 rounded-full bg-amber-400 text-slate-950 text-[10px] font-black shadow animate-bounce">
                  👆 Chọn!
                </div>
              )}

              <div className="flex items-center gap-1.5 sm:gap-2">
                <span className="text-xl sm:text-3xl leading-none shrink-0">{choice.emoji}</span>
                <div className="min-w-0">
                  <div className="font-display text-xs sm:text-sm font-extrabold text-slate-950 leading-tight break-words">
                    {choice.answerEn}
                  </div>
                  <div className="text-[10px] sm:text-xs font-medium text-slate-600 leading-tight mt-0.5">
                    {choice.answerVi}
                  </div>
                </div>
              </div>

              {isSelected && (
                <div className="mt-1.5 flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-600 text-white text-[10px] font-bold">
                  {isListening ? <Mic className="w-3 h-3 animate-pulse" /> : <Sparkles className="w-3 h-3" />}
                  <span>Nói câu này hoặc chạm lại!</span>
                </div>
              )}

              {isWrong && (
                <div className="mt-1 text-[10px] font-bold text-rose-700">
                  Bé thử thẻ khác nhé!
                </div>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};
