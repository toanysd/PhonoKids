import * as THREE from 'three';
import { ArticulatedRig3D, RigBuildConfig } from '../types3D';
import {
  armorMat,
  chromeMat,
  glassMat,
  glossyCandyMat,
  glowMat,
  satinMat,
} from '../materialsAndGeo';

export function buildBaikinUfo3D(config: RigBuildConfig): ArticulatedRig3D {
  const bodyM = armorMat(config.primaryColor || '#4C1D95');
  const ufoM = armorMat(config.secondaryColor || '#7C3AED');
  const glowRimM = glowMat(config.accentColor || '#A3E635', 1.6);
  const silverM = chromeMat('#94A3B8');

  const root = new THREE.Group();
  const pelvis = new THREE.Group();
  pelvis.position.set(0, 0.65, 0);
  root.add(pelvis);

  const torso = new THREE.Group();
  pelvis.add(torso);

  // Saucer Base + Rim Lights + Glass Cockpit Dome
  const saucer = new THREE.Mesh(new THREE.SphereGeometry(0.68, 28, 18), ufoM);
  saucer.scale.set(1.0, 0.34, 1.0);
  torso.add(saucer);

  const ring = new THREE.Mesh(new THREE.TorusGeometry(0.62, 0.045, 10, 28), silverM);
  ring.rotation.x = Math.PI / 2;
  torso.add(ring);

  for (let i = 0; i < 6; i++) {
    const ang = (i / 6) * Math.PI * 2;
    const bulb = new THREE.Mesh(new THREE.SphereGeometry(0.05, 10, 8), glowRimM);
    bulb.position.set(Math.cos(ang) * 0.64, 0, Math.sin(ang) * 0.64);
    torso.add(bulb);
  }

  const dome = new THREE.Mesh(
    new THREE.SphereGeometry(0.46, 24, 18, 0, Math.PI * 2, 0, Math.PI * 0.55),
    glassMat('#E0F2FE', 0.35)
  );
  dome.position.set(0, 0.14, 0);
  torso.add(dome);

  // Pilot Baikinman Seated Inside
  const head = new THREE.Group();
  head.position.set(0, 0.38, 0);
  torso.add(head);

  const pilotSkull = new THREE.Mesh(new THREE.SphereGeometry(0.24, 20, 18), bodyM);
  head.add(pilotSkull);

  [-1, 1].forEach((side) => {
    const antenna = new THREE.Mesh(new THREE.ConeGeometry(0.045, 0.3, 8), bodyM);
    antenna.position.set(side * 0.15, 0.28, 0);
    antenna.rotation.z = side * -0.45;
    head.add(antenna);

    const eyeWhite = new THREE.Mesh(new THREE.SphereGeometry(0.068, 14, 12), satinMat('#FFFFFF'));
    eyeWhite.position.set(side * 0.095, 0.04, 0.19);
    head.add(eyeWhite);

    const pupil = new THREE.Mesh(new THREE.SphereGeometry(0.03, 10, 8), armorMat('#0F172A'));
    pupil.position.set(side * 0.095, 0.04, 0.245);
    head.add(pupil);
  });

  const nose = new THREE.Mesh(new THREE.SphereGeometry(0.055, 12, 10), glossyCandyMat('#EC4899'));
  nose.position.set(0, -0.02, 0.235);
  head.add(nose);

  const mouth = new THREE.Mesh(new THREE.BoxGeometry(0.22, 0.06, 0.05), satinMat('#FFFFFF'));
  mouth.position.set(0, -0.1, 0.21);
  head.add(mouth);

  // Extendable UFO Robot Claw Arms
  const makeClawArm = (side: -1 | 1) => {
    const arm = new THREE.Group();
    arm.position.set(side * 0.58, 0.04, 0.1);
    const tube = new THREE.Mesh(new THREE.CylinderGeometry(0.055, 0.055, 0.42, 10), silverM);
    tube.rotation.z = side * -1.1;
    tube.position.set(side * 0.18, -0.05, 0.1);
    arm.add(tube);
    const mitt = new THREE.Mesh(new THREE.SphereGeometry(0.11, 14, 12), ufoM);
    mitt.position.set(side * 0.36, -0.1, 0.18);
    arm.add(mitt);
    return arm;
  };
  const leftArm = makeClawArm(1);
  const rightArm = makeClawArm(-1);
  torso.add(leftArm, rightArm);

  return { root, pelvis, torso, head, leftArm, rightArm, mouth, baseY: 0.25 };
}

export function buildDokinUfo3D(config: RigBuildConfig): ArticulatedRig3D {
  const rig = buildBaikinUfo3D(config);
  const orangeM = satinMat(config.primaryColor || '#F97316');
  const pinkM = glossyCandyMat('#FB7185');
  const greenEye = glowMat('#10B981', 1.2);

  // Replace pilot head inside dome with single-horn Dokin-chan
  while (rig.head.children.length > 0) {
    rig.head.remove(rig.head.children[0]);
  }
  const face = new THREE.Mesh(new THREE.SphereGeometry(0.23, 20, 18), orangeM);
  rig.head.add(face);

  const horn = new THREE.Mesh(new THREE.ConeGeometry(0.055, 0.32, 10), pinkM);
  horn.position.set(0, 0.3, 0);
  rig.head.add(horn);

  [-1, 1].forEach((side) => {
    const eye = new THREE.Mesh(new THREE.SphereGeometry(0.06, 12, 10), greenEye);
    eye.position.set(side * 0.095, 0.03, 0.195);
    rig.head.add(eye);
    const blush = new THREE.Mesh(new THREE.SphereGeometry(0.045, 10, 8), pinkM);
    blush.position.set(side * 0.15, -0.04, 0.175);
    rig.head.add(blush);
  });

  const mouth = new THREE.Mesh(new THREE.SphereGeometry(0.055, 12, 10), pinkM);
  mouth.scale.set(1.2, 0.45, 0.5);
  mouth.position.set(0, -0.09, 0.205);
  rig.head.add(mouth);
  rig.mouth = mouth;

  return rig;
}

export function buildDocOck3D(config: RigBuildConfig): ArticulatedRig3D {
  const coatM = satinMat(config.primaryColor || '#15803D');
  const suitM = armorMat(config.secondaryColor || '#475569');
  const tentacleM = chromeMat('#94A3B8');
  const goggleGlow = glowMat(config.accentColor || '#FBBF24', 1.4);

  const root = new THREE.Group();
  const pelvis = new THREE.Group();
  pelvis.position.set(0, 0.94, 0);
  root.add(pelvis);

  const hips = new THREE.Mesh(new THREE.CylinderGeometry(0.24, 0.25, 0.24, 16), suitM);
  pelvis.add(hips);

  const torso = new THREE.Group();
  torso.position.set(0, 0.12, 0);
  pelvis.add(torso);

  const body = new THREE.Mesh(new THREE.CylinderGeometry(0.28, 0.26, 0.62, 18), coatM);
  body.position.set(0, 0.32, 0);
  torso.add(body);

  // 4 Curved Mechanical TubeGeometry Tentacles from Backpack
  const wings = new THREE.Group();
  wings.position.set(0, 0.36, -0.18);
  torso.add(wings);

  const pack = new THREE.Mesh(new THREE.BoxGeometry(0.32, 0.36, 0.14), suitM);
  wings.add(pack);

  const curveDirs: [number, number, number][][] = [
    [[0.12, 0.1, 0], [0.55, 0.55, -0.1], [0.9, 0.72, 0.38]],
    [[-0.12, 0.1, 0], [-0.55, 0.55, -0.1], [-0.9, 0.72, 0.38]],
    [[0.14, -0.08, 0], [0.58, -0.22, 0.05], [0.88, 0.12, 0.45]],
    [[-0.14, -0.08, 0], [-0.58, -0.22, 0.05], [-0.88, 0.12, 0.45]],
  ];
  curveDirs.forEach((pts) => {
    const curve = new THREE.CatmullRomCurve3(pts.map(([x, y, z]) => new THREE.Vector3(x, y, z)));
    const tube = new THREE.Mesh(new THREE.TubeGeometry(curve, 16, 0.048, 10, false), tentacleM);
    wings.add(tube);

    const endPt = pts[pts.length - 1];
    const clawHead = new THREE.Mesh(new THREE.SphereGeometry(0.085, 12, 10), suitM);
    clawHead.position.set(endPt[0], endPt[1], endPt[2]);
    wings.add(clawHead);

    const sensor = new THREE.Mesh(new THREE.SphereGeometry(0.042, 10, 8), goggleGlow);
    sensor.position.set(endPt[0], endPt[1], endPt[2] + 0.075);
    wings.add(sensor);
  });

  // Scientist Head + Amber Goggles + Bowl Hair
  const head = new THREE.Group();
  head.position.set(0, 0.68, 0);
  torso.add(head);

  const skin = new THREE.Mesh(new THREE.SphereGeometry(0.2, 18, 16), satinMat('#FDBA74'));
  head.add(skin);

  const hair = new THREE.Mesh(
    new THREE.SphereGeometry(0.215, 18, 12, 0, Math.PI * 2, 0, Math.PI * 0.48),
    satinMat('#78350F')
  );
  hair.position.set(0, 0.02, -0.01);
  head.add(hair);

  [-1, 1].forEach((side) => {
    const goggle = new THREE.Mesh(new THREE.CylinderGeometry(0.068, 0.068, 0.06, 16), goggleGlow);
    goggle.rotation.x = Math.PI / 2;
    goggle.position.set(side * 0.078, 0.02, 0.18);
    head.add(goggle);
  });

  const mouth = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.024, 0.03), satinMat('#991B1B'));
  mouth.position.set(0, -0.08, 0.185);
  head.add(mouth);

  const makeArm = (side: -1 | 1) => {
    const arm = new THREE.Group();
    arm.position.set(side * 0.34, 0.54, 0);
    const sleeve = new THREE.Mesh(new THREE.CapsuleGeometry(0.075, 0.38, 8, 12), coatM);
    sleeve.position.set(side * 0.04, -0.22, 0.04);
    arm.add(sleeve);
    return arm;
  };
  const leftArm = makeArm(1);
  const rightArm = makeArm(-1);
  torso.add(leftArm, rightArm);

  const makeLeg = (side: -1 | 1) => {
    const leg = new THREE.Group();
    leg.position.set(side * 0.15, -0.06, 0);
    const pant = new THREE.Mesh(new THREE.CapsuleGeometry(0.095, 0.68, 8, 12), suitM);
    pant.position.set(0, -0.42, 0);
    leg.add(pant);
    const shoe = new THREE.Mesh(new THREE.BoxGeometry(0.16, 0.12, 0.28), armorMat('#0F172A'));
    shoe.position.set(0, -0.82, 0.06);
    leg.add(shoe);
    return leg;
  };
  const leftLeg = makeLeg(1);
  const rightLeg = makeLeg(-1);
  pelvis.add(leftLeg, rightLeg);

  return { root, pelvis, torso, head, leftArm, rightArm, leftLeg, rightLeg, wings, mouth, baseY: 0 };
}

export function buildMeowthBalloon3D(config: RigBuildConfig): ArticulatedRig3D {
  const creamM = satinMat(config.secondaryColor || '#FDE68A');
  const goldM = glossyCandyMat('#FACC15');
  const podM = armorMat(config.primaryColor || '#B45309');
  const pinkGlow = glowMat(config.accentColor || '#EC4899', 1.5);
  const darkM = satinMat('#1E293B');

  const root = new THREE.Group();
  const pelvis = new THREE.Group();
  pelvis.position.set(0, 0.62, 0);
  root.add(pelvis);

  const torso = new THREE.Group();
  pelvis.add(torso);

  // Hover Pod Rim
  const pod = new THREE.Mesh(new THREE.CylinderGeometry(0.55, 0.36, 0.34, 22), podM);
  torso.add(pod);
  const trim = new THREE.Mesh(new THREE.TorusGeometry(0.55, 0.04, 10, 26), pinkGlow);
  trim.rotation.x = Math.PI / 2;
  trim.position.set(0, 0.16, 0);
  torso.add(trim);

  // Cat Body & Head with Golden Koban Coin
  const catBody = new THREE.Mesh(new THREE.SphereGeometry(0.26, 18, 16), creamM);
  catBody.position.set(0, 0.32, 0);
  torso.add(catBody);

  const head = new THREE.Group();
  head.position.set(0, 0.72, 0);
  torso.add(head);

  const cranium = new THREE.Mesh(new THREE.SphereGeometry(0.32, 22, 18), creamM);
  cranium.scale.set(1.12, 0.94, 0.94);
  head.add(cranium);

  const koban = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.08, 0.035, 16), goldM);
  koban.rotation.x = Math.PI / 2;
  koban.scale.set(0.75, 1, 1.35);
  koban.position.set(0, 0.14, 0.28);
  head.add(koban);

  [-1, 1].forEach((side) => {
    const ear = new THREE.Mesh(new THREE.ConeGeometry(0.11, 0.26, 6), darkM);
    ear.position.set(side * 0.22, 0.3, -0.02);
    ear.rotation.z = side * -0.45;
    head.add(ear);

    const eye = new THREE.Mesh(new THREE.SphereGeometry(0.055, 12, 10), satinMat('#FFFFFF'));
    eye.position.set(side * 0.12, 0.02, 0.27);
    head.add(eye);
    const slit = new THREE.Mesh(new THREE.BoxGeometry(0.02, 0.075, 0.03), darkM);
    slit.position.set(side * 0.12, 0.02, 0.32);
    head.add(slit);
  });

  const mouth = new THREE.Mesh(new THREE.SphereGeometry(0.06, 12, 10), glossyCandyMat('#F43F5E'));
  mouth.scale.set(1.3, 0.5, 0.5);
  mouth.position.set(0, -0.1, 0.29);
  head.add(mouth);

  const makeArm = (side: -1 | 1) => {
    const arm = new THREE.Group();
    arm.position.set(side * 0.28, 0.42, 0.08);
    const paw = new THREE.Mesh(new THREE.CapsuleGeometry(0.068, 0.2, 8, 12), creamM);
    paw.rotation.z = side * 0.6;
    arm.add(paw);
    return arm;
  };
  const leftArm = makeArm(1);
  const rightArm = makeArm(-1);
  torso.add(leftArm, rightArm);

  return { root, pelvis, torso, head, leftArm, rightArm, mouth, baseY: 0.24 };
}
