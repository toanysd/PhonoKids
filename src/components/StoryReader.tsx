import React, { useState, useEffect } from 'react';
import { DecodableStory, StoryPage, Hotspot } from '../types/story';
import { audioService } from '../services/audioService';
import { childSpeechService, SpeechEvaluationResult } from '../services/speechRecognition';
import { storageService } from '../services/storageService';
import { getStoryPageVisual } from '../services/imageService';
import { KidButton } from './KidButton';
import { 
  ChevronLeft, 
  ChevronRight, 
  Volume2, 
  Mic, 
  Sparkles, 
  BookOpen,
  Home,
  Info
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface StoryReaderProps {
  story: DecodableStory;
  onBackToHome: () => void;
  onStoryFinished?: () => void;
}

export const StoryReader: React.FC<StoryReaderProps> = ({
  story,
  onBackToHome,
  onStoryFinished
}) => {
  const [currentPageIndex, setCurrentPageIndex] = useState<number>(0);
  const [activeWordIndex, setActiveWordIndex] = useState<number | null>(null);
  const [isPlayingNarration, setIsPlayingNarration] = useState<boolean>(false);
  const [activeHotspot, setActiveHotspot] = useState<string | null>(null);
  const [isRecording, setIsRecording] = useState<boolean>(false);
  const [speechResult, setSpeechResult] = useState<SpeechEvaluationResult | null>(null);
  const [micNotice, setMicNotice] = useState<string | null>(null);
  const [showLeoTip, setShowLeoTip] = useState<boolean>(false);
  const [leoTipText, setLeoTipText] = useState<string>('');

  const settings = storageService.getSettings();
  const currentPage: StoryPage = story.pages[currentPageIndex];
  const isLastPage = currentPageIndex === story.pages.length - 1;

  // Dedicated illustration for THIS SPECIFIC SENTENCE / PAGE
  const pageVisual = getStoryPageVisual(story.id, currentPage.pageNumber, currentPage);

  useEffect(() => {
    setActiveWordIndex(null);
    setIsPlayingNarration(false);
    setActiveHotspot(null);
    setSpeechResult(null);
    setMicNotice(null);
  }, [currentPageIndex]);

  // Read full page sentence with word-by-word timing
  const handleReadFullPage = async () => {
    if (isPlayingNarration) return;
    setIsPlayingNarration(true);
    audioService.playPopSound(500);

    const words = currentPage.wordsTiming;
    for (let i = 0; i < words.length; i++) {
      if (settings.showWordHighlights) {
        setActiveWordIndex(i);
      }
      await audioService.speakEnglish(words[i].cleanWord, 0.82);
      await new Promise(r => setTimeout(r, 120));
    }

    setActiveWordIndex(null);
    setIsPlayingNarration(false);
  };

  const handleTapWord = (word: string, index: number) => {
    if (settings.showWordHighlights) {
      setActiveWordIndex(index);
    }
    audioService.speakEnglish(word, 0.85);
    setTimeout(() => setActiveWordIndex(null), 1200);
  };

  const handleTapHotspot = (hs: Hotspot) => {
    setActiveHotspot(hs.id);
    if (hs.soundName === 'meow' || hs.soundName === 'bark') {
      audioService.playAnimalSound(hs.soundName);
    } else {
      audioService.playMagicChime();
    }

    if (hs.speechText) {
      setTimeout(() => {
        audioService.speakEnglish(hs.speechText!, 0.9);
      }, 300);
    }

    setTimeout(() => {
      setActiveHotspot(null);
    }, 2200);
  };

  const handleRecordOrSpeak = () => {
    const target = currentPage.speakingTargetWord || currentPage.wordsTiming[0]?.cleanWord || 'cat';
    
    // Check if Parent has granted microphone consent in Parent Dashboard
    if (!settings.isMicrophoneConsentGranted) {
      audioService.speakEnglish(target, 0.8);
      setMicNotice('🎙️ Microphone đang tắt để bảo vệ riêng tư. Leo đã đọc mẫu cho bé nghe!');
      setTimeout(() => setMicNotice(null), 4000);
      return;
    }

    setIsRecording(true);
    setSpeechResult(null);

    childSpeechService.startListening(
      target,
      (result) => {
        setIsRecording(false);
        setSpeechResult(result);
        audioService.playSuccessJingle();
        try {
          confetti({ particleCount: 30, spread: 50, origin: { y: 0.8 } });
        } catch {
          // Ignore
        }
      },
      () => {
        setIsRecording(false);
      }
    );
  };

  const handleAnswerComprehension = (isCorrect: boolean) => {
    if (isCorrect) {
      audioService.playSuccessJingle();
      try {
        confetti({ particleCount: 40, spread: 60, origin: { y: 0.6 } });
      } catch {
        // Ignore
      }
    } else {
      audioService.playGentleTryAgain();
    }
  };

  const handleNextPage = () => {
    audioService.stopSpeaking();
    if (!isLastPage) {
      setCurrentPageIndex(currentPageIndex + 1);
    } else {
      audioService.playSuccessJingle();
      try {
        confetti({ particleCount: 70, spread: 90, origin: { y: 0.5 } });
      } catch {
        // Ignore
      }
      onStoryFinished?.();
    }
  };

  const handlePrevPage = () => {
    audioService.stopSpeaking();
    if (currentPageIndex > 0) {
      setCurrentPageIndex(currentPageIndex - 1);
    }
  };

  const handleAskLeoStory = () => {
    const target = currentPage.speakingTargetWord || 'cat';
    const tip = `Bạn Leo kể cho bé nè: Tranh câu ${currentPage.pageNumber} có từ "${target}". Bé chạm vào từ trên trang sách để nghe Leo đọc mẫu nhé! 🦁⭐`;
    setLeoTipText(tip);
    setShowLeoTip(!showLeoTip);
    audioService.playPopSound(540);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-2 h-[calc(100vh-4.6rem)] flex flex-col justify-between overflow-hidden">
      {/* Top Bar Navigation */}
      <div className="flex items-center justify-between mb-2 shrink-0">
        <button
          onClick={onBackToHome}
          className="flex items-center space-x-1.5 bg-white/95 hover:bg-white text-amber-900 font-black px-3.5 py-1.5 rounded-2xl shadow-xs border-2 border-amber-300 active:scale-95 transition-transform cursor-pointer text-xs md:text-sm"
        >
          <Home className="w-4 h-4 text-amber-600" />
          <span>Thư Viện Tranh Truyện</span>
        </button>

        <div className="flex items-center space-x-2">
          <button
            onClick={handleAskLeoStory}
            className="flex items-center space-x-1 bg-purple-100 hover:bg-purple-200 text-purple-950 font-black px-3 py-1 rounded-full border border-purple-300 shadow-xs active:scale-95 transition-transform cursor-pointer text-xs"
            title="Nhận gợi ý từ Bạn Sư Tử Leo"
          >
            <Sparkles className="w-3.5 h-3.5 text-purple-600" />
            <span>Hỏi Leo 🦁</span>
          </button>

          <div className="flex items-center space-x-2.5 bg-white/90 px-3.5 py-1.5 rounded-2xl border-2 border-amber-200 shadow-xs">
            <BookOpen className="w-4 h-4 text-amber-600" />
            <span className="font-black text-amber-950 text-sm md:text-base">{story.title}</span>
            <span className="text-xs bg-amber-300 text-amber-950 font-black px-2.5 py-0.5 rounded-full shadow-xs">
              Trang {currentPageIndex + 1} / {story.pages.length}
            </span>
          </div>
        </div>
      </div>

      {/* Leo AI Tip in StoryReader */}
      {showLeoTip && (
        <div className="mx-2 mb-2 p-2.5 bg-purple-50 rounded-2xl border-2 border-purple-300 shadow-md flex items-center space-x-3 animate-fadeIn shrink-0">
          <div className="w-9 h-9 rounded-full overflow-hidden border-2 border-purple-400 shrink-0 bg-amber-100">
            <img src="/assets/ehon/leo.jpg" alt="Leo" className="w-full h-full object-cover" />
          </div>
          <div className="flex-1">
            <div className="text-xs font-black text-purple-950 flex items-center justify-between">
              <span>Bạn Leo đồng hành cùng bé đọc truyện:</span>
              <button onClick={() => setShowLeoTip(false)} className="text-gray-400 hover:text-gray-600 text-xs font-bold cursor-pointer">✕ Đóng</button>
            </div>
            <p className="text-xs font-bold text-purple-900 mt-0.5 leading-snug">{leoTipText}</p>
          </div>
        </div>
      )}

      {/* Main Picture Book Two-Page Spread Canvas (Fills Viewport Without Scrolling) */}
      <div className="bg-[#FFFDF9] rounded-3xl border-6 md:border-8 border-amber-300 shadow-2xl p-3 md:p-4 flex-1 min-h-0 overflow-hidden flex flex-col justify-between">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 h-full min-h-0">
          
          {/* ================= LEFT PAGE: Dedicated Sentence Ehon Artwork (7 Cols) ================= */}
          <div className="lg:col-span-7 h-full min-h-0 relative rounded-2xl overflow-hidden border-3 border-amber-300 shadow-md bg-amber-50 group flex items-center justify-center">
            <img
              src={pageVisual.url}
              alt={pageVisual.alt}
              className="w-full h-full object-cover transition-transform duration-700"
            />

            {/* Picture-book caption badge */}
            <div className="absolute top-2.5 left-2.5 bg-black/60 backdrop-blur-xs text-white text-[11px] font-black px-2.5 py-1 rounded-full flex items-center space-x-1 shadow z-10">
              <span>🎨 Tranh Ehon câu {currentPage.pageNumber}</span>
            </div>

            <div className="absolute bottom-2.5 left-2.5 bg-white/95 backdrop-blur-xs text-amber-950 text-[10px] md:text-xs font-black px-3 py-1 rounded-xl shadow border border-amber-300 z-10 line-clamp-1 max-w-[85%]">
              {pageVisual.alt}
            </div>

            {/* Interactive Hotspots Layer overlaid on Ehon Canvas */}
            {currentPage.hotspots.map((hs) => {
              const isTapped = activeHotspot === hs.id;
              return (
                <div
                  key={hs.id}
                  style={{ left: `${hs.xPercent}%`, top: `${hs.yPercent}%` }}
                  onClick={() => handleTapHotspot(hs)}
                  className={`absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-all duration-300 ${
                    isTapped ? 'scale-125 z-30' : 'hover:scale-110 z-20'
                  }`}
                >
                  <div className={`p-2 rounded-full shadow-xl border-3 flex items-center space-x-1 transition-all ${
                    isTapped
                      ? 'bg-amber-400 border-white ring-4 ring-amber-300 animate-bounce'
                      : 'bg-white/95 border-amber-400 hover:bg-amber-100 backdrop-blur-xs'
                  }`}>
                    <span className="text-xl md:text-2xl">{hs.emoji}</span>
                    <span className="text-[11px] font-black text-amber-950 pr-1">{hs.label}</span>
                  </div>

                  {isTapped && hs.speechText && (
                    <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-amber-400 text-amber-950 font-black text-xs px-3 py-1 rounded-xl shadow-xl whitespace-nowrap animate-bounce z-40 border-2 border-white">
                      {hs.speechText}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* ================= RIGHT PAGE: Decodable Reading, Interaction & Navigation (5 Cols) ================= */}
          <div className="lg:col-span-5 h-full min-h-0 flex flex-col justify-between overflow-y-auto pr-1">
            
            {/* Decodable Sentence Text Box */}
            <div className="bg-amber-50/80 rounded-2xl p-4 border-2 border-amber-200 text-center shadow-xs">
              <div className="text-[10px] uppercase font-black tracking-wider text-amber-800 mb-2">
                Chạm vào từng từ để nghe đọc:
              </div>
              <div className="flex flex-wrap items-center justify-center gap-2">
                {currentPage.wordsTiming.map((w, idx) => {
                  const isHighlighted = settings.showWordHighlights && activeWordIndex === idx;
                  return (
                    <button
                      key={idx}
                      onClick={() => handleTapWord(w.cleanWord, idx)}
                      className={`text-2xl sm:text-3xl md:text-4xl font-black px-3 py-1.5 rounded-xl transition-all duration-200 cursor-pointer ${
                        isHighlighted
                          ? 'bg-amber-400 text-amber-950 scale-105 shadow-md ring-3 ring-amber-300'
                          : 'text-amber-950 bg-white hover:bg-amber-100 border border-amber-200 shadow-xs'
                      }`}
                    >
                      {w.word}
                    </button>
                  );
                })}
              </div>

              <p className="mt-3 text-xs md:text-sm font-bold text-amber-800 leading-snug">
                {currentPage.vietnameseMeaning}
              </p>
            </div>

            {/* Audio & Speech Action Buttons */}
            <div className="flex items-center justify-center gap-2 my-2">
              <KidButton
                variant="secondary"
                size="md"
                onClick={handleReadFullPage}
                disabled={isPlayingNarration}
                className="flex-1 text-xs sm:text-sm md:text-base font-black py-2.5 shadow-md"
                title="Đọc toàn bộ trang sách"
              >
                <Volume2 className="w-5 h-5 mr-1.5 animate-pulse" />
                <span>{isPlayingNarration ? 'Đang Đọc...' : 'Đọc Cả Trang 🔊'}</span>
              </KidButton>

              {currentPage.speakingTargetWord && (
                <KidButton
                  variant={isRecording ? 'accent' : 'warning'}
                  size="md"
                  onClick={handleRecordOrSpeak}
                  className="flex-1 text-xs sm:text-sm md:text-base font-black py-2.5 shadow-md"
                  title={`Bé đọc từ ${currentPage.speakingTargetWord}`}
                >
                  <Mic className={`w-5 h-5 mr-1.5 ${isRecording ? 'animate-ping' : ''}`} />
                  <span>{isRecording ? 'Lắng nghe...' : `Bé Nói: "${currentPage.speakingTargetWord}" 🎤`}</span>
                </KidButton>
              )}
            </div>

            {/* Mic Notice if OFF */}
            {micNotice && (
              <div className="p-2 bg-sky-100 border border-sky-300 text-sky-950 rounded-xl text-[11px] font-bold flex items-center justify-center space-x-1 animate-fadeIn">
                <Info className="w-3.5 h-3.5 text-sky-700 shrink-0" />
                <span>{micNotice}</span>
              </div>
            )}

            {/* Speech Result */}
            {speechResult && (
              <div className="p-2 rounded-xl border-2 text-center bg-emerald-100 border-emerald-400 text-emerald-950 animate-fadeIn">
                <div className="font-black text-xs">{speechResult.encouragement}</div>
                <div className="text-[10px] font-bold">{speechResult.feedbackVi}</div>
              </div>
            )}

            {/* Interactive Comprehension Touch Check */}
            {currentPage.comprehension && (
              <div className="bg-amber-100/90 rounded-2xl p-3 border border-amber-300 my-1 shadow-xs">
                <div className="flex items-center space-x-1.5 text-amber-950 font-black text-xs mb-2">
                  <Sparkles className="w-3.5 h-3.5 text-amber-700" />
                  <span>Tương tác vui: {currentPage.comprehension.questionText}</span>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  {currentPage.comprehension.options.map((opt) => (
                    <button
                      key={opt.id}
                      onClick={() => handleAnswerComprehension(opt.isCorrect)}
                      className="bg-white hover:bg-amber-50 border-2 border-amber-400 rounded-xl p-2 flex items-center justify-center space-x-2 active:scale-95 transition-all shadow-xs cursor-pointer"
                    >
                      <span className="text-xl">{opt.emoji}</span>
                      <span className="font-black text-amber-950 text-xs md:text-sm">{opt.text}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Pinned Bottom Navigation Controls (Always 100% visible on viewport!) */}
            <div className="flex items-center justify-between pt-2 border-t-2 border-amber-200 mt-auto">
              <KidButton
                variant="secondary"
                size="md"
                onClick={handlePrevPage}
                disabled={currentPageIndex === 0}
                className="px-4 py-2 text-xs sm:text-sm font-black shadow-md"
                title="Quay về trang trước"
              >
                <ChevronLeft className="w-5 h-5 mr-1" />
                <span>Trang Trước</span>
              </KidButton>

              <KidButton
                variant="success"
                size="md"
                onClick={handleNextPage}
                className="px-5 py-2 text-xs sm:text-sm md:text-base font-black shadow-xl"
                title="Sang trang tiếp theo"
              >
                <span>{isLastPage ? 'Hoàn Thành! 🏆' : 'Trang Kế Tiếp'}</span>
                {!isLastPage && <ChevronRight className="w-5 h-5 ml-1" />}
              </KidButton>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
