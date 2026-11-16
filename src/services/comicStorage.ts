import { DAILY_QUESTS, ROCKET_UPGRADES } from '../data/comicGameData';
import {
  BookProgressRecord,
  ComicSaveState,
  DailyQuestItem,
  HeroId,
  VillainId,
} from '../types/comicGame';

const SAVE_KEY = 'phonokids_v4_comic_save';

const VALID_HEROES: HeroId[] = ['hesman', 'anpanman', 'spiderman', 'ultraman'];
const VALID_VILLAINS: VillainId[] = [
  'galra_boss',
  'robeast_mech',
  'germ_ufo',
  'goblin_glider',
  'octo_mech',
  'alien_baltan',
];

export const DEFAULT_COMIC_SAVE: ComicSaveState = {
  selectedHeroId: 'hesman',
  selectedVillainId: 'galra_boss',
  stars: 60,
  gems: 25,
  energy: 100,
  soundEnabled: true,
  toddlerFriendly: true,
  reducedMotion: false,
  sessionMinutes: 10,
  parentPin: '1234',
  stageStars: {},
  practicedPhonemes: [],
  bookProgress: {},
  ownedUpgradeIds: [],
  equippedUpgradeIds: [],
  dailyProgress: {
    battlesWon: 0,
    soundLabPracticed: 0,
    booksFinished: 0,
    miniGamesWon: 0,
    claimedQuestIds: [],
  },
};

function cloneDefaultSave(): ComicSaveState {
  return {
    ...DEFAULT_COMIC_SAVE,
    stageStars: {},
    practicedPhonemes: [],
    bookProgress: {},
    ownedUpgradeIds: [],
    equippedUpgradeIds: [],
    dailyProgress: {
      ...DEFAULT_COMIC_SAVE.dailyProgress,
      claimedQuestIds: [],
    },
  };
}

function sanitizeSave(raw: Partial<ComicSaveState> | null): ComicSaveState {
  if (!raw || typeof raw !== 'object') return cloneDefaultSave();
  const dp = raw.dailyProgress && typeof raw.dailyProgress === 'object' ? raw.dailyProgress : undefined;
  return {
    selectedHeroId: VALID_HEROES.includes(raw.selectedHeroId as HeroId)
      ? (raw.selectedHeroId as HeroId)
      : DEFAULT_COMIC_SAVE.selectedHeroId,
    selectedVillainId: VALID_VILLAINS.includes(raw.selectedVillainId as VillainId)
      ? (raw.selectedVillainId as VillainId)
      : DEFAULT_COMIC_SAVE.selectedVillainId,
    stars: typeof raw.stars === 'number' ? Math.max(0, Math.round(raw.stars)) : DEFAULT_COMIC_SAVE.stars,
    gems: typeof raw.gems === 'number' ? Math.max(0, Math.round(raw.gems)) : DEFAULT_COMIC_SAVE.gems,
    energy:
      typeof raw.energy === 'number'
        ? Math.max(0, Math.min(100, Math.round(raw.energy)))
        : DEFAULT_COMIC_SAVE.energy,
    soundEnabled: typeof raw.soundEnabled === 'boolean' ? raw.soundEnabled : true,
    toddlerFriendly: typeof raw.toddlerFriendly === 'boolean' ? raw.toddlerFriendly : true,
    reducedMotion: Boolean(raw.reducedMotion),
    sessionMinutes:
      typeof raw.sessionMinutes === 'number'
        ? Math.max(3, Math.min(30, Math.round(raw.sessionMinutes)))
        : DEFAULT_COMIC_SAVE.sessionMinutes,
    parentPin:
      typeof raw.parentPin === 'string' && raw.parentPin.length >= 4
        ? raw.parentPin
        : DEFAULT_COMIC_SAVE.parentPin,
    stageStars: raw.stageStars && typeof raw.stageStars === 'object' ? raw.stageStars : {},
    practicedPhonemes: Array.isArray(raw.practicedPhonemes) ? raw.practicedPhonemes : [],
    bookProgress: raw.bookProgress && typeof raw.bookProgress === 'object' ? raw.bookProgress : {},
    ownedUpgradeIds: Array.isArray(raw.ownedUpgradeIds) ? raw.ownedUpgradeIds : [],
    equippedUpgradeIds: Array.isArray(raw.equippedUpgradeIds) ? raw.equippedUpgradeIds : [],
    dailyProgress: {
      battlesWon: typeof dp?.battlesWon === 'number' ? Math.max(0, dp.battlesWon) : 0,
      soundLabPracticed:
        typeof dp?.soundLabPracticed === 'number' ? Math.max(0, dp.soundLabPracticed) : 0,
      booksFinished: typeof dp?.booksFinished === 'number' ? Math.max(0, dp.booksFinished) : 0,
      miniGamesWon: typeof dp?.miniGamesWon === 'number' ? Math.max(0, dp.miniGamesWon) : 0,
      claimedQuestIds: Array.isArray(dp?.claimedQuestIds) ? dp.claimedQuestIds : [],
    },
  };
}

export function getQuestProgressCount(quest: DailyQuestItem, save: ComicSaveState): number {
  switch (quest.goalType) {
    case 'battles_won':
      return save.dailyProgress.battlesWon;
    case 'sound_lab_practiced':
      return save.dailyProgress.soundLabPracticed;
    case 'books_finished':
      return save.dailyProgress.booksFinished;
    case 'mini_games_won':
      return save.dailyProgress.miniGamesWon;
  }
}

class ComicStorageService {
  public load(): ComicSaveState {
    try {
      const txt = localStorage.getItem(SAVE_KEY);
      if (!txt) return cloneDefaultSave();
      return sanitizeSave(JSON.parse(txt));
    } catch {
      return cloneDefaultSave();
    }
  }

  public save(next: ComicSaveState): ComicSaveState {
    const clean = sanitizeSave(next);
    try {
      localStorage.setItem(SAVE_KEY, JSON.stringify(clean));
    } catch {
      // Ignore storage quota errors
    }
    return clean;
  }

  public update(patch: Partial<ComicSaveState>): ComicSaveState {
    const cur = this.load();
    return this.save({ ...cur, ...patch });
  }

  public resetAll(): ComicSaveState {
    return this.save(cloneDefaultSave());
  }

  public recordStageWin(stageId: string, earnedStars: number): ComicSaveState {
    const cur = this.load();
    const clamped = Math.max(1, Math.min(3, Math.round(earnedStars)));
    const prevBest = cur.stageStars[stageId] || 0;
    const bonusStars = Math.max(2, clamped * 2);
    return this.save({
      ...cur,
      stars: cur.stars + bonusStars,
      gems: cur.gems + 2,
      energy: Math.min(100, cur.energy + 5),
      stageStars: {
        ...cur.stageStars,
        [stageId]: Math.max(prevBest, clamped),
      },
      dailyProgress: {
        ...cur.dailyProgress,
        battlesWon: cur.dailyProgress.battlesWon + 1,
      },
    });
  }

  public recordBattleWin(starsEarned = 5): ComicSaveState {
    const cur = this.load();
    return this.save({
      ...cur,
      stars: cur.stars + Math.max(1, starsEarned),
      gems: cur.gems + 2,
      energy: Math.min(100, cur.energy + 4),
      dailyProgress: {
        ...cur.dailyProgress,
        battlesWon: cur.dailyProgress.battlesWon + 1,
      },
    });
  }

  public recordPhonemePractice(phonemeId: string): ComicSaveState {
    const cur = this.load();
    const already = cur.practicedPhonemes.includes(phonemeId);
    const nextList = already ? cur.practicedPhonemes : [...cur.practicedPhonemes, phonemeId];
    return this.save({
      ...cur,
      stars: cur.stars + (already ? 1 : 3),
      practicedPhonemes: nextList,
      dailyProgress: {
        ...cur.dailyProgress,
        soundLabPracticed: cur.dailyProgress.soundLabPracticed + 1,
      },
    });
  }

  public recordBookProgress(
    bookId: string,
    step: keyof BookProgressRecord,
    rewardStars = 4
  ): ComicSaveState {
    const cur = this.load();
    const prev = cur.bookProgress[bookId] || {
      listened: false,
      spoken: false,
      quizPassed: false,
    };
    const nextRec: BookProgressRecord = { ...prev, [step]: true };
    const newlyPassedQuiz = step === 'quizPassed' && !prev.quizPassed;
    return this.save({
      ...cur,
      stars: cur.stars + (newlyPassedQuiz ? rewardStars : step === 'spoken' && !prev.spoken ? 2 : 0),
      gems: cur.gems + (newlyPassedQuiz ? 3 : 0),
      bookProgress: {
        ...cur.bookProgress,
        [bookId]: nextRec,
      },
      dailyProgress: {
        ...cur.dailyProgress,
        booksFinished: cur.dailyProgress.booksFinished + (newlyPassedQuiz ? 1 : 0),
      },
    });
  }

  public recordMiniGameWin(starsEarned = 4): ComicSaveState {
    const cur = this.load();
    return this.save({
      ...cur,
      stars: cur.stars + Math.max(1, starsEarned),
      gems: cur.gems + 1,
      dailyProgress: {
        ...cur.dailyProgress,
        miniGamesWon: cur.dailyProgress.miniGamesWon + 1,
      },
    });
  }

  public buyAndEquipUpgrade(upgradeId: string): {
    ok: boolean;
    reason?: string;
    save: ComicSaveState;
  } {
    const cur = this.load();
    const item = ROCKET_UPGRADES.find((u) => u.id === upgradeId);
    if (!item) return { ok: false, reason: 'Item not found', save: cur };

    if (cur.ownedUpgradeIds.includes(upgradeId)) {
      return { ok: true, save: this.toggleEquipUpgrade(upgradeId) };
    }

    if (cur.stars < item.costStars || cur.gems < item.costGems) {
      return { ok: false, reason: 'Not enough stars or gems', save: cur };
    }

    const nextSave = this.save({
      ...cur,
      stars: cur.stars - item.costStars,
      gems: cur.gems - item.costGems,
      ownedUpgradeIds: [...cur.ownedUpgradeIds, upgradeId],
      equippedUpgradeIds: [...cur.equippedUpgradeIds, upgradeId],
    });
    return { ok: true, save: nextSave };
  }

  public toggleEquipUpgrade(upgradeId: string): ComicSaveState {
    const cur = this.load();
    if (!cur.ownedUpgradeIds.includes(upgradeId)) return cur;
    const isEquipped = cur.equippedUpgradeIds.includes(upgradeId);
    const nextEquipped = isEquipped
      ? cur.equippedUpgradeIds.filter((id) => id !== upgradeId)
      : [...cur.equippedUpgradeIds, upgradeId];
    return this.save({ ...cur, equippedUpgradeIds: nextEquipped });
  }

  public claimDailyQuest(questId: string): { ok: boolean; save: ComicSaveState } {
    const cur = this.load();
    const quest = DAILY_QUESTS.find((q) => q.id === questId);
    if (!quest) return { ok: false, save: cur };
    if (cur.dailyProgress.claimedQuestIds.includes(questId)) {
      return { ok: false, save: cur };
    }
    if (getQuestProgressCount(quest, cur) < quest.targetCount) {
      return { ok: false, save: cur };
    }
    const nextSave = this.save({
      ...cur,
      stars: cur.stars + quest.rewardStars,
      gems: cur.gems + quest.rewardGems,
      dailyProgress: {
        ...cur.dailyProgress,
        claimedQuestIds: [...cur.dailyProgress.claimedQuestIds, questId],
      },
    });
    return { ok: true, save: nextSave };
  }
}

export const comicStorage = new ComicStorageService();
