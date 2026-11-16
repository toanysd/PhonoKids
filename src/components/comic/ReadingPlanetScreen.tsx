import React, { useEffect, useMemo, useRef, useState } from 'react';
import { BOOK_LEVELS, READING_PLANET_BOOKS, getBooksByLevel } from '../../data/readingPlanetData';
import { audioService } from '../../services/audioService';
import { micEngine } from '../../services/micEngine';
import {
  BookProgressRecord,
  ComicBook,
  ComicBookLevel,
  ComicHero,
  MicCaptureResult,
} from '../../types/comicGame';
import {
  BackIcon,
  CheckIcon,
  ComicActionButton,
  ComicPanel,
  MicIcon,
  MicWaveformOrb,
  PlayIcon,
  SpeakerIcon,
  StarIcon,
} from './ComicUiPrimitives';

export interface ReadingPlanetScreenProps {
  hero: ComicHero;
  bookProgress: Record<string, BookProgressRecord>;
  toddlerFriendly?: boolean;
  onBookProgress: (bookId: string, step: keyof BookProgressRecord, rewardStars: number) => void;
}

const EMPTY_BARS = new Array<number>(16).fill(8);

function TickChip({ label, done }: { label: string; done: boolean }) {
  return (
    <span className={`inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded-md border-[2px] border-[#0F172A] font-display font-black text-[9px] sm:text-[10px] uppercase leading-none ${done ? 'bg-[#A3E635] text-[#0F172A]' : 'bg-slate-100 text-slate-500'}`}>
      {done && <CheckIcon className="w-2.5 h-2.5" />}
      <span>{label}</span>
    </span>
  );
}

export const ReadingPlanetScreen: React.FC<ReadingPlanetScreenProps> = ({
  hero,
  bookProgress,
  toddlerFriendly = true,
  onBookProgress,
}) => {
  const [activeLevel, setActiveLevel] = useState<ComicBookLevel>('aa');
  const [openBookId, setOpenBookId] = useState<string | null>(null);
  const [pageIdx, setPageIdx] = useState(0);
  const [activeWordIdx, setActiveWordIdx] = useState<number | null>(null);
  const [isListening, setIsListening] = useState(false);
  const [bars, setBars] = useState<number[]>(EMPTY_BARS);
  const [volume, setVolume] = useState(0);
  const [speechResult, setSpeechResult] = useState<MicCaptureResult | null>(null);
  const [quizSolved, setQuizSolved] = useState(false);
  const [wrongChoice, setWrongChoice] = useState<string | null>(null);
  const sessionRef = useRef(0);

  const booksInLevel = useMemo(() => getBooksByLevel(activeLevel), [activeLevel]);
  const openBook: ComicBook | null = useMemo(() => READING_PLANET_BOOKS.find((b) => b.id === openBookId) || null, [openBookId]);
  const totalCompleted = useMemo(() => READING_PLANET_BOOKS.filter((b) => bookProgress[b.id]?.quizPassed).length, [bookProgress]);
  const levelCompleted = useMemo(() => booksInLevel.filter((b) => bookProgress[b.id]?.quizPassed).length, [booksInLevel, bookProgress]);

  useEffect(() => {
    return () => {
      sessionRef.current += 1;
      micEngine.stop();
      audioService.stopSpeaking();
    };
  }, []);

  const stopMedia = () => {
    sessionRef.current += 1;
    micEngine.stop();
    audioService.stopSpeaking();
    setIsListening(false);
    setActiveWordIdx(null);
    setBars(EMPTY_BARS);
    setVolume(0);
  };

  const handleOpenBook = (book: ComicBook) => {
    stopMedia();
    setOpenBookId(book.id);
    setPageIdx(0);
    setSpeechResult(null);
    setQuizSolved(false);
    setWrongChoice(null);
  };

  if (!openBook) {
    const nextLevelLabel = BOOK_LEVELS[(BOOK_LEVELS.indexOf(activeLevel) + 1) % BOOK_LEVELS.length];
    return (
      <section data-testid="reading-planet-screen" className="flex-1 min-h-0 w-full max-w-4xl mx-auto px-2.5 pb-2 pt-0.5 flex flex-col gap-2 overflow-hidden">
        <div className="shrink-0 flex items-center justify-between gap-2">
          <div className="flex items-center gap-1.5 min-w-0">
            <span className="px-2.5 py-1 rounded-xl bg-[#FACC15] border-[3px] border-[#0F172A] shadow-[2px_3px_0_#0F172A] font-display font-black text-xs sm:text-base uppercase truncate">
              Reading Room
            </span>
            <span className="px-2 py-0.5 rounded-lg bg-white border-[2.5px] border-[#0F172A] font-mono font-black text-[11px] shrink-0">
              {totalCompleted}/{READING_PLANET_BOOKS.length}
            </span>
          </div>
          <div className="flex items-center gap-1">
            {BOOK_LEVELS.map((lvl) => (
              <button
                key={lvl}
                type="button"
                data-testid={`book-level-${lvl}`}
                onClick={() => { audioService.playPopSound(540); setActiveLevel(lvl); }}
                className={`px-2.5 py-1 rounded-xl border-[3px] border-[#0F172A] font-display font-black text-xs sm:text-sm shadow-[2px_3px_0_#0F172A] cursor-pointer active:translate-y-[2px] ${lvl === activeLevel ? 'bg-[#22D3EE] text-[#0F172A]' : 'bg-white text-[#0F172A]'}`}
              >
                {lvl}
              </button>
            ))}
          </div>
        </div>

        <div className="flex-1 min-h-0 grid grid-cols-2 grid-rows-2 gap-2.5">
          {booksInLevel.map((book) => {
            const rec = bookProgress[book.id] || { listened: false, spoken: false, quizPassed: false };
            return (
              <button
                key={book.id}
                type="button"
                data-testid={`book-card-${book.id}`}
                onClick={() => { audioService.playPopSound(580); handleOpenBook(book); }}
                className="relative h-full min-h-0 rounded-2xl bg-white border-[3.5px] border-[#0F172A] shadow-[4px_5px_0_#0F172A] active:translate-y-[2px] p-2 sm:p-3 flex flex-col justify-between text-left cursor-pointer hover:bg-[#FFFDF5] overflow-hidden"
              >
                <div className="flex items-center justify-between gap-1 w-full shrink-0">
                  <span className="px-1.5 py-0.5 rounded-lg bg-[#FEF08A] border-[2px] border-[#0F172A] font-display font-black text-[10px] uppercase">LVL {book.level}</span>
                  <span className="inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded-full bg-[#FACC15] border-[2px] border-[#0F172A] font-mono font-black text-[10px]">
                    <StarIcon className="w-3 h-3" />+{book.rewardStars}
                  </span>
                </div>
                <div className="flex-1 min-h-0 flex items-center justify-center py-1">
                  <img src={`/assets/comic/words/${book.coverWordId}.webp`} alt={book.titleEn} className="max-h-full max-w-full object-contain drop-shadow-[0_3px_0_rgba(15,23,42,0.2)]" draggable={false} />
                </div>
                <div className="shrink-0 w-full flex flex-col gap-1">
                  <div className="font-display font-black text-xs sm:text-base text-[#0F172A] leading-tight truncate">{book.titleEn}</div>
                  <div className="flex flex-wrap items-center gap-1">
                    <TickChip label="Listen" done={rec.listened} />
                    <TickChip label="Speak" done={rec.spoken} />
                    <TickChip label="Quiz" done={rec.quizPassed} />
                  </div>
                </div>
              </button>
            );
          })}

          <ComicPanel variant="yellow" data-testid="card-level-up" className="h-full min-h-0 p-2 sm:p-3 flex flex-col justify-between overflow-hidden">
            <div className="flex items-center justify-between gap-1 shrink-0">
              <span className="px-2 py-0.5 rounded-lg bg-[#EF4444] text-white border-[2px] border-[#0F172A] font-display font-black text-[10px] uppercase">Level Up!</span>
              <span className="font-mono font-black text-xs text-[#0F172A]">{levelCompleted}/{booksInLevel.length}</span>
            </div>
            <div className="flex-1 min-h-0 flex items-center justify-center py-1">
              <img src={levelCompleted >= booksInLevel.length ? hero.sprites.victory : hero.sprites.idle} alt={hero.nameEn} className="max-h-full max-w-full object-contain" draggable={false} />
            </div>
            <div className="shrink-0 flex flex-col gap-1.5">
              <div className="h-2.5 w-full rounded-full bg-white border-[2px] border-[#0F172A] overflow-hidden">
                <div className="h-full bg-[#A3E635] transition-all duration-300" style={{ width: `${Math.round((levelCompleted / Math.max(1, booksInLevel.length)) * 100)}%` }} />
              </div>
              <ComicActionButton variant="cyan" size="xs" onClick={() => setActiveLevel(nextLevelLabel)} className="w-full">
                <span>Level {nextLevelLabel}</span>
                <PlayIcon className="w-3 h-3" />
              </ComicActionButton>
            </div>
          </ComicPanel>
        </div>
      </section>
    );
  }

  const isQuizStep = pageIdx >= openBook.pages.length;
  const page = !isQuizStep ? openBook.pages[pageIdx] : null;
  const words = page ? page.textEn.split(/\s+/) : [];

  const handleHearPage = () => {
    if (!page) return;
    stopMedia();
    const seq = sessionRef.current;
    onBookProgress(openBook.id, 'listened', openBook.rewardStars);
    void audioService.speakEnglishTimed(page.textEn, (idx) => { if (sessionRef.current === seq) setActiveWordIdx(idx); }, 'teacher');
  };

  const handleSayPage = async () => {
    if (!page) return;
    if (isListening) { stopMedia(); return; }
    stopMedia();
    const seq = ++sessionRef.current;
    setIsListening(true);
    setSpeechResult(null);
    const res = await micEngine.startCapture({
      targetText: page.textEn,
      acceptableKeywords: [page.targetWord],
      toddlerFriendly,
      onWaveform: (nextBars, nextVol) => { if (sessionRef.current === seq) { setBars(nextBars); setVolume(nextVol); } },
    });
    if (sessionRef.current !== seq) return;
    setIsListening(false);
    setBars(EMPTY_BARS);
    setVolume(0);
    setSpeechResult(res);
    if (res.passed) {
      audioService.playSuccessJingle();
      onBookProgress(openBook.id, 'spoken', openBook.rewardStars);
    } else {
      audioService.playGentleTryAgain();
    }
  };

  const handlePickQuizChoice = (choiceWordId: string) => {
    if (quizSolved) return;
    if (choiceWordId === openBook.quizAnswerWordId) {
      setWrongChoice(null);
      setQuizSolved(true);
      audioService.playSuccessJingle();
      void audioService.speakEnglish('Awesome!', 1.0, 'teacher');
      onBookProgress(openBook.id, 'quizPassed', openBook.rewardStars);
    } else {
      setWrongChoice(choiceWordId);
      audioService.playGentleTryAgain();
    }
  };

  const sayTone = isListening ? 'listening' : !speechResult ? 'idle' : speechResult.mode === 'blocked' ? 'blocked' : speechResult.passed ? 'pass' : 'retry';

  return (
    <section data-testid="reading-book-reader" className="flex-1 min-h-0 w-full max-w-3xl mx-auto px-2.5 pb-2 pt-0.5 flex flex-col gap-2 overflow-hidden">
      <div className="shrink-0 flex items-center justify-between gap-2">
        <ComicActionButton data-testid="btn-book-back" variant="white" size="xs" onClick={() => { stopMedia(); setOpenBookId(null); }}>
          <BackIcon className="w-4 h-4" />
          <span>Books</span>
        </ComicActionButton>
        <div className="min-w-0 flex-1 text-center">
          <span className="inline-block px-2.5 py-0.5 rounded-xl bg-[#FACC15] border-[2.5px] border-[#0F172A] font-display font-black text-xs sm:text-sm truncate max-w-full">{openBook.titleEn}</span>
        </div>
        <span className="shrink-0 px-2 py-0.5 rounded-xl bg-[#22D3EE] border-[2.5px] border-[#0F172A] font-mono font-black text-xs">
          {isQuizStep ? 'QUIZ' : `P${pageIdx + 1}/${openBook.pages.length}`}
        </span>
      </div>

      {!isQuizStep && page ? (
        <>
          <ComicPanel variant="cream" className="relative flex-1 min-h-[130px] p-3 flex items-center justify-center overflow-hidden">
            <img src={`/assets/comic/words/${page.wordId}.webp`} alt={page.targetWord} className="max-h-full max-w-full object-contain drop-shadow-[0_4px_0_rgba(15,23,42,0.2)]" draggable={false} />
            <img src={speechResult?.passed ? hero.sprites.victory : hero.sprites.idle} alt={hero.nameEn} className={`absolute right-2 bottom-2 w-14 h-14 sm:w-20 sm:h-20 object-contain pointer-events-none ${!hero.lockHorizontalSymmetry ? '-scale-x-100' : ''}`} draggable={false} />
          </ComicPanel>

          <ComicPanel variant="white" className="shrink-0 px-3 py-2 text-center">
            <p data-testid="reader-sentence" className="font-display font-black text-lg sm:text-2xl text-[#0F172A] leading-snug flex flex-wrap items-center justify-center gap-x-1.5 gap-y-1">
              {words.map((w, idx) => {
                const isTarget = w.replace(/[^a-z]/gi, '').toLowerCase() === page.targetWord.toLowerCase();
                return (
                  <span key={idx} className={`px-1 rounded-lg transition-colors ${activeWordIdx === idx ? 'bg-[#FACC15] border-[2px] border-[#0F172A]' : isTarget ? 'text-[#EF4444] underline decoration-4 decoration-[#22D3EE]' : ''}`}>
                    {w}
                  </span>
                );
              })}
            </p>
          </ComicPanel>

          <MicWaveformOrb
            bars={bars}
            volume={volume}
            isListening={isListening}
            statusLabel={isListening ? 'Listening...' : speechResult ? `${speechResult.accuracy}% ${speechResult.messageEn}` : 'READ ALOUD'}
            tone={sayTone}
            compact
          />

          <div className="shrink-0 grid grid-cols-3 gap-2">
            <ComicActionButton data-testid="btn-book-hear" variant="yellow" size="sm" onClick={handleHearPage} className="h-12">
              <SpeakerIcon className="w-4 h-4" />
              <span>Hear Page</span>
            </ComicActionButton>
            <ComicActionButton data-testid="btn-book-say" variant={isListening ? 'crimson' : 'lime'} size="sm" onClick={() => void handleSayPage()} className="h-12">
              <MicIcon className="w-4 h-4" />
              <span>{isListening ? 'Stop' : 'Say Page'}</span>
            </ComicActionButton>
            <ComicActionButton data-testid="btn-book-next" variant="cyan" size="sm" onClick={() => { stopMedia(); setSpeechResult(null); setPageIdx((p) => Math.min(openBook.pages.length, p + 1)); }} className="h-12">
              <span>{pageIdx === openBook.pages.length - 1 ? 'Quiz!' : 'Next'}</span>
              <PlayIcon className="w-3.5 h-3.5" />
            </ComicActionButton>
          </div>
        </>
      ) : (
        <ComicPanel variant="yellow" className="flex-1 min-h-0 p-3 flex flex-col justify-between gap-2 overflow-hidden">
          <div className="shrink-0 flex items-center justify-between gap-2">
            <span className="px-2.5 py-0.5 rounded-lg bg-[#EF4444] text-white border-[2px] border-[#0F172A] font-display font-black text-xs uppercase">Picture Quiz</span>
            <ComicActionButton data-testid="btn-quiz-hear" variant="white" size="xs" onClick={() => void audioService.speakEnglish(openBook.quizQuestionEn, 0.9, 'teacher')}>
              <SpeakerIcon className="w-3.5 h-3.5" />
              <span>Hear Question</span>
            </ComicActionButton>
          </div>
          <h2 className="shrink-0 font-display font-black text-lg sm:text-2xl text-center text-[#0F172A] leading-tight">{openBook.quizQuestionEn}</h2>
          <div className="flex-1 min-h-0 grid grid-cols-3 gap-2 items-center">
            {openBook.quizChoices.map((choice) => {
              const isWinner = quizSolved && choice === openBook.quizAnswerWordId;
              const isWrong = wrongChoice === choice;
              return (
                <button
                  key={choice}
                  type="button"
                  data-testid={`quiz-choice-${choice}`}
                  onClick={() => handlePickQuizChoice(choice)}
                  className={`h-full max-h-52 rounded-2xl border-[3.5px] border-[#0F172A] shadow-[4px_5px_0_#0F172A] p-2 flex flex-col items-center justify-between cursor-pointer transition-transform active:translate-y-[2px] ${isWinner ? 'bg-[#A3E635] scale-[1.03]' : isWrong ? 'bg-[#FFE4E6] animate-hit-shake' : 'bg-white hover:bg-[#E0F2FE]'}`}
                >
                  <div className="flex-1 min-h-0 flex items-center justify-center w-full">
                    <img src={`/assets/comic/words/${choice}.webp`} alt={choice} className="max-h-full max-w-full object-contain" draggable={false} />
                  </div>
                  <span className="shrink-0 font-display font-black text-xs sm:text-base uppercase text-[#0F172A]">{choice}</span>
                </button>
              );
            })}
          </div>
          <div className="shrink-0 flex items-center justify-between gap-2 pt-1">
            {quizSolved ? (
              <>
                <span data-testid="quiz-solved-banner" className="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl bg-[#A3E635] border-[3px] border-[#0F172A] font-display font-black text-sm uppercase">
                  <StarIcon className="w-4 h-4" />LEVEL UP! +{openBook.rewardStars} STARS
                </span>
                <ComicActionButton data-testid="btn-quiz-done" variant="cyan" size="sm" onClick={() => { stopMedia(); setOpenBookId(null); }}>
                  Back to Room
                </ComicActionButton>
              </>
            ) : (
              <span className="text-xs sm:text-sm font-bold text-[#0F172A]/85 mx-auto">
                {wrongChoice ? 'Almost! Tap the matching picture!' : 'Tap the right picture to earn stars!'}
              </span>
            )}
          </div>
        </ComicPanel>
      )}
    </section>
  );
};
