import React, { useState, useEffect } from 'react';
import { DecodableStory, StoryPage, Hotspot } from '../types/story';
import { audioService } from '../services/audioService';
import { childSpeechService, SpeechEvaluationResult } from '../services/speechRecognition';
import { storageService } from '../services/storageService';
import { getStoryCoverVisual } from '../services/imageService';
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

  const settings = storageService.getSettings();
  const currentPage: StoryPage = story.pages[currentPageIndex];
  const isLastPage = currentPageIndex === story.pages.length - 1;
  const storyVisual = getStoryCoverVisual(story.id);

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

  return (
    <div className="max-w-6xl mx-auto px-4 py-3">
      {/* Top Bar Navigation */}
      <div className="flex items-center justify-between mb-4">
        <button
          onClick={onBackToHome}
          className="flex items-center space-x-2 bg-white/95 hover:bg-white text-amber-900 font-black px-4 py-2.5 rounded-2xl shadow-md border-2 border-amber-300 active:scale-95 transition-transform cursor-pointer"
        >
          <Home className="w-5 h-5 text-amber-600" />
          <span>Thư Viện Tranh Truyện</span>
        </button>

        <div className="flex items-center space-x-3 bg-white/90 px-4 py-2 rounded-2xl border-2 border-amber-200 shadow-xs">
          <BookOpen className="w-5 h-5 text-amber-600" />
          <span className="font-black text-amber-950 text-base md:text-xl">{story.title}</span>
          <span className="text-xs bg-amber-300 text-amber-950 font-black px-3 py-1 rounded-full shadow-xs">
            Trang {currentPageIndex + 1} / {story.pages.length}
          </span>
        </div>
      </div>

      {/* Main Interactive Book Canvas */}
      <div className="relative rounded-3xl border-8 border-amber-300 shadow-2xl p-6 md:p-8 bg-amber-50/90 transition-colors duration-500 overflow-hidden min-h-[500px] flex flex-col justify-between">
        
        {/* Full-bleed Ehon Picture Book Illustration Scene Layer */}
        <div className="relative w-full h-64 sm:h-80 md:h-96 rounded-2xl border-4 border-amber-300 shadow-lg overflow-hidden bg-amber-100 group">
          <img
            src={storyVisual.url}
            alt={storyVisual.alt}
            className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-700"
          />

          {/* Artistic watermark label */}
          <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-xs text-white text-xs font-black px-3 py-1 rounded-full flex items-center space-x-1.5 shadow z-10">
            <span>🎨 Tranh Ehon Sơn Dầu Cắt Dán</span>
          </div>

          <div className="absolute top-3 right-3 bg-amber-300/90 backdrop-blur-xs text-amber-950 text-xs font-black px-3 py-1 rounded-full shadow z-10 flex items-center space-x-1">
            <Sparkles className="w-3.5 h-3.5 text-amber-800" />
            <span>Chạm các điểm sáng để tương tác</span>
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
                  isTapped ? 'scale-130 z-30' : 'hover:scale-115 z-20'
                }`}
              >
                {/* Glowing target button */}
                <div className={`p-2.5 rounded-full shadow-2xl border-4 flex items-center space-x-1.5 transition-all ${
                  isTapped
                    ? 'bg-amber-400 border-white ring-4 ring-amber-300 animate-bounce'
                    : 'bg-white/90 border-amber-400 hover:bg-amber-100 backdrop-blur-xs'
                }`}>
                  <span className="text-2xl">{hs.emoji}</span>
                  <span className="text-xs font-black text-amber-950 pr-1">{hs.label}</span>
                </div>

                {isTapped && hs.speechText && (
                  <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-amber-400 text-amber-950 font-black text-sm px-3.5 py-1.5 rounded-2xl shadow-xl whitespace-nowrap animate-bounce z-40 border-2 border-white">
                    {hs.speechText}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Highlighting Sentence with Large Decodable Typography */}
        <div className="my-5 bg-white rounded-3xl p-6 md:p-8 border-4 border-amber-300 shadow-lg text-center">
          <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4">
            {currentPage.wordsTiming.map((w, idx) => {
              const isHighlighted = settings.showWordHighlights && activeWordIndex === idx;
              return (
                <button
                  key={idx}
                  onClick={() => handleTapWord(w.cleanWord, idx)}
                  className={`text-3xl md:text-5xl font-black px-4 py-2 rounded-2xl transition-all duration-200 cursor-pointer ${
                    isHighlighted
                      ? 'bg-amber-400 text-amber-950 scale-110 shadow-xl ring-4 ring-amber-300'
                      : 'text-amber-950 hover:bg-amber-100 hover:text-amber-900 border-2 border-amber-200/60'
                  }`}
                >
                  {w.word}
                </button>
              );
            })}
          </div>

          <p className="mt-3 text-base md:text-lg font-bold text-amber-800">
            {currentPage.vietnameseMeaning}
          </p>

          <div className="mt-5 flex flex-wrap items-center justify-center gap-4">
            <KidButton
              variant="warning"
              size="lg"
              onClick={handleReadFullPage}
              disabled={isPlayingNarration}
            >
              <Volume2 className="w-6 h-6 mr-2" />
              <span>{isPlayingNarration ? 'Đang Đọc...' : 'Đọc Cả Trang'}</span>
            </KidButton>

            {currentPage.speakingTargetWord && (
              <KidButton
                variant={isRecording ? 'accent' : 'secondary'}
                size="lg"
                onClick={handleRecordOrSpeak}
              >
                <Mic className={`w-6 h-6 mr-2 ${isRecording ? 'animate-ping' : ''}`} />
                <span>{isRecording ? 'Đang Lắng Nghe...' : `Nghe / Nói: "${currentPage.speakingTargetWord}"`}</span>
              </KidButton>
            )}
          </div>

          {micNotice && (
            <div className="mt-3 p-3 bg-sky-100 border border-sky-300 text-sky-950 rounded-xl text-xs md:text-sm font-bold flex items-center justify-center space-x-2 animate-fadeIn">
              <Info className="w-5 h-5 text-sky-700 shrink-0" />
              <span>{micNotice}</span>
            </div>
          )}

          {speechResult && (
            <div className="mt-3 p-3.5 rounded-2xl border-2 text-center bg-emerald-100 border-emerald-400 text-emerald-950 animate-fadeIn">
              <div className="font-black text-base">{speechResult.encouragement}</div>
              <div className="text-xs md:text-sm font-bold mt-0.5">{speechResult.feedbackVi}</div>
            </div>
          )}
        </div>

        {/* Touch-to-Answer Comprehension Check */}
        {currentPage.comprehension && (
          <div className="bg-amber-200/90 rounded-2xl p-4 md:p-5 border-2 border-amber-300 mb-4">
            <div className="flex items-center space-x-2 text-amber-950 font-black text-sm md:text-base mb-3">
              <Sparkles className="w-5 h-5 text-amber-700" />
              <span>Câu hỏi tương tác vui: {currentPage.comprehension.questionText}</span>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {currentPage.comprehension.options.map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => handleAnswerComprehension(opt.isCorrect)}
                  className="bg-white hover:bg-amber-50 border-4 border-amber-400 rounded-2xl p-3 md:p-4 flex items-center justify-center space-x-3 active:scale-95 transition-all shadow-md cursor-pointer"
                >
                  <span className="text-3xl">{opt.emoji}</span>
                  <span className="font-extrabold text-amber-950 text-base md:text-lg">{opt.text}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Page Navigation Controls */}
        <div className="flex items-center justify-between pt-2">
          <KidButton
            variant="secondary"
            size="lg"
            onClick={handlePrevPage}
            disabled={currentPageIndex === 0}
          >
            <ChevronLeft className="w-6 h-6 mr-1.5" />
            <span>Trang Trước</span>
          </KidButton>

          <KidButton
            variant={isLastPage ? 'success' : 'primary'}
            size="lg"
            onClick={handleNextPage}
          >
            <span>{isLastPage ? 'Hoàn Thành Truyện! 🏆' : 'Trang Tiếp Theo'}</span>
            {!isLastPage && <ChevronRight className="w-6 h-6 ml-1.5" />}
          </KidButton>
        </div>

      </div>
    </div>
  );
};
