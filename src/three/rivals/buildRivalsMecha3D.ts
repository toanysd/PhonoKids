import * as THREE from 'three';
import { ArticulatedRig3D, RigBuildConfig } from '../types3D';
import {
  armorMat,
  buildExtrudedPolygon,
  chromeMat,
  glowMat,
  rBox,
  satinMat,
} from '../materialsAndGeo';

export function buildGalraBoss3D(config: RigBuildConfig): ArticulatedRig3D {
  const purpleM = armorMat(config.primaryColor || '#581C87');
  const crimsonM = armorMat(config.secondaryColor || '#F43F5E');
  const goldM = armorMat(config.accentColor || '#FACC15');
  const darkM = armorMat('#0F172A');

  const root = new THREE.Group();
  const pelvis = new THREE.Group();
  pelvis.position.set(0, 1.0, 0);
  root.add(pelvis);

  const hips = new THREE.Mesh(new THREE.BoxGeometry(0.42, 0.22, 0.28), darkM);
  pelvis.add(hips);

  const torso = new THREE.Group();
  torso.position.set(0, 0.14, 0);
  pelvis.add(torso);

  const chest = new THREE.Mesh(new THREE.CylinderGeometry(0.38, 0.25, 0.64, 10), purpleM);
  chest.scale.set(1.15, 1, 0.78);
  chest.position.set(0, 0.34, 0);
  torso.add(chest);

  const breastCrest = new THREE.Mesh(new THREE.BoxGeometry(0.32, 0.28, 0.08), goldM);
  breastCrest.position.set(0, 0.44, 0.24);
  torso.add(breastCrest);

  // Sweeping Warlord Cape
  const wings = new THREE.Group();
  wings.position.set(0, 0.62, -0.2);
  torso.add(wings);
  const cape = buildExtrudedPolygon(
    [
      [-0.36, 0.05],
      [0.36, 0.05],
      [0.72, -1.35],
      [-0.72, -1.35],
    ],
    0.04,
    0.01,
    crimsonM
  );
  cape.rotation.x = 0.18;
  wings.add(cape);

  // Head & Twin Curved Horns
  const head = new THREE.Group();
  head.position.set(0, 0.74, 0);
  torso.add(head);

  const helmet = new THREE.Mesh(new THREE.SphereGeometry(0.22, 20, 16), purpleM);
  helmet.position.set(0, 0.02, -0.02);
  head.add(helmet);

  const face = new THREE.Mesh(new THREE.SphereGeometry(0.19, 18, 16), satinMat('#6D28D9'));
  face.scale.set(0.92, 1.05, 0.9);
  face.position.set(0, -0.02, 0.03);
  head.add(face);

  [-1, 1].forEach((side) => {
    const horn = new THREE.Mesh(new THREE.ConeGeometry(0.065, 0.36, 8), goldM);
    horn.position.set(side * 0.19, 0.24, 0);
    horn.rotation.z = side * -0.45;
    head.add(horn);

    const eye = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.032, 0.04), glowMat('#FDE047', 1.7));
    eye.position.set(side * 0.065, 0.01, 0.2);
    eye.rotation.z = side * -0.18;
    head.add(eye);
  });

  const mouth = new THREE.Mesh(new THREE.BoxGeometry(0.11, 0.025, 0.03), glowMat('#FCA5A5', 1.0));
  mouth.position.set(0, -0.08, 0.195);
  head.add(mouth);

  const makeArm = (side: -1 | 1) => {
    const arm = new THREE.Group();
    arm.position.set(side * 0.46, 0.58, 0);
    const pauldron = new THREE.Mesh(new THREE.ConeGeometry(0.19, 0.32, 6), crimsonM);
    pauldron.rotation.z = side * -1.2;
    arm.add(pauldron);
    const limb = new THREE.Mesh(new THREE.CapsuleGeometry(0.085, 0.42, 8, 12), purpleM);
    limb.position.set(side * 0.05, -0.26, 0.04);
    arm.add(limb);
    return arm;
  };
  const leftArm = makeArm(1);
  const rightArm = makeArm(-1);
  torso.add(leftArm, rightArm);

  // Plasma Scepter
  const weapon = new THREE.Group();
  weapon.position.set(-0.06, -0.5, 0.16);
  weapon.rotation.x = Math.PI / 2 - 0.5;
  rightArm.add(weapon);
  const staff = new THREE.Mesh(new THREE.CylinderGeometry(0.028, 0.028, 1.35, 10), chromeMat('#C084FC'));
  weapon.add(staff);
  const orb = new THREE.Mesh(new THREE.OctahedronGeometry(0.12, 0), glowMat('#E879F9', 1.8));
  orb.position.set(0, 0.72, 0);
  weapon.add(orb);

  const makeLeg = (side: -1 | 1) => {
    const leg = new THREE.Group();
    leg.position.set(side * 0.17, -0.06, 0);
    const shin = new THREE.Mesh(new THREE.CapsuleGeometry(0.11, 0.68, 8, 12), darkM);
    shin.position.set(0, -0.44, 0);
    leg.add(shin);
    const boot = new THREE.Mesh(new THREE.BoxGeometry(0.2, 0.14, 0.32), purpleM);
    boot.position.set(0, -0.84, 0.06);
    leg.add(boot);
    return leg;
  };
  const leftLeg = makeLeg(1);
  const rightLeg = makeLeg(-1);
  pelvis.add(leftLeg, rightLeg);

  return { root, pelvis, torso, head, leftArm, rightArm, leftLeg, rightLeg, wings, weapon, mouth, baseY: 0 };
}

export function buildRobeastMech3D(config: RigBuildConfig): ArticulatedRig3D {
  const steelM = armorMat(config.primaryColor || '#334155');
  const redM = armorMat(config.secondaryColor || '#EF4444');
  const cyanGlow = glowMat(config.accentColor || '#38BDF8', 1.7);
  const silverM = chromeMat('#CBD5E1');

  const root = new THREE.Group();
  const pelvis = new THREE.Group();
  pelvis.position.set(0, 0.92, 0);
  root.add(pelvis);

  const waist = new THREE.Mesh(new THREE.BoxGeometry(0.46, 0.24, 0.32), steelM);
  pelvis.add(waist);

  const torso = new THREE.Group();
  torso.position.set(0, 0.14, 0);
  pelvis.add(torso);

  const chest = new THREE.Mesh(rBox(0.82, 0.56, 0.44, 0.032), steelM);
  chest.position.set(0, 0.34, 0);
  torso.add(chest);

  const core = new THREE.Mesh(new THREE.SphereGeometry(0.13, 14, 12), glowMat('#EF4444', 1.6));
  core.position.set(0, 0.38, 0.22);
  torso.add(core);

  // Twin Shoulder Cannons
  [-1, 1].forEach((side) => {
    const cannon = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.1, 0.45, 12), redM);
    cannon.rotation.x = Math.PI / 2 - 0.25;
    cannon.position.set(side * 0.34, 0.68, 0.06);
    torso.add(cannon);
    const muzzle = new THREE.Mesh(new THREE.CylinderGeometry(0.055, 0.055, 0.06, 12), cyanGlow);
    muzzle.rotation.x = Math.PI / 2 - 0.25;
    muzzle.position.set(side * 0.34, 0.74, 0.28);
    torso.add(muzzle);
  });

  const head = new THREE.Group();
  head.position.set(0, 0.68, 0.04);
  torso.add(head);

  const skull = new THREE.Mesh(rBox(0.4, 0.34, 0.36, 0.03), steelM);
  skull.position.set(0, 0.18, 0);
  head.add(skull);

  const visor = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.075, 0.05), glowMat('#EF4444', 1.8));
  visor.position.set(0, 0.22, 0.18);
  head.add(visor);

  const mouth = new THREE.Mesh(new THREE.BoxGeometry(0.24, 0.06, 0.06), silverM);
  mouth.position.set(0, 0.09, 0.175);
  head.add(mouth);

  [-1, 1].forEach((side) => {
    const horn = new THREE.Mesh(new THREE.ConeGeometry(0.055, 0.28, 6), silverM);
    horn.position.set(side * 0.2, 0.38, 0.04);
    horn.rotation.z = side * -0.3;
    head.add(horn);
  });

  const makeArm = (side: -1 | 1) => {
    const arm = new THREE.Group();
    arm.position.set(side * 0.54, 0.52, 0);
    const shoulder = new THREE.Mesh(rBox(0.24, 0.24, 0.26, 0.026), redM);
    arm.add(shoulder);
    const forearm = new THREE.Mesh(rBox(0.22, 0.48, 0.24, 0.026), steelM);
    forearm.position.set(side * 0.03, -0.34, 0.06);
    arm.add(forearm);
    return arm;
  };
  const leftArm = makeArm(1);
  const rightArm = makeArm(-1);
  torso.add(leftArm, rightArm);

  const makeLeg = (side: -1 | 1) => {
    const leg = new THREE.Group();
    leg.position.set(side * 0.22, -0.08, 0);
    const pillar = new THREE.Mesh(rBox(0.24, 0.72, 0.28, 0.026), steelM);
    pillar.position.set(0, -0.44, 0);
    leg.add(pillar);
    const foot = new THREE.Mesh(rBox(0.28, 0.16, 0.38, 0.022), redM);
    foot.position.set(0, -0.78, 0.08);
    leg.add(foot);
    return leg;
  };
  const leftLeg = makeLeg(1);
  const rightLeg = makeLeg(-1);
  pelvis.add(leftLeg, rightLeg);

  return { root, pelvis, torso, head, leftArm, rightArm, leftLeg, rightLeg, mouth, baseY: 0 };
}

export function buildAlienBaltan3D(config: RigBuildConfig): ArticulatedRig3D {
  const tealM = armorMat(config.primaryColor || '#0F766E');
  const silverM = chromeMat('#CBD5E1');
  const eyeGlow = glowMat(config.accentColor || '#FDE047', 1.6);

  const root = new THREE.Group();
  const pelvis = new THREE.Group();
  pelvis.position.set(0, 0.96, 0);
  root.add(pelvis);

  const hips = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.18, 0.22, 16), tealM);
  pelvis.add(hips);

  const torso = new THREE.Group();
  torso.position.set(0, 0.12, 0);
  pelvis.add(torso);

  const chest = new THREE.Mesh(new THREE.CylinderGeometry(0.32, 0.22, 0.62, 18), tealM);
  chest.scale.set(1.12, 1, 0.78);
  chest.position.set(0, 0.34, 0);
  torso.add(chest);

  [0.24, 0.42].forEach((y) => {
    const rib = new THREE.Mesh(new THREE.TorusGeometry(0.24, 0.028, 8, 20), silverM);
    rib.rotation.x = Math.PI / 2;
    rib.position.set(0, y, 0.02);
    torso.add(rib);
  });

  // Iconic Cicada V-Crest Head + Giant Amber Compound Eyes
  const head = new THREE.Group();
  head.position.set(0, 0.72, 0);
  torso.add(head);

  const cranium = new THREE.Mesh(new THREE.SphereGeometry(0.22, 20, 16), tealM);
  cranium.scale.set(0.95, 1.35, 0.95);
  head.add(cranium);

  [-1, 1].forEach((side) => {
    const vCrest = new THREE.Mesh(new THREE.ConeGeometry(0.085, 0.42, 6), silverM);
    vCrest.position.set(side * 0.13, 0.36, 0);
    vCrest.rotation.z = side * -0.25;
    head.add(vCrest);

    const insectEye = new THREE.Mesh(new THREE.SphereGeometry(0.11, 16, 14), eyeGlow);
    insectEye.scale.set(0.9, 1.2, 0.7);
    insectEye.position.set(side * 0.1, 0.03, 0.165);
    head.add(insectEye);
  });

  // Giant Twin Lobster Pincer Claws
  const makeClawArm = (side: -1 | 1) => {
    const arm = new THREE.Group();
    arm.position.set(side * 0.4, 0.55, 0);
    const upper = new THREE.Mesh(new THREE.CapsuleGeometry(0.075, 0.26, 8, 12), tealM);
    upper.position.set(side * 0.04, -0.16, 0);
    arm.add(upper);

    const pincerGrp = new THREE.Group();
    pincerGrp.position.set(side * 0.05, -0.34, 0.08);
    arm.add(pincerGrp);

    const bladeA = buildExtrudedPolygon(
      [
        [-0.08, 0],
        [0.08, 0],
        [0.04, -0.46],
        [-0.02, -0.38],
      ],
      0.08,
      0.015,
      silverM
    );
    bladeA.position.set(-0.04, -0.02, 0);
    bladeA.rotation.z = -0.18;
    const bladeB = buildExtrudedPolygon(
      [
        [-0.07, 0],
        [0.07, 0],
        [0.02, -0.44],
        [-0.04, -0.34],
      ],
      0.08,
      0.015,
      silverM
    );
    bladeB.position.set(0.05, -0.02, 0);
    bladeB.rotation.z = 0.22;
    pincerGrp.add(bladeA, bladeB);
    return arm;
  };
  const leftArm = makeClawArm(1);
  const rightArm = makeClawArm(-1);
  torso.add(leftArm, rightArm);

  const makeLeg = (side: -1 | 1) => {
    const leg = new THREE.Group();
    leg.position.set(side * 0.15, -0.06, 0);
    const limb = new THREE.Mesh(new THREE.CapsuleGeometry(0.095, 0.72, 8, 12), tealM);
    limb.position.set(0, -0.45, 0);
    leg.add(limb);
    const boot = new THREE.Mesh(new THREE.SphereGeometry(0.11, 12, 10), silverM);
    boot.scale.set(0.95, 0.7, 1.5);
    boot.position.set(0, -0.84, 0.08);
    leg.add(boot);
    return leg;
  };
  const leftLeg = makeLeg(1);
  const rightLeg = makeLeg(-1);
  pelvis.add(leftLeg, rightLeg);

  return { root, pelvis, torso, head, leftArm, rightArm, leftLeg, rightLeg, baseY: 0 };
}

export function buildGoblinGlider3D(config: RigBuildConfig): ArticulatedRig3D {
  const greenM = armorMat(config.primaryColor || '#16A34A');
  const purpleM = satinMat(config.secondaryColor || '#7E22CE');
  const slateM = chromeMat('#475569');
  const bombGlow = glowMat(config.accentColor || '#F97316', 1.7);

  const root = new THREE.Group();
  const pelvis = new THREE.Group();
  pelvis.position.set(0, 1.05, 0);
  root.add(pelvis);

  // Twin-Wing Bat Goblin Glider under feet
  const glider = new THREE.Group();
  glider.position.set(0, -0.88, 0.05);
  pelvis.add(glider);
  const wingMesh = buildExtrudedPolygon(
    [
      [0, 0.25],
      [0.85, 0.05],
      [1.05, 0.26],
      [0.75, -0.22],
      [0, -0.14],
      [-0.75, -0.22],
      [-1.05, 0.26],
      [-0.85, 0.05],
    ],
    0.07,
    0.012,
    slateM
  );
  wingMesh.rotation.x = Math.PI / 2;
  glider.add(wingMesh);

  [-1, 1].forEach((side) => {
    const thruster = new THREE.Mesh(new THREE.SphereGeometry(0.08, 12, 10), glowMat('#C084FC', 1.7));
    thruster.position.set(side * 0.28, -0.05, -0.18);
    glider.add(thruster);
  });

  const torso = new THREE.Group();
  torso.position.set(0, 0.1, 0);
  pelvis.add(torso);

  const chest = new THREE.Mesh(new THREE.CylinderGeometry(0.25, 0.2, 0.56, 16), purpleM);
  chest.position.set(0, 0.3, 0);
  torso.add(chest);

  const satchel = new THREE.Mesh(new THREE.BoxGeometry(0.18, 0.2, 0.12), satinMat('#92400E'));
  satchel.position.set(0.2, 0.15, 0.14);
  torso.add(satchel);

  // Goblin Head + Pointed Purple Hood & Ears
  const head = new THREE.Group();
  head.position.set(0, 0.66, 0);
  torso.add(head);

  const skull = new THREE.Mesh(new THREE.SphereGeometry(0.2, 20, 16), greenM);
  head.add(skull);

  const hood = new THREE.Mesh(new THREE.ConeGeometry(0.22, 0.48, 14), purpleM);
  hood.rotation.x = -0.75;
  hood.position.set(0, 0.16, -0.16);
  head.add(hood);

  [-1, 1].forEach((side) => {
    const ear = new THREE.Mesh(new THREE.ConeGeometry(0.045, 0.22, 6), greenM);
    ear.position.set(side * 0.22, 0.04, 0);
    ear.rotation.z = side * -1.1;
    head.add(ear);

    const eye = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.035, 0.04), glowMat('#FDE047', 1.6));
    eye.position.set(side * 0.075, 0.03, 0.18);
    eye.rotation.z = side * -0.22;
    head.add(eye);
  });

  const mouth = new THREE.Mesh(new THREE.BoxGeometry(0.14, 0.035, 0.04), glowMat('#FDE047', 0.8));
  mouth.position.set(0, -0.07, 0.18);
  head.add(mouth);

  const makeArm = (side: -1 | 1) => {
    const arm = new THREE.Group();
    arm.position.set(side * 0.32, 0.5, 0);
    const sleeve = new THREE.Mesh(new THREE.CapsuleGeometry(0.07, 0.28, 8, 12), greenM);
    sleeve.position.set(side * 0.04, -0.18, 0);
    arm.add(sleeve);
    const glove = new THREE.Mesh(new THREE.CapsuleGeometry(0.075, 0.2, 8, 12), purpleM);
    glove.position.set(side * 0.05, -0.4, 0.08);
    glove.rotation.x = -0.45;
    arm.add(glove);
    return arm;
  };
  const leftArm = makeArm(1);
  const rightArm = makeArm(-1);
  torso.add(leftArm, rightArm);

  // Glowing Pumpkin Bomb in Right Hand
  const weapon = new THREE.Group();
  weapon.position.set(-0.06, -0.5, 0.2);
  rightArm.add(weapon);
  const bomb = new THREE.Mesh(new THREE.SphereGeometry(0.13, 16, 14), bombGlow);
  weapon.add(bomb);

  const makeLeg = (side: -1 | 1) => {
    const leg = new THREE.Group();
    leg.position.set(side * 0.15, -0.06, 0);
    const thigh = new THREE.Mesh(new THREE.CapsuleGeometry(0.085, 0.34, 8, 12), greenM);
    thigh.position.set(0, -0.22, 0);
    leg.add(thigh);
    const boot = new THREE.Mesh(new THREE.CapsuleGeometry(0.09, 0.32, 8, 12), purpleM);
    boot.position.set(0, -0.56, 0.04);
    leg.add(boot);
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
    leftArm,
    rightArm,
    leftLeg,
    rightLeg,
    weapon,
    mouth,
    extraAnimNodes: [glider],
    baseY: 0.14,
  };
}
