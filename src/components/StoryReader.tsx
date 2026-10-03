import React, { useState, useEffect } from 'react';
import { DecodableStory, StoryPage, Hotspot } from '../types/story';
import { audioService } from '../services/audioService';
import { childSpeechService, SpeechEvaluationResult } from '../services/speechRecognition';
import { storageService } from '../services/storageService';
import { KidButton } from './KidButton';
import { 
  CartoonCat, 
  CartoonDog, 
  CartoonSun 
} from './illustrations/KidIllustrations';
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
      await new Promise(r => setTimeout(r, 100));
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
    }, 2000);
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

  const renderHotspotVisual = (hs: Hotspot) => {
    if (hs.soundName === 'meow') return <CartoonCat size={85} className="filter drop-shadow-md" />;
    if (hs.soundName === 'bark') return <CartoonDog size={85} className="filter drop-shadow-md" />;
    if (hs.soundName === 'sun_chime') return <CartoonSun size={85} className="filter drop-shadow-md animate-spin" />;
    return <span className="text-5xl md:text-6xl filter drop-shadow-md">{hs.emoji}</span>;
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-2">
      {/* Top Bar Navigation */}
      <div className="flex items-center justify-between mb-4">
        <button
          onClick={onBackToHome}
          className="flex items-center space-x-1.5 bg-white/90 hover:bg-white text-amber-900 font-extrabold px-4 py-2 rounded-2xl shadow border-2 border-amber-200 active:scale-95 transition-transform cursor-pointer"
        >
          <Home className="w-5 h-5 text-amber-600" />
          <span>Thư Viện Truyện</span>
        </button>

        <div className="flex items-center space-x-2">
          <BookOpen className="w-5 h-5 text-amber-600" />
          <span className="font-black text-amber-950 text-base md:text-lg">{story.title}</span>
          <span className="text-xs bg-amber-200 text-amber-900 font-bold px-2 py-0.5 rounded-full">
            Trang {currentPageIndex + 1} / {story.pages.length}
          </span>
        </div>
      </div>

      {/* Main Interactive Book Canvas */}
      <div className={`relative rounded-3xl border-8 border-amber-300 shadow-2xl p-6 md:p-8 transition-colors duration-500 overflow-hidden ${currentPage.backgroundTheme} min-h-[460px] flex flex-col justify-between`}>
        
        {/* Scenery Background Floating Emojis */}
        <div className="absolute top-4 right-6 text-7xl opacity-20 pointer-events-none select-none">
          {currentPage.sceneryEmoji}
        </div>

        {/* Interactive Hotspots Layer */}
        <div className="relative w-full h-44 md:h-56 rounded-2xl border-2 border-dashed border-amber-400/40 bg-white/30 backdrop-blur-xs flex items-center justify-center overflow-hidden">
          <div className="absolute top-2 left-3 text-[11px] font-bold text-amber-900 bg-white/80 px-2.5 py-0.5 rounded-full">
            ✨ Chạm nhân vật để tương tác
          </div>

          {currentPage.hotspots.map((hs) => {
            const isTapped = activeHotspot === hs.id;
            return (
              <div
                key={hs.id}
                style={{ left: `${hs.xPercent}%`, top: `${hs.yPercent}%` }}
                onClick={() => handleTapHotspot(hs)}
                className={`absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-all duration-300 ${
                  isTapped ? 'scale-125 z-20' : 'hover:scale-110 z-10'
                }`}
              >
                <div className={`flex items-center justify-center ${
                  hs.animationType === 'jump' && isTapped ? 'animate-bounce' :
                  hs.animationType === 'spin' && isTapped ? 'animate-spin' :
                  hs.animationType === 'shake' && isTapped ? 'animate-wiggle' : ''
                }`}>
                  {renderHotspotVisual(hs)}
                </div>

                {isTapped && hs.speechText && (
                  <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-amber-400 text-amber-950 font-black text-xs px-3 py-1.5 rounded-2xl shadow-lg whitespace-nowrap animate-bounce z-30">
                    {hs.speechText}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Highlighting Sentence */}
        <div className="my-5 bg-white/95 rounded-3xl p-5 md:p-6 border-4 border-amber-300 shadow-md text-center">
          <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3">
            {currentPage.wordsTiming.map((w, idx) => {
              const isHighlighted = settings.showWordHighlights && activeWordIndex === idx;
              return (
                <button
                  key={idx}
                  onClick={() => handleTapWord(w.cleanWord, idx)}
                  className={`text-2xl md:text-4xl font-black px-3 py-1.5 rounded-2xl transition-all duration-200 cursor-pointer ${
                    isHighlighted
                      ? 'bg-amber-400 text-amber-950 scale-110 shadow-lg ring-4 ring-amber-300'
                      : 'text-amber-950 hover:bg-amber-100 hover:text-amber-900'
                  }`}
                >
                  {w.word}
                </button>
              );
            })}
          </div>

          <p className="mt-2 text-sm md:text-base font-bold text-amber-800">
            {currentPage.vietnameseMeaning}
          </p>

          <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
            <KidButton
              variant="warning"
              size="md"
              onClick={handleReadFullPage}
              disabled={isPlayingNarration}
            >
              <Volume2 className="w-5 h-5 mr-1.5" />
              <span>{isPlayingNarration ? 'Đang Đọc...' : 'Đọc Cả Trang'}</span>
            </KidButton>

            {currentPage.speakingTargetWord && (
              <KidButton
                variant={isRecording ? 'accent' : 'secondary'}
                size="md"
                onClick={handleRecordOrSpeak}
              >
                <Mic className={`w-5 h-5 mr-1.5 ${isRecording ? 'animate-ping' : ''}`} />
                <span>{isRecording ? 'Đang Lắng Nghe...' : `Nghe / Nói: "${currentPage.speakingTargetWord}"`}</span>
              </KidButton>
            )}
          </div>

          {micNotice && (
            <div className="mt-3 p-2 bg-sky-100 border border-sky-300 text-sky-950 rounded-xl text-xs font-bold flex items-center justify-center space-x-1 animate-fadeIn">
              <Info className="w-4 h-4 text-sky-700 shrink-0" />
              <span>{micNotice}</span>
            </div>
          )}

          {speechResult && (
            <div className="mt-3 p-3 rounded-2xl border-2 text-center bg-emerald-100 border-emerald-400 text-emerald-950 animate-fadeIn">
              <div className="font-black text-sm">{speechResult.encouragement}</div>
              <div className="text-xs font-bold mt-0.5">{speechResult.feedbackVi}</div>
            </div>
          )}
        </div>

        {/* Touch-to-Answer Comprehension Check */}
        {currentPage.comprehension && (
          <div className="bg-amber-200/90 rounded-2xl p-4 border-2 border-amber-300 mb-3">
            <div className="flex items-center space-x-2 text-amber-950 font-black text-xs md:text-sm mb-2">
              <Sparkles className="w-4 h-4 text-amber-700" />
              <span>Tương tác vui: {currentPage.comprehension.questionText}</span>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {currentPage.comprehension.options.map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => handleAnswerComprehension(opt.isCorrect)}
                  className="bg-white hover:bg-amber-50 border-3 border-amber-400 rounded-2xl p-2.5 flex items-center justify-center space-x-2 active:scale-95 transition-all shadow cursor-pointer"
                >
                  <span className="text-2xl">{opt.emoji}</span>
                  <span className="font-extrabold text-amber-950 text-sm md:text-base">{opt.text}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Page Navigation Controls */}
        <div className="flex items-center justify-between pt-2">
          <KidButton
            variant="secondary"
            size="md"
            onClick={handlePrevPage}
            disabled={currentPageIndex === 0}
          >
            <ChevronLeft className="w-5 h-5 mr-1" />
            <span>Trang Trước</span>
          </KidButton>

          <KidButton
            variant={isLastPage ? 'success' : 'primary'}
            size="lg"
            onClick={handleNextPage}
          >
            <span>{isLastPage ? 'Hoàn Thành! 🏆' : 'Trang Tiếp'}</span>
            {!isLastPage && <ChevronRight className="w-5 h-5 ml-1" />}
          </KidButton>
        </div>

      </div>
    </div>
  );
};
