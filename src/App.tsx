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

import { PhonicsGroup, PhonemeInfo } from './types/phonics';
import { DecodableStory } from './types/story';
import { ChildProfile, SessionSettings } from './types/user';

import { PHONEMES_DATA } from './data/phonicsGroups';
import { storageService } from './services/storageService';
import { audioService } from './services/audioService';

type ViewMode = 'island_map' | 'stories' | 'minimal_pairs' | 'blending' | 'lesson' | 'story_reader';

export const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewMode>('island_map');
  const [profile, setProfile] = useState<ChildProfile>(() => storageService.getProfile());
  const [settings, setSettings] = useState<SessionSettings>(() => storageService.getSettings());
  const [soundEnabled, setSoundEnabled] = useState<boolean>(true);

  // Active selections
  const [activePhoneme, setActivePhoneme] = useState<PhonemeInfo | null>(null);
  const [activeStory, setActiveStory] = useState<DecodableStory | null>(null);
  const [isParentGateOpen, setIsParentGateOpen] = useState<boolean>(false);

  useEffect(() => {
    // Configure initial audio settings
    audioService.setVoiceSpeed(settings.voiceSpeed);
    audioService.setAccent(settings.accent);
    audioService.setSoundEnabled(soundEnabled);
  }, [settings, soundEnabled]);

  const handleRefreshProfile = () => {
    setProfile(storageService.getProfile());
    setSettings(storageService.getSettings());
  };

  const handleToggleSound = () => {
    const nextState = !soundEnabled;
    setSoundEnabled(nextState);
    audioService.setSoundEnabled(nextState);
  };

  const handleSelectGroup = (group: PhonicsGroup) => {
    // Pick first phoneme of the group to start micro-lesson
    const firstPhonemeId = group.phonemes[0];
    const phInfo = PHONEMES_DATA[firstPhonemeId];
    if (phInfo) {
      setActivePhoneme(phInfo);
      setCurrentView('lesson');
    }
  };

  const handleFinishLesson = (phonemeId: string) => {
    storageService.recordPhonemeMastery(phonemeId);
    storageService.addStars(3);
    handleRefreshProfile();
    setCurrentView('island_map');
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

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-yellow-50 to-orange-50 text-amber-950 flex flex-col font-child select-none">
      {/* Sticky Top Navigation */}
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
      />

      {/* Main Content Area */}
      <main className="flex-1 pb-20">
        {currentView === 'island_map' && (
          <PhonicsIslandMap
            unlockedGroups={profile.unlockedGroups}
            onSelectGroup={handleSelectGroup}
          />
        )}

        {currentView === 'lesson' && activePhoneme && (
          <LessonPlayer
            phoneme={activePhoneme}
            onFinishLesson={handleFinishLesson}
            onBack={() => setCurrentView('island_map')}
          />
        )}

        {currentView === 'stories' && (
          <StoryLibrary
            completedStories={profile.completedStories}
            onSelectStory={handleSelectStory}
          />
        )}

        {currentView === 'story_reader' && activeStory && (
          <StoryReader
            story={activeStory}
            onBackToHome={() => setCurrentView('stories')}
            onStoryFinished={handleFinishStory}
          />
        )}

        {currentView === 'minimal_pairs' && (
          <MinimalPairsView onAddStars={handleAddStars} />
        )}

        {currentView === 'blending' && (
          <BlendingPlayground onAddStars={handleAddStars} />
        )}
      </main>

      {/* Interactive Mascot Companion */}
      <CharacterCompanion />

      {/* Parent Dashboard Modal */}
      {isParentGateOpen && (
        <ParentDashboard
          onClose={() => setIsParentGateOpen(false)}
          onProfileUpdated={handleRefreshProfile}
        />
      )}
    </div>
  );
};

export default App;
