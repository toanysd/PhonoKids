import { HeroTemplateType } from '../types/heroGame';

export type SpritePoseKey = 'idle' | 'speaking' | 'attack' | 'hit' | 'victory';

export interface CharacterSpriteProfile {
  poses: Record<SpritePoseKey, string>;
  nativeFacing: 'right' | 'left';
  defaultPrimaryColor: string;
  /** Lock horizontal flip for asymmetrical combiners (e.g. GoLion Red/Green arms). */
  lockHorizontalSymmetry?: boolean;
}

const makePosePaths = (template: HeroTemplateType): Record<SpritePoseKey, string> => ({
  idle: `/assets/sprites/${template}/idle.webp`,
  speaking: `/assets/sprites/${template}/speaking.webp`,
  attack: `/assets/sprites/${template}/attack.webp`,
  hit: `/assets/sprites/${template}/hit.webp`,
  victory: `/assets/sprites/${template}/victory.webp`,
});

export const CHARACTER_SPRITE_MANIFEST: Record<HeroTemplateType, CharacterSpriteProfile> = {
  mecha_lion: {
    poses: makePosePaths('mecha_lion'),
    nativeFacing: 'right',
    defaultPrimaryColor: '#111827',
    lockHorizontalSymmetry: true,
  },
  bread_hero: {
    poses: makePosePaths('bread_hero'),
    nativeFacing: 'right',
    defaultPrimaryColor: '#DC2626',
  },
  spider_hero: {
    poses: makePosePaths('spider_hero'),
    nativeFacing: 'right',
    defaultPrimaryColor: '#E11D48',
  },
  cosmic_ultra: {
    poses: makePosePaths('cosmic_ultra'),
    nativeFacing: 'right',
    defaultPrimaryColor: '#0284C7',
  },
  thunder_pet: {
    poses: makePosePaths('thunder_pet'),
    nativeFacing: 'right',
    defaultPrimaryColor: '#FACC15',
  },
  galra_boss: {
    poses: makePosePaths('galra_boss'),
    nativeFacing: 'right',
    defaultPrimaryColor: '#581C87',
  },
  robeast_mech: {
    poses: makePosePaths('robeast_mech'),
    nativeFacing: 'right',
    defaultPrimaryColor: '#334155',
  },
  germ_ufo: {
    poses: makePosePaths('germ_ufo'),
    nativeFacing: 'right',
    defaultPrimaryColor: '#4C1D95',
  },
  dokin_ufo: {
    poses: makePosePaths('dokin_ufo'),
    nativeFacing: 'right',
    defaultPrimaryColor: '#EA580C',
  },
  goblin_glider: {
    poses: makePosePaths('goblin_glider'),
    nativeFacing: 'right',
    defaultPrimaryColor: '#16A34A',
  },
  octo_mech: {
    poses: makePosePaths('octo_mech'),
    nativeFacing: 'right',
    defaultPrimaryColor: '#15803D',
  },
  alien_baltan: {
    poses: makePosePaths('alien_baltan'),
    nativeFacing: 'right',
    defaultPrimaryColor: '#0F766E',
  },
  meowth_balloon: {
    poses: makePosePaths('meowth_balloon'),
    nativeFacing: 'right',
    defaultPrimaryColor: '#B45309',
  },
};

export const WORLD_BACKDROP_ASSETS: Record<number, string> = {
  1: '/assets/worlds/world_1.webp',
  2: '/assets/worlds/world_2.webp',
  3: '/assets/worlds/world_3.webp',
  4: '/assets/worlds/world_4.webp',
  5: '/assets/worlds/world_5.webp',
  6: '/assets/worlds/world_6.webp',
};

export function resolveCharacterSpriteUrl(
  template: HeroTemplateType,
  pose: 'idle' | 'move' | 'attack' | 'hit' | 'victory',
  isSpeaking = false
): string {
  const profile = CHARACTER_SPRITE_MANIFEST[template] || CHARACTER_SPRITE_MANIFEST.mecha_lion;
  if (pose === 'attack' || pose === 'hit' || pose === 'victory') {
    return profile.poses[pose];
  }
  if (isSpeaking) {
    return profile.poses.speaking;
  }
  return profile.poses.idle;
}

export function getCharacterPoseUrls(template: HeroTemplateType): string[] {
  const profile = CHARACTER_SPRITE_MANIFEST[template] || CHARACTER_SPRITE_MANIFEST.mecha_lion;
  return Object.values(profile.poses);
}

const COLOR_HUE_MAP: Record<string, number> = {
  '#DC2626': 0,
  '#2563EB': 210,
  '#16A34A': 125,
  '#7C3AED': 270,
  '#E11D48': 345,
  '#0284C7': 200,
  '#FACC15': 48,
  '#581C87': 275,
};

/** Applies subtle CSS hue tint when user customizes armor palette in Studio. */
export function computeCustomColorFilter(
  template: HeroTemplateType,
  primaryColor: string
): string | undefined {
  const profile = CHARACTER_SPRITE_MANIFEST[template];
  if (!profile) return undefined;
  const upper = primaryColor.trim().toUpperCase();
  if (upper === profile.defaultPrimaryColor.toUpperCase()) return undefined;
  const targetHue = COLOR_HUE_MAP[upper];
  const baseHue = COLOR_HUE_MAP[profile.defaultPrimaryColor.toUpperCase()] ?? 0;
  if (targetHue === undefined) return undefined;
  const deg = (targetHue - baseHue + 360) % 360;
  return deg === 0 ? undefined : `hue-rotate(${deg}deg) saturate(1.08)`;
}
