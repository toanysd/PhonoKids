import { ChildProfile, SessionSettings, PhonemeRecord } from '../types/user';

const PROFILE_KEY = 'little_lingo_profile';
const SETTINGS_KEY = 'little_lingo_settings';
const RECORDS_KEY = 'little_lingo_records';

const DEFAULT_PROFILE: ChildProfile = {
  id: 'child_default',
  name: 'Bé Mầm Nhỏ',
  age: 4,
  avatar: '🦁',
  stars: 12,
  unlockedGroups: [1, 2],
  masteredPhonemes: ['s', 'a', 't'],
  completedStories: ['story_cat_sat'],
  lastPlayedAt: new Date().toISOString(),
};

const DEFAULT_SETTINGS: SessionSettings = {
  sessionMinutes: 8,
  accent: 'US',
  voiceSpeed: 0.85,
  soundEffectsEnabled: true,
  parentPin: '1234',
};

class StorageService {
  public getProfile(): ChildProfile {
    try {
      const data = localStorage.getItem(PROFILE_KEY);
      if (data) return JSON.parse(data);
    } catch {
      // Ignore
    }
    return DEFAULT_PROFILE;
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

  public recordPhonemeMastery(phonemeId: string) {
    const profile = this.getProfile();
    if (!profile.masteredPhonemes.includes(phonemeId)) {
      profile.masteredPhonemes.push(phonemeId);
    }
    this.saveProfile(profile);
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
      if (data) return JSON.parse(data);
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
}

export const storageService = new StorageService();
