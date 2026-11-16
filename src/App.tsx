import React, { useCallback, useEffect, useRef, useState } from 'react';
import { WorldOverworldMap } from './components/game/WorldOverworldMap';
import { GameHudBar } from './components/game/GameHudBar';
import { HeroCommunicatorModal } from './components/game/HeroCommunicatorModal';
import { VideoLessonCutscene } from './components/hero/VideoLessonCutscene';
import { BattleStageArena } from './components/hero/BattleStageArena';
import { HeroRosterDrawer } from './components/hero/HeroRosterDrawer';
import { TrainingDojoHub } from './components/hero/TrainingDojoHub';
import { LessonPlayer } from './components/LessonPlayer';
import { StoryLibrary } from './components/StoryLibrary';
import { StoryReader } from './components/StoryReader';
import { ParentDashboard } from './components/ParentDashboard';
import { RestBreakModal } from './components/RestBreakModal';
import { StickerAlbumModal } from './components/StickerAlbumModal';

type AppViewMode =
  | 'hero_hub'
  | 'hero_cutscene'
  | 'hero_battle'
  | 'dojo'
  | 'lesson'
  | 'stories'
  | 'story_reader'
  | 'ai_chat';

import { PhonemeInfo } from './types/phonics';
import { DecodableStory } from './types/story';
import { ChildProfile, SessionSettings } from './types/user';
import { CurriculumUnit, HeroSaveState } from './types/heroGame';

import { DECODABLE_STORIES } from './data/stories';
import { ALL_CURRICULUM_UNITS } from './data/curriculumWorlds';
import { resolveActiveHero, resolveActiveRival } from './data/heroRoster';
import { storageService } from './services/storageService';
import { heroStorage } from './services/heroStorage';
import { audioService } from './services/audioService';
import { voiceCombatService } from './services/voiceCombatService';

export const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<AppViewMode>('hero_hub');
  const [profile, setProfile] = useState<ChildProfile>(() => storageService.getProfile());
  const [settings, setSettings] = useState<SessionSettings>(() => storageService.getSettings());
  const [heroSave, setHeroSave] = useState<HeroSaveState>(() => heroStorage.getSaveState());
  const [soundEnabled, setSoundEnabled] = useState<boolean>(true);

  const [activeUnit, setActiveUnit] = useState<CurriculumUnit>(ALL_CURRICULUM_UNITS[0]);
  const [activePhoneme, setActivePhoneme] = useState<PhonemeInfo | null>(null);
  const [activeStory, setActiveStory] = useState<DecodableStory | null>(null);

  const [isRosterOpen, setIsRosterOpen] = useState<boolean>(false);
  const [isParentGateOpen, setIsParentGateOpen] = useState<boolean>(false);
  const [isStickerAlbumOpen, setIsStickerAlbumOpen] = useState<boolean>(false);

  // Health: Session Rest Break Countdown (useRef avoids 1s state re-renders interrupting active TTS)
  const sessionSecondsRef = useRef<number>(0);
  const breakLimitSecondsRef = useRef<number>(settings.sessionMinutes * 60);
  const isSnoozedRef = useRef<boolean>(false);
  const [showRestBreak, setShowRestBreak] = useState<boolean>(false);
  const [isSessionResting, setIsSessionResting] = useState<boolean>(false);

  const activeHero = resolveActiveHero(heroSave);
  const activeRival = resolveActiveRival(heroSave, activeHero);

  useEffect(() => {
    audioService.setVoiceSpeed(settings.voiceSpeed);
    audioService.setAccent(settings.accent);
    audioService.setSoundEnabled(soundEnabled);
  }, [settings, soundEnabled]);

  useEffect(() => {
    if (!isSnoozedRef.current) {
      breakLimitSecondsRef.current = settings.sessionMinutes * 60;
    }
  }, [settings.sessionMinutes]);

  useEffect(() => {
    const timer = setInterval(() => {
      if (
        document.hidden ||
        showRestBreak ||
        isParentGateOpen ||
        isSessionResting ||
        currentView === 'hero_hub'
      ) {
        return;
      }
      sessionSecondsRef.current += 1;
      if (sessionSecondsRef.current >= breakLimitSecondsRef.current) {
        setShowRestBreak(true);
      }
    }, 1000);
    return () => clearInterval(timer);
  }, [settings.sessionMinutes, showRestBreak, isParentGateOpen, isSessionResting, currentView]);

  useEffect(() => {
    const onVisibilityChange = () => {
      if (document.hidden) {
        voiceCombatService.releaseSession();
        audioService.stopSpeaking();
      }
    };
    document.addEventListener('visibilitychange', onVisibilityChange);
    return () => document.removeEventListener('visibilitychange', onVisibilityChange);
  }, []);

  const handleRefreshProfile = () => {
    setProfile(storageService.getProfile());
    setSettings(storageService.getSettings());
  };

  const handleToggleSound = () => {
    const nextState = !soundEnabled;
    setSoundEnabled(nextState);
    audioService.setSoundEnabled(nextState);
  };

  const handleAddStars = (amount: number) => {
    storageService.addStars(amount);
    handleRefreshProfile();
  };

  const handleSelectPhoneme = (phInfo: PhonemeInfo) => {
    setIsSessionResting(false);
    setActivePhoneme(phInfo);
    setCurrentView('lesson');
  };

  const handleFinishPhonemeLesson = (phonemeId: string) => {
    storageService.recordPhonemeMastery(phonemeId);
    storageService.addStars(3);
    handleRefreshProfile();
    setCurrentView('dojo');
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
    setIsSessionResting(false);
    setActiveStory(story);
    setCurrentView('story_reader');
  };

  const handleNavigateView = (view: 'hero_hub' | 'dojo' | 'stories' | 'ai_chat') => {
    audioService.playPopSound(500);
    voiceCombatService.releaseSession();
    if (view !== 'hero_hub') {
      setIsSessionResting(false);
    }
    setCurrentView(view);
  };

  const handleFinishStory = () => {
    if (activeStory) {
      storageService.markStoryCompleted(activeStory.id);
      storageService.addStars(5);
      handleRefreshProfile();
    }
    setCurrentView('stories');
  };

  const activeUnitRef = useRef(activeUnit);
  activeUnitRef.current = activeUnit;

  const handleNextUnit = useCallback(() => {
    const curUnit = activeUnitRef.current;
    const idx = ALL_CURRICULUM_UNITS.findIndex((u) => u.id === curUnit.id);
    const nextUnit =
      idx !== -1 && idx + 1 < ALL_CURRICULUM_UNITS.length
        ? ALL_CURRICULUM_UNITS[idx + 1]
        : ALL_CURRICULUM_UNITS[0];
    setActiveUnit(nextUnit);
    setCurrentView('hero_cutscene');
  }, []);

  const handleCutsceneStartBattle = useCallback(() => {
    voiceCombatService.warmUpSession();
    setCurrentView('hero_battle');
  }, []);

  const handleHeroBackToHub = useCallback(() => {
    voiceCombatService.releaseSession();
    setCurrentView('hero_hub');
  }, []);

  const handleToggleToddlerMode = useCallback(() => {
    setHeroSave(
      heroStorage.updateSaveState({
        toddlerForgivingMode: !heroSave.toddlerForgivingMode,
      })
    );
  }, [heroSave.toddlerForgivingMode]);

  const handleOpenRoster = useCallback(() => {
    setIsRosterOpen(true);
  }, []);

  const handleUnitVictory = useCallback((starsEarned: number) => {
    const curUnit = activeUnitRef.current;
    const updated = heroStorage.recordUnitVictory(
      curUnit.id,
      starsEarned,
      curUnit.rewardPhonemeIds,
      curUnit.unlockStoryId
    );
    setHeroSave(updated);
    setProfile(storageService.getProfile());
    setSettings(storageService.getSettings());
  }, []);

  const isOverlayPaused =
    isRosterOpen || showRestBreak || isParentGateOpen || isStickerAlbumOpen;

  return (
    <div
      className={`h-[100dvh] w-screen overflow-hidden bg-slate-950 text-slate-950 flex flex-col font-sans select-none ${
        settings.reducedMotion ? 'motion-reduce' : ''
      }`}
    >
      <main className="flex-1 min-h-0 overflow-hidden flex flex-col relative">
        {currentView === 'hero_hub' && (
          <div className="relative flex-1 min-h-0 flex flex-col overflow-hidden">
            <div className="absolute inset-x-0 top-0 z-30 pointer-events-none">
              <GameHudBar
                hero={activeHero}
                xp={heroSave.xp || 0}
                stars={profile.stars}
                soundEnabled={soundEnabled}
                onToggleSound={handleToggleSound}
                onOpenRoster={() => setIsRosterOpen(true)}
                onOpenStickerAlbum={() => setIsStickerAlbumOpen(true)}
                onOpenParentGate={() => setIsParentGateOpen(true)}
              />
            </div>
            <WorldOverworldMap
              saveState={heroSave}
              hero={activeHero}
              rival={activeRival}
              onStartUnitCutscene={(unit) => {
                setIsSessionResting(false);
                voiceCombatService.warmUpSession();
                setActiveUnit(unit);
                setCurrentView('hero_cutscene');
              }}
              onStartUnitBattle={(unit) => {
                setIsSessionResting(false);
                voiceCombatService.warmUpSession();
                setActiveUnit(unit);
                setCurrentView('hero_battle');
              }}
              onOpenPortal={(portal) => handleNavigateView(portal)}
            />
          </div>
        )}

        {currentView === 'hero_cutscene' && (
          <VideoLessonCutscene
            unit={activeUnit}
            hero={activeHero}
            toddlerForgivingMode={heroSave.toddlerForgivingMode}
            isOverlayPaused={isOverlayPaused}
            onStartBattle={handleCutsceneStartBattle}
            onBackToHub={handleHeroBackToHub}
          />
        )}

        {currentView === 'hero_battle' && (
          <BattleStageArena
            unit={activeUnit}
            hero={activeHero}
            rival={activeRival}
            toddlerMode={heroSave.toddlerForgivingMode}
            isOverlayPaused={isOverlayPaused}
            onToggleToddlerMode={handleToggleToddlerMode}
            onOpenRoster={handleOpenRoster}
            onUnitVictory={handleUnitVictory}
            onNextUnit={handleNextUnit}
            onBackToHub={handleHeroBackToHub}
          />
        )}

        {currentView === 'dojo' && (
          <TrainingDojoHub
            profile={profile}
            onSelectPhoneme={handleSelectPhoneme}
            onAddStars={handleAddStars}
            onBackToMap={() => handleNavigateView('hero_hub')}
          />
        )}

        {currentView === 'lesson' && activePhoneme && (
          <LessonPlayer
            phoneme={activePhoneme}
            onFinishLesson={handleFinishPhonemeLesson}
            onNextPhoneme={handleNextPhoneme}
            onBack={() => setCurrentView('dojo')}
          />
        )}

        {currentView === 'stories' && (
          <StoryLibrary
            completedStories={profile.completedStories}
            unlockedStoryIds={heroSave.unlockedStoryIds || []}
            onSelectStory={handleSelectStory}
            onBackToMap={() => handleNavigateView('hero_hub')}
            stories={DECODABLE_STORIES}
            language="en"
          />
        )}

        {currentView === 'story_reader' &&
          activeStory &&
          (() => {
            const sIdx = DECODABLE_STORIES.findIndex((s) => s.id === activeStory.id);
            const nextStory =
              sIdx !== -1 && sIdx + 1 < DECODABLE_STORIES.length
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
                language="en"
              />
            );
          })()}

        {currentView === 'ai_chat' && (
          <HeroCommunicatorModal
            hero={activeHero}
            onAddStars={handleAddStars}
            onBackToMap={() => handleNavigateView('hero_hub')}
            onOpenParentSettings={() => setIsParentGateOpen(true)}
          />
        )}
      </main>

      {isRosterOpen && (
        <HeroRosterDrawer
          saveState={heroSave}
          onUpdateSave={(next) => setHeroSave(heroStorage.saveState(next))}
          onSelectHero={(heroId) => setHeroSave(heroStorage.selectHero(heroId))}
          onSelectRivalMode={(mode, rivalId) =>
            setHeroSave(heroStorage.selectRival(mode, rivalId))
          }
          onAddCustomHero={(hero) => setHeroSave(heroStorage.addCustomHero(hero))}
          onAddCustomRival={(rival) => setHeroSave(heroStorage.addCustomRival(rival))}
          onRemoveCustom={(kind, id) => setHeroSave(heroStorage.removeCustomCharacter(kind, id))}
          onClose={() => setIsRosterOpen(false)}
        />
      )}

      {showRestBreak && (
        <RestBreakModal
          onContinue={() => {
            isSnoozedRef.current = true;
            sessionSecondsRef.current = 0;
            breakLimitSecondsRef.current = 3 * 60;
            setIsSessionResting(false);
            setShowRestBreak(false);
          }}
          onFinishSession={() => {
            isSnoozedRef.current = false;
            sessionSecondsRef.current = 0;
            breakLimitSecondsRef.current = settings.sessionMinutes * 60;
            setIsSessionResting(true);
            setShowRestBreak(false);
            voiceCombatService.releaseSession();
            audioService.stopSpeaking();
            setCurrentView('hero_hub');
          }}
        />
      )}

      {isParentGateOpen && (
        <ParentDashboard
          onClose={() => setIsParentGateOpen(false)}
          onProfileUpdated={handleRefreshProfile}
        />
      )}

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
