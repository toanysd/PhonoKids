export interface ChildProfile {
  id: string;
  name: string;
  age: 3 | 4 | 5;
  avatar: string;
  stars: number;
  unlockedGroups: number[]; // e.g. [1, 2]
  masteredPhonemes: string[]; // e.g. ['s', 'a', 't']
  completedStories: string[];
  lastPlayedAt: string;
}

export interface SessionSettings {
  sessionMinutes: number; // 5, 8, 10, 15
  accent: 'US' | 'UK';
  voiceSpeed: number; // 0.85 for toddlers, 1.0 for normal
  soundEffectsEnabled: boolean;
  parentPin: string; // Default: '1234'
  
  // COPPA & Privacy Compliance
  isMicrophoneConsentGranted: boolean; // Strictly false by default
  allowDataAnalytics: boolean; // false
  
  // Child Health & Accessibility
  reducedMotion: boolean; // false
  showWordHighlights: boolean; // true

  // Gemini AI Companion Settings
  geminiApiKey?: string; // Optional user-provided Gemini API Key
  geminiModel?: 'gemini-2.5-flash' | 'gemini-1.5-flash'; // Default: gemini-2.5-flash
  aiCompanionEnabled?: boolean; // Default: true
  aiVoiceAutoPlay?: boolean; // Default: true
}

export interface PhonemeRecord {
  phonemeId: string;
  practicedCount: number;
  accuracyRate: number; // 0 - 100%
  lastPracticed: string;
  needsReview: boolean;
}
