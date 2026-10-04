import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { PhonicsIslandMap } from './components/PhonicsIslandMap';
import { LessonPlayer } from './components/LessonPlayer';
import { StoryLibrary } from './components/StoryLibrary';
import { StoryReader } from './components/StoryReader';
import { MinimalPairsView } from './components/MinimalPairsView';
import { BlendingPlayground } from './components/BlendingPlayground';
import { ParentDashboard } from './components/ParentDashboard';
import { CharacterCompanion } from './components/CharacterCompanion';
import { RestBreakModal } from './components/RestBreakModal';
import { AiBuddyChat } from './components/AiBuddyChat';
import { StickerAlbumModal } from './components/StickerAlbumModal';
import { ArcadePlayground } from './components/ArcadePlayground';
import { GojuonIslandMap } from './components/GojuonIslandMap';
import { KanaLessonPlayer } from './components/KanaLessonPlayer';

import { PhonemeInfo } from './types/phonics';
import { DecodableStory } from './types/story';
import { KanaItem } from './types/japanese';
import { ChildProfile, SessionSettings } from './types/user';
import { DECODABLE_STORIES } from './data/stories';
import { JAPANESE_STORIES } from './data/japaneseStories';
import { JAPANESE_MINIMAL_PAIRS } from './data/japaneseMinimalPairs';
import { JAPANESE_BLENDING_WORDS } from './data/japaneseBlendingWords';

import { storageService } from './services/storageService';
import { audioService } from './services/audioService';

type ViewMode = 'island_map' | 'stories' | 'minimal_pairs' | 'blending' | 'lesson' | 'story_reader' | 'ai_chat' | 'arcade';

export const App: React.FC = () => {
  const [currentLanguage, setCurrentLanguage] = useState<'en' | 'ja'>(() => {
    try {
      const saved = localStorage.getItem('phonokids_current_lang');
      if (saved === 'ja' || saved === 'en') return saved;
    } catch {}
    return 'en';
  });
  const [currentView, setCurrentView] = useState<ViewMode>('island_map');
  const [profile, setProfile] = useState<ChildProfile>(() => storageService.getProfile());
  const [settings, setSettings] = useState<SessionSettings>(() => storageService.getSettings());
  const [soundEnabled, setSoundEnabled] = useState<boolean>(true);

  // Active selections
  const [activePhoneme, setActivePhoneme] = useState<PhonemeInfo | null>(null);
  const [activeKana, setActiveKana] = useState<KanaItem | null>(null);
  const [japaneseMasteredKana, setJapaneseMasteredKana] = useState<string[]>(() =>
    storageService.getJapaneseMasteredKana()
  );
  const [japaneseUnlockedGroups, setJapaneseUnlockedGroups] = useState<number[]>(() =>
    storageService.getJapaneseUnlockedGroups()
  );
  const [activeStory, setActiveStory] = useState<DecodableStory | null>(null);
  const [isParentGateOpen, setIsParentGateOpen] = useState<boolean>(false);
  const [isStickerAlbumOpen, setIsStickerAlbumOpen] = useState<boolean>(false);

  // Health: Session Rest Break Countdown
  const [sessionSecondsElapsed, setSessionSecondsElapsed] = useState<number>(0);
  const [showRestBreak, setShowRestBreak] = useState<boolean>(false);

  useEffect(() => {
    // Configure initial audio settings
    audioService.setVoiceSpeed(settings.voiceSpeed);
    audioService.setAccent(settings.accent);
    audioService.setSoundEnabled(soundEnabled);
  }, [settings, soundEnabled]);

  // Session timer ticker for eye strain prevention
  useEffect(() => {
    const timer = setInterval(() => {
      setSessionSecondsElapsed((prev) => {
        const next = prev + 1;
        if (next >= settings.sessionMinutes * 60 && !showRestBreak) {
          setShowRestBreak(true);
        }
        return next;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [settings.sessionMinutes, showRestBreak]);

  const handleRefreshProfile = () => {
    setProfile(storageService.getProfile());
    setSettings(storageService.getSettings());
  };

  const handleToggleSound = () => {
    const nextState = !soundEnabled;
    setSoundEnabled(nextState);
    audioService.setSoundEnabled(nextState);
  };

  const handleSelectPhoneme = (phInfo: PhonemeInfo) => {
    setActivePhoneme(phInfo);
    setCurrentView('lesson');
  };

  const handleFinishLesson = (phonemeId: string) => {
    storageService.recordPhonemeMastery(phonemeId);
    storageService.addStars(3);
    handleRefreshProfile();
    setCurrentView('island_map');
  };

  const handleNextPhoneme = (nextPhInfo: PhonemeInfo) => {
    if (activePhoneme) {
      storageService.recordPhonemeMastery(activePhoneme.id);
      storageService.addStars(3);
      handleRefreshProfile();
    }
    setActivePhoneme(nextPhInfo);
  };

  const handleSelectKana = (kanaItem: KanaItem) => {
    setActiveKana(kanaItem);
    setCurrentView('lesson');
  };

  const handleFinishKanaLesson = (kanaId: string) => {
    storageService.recordKanaMastery(kanaId);
    storageService.addStars(3);
    setJapaneseMasteredKana(storageService.getJapaneseMasteredKana());
    handleRefreshProfile();
    setCurrentView('island_map');
  };

  const handleNextKana = (nextKanaItem: KanaItem) => {
    if (activeKana) {
      storageService.recordKanaMastery(activeKana.id);
      storageService.addStars(3);
      setJapaneseMasteredKana(storageService.getJapaneseMasteredKana());
      handleRefreshProfile();
    }
    setActiveKana(nextKanaItem);
  };

  const handleSelectStory = (story: DecodableStory) => {
    setActiveStory(story);
    setCurrentView('story_reader');
  };

  const handleFinishStory = () => {
    if (activeStory) {
      storageService.markStoryCompleted(activeStory.id);
      storageService.addStars(5);
      handleRefreshProfile();
    }
    setCurrentView('stories');
  };

  const handleAddStars = (amount: number) => {
    storageService.addStars(amount);
    handleRefreshProfile();
  };

  const handleToggleLanguage = () => {
    const nextLang = currentLanguage === 'en' ? 'ja' : 'en';
    setCurrentLanguage(nextLang);
    try {
      localStorage.setItem('phonokids_current_lang', nextLang);
    } catch {}
    if (currentView === 'lesson') {
      setCurrentView('island_map');
      setActivePhoneme(null);
      setActiveKana(null);
    }
    if (currentView === 'story_reader') {
      setCurrentView('stories');
      setActiveStory(null);
    }
  };

  const isViewportLockedView = 
    currentView === 'story_reader' || 
    currentView === 'lesson' || 
    currentView === 'ai_chat' ||
    currentView === 'blending' ||
    currentView === 'minimal_pairs' ||
    currentView === 'arcade';

  return (
    <div className={`h-screen w-screen overflow-hidden bg-gradient-to-b from-amber-50 via-yellow-50 to-orange-50 text-amber-950 flex flex-col font-child select-none ${settings.reducedMotion ? 'motion-reduce' : ''}`}>
      {/* Sticky Top Navigation */}
      <div className="shrink-0 z-40">
        <Navbar
          currentView={currentView as any}
          onNavigate={(view) => {
            audioService.playPopSound(500);
            setCurrentView(view);
          }}
          stars={profile.stars}
          soundEnabled={soundEnabled}
          onToggleSound={handleToggleSound}
          onOpenParentGate={() => setIsParentGateOpen(true)}
          onOpenStickerAlbum={() => setIsStickerAlbumOpen(true)}
          currentLanguage={currentLanguage}
          onToggleLanguage={handleToggleLanguage}
        />
      </div>

      {/* Main Content Area: 100% Symmetrical Between English & Japanese */}
      <main className={`flex-1 min-h-0 ${isViewportLockedView ? 'overflow-hidden flex flex-col' : 'overflow-y-auto pb-16'}`}>
        {currentView === 'island_map' && (
          currentLanguage === 'ja' ? (
            <GojuonIslandMap
              unlockedGroups={japaneseUnlockedGroups}
              masteredKana={japaneseMasteredKana}
              onSelectKana={handleSelectKana}
              onAddStars={handleAddStars}
            />
          ) : (
            <PhonicsIslandMap
              unlockedGroups={profile.unlockedGroups}
              masteredPhonemes={profile.masteredPhonemes}
              profile={profile}
              onSelectPhoneme={handleSelectPhoneme}
            />
          )
        )}

        {currentView === 'lesson' && (
          currentLanguage === 'ja' ? (
            activeKana ? (
              <KanaLessonPlayer
                kana={activeKana}
                onFinishLesson={handleFinishKanaLesson}
                onNextKana={handleNextKana}
                onBack={() => setCurrentView('island_map')}
              />
            ) : null
          ) : (
            activePhoneme ? (
              <LessonPlayer
                phoneme={activePhoneme}
                onFinishLesson={handleFinishLesson}
                onNextPhoneme={handleNextPhoneme}
                onBack={() => setCurrentView('island_map')}
              />
            ) : null
          )
        )}

        {currentView === 'stories' && (
          <StoryLibrary
            completedStories={profile.completedStories}
            onSelectStory={handleSelectStory}
            stories={currentLanguage === 'ja' ? JAPANESE_STORIES : DECODABLE_STORIES}
            language={currentLanguage}
          />
        )}

        {currentView === 'story_reader' && activeStory && (() => {
          const activeStories = currentLanguage === 'ja' ? JAPANESE_STORIES : DECODABLE_STORIES;
          const sIdx = activeStories.findIndex((s) => s.id === activeStory.id);
          const nextStory = sIdx !== -1 && sIdx + 1 < activeStories.length
            ? activeStories[sIdx + 1]
            : activeStories[0];
          return (
            <StoryReader
              story={activeStory}
              onBackToHome={() => setCurrentView('stories')}
              onStoryFinished={handleFinishStory}
              onNextStory={() => {
                storageService.markStoryCompleted(activeStory.id);
                storageService.addStars(5);
                handleRefreshProfile();
                setActiveStory(nextStory);
              }}
              nextStoryTitle={nextStory.title}
              language={currentLanguage}
            />
          );
        })()}

        {currentView === 'minimal_pairs' && (
          <MinimalPairsView
            onAddStars={handleAddStars}
            drills={currentLanguage === 'ja' ? JAPANESE_MINIMAL_PAIRS : undefined}
            language={currentLanguage}
          />
        )}

        {currentView === 'blending' && (
          <BlendingPlayground
            onAddStars={handleAddStars}
            blends={currentLanguage === 'ja' ? JAPANESE_BLENDING_WORDS : undefined}
            language={currentLanguage}
          />
        )}

        {currentView === 'arcade' && (
          <ArcadePlayground
            onAddStars={handleAddStars}
            onBackToHome={() => setCurrentView('island_map')}
            language={currentLanguage}
          />
        )}

        {currentView === 'ai_chat' && (
          <AiBuddyChat
            onAddStars={handleAddStars}
            onOpenParentSettings={() => setIsParentGateOpen(true)}
            language={currentLanguage}
          />
        )}
      </main>

      {/* Interactive Mascot Companion - Shown on exploration map and story bookshelf in both languages */}
      {(currentView === 'island_map' || currentView === 'stories') && (
        <CharacterCompanion />
      )}

      {/* Eye Strain & Screen Time Rest Break Modal */}
      {showRestBreak && (
        <RestBreakModal
          onContinue={() => {
            setShowRestBreak(false);
            setSessionSecondsElapsed(0); // Reset timer for next cycle
          }}
          onFinishSession={() => {
            setShowRestBreak(false);
            setCurrentView('island_map');
          }}
        />
      )}

      {/* Parent Dashboard Modal */}
      {isParentGateOpen && (
        <ParentDashboard
          onClose={() => setIsParentGateOpen(false)}
          onProfileUpdated={handleRefreshProfile}
        />
      )}

      {/* Child Sticker Reward Album Modal */}
      {isStickerAlbumOpen && (
        <StickerAlbumModal
          onClose={() => setIsStickerAlbumOpen(false)}
          onStarsUpdated={handleRefreshProfile}
        />
      )}
    </div>
  );
};

export default App;
