import { ChildProfile, SessionSettings, PhonemeRecord } from '../types/user';
import { PHONICS_GROUPS, PHONEMES_DATA } from '../data/phonicsGroups';
import { PhonemeInfo } from '../types/phonics';

const PROFILE_KEY = 'little_lingo_profile';
const SETTINGS_KEY = 'little_lingo_settings';
const RECORDS_KEY = 'little_lingo_records';

const DEFAULT_PROFILE: ChildProfile = {
  id: 'child_default',
  name: 'Bé Mầm Nhỏ',
  age: 4,
  avatar: '🦁',
  stars: 25,
  unlockedGroups: [1],
  masteredPhonemes: [],
  completedStories: ['story_cat_sat'],
  unlockedStickers: ['leo', 'sam'],
  lastPlayedAt: new Date().toISOString(),
};

const DEFAULT_SETTINGS: SessionSettings = {
  sessionMinutes: 8,
  accent: 'US',
  voiceSpeed: 0.85,
  soundEffectsEnabled: true,
  parentPin: '1234',
  isMicrophoneConsentGranted: false, // COPPA compliant: strictly OFF by default
  allowDataAnalytics: false,
  reducedMotion: false,
  showWordHighlights: true,
  geminiApiKey: '',
  geminiModel: 'gemini-2.5-flash',
  aiCompanionEnabled: true,
  aiVoiceAutoPlay: true,
};

export interface IslandProgressInfo {
  groupNumber: number;
  totalPhonemes: number;
  masteredCount: number;
  isComplete: boolean;
  percent: number;
  nextPhonemeId: string | null;
}

class StorageService {
  /**
   * Automatically synchronizes unlocked groups based on mastered phonemes:
   * Group 1 is always unlocked.
   * If all phonemes of Group N are mastered, Group N+1 is automatically unlocked.
   */
  public syncUnlockedGroups(profile: ChildProfile): boolean {
    let changed = false;
    if (!profile.unlockedGroups || !profile.unlockedGroups.includes(1)) {
      profile.unlockedGroups = [1, ...(profile.unlockedGroups || [])];
      changed = true;
    }

    for (const group of PHONICS_GROUPS) {
      if (group.groupNumber < 7) {
        const allMastered = group.phonemes.every((ph) =>
          profile.masteredPhonemes.includes(ph)
        );
        const nextGroupNumber = group.groupNumber + 1;
        if (allMastered && !profile.unlockedGroups.includes(nextGroupNumber)) {
          profile.unlockedGroups.push(nextGroupNumber);
          changed = true;
        }
      }
    }

    profile.unlockedGroups.sort((a, b) => a - b);
    return changed;
  }

  public getProfile(): ChildProfile {
    try {
      const data = localStorage.getItem(PROFILE_KEY);
      if (data) {
        const parsed: ChildProfile = JSON.parse(data);
        if (!parsed.unlockedStickers) {
          parsed.unlockedStickers = ['leo', 'sam'];
        }
        if (!parsed.masteredPhonemes) {
          parsed.masteredPhonemes = [];
        }
        if (!parsed.unlockedGroups || parsed.unlockedGroups.length === 0) {
          parsed.unlockedGroups = [1];
        }
        // Auto reconcile unlocked groups with mastered sounds
        const changed = this.syncUnlockedGroups(parsed);
        if (changed) {
          this.saveProfile(parsed);
        }
        return parsed;
      }
    } catch {
      // Ignore
    }
    const defaultCopy = JSON.parse(JSON.stringify(DEFAULT_PROFILE));
    this.syncUnlockedGroups(defaultCopy);
    return defaultCopy;
  }

  public saveProfile(profile: ChildProfile) {
    try {
      localStorage.setItem(PROFILE_KEY, JSON.stringify(profile));
    } catch {
      // Ignore
    }
  }

  public addStars(amount: number) {
    const profile = this.getProfile();
    profile.stars += amount;
    this.saveProfile(profile);
  }

  public unlockSticker(stickerId: string, starCost: number): boolean {
    const profile = this.getProfile();
    if (!profile.unlockedStickers) {
      profile.unlockedStickers = ['leo', 'sam'];
    }
    if (profile.unlockedStickers.includes(stickerId)) {
      return true; // Already unlocked
    }
    if (profile.stars >= starCost) {
      profile.stars -= starCost;
      profile.unlockedStickers.push(stickerId);
      this.saveProfile(profile);
      return true;
    }
    return false;
  }

  /**
   * Records phoneme mastery and checks if an island was just completed or new island unlocked.
   */
  public recordPhonemeMastery(phonemeId: string): {
    islandCompleted: number | null;
    newlyUnlockedGroup: number | null;
  } {
    const profile = this.getProfile();
    if (!profile.masteredPhonemes.includes(phonemeId)) {
      profile.masteredPhonemes.push(phonemeId);
    }

    let islandCompleted: number | null = null;
    let newlyUnlockedGroup: number | null = null;

    // Find the group containing this phoneme
    const currentGroup = PHONICS_GROUPS.find((g) => g.phonemes.includes(phonemeId));
    if (currentGroup) {
      const allMastered = currentGroup.phonemes.every((ph) =>
        profile.masteredPhonemes.includes(ph)
      );
      if (allMastered) {
        islandCompleted = currentGroup.groupNumber;
        const nextGroupNumber = currentGroup.groupNumber + 1;
        if (nextGroupNumber <= 7 && !profile.unlockedGroups.includes(nextGroupNumber)) {
          profile.unlockedGroups.push(nextGroupNumber);
          newlyUnlockedGroup = nextGroupNumber;
        }
      }
    }

    this.syncUnlockedGroups(profile);
    this.saveProfile(profile);

    return { islandCompleted, newlyUnlockedGroup };
  }

  /**
   * Finds the next sequential phoneme for the child to learn:
   * First searches the earliest unlocked group for unmastered phonemes.
   */
  public getNextRecommendedPhoneme(profile: ChildProfile): PhonemeInfo | null {
    for (const group of PHONICS_GROUPS) {
      if (profile.unlockedGroups.includes(group.groupNumber)) {
        for (const phId of group.phonemes) {
          if (!profile.masteredPhonemes.includes(phId)) {
            return PHONEMES_DATA[phId] || null;
          }
        }
      }
    }
    // If all unlocked phonemes mastered, check if next group can be provided
    const maxUnlocked = Math.max(...profile.unlockedGroups, 1);
    if (maxUnlocked < 7) {
      const nextGroup = PHONICS_GROUPS.find((g) => g.groupNumber === maxUnlocked + 1);
      if (nextGroup && nextGroup.phonemes.length > 0) {
        return PHONEMES_DATA[nextGroup.phonemes[0]] || null;
      }
    }
    // If all 42 mastered, return null
    return null;
  }

  /**
   * Computes progress for a specific island group.
   */
  public getIslandProgress(groupNumber: number, masteredPhonemes: string[]): IslandProgressInfo {
    const group = PHONICS_GROUPS.find((g) => g.groupNumber === groupNumber);
    if (!group) {
      return {
        groupNumber,
        totalPhonemes: 6,
        masteredCount: 0,
        isComplete: false,
        percent: 0,
        nextPhonemeId: null,
      };
    }

    const totalPhonemes = group.phonemes.length;
    const masteredCount = group.phonemes.filter((ph) => masteredPhonemes.includes(ph)).length;
    const isComplete = masteredCount >= totalPhonemes;
    const percent = Math.round((masteredCount / totalPhonemes) * 100);
    const nextPhonemeId = group.phonemes.find((ph) => !masteredPhonemes.includes(ph)) || null;

    return {
      groupNumber,
      totalPhonemes,
      masteredCount,
      isComplete,
      percent,
      nextPhonemeId,
    };
  }

  public markStoryCompleted(storyId: string) {
    const profile = this.getProfile();
    if (!profile.completedStories.includes(storyId)) {
      profile.completedStories.push(storyId);
    }
    this.saveProfile(profile);
  }

  public getSettings(): SessionSettings {
    try {
      const data = localStorage.getItem(SETTINGS_KEY);
      if (data) {
        return { ...DEFAULT_SETTINGS, ...JSON.parse(data) };
      }
    } catch {
      // Ignore
    }
    return DEFAULT_SETTINGS;
  }

  public saveSettings(settings: SessionSettings) {
    try {
      localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));
    } catch {
      // Ignore
    }
  }

  public getPhonemeRecords(): Record<string, PhonemeRecord> {
    try {
      const data = localStorage.getItem(RECORDS_KEY);
      if (data) return JSON.parse(data);
    } catch {
      // Ignore
    }
    return {};
  }

  public updatePhonemeRecord(phonemeId: string, accuracy: number) {
    const records = this.getPhonemeRecords();
    const existing = records[phonemeId] || {
      phonemeId,
      practicedCount: 0,
      accuracyRate: 100,
      lastPracticed: new Date().toISOString(),
      needsReview: false,
    };

    existing.practicedCount += 1;
    existing.accuracyRate = Math.round((existing.accuracyRate * (existing.practicedCount - 1) + accuracy) / existing.practicedCount);
    existing.lastPracticed = new Date().toISOString();
    existing.needsReview = accuracy < 80;

    records[phonemeId] = existing;
    try {
      localStorage.setItem(RECORDS_KEY, JSON.stringify(records));
    } catch {
      // Ignore
    }
  }

  // --- Japanese Kana Storage Helpers ---
  public getJapaneseMasteredKana(): string[] {
    try {
      const data = localStorage.getItem('phonokids_mastered_kana');
      if (data) return JSON.parse(data);
    } catch {}
    return [];
  }

  public recordKanaMastery(kanaId: string) {
    const mastered = this.getJapaneseMasteredKana();
    if (!mastered.includes(kanaId)) {
      mastered.push(kanaId);
      try {
        localStorage.setItem('phonokids_mastered_kana', JSON.stringify(mastered));
      } catch {}
    }
  }

  public getJapaneseUnlockedGroups(): number[] {
    try {
      const data = localStorage.getItem('phonokids_unlocked_kana_groups');
      if (data) {
        const parsed = JSON.parse(data);
        if (Array.isArray(parsed) && parsed.length > 0) return parsed;
      }
    } catch {}
    return [1]; // Row A is unlocked by default
  }

  public unlockJapaneseGroup(groupNumber: number) {
    const unlocked = this.getJapaneseUnlockedGroups();
    if (!unlocked.includes(groupNumber)) {
      unlocked.push(groupNumber);
      unlocked.sort((a, b) => a - b);
      try {
        localStorage.setItem('phonokids_unlocked_kana_groups', JSON.stringify(unlocked));
      } catch {}
    }
  }

  // COPPA Data Erasure: complete wipe of all local child data
  public eraseAllData() {
    try {
      localStorage.removeItem(PROFILE_KEY);
      localStorage.removeItem(SETTINGS_KEY);
      localStorage.removeItem(RECORDS_KEY);
      localStorage.removeItem('phonokids_mastered_kana');
      localStorage.removeItem('phonokids_unlocked_kana_groups');
    } catch {
      // Ignore
    }
  }
}

export const storageService = new StorageService();
