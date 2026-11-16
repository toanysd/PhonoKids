#!/usr/bin/env python3
"""Synthesize native US Studio voice bank (24kHz 48kbps mono MP3) for PhonoKids v4."""
import asyncio
import hashlib
import json
import os
import re
import shutil
import subprocess
import sys
import tempfile
from pathlib import Path
from typing import Dict, List, Tuple

import edge_tts

if hasattr(sys.stdout, 'reconfigure'):
    sys.stdout.reconfigure(encoding='utf-8', errors='replace')

APP_ROOT = Path(__file__).resolve().parent.parent
VOICE_DIR = APP_ROOT / 'public' / 'assets' / 'audio' / 'voices'
MANIFEST_PATH = APP_ROOT / 'src' / 'data' / 'voiceManifest.json'
FFMPEG_BIN = shutil.which('ffmpeg') or r'C:\ProgramData\chocolatey\bin\ffmpeg.exe'

ROLE_VOICES: Dict[str, Tuple[str, str, str]] = {
    'teacher': ('en-US-AvaNeural', '-4%', '+0Hz'),
    'kid': ('en-US-AnaNeural', '-4%', '+0Hz'),
    'hero': ('en-US-GuyNeural', '-4%', '+0Hz'),
    'villain': ('en-US-GuyNeural', '-4%', '+0Hz'),
}

EMOJI_RE = re.compile(r'[\U0001F000-\U0001FAFF\u2600-\u27BF\uFE0F\u200D]')
VIET_RE = re.compile(r'[à-ỹÀ-Ỹ]')

SOUND_LAB_AND_MAP_WORDS = [
    'sun', 'zoo', 'ship', 'chick', 'think', 'pig', 'ball', 'top',
    'dog', 'cat', 'goat', 'fish', 'van', 'moon', 'nose', 'lion',
    'rabbit', 'apple', 'egg', 'igloo', 'octopus', 'up', 'bee',
    'star', 'sock', 'snake', 'ant', 'hat', 'pan', 'pen', 'pup',
    'ten', 'tent', 'train', 'milk', 'map', 'mouse', 'shell', 'dish',
]

BOSS_PHRASES = [
    'Super Sun',
    'Happy Cat',
    'Pink Pig',
    'Toy Train',
    'Magic Moon',
    'Shiny Ship',
]

PROMPTS_AND_FEEDBACK = [
    'Listen and say',
    'Hear it',
    'Say it',
    'Tap the picture',
    'Build the word',
    'Wake the star!',
    'Awesome!',
    'Great job!',
    'Good try!',
    'Try again!',
]

HERO_LINES = [
    'I am Hesman! Let us speak English!',
    'Blazing Sword!',
    'Hi friend! Anpanman is here!',
    'An Punch!',
    'Hey buddy! Ready to swing and speak?',
    'Web Blast!',
    'Ultraman ready! Shine bright!',
    'Specium Ray!',
]

FALLBACK_READING_LINES = [
    'The sun is hot.',
    'Look at the big star.',
    'A red cat has a hat.',
    'A pink pig jumps up.',
    'My blue train goes fast.',
    'A shiny ship sails out.',
]


def normalize_lookup(text: str) -> str:
    cleaned = EMOJI_RE.sub(' ', text or '')
    cleaned = cleaned.replace('\u2018', "'").replace('\u2019', "'")
    cleaned = cleaned.replace('\u201c', '"').replace('\u201d', '"')
    return re.sub(r'\s+', ' ', cleaned).strip().lower()


def clean_speech_text(text: str) -> str:
    cleaned = EMOJI_RE.sub(' ', text or '')
    cleaned = cleaned.replace('\u2018', "'").replace('\u2019', "'")
    cleaned = cleaned.replace('\u201c', '"').replace('\u201d', '"')
    return re.sub(r'\s+', ' ', cleaned).strip()


def extract_dynamic_ts_texts() -> List[Tuple[str, str]]:
    """Extract live English strings from core-mic's v4 TypeScript data files if present."""
    data_dir = APP_ROOT / 'src' / 'data'
    has_sound_lab = (data_dir / 'soundLabData.ts').is_file()
    has_reading = (data_dir / 'readingPlanetData.ts').is_file()
    has_game = (data_dir / 'comicGameData.ts').is_file()
    if not (has_sound_lab or has_reading or has_game):
        return []

    esbuild_cmd = APP_ROOT / 'node_modules' / '.bin' / ('esbuild.cmd' if os.name == 'nt' else 'esbuild')
    if not esbuild_cmd.is_file():
        return []

    lines: List[str] = ['const items: Array<{ role: string; text: string }> = [];']
    lines.append('const add = (role: string, text?: string) => { if (text && text.trim()) items.push({ role, text: text.trim() }); };')

    if has_sound_lab:
        lines.insert(0, "import * as soundLabMod from './src/data/soundLabData';")
        lines.append(
            "for (const ph of ((soundLabMod as any).SOUND_LAB_PHONEMES || (soundLabMod as any).PHONEME_ARTICULATIONS || [])) {"
            " if (ph?.exampleWord) { add('teacher', ph.exampleWord); add('kid', ph.exampleWord); }"
            " }"
        )
    if has_reading:
        lines.insert(0, "import * as readingMod from './src/data/readingPlanetData';")
        lines.append(
            "for (const bk of ((readingMod as any).READING_PLANET_BOOKS || (readingMod as any).COMIC_BOOKS || [])) {"
            " add('teacher', bk.titleEn);"
            " add('teacher', bk.quizQuestionEn);"
            " for (const pg of (bk.pages || [])) {"
            "  add('teacher', pg.textEn); add('kid', pg.textEn);"
            "  add('teacher', pg.targetWord); add('kid', pg.targetWord);"
            " }"
            "}"
        )
    if has_game:
        lines.insert(0, "import * as gameMod from './src/data/comicGameData';")
        lines.append(
            "for (const h of ((gameMod as any).COMIC_HEROES || [])) {"
            " add('hero', h.greetingEn); add('hero', h.attackCalloutEn);"
            "}"
            "for (const v of ((gameMod as any).COMIC_VILLAINS || [])) {"
            " add('villain', v.tauntEn); add('hero', v.tauntEn);"
            "}"
            "for (const w of ((gameMod as any).STORY_WORLDS || [])) {"
            " add('teacher', w.nameEn);"
            " for (const st of (w.stages || [])) {"
            "  add('teacher', st.displayWord); add('kid', st.displayWord);"
            " }"
            "}"
            "for (const dq of ((gameMod as any).DAILY_QUESTS || [])) {"
            " add('teacher', dq.titleEn);"
            "}"
        )
    lines.append('console.log(JSON.stringify(items));')

    app_entry = APP_ROOT / '_tmp_collect_v4_voices.ts'
    try:
        app_entry.write_text('\n'.join(lines), encoding='utf-8')
        with tempfile.TemporaryDirectory() as tmpdir:
            out_file = Path(tmpdir) / 'collect.mjs'
            subprocess.run(
                [str(esbuild_cmd), str(app_entry), '--bundle', '--platform=node', '--format=esm', f'--outfile={out_file}'],
                cwd=str(APP_ROOT),
                check=True,
                capture_output=True,
                text=True,
            )
            res = subprocess.run(
                ['node', str(out_file)],
                cwd=str(APP_ROOT),
                check=True,
                capture_output=True,
                text=True,
                encoding='utf-8',
            )
            raw_items = json.loads(res.stdout)
            print(f'Extracted {len(raw_items)} dynamic TS voice strings')
            return [(it['role'], it['text']) for it in raw_items]
    except Exception as err:
        print(f'Warning: dynamic TS extraction skipped ({err})')
        return []
    finally:
        if app_entry.exists():
            app_entry.unlink()


def build_jobs() -> List[Tuple[str, str, str]]:
    dedup: Dict[str, Tuple[str, str]] = {}

    def register(role: str, text: str) -> None:
        clean = clean_speech_text(text)
        norm = normalize_lookup(clean)
        if not norm or VIET_RE.search(clean) or role not in ROLE_VOICES:
            return
        key = f'{role}|{norm}'
        if key not in dedup:
            dedup[key] = (role, clean)

    for w in SOUND_LAB_AND_MAP_WORDS:
        register('teacher', w)
        register('kid', w)
    for phrase in BOSS_PHRASES:
        register('teacher', phrase)
        register('kid', phrase)
    for prompt in PROMPTS_AND_FEEDBACK:
        register('teacher', prompt)
        register('kid', prompt)
    for line in HERO_LINES:
        register('hero', line)
    for line in FALLBACK_READING_LINES:
        register('teacher', line)
        register('kid', line)

    for role, text in extract_dynamic_ts_texts():
        register(role, text)

    return [(k, v[0], v[1]) for k, v in sorted(dedup.items())]


async def synth_one(sem: asyncio.Semaphore, key: str, role: str, clean: str) -> Tuple[str, Dict[str, str]]:
    voice_id, rate, pitch = ROLE_VOICES[role]
    digest = hashlib.sha1(key.encode('utf-8')).hexdigest()[:10]
    fname = f'{role}_{digest}.mp3'
    raw_path = VOICE_DIR / f'_raw_{fname}'
    out_path = VOICE_DIR / fname

    async with sem:
        for attempt in range(4):
            try:
                comm = edge_tts.Communicate(clean, voice_id, rate=rate, pitch=pitch)
                await comm.save(str(raw_path))
                break
            except Exception as err:
                if attempt == 3:
                    raise RuntimeError(f'Failed TTS for {key}: {err}') from err
                await asyncio.sleep(0.8 * (attempt + 1))

    subprocess.run(
        [FFMPEG_BIN, '-y', '-loglevel', 'error', '-i', str(raw_path), '-ar', '24000', '-b:a', '48k', '-ac', '1', str(out_path)],
        check=True,
    )
    if raw_path.exists():
        raw_path.unlink()
    return key, {'f': f'/assets/audio/voices/{fname}'}


async def main_async() -> None:
    VOICE_DIR.mkdir(parents=True, exist_ok=True)
    for old_f in VOICE_DIR.iterdir():
        if old_f.suffix == '.mp3':
            old_f.unlink()

    jobs = build_jobs()
    print(f'Synthesizing {len(jobs)} voice clips...')
    sem = asyncio.Semaphore(3)
    results = await asyncio.gather(*(synth_one(sem, k, r, t) for k, r, t in jobs))
    manifest = dict(sorted(results, key=lambda kv: kv[0]))
    MANIFEST_PATH.parent.mkdir(parents=True, exist_ok=True)
    with open(MANIFEST_PATH, 'w', encoding='utf-8') as f:
        json.dump(manifest, f, ensure_ascii=False, separators=(',', ':'))
    print(f'Synthesized {len(manifest)} native US v4 clips -> {MANIFEST_PATH}')


if __name__ == '__main__':
    asyncio.run(main_async())
