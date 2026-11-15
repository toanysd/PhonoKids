import React, { useState } from 'react';
import { PhonicsIslandMap } from '../PhonicsIslandMap';
import { MinimalPairsView } from '../MinimalPairsView';
import { BlendingPlayground } from '../BlendingPlayground';
import { ArcadePlayground } from '../ArcadePlayground';
import { ChildProfile } from '../../types/user';
import { PhonemeInfo } from '../../types/phonics';
import { Gamepad2, Headphones, Map, Wand2 } from 'lucide-react';
import { audioService } from '../../services/audioService';

interface TrainingDojoHubProps {
  profile: ChildProfile;
  onSelectPhoneme: (phoneme: PhonemeInfo) => void;
  onAddStars: (amount: number) => void;
}

type DojoTab = 'islands' | 'blending' | 'minimal_pairs' | 'arcade';

export const TrainingDojoHub: React.FC<TrainingDojoHubProps> = ({
  profile,
  onSelectPhoneme,
  onAddStars,
}) => {
  const [activeTab, setActiveTab] = useState<DojoTab>('islands');

  const tabs: { id: DojoTab; label: string; icon: React.ReactNode }[] = [
    { id: 'islands', label: '7 Đảo Âm', icon: <Map className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" /> },
    { id: 'blending', label: 'Ghép Vần', icon: <Wand2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" /> },
    { id: 'minimal_pairs', label: 'Nghe Âm', icon: <Headphones className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" /> },
    { id: 'arcade', label: 'Trò Chơi', icon: <Gamepad2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" /> },
  ];

  return (
    <div className="w-full h-full flex flex-col overflow-hidden">
      {/* Sub-navigation bar inside Training Dojo */}
      <div className="bg-white/95 border-b-2 border-amber-200 px-2 sm:px-6 py-1.5 grid grid-cols-4 gap-1 sm:flex sm:items-center sm:gap-2 shrink-0">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => {
                audioService.playPopSound(500);
                setActiveTab(tab.id);
              }}
              className={`min-h-[42px] inline-flex items-center justify-center gap-1 sm:gap-1.5 px-1.5 sm:px-4 py-1.5 rounded-2xl text-[11px] sm:text-sm font-black whitespace-nowrap transition-all cursor-pointer ${
                isActive
                  ? 'bg-amber-400 text-slate-950 shadow-sm'
                  : 'bg-amber-50 text-amber-900 hover:bg-amber-100 border border-amber-200'
              }`}
            >
              {tab.icon}
              <span className="truncate">{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Dojo Content Viewport (100% Zero-Scroll Paged Stage) */}
      <div className="flex-1 min-h-0 overflow-hidden flex flex-col">
        {activeTab === 'islands' && (
          <PhonicsIslandMap
            unlockedGroups={profile.unlockedGroups}
            masteredPhonemes={profile.masteredPhonemes}
            profile={profile}
            onSelectPhoneme={onSelectPhoneme}
          />
        )}

        {activeTab === 'blending' && (
          <BlendingPlayground onAddStars={onAddStars} language="en" />
        )}

        {activeTab === 'minimal_pairs' && (
          <MinimalPairsView onAddStars={onAddStars} language="en" />
        )}

        {activeTab === 'arcade' && (
          <ArcadePlayground
            onAddStars={onAddStars}
            onBackToHome={() => setActiveTab('islands')}
            language="en"
          />
        )}
      </div>
    </div>
  );
};
