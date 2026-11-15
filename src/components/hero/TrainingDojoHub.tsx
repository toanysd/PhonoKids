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
    { id: 'islands', label: '42 Âm & Khẩu Hình Thật', icon: <Map className="w-4 h-4" /> },
    { id: 'blending', label: 'Cỗ Máy Ghép Vần', icon: <Wand2 className="w-4 h-4" /> },
    { id: 'minimal_pairs', label: 'Tai Tinh Phân Biệt Âm', icon: <Headphones className="w-4 h-4" /> },
    { id: 'arcade', label: 'Tô Chữ & Trò Chơi Bổ Trợ', icon: <Gamepad2 className="w-4 h-4" /> },
  ];

  return (
    <div className="w-full h-full flex flex-col overflow-hidden">
      {/* Sub-navigation bar inside Training Dojo */}
      <div className="bg-white/95 border-b-2 border-amber-200 px-3 sm:px-6 py-2 flex items-center gap-2 overflow-x-auto shrink-0">
        <span className="text-xs font-black text-amber-900 uppercase tracking-wider shrink-0 mr-1">
          🥋 Phòng Luyện Âm Chuẩn:
        </span>
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
              className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-2xl text-xs font-extrabold transition-all shrink-0 cursor-pointer ${
                isActive
                  ? 'bg-amber-400 text-slate-950 shadow-sm'
                  : 'bg-amber-50 text-amber-900 hover:bg-amber-100 border border-amber-200'
              }`}
            >
              {tab.icon}
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Dojo Content Viewport */}
      <div className={`flex-1 min-h-0 ${activeTab === 'islands' ? 'overflow-y-auto pb-10' : 'overflow-hidden flex flex-col'}`}>
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
