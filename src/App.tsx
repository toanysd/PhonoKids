import React, { useEffect, useMemo, useRef, useState } from 'react';
import { DAILY_QUESTS, getHeroById } from './data/comicGameData';
import { audioService } from './services/audioService';
import { comicStorage, getQuestProgressCount } from './services/comicStorage';
import { micEngine } from './services/micEngine';
import { ComicSaveState, HeroId, PortalId, StoryStage } from './types/comicGame';
import { ComicTopHud } from './components/comic/ComicUiPrimitives';
import { ComicCommandHub } from './components/comic/ComicCommandHub';
import { SoundLabScreen } from './components/comic/SoundLabScreen';
import { ReadingPlanetScreen } from './components/comic/ReadingPlanetScreen';
import { ComicBattleScreen } from './components/comic/ComicBattleScreen';
import { StarZoneScreen } from './components/comic/StarZoneScreen';
import { FreeStoryMapScreen, MiniGamesScreen } from './components/comic/MiniGamesAndMapScreen';
import { DailyQuestsModal, HeroSquadModal, VietnameseGuideModal } from './components/comic/HeroSquadAndQuestsModal';
import { RestBreakModal } from './components/RestBreakModal';

type ActiveView = Exclude<PortalId, 'hero_squad' | 'daily_quest'>;

export const App: React.FC = () => {
  const [save, setSave] = useState<ComicSaveState>(() => comicStorage.load());
  const [view, setView] = useState<ActiveView>('hub');
  const [battleStage, setBattleStage] = useState<StoryStage | undefined>(undefined);
  const [isSquadOpen, setIsSquadOpen] = useState(false);
  const [isQuestsOpen, setIsQuestsOpen] = useState(false);
  const [isGuideOpen, setIsGuideOpen] = useState(false);
  const [showRestBreak, setShowRestBreak] = useState(false);
  const [isSessionResting, setIsSessionResting] = useState(false);

  const sessionSecondsRef = useRef(0);
  const breakLimitRef = useRef(save.sessionMinutes * 60);
  const snoozedRef = useRef(false);

  const hero = useMemo(() => getHeroById(save.selectedHeroId), [save.selectedHeroId]);
  const claimableQuestCount = useMemo(
    () =>
      DAILY_QUESTS.filter(
        (q) => !save.dailyProgress.claimedQuestIds.includes(q.id) && getQuestProgressCount(q, save) >= q.targetCount
      ).length,
    [save]
  );

  useEffect(() => {
    audioService.setSoundEnabled(save.soundEnabled);
    audioService.setVoiceSpeed(0.9);
    audioService.setAccent('US');
  }, [save.soundEnabled]);

  useEffect(() => {
    if (!snoozedRef.current) breakLimitRef.current = save.sessionMinutes * 60;
  }, [save.sessionMinutes]);

  useEffect(() => {
    const timer = setInterval(() => {
      if (document.hidden || showRestBreak || isGuideOpen || isSquadOpen || isQuestsOpen || isSessionResting || view === 'hub') {
        return;
      }
      sessionSecondsRef.current += 1;
      if (sessionSecondsRef.current >= breakLimitRef.current) setShowRestBreak(true);
    }, 1000);
    return () => clearInterval(timer);
  }, [view, showRestBreak, isGuideOpen, isSquadOpen, isQuestsOpen, isSessionResting]);

  useEffect(() => {
    const onVisibilityChange = () => {
      if (document.hidden) {
        micEngine.release();
        audioService.stopSpeaking();
      }
    };
    document.addEventListener('visibilitychange', onVisibilityChange);
    return () => document.removeEventListener('visibilitychange', onVisibilityChange);
  }, []);

  const updateSave = (patch: Partial<ComicSaveState>) => setSave(comicStorage.update(patch));

  const navigateTo = (nextView: ActiveView, stageOverride?: StoryStage) => {
    micEngine.stop();
    audioService.stopSpeaking();
    if (nextView !== 'hub') setIsSessionResting(false);
    setBattleStage(stageOverride);
    setView(nextView);
  };

  const handlePortalNavigate = (portal: PortalId) => {
    if (portal === 'hero_squad') return setIsSquadOpen(true);
    if (portal === 'daily_quest') return setIsQuestsOpen(true);
    navigateTo(portal);
  };

  const handlePlayStage = (stage: StoryStage) => {
    updateSave({ selectedVillainId: stage.villainId });
    navigateTo('battle_arena', stage);
  };

  return (
    <div className={`h-[100dvh] w-screen overflow-hidden bg-[#0F172A] flex flex-col font-sans select-none ${save.reducedMotion ? 'motion-reduce' : ''}`}>
      <div className="relative flex-1 min-h-0 flex flex-col overflow-hidden bg-gradient-to-b from-[#38BDF8] via-[#E0F7FF] to-[#FEF9C3]">
        <ComicTopHud
          hero={hero}
          stars={save.stars}
          gems={save.gems}
          energy={save.energy}
          soundEnabled={save.soundEnabled}
          activePortal={view}
          onOpenSquad={() => setIsSquadOpen(true)}
          onToggleSound={() => updateSave({ soundEnabled: !save.soundEnabled })}
          onOpenGuide={() => setIsGuideOpen(true)}
          onGoHome={() => navigateTo('hub')}
        />

        <main className="flex-1 min-h-0 flex flex-col overflow-hidden">
          {view === 'hub' && (
            <ComicCommandHub
              activeHero={hero}
              selectedHeroId={save.selectedHeroId}
              claimableQuestCount={claimableQuestCount}
              onSelectHero={(heroId: HeroId) => updateSave({ selectedHeroId: heroId })}
              onNavigate={handlePortalNavigate}
            />
          )}
          {view === 'sound_lab' && (
            <SoundLabScreen
              hero={hero}
              toddlerFriendly={save.toddlerFriendly}
              practicedPhonemes={save.practicedPhonemes}
              onPracticeSuccess={(phonemeId) => setSave(comicStorage.recordPhonemePractice(phonemeId))}
            />
          )}
          {view === 'reading_planet' && (
            <ReadingPlanetScreen
              hero={hero}
              bookProgress={save.bookProgress}
              toddlerFriendly={save.toddlerFriendly}
              onBookProgress={(bookId, step, rewardStars) =>
                setSave(comicStorage.recordBookProgress(bookId, step, rewardStars))
              }
            />
          )}
          {view === 'battle_arena' && (
            <ComicBattleScreen
              hero={hero}
              villainId={save.selectedVillainId}
              initialStage={battleStage}
              toddlerFriendly={save.toddlerFriendly}
              onSelectVillain={(villainId) => updateSave({ selectedVillainId: villainId })}
              onBattleWin={(stageId, earnedStars) => setSave(comicStorage.recordStageWin(stageId, earnedStars))}
              onOpenStoryMap={() => navigateTo('story_map')}
            />
          )}
          {view === 'story_map' && (
            <FreeStoryMapScreen
              hero={hero}
              stageStars={save.stageStars}
              initialWorldId={battleStage?.worldId || 1}
              onPlayStage={handlePlayStage}
            />
          )}
          {view === 'mini_games' && (
            <MiniGamesScreen
              hero={hero}
              toddlerFriendly={save.toddlerFriendly}
              onMiniGameWin={(starsEarned) => setSave(comicStorage.recordMiniGameWin(starsEarned))}
            />
          )}
          {view === 'star_zone' && (
            <StarZoneScreen
              hero={hero}
              stars={save.stars}
              gems={save.gems}
              ownedUpgradeIds={save.ownedUpgradeIds}
              equippedUpgradeIds={save.equippedUpgradeIds}
              onBuyOrToggleUpgrade={(upgradeId) => {
                const res = comicStorage.buyAndEquipUpgrade(upgradeId);
                setSave(res.save);
                return { ok: res.ok, reason: res.reason };
              }}
            />
          )}
        </main>
      </div>

      {isSquadOpen && (
        <HeroSquadModal
          selectedHeroId={save.selectedHeroId}
          onSelectHero={(heroId: HeroId) => updateSave({ selectedHeroId: heroId })}
          onClose={() => setIsSquadOpen(false)}
        />
      )}
      {isQuestsOpen && (
        <DailyQuestsModal
          save={save}
          onClaimQuest={(questId) => setSave(comicStorage.claimDailyQuest(questId).save)}
          onClose={() => setIsQuestsOpen(false)}
        />
      )}
      {isGuideOpen && (
        <VietnameseGuideModal
          save={save}
          onUpdateSave={updateSave}
          onResetAll={() => {
            setSave(comicStorage.resetAll());
            navigateTo('hub');
          }}
          onClose={() => setIsGuideOpen(false)}
        />
      )}
      {showRestBreak && (
        <RestBreakModal
          onContinue={() => {
            snoozedRef.current = true;
            sessionSecondsRef.current = 0;
            breakLimitRef.current = 3 * 60;
            setIsSessionResting(false);
            setShowRestBreak(false);
          }}
          onFinishSession={() => {
            snoozedRef.current = false;
            sessionSecondsRef.current = 0;
            breakLimitRef.current = save.sessionMinutes * 60;
            setIsSessionResting(true);
            setShowRestBreak(false);
            micEngine.release();
            audioService.stopSpeaking();
            navigateTo('hub');
          }}
        />
      )}
    </div>
  );
};

export default App;
