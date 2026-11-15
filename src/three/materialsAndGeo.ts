import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/examples/jsm/geometries/RoundedBoxGeometry.js';

const materialCache = new Map<string, THREE.Material>();

export function rBox(w: number, h: number, d: number, r = 0.026): RoundedBoxGeometry {
  const safeR = Math.min(r, w * 0.35, h * 0.35, d * 0.35);
  return new RoundedBoxGeometry(w, h, d, 3, safeR);
}
const spiderTexCache = new Map<string, THREE.CanvasTexture>();

export function armorMat(color: string): THREE.MeshPhysicalMaterial {
  const key = `armor:${color}`;
  let m = materialCache.get(key) as THREE.MeshPhysicalMaterial | undefined;
  if (!m) {
    m = new THREE.MeshPhysicalMaterial({
      color,
      metalness: 0.36,
      roughness: 0.25,
      clearcoat: 0.65,
      clearcoatRoughness: 0.18,
    });
    materialCache.set(key, m);
  }
  return m;
}

export function chromeMat(color = '#F1F5F9'): THREE.MeshPhysicalMaterial {
  const key = `chrome:${color}`;
  let m = materialCache.get(key) as THREE.MeshPhysicalMaterial | undefined;
  if (!m) {
    m = new THREE.MeshPhysicalMaterial({
      color,
      metalness: 0.84,
      roughness: 0.16,
      clearcoat: 0.55,
      clearcoatRoughness: 0.12,
    });
    materialCache.set(key, m);
  }
  return m;
}

export function satinMat(color: string): THREE.MeshPhysicalMaterial {
  const key = `satin:${color}`;
  let m = materialCache.get(key) as THREE.MeshPhysicalMaterial | undefined;
  if (!m) {
    m = new THREE.MeshPhysicalMaterial({
      color,
      metalness: 0.06,
      roughness: 0.44,
      clearcoat: 0.15,
    });
    materialCache.set(key, m);
  }
  return m;
}

export function glossyCandyMat(color: string): THREE.MeshPhysicalMaterial {
  const key = `candy:${color}`;
  let m = materialCache.get(key) as THREE.MeshPhysicalMaterial | undefined;
  if (!m) {
    m = new THREE.MeshPhysicalMaterial({
      color,
      metalness: 0.04,
      roughness: 0.1,
      clearcoat: 1.0,
      clearcoatRoughness: 0.08,
    });
    materialCache.set(key, m);
  }
  return m;
}

export function glowMat(color: string, intensity = 1.65): THREE.MeshStandardMaterial {
  const key = `glow:${color}:${intensity}`;
  let m = materialCache.get(key) as THREE.MeshStandardMaterial | undefined;
  if (!m) {
    m = new THREE.MeshStandardMaterial({
      color,
      emissive: new THREE.Color(color),
      emissiveIntensity: intensity,
      roughness: 0.2,
      metalness: 0.1,
    });
    materialCache.set(key, m);
  }
  return m;
}

export function glassMat(color = '#BAE6FD', opacity = 0.4): THREE.MeshPhysicalMaterial {
  const key = `glass:${color}:${opacity}`;
  let m = materialCache.get(key) as THREE.MeshPhysicalMaterial | undefined;
  if (!m) {
    m = new THREE.MeshPhysicalMaterial({
      color,
      transparent: true,
      opacity,
      roughness: 0.08,
      metalness: 0.08,
      clearcoat: 1.0,
      depthWrite: false,
    });
    materialCache.set(key, m);
  }
  return m;
}

export function getSpiderWebTexture(bgHex: string): THREE.CanvasTexture {
  const cached = spiderTexCache.get(bgHex);
  if (cached) return cached;

  const canvas = document.createElement('canvas');
  canvas.width = 512;
  canvas.height = 512;
  const ctx = canvas.getContext('2d')!;
  ctx.fillStyle = bgHex;
  ctx.fillRect(0, 0, 512, 512);

  ctx.strokeStyle = 'rgba(15, 23, 42, 0.85)';
  ctx.lineWidth = 4;

  // Vertical & horizontal seam lines + scalloped webbing arcs
  const cols = 12;
  const rows = 10;
  for (let i = 0; i <= cols; i++) {
    const x = (i / cols) * 512;
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, 512);
    ctx.stroke();
  }
  for (let j = 0; j < rows; j++) {
    const y = ((j + 0.5) / rows) * 512;
    for (let i = 0; i < cols; i++) {
      const x1 = (i / cols) * 512;
      const x2 = ((i + 1) / cols) * 512;
      ctx.beginPath();
      ctx.moveTo(x1, y);
      ctx.quadraticCurveTo((x1 + x2) / 2, y + 10, x2, y);
      ctx.stroke();
    }
  }

  const tex = new THREE.CanvasTexture(canvas);
  tex.wrapS = THREE.RepeatWrapping;
  tex.wrapT = THREE.RepeatWrapping;
  tex.colorSpace = THREE.SRGBColorSpace;
  spiderTexCache.set(bgHex, tex);
  return tex;
}

export function buildExtrudedPolygon(
  points: [number, number][],
  depth: number,
  bevelSize = 0.015,
  material: THREE.Material
): THREE.Mesh {
  const vecs = points.map(([x, y]) => new THREE.Vector2(x, y));
  if (THREE.ShapeUtils.isClockWise(vecs)) {
    vecs.reverse();
  }
  const shape = new THREE.Shape(vecs);

  const geo = new THREE.ExtrudeGeometry(shape, {
    depth,
    bevelEnabled: bevelSize > 0,
    bevelThickness: bevelSize,
    bevelSize,
    bevelSegments: 2,
  });
  geo.translate(0, 0, -depth / 2);
  return new THREE.Mesh(geo, material);
}

export function buildFivePointStar3D(
  outerR: number,
  innerR: number,
  depth: number,
  color: string
): THREE.Mesh {
  const pts: [number, number][] = [];
  for (let i = 0; i < 10; i++) {
    const angle = (i * Math.PI) / 5 + Math.PI / 2;
    const r = i % 2 === 0 ? outerR : innerR;
    pts.push([Math.cos(angle) * r, Math.sin(angle) * r]);
  }
  return buildExtrudedPolygon(pts, depth, 0.005, armorMat(color));
}

export function buildLionHead3D(
  maneColor: string,
  eyeColor = '#FACC15',
  scale = 1
): THREE.Group {
  const lion = new THREE.Group();
  const maneM = armorMat(maneColor);
  const silverM = chromeMat('#F8FAFC');
  const darkM = armorMat('#0F172A');
  const eyeM = glowMat(eyeColor, 1.4);
  const fangM = satinMat('#FFFFFF');

  // Cranium armor block + side cheek manes
  const cranium = new THREE.Mesh(rBox(0.32, 0.25, 0.28), maneM);
  cranium.position.set(0, 0.03, -0.02);
  lion.add(cranium);

  const browRidge = new THREE.Mesh(rBox(0.34, 0.07, 0.14, 0.018), maneM);
  browRidge.position.set(0, 0.12, 0.1);
  browRidge.rotation.x = 0.18;
  lion.add(browRidge);

  [-1, 1].forEach((side) => {
    const cheek = new THREE.Mesh(rBox(0.08, 0.22, 0.24, 0.018), maneM);
    cheek.position.set(side * 0.17, 0.0, 0.02);
    cheek.rotation.z = side * -0.14;
    lion.add(cheek);

    const ear = new THREE.Mesh(rBox(0.08, 0.1, 0.09, 0.016), maneM);
    ear.position.set(side * 0.12, 0.18, -0.04);
    ear.rotation.z = side * -0.22;
    lion.add(ear);

    const earSilver = new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.06, 0.05), silverM);
    earSilver.position.set(side * 0.12, 0.18, 0.01);
    lion.add(earSilver);

    // Visor socket & glowing Lion Eye
    const socket = new THREE.Mesh(new THREE.BoxGeometry(0.11, 0.065, 0.04), darkM);
    socket.position.set(side * 0.085, 0.075, 0.115);
    lion.add(socket);

    const eye = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.042, 0.045), eyeM);
    eye.position.set(side * 0.085, 0.075, 0.122);
    eye.rotation.z = side * 0.18;
    lion.add(eye);
  });

  // Silver protruding upper muzzle
  const snout = new THREE.Mesh(rBox(0.22, 0.11, 0.2, 0.02), silverM);
  snout.position.set(0, -0.005, 0.17);
  lion.add(snout);

  const nose = new THREE.Mesh(new THREE.BoxGeometry(0.075, 0.045, 0.05), darkM);
  nose.position.set(0, 0.035, 0.265);
  lion.add(nose);

  // Upper fangs
  [-1, 1].forEach((side) => {
    const uFang = new THREE.Mesh(new THREE.ConeGeometry(0.022, 0.06, 4), fangM);
    uFang.rotation.x = Math.PI;
    uFang.position.set(side * 0.075, -0.075, 0.235);
    lion.add(uFang);

    const lFang = new THREE.Mesh(new THREE.ConeGeometry(0.018, 0.048, 4), fangM);
    lFang.position.set(side * 0.065, -0.082, 0.22);
    lion.add(lFang);
  });

  // Lower silver jaw (slightly open showing fangs)
  const lowerJaw = new THREE.Mesh(rBox(0.19, 0.065, 0.18, 0.016), silverM);
  lowerJaw.position.set(0, -0.115, 0.15);
  lowerJaw.rotation.x = 0.18;
  lion.add(lowerJaw);

  lion.scale.setScalar(scale);
  return lion;
}
