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

import { PhonemeInfo } from './types/phonics';
import { DecodableStory } from './types/story';
import { ChildProfile, SessionSettings } from './types/user';
import { DECODABLE_STORIES } from './data/stories';

import { storageService } from './services/storageService';
import { audioService } from './services/audioService';

type ViewMode = 'island_map' | 'stories' | 'minimal_pairs' | 'blending' | 'lesson' | 'story_reader' | 'ai_chat' | 'arcade';

export const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewMode>('island_map');
  const [profile, setProfile] = useState<ChildProfile>(() => storageService.getProfile());
  const [settings, setSettings] = useState<SessionSettings>(() => storageService.getSettings());
  const [soundEnabled, setSoundEnabled] = useState<boolean>(true);

  // Active selections
  const [activePhoneme, setActivePhoneme] = useState<PhonemeInfo | null>(null);
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
        />
      </div>

      {/* Main Content Area */}
      <main className={`flex-1 min-h-0 ${isViewportLockedView ? 'overflow-hidden flex flex-col' : 'overflow-y-auto pb-16'}`}>
        {currentView === 'island_map' && (
          <PhonicsIslandMap
            unlockedGroups={profile.unlockedGroups}
            masteredPhonemes={profile.masteredPhonemes}
            profile={profile}
            onSelectPhoneme={handleSelectPhoneme}
          />
        )}

        {currentView === 'lesson' && activePhoneme && (
          <LessonPlayer
            phoneme={activePhoneme}
            onFinishLesson={handleFinishLesson}
            onNextPhoneme={handleNextPhoneme}
            onBack={() => setCurrentView('island_map')}
          />
        )}

        {currentView === 'stories' && (
          <StoryLibrary
            completedStories={profile.completedStories}
            onSelectStory={handleSelectStory}
          />
        )}

        {currentView === 'story_reader' && activeStory && (() => {
          const sIdx = DECODABLE_STORIES.findIndex((s) => s.id === activeStory.id);
          const nextStory = sIdx !== -1 && sIdx + 1 < DECODABLE_STORIES.length
            ? DECODABLE_STORIES[sIdx + 1]
            : DECODABLE_STORIES[0];
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
            />
          );
        })()}

        {currentView === 'minimal_pairs' && (
          <MinimalPairsView onAddStars={handleAddStars} />
        )}

        {currentView === 'blending' && (
          <BlendingPlayground onAddStars={handleAddStars} />
        )}

        {currentView === 'arcade' && (
          <ArcadePlayground
            onAddStars={handleAddStars}
            onBackToHome={() => setCurrentView('island_map')}
          />
        )}

        {currentView === 'ai_chat' && (
          <AiBuddyChat
            onAddStars={handleAddStars}
            onOpenParentSettings={() => setIsParentGateOpen(true)}
          />
        )}
      </main>

      {/* Interactive Mascot Companion - Only shown on exploration map and story bookshelf to keep lesson action buttons unobstructed */}
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
