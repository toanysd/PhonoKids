import * as THREE from 'three';
import { HeroTemplateType } from '../types/heroGame';

export interface ArticulatedRig3D {
  root: THREE.Group;
  pelvis: THREE.Group;
  torso: THREE.Group;
  head: THREE.Group;
  leftArm?: THREE.Group;
  rightArm?: THREE.Group;
  leftForearm?: THREE.Group;
  rightForearm?: THREE.Group;
  leftLeg?: THREE.Group;
  rightLeg?: THREE.Group;
  wings?: THREE.Group;
  weapon?: THREE.Group;
  mouth?: THREE.Object3D;
  auraGroup?: THREE.Group;
  extraAnimNodes?: THREE.Object3D[];
  baseY: number;
}

export interface RigBuildConfig {
  template: HeroTemplateType;
  primaryColor: string;
  secondaryColor: string;
  accentColor: string;
}
