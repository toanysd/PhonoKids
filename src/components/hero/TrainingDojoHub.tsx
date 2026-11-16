import React, { useState } from 'react';
import { PhonicsIslandMap } from '../PhonicsIslandMap';
import { MinimalPairsView } from '../MinimalPairsView';
import { BlendingPlayground } from '../BlendingPlayground';
import { ArcadePlayground } from '../ArcadePlayground';
import { ChildProfile } from '../../types/user';
import { PhonemeInfo } from '../../types/phonics';
import { ChevronLeft, Gamepad2, Headphones, Map, Wand2 } from 'lucide-react';
import { audioService } from '../../services/audioService';

interface TrainingDojoHubProps {
  profile: ChildProfile;
  onSelectPhoneme: (phoneme: PhonemeInfo) => void;
  onAddStars: (amount: number) => void;
  onBackToMap?: () => void;
}

type DojoTab = 'islands' | 'blending' | 'minimal_pairs' | 'arcade';

export const TrainingDojoHub: React.FC<TrainingDojoHubProps> = ({
  profile,
  onSelectPhoneme,
  onAddStars,
  onBackToMap,
}) => {
  const [activeTab, setActiveTab] = useState<DojoTab>('arcade');

  const tabs: { id: DojoTab; label: string; icon: React.ReactNode }[] = [
    { id: 'arcade', label: 'Trò Chơi', icon: <Gamepad2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" /> },
    { id: 'islands', label: '7 Đảo Âm', icon: <Map className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" /> },
    { id: 'blending', label: 'Ghép Vần', icon: <Wand2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" /> },
    { id: 'minimal_pairs', label: 'Nghe Âm', icon: <Headphones className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" /> },
  ];

  return (
    <div className="w-full h-full flex flex-col overflow-hidden bg-[#FFFDF7]">
      {/* Sub-navigation bar inside Training Dojo */}
      <div className="bg-slate-950 border-b-2 border-amber-400/70 px-2 sm:px-6 py-1.5 flex items-center gap-1.5 sm:gap-2 shrink-0">
        {onBackToMap && (
          <button
            type="button"
            aria-label="Bản Đồ"
            onClick={() => {
              audioService.playPopSound(440);
              onBackToMap();
            }}
            className="shrink-0 min-h-[42px] px-2.5 sm:px-3 rounded-2xl bg-white/15 hover:bg-white/25 text-white border border-white/25 font-black text-xs inline-flex items-center gap-1 cursor-pointer active:scale-95"
          >
            <ChevronLeft className="w-4 h-4" />
            <span className="hidden sm:inline">Bản Đồ</span>
          </button>
        )}
        <div className="flex-1 min-w-0 grid grid-cols-4 gap-1 sm:flex sm:items-center sm:gap-2">
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
                className={`min-h-[44px] flex-col sm:flex-row inline-flex items-center justify-center gap-0.5 sm:gap-1.5 px-1 sm:px-4 py-1 sm:py-1.5 rounded-2xl text-[10px] sm:text-sm font-black whitespace-nowrap transition-all cursor-pointer ${
                  isActive
                    ? 'bg-amber-400 text-slate-950 shadow-sm'
                    : 'bg-white/10 text-amber-100 hover:bg-white/20 border border-white/15'
                }`}
              >
                {tab.icon}
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>
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
