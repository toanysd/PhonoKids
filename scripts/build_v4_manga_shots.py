#!/usr/bin/env python3
"""Build 14 multi-angle Manga Battle WebPs in public/assets/comic/manga/ from generated artifact images."""
import argparse
import os
import sys
from typing import Dict, List, Optional, Tuple

from PIL import Image, ImageDraw, ImageOps

APP_ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), '..'))
DEFAULT_ARTIFACT_DIR = r'C:\Users\遠藤 健一\.gemini\antigravity\brain\f05187d3-5656-489f-99bb-ef819bd199d0'

TARGET_SPECS: List[Tuple[str, Tuple[int, int], Tuple[float, float]]] = [
    ('cutin_hesman', (1200, 450), (0.5, 0.45)),
    ('cutin_anpanman', (1200, 450), (0.5, 0.45)),
    ('cutin_spiderman', (1200, 450), (0.5, 0.45)),
    ('cutin_ultraman', (1200, 450), (0.5, 0.45)),
    ('splash_hesman', (960, 1280), (0.5, 0.25)),
    ('splash_anpanman', (960, 1280), (0.5, 0.3)),
    ('splash_spiderman', (960, 1280), (0.5, 0.28)),
    ('splash_ultraman', (960, 1280), (0.5, 0.25)),
    ('menace_galra_boss', (800, 800), (0.5, 0.35)),
    ('menace_robeast_mech', (800, 800), (0.5, 0.35)),
    ('menace_germ_ufo', (800, 800), (0.5, 0.4)),
    ('menace_goblin_glider', (800, 800), (0.5, 0.35)),
    ('menace_octo_mech', (800, 800), (0.5, 0.35)),
    ('menace_alien_baltan', (800, 800), (0.5, 0.35)),
]


def find_latest_image(src_dirs: List[str], prefix: str) -> Optional[str]:
    candidates: List[str] = []
    for d in src_dirs:
        if not d or not os.path.isdir(d):
            continue
        for fn in os.listdir(d):
            low = fn.lower()
            if (fn == f'{prefix}.jpg' or fn.startswith(f'{prefix}_')) and low.endswith(('.png', '.jpg', '.jpeg', '.webp')):
                candidates.append(os.path.join(d, fn))
    if not candidates:
        return None
    candidates.sort(key=os.path.getmtime, reverse=True)
    return candidates[0]


def synthesize_spider_cutin_from_splash(splash_path: str) -> Image.Image:
    """Derive 1200x450 horizontal eye cut-in from splash_spiderman upper comic sky & cowl crop."""
    im = Image.open(splash_path).convert('RGB')
    w, h = im.size
    crop = im.crop((int(w * 0.14), int(h * 0.14), int(w * 0.86), int(h * 0.36)))
    return ImageOps.fit(crop, (1200, 450), method=Image.Resampling.LANCZOS, centering=(0.5, 0.5))


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument('--app-root', default=APP_ROOT)
    parser.add_argument('--src-dir', action='append', default=[DEFAULT_ARTIFACT_DIR])
    args = parser.parse_args()

    out_dir = os.path.join(args.app_root, 'public', 'assets', 'comic', 'manga')
    os.makedirs(out_dir, exist_ok=True)

    missing: List[str] = []
    built: Dict[str, str] = {}

    for key, size, centering in TARGET_SPECS:
        src = find_latest_image(args.src_dir, key)
        if src:
            im = Image.open(src).convert('RGB')
            if key.startswith('menace_'):
                mw, mh = im.size
                im = im.crop((int(mw * 0.05), int(mh * 0.05), int(mw * 0.95), int(mh * 0.95)))
            out_im = ImageOps.fit(im, size, method=Image.Resampling.LANCZOS, centering=centering)
        elif key == 'cutin_spiderman':
            splash_src = find_latest_image(args.src_dir, 'splash_spiderman')
            if not splash_src:
                missing.append(key)
                continue
            out_im = synthesize_spider_cutin_from_splash(splash_src)
        else:
            missing.append(key)
            continue

        out_path = os.path.join(out_dir, f'{key}.webp')
        out_im.save(out_path, 'WEBP', quality=86, method=6)
        built[key] = f'{size[0]}x{size[1]} ({os.path.getsize(out_path)} bytes)'

    for k, info in built.items():
        print(f'OK {k}.webp -> {info}')
    print(f'TOTAL_MANGA_ASSETS={len(built)}/14')

    if missing or len(built) != 14:
        print(f'MISSING={missing}', file=sys.stderr)
        return 1
    return 0


if __name__ == '__main__':
    sys.exit(main())
