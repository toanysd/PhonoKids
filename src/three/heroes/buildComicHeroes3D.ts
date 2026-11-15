import * as THREE from 'three';
import { ArticulatedRig3D, RigBuildConfig } from '../types3D';
import {
  armorMat,
  buildExtrudedPolygon,
  getSpiderWebTexture,
  glossyCandyMat,
  glowMat,
  satinMat,
} from '../materialsAndGeo';

export function buildAnpanman3D(config: RigBuildConfig): ArticulatedRig3D {
  const redSuit = satinMat(config.primaryColor || '#DC2626');
  const bunSkin = satinMat('#E09145');
  const bootGloveMat = glossyCandyMat(config.accentColor || '#FACC15');
  const capeMat = satinMat('#6D3B1A');
  const darkBrown = satinMat('#3B1D0A');
  const whiteM = satinMat('#FFFFFF');

  const root = new THREE.Group();
  const pelvis = new THREE.Group();
  pelvis.position.set(0, 0.85, 0);
  root.add(pelvis);

  const hips = new THREE.Mesh(new THREE.SphereGeometry(0.3, 18, 14), redSuit);
  hips.scale.set(1.05, 0.8, 0.92);
  pelvis.add(hips);

  const torso = new THREE.Group();
  torso.position.set(0, 0.14, 0);
  pelvis.add(torso);

  const chest = new THREE.Mesh(new THREE.CylinderGeometry(0.28, 0.31, 0.56, 20), redSuit);
  chest.position.set(0, 0.28, 0);
  torso.add(chest);

  const collar = new THREE.Mesh(new THREE.TorusGeometry(0.23, 0.045, 10, 24), whiteM);
  collar.rotation.x = Math.PI / 2;
  collar.position.set(0, 0.57, 0);
  torso.add(collar);

  const belt = new THREE.Mesh(new THREE.CylinderGeometry(0.315, 0.315, 0.09, 20), bootGloveMat);
  belt.position.set(0, 0.04, 0);
  torso.add(belt);

  const buckle = new THREE.Mesh(new THREE.BoxGeometry(0.14, 0.11, 0.06), whiteM);
  buckle.position.set(0, 0.04, 0.31);
  torso.add(buckle);

  const emblem = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.12, 0.04, 20), bootGloveMat);
  emblem.rotation.x = Math.PI / 2;
  emblem.position.set(0, 0.35, 0.29);
  torso.add(emblem);

  // Flowing 3D Dark Brown Cape + White Clasp Buttons
  const wings = new THREE.Group();
  wings.position.set(0, 0.54, -0.2);
  torso.add(wings);

  const rawCape = new THREE.Shape();
  rawCape.moveTo(-0.24, 0.02);
  rawCape.lineTo(0.24, 0.02);
  rawCape.quadraticCurveTo(0.56, -0.58, 0.62, -1.06);
  rawCape.quadraticCurveTo(0, -1.16, -0.62, -1.06);
  rawCape.quadraticCurveTo(-0.56, -0.58, -0.24, 0.02);
  const capePts = rawCape.getPoints(16);
  if (THREE.ShapeUtils.isClockWise(capePts)) capePts.reverse();
  const capeGeo = new THREE.ExtrudeGeometry(new THREE.Shape(capePts), {
    depth: 0.045,
    bevelEnabled: false,
  });
  const capeMesh = new THREE.Mesh(capeGeo, capeMat);
  capeMesh.rotation.x = 0.22;
  wings.add(capeMesh);

  [-1, 1].forEach((side) => {
    const clasp = new THREE.Mesh(new THREE.SphereGeometry(0.055, 12, 10), whiteM);
    clasp.position.set(side * 0.2, 0.52, 0.18);
    torso.add(clasp);
  });

  // Big Warm Round Bun Head
  const head = new THREE.Group();
  head.position.set(0, 0.68, 0);
  torso.add(head);

  const bun = new THREE.Mesh(new THREE.SphereGeometry(0.42, 28, 24), bunSkin);
  bun.position.set(0, 0.34, 0);
  head.add(bun);

  // Glossy Candy Red Nose & Cheeks
  const nose = new THREE.Mesh(new THREE.SphereGeometry(0.115, 20, 16), glossyCandyMat('#DC2626'));
  nose.position.set(0, 0.32, 0.42);
  head.add(nose);

  [-1, 1].forEach((side) => {
    const cheek = new THREE.Mesh(new THREE.SphereGeometry(0.105, 18, 14), glossyCandyMat('#F97316'));
    cheek.position.set(side * 0.21, 0.29, 0.365);
    head.add(cheek);

    const eye = new THREE.Mesh(new THREE.SphereGeometry(0.042, 12, 10), darkBrown);
    eye.scale.set(0.75, 1.3, 0.6);
    eye.position.set(side * 0.145, 0.46, 0.375);
    head.add(eye);

    const brow = new THREE.Mesh(new THREE.TorusGeometry(0.085, 0.018, 8, 16, Math.PI), darkBrown);
    brow.position.set(side * 0.145, 0.54, 0.36);
    brow.rotation.z = side * -0.08;
    head.add(brow);
  });

  const smile = new THREE.Mesh(new THREE.TorusGeometry(0.11, 0.02, 8, 18, Math.PI), darkBrown);
  smile.rotation.z = Math.PI;
  smile.position.set(0, 0.19, 0.375);
  head.add(smile);

  const mouth = new THREE.Mesh(new THREE.SphereGeometry(0.055, 12, 10), glossyCandyMat('#991B1B'));
  mouth.scale.set(1.2, 0.25, 0.5);
  mouth.position.set(0, 0.15, 0.385);
  head.add(mouth);

  const makeArm = (side: -1 | 1) => {
    const arm = new THREE.Group();
    arm.position.set(side * 0.34, 0.48, 0);
    const sleeve = new THREE.Mesh(new THREE.CapsuleGeometry(0.085, 0.3, 8, 14), redSuit);
    sleeve.position.set(side * 0.05, -0.18, 0);
    sleeve.rotation.z = side * 0.22;
    arm.add(sleeve);

    const fist = new THREE.Mesh(new THREE.SphereGeometry(0.135, 16, 14), bootGloveMat);
    fist.position.set(side * 0.1, -0.39, 0.04);
    arm.add(fist);
    return arm;
  };
  const leftArm = makeArm(1);
  const rightArm = makeArm(-1);
  torso.add(leftArm, rightArm);

  const makeLeg = (side: -1 | 1) => {
    const leg = new THREE.Group();
    leg.position.set(side * 0.16, -0.06, 0);
    const thigh = new THREE.Mesh(new THREE.CapsuleGeometry(0.095, 0.26, 8, 14), redSuit);
    thigh.position.set(0, -0.22, 0);
    leg.add(thigh);

    const boot = new THREE.Mesh(new THREE.CapsuleGeometry(0.115, 0.26, 8, 16), bootGloveMat);
    boot.position.set(0, -0.58, 0.02);
    leg.add(boot);

    const toe = new THREE.Mesh(new THREE.SphereGeometry(0.125, 14, 12), bootGloveMat);
    toe.scale.set(0.95, 0.85, 1.35);
    toe.position.set(0, -0.7, 0.11);
    leg.add(toe);
    return leg;
  };
  const leftLeg = makeLeg(1);
  const rightLeg = makeLeg(-1);
  pelvis.add(leftLeg, rightLeg);

  return { root, pelvis, torso, head, leftArm, rightArm, leftLeg, rightLeg, wings, mouth, baseY: 0 };
}

export function buildSpiderMan3D(config: RigBuildConfig): ArticulatedRig3D {
  const redHex = config.primaryColor || '#E11D48';
  const webTex = getSpiderWebTexture(redHex);
  const webSuit = new THREE.MeshPhysicalMaterial({
    map: webTex,
    roughness: 0.36,
    metalness: 0.1,
    clearcoat: 0.25,
  });
  const blueSuit = satinMat(config.secondaryColor || '#1D4ED8');
  const blackM = armorMat('#0F172A');
  const whiteM = glowMat('#FFFFFF', 0.55);

  const root = new THREE.Group();
  const pelvis = new THREE.Group();
  pelvis.position.set(0, 1.0, 0);
  root.add(pelvis);

  const hipMesh = new THREE.Mesh(new THREE.SphereGeometry(0.21, 16, 14), blueSuit);
  hipMesh.scale.set(1.05, 0.82, 0.88);
  pelvis.add(hipMesh);

  const belt = new THREE.Mesh(new THREE.CylinderGeometry(0.215, 0.21, 0.08, 18), webSuit);
  belt.position.set(0, 0.08, 0);
  pelvis.add(belt);

  const torso = new THREE.Group();
  torso.position.set(0, 0.12, 0);
  pelvis.add(torso);

  const abCore = new THREE.Mesh(new THREE.CylinderGeometry(0.24, 0.19, 0.28, 18), blueSuit);
  abCore.position.set(0, 0.16, 0);
  torso.add(abCore);

  const chestCore = new THREE.Mesh(new THREE.CylinderGeometry(0.29, 0.23, 0.34, 20), webSuit);
  chestCore.scale.set(1.12, 1, 0.82);
  chestCore.position.set(0, 0.44, 0);
  torso.add(chestCore);

  const spiderBody = new THREE.Mesh(new THREE.SphereGeometry(0.045, 12, 10), blackM);
  spiderBody.scale.set(0.8, 1.4, 0.5);
  spiderBody.position.set(0, 0.44, 0.24);
  torso.add(spiderBody);

  [-1, 1].forEach((side) => {
    [-0.25, 0.25].forEach((ang, idx) => {
      const sLeg = new THREE.Mesh(new THREE.BoxGeometry(0.14, 0.018, 0.025), blackM);
      sLeg.position.set(side * 0.08, 0.44 + (idx === 0 ? -0.05 : 0.05), 0.235);
      sLeg.rotation.z = side * ang * 2.2;
      torso.add(sLeg);
    });
  });

  // Masked Head + Raised White Spider-Lens Eyes (both eyes CCW-normalized!)
  const head = new THREE.Group();
  head.position.set(0, 0.66, 0);
  torso.add(head);

  const neck = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.095, 0.12, 14), webSuit);
  neck.position.set(0, 0.04, 0);
  head.add(neck);

  const mask = new THREE.Mesh(new THREE.SphereGeometry(0.21, 24, 20), webSuit);
  mask.scale.set(0.92, 1.12, 0.98);
  mask.position.set(0, 0.27, 0);
  head.add(mask);

  [-1, 1].forEach((side) => {
    const lensTrim = buildExtrudedPolygon(
      [
        [0, 0.01],
        [side * 0.11, 0.07],
        [side * 0.13, -0.01],
        [side * 0.04, -0.06],
      ],
      0.028,
      0.006,
      blackM
    );
    lensTrim.position.set(side * 0.032, 0.27, 0.19);
    lensTrim.rotation.y = side * 0.24;
    head.add(lensTrim);

    const lensWhite = buildExtrudedPolygon(
      [
        [side * 0.015, 0.006],
        [side * 0.092, 0.048],
        [side * 0.105, -0.008],
        [side * 0.04, -0.04],
      ],
      0.018,
      0.003,
      whiteM
    );
    lensWhite.position.set(side * 0.032, 0.27, 0.205);
    lensWhite.rotation.y = side * 0.24;
    head.add(lensWhite);
  });

  const makeArm = (side: -1 | 1) => {
    const arm = new THREE.Group();
    arm.position.set(side * 0.36, 0.56, 0);
    const shoulder = new THREE.Mesh(new THREE.SphereGeometry(0.105, 16, 12), webSuit);
    arm.add(shoulder);
    const bicep = new THREE.Mesh(new THREE.CapsuleGeometry(0.072, 0.24, 8, 14), blueSuit);
    bicep.position.set(side * 0.03, -0.18, 0);
    arm.add(bicep);

    const forearmGrp = new THREE.Group();
    forearmGrp.position.set(side * 0.04, -0.34, 0.02);
    arm.add(forearmGrp);

    const glove = new THREE.Mesh(new THREE.CapsuleGeometry(0.068, 0.24, 8, 14), webSuit);
    glove.position.set(0, -0.14, 0.04);
    glove.rotation.x = -0.35;
    forearmGrp.add(glove);
    return { arm, forearmGrp };
  };
  const left = makeArm(1);
  const right = makeArm(-1);
  torso.add(left.arm, right.arm);

  const weapon = new THREE.Group();
  weapon.position.set(0, -0.25, 0.14);
  right.forearmGrp.add(weapon);
  [-0.22, 0, 0.22].forEach((rot) => {
    const strand = new THREE.Mesh(new THREE.CylinderGeometry(0.012, 0.022, 0.72, 8), glowMat('#E0F2FE', 1.5));
    strand.rotation.x = Math.PI / 2;
    strand.rotation.z = rot;
    strand.position.set(0, 0, 0.38);
    weapon.add(strand);
  });

  const makeLeg = (side: -1 | 1) => {
    const leg = new THREE.Group();
    leg.position.set(side * 0.14, -0.06, 0);
    const thigh = new THREE.Mesh(new THREE.CapsuleGeometry(0.095, 0.34, 8, 14), blueSuit);
    thigh.position.set(0, -0.22, 0);
    leg.add(thigh);
    const boot = new THREE.Mesh(new THREE.CapsuleGeometry(0.08, 0.36, 8, 14), webSuit);
    boot.position.set(0, -0.62, 0.02);
    leg.add(boot);
    const foot = new THREE.Mesh(new THREE.SphereGeometry(0.09, 14, 10), webSuit);
    foot.scale.set(0.9, 0.7, 1.55);
    foot.position.set(0, -0.84, 0.08);
    leg.add(foot);
    return leg;
  };
  const leftLeg = makeLeg(1);
  const rightLeg = makeLeg(-1);
  pelvis.add(leftLeg, rightLeg);

  return {
    root,
    pelvis,
    torso,
    head,
    leftArm: left.arm,
    rightArm: right.arm,
    leftForearm: left.forearmGrp,
    rightForearm: right.forearmGrp,
    leftLeg,
    rightLeg,
    weapon,
    baseY: 0,
  };
}
