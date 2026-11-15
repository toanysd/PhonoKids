import * as THREE from 'three';
import { ArticulatedRig3D, RigBuildConfig } from '../types3D';
import {
  armorMat,
  buildExtrudedPolygon,
  buildFivePointStar3D,
  buildLionHead3D,
  chromeMat,
  glowMat,
  rBox,
} from '../materialsAndGeo';

/** Straight-edged blocky GoLion wing: red outer trapezoidal frame + white/silver inner panel. */
function buildBlockyGolionWing(
  side: -1 | 1,
  redMat: THREE.Material,
  whiteMat: THREE.Material,
  darkMat: THREE.Material
): THREE.Group {
  const wing = new THREE.Group();

  const outerFrame = buildExtrudedPolygon(
    [[side * -0.105, -0.02], [side * 0.105, -0.02], [side * 0.135, 0.88], [side * -0.11, 0.78]],
    0.046,
    0.008,
    redMat
  );
  wing.add(outerFrame);

  // Thicker in Z so the recessed white panel sits flush-proud on both front and back faces
  const innerPanel = buildExtrudedPolygon(
    [[side * -0.056, 0.14], [side * 0.068, 0.14], [side * 0.082, 0.68], [side * -0.058, 0.62]],
    0.058,
    0.004,
    whiteMat
  );
  wing.add(innerPanel);

  const rootJoint = new THREE.Mesh(rBox(0.16, 0.1, 0.072, 0.01), darkMat);
  rootJoint.position.set(0, 0.03, 0);
  wing.add(rootJoint);

  wing.position.set(side * 0.19, 0.02, 0);
  wing.rotation.z = side * -0.72;
  return wing;
}

/** Canonical short angular yellow L-bracket ear crest with blunt rectangular tip. */
function buildYellowLEarCrest(side: -1 | 1, goldMat: THREE.Material, darkMat: THREE.Material): THREE.Group {
  const ear = new THREE.Group();
  const hinge = new THREE.Mesh(rBox(0.036, 0.072, 0.066, 0.008), darkMat);
  hinge.position.set(0, 0.005, 0);
  const horizontalBar = new THREE.Mesh(rBox(0.092, 0.048, 0.054, 0.008), goldMat);
  horizontalBar.position.set(side * 0.046, -0.004, 0);
  const verticalBlock = new THREE.Mesh(rBox(0.052, 0.145, 0.056, 0.008), goldMat);
  verticalBlock.position.set(side * 0.084, 0.056, 0);
  ear.add(hinge, horizontalBar, verticalBlock);
  return ear;
}

/** White-rimmed 4-quadrant GoLion chest shield with golden cross emblem. */
function buildGolionChestShield(
  whiteMat: THREE.Material,
  blueMat: THREE.Material,
  redMat: THREE.Material,
  greenMat: THREE.Material,
  goldMat: THREE.Material,
  darkMat: THREE.Material
): THREE.Group {
  const shield = new THREE.Group();
  const outerRim = buildExtrudedPolygon(
    [[-0.148, 0.145], [0.148, 0.145], [0.142, -0.035], [0, -0.175], [-0.142, -0.035]],
    0.036,
    0.01,
    whiteMat
  );
  const backing = buildExtrudedPolygon(
    [[-0.118, 0.118], [0.118, 0.118], [0.112, -0.028], [0, -0.142], [-0.112, -0.028]],
    0.038,
    0.004,
    darkMat
  );
  backing.position.set(0, 0, 0.005);
  shield.add(outerRim, backing);

  const quadGeo = new THREE.BoxGeometry(0.098, 0.095, 0.02);
  (
    [
      [-0.055, 0.055, blueMat],
      [0.055, 0.055, redMat],
      [-0.055, -0.045, whiteMat],
      [0.055, -0.045, greenMat],
    ] as [number, number, THREE.Material][]
  ).forEach(([qx, qy, qMat]) => {
    const quad = new THREE.Mesh(quadGeo, qMat);
    quad.position.set(qx, qy, 0.02);
    shield.add(quad);
  });

  // Raised golden cross & mini crown at top
  const crossV = new THREE.Mesh(new THREE.BoxGeometry(0.034, 0.21, 0.026), goldMat);
  crossV.position.set(0, -0.005, 0.028);
  const crossH = new THREE.Mesh(new THREE.BoxGeometry(0.16, 0.034, 0.026), goldMat);
  crossH.position.set(0, 0.01, 0.028);
  const miniCrown = new THREE.Mesh(new THREE.BoxGeometry(0.068, 0.03, 0.028), goldMat);
  miniCrown.position.set(0, 0.092, 0.029);
  shield.add(crossV, crossH, miniCrown);
  return shield;
}

/** Silver circular mechanical wheel disc shared on shoulders and ankles. */
function buildWheelDisc(radius: number, height: number, silverMat: THREE.Material, darkMat: THREE.Material): THREE.Group {
  const disc = new THREE.Group();
  const rim = new THREE.Mesh(new THREE.CylinderGeometry(radius, radius, height, 18), silverMat);
  rim.rotation.x = Math.PI / 2;
  const hub = new THREE.Mesh(new THREE.CylinderGeometry(radius * 0.45, radius * 0.45, height + 0.01, 14), darkMat);
  hub.rotation.x = Math.PI / 2;
  disc.add(rim, hub);
  return disc;
}

export function buildHesman3D(config: RigBuildConfig): ArticulatedRig3D {
  const isDefault =
    config.primaryColor.toUpperCase() === '#111827' ||
    config.primaryColor.toUpperCase() === '#1E293B';

  const blackArmor = armorMat('#111827');
  const vChestMat = armorMat(isDefault ? '#DC2626' : config.primaryColor);
  const goldMat = armorMat('#FACC15');
  const whiteArmor = armorMat('#F8FAFC');
  const blueMat = armorMat('#1D4ED8');
  const darkBrowBlueMat = armorMat('#1E3A8A');
  const yellowLionMat = armorMat('#EAB308');
  const redLionMat = armorMat('#DC2626');
  const greenLionMat = armorMat('#15803D');
  const silverM = chromeMat('#E2E8F0');

  const root = new THREE.Group();
  const pelvis = new THREE.Group();
  pelvis.position.set(0, 1.0, 0);
  root.add(pelvis);

  // Matte black blocky pelvis briefs
  const groin = new THREE.Mesh(rBox(0.45, 0.21, 0.29, 0.024), blackArmor);
  groin.position.set(0, 0, 0);
  pelvis.add(groin);

  // ============ TORSO (Red V-Chest, 4-Quadrant Cross Shield, Star Belt) ============
  const torso = new THREE.Group();
  torso.position.set(0, 0.12, 0);
  pelvis.add(torso);

  // Silver segmented belt + yellow side blocks + black/gold square star buckle
  const belt = new THREE.Mesh(rBox(0.49, 0.115, 0.3, 0.018), silverM);
  belt.position.set(0, 0.05, 0);
  torso.add(belt);

  const beltRedTrim = new THREE.Mesh(new THREE.BoxGeometry(0.24, 0.028, 0.315), redLionMat);
  beltRedTrim.position.set(0, -0.005, 0.005);
  torso.add(beltRedTrim);

  [-1, 1].forEach((side) => {
    const beltYellowSlot = new THREE.Mesh(new THREE.BoxGeometry(0.082, 0.058, 0.03), goldMat);
    beltYellowSlot.position.set(side * 0.15, 0.05, 0.148);
    torso.add(beltYellowSlot);
  });

  const buckleFrame = new THREE.Mesh(rBox(0.145, 0.135, 0.04, 0.012), goldMat);
  buckleFrame.position.set(0, 0.052, 0.155);
  const buckleBg = new THREE.Mesh(rBox(0.112, 0.102, 0.044, 0.008), blackArmor);
  buckleBg.position.set(0, 0.052, 0.158);
  const buckleStar = buildFivePointStar3D(0.05, 0.022, 0.022, '#FACC15');
  buckleStar.position.set(0, 0.052, 0.184);
  torso.add(buckleFrame, buckleBg, buckleStar);

  // Silver angular waist + black rib core + broad chest core
  const waistSilver = new THREE.Mesh(rBox(0.44, 0.19, 0.27, 0.02), whiteArmor);
  waistSilver.position.set(0, 0.2, 0);
  torso.add(waistSilver);

  const upperChest = new THREE.Mesh(rBox(0.84, 0.44, 0.36, 0.032), blackArmor);
  upperChest.position.set(0, 0.5, 0);
  torso.add(upperChest);

  // Broad blocky Red V-Chest plate
  const vChest = buildExtrudedPolygon(
    [[-0.42, 0.21], [-0.14, 0.21], [0, 0.05], [0.14, 0.21], [0.42, 0.21], [0.25, -0.19], [0, -0.3], [-0.25, -0.19]],
    0.095,
    0.018,
    vChestMat
  );
  vChest.position.set(0, 0.48, 0.188);
  torso.add(vChest);

  const chestShield = buildGolionChestShield(whiteArmor, blueMat, redLionMat, greenLionMat, goldMat, blackArmor);
  chestShield.position.set(0, 0.49, 0.252);
  torso.add(chestShield);

  // ============ BLOCKY RED-AND-WHITE RECTANGULAR V-WINGS ============
  const wings = new THREE.Group();
  wings.position.set(0, 0.56, -0.19);
  torso.add(wings);

  const backPack = new THREE.Mesh(rBox(0.36, 0.3, 0.14, 0.02), blackArmor);
  backPack.position.set(0, -0.02, 0.02);
  wings.add(
    backPack,
    buildBlockyGolionWing(-1, redLionMat, whiteArmor, blackArmor),
    buildBlockyGolionWing(1, redLionMat, whiteArmor, blackArmor)
  );

  // ============ BLACK LION HELMET (Yellow L-Ears, Silver Snout Brow) ============
  const head = new THREE.Group();
  head.position.set(0, 0.78, 0.02);
  torso.add(head);

  const neck = new THREE.Mesh(new THREE.CylinderGeometry(0.11, 0.13, 0.14, 14), silverM);
  neck.position.set(0, 0.04, 0);
  head.add(neck);

  const helmetCrown = new THREE.Mesh(rBox(0.37, 0.24, 0.35, 0.028), blackArmor);
  helmetCrown.position.set(0, 0.3, -0.01);
  const helmetBack = new THREE.Mesh(rBox(0.35, 0.34, 0.18, 0.022), blackArmor);
  helmetBack.position.set(0, 0.2, -0.1);
  const chinGuard = new THREE.Mesh(rBox(0.3, 0.08, 0.22, 0.016), blackArmor);
  chinGuard.position.set(0, 0.09, 0.05);
  head.add(helmetCrown, helmetBack, chinGuard);

  // Folded silver/white lion snout over the brow with horizontal vent slits
  const crownSnout = new THREE.Mesh(rBox(0.2, 0.085, 0.16, 0.016), silverM);
  crownSnout.position.set(0, 0.355, 0.125);
  const crownNose = new THREE.Mesh(new THREE.BoxGeometry(0.065, 0.032, 0.04), blackArmor);
  crownNose.position.set(0, 0.375, 0.195);
  head.add(crownSnout, crownNose);

  [-1, 1].forEach((side) => {
    const lionEye = new THREE.Mesh(new THREE.BoxGeometry(0.072, 0.038, 0.036), glowMat('#FACC15', 1.1));
    lionEye.position.set(side * 0.122, 0.345, 0.152);
    lionEye.rotation.z = side * 0.18;
    head.add(lionEye);

    const cheekGuard = new THREE.Mesh(rBox(0.055, 0.18, 0.18, 0.01), blackArmor);
    cheekGuard.position.set(side * 0.155, 0.21, 0.04);
    head.add(cheekGuard);

    const redCheekTrim = new THREE.Mesh(new THREE.BoxGeometry(0.02, 0.085, 0.03), redLionMat);
    redCheekTrim.position.set(side * 0.175, 0.21, 0.115);
    head.add(redCheekTrim);

    // Blocky angular yellow L-shaped mechanical ear brackets
    const ear = buildYellowLEarCrest(side as -1 | 1, goldMat, blackArmor);
    ear.position.set(side * 0.175, 0.24, 0.02);
    head.add(ear);
  });

  // Dark blue upper brow + recessed chiseled silver face with yellow eyes
  const browPlate = new THREE.Mesh(rBox(0.22, 0.06, 0.06, 0.01), darkBrowBlueMat);
  browPlate.position.set(0, 0.265, 0.148);
  head.add(browPlate);

  const facePlate = new THREE.Mesh(rBox(0.23, 0.19, 0.17, 0.022), silverM);
  facePlate.position.set(0, 0.185, 0.075);
  const nose = new THREE.Mesh(new THREE.BoxGeometry(0.032, 0.068, 0.04), silverM);
  nose.position.set(0, 0.188, 0.172);
  head.add(facePlate, nose);

  [-1, 1].forEach((side) => {
    const eye = new THREE.Mesh(new THREE.BoxGeometry(0.056, 0.028, 0.028), glowMat('#FACC15', 1.5));
    eye.position.set(side * 0.054, 0.222, 0.158);
    head.add(eye);
  });

  const mouth = new THREE.Mesh(new THREE.BoxGeometry(0.082, 0.022, 0.028), glowMat('#E2E8F0', 0.6));
  mouth.position.set(0, 0.138, 0.158);
  head.add(mouth);

  // ============ RIGHT ARM (Viewer Left): RED LION + TWIN-PRONGED SWORD ============
  const rightArm = new THREE.Group();
  rightArm.position.set(-0.56, 0.62, 0);
  torso.add(rightArm);

  const redShoulder = new THREE.Mesh(rBox(0.29, 0.3, 0.29, 0.026), redLionMat);
  redShoulder.position.set(-0.04, -0.02, 0);
  rightArm.add(redShoulder);

  // Twin circular silver wheel discs on Red Lion shoulder
  const rWheelUpper = buildWheelDisc(0.07, 0.04, silverM, blackArmor);
  rWheelUpper.position.set(-0.09, 0.05, 0.145);
  const rWheelLower = buildWheelDisc(0.062, 0.04, silverM, blackArmor);
  rWheelLower.position.set(-0.01, -0.06, 0.145);
  rightArm.add(rWheelUpper, rWheelLower);

  const rBicep = new THREE.Mesh(new THREE.CylinderGeometry(0.092, 0.092, 0.24, 14), silverM);
  rBicep.position.set(-0.04, -0.26, 0);
  rightArm.add(rBicep);

  const rightForearm = new THREE.Group();
  rightForearm.position.set(-0.04, -0.38, 0.02);
  rightArm.add(rightForearm);

  const redLionHand = buildLionHead3D('#DC2626', '#FACC15', 0.86);
  redLionHand.rotation.x = Math.PI / 2 - 0.18;
  redLionHand.position.set(0, -0.18, 0.04);
  rightForearm.add(redLionHand);

  const redArmCrest = new THREE.Mesh(rBox(0.11, 0.11, 0.04, 0.008), goldMat);
  redArmCrest.position.set(0, -0.08, 0.125);
  rightForearm.add(redArmCrest);

  // Blazing Sword: straight silver broadsword with twin upper prongs & winged crossguard
  const weapon = new THREE.Group();
  weapon.position.set(-0.06, -0.34, 0.14);
  weapon.rotation.x = Math.PI / 2 - 0.65;
  weapon.rotation.z = 0.34;
  rightForearm.add(weapon);

  const grip = new THREE.Mesh(new THREE.CylinderGeometry(0.026, 0.026, 0.22, 10), blackArmor);
  const crossguard = new THREE.Mesh(new THREE.BoxGeometry(0.28, 0.055, 0.065), silverM);
  crossguard.position.set(0, 0.11, 0);
  weapon.add(grip, crossguard);

  const blade = buildExtrudedPolygon(
    [[-0.046, 0], [0.046, 0], [0.042, 0.86], [0.11, 1.02], [0.032, 0.96], [0, 1.24], [-0.032, 0.96], [-0.11, 1.02], [-0.042, 0.86]],
    0.022,
    0.006,
    chromeMat('#F8FAFC')
  );
  blade.position.set(0, 0.14, 0);
  weapon.add(blade);

  const swordCoreGlow = new THREE.Mesh(new THREE.BoxGeometry(0.022, 0.96, 0.032), glowMat('#E0F2FE', 0.9));
  swordCoreGlow.position.set(0, 0.66, 0);
  weapon.add(swordCoreGlow);

  // ============ LEFT ARM (Viewer Right): GREEN LION ============
  const leftArm = new THREE.Group();
  leftArm.position.set(0.56, 0.62, 0);
  torso.add(leftArm);

  const greenShoulder = new THREE.Mesh(new THREE.CylinderGeometry(0.145, 0.165, 0.29, 18), greenLionMat);
  greenShoulder.position.set(0.04, -0.02, 0);
  const greenDome = new THREE.Mesh(new THREE.SphereGeometry(0.145, 16, 12), greenLionMat);
  greenDome.position.set(0.04, 0.11, 0);
  const greenWheel = buildWheelDisc(0.068, 0.04, silverM, blackArmor);
  greenWheel.position.set(0.09, 0.04, 0.135);
  leftArm.add(greenShoulder, greenDome, greenWheel);

  const lBicep = new THREE.Mesh(new THREE.CylinderGeometry(0.092, 0.092, 0.24, 14), silverM);
  lBicep.position.set(0.04, -0.26, 0);
  leftArm.add(lBicep);

  const leftForearm = new THREE.Group();
  leftForearm.position.set(0.04, -0.38, 0.02);
  leftArm.add(leftForearm);

  const greenLionHand = buildLionHead3D('#15803D', '#FACC15', 0.86);
  greenLionHand.rotation.x = Math.PI / 2 - 0.18;
  greenLionHand.position.set(0, -0.18, 0.04);
  leftForearm.add(greenLionHand);

  const greenRedFrame = new THREE.Mesh(rBox(0.1, 0.12, 0.036, 0.008), redLionMat);
  greenRedFrame.position.set(0.08, -0.1, 0.09);
  leftForearm.add(greenRedFrame);

  // ============ LEGS: RIGHT = BLUE LION, LEFT = YELLOW LION ============
  const buildLionLeg = (side: -1 | 1, shinHex: string): THREE.Group => {
    const leg = new THREE.Group();
    leg.position.set(side * 0.24, -0.06, 0);

    const thigh = new THREE.Mesh(rBox(0.21, 0.4, 0.23, 0.022), whiteArmor);
    thigh.position.set(0, -0.2, 0);
    const kneeJoint = new THREE.Mesh(new THREE.CylinderGeometry(0.088, 0.088, 0.2, 12), blackArmor);
    kneeJoint.rotation.z = Math.PI / 2;
    kneeJoint.position.set(0, -0.43, 0);
    leg.add(thigh, kneeJoint);

    const shinMat = armorMat(shinHex);
    const shin = new THREE.Mesh(rBox(0.28, 0.44, 0.28, 0.026), shinMat);
    shin.position.set(0, -0.66, 0.01);
    leg.add(shin);

    // Outer silver wheel discs at upper shin and ankle
    const upperWheel = buildWheelDisc(0.072, 0.04, silverM, blackArmor);
    upperWheel.rotation.y = Math.PI / 2;
    upperWheel.position.set(side * 0.145, -0.52, 0);
    const lowerWheel = buildWheelDisc(0.068, 0.04, silverM, blackArmor);
    lowerWheel.rotation.y = Math.PI / 2;
    lowerWheel.position.set(side * 0.145, -0.78, -0.02);
    leg.add(upperWheel, lowerWheel);

    if (side === -1) {
      // Blue Lion right leg: vertical yellow stripe + wide red ankle cuff with yellow square
      const yellowStripe = new THREE.Mesh(rBox(0.068, 0.28, 0.04, 0.008), goldMat);
      yellowStripe.position.set(0, -0.56, 0.145);
      const ankleCuff = new THREE.Mesh(rBox(0.295, 0.115, 0.295, 0.016), redLionMat);
      ankleCuff.position.set(0, -0.77, 0.01);
      const cuffSquare = new THREE.Mesh(rBox(0.095, 0.072, 0.036, 0.008), goldMat);
      cuffSquare.position.set(0, -0.77, 0.155);
      const cuffCenter = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.045, 0.04), blackArmor);
      cuffCenter.position.set(0, -0.77, 0.158);
      leg.add(yellowStripe, ankleCuff, cuffSquare, cuffCenter);
    } else {
      // Yellow Lion left leg: twin red upper blocks + vertical silver shin cannon barrel
      [-0.085, 0.085].forEach((offsetX) => {
        const redBlock = new THREE.Mesh(rBox(0.068, 0.19, 0.055, 0.01), redLionMat);
        redBlock.position.set(offsetX, -0.53, 0.135);
        leg.add(redBlock);
      });
      const cannonCollar = new THREE.Mesh(rBox(0.295, 0.075, 0.295, 0.014), redLionMat);
      cannonCollar.position.set(0, -0.68, 0.01);
      const shinCannon = new THREE.Mesh(new THREE.CylinderGeometry(0.048, 0.058, 0.34, 16), silverM);
      shinCannon.position.set(0, -0.62, 0.155);
      shinCannon.rotation.x = 0.08;
      leg.add(cannonCollar, shinCannon);
    }

    const lionFoot = buildLionHead3D(shinHex, '#FACC15', 0.96);
    lionFoot.position.set(0, -0.82, 0.15);
    const sole = new THREE.Mesh(rBox(0.28, 0.06, 0.4, 0.014), blackArmor);
    sole.position.set(0, -0.94, 0.11);
    leg.add(lionFoot, sole);

    return leg;
  };

  const rightLeg = buildLionLeg(-1, '#1D4ED8');
  const leftLeg = buildLionLeg(1, '#EAB308');
  pelvis.add(rightLeg, leftLeg);

  return {
    root, pelvis, torso, head, leftArm, rightArm,
    leftForearm, rightForearm, leftLeg, rightLeg, wings, weapon, mouth, baseY: 0,
  };
}
