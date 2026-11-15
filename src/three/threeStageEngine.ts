import * as THREE from 'three';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';
import { ArticulatedRig3D, RigBuildConfig } from './types3D';
import { buildHesman3D } from './heroes/buildHesman3D';
import { buildAnpanman3D, buildSpiderMan3D } from './heroes/buildComicHeroes3D';
import { buildPikachu3D, buildUltramanZero3D } from './heroes/buildCosmicAndPetHeroes3D';
import {
  buildAlienBaltan3D,
  buildGalraBoss3D,
  buildGoblinGlider3D,
  buildRobeastMech3D,
} from './rivals/buildRivalsMecha3D';
import {
  buildBaikinUfo3D,
  buildDocOck3D,
  buildDokinUfo3D,
  buildMeowthBalloon3D,
} from './rivals/buildRivalsComic3D';

export interface LivePoseState extends RigBuildConfig {
  pose: 'idle' | 'move' | 'attack' | 'hit' | 'victory';
  facing: 'right' | 'left';
  isSpeaking: boolean;
  orbitYaw: number;
}

interface LiveInstance {
  canvas: HTMLCanvasElement;
  ctx2d: CanvasRenderingContext2D;
  rig: ArticulatedRig3D;
  state: LivePoseState;
  configKey: string;
}

interface EngineSingleton {
  renderer: THREE.WebGLRenderer;
  scene: THREE.Scene;
  camera: THREE.PerspectiveCamera;
  shadowDisc: THREE.Mesh;
  energyRing: THREE.Mesh;
}

const RENDER_SIZE = 512;
const SNAPSHOT_SIZE = 256;

let engineSingleton: EngineSingleton | null | false = null;
const snapshotCache = new Map<string, string>();
const liveInstances = new Set<LiveInstance>();
let rafId: number | null = null;

function configKeyOf(c: RigBuildConfig): string {
  return `${c.template}|${c.primaryColor}|${c.secondaryColor}|${c.accentColor}`;
}

export function createCharacterRig3D(config: RigBuildConfig): ArticulatedRig3D {
  let rig: ArticulatedRig3D;
  switch (config.template) {
    case 'mecha_lion':
      rig = buildHesman3D(config);
      break;
    case 'bread_hero':
      rig = buildAnpanman3D(config);
      rig.root.scale.setScalar(1.14);
      break;
    case 'spider_hero':
      rig = buildSpiderMan3D(config);
      rig.root.scale.setScalar(1.08);
      break;
    case 'cosmic_ultra':
      rig = buildUltramanZero3D(config);
      rig.root.scale.setScalar(1.06);
      break;
    case 'thunder_pet':
      rig = buildPikachu3D(config);
      rig.root.scale.setScalar(1.3);
      break;
    case 'galra_boss':
      rig = buildGalraBoss3D(config);
      rig.root.scale.setScalar(1.06);
      break;
    case 'robeast_mech':
      rig = buildRobeastMech3D(config);
      rig.root.scale.setScalar(1.06);
      break;
    case 'germ_ufo':
      rig = buildBaikinUfo3D(config);
      rig.root.scale.setScalar(1.35);
      break;
    case 'dokin_ufo':
      rig = buildDokinUfo3D(config);
      rig.root.scale.setScalar(1.35);
      break;
    case 'goblin_glider':
      rig = buildGoblinGlider3D(config);
      rig.root.scale.setScalar(1.1);
      break;
    case 'octo_mech':
      rig = buildDocOck3D(config);
      rig.root.scale.setScalar(1.08);
      break;
    case 'alien_baltan':
      rig = buildAlienBaltan3D(config);
      rig.root.scale.setScalar(1.08);
      break;
    case 'meowth_balloon':
      rig = buildMeowthBalloon3D(config);
      rig.root.scale.setScalar(1.32);
      break;
    default:
      rig = buildHesman3D(config);
  }
  return rig;
}

function getShadowTexture(): THREE.CanvasTexture {
  const c = document.createElement('canvas');
  c.width = 128;
  c.height = 128;
  const ctx = c.getContext('2d')!;
  const grad = ctx.createRadialGradient(64, 64, 8, 64, 64, 60);
  grad.addColorStop(0, 'rgba(15, 23, 42, 0.42)');
  grad.addColorStop(1, 'rgba(15, 23, 42, 0)');
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, 128, 128);
  return new THREE.CanvasTexture(c);
}

function getEngine(): EngineSingleton | null {
  if (engineSingleton === false) return null;
  if (engineSingleton) return engineSingleton;

  try {
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      preserveDrawingBuffer: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(RENDER_SIZE, RENDER_SIZE, false);
    renderer.setClearColor(0x000000, 0);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;

    const scene = new THREE.Scene();
    const pmrem = new THREE.PMREMGenerator(renderer);
    const envTex = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
    scene.environment = envTex;
    scene.environmentIntensity = 0.72;
    pmrem.dispose();

    const hemi = new THREE.HemisphereLight(0xffffff, 0x334155, 1.15);
    const keyLight = new THREE.DirectionalLight(0xfffbeb, 1.9);
    keyLight.position.set(3.4, 5.8, 5.2);
    const fillLight = new THREE.DirectionalLight(0x93c5fd, 0.85);
    fillLight.position.set(-4.2, 3.0, 3.2);
    const rimLight = new THREE.DirectionalLight(0xfde047, 1.05);
    rimLight.position.set(0, 3.8, -5.0);
    scene.add(hemi, keyLight, fillLight, rimLight);

    const camera = new THREE.PerspectiveCamera(36, 1, 0.1, 40);
    camera.position.set(0, 1.38, 4.48);
    camera.lookAt(0, 1.18, 0);

    const shadowDisc = new THREE.Mesh(
      new THREE.CircleGeometry(0.82, 24),
      new THREE.MeshBasicMaterial({ map: getShadowTexture(), transparent: true, depthWrite: false })
    );
    shadowDisc.rotation.x = -Math.PI / 2;
    shadowDisc.position.y = 0.01;
    scene.add(shadowDisc);

    const energyRing = new THREE.Mesh(
      new THREE.TorusGeometry(0.95, 0.035, 10, 40),
      new THREE.MeshBasicMaterial({ color: '#FACC15', transparent: true, opacity: 0.75 })
    );
    energyRing.rotation.x = Math.PI / 2;
    energyRing.position.y = 0.06;
    energyRing.visible = false;
    scene.add(energyRing);

    engineSingleton = { renderer, scene, camera, shadowDisc, energyRing };
    return engineSingleton;
  } catch {
    engineSingleton = false;
    return null;
  }
}

export function updateRigPose3D(rig: ArticulatedRig3D, state: LivePoseState, elapsed: number): void {
  const baseYaw = state.facing === 'left' ? -0.34 : 0.34;
  rig.root.rotation.y = baseYaw + state.orbitYaw + Math.sin(elapsed * 1.45) * 0.055;
  rig.root.rotation.z = 0;

  const isHover = rig.baseY > 0.05;
  const hoverAmp = isHover ? 0.08 : 0.025;
  const speed = state.pose === 'move' ? 8.5 : 2.3;
  const bob = Math.sin(elapsed * speed) * hoverAmp;

  if (rig.pelvis.userData.restY === undefined) {
    rig.pelvis.userData.restY = rig.pelvis.position.y;
  }
  const restPelvisY = rig.pelvis.userData.restY as number;
  rig.pelvis.position.y = restPelvisY + bob;

  // Reset rotational joints
  rig.torso.rotation.set(0, 0, 0);
  rig.head.rotation.set(0, 0, 0);
  if (rig.leftArm) rig.leftArm.rotation.set(0, 0, 0.08);
  if (rig.rightArm) rig.rightArm.rotation.set(0, 0, -0.08);
  if (rig.leftForearm) rig.leftForearm.rotation.set(0, 0, 0);
  if (rig.rightForearm) rig.rightForearm.rotation.set(0, 0, 0);
  if (rig.leftLeg) rig.leftLeg.rotation.set(0, 0, 0);
  if (rig.rightLeg) rig.rightLeg.rotation.set(0, 0, 0);
  if (rig.wings) rig.wings.scale.setScalar(1);

  if (state.pose === 'idle') {
    if (rig.rightArm) rig.rightArm.rotation.x = Math.sin(elapsed * 2) * 0.05 - 0.12;
    if (rig.leftArm) rig.leftArm.rotation.x = -Math.sin(elapsed * 2) * 0.05 + 0.06;
  } else if (state.pose === 'move') {
    const swing = Math.sin(elapsed * 9) * 0.48;
    rig.torso.rotation.x = 0.12;
    if (rig.leftLeg) rig.leftLeg.rotation.x = swing;
    if (rig.rightLeg) rig.rightLeg.rotation.x = -swing;
    if (rig.leftArm) rig.leftArm.rotation.x = -swing * 0.7;
    if (rig.rightArm) rig.rightArm.rotation.x = swing * 0.7;
  } else if (state.pose === 'attack') {
    rig.torso.rotation.y = 0.22;
    rig.torso.rotation.x = 0.08;
    if (rig.rightArm) {
      rig.rightArm.rotation.x = -0.92 + Math.sin(elapsed * 14) * 0.22;
      rig.rightArm.rotation.z = -0.46;
    }
    if (rig.leftArm) rig.leftArm.rotation.x = 0.35;
    if (rig.wings) rig.wings.scale.setScalar(1.06 + Math.sin(elapsed * 10) * 0.03);
  } else if (state.pose === 'hit') {
    rig.torso.rotation.x = -0.26;
    rig.root.rotation.z = Math.sin(elapsed * 32) * 0.1;
  } else if (state.pose === 'victory') {
    rig.pelvis.position.y += Math.abs(Math.sin(elapsed * 5.2)) * 0.2;
    if (rig.rightArm) rig.rightArm.rotation.z = -2.35;
    if (rig.leftArm) rig.leftArm.rotation.z = 2.35;
  }

  // Toggle burst ray/web projectiles cleanly
  if (rig.weapon && (state.template === 'spider_hero' || state.template === 'cosmic_ultra')) {
    rig.weapon.visible = state.pose === 'attack';
  }

  // Mouth & head animation when speaking
  if (rig.mouth) {
    const sy = state.isSpeaking ? 0.95 + Math.abs(Math.sin(elapsed * 16)) * 1.45 : 0.35;
    rig.mouth.scale.y = sy;
  }
  if (state.isSpeaking) {
    rig.head.rotation.x = Math.sin(elapsed * 10) * 0.07;
  }
}

function renderOneEntry(engine: EngineSingleton, entry: LiveInstance, elapsed: number): void {
  updateRigPose3D(entry.rig, entry.state, elapsed);
  const ringMat = engine.energyRing.material as THREE.MeshBasicMaterial;
  if (entry.state.pose === 'attack' || entry.state.pose === 'victory') {
    engine.energyRing.visible = true;
    ringMat.color.set(entry.state.accentColor || '#FACC15');
    engine.energyRing.scale.setScalar(1 + Math.sin(elapsed * 8) * 0.08);
  } else {
    engine.energyRing.visible = false;
  }

  engine.scene.add(entry.rig.root);
  engine.renderer.render(engine.scene, engine.camera);
  engine.scene.remove(entry.rig.root);

  entry.ctx2d.clearRect(0, 0, RENDER_SIZE, RENDER_SIZE);
  entry.ctx2d.drawImage(
    engine.renderer.domElement,
    0,
    0,
    RENDER_SIZE,
    RENDER_SIZE,
    0,
    0,
    RENDER_SIZE,
    RENDER_SIZE
  );
}

function startSharedLoop(): void {
  if (rafId !== null) return;
  const tick = (nowMs: number) => {
    if (liveInstances.size === 0) {
      rafId = null;
      return;
    }
    const engine = getEngine();
    if (!engine) {
      rafId = null;
      return;
    }
    const elapsed = nowMs * 0.001;
    liveInstances.forEach((entry) => renderOneEntry(engine, entry, elapsed));
    rafId = requestAnimationFrame(tick);
  };
  rafId = requestAnimationFrame(tick);
}

export function registerLive3DInstance(
  canvas: HTMLCanvasElement,
  initial: LivePoseState
): {
  updateState: (next: LivePoseState) => void;
  unregister: () => void;
} {
  const ctx2d = canvas.getContext('2d');
  if (!ctx2d) {
    return { updateState: () => {}, unregister: () => {} };
  }

  const entry: LiveInstance = {
    canvas,
    ctx2d,
    rig: createCharacterRig3D(initial),
    state: initial,
    configKey: configKeyOf(initial),
  };

  liveInstances.add(entry);
  const engine = getEngine();
  if (engine) renderOneEntry(engine, entry, performance.now() * 0.001);
  startSharedLoop();

  return {
    updateState: (next) => {
      const nextKey = configKeyOf(next);
      if (nextKey !== entry.configKey) {
        entry.configKey = nextKey;
        entry.rig = createCharacterRig3D(next);
      }
      entry.state = next;
    },
    unregister: () => {
      liveInstances.delete(entry);
    },
  };
}

export function getCharacter3DSnapshot(
  config: RigBuildConfig,
  facing: 'right' | 'left' = 'right'
): string {
  const key = `${configKeyOf(config)}|${facing}`;
  const existing = snapshotCache.get(key);
  if (existing) return existing;

  const engine = getEngine();
  if (!engine) return '';

  const rig = createCharacterRig3D(config);
  updateRigPose3D(
    rig,
    { ...config, pose: 'idle', facing, isSpeaking: false, orbitYaw: 0 },
    0.4
  );
  engine.energyRing.visible = false;
  engine.scene.add(rig.root);
  engine.renderer.render(engine.scene, engine.camera);
  engine.scene.remove(rig.root);

  const outCanvas = document.createElement('canvas');
  outCanvas.width = SNAPSHOT_SIZE;
  outCanvas.height = SNAPSHOT_SIZE;
  const ctx = outCanvas.getContext('2d');
  if (!ctx) return '';
  ctx.drawImage(
    engine.renderer.domElement,
    0,
    0,
    RENDER_SIZE,
    RENDER_SIZE,
    0,
    0,
    SNAPSHOT_SIZE,
    SNAPSHOT_SIZE
  );
  const url = outCanvas.toDataURL('image/png');
  snapshotCache.set(key, url);
  return url;
}
