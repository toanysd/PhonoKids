import React, { useEffect, useMemo, useRef, useState } from 'react';
import { HeroTemplateType } from '../../types/heroGame';
import {
  getCharacter3DSnapshot,
  LivePoseState,
  registerLive3DInstance,
} from '../../three/threeStageEngine';
import {
  CHARACTER_SPRITE_MANIFEST,
  computeCustomColorFilter,
  getCharacterPoseUrls,
  resolveCharacterSpriteUrl,
} from '../../data/characterSpriteManifest';

export interface CharacterRigSvgProps {
  template: HeroTemplateType;
  primaryColor: string;
  secondaryColor: string;
  accentColor: string;
  pose?: 'idle' | 'move' | 'attack' | 'hit' | 'victory';
  facing?: 'right' | 'left';
  isSpeaking?: boolean;
  customAvatarUrl?: string;
  privacyBlur?: boolean;
  live?: boolean;
  interactiveOrbit?: boolean;
  renderMode?: '2d_ai' | '3d_webgl';
  className?: string;
}

const POSE_ANIM_CLASS: Record<NonNullable<CharacterRigSvgProps['pose']>, string> = {
  idle: 'animate-sprite-idle',
  move: 'animate-sprite-move',
  attack: 'animate-sprite-attack',
  hit: 'animate-hit-shake',
  victory: 'animate-sprite-victory',
};

export const CharacterRigSvg: React.FC<CharacterRigSvgProps> = ({
  template,
  primaryColor,
  secondaryColor,
  accentColor,
  pose = 'idle',
  facing = 'right',
  isSpeaking = false,
  customAvatarUrl,
  privacyBlur = false,
  live = true,
  interactiveOrbit = false,
  renderMode = '2d_ai',
  className = 'w-28 h-28',
}) => {
  const is2dMode = renderMode === '2d_ai';
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const controllerRef = useRef<ReturnType<typeof registerLive3DInstance> | null>(null);
  const orbitYawRef = useRef<number>(0);
  const dragStateRef = useRef<{ active: boolean; lastX: number; lastY: number; totalDist: number }>({
    active: false,
    lastX: 0,
    lastY: 0,
    totalDist: 0,
  });
  const [tilt25D, setTilt25D] = useState<{ rx: number; ry: number }>({ rx: 0, ry: 0 });

  // Preload all 5 pose sprites so idle/speaking/attack/hit/victory swap instantaneously
  useEffect(() => {
    if (!is2dMode || typeof window === 'undefined') return;
    getCharacterPoseUrls(template).forEach((url) => {
      const img = new Image();
      img.src = url;
    });
  }, [is2dMode, template]);

  const liveState: LivePoseState = useMemo(
    () => ({
      template,
      primaryColor,
      secondaryColor,
      accentColor,
      pose,
      facing,
      isSpeaking,
      orbitYaw: orbitYawRef.current,
    }),
    [template, primaryColor, secondaryColor, accentColor, pose, facing, isSpeaking]
  );

  // Register live 3D shared WebGL loop only when explicitly in 3d_webgl mode
  useEffect(() => {
    if (is2dMode || !live || !canvasRef.current) return;
    const ctrl = registerLive3DInstance(canvasRef.current, {
      ...liveState,
      orbitYaw: orbitYawRef.current,
    });
    controllerRef.current = ctrl;
    return () => {
      ctrl.unregister();
      controllerRef.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [is2dMode, live]);

  useEffect(() => {
    if (is2dMode || !live || !controllerRef.current) return;
    controllerRef.current.updateState({
      ...liveState,
      orbitYaw: orbitYawRef.current,
    });
  }, [is2dMode, live, liveState]);

  const snapshotUrl = useMemo(() => {
    if (is2dMode || live) return '';
    return getCharacter3DSnapshot({ template, primaryColor, secondaryColor, accentColor }, facing);
  }, [is2dMode, live, template, primaryColor, secondaryColor, accentColor, facing]);

  const spriteProfile = CHARACTER_SPRITE_MANIFEST[template] || CHARACTER_SPRITE_MANIFEST.mecha_lion;
  const spriteUrl = resolveCharacterSpriteUrl(template, pose, isSpeaking);
  const shouldFlipX = !spriteProfile.lockHorizontalSymmetry && facing !== spriteProfile.nativeFacing;
  const customHueFilter = computeCustomColorFilter(template, primaryColor);
  const spriteAnimClass = isSpeaking && pose === 'idle' ? 'animate-sprite-speak' : POSE_ANIM_CLASS[pose];

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!interactiveOrbit || !live) return;
    e.currentTarget.setPointerCapture(e.pointerId);
    dragStateRef.current = { active: true, lastX: e.clientX, lastY: e.clientY, totalDist: 0 };
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!interactiveOrbit || !live || !dragStateRef.current.active) return;
    const dx = e.clientX - dragStateRef.current.lastX;
    const dy = e.clientY - dragStateRef.current.lastY;
    dragStateRef.current.lastX = e.clientX;
    dragStateRef.current.lastY = e.clientY;
    dragStateRef.current.totalDist += Math.hypot(dx, dy);

    if (is2dMode) {
      setTilt25D((prev) => ({
        rx: Math.max(-14, Math.min(14, prev.rx - dy * 0.25)),
        ry: Math.max(-18, Math.min(18, prev.ry + dx * 0.35)),
      }));
    } else {
      orbitYawRef.current += dx * 0.015;
      controllerRef.current?.updateState({ ...liveState, orbitYaw: orbitYawRef.current });
    }
  };

  const handlePointerUp = () => {
    dragStateRef.current.active = false;
    if (is2dMode) {
      setTilt25D({ rx: 0, ry: 0 });
    }
  };

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (dragStateRef.current.totalDist > 6) {
      e.stopPropagation();
      dragStateRef.current.totalDist = 0;
    }
  };

  return (
    <div
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
      onClick={handleClick}
      className={`relative inline-flex items-center justify-center select-none ${
        interactiveOrbit && live ? 'cursor-grab active:cursor-grabbing' : ''
      } ${className}`}
      style={
        interactiveOrbit && live
          ? { touchAction: 'none', perspective: is2dMode ? '520px' : undefined }
          : undefined
      }
      title={interactiveOrbit && live ? 'Kéo nhẹ để nghiêng nhân vật 2.5D' : undefined}
    >
      {is2dMode ? (
        <div
          className="relative w-full h-full flex items-center justify-center transition-transform duration-200 ease-out pointer-events-none"
          style={
            interactiveOrbit && (tilt25D.rx !== 0 || tilt25D.ry !== 0)
              ? { transform: `rotateX(${tilt25D.rx}deg) rotateY(${tilt25D.ry}deg) scale(1.04)` }
              : undefined
          }
        >
          {/* Soft stage ground shadow ellipse */}
          <div className="absolute bottom-[5%] left-1/2 -translate-x-1/2 w-[66%] h-[11%] rounded-full bg-slate-950/30 blur-[3px]" />

          {/* Voice speaking aura pulse */}
          {isSpeaking && (
            <div
              className="absolute inset-[10%] rounded-full opacity-35 animate-pulse blur-md"
              style={{ backgroundColor: accentColor }}
            />
          )}

          <div
            className={`relative w-full h-full flex items-center justify-center ${
              live ? spriteAnimClass : ''
            }`}
          >
            <img
              src={spriteUrl}
              alt={`Nhân vật ${template}`}
              className="w-full h-full object-contain select-none"
              style={{
                transform: shouldFlipX ? 'scaleX(-1)' : undefined,
                filter: `${customHueFilter ? `${customHueFilter} ` : ''}drop-shadow(0 6px 10px rgba(15, 23, 42, 0.28))`,
              }}
              draggable={false}
            />
          </div>
        </div>
      ) : live ? (
        <canvas
          ref={canvasRef}
          width={512}
          height={512}
          className="w-full h-full block pointer-events-none"
          aria-label={`Mô hình 3D ${template}`}
        />
      ) : snapshotUrl ? (
        <img
          src={snapshotUrl}
          alt={`Mô hình 3D ${template}`}
          className="w-full h-full object-contain pointer-events-none"
          draggable={false}
        />
      ) : (
        <div className="w-full h-full rounded-full bg-slate-200/60 border-2 border-amber-300 flex items-center justify-center text-xs font-bold text-slate-600">
          2D
        </div>
      )}

      {/* Optional Custom Avatar Medallion Badge (respects Default Blur Rule #3) */}
      {customAvatarUrl && (
        <div
          className="absolute bottom-1 right-1 w-8 h-8 rounded-full overflow-hidden border-2 shadow-md bg-white"
          style={{ borderColor: accentColor }}
        >
          <img
            src={customAvatarUrl}
            alt="Ảnh nhân vật tùy chỉnh"
            className={`w-full h-full object-cover ${privacyBlur ? 'blur-sm hover:blur-none transition-all' : ''}`}
          />
        </div>
      )}
    </div>
  );
};
