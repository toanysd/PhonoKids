import { HeroCharacter, HeroSaveState, RivalCharacter } from '../types/heroGame';
import { storageService } from './storageService';

const HERO_SAVE_KEY = 'herospeak_save_v1';

const DEFAULT_UNLOCKED_STORIES = ['story_cat_sat', 'story_sam_ant', 'story_red_hen'];

const DEFAULT_SAVE_STATE: HeroSaveState = {
  selectedHeroId: 'hesman',
  rivalSelectionMode: 'story_match',
  selectedRivalId: 'galra_king',
  ageGroupFilter: 'all',
  toddlerForgivingMode: true,
  completedUnitIds: [],
  unitStars: {},
  customHeroes: [],
  customRivals: [],
  studioPrivacyBlur: true,
  xp: 0,
  unlockedStoryIds: DEFAULT_UNLOCKED_STORIES,
};

class HeroStorageService {
  public getSaveState(): HeroSaveState {
    try {
      const raw = localStorage.getItem(HERO_SAVE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw) as Partial<HeroSaveState>;
        return {
          ...DEFAULT_SAVE_STATE,
          ...parsed,
          completedUnitIds: Array.isArray(parsed.completedUnitIds) ? parsed.completedUnitIds : [],
          unitStars: parsed.unitStars && typeof parsed.unitStars === 'object' ? parsed.unitStars : {},
          customHeroes: Array.isArray(parsed.customHeroes) ? parsed.customHeroes : [],
          customRivals: Array.isArray(parsed.customRivals) ? parsed.customRivals : [],
          xp: typeof parsed.xp === 'number' ? parsed.xp : 0,
          unlockedStoryIds:
            Array.isArray(parsed.unlockedStoryIds) && parsed.unlockedStoryIds.length > 0
              ? parsed.unlockedStoryIds
              : DEFAULT_UNLOCKED_STORIES,
        };
      }
    } catch {
      // Fallback to default save state
    }
    return { ...DEFAULT_SAVE_STATE };
  }

  public saveState(next: HeroSaveState): HeroSaveState {
    try {
      localStorage.setItem(HERO_SAVE_KEY, JSON.stringify(next));
    } catch {
      // Ignore storage quota errors safely
    }
    return next;
  }

  public updateSaveState(patch: Partial<HeroSaveState>): HeroSaveState {
    const current = this.getSaveState();
    const merged: HeroSaveState = { ...current, ...patch };
    return this.saveState(merged);
  }

  public selectHero(heroId: string): HeroSaveState {
    return this.updateSaveState({ selectedHeroId: heroId });
  }

  public selectRival(mode: 'story_match' | 'manual', rivalId?: string): HeroSaveState {
    const current = this.getSaveState();
    return this.saveState({
      ...current,
      rivalSelectionMode: mode,
      selectedRivalId: rivalId || current.selectedRivalId,
    });
  }

  public addCustomHero(hero: HeroCharacter): HeroSaveState {
    const current = this.getSaveState();
    const filtered = current.customHeroes.filter((h) => h.id !== hero.id);
    return this.saveState({
      ...current,
      customHeroes: [...filtered, hero],
      selectedHeroId: hero.id,
    });
  }

  public addCustomRival(rival: RivalCharacter): HeroSaveState {
    const current = this.getSaveState();
    const filtered = current.customRivals.filter((r) => r.id !== rival.id);
    return this.saveState({
      ...current,
      customRivals: [...filtered, rival],
      rivalSelectionMode: 'manual',
      selectedRivalId: rival.id,
    });
  }

  public removeCustomCharacter(kind: 'hero' | 'rival', id: string): HeroSaveState {
    const current = this.getSaveState();
    if (kind === 'hero') {
      const nextHeroes = current.customHeroes.filter((h) => h.id !== id);
      return this.saveState({
        ...current,
        customHeroes: nextHeroes,
        selectedHeroId: current.selectedHeroId === id ? 'hesman' : current.selectedHeroId,
      });
    }
    const nextRivals = current.customRivals.filter((r) => r.id !== id);
    return this.saveState({
      ...current,
      customRivals: nextRivals,
      selectedRivalId: current.selectedRivalId === id ? 'galra_king' : current.selectedRivalId,
      rivalSelectionMode: current.selectedRivalId === id ? 'story_match' : current.rivalSelectionMode,
    });
  }

  public recordUnitVictory(
    unitId: string,
    earnedStars: number,
    rewardPhonemeIds?: string[],
    unlockStoryId?: string
  ): HeroSaveState {
    const current = this.getSaveState();
    const prevBest = current.unitStars[unitId] || 0;
    const clampedStars = Math.max(1, Math.min(3, earnedStars));
    const completed = current.completedUnitIds.includes(unitId)
      ? current.completedUnitIds
      : [...current.completedUnitIds, unitId];
    const currentStories = current.unlockedStoryIds || DEFAULT_UNLOCKED_STORIES;
    const nextStories =
      unlockStoryId && !currentStories.includes(unlockStoryId)
        ? [...currentStories, unlockStoryId]
        : currentStories;

    // Add stars to shared global profile
    storageService.addStars(clampedStars);
    if (rewardPhonemeIds && rewardPhonemeIds.length > 0) {
      rewardPhonemeIds.forEach((ph) => storageService.recordPhonemeMastery(ph));
    }

    return this.saveState({
      ...current,
      completedUnitIds: completed,
      unitStars: {
        ...current.unitStars,
        [unitId]: Math.max(prevBest, clampedStars),
      },
      xp: (current.xp || 0) + clampedStars * 25,
      unlockedStoryIds: nextStories,
    });
  }

  /**
   * Enables transient on-device microphone permission directly when starting voice combat,
   * keeping COPPA audio zero-storage / zero-upload compliance intact.
   */
  public enableMicQuickConsent(): void {
    const settings = storageService.getSettings();
    if (!settings.isMicrophoneConsentGranted) {
      storageService.saveSettings({
        ...settings,
        isMicrophoneConsentGranted: true,
      });
    }
  }

  public isMicConsentGranted(): boolean {
    return storageService.getSettings().isMicrophoneConsentGranted;
  }
}

export const heroStorage = new HeroStorageService();
