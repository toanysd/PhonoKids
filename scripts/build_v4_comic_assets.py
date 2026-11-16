#!/usr/bin/env python3
"""Recover canonical PhonoKids v4 sprites from git 74d3547, copy v3 word/prop WebPs, and convert scenes."""
import argparse
import io
import os
import shutil
import subprocess
from typing import Dict, List, Optional

from PIL import Image, ImageOps

APP_ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), '..'))
DEFAULT_GIT_REV = '74d3547'

SPRITE_POSES = ['idle', 'speaking', 'attack', 'hit', 'victory']
HERO_TEMPLATES = ['mecha_lion', 'bread_hero', 'spider_hero', 'cosmic_ultra']
VILLAIN_TEMPLATES = [
    'galra_boss',
    'robeast_mech',
    'germ_ufo',
    'goblin_glider',
    'octo_mech',
    'alien_baltan',
]

WORD_NAMES = [
    'sun', 'star', 'sock', 'snake',
    'apple', 'ant', 'cat', 'hat',
    'pig', 'pan', 'pen', 'pup',
    'top', 'ten', 'tent', 'train',
    'moon', 'milk', 'map', 'mouse',
    'ship', 'shell', 'fish', 'dish',
]

PROP_NAMES = ['chest_closed', 'chest_open']

SCENE_SPECS: Dict[str, str] = {
    'hub_space_city': 'portrait',
    'arena_galra': 'balanced',
    'arena_city': 'balanced',
    'arena_cosmos': 'balanced',
    'rocket_room': 'balanced',
}


def recover_sprites_from_git(app_root: str, git_rev: str) -> int:
    comic_sprites = os.path.join(app_root, 'public', 'assets', 'comic', 'sprites')
    count = 0
    for tpl in HERO_TEMPLATES + VILLAIN_TEMPLATES:
        out_dir = os.path.join(comic_sprites, tpl)
        os.makedirs(out_dir, exist_ok=True)
        for pose in SPRITE_POSES:
            git_path = f'public/assets/sprites/{tpl}/{pose}.webp'
            raw_bytes = subprocess.check_output(
                ['git', 'show', f'{git_rev}:{git_path}'],
                cwd=app_root,
            )
            im = Image.open(io.BytesIO(raw_bytes))
            im.verify()
            out_path = os.path.join(out_dir, f'{pose}.webp')
            with open(out_path, 'wb') as f:
                f.write(raw_bytes)
            count += 1
    return count


def copy_v3_words_and_props(app_root: str) -> int:
    v3_root = os.path.join(app_root, 'public', 'assets', 'v3')
    comic_root = os.path.join(app_root, 'public', 'assets', 'comic')
    words_out = os.path.join(comic_root, 'words')
    props_out = os.path.join(comic_root, 'props')
    os.makedirs(words_out, exist_ok=True)
    os.makedirs(props_out, exist_ok=True)

    count = 0
    for w in WORD_NAMES:
        src = os.path.join(v3_root, 'words', f'{w}.webp')
        if not os.path.isfile(src):
            raise FileNotFoundError(f'Missing v3 word sprite: {src}')
        shutil.copy2(src, os.path.join(words_out, f'{w}.webp'))
        count += 1

    for p in PROP_NAMES:
        src = os.path.join(v3_root, 'props', f'{p}.webp')
        if not os.path.isfile(src):
            raise FileNotFoundError(f'Missing v3 prop sprite: {src}')
        shutil.copy2(src, os.path.join(props_out, f'{p}.webp'))
        count += 1

    return count


def find_scene_source(search_dirs: List[str], scene_key: str) -> Optional[str]:
    for d in search_dirs:
        if not d or not os.path.isdir(d):
            continue
        for ext in ('png', 'jpg', 'jpeg', 'webp'):
            exact = os.path.join(d, f'{scene_key}.{ext}')
            if os.path.isfile(exact):
                return exact
        matches = [
            os.path.join(d, f)
            for f in os.listdir(d)
            if f.startswith(scene_key) and f.lower().endswith(('.png', '.jpg', '.jpeg', '.webp'))
        ]
        if matches:
            matches.sort(key=os.path.getmtime, reverse=True)
            return matches[0]
    return None


def convert_scenes(app_root: str, search_dirs: List[str], require_all: bool = False) -> int:
    scenes_out = os.path.join(app_root, 'public', 'assets', 'comic', 'scenes')
    os.makedirs(scenes_out, exist_ok=True)
    count = 0
    for key, pref in SCENE_SPECS.items():
        src = find_scene_source(search_dirs, key)
        if not src:
            if require_all:
                raise FileNotFoundError(f'Missing raw scene for {key} in {search_dirs}')
            continue
        im = Image.open(src).convert('RGB')
        w, h = im.size
        target_size = (1080, 1440) if ((h >= w) or (pref == 'portrait' and h >= w * 0.9)) else (1280, 960)
        fitted = ImageOps.fit(im, target_size, method=Image.Resampling.LANCZOS)
        out_path = os.path.join(scenes_out, f'{key}.webp')
        fitted.save(out_path, 'WEBP', quality=86, method=6)
        print(f'Saved scene {key}.webp ({target_size[0]}x{target_size[1]}) from {os.path.basename(src)}')
        count += 1
    return count


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument('--app-root', default=APP_ROOT)
    parser.add_argument('--git-rev', default=DEFAULT_GIT_REV)
    parser.add_argument('--scenes-dir', action='append', default=[])
    parser.add_argument('--require-scenes', action='store_true')
    args = parser.parse_args()

    sprite_count = recover_sprites_from_git(args.app_root, args.git_rev)
    print(f'Recovered {sprite_count} canonical hero/villain sprites from git {args.git_rev}')

    copied_count = copy_v3_words_and_props(args.app_root)
    print(f'Copied {copied_count} v3 word/prop WebP assets')

    scene_count = convert_scenes(args.app_root, args.scenes_dir, require_all=args.require_scenes)
    print(f'Converted {scene_count}/5 comic scenes')


if __name__ == '__main__':
    main()
