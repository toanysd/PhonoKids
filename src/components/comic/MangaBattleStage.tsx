import React from 'react';
import { ComicHero, ComicVillain, MangaCameraShot, SpritePose, StoryStage } from '../../types/comicGame';
import { SpeakerIcon, StarIcon } from './ComicUiPrimitives';

export interface MangaBattleStageProps {
  shot: MangaCameraShot;
  hero: ComicHero;
  villain: ComicVillain;
  stage: StoryStage;
  heroPose: SpritePose;
  villainPose: SpritePose;
  volume: number;
  isListening: boolean;
  calloutText: string;
  lastAccuracy: number;
  combo: number;
  onHearWord: () => void;
  onNextBattle: () => void;
}

const SPEED_RAY_ANGLES = [0, 18, 36, 54, 72, 90, 108, 126, 144, 162, 180, 198, 216, 234, 252, 270, 288, 306, 324, 342];

const HERO_ANIM_CLASS: Record<SpritePose, string> = {
  idle: 'animate-hero-idle',
  speaking: 'animate-sprite-speak',
  attack: 'animate-sprite-attack',
  hit: 'animate-hit-shake',
  victory: 'animate-sprite-victory',
};

const RadialSpeedLines: React.FC<{ color?: string; strength?: number }> = ({ color = '#FACC15', strength = 25 }) => {
  const strokeW = (1.1 + Math.min(100, strength) * 0.028).toFixed(2);
  const opacity = (0.3 + Math.min(100, strength) * 0.005).toFixed(2);
  return (
    <svg viewBox="0 0 200 200" preserveAspectRatio="none" className="absolute inset-0 w-full h-full pointer-events-none" aria-hidden="true" style={{ opacity }}>
      {SPEED_RAY_ANGLES.map((deg) => {
        const rad = (deg * Math.PI) / 180;
        return (
          <line
            key={deg}
            x1={100 + Math.cos(rad) * 32}
            y1={100 + Math.sin(rad) * 32}
            x2={100 + Math.cos(rad) * 145}
            y2={100 + Math.sin(rad) * 145}
            stroke={color}
            strokeWidth={strokeW}
          />
        );
      })}
    </svg>
  );
};

interface StageSpriteProps {
  testId: string;
  pose: SpritePose;
  src: string;
  alt: string;
  className: string;
  style?: React.CSSProperties;
}

const StageSprite: React.FC<StageSpriteProps> = ({ testId, pose, src, alt, className, style }) => (
  <img data-testid={testId} data-pose={pose} src={src} alt={alt} style={style} className={className} draggable={false} />
);

const ShoutBalloon: React.FC<{ stage: StoryStage; compact?: boolean; onHearWord: () => void }> = ({ stage, compact = false, onHearWord }) => (
  <button
    type="button"
    data-testid="battle-speech-bubble"
    onClick={onHearWord}
    className={`relative z-30 text-left cursor-pointer active:translate-y-[1px] transition-transform ${
      compact
        ? 'bg-[#FFFDF5]/95 rounded-xl border-[3px] border-[#0F172A] shadow-[3px_3px_0_#0F172A] px-2.5 py-1'
        : '-rotate-2 bg-[#FFFDF5] rounded-2xl border-[3.5px] border-[#0F172A] shadow-[4px_5px_0_#0F172A] px-2.5 py-1.5 sm:px-3.5 sm:py-2'
    }`}
  >
    <div data-testid="battle-word-card" className="flex items-center gap-2">
      <img
        src={stage.imageUrl}
        alt={stage.displayWord}
        className={`${compact ? 'w-8 h-8' : 'w-12 h-12 sm:w-16 sm:h-16'} object-contain shrink-0 drop-shadow-[0_2px_0_rgba(15,23,42,0.18)]`}
        draggable={false}
      />
      <div className="flex flex-col items-start min-w-0">
        <span className={`font-display font-black leading-none text-[#0F172A] uppercase ${compact ? 'text-xs sm:text-sm' : 'text-base sm:text-xl'}`}>
          {stage.displayWord}!
        </span>
        <span className="mt-1 inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#22D3EE] border-[2px] border-[#0F172A] font-display font-black text-[10px] text-[#0F172A]">
          <SpeakerIcon className="w-3 h-3" />
          <span>HEAR</span>
        </span>
      </div>
    </div>
  </button>
);

export const MangaBattleStage: React.FC<MangaBattleStageProps> = ({
  shot,
  hero,
  villain,
  stage,
  heroPose,
  villainPose,
  volume,
  isListening,
  calloutText,
  lastAccuracy,
  combo,
  onHearWord,
  onNextBattle,
}) => {
  const heroSpriteAnim = HERO_ANIM_CLASS[heroPose];
  const villainSpriteAnim = villainPose === 'hit' ? 'animate-hit-shake opacity-90' : 'animate-float';
  const auraScale = isListening ? 1 + Math.min(0.14, volume / 680) : 1;

  return (
    <div
      data-testid="manga-page-stage"
      data-camera-shot={shot}
      className="relative flex-1 min-h-0 h-full w-full max-w-4xl mx-auto rounded-2xl border-[4px] border-[#0F172A] shadow-[5px_6px_0_#0F172A] bg-[#FFFDF5] overflow-hidden select-none"
    >
      {/* SHOT 1: DIAGONAL VS SPLIT */}
      {shot === 'vs_split' && (
        <div className="relative w-full h-full comic-halftone">
          <div className="absolute inset-0 bg-[#1E1B4B] overflow-hidden" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 56%, 0 28%)' }}>
            <StageSprite
              testId="battle-villain-sprite"
              pose={villainPose}
              src={villainPose === 'idle' ? villain.mangaMenaceUrl : villain.sprites[villainPose]}
              alt={`${villain.nameEn} ${villainPose}`}
              className={`w-full h-full ${villainPose === 'idle' ? 'object-cover object-center' : 'object-contain object-right pr-4 pt-3 scale-110'} ${villainSpriteAnim}`}
            />
            <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-[#0F172A]/60 pointer-events-none" />
            <span className="absolute top-2 right-3 font-display font-black text-base sm:text-xl text-white drop-shadow-[2px_2px_0_#0F172A] tracking-widest">ゴゴゴ</span>
          </div>

          <div className="absolute inset-0 bg-[#FEF08A] overflow-hidden" style={{ clipPath: 'polygon(0 28%, 100% 56%, 100% 100%, 0 100%)' }}>
            <div className="absolute top-[29%] inset-x-0 bottom-0 overflow-hidden">
              {heroPose === 'idle' ? (
                <div className="w-full h-full scale-[1.06] origin-top">
                  <StageSprite
                    testId="battle-hero-sprite"
                    pose={heroPose}
                    src={hero.mangaSplashUrl}
                    alt={`${hero.nameEn} ${heroPose}`}
                    className="w-full h-full object-cover object-[50%_10%]"
                  />
                </div>
              ) : (
                <>
                  <div className="absolute inset-0 comic-halftone opacity-85" />
                  <RadialSpeedLines color={hero.accentColor} strength={42} />
                  <div className="w-full h-full flex items-end justify-center scale-[1.18] origin-bottom">
                    <StageSprite
                      testId="battle-hero-sprite"
                      pose={heroPose}
                      src={hero.sprites[heroPose]}
                      alt={`${hero.nameEn} ${heroPose}`}
                      className={`w-full h-full object-contain object-bottom p-2 ${heroSpriteAnim}`}
                    />
                  </div>
                </>
              )}
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/25 via-transparent to-transparent pointer-events-none" />
          </div>

          <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 w-full h-full pointer-events-none z-10" aria-hidden="true">
            <line x1="-2" y1="27.4" x2="102" y2="56.6" stroke="#0F172A" strokeWidth="3.4" />
            <line x1="-2" y1="27.4" x2="102" y2="56.6" stroke="#FFFDF5" strokeWidth="1.4" />
          </svg>

          <div className="absolute left-1/2 top-[42%] -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none">
            <span className="inline-block -rotate-6 px-2.5 py-0.5 rounded-lg bg-[#FACC15] border-[3.5px] border-[#0F172A] shadow-[3px_4px_0_#0F172A] font-display font-black text-sm sm:text-base text-[#0F172A]">
              VS
            </span>
          </div>

          <div className="absolute top-2 left-2 sm:top-3 sm:left-3 z-30">
            <ShoutBalloon stage={stage} onHearWord={onHearWord} />
          </div>

          <div className="absolute bottom-2 right-2 z-30 px-2.5 py-1 rounded-xl bg-[#FACC15] border-[3px] border-[#0F172A] shadow-[3px_3px_0_#0F172A] font-display font-black text-[11px] sm:text-xs text-[#0F172A]">
            {calloutText || hero.attackCalloutEn}
          </div>
        </div>
      )}

      {/* SHOT 2: EYE CUT-IN & VOICE SPEED LINES */}
      {shot === 'eye_cutin' && (
        <div className="relative w-full h-full bg-[#0F172A] flex flex-col justify-between overflow-hidden">
          <RadialSpeedLines color={isListening ? '#22D3EE' : '#FACC15'} strength={Math.max(30, volume)} />

          <div className="relative z-30 p-2 sm:p-3 flex items-start justify-between gap-2">
            <ShoutBalloon stage={stage} compact onHearWord={onHearWord} />
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl bg-white/95 border-[3px] border-[#0F172A] shadow-[3px_3px_0_#0F172A] p-1 flex items-center justify-center overflow-hidden">
              <StageSprite testId="battle-villain-sprite" pose={villainPose} src={villain.sprites[villainPose]} alt={`${villain.nameEn} ${villainPose}`} className={`max-h-full max-w-full object-contain ${villainSpriteAnim}`} />
            </div>
          </div>

          <div data-testid="manga-cutin-banner" className="relative z-20 -mx-3 h-[38%] sm:h-[42%] border-y-[5px] border-[#0F172A] bg-[#FACC15] shadow-[0_8px_0_#0F172A] overflow-hidden animate-cutin-slam">
            <img src={hero.mangaCutinUrl} alt={`${hero.nameEn} eye cut-in`} className="w-full h-full object-cover object-center" draggable={false} />
            <div className="absolute bottom-1 right-4 px-2.5 py-0.5 rounded-lg bg-[#0F172A] text-[#FACC15] font-display font-black text-xs sm:text-sm tracking-wider">
              {hero.mangaKatakana} FOCUS!
            </div>
          </div>

          <div className="relative z-20 flex-1 min-h-0 flex items-end justify-center pb-0.5 pointer-events-none">
            <div
              className="h-full w-full flex items-end justify-center transition-transform duration-75"
              style={{ transform: `scale(${(auraScale * 1.18).toFixed(3)})`, transformOrigin: 'bottom center' }}
            >
              <StageSprite
                testId="battle-hero-sprite"
                pose={heroPose}
                src={hero.sprites.speaking}
                alt={`${hero.nameEn} speaking`}
                className="max-h-full max-w-[72%] object-contain object-bottom drop-shadow-[0_0_14px_rgba(34,211,238,0.85)]"
              />
            </div>
          </div>
        </div>
      )}

      {/* SHOT 3: FULL-PAGE FINISHER SPLASH */}
      {shot === 'finisher_splash' && (
        <div className="relative w-full h-full bg-[#0F172A] overflow-hidden animate-impact-flash">
          <img data-testid="manga-splash-art" src={hero.mangaSplashUrl} alt={`${hero.nameEn} finisher splash`} className="absolute inset-0 w-full h-full object-cover object-top" draggable={false} />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/85 via-transparent to-[#0F172A]/25 pointer-events-none" />

          <div className="absolute top-2 left-2 z-30">
            <ShoutBalloon stage={stage} compact onHearWord={onHearWord} />
          </div>

          <div className="absolute top-2 right-2 z-30 w-24 h-24 sm:w-32 sm:h-32 rotate-3 rounded-2xl bg-[#FFE4E6] border-[4px] border-[#0F172A] shadow-[4px_5px_0_#0F172A] p-1 flex flex-col items-center justify-center overflow-hidden">
            <StageSprite testId="battle-villain-sprite" pose="hit" src={villain.sprites.hit} alt={`${villain.nameEn} hit`} className="max-h-[78%] max-w-full object-contain animate-hit-shake" />
            <span className="font-display font-black text-[10px] text-[#EF4444] leading-none">HIT!</span>
          </div>

          <div className="absolute bottom-2 left-2 z-20 flex items-end gap-2 pointer-events-none">
            <div className="w-20 h-20 sm:w-28 sm:h-28 rounded-2xl bg-[#FEF08A] border-[3.5px] border-[#0F172A] shadow-[4px_4px_0_#0F172A] p-1 flex items-center justify-center">
              <StageSprite testId="battle-hero-sprite" pose="attack" src={hero.sprites.attack} alt={`${hero.nameEn} attack`} className="max-h-full max-w-full object-contain" />
            </div>
            <div className="flex flex-col items-start mb-1">
              <span className="font-display font-black text-2xl sm:text-4xl text-[#FACC15] leading-none drop-shadow-[3px_3px_0_#0F172A] -rotate-3">
                {hero.mangaSfxEn} {hero.mangaKatakana}
              </span>
              <span className="mt-1 px-3 py-1 rounded-xl bg-white border-[3px] border-[#0F172A] shadow-[3px_3px_0_#0F172A] font-display font-black text-xs sm:text-base text-[#0F172A]">
                {calloutText || hero.attackCalloutEn} {lastAccuracy > 0 ? `(${lastAccuracy}%)` : ''}
              </span>
            </div>
          </div>
        </div>
      )}

      {/* SHOT 4: OVER-THE-SHOULDER CLASH */}
      {shot === 'clash_shoulder' && (
        <div className="relative w-full h-full bg-[#1E1B4B] overflow-hidden comic-halftone">
          <div className="absolute inset-0">
            <StageSprite
              testId="battle-villain-sprite"
              pose={villainPose}
              src={villainPose === 'idle' ? villain.mangaMenaceUrl : villain.sprites[villainPose]}
              alt={`${villain.nameEn} confrontation`}
              className={`w-full h-full ${villainPose === 'idle' ? 'object-cover object-center opacity-90' : 'object-contain object-right pr-4 pb-8'} ${villainSpriteAnim}`}
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-[#0F172A]/85 via-transparent to-[#0F172A]/15 pointer-events-none" />
          </div>

          <div className="absolute top-2 left-2 z-30">
            <ShoutBalloon stage={stage} compact onHearWord={onHearWord} />
          </div>

          <div className="absolute -bottom-3 -left-2 sm:left-2 z-20 w-[62%] sm:w-[48%] h-[62%] flex items-end justify-start pointer-events-none">
            <div className="w-full h-full flex items-end justify-start" style={{ transform: 'scale(1.22)', transformOrigin: 'bottom left' }}>
              <StageSprite
                testId="battle-hero-sprite"
                pose={heroPose}
                src={hero.sprites[heroPose]}
                alt={`${hero.nameEn} ${heroPose}`}
                className={`max-h-full max-w-full object-contain object-bottom drop-shadow-[0_8px_0_rgba(15,23,42,0.75)] ${heroSpriteAnim}`}
              />
            </div>
          </div>

          <div className="absolute bottom-2 right-2 z-30 max-w-[54%] bg-[#FEF08A] rounded-2xl border-[3.5px] border-[#0F172A] shadow-[4px_4px_0_#0F172A] overflow-hidden">
            <img src={hero.mangaCutinUrl} alt="" aria-hidden="true" className="w-full h-9 sm:h-11 object-cover border-b-[2.5px] border-[#0F172A]" draggable={false} />
            <div className="px-2.5 py-1 font-display font-black text-[11px] sm:text-xs text-[#0F172A]">SPEAK LOUD &amp; CLEAR!</div>
          </div>
        </div>
      )}

      {/* SHOT 5: MANGA VICTORY ISSUE COVER */}
      {shot === 'victory_cover' && (
        <div className="relative w-full h-full bg-gradient-to-b from-[#FEF08A] via-[#FFFDF5] to-[#CFFAFE] overflow-hidden">
          <RadialSpeedLines color="#FACC15" strength={55} />
          <img src={hero.mangaSplashUrl} alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover object-top opacity-25" draggable={false} />

          <div className="relative z-20 bg-[#0F172A] text-[#FACC15] px-3 py-1 flex items-center justify-between border-b-[3.5px] border-[#0F172A]">
            <span className="font-display font-black text-xs sm:text-sm tracking-wider">MANGA ISSUE #W{stage.worldId}-{stage.stageNumber}</span>
            <span className="font-mono font-bold text-xs text-[#22D3EE]">COMBO x{Math.max(1, combo)}</span>
          </div>

          <div className="relative z-20 h-[72%] flex items-end justify-center pt-2 pointer-events-none">
            <StageSprite
              testId="battle-hero-sprite"
              pose="victory"
              src={hero.sprites.victory}
              alt={`${hero.nameEn} victory`}
              className="max-h-full max-w-[78%] object-contain object-bottom drop-shadow-[0_10px_0_rgba(15,23,42,0.38)] animate-sprite-victory"
            />
          </div>

          <div className="absolute top-11 left-3 z-30 px-3 py-1 rounded-xl bg-white/95 border-[4px] border-[#EF4444] shadow-[4px_4px_0_#0F172A] -rotate-6 animate-manga-stamp">
            <div className="font-display font-black text-base sm:text-xl text-[#EF4444] leading-none">CLEAR!</div>
            <div className="mt-0.5 flex items-center gap-0.5">
              <StarIcon className="w-3.5 h-3.5" />
              <StarIcon className="w-3.5 h-3.5" />
              <StarIcon className="w-3.5 h-3.5" />
            </div>
          </div>

          <div className="absolute top-11 right-2 z-20 w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-white/95 border-[3px] border-[#0F172A] shadow-[3px_3px_0_#0F172A] p-1 flex flex-col items-center justify-center">
            <StageSprite testId="battle-villain-sprite" pose="hit" src={villain.sprites.hit} alt={`${villain.nameEn} KO`} className="max-h-[75%] max-w-full object-contain" />
            <span className="font-mono font-black text-[10px] text-[#0F172A]">K.O.!</span>
          </div>

          <div className="absolute bottom-2 inset-x-0 z-30 flex justify-center">
            <button
              type="button"
              data-testid="btn-stage-next-cover"
              onClick={onNextBattle}
              className="px-5 py-2 rounded-2xl bg-[#A3E635] hover:bg-[#BEF264] border-[3.5px] border-[#0F172A] shadow-[4px_5px_0_#0F172A] active:translate-y-[2px] font-display font-black text-sm sm:text-base text-[#0F172A] cursor-pointer"
            >
              NEXT CHAPTER ➔
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
