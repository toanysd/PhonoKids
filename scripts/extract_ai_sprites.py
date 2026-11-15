import argparse
import glob
import json
import os
from typing import Dict, List, Tuple

import cv2
import numpy as np
from PIL import Image, ImageDraw
from scipy import ndimage

SPRITE_POSES = ['idle', 'speaking', 'attack', 'hit', 'victory']
TEMPLATE_SHEET_SPEC: Dict[str, List[Tuple[str, List[str]]]] = {
    'mecha_lion': [
        ('sheet_mecha_lion_a', ['idle', 'speaking', 'victory']),
        ('sheet_mecha_lion_b', ['attack', 'hit']),
    ],
    'galra_boss': [('sheet_galra_boss', SPRITE_POSES)],
    'robeast_mech': [('sheet_robeast_mech', SPRITE_POSES)],
    'bread_hero': [('sheet_bread_hero', SPRITE_POSES)],
    'spider_hero': [('sheet_spider_hero', SPRITE_POSES)],
    'cosmic_ultra': [('sheet_cosmic_ultra', SPRITE_POSES)],
    'thunder_pet': [('sheet_thunder_pet', SPRITE_POSES)],
    'germ_ufo': [('sheet_germ_ufo', SPRITE_POSES)],
    'dokin_ufo': [('sheet_dokin_ufo', SPRITE_POSES)],
    'goblin_glider': [('sheet_goblin_glider', SPRITE_POSES)],
    'octo_mech': [('sheet_octo_mech', SPRITE_POSES)],
    'alien_baltan': [('sheet_alien_baltan', SPRITE_POSES)],
    'meowth_balloon': [('sheet_meowth_balloon', SPRITE_POSES)],
}

HERO_ORDER = ['mecha_lion', 'bread_hero', 'spider_hero', 'cosmic_ultra', 'thunder_pet']
RIVAL_ORDER = [
    'galra_boss', 'robeast_mech', 'germ_ufo', 'dokin_ufo',
    'goblin_glider', 'octo_mech', 'alien_baltan', 'meowth_balloon',
]


def find_newest_file(search_dirs: List[str], prefix: str) -> str:
    matches: List[str] = []
    for d in search_dirs:
        if not os.path.isdir(d):
            continue
        for ext in ('png', 'jpg', 'jpeg', 'webp'):
            matches.extend(glob.glob(os.path.join(d, f'{prefix}*.{ext}')))
    if not matches:
        raise FileNotFoundError(f'Missing generated asset for prefix={prefix} in {search_dirs}')
    matches.sort(key=lambda p: os.path.getmtime(p), reverse=True)
    return matches[0]


def remove_studio_bg(rgb: np.ndarray) -> np.ndarray:
    """Chroma/flood-fill removal preserving internal whites and clean 2px anti-aliased edges."""
    h, w, _ = rgb.shape
    border = np.concatenate([
        rgb[:6, :, :].reshape(-1, 3),
        rgb[-6:, :, :].reshape(-1, 3),
        rgb[:, :6, :].reshape(-1, 3),
        rgb[:, -6:, :].reshape(-1, 3),
    ], axis=0)
    bg_med = np.median(border, axis=0).astype(np.int16)

    diff = np.max(np.abs(rgb.astype(np.int16) - bg_med), axis=2)
    luma = 0.299 * rgb[:, :, 0] + 0.587 * rgb[:, :, 1] + 0.114 * rgb[:, :, 2]

    # Connected background regions matching border studio color (never pure white highlights)
    cand = (diff <= 28) & (luma < 236)
    labels, num_labels = ndimage.label(cand)

    border_labels = set(np.unique(np.concatenate([
        labels[0, :], labels[-1, :], labels[:, 0], labels[:, -1],
    ]))) - {0}

    is_bg = np.isin(labels, list(border_labels))

    # Remove enclosed studio-grey pockets (between arms/legs) while protecting internal armor/whites
    interior_ids = set(range(1, num_labels + 1)) - border_labels - {0}
    if interior_ids:
        slices = ndimage.find_objects(labels)
        for lid in interior_ids:
            sl = slices[lid - 1]
            if sl is None:
                continue
            comp_mask = labels[sl] == lid
            area = int(comp_mask.sum())
            if area < 35:
                continue
            mean_diff = float(diff[sl][comp_mask].mean())
            mean_luma = float(luma[sl][comp_mask].mean())
            pix = rgb[sl][comp_mask]
            ch_std = float(pix.std(axis=0).max())
            if mean_diff <= 14.0 and ch_std <= 9.0 and mean_luma < 232.0:
                is_bg[sl][comp_mask] = True

    fg_raw = (~is_bg).astype(np.uint8)
    # Purge tiny isolated background-edge dust specs
    fg_lbl, fg_n = ndimage.label(fg_raw)
    if fg_n > 1:
        sizes = np.bincount(fg_lbl.ravel())
        keep = sizes >= 60
        keep[0] = False
        fg_raw = keep[fg_lbl].astype(np.uint8)

    alpha = (fg_raw * 255).astype(np.uint8)

    # Anti-halo attenuation + soft 2px boundary feather
    dilated_bg = ndimage.binary_dilation(alpha == 0, iterations=1)
    edge_outer = dilated_bg & (alpha > 0)
    halo_px = edge_outer & (diff <= 24)
    alpha[halo_px] = np.minimum(alpha[halo_px], 64)

    edge_band = ndimage.binary_dilation(alpha == 0, iterations=2) & ndimage.binary_dilation(alpha > 0, iterations=2)
    blurred = cv2.GaussianBlur(alpha, (3, 3), 0.75)
    alpha[edge_band] = np.minimum(alpha[edge_band], blurred[edge_band])

    rgba = np.dstack([rgb, alpha])
    return rgba


def split_poses(rgba: np.ndarray, num_poses: int) -> List[np.ndarray]:
    """Segment N distinct character bodies using 8-connected components instead of straight vertical cuts."""
    h, w, _ = rgba.shape
    fg = rgba[:, :, 3] > 20
    lbl, num_comp = ndimage.label(fg, structure=np.ones((3, 3), dtype=np.int32))
    if num_comp < num_poses:
        return [rgba[:, (i * w) // num_poses:((i + 1) * w) // num_poses, :].copy() for i in range(num_poses)]

    sizes = np.bincount(lbl.ravel())
    sizes[0] = 0
    top_ids = np.argsort(sizes)[::-1][:num_poses]

    # Sort the N main character bodies left-to-right by X centroid
    bodies: List[Tuple[float, int]] = []
    for cid in top_ids:
        ys, xs = np.where(lbl == cid)
        bodies.append((float(xs.mean()), int(cid)))
    bodies.sort(key=lambda item: item[0])

    # Compute distance map from each body island to cleanly assign attached beams/orbs/tails
    dist_maps = np.stack([ndimage.distance_transform_edt(lbl != cid) for _, cid in bodies], axis=0)
    nearest_idx = np.argmin(dist_maps, axis=0)
    nearest_dist = np.min(dist_maps, axis=0)

    slices = ndimage.find_objects(lbl)
    assigned = np.full((h, w), -1, dtype=np.int32)
    for idx, (_, cid) in enumerate(bodies):
        assigned[lbl == cid] = idx

    # Attach non-body sub-components (like Spider-Man's web or Goblin's orb) only if close to one body
    body_id_set = {cid for _, cid in bodies}
    for cid in range(1, num_comp + 1):
        if cid in body_id_set or sizes[cid] < 95:
            continue
        sl = slices[cid - 1]
        if sl is None:
            continue
        comp_mask = lbl[sl] == cid
        min_d = float(nearest_dist[sl][comp_mask].min())
        if min_d > 26.0:
            continue
        owner_votes = nearest_idx[sl][comp_mask]
        owner = int(np.bincount(owner_votes).argmax())
        assigned[sl][comp_mask] = owner

    result: List[np.ndarray] = []
    for idx in range(num_poses):
        pose_rgba = np.zeros_like(rgba)
        mask_i = assigned == idx
        pose_rgba[mask_i] = rgba[mask_i]
        result.append(pose_rgba)
    return result


def clean_crop_and_place(crops_rgba: List[np.ndarray], out_paths: List[str], canvas_size: int = 512) -> None:
    """Crop each segmented pose cleanly and bottom-align at 488px on 512x512 RGBA."""
    prepared: List[Tuple[np.ndarray, int, int]] = []
    for sub in crops_rgba:
        ys, xs = np.where(sub[:, :, 3] > 16)
        if len(xs) == 0 or len(ys) == 0:
            raise ValueError('Empty sprite crop encountered!')
        tight = sub[ys.min():ys.max() + 1, xs.min():xs.max() + 1]
        prepared.append((tight, tight.shape[1], tight.shape[0]))

    ref_h = float(np.median([h for _, _, h in prepared]))
    shared_scale = 438.0 / ref_h

    for (tight, cw, ch), out_path in zip(prepared, out_paths):
        scale = min(shared_scale, 476.0 / cw, 476.0 / ch)
        nw = max(1, int(round(cw * scale)))
        nh = max(1, int(round(ch * scale)))
        resized = Image.fromarray(tight, 'RGBA').resize((nw, nh), Image.Resampling.LANCZOS)

        canvas = Image.new('RGBA', (canvas_size, canvas_size), (0, 0, 0, 0))
        px = (canvas_size - nw) // 2
        py = max(12, min(488 - nh, (canvas_size - nh) // 2 + 18))
        canvas.paste(resized, (px, py), resized)
        os.makedirs(os.path.dirname(out_path), exist_ok=True)
        canvas.save(out_path, 'WEBP', quality=90, method=6)


def make_contact_sheet(
    template_order: List[str],
    sprites_root: str,
    out_png: str,
    checker_dark: bool = False,
) -> None:
    """Render rows of 5 poses on checkerboard to QA alpha edges and silhouette fidelity."""
    cell = 180
    pad = 12
    label_w = 150
    w = label_w + len(SPRITE_POSES) * (cell + pad) + pad
    h = len(template_order) * (cell + pad) + pad
    bg = Image.new('RGB', (w, h), (30, 41, 59) if checker_dark else (226, 232, 240))
    draw = ImageDraw.Draw(bg)

    c1, c2 = ((45, 55, 72), (58, 70, 90)) if checker_dark else ((241, 245, 249), (218, 226, 236))
    for r, tpl in enumerate(template_order):
        ry = pad + r * (cell + pad)
        draw.text((12, ry + cell // 2 - 6), tpl, fill=(248, 250, 252) if checker_dark else (15, 23, 42))
        for c, pose in enumerate(SPRITE_POSES):
            cx = label_w + c * (cell + pad)
            for ty in range(0, cell, 18):
                for tx in range(0, cell, 18):
                    col = c1 if ((tx // 18 + ty // 18) % 2 == 0) else c2
                    draw.rectangle([cx + tx, ry + ty, cx + tx + 17, ry + ty + 17], fill=col)
            sp_path = os.path.join(sprites_root, tpl, f'{pose}.webp')
            if os.path.exists(sp_path):
                im = Image.open(sp_path).convert('RGBA').resize((cell, cell), Image.Resampling.LANCZOS)
                bg.paste(im, (cx, ry), im)
    os.makedirs(os.path.dirname(out_png), exist_ok=True)
    bg.save(out_png, 'PNG')


def process_all(search_dirs: List[str], app_root: str, qa_dir: str) -> None:
    sprites_root = os.path.join(app_root, 'public', 'assets', 'sprites')
    worlds_root = os.path.join(app_root, 'public', 'assets', 'worlds')
    os.makedirs(sprites_root, exist_ok=True)
    os.makedirs(worlds_root, exist_ok=True)

    for tpl, specs in TEMPLATE_SHEET_SPEC.items():
        all_crops: List[np.ndarray] = []
        all_outs: List[str] = []
        for sheet_prefix, pose_names in specs:
            src_path = find_newest_file(search_dirs, sheet_prefix)
            rgb = np.array(Image.open(src_path).convert('RGB'))
            rgba = remove_studio_bg(rgb)
            cols = split_poses(rgba, len(pose_names))
            for col_img, p_name in zip(cols, pose_names):
                all_crops.append(col_img)
                all_outs.append(os.path.join(sprites_root, tpl, f'{p_name}.webp'))
        clean_crop_and_place(all_crops, all_outs, canvas_size=512)
        print(f'Extracted {tpl}: {len(all_outs)} poses')

    world_imgs: List[Image.Image] = []
    for wid in range(1, 7):
        w_src = find_newest_file(search_dirs, f'raw_world_{wid}')
        im = Image.open(w_src).convert('RGB').resize((1280, 720), Image.Resampling.LANCZOS)
        im.save(os.path.join(worlds_root, f'world_{wid}.webp'), 'WEBP', quality=85, method=6)
        world_imgs.append(im.resize((480, 270), Image.Resampling.LANCZOS))
        print(f'Saved world_{wid}.webp')

    make_contact_sheet(HERO_ORDER, sprites_root, os.path.join(qa_dir, 'qa_heroes_sprites.png'), checker_dark=False)
    make_contact_sheet(RIVAL_ORDER, sprites_root, os.path.join(qa_dir, 'qa_rivals_sprites.png'), checker_dark=True)

    wg = Image.new('RGB', (480 * 3 + 24, 270 * 2 + 18), (15, 23, 42))
    for i, wim in enumerate(world_imgs):
        wg.paste(wim, (6 + (i % 3) * 486, 6 + (i // 3) * 276))
    wg.save(os.path.join(qa_dir, 'qa_worlds_grid.png'), 'PNG')
    print('Saved QA sheets to', qa_dir)


if __name__ == '__main__':
    parser = argparse.ArgumentParser()
    parser.add_argument('--app-root', default=r'd:\AntiGravity_Workspace\apps\englishStudy')
    parser.add_argument('--artifact-dir', default=r'C:\Users\WIN10MST\.gemini\antigravity\brain\f05187d3-5656-489f-99bb-ef819bd199d0')
    args = parser.parse_args()
    dirs = [
        os.path.join(args.artifact_dir, 'scratch', 'raw_sheets'),
        os.path.join(args.artifact_dir, 'scratch', 'raw_worlds'),
        args.artifact_dir,
    ]
    process_all(dirs, args.app_root, os.path.join(args.artifact_dir, 'scratch'))
