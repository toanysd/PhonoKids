import * as THREE from 'three';
import { ArticulatedRig3D, RigBuildConfig } from '../types3D';
import {
  armorMat,
  buildExtrudedPolygon,
  chromeMat,
  glossyCandyMat,
  glowMat,
  satinMat,
} from '../materialsAndGeo';

export function buildUltramanZero3D(config: RigBuildConfig): ArticulatedRig3D {
  const blueArmor = armorMat(config.primaryColor || '#0284C7');
  const silverM = chromeMat(config.secondaryColor || '#E2E8F0');
  const redArmor = armorMat(config.accentColor || '#DC2626');
  const goldM = armorMat('#FACC15');

  const root = new THREE.Group();
  const pelvis = new THREE.Group();
  pelvis.position.set(0, 1.04, 0);
  root.add(pelvis);

  const hips = new THREE.Mesh(new THREE.CylinderGeometry(0.21, 0.18, 0.22, 18), silverM);
  pelvis.add(hips);

  const torso = new THREE.Group();
  torso.position.set(0, 0.12, 0);
  pelvis.add(torso);

  const chestBase = new THREE.Mesh(new THREE.CylinderGeometry(0.32, 0.21, 0.62, 20), blueArmor);
  chestBase.scale.set(1.12, 1, 0.8);
  chestBase.position.set(0, 0.34, 0);
  torso.add(chestBase);

  const redPlate = buildExtrudedPolygon(
    [
      [-0.28, 0.2],
      [0.28, 0.2],
      [0.14, -0.18],
      [-0.14, -0.18],
    ],
    0.07,
    0.015,
    redArmor
  );
  redPlate.position.set(0, 0.42, 0.21);
  torso.add(redPlate);

  // Glowing Cyan Color Timer
  const timerRing = new THREE.Mesh(new THREE.TorusGeometry(0.068, 0.016, 10, 20), goldM);
  timerRing.position.set(0, 0.44, 0.26);
  torso.add(timerRing);
  const colorTimer = new THREE.Mesh(new THREE.SphereGeometry(0.056, 16, 14), glowMat('#38BDF8', 1.8));
  colorTimer.position.set(0, 0.44, 0.255);
  torso.add(colorTimer);

  // Head + Twin Zero Sluggers + Emerald Beam Lamp + Golden Ultra Eyes
  const head = new THREE.Group();
  head.position.set(0, 0.72, 0);
  torso.add(head);

  const cranium = new THREE.Mesh(new THREE.SphereGeometry(0.21, 24, 20), silverM);
  cranium.scale.set(0.92, 1.15, 0.98);
  head.add(cranium);

  const centerFin = new THREE.Mesh(new THREE.BoxGeometry(0.045, 0.22, 0.32), silverM);
  centerFin.position.set(0, 0.18, -0.02);
  head.add(centerFin);

  const beamLamp = new THREE.Mesh(new THREE.SphereGeometry(0.032, 12, 10), glowMat('#22C55E', 1.8));
  beamLamp.position.set(0, 0.11, 0.19);
  head.add(beamLamp);

  [-1, 1].forEach((side) => {
    const slugger = buildExtrudedPolygon(
      [
        [0, 0],
        [side * 0.06, 0],
        [side * 0.16, 0.32],
        [side * 0.05, 0.28],
      ],
      0.032,
      0.008,
      silverM
    );
    slugger.position.set(side * 0.09, 0.16, 0);
    head.add(slugger);

    const ultraEye = new THREE.Mesh(new THREE.BoxGeometry(0.11, 0.055, 0.04), glowMat('#FEF08A', 1.5));
    ultraEye.position.set(side * 0.085, 0.015, 0.175);
    ultraEye.rotation.z = side * 0.24;
    ultraEye.rotation.y = side * 0.22;
    head.add(ultraEye);
  });

  const makeArm = (side: -1 | 1) => {
    const arm = new THREE.Group();
    arm.position.set(side * 0.39, 0.56, 0);
    const pauldron = new THREE.Mesh(new THREE.BoxGeometry(0.2, 0.14, 0.22), redArmor);
    pauldron.rotation.z = side * -0.25;
    arm.add(pauldron);
    const bicep = new THREE.Mesh(new THREE.CapsuleGeometry(0.075, 0.24, 8, 14), silverM);
    bicep.position.set(side * 0.04, -0.2, 0);
    arm.add(bicep);
    const forearm = new THREE.Group();
    forearm.position.set(side * 0.05, -0.36, 0);
    arm.add(forearm);
    const gauntlet = new THREE.Mesh(new THREE.CapsuleGeometry(0.075, 0.25, 8, 14), redArmor);
    gauntlet.position.set(0, -0.14, 0.04);
    forearm.add(gauntlet);
    return { arm, forearm };
  };
  const left = makeArm(1);
  const right = makeArm(-1);
  torso.add(left.arm, right.arm);

  const weapon = new THREE.Group();
  weapon.position.set(0, -0.22, 0.12);
  right.forearm.add(weapon);
  const rayCore = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.07, 0.95, 12), glowMat('#38BDF8', 2.0));
  rayCore.rotation.x = Math.PI / 2;
  rayCore.position.set(0, 0, 0.48);
  weapon.add(rayCore);

  const makeLeg = (side: -1 | 1) => {
    const leg = new THREE.Group();
    leg.position.set(side * 0.15, -0.08, 0);
    const thigh = new THREE.Mesh(new THREE.CapsuleGeometry(0.095, 0.36, 8, 14), silverM);
    thigh.position.set(0, -0.22, 0);
    leg.add(thigh);
    const shin = new THREE.Mesh(new THREE.CapsuleGeometry(0.088, 0.36, 8, 14), blueArmor);
    shin.position.set(0, -0.62, 0);
    leg.add(shin);
    const boot = new THREE.Mesh(new THREE.SphereGeometry(0.095, 14, 10), silverM);
    boot.scale.set(0.95, 0.72, 1.55);
    boot.position.set(0, -0.87, 0.08);
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
    leftArm: left.arm,
    rightArm: right.arm,
    leftForearm: left.forearm,
    rightForearm: right.forearm,
    leftLeg,
    rightLeg,
    weapon,
    baseY: 0,
  };
}

export function buildPikachu3D(config: RigBuildConfig): ArticulatedRig3D {
  const fur = satinMat(config.primaryColor || '#FACC15');
  const darkM = glossyCandyMat('#0F172A');
  const cheekM = glossyCandyMat(config.accentColor || '#EF4444');
  const brownM = satinMat('#78350F');
  const whiteM = glowMat('#FFFFFF', 0.9);

  const root = new THREE.Group();
  const pelvis = new THREE.Group();
  pelvis.position.set(0, 0.42, 0);
  root.add(pelvis);

  const torso = new THREE.Group();
  pelvis.add(torso);

  const body = new THREE.Mesh(new THREE.SphereGeometry(0.4, 24, 20), fur);
  body.scale.set(0.96, 1.18, 0.9);
  body.position.set(0, 0.28, 0);
  torso.add(body);

  [0.18, 0.38].forEach((yOff) => {
    const stripe = new THREE.Mesh(new THREE.BoxGeometry(0.32, 0.08, 0.08), brownM);
    stripe.position.set(0, yOff, -0.32);
    torso.add(stripe);
  });

  const head = new THREE.Group();
  head.position.set(0, 0.74, 0.04);
  torso.add(head);

  const cranium = new THREE.Mesh(new THREE.SphereGeometry(0.35, 24, 22), fur);
  cranium.scale.set(1.06, 0.94, 0.96);
  cranium.position.set(0, 0.2, 0);
  head.add(cranium);

  [-1, 1].forEach((side) => {
    const cheek = new THREE.Mesh(new THREE.SphereGeometry(0.085, 16, 14), cheekM);
    cheek.position.set(side * 0.25, 0.13, 0.24);
    head.add(cheek);

    const eye = new THREE.Mesh(new THREE.SphereGeometry(0.052, 16, 12), darkM);
    eye.position.set(side * 0.15, 0.26, 0.295);
    head.add(eye);

    const iris = new THREE.Mesh(new THREE.SphereGeometry(0.018, 10, 8), whiteM);
    iris.position.set(side * 0.138, 0.278, 0.338);
    head.add(iris);

    const earGrp = new THREE.Group();
    earGrp.position.set(side * 0.2, 0.45, -0.02);
    earGrp.rotation.z = side === 1 ? -0.52 : 0.28;
    head.add(earGrp);

    const earBase = new THREE.Mesh(new THREE.ConeGeometry(0.085, 0.38, 14), fur);
    earBase.position.set(0, 0.14, 0);
    earGrp.add(earBase);

    const earTip = new THREE.Mesh(new THREE.ConeGeometry(0.045, 0.16, 14), darkM);
    earTip.position.set(0, 0.29, 0);
    earGrp.add(earTip);
  });

  const nose = new THREE.Mesh(new THREE.SphereGeometry(0.022, 10, 8), darkM);
  nose.position.set(0, 0.21, 0.338);
  head.add(nose);

  const mouth = new THREE.Mesh(new THREE.SphereGeometry(0.06, 12, 10), glossyCandyMat('#F43F5E'));
  mouth.scale.set(1.1, 0.45, 0.5);
  mouth.position.set(0, 0.12, 0.32);
  head.add(mouth);

  const makeArm = (side: -1 | 1) => {
    const arm = new THREE.Group();
    arm.position.set(side * 0.32, 0.44, 0.12);
    const limb = new THREE.Mesh(new THREE.CapsuleGeometry(0.075, 0.2, 8, 12), fur);
    limb.rotation.z = side * 0.55;
    limb.rotation.x = -0.35;
    limb.position.set(side * 0.08, -0.1, 0.06);
    arm.add(limb);
    return arm;
  };
  const leftArm = makeArm(1);
  const rightArm = makeArm(-1);
  torso.add(leftArm, rightArm);

  // 3D Zig-Zag Lightning Tail (CCW-safe via buildExtrudedPolygon)
  const wings = new THREE.Group();
  wings.position.set(0, 0.16, -0.32);
  torso.add(wings);
  const tail = buildExtrudedPolygon(
    [
      [0, 0],
      [0.18, 0.22],
      [0.08, 0.28],
      [0.32, 0.54],
      [0.16, 0.62],
      [0.46, 0.96],
      [0.18, 1.04],
      [0.02, 0.72],
      [0.14, 0.64],
      [-0.08, 0.34],
      [0.06, 0.26],
    ],
    0.055,
    0.01,
    armorMat('#FACC15')
  );
  tail.rotation.y = 0.35;
  wings.add(tail);

  const makeLeg = (side: -1 | 1) => {
    const leg = new THREE.Group();
    leg.position.set(side * 0.18, -0.18, 0.06);
    const foot = new THREE.Mesh(new THREE.SphereGeometry(0.11, 14, 12), fur);
    foot.scale.set(0.85, 0.65, 1.45);
    foot.position.set(0, -0.14, 0.08);
    leg.add(foot);
    return leg;
  };
  const leftLeg = makeLeg(1);
  const rightLeg = makeLeg(-1);
  pelvis.add(leftLeg, rightLeg);

  return { root, pelvis, torso, head, leftArm, rightArm, leftLeg, rightLeg, wings, mouth, baseY: 0 };
}
