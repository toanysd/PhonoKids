import React, { useEffect, useRef } from 'react';
import { CombatMode, TargetHuntRound } from '../types/heroGame';
import { audioService } from '../services/audioService';

interface UseArenaMovementOptions {
  mode: CombatMode;
  isAttacking: boolean;
  isOverlayPaused: boolean;
  currentHunt?: TargetHuntRound;
  targetSlots: Array<{ x: number; y: number }>;
  targetSpeechEn: string;
  heroPosRef: React.MutableRefObject<{ x: number; y: number }>;
  waypointRef: React.MutableRefObject<{ x: number; y: number } | null>;
  dpadVelRef: React.MutableRefObject<{ dx: number; dy: number }>;
  setHeroPos: React.Dispatch<React.SetStateAction<{ x: number; y: number }>>;
  setHeroPose: React.Dispatch<React.SetStateAction<'idle' | 'move' | 'attack' | 'victory'>>;
  setManualFeedback: React.Dispatch<React.SetStateAction<string>>;
  triggerManualListen: () => void;
  replayModelAndListen: () => void;
}

export function useArenaMovement({
  mode,
  isAttacking,
  isOverlayPaused,
  currentHunt,
  targetSlots,
  targetSpeechEn,
  heroPosRef,
  waypointRef,
  dpadVelRef,
  setHeroPos,
  setHeroPose,
  setManualFeedback,
  triggerManualListen,
  replayModelAndListen,
}: UseArenaMovementOptions) {
  const keyVelRef = useRef({ dx: 0, dy: 0 });
  const wrongCooldownRef = useRef<number>(0);
  const manualEngageCooldownRef = useRef<number>(0);

  // Keyboard bindings: Arrow/WASD movement + Space (Mic) + R (Replay)
  useEffect(() => {
    const keys = new Set<string>();
    const recompute = () => {
      let dx = 0;
      let dy = 0;
      if (keys.has('ArrowLeft') || keys.has('KeyA')) dx -= 1;
      if (keys.has('ArrowRight') || keys.has('KeyD')) dx += 1;
      if (keys.has('ArrowUp') || keys.has('KeyW')) dy -= 1;
      if (keys.has('ArrowDown') || keys.has('KeyS')) dy += 1;
      keyVelRef.current = { dx, dy };
      if (dx !== 0 || dy !== 0) waypointRef.current = null;
    };

    const onDown = (e: KeyboardEvent) => {
      if (isOverlayPaused || mode === 'victory') return;
      if (e.code === 'Space') {
        e.preventDefault();
        triggerManualListen();
        return;
      }
      if (e.code === 'KeyR') {
        e.preventDefault();
        replayModelAndListen();
        return;
      }
      if (['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', 'KeyW', 'KeyA', 'KeyS', 'KeyD'].includes(e.code)) {
        keys.add(e.code);
        recompute();
      }
    };
    const onUp = (e: KeyboardEvent) => {
      keys.delete(e.code);
      recompute();
    };
    window.addEventListener('keydown', onDown);
    window.addEventListener('keyup', onUp);
    return () => {
      window.removeEventListener('keydown', onDown);
      window.removeEventListener('keyup', onUp);
    };
  }, [isOverlayPaused, mode, triggerManualListen, replayModelAndListen, waypointRef]);

  // Smooth 60fps parallel movement loop (optional, never blocks voice)
  useEffect(() => {
    if (mode === 'victory' || isAttacking || isOverlayPaused) return;
    let raf: number;
    let last = performance.now();

    const step = (now: number) => {
      const dt = Math.min(0.05, (now - last) / 1000);
      last = now;

      let vx = keyVelRef.current.dx + dpadVelRef.current.dx;
      let vy = keyVelRef.current.dy + dpadVelRef.current.dy;

      if (vx === 0 && vy === 0 && waypointRef.current) {
        const dx = waypointRef.current.x - heroPosRef.current.x;
        const dy = waypointRef.current.y - heroPosRef.current.y;
        const dist = Math.hypot(dx, dy);
        if (dist < 2.2) {
          waypointRef.current = null;
        } else {
          vx = dx / dist;
          vy = dy / dist;
        }
      }

      if (vx !== 0 || vy !== 0) {
        const len = Math.hypot(vx, vy) || 1;
        const speed = 38;
        const nx = Math.max(10, Math.min(88, heroPosRef.current.x + (vx / len) * speed * dt));
        const ny = Math.max(18, Math.min(84, heroPosRef.current.y + (vy / len) * speed * dt));
        heroPosRef.current = { x: nx, y: ny };
        setHeroPos({ x: nx, y: ny });
        setHeroPose((p) => (p === 'attack' ? p : 'move'));
      } else {
        setHeroPose((p) => (p === 'move' ? 'idle' : p));
      }

      if (mode === 'target_hunt' && currentHunt) {
        currentHunt.options.forEach((opt, idx) => {
          const slot = targetSlots[idx % targetSlots.length];
          const dist = Math.hypot(heroPosRef.current.x - slot.x, heroPosRef.current.y - slot.y);
          if (dist < 13.5) {
            if (opt.isCorrect && now - manualEngageCooldownRef.current > 2200) {
              manualEngageCooldownRef.current = now;
              waypointRef.current = null;
              audioService.playPopSound(620);
              audioService.speakEnglish(opt.speakTextEn, 0.92);
              triggerManualListen();
            } else if (!opt.isCorrect && now - wrongCooldownRef.current > 1600) {
              wrongCooldownRef.current = now;
              waypointRef.current = null;
              heroPosRef.current = {
                x: Math.max(12, heroPosRef.current.x - 10),
                y: Math.min(82, heroPosRef.current.y + 8),
              };
              setHeroPos({ ...heroPosRef.current });
              audioService.playGentleTryAgain();
              audioService.speakEnglish(opt.speakTextEn, 0.95);
              setManualFeedback(
                `Đó là "${opt.labelEn}" (${opt.subLabelVi})! Bé thử gọi "${targetSpeechEn}" nhé!`
              );
            }
          }
        });
      }

      raf = requestAnimationFrame(step);
    };

    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [
    mode,
    isAttacking,
    isOverlayPaused,
    currentHunt,
    targetSlots,
    targetSpeechEn,
    heroPosRef,
    waypointRef,
    dpadVelRef,
    setHeroPos,
    setHeroPose,
    setManualFeedback,
    triggerManualListen,
  ]);
}
