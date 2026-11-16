#!/usr/bin/env python3
"""
Builds the offline-bundled US Native Studio Voice Bank using edge-tts + ffmpeg.
All voices keep pitch='+0Hz' untouched so children hear authentic natural prosody.
Outputs MP3 clips to public/assets/audio/voices/ and src/data/voiceManifest.json.
"""
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

if hasattr(sys.stdout, "reconfigure"):
    sys.stdout.reconfigure(encoding="utf-8", errors="replace")

APP_ROOT = Path(__file__).resolve().parent.parent
OUT_VOICES_DIR = APP_ROOT / "public" / "assets" / "audio" / "voices"
MANIFEST_PATH = APP_ROOT / "src" / "data" / "voiceManifest.json"
FFMPEG_BIN = shutil.which("ffmpeg") or r"C:\ProgramData\chocolatey\bin\ffmpeg.exe"

VOICE_CONFIG: Dict[str, Tuple[str, str]] = {
    "teacher": ("en-US-AvaNeural", "-5%"),
    "kid": ("en-US-AnaNeural", "-4%"),
    "hero": ("en-US-AndrewNeural", "+0%"),
    "villain": ("en-US-GuyNeural", "-2%"),
}

EMOJI_RE = re.compile(r"[\U0001F000-\U0001FAFF\u2600-\u27BF\uFE0F\u200D]")
VIET_RE = re.compile(r"[à-ỹÀ-Ỹ]")


def normalize_lookup(text: str) -> str:
    cleaned = EMOJI_RE.sub(" ", text)
    cleaned = cleaned.replace("\u2018", "'").replace("\u2019", "'")
    cleaned = cleaned.replace("\u201c", '"').replace("\u201d", '"')
    cleaned = re.sub(r"\s+", " ", cleaned).strip().lower()
    return cleaned


def clean_speech_text(text: str) -> str:
    cleaned = EMOJI_RE.sub(" ", text)
    cleaned = cleaned.replace("\u2018", "'").replace("\u2019", "'")
    cleaned = cleaned.replace("\u201c", '"').replace("\u201d", '"')
    return re.sub(r"\s+", " ", cleaned).strip()


def extract_app_texts() -> List[Tuple[str, str]]:
    """Use local esbuild + node to collect exact runtime English texts by role."""
    extractor_ts = r"""
import { ALL_CURRICULUM_UNITS, CURRICULUM_WORLDS } from './src/data/curriculumWorlds';
import { DECODABLE_STORIES } from './src/data/stories';
import { DEFAULT_HEROES, DEFAULT_RIVALS } from './src/data/heroRoster';
import { MINIMAL_PAIRS_DRILLS } from './src/data/minimalPairs';
import { PHONEMES_DATA } from './src/data/phonicsGroups';
import { HERO_COMM_MISSIONS, HERO_COMM_WELCOME } from './src/data/heroCommMissions';

const items: Array<{ role: string; text: string }> = [];
const add = (role: string, text?: string) => {
  if (text && text.trim()) items.push({ role, text: text.trim() });
};

for (const w of CURRICULUM_WORLDS) add('teacher', w.titleEn);

for (const u of ALL_CURRICULUM_UNITS) {
  for (const s of u.cutsceneSlides) {
    add('teacher', s.wordOrPhraseEn);
    add('kid', s.heroActionLineEn);
    const l = s.heroActionLineEn.trim();
    const w = s.wordOrPhraseEn.trim();
    const comb = l && l.toLowerCase() !== w.toLowerCase()
      ? `${/[.!?]$/.test(l) ? l : `${l}.`} ${w}`
      : w || l;
    add('teacher', comb);
    add('kid', comb);
  }
  for (const h of u.targetHuntRounds) {
    add('teacher', h.promptAudioEn);
    for (const o of h.options) add('teacher', o.speakTextEn);
  }
  for (const fg of u.soundForgeRounds || []) {
    add('teacher', fg.targetWord);
    add('teacher', fg.exampleSentenceEn);
  }
  for (const mc of u.mysteryChestRounds || []) {
    add('teacher', mc.promptEn);
    add('teacher', mc.targetWord);
    add('teacher', mc.distractorWord);
  }
  if (u.letterTraceRound) add('teacher', u.letterTraceRound.exampleWordEn);
  for (const e of [...u.echoDuelRounds, ...u.bossRounds]) {
    add('teacher', e.speakerPromptEn);
    add('teacher', e.childTargetEn);
    for (const c of e.qaChoices || []) add('teacher', c.answerEn);
  }
}

for (const h of DEFAULT_HEROES) {
  add('hero', h.greetingEn);
  add('hero', h.attackCalloutEn);
}
for (const r of DEFAULT_RIVALS) add('villain', r.tauntEn);

for (const st of DECODABLE_STORIES) {
  add('teacher', st.title);
  for (const p of st.pages) {
    add('teacher', p.sentence);
    for (const wt of p.wordsTiming || []) add('teacher', wt.cleanWord);
    for (const hs of p.hotspots || []) add('kid', hs.speechText);
  }
  for (const q of st.comprehensionQuestions || []) add('teacher', q.questionEn);
}

for (const mp of MINIMAL_PAIRS_DRILLS) {
  add('teacher', mp.targetWord);
  add('teacher', mp.distractorWord);
  add('teacher', mp.questionPrompt.replace(/\/[^/]+\//g, '').trim());
}

for (const ph of Object.values(PHONEMES_DATA)) {
  if (ph.tprAction?.chantEn) add('teacher', ph.tprAction.chantEn);
  for (const sw of ph.sampleWords || []) add('teacher', sw.word);
}

add('kid', HERO_COMM_WELCOME.en);
for (const m of HERO_COMM_MISSIONS) {
  add('kid', m.promptEn);
  add('hero', m.replyEn);
  add('kid', m.replyEn);
}

const stickers = [
  'Roar! I am Leo! You are doing awesome today!',
  'Meow! The cat sat on the soft mat!',
  'An ant on a warm sunny leaf!',
  'Woof woof! I love running in green grass!',
  'Cluck cluck! The red hen pecks sweet corn!',
  'Splish splash! Swim together in blue sea!',
  'Welcome to the royal garden of books!',
  'Rise and shine! S is for sweet warm Sun!',
  'Sail the ocean to the seven Phonics islands!',
  'Fly high in the sky with cool breeze!',
  'Crunchy sweet red apple, full of vitamins!',
  'You are a true Phonics Master of all 42 sounds!',
  'You are doing great!',
  'Awesome job!',
  'Stretch high like a giraffe!',
];
for (const t of stickers) add('teacher', t);

const blends = ['sat', 'pat', 'tap', 'pin', 'tin', 'cat', 'dog', 'sun'];
for (const w of blends) add('teacher', w);

console.log(JSON.stringify(items));
"""
    esbuild_cmd = APP_ROOT / "node_modules" / ".bin" / ("esbuild.cmd" if os.name == "nt" else "esbuild")
    with tempfile.TemporaryDirectory() as tmpdir:
        entry_file = Path(tmpdir) / "collect.ts"
        out_file = Path(tmpdir) / "collect.mjs"
        # Place temp entry under APP_ROOT so relative ./src imports resolve directly
        app_entry = APP_ROOT / "_tmp_collect_voices.ts"
        try:
            app_entry.write_text(extractor_ts, encoding="utf-8")
            subprocess.run(
                [str(esbuild_cmd), str(app_entry), "--bundle", "--platform=node", "--format=esm", f"--outfile={out_file}"],
                cwd=str(APP_ROOT),
                check=True,
                capture_output=True,
                text=True,
            )
        finally:
            if app_entry.exists():
                app_entry.unlink()
        res = subprocess.run(["node", str(out_file)], cwd=str(APP_ROOT), check=True, capture_output=True, text=True, encoding="utf-8")
        raw_items = json.loads(res.stdout)

    dedup: Dict[str, Tuple[str, str]] = {}
    for item in raw_items:
        role = item["role"]
        raw = clean_speech_text(item["text"])
        norm = normalize_lookup(raw)
        if not norm or VIET_RE.search(raw):
            continue
        key = f"{role}|{norm}"
        if key not in dedup:
            dedup[key] = (role, raw)
    return [(k, v[0], v[1]) for k, v in sorted(dedup.items())]


def align_word_timings(clean_text: str, boundaries: List[Tuple[int, int, str]]) -> List[List[int]]:
    tokens = clean_text.split()
    if not tokens:
        return []
    if not boundaries:
        step = 380
        return [[i * step, (i + 1) * step - 40] for i in range(len(tokens))]

    # Filter alphanumeric boundaries sequentially against whitespace tokens
    clean_bounds = [(s, e, re.sub(r"[^a-z0-9]", "", w.lower())) for (s, e, w) in boundaries if re.sub(r"[^a-z0-9]", "", w.lower())]
    if not clean_bounds:
        step = 380
        return [[i * step, (i + 1) * step - 40] for i in range(len(tokens))]

    result: List[List[int]] = []
    b_idx = 0
    for ti, tok in enumerate(tokens):
        tok_clean = re.sub(r"[^a-z0-9]", "", tok.lower())
        if b_idx >= len(clean_bounds):
            prev_end = result[-1][1] if result else 0
            result.append([prev_end + 30, prev_end + 320])
            continue
        start_ms = clean_bounds[b_idx][0]
        acc = clean_bounds[b_idx][2]
        end_ms = clean_bounds[b_idx][1]
        b_idx += 1
        while b_idx < len(clean_bounds) and len(acc) < len(tok_clean):
            acc += clean_bounds[b_idx][2]
            end_ms = clean_bounds[b_idx][1]
            b_idx += 1
        result.append([max(0, start_ms), max(start_ms + 80, end_ms)])
    return result


async def synth_one(
    sem: asyncio.Semaphore,
    key: str,
    role: str,
    text: str,
    existing_manifest: dict,
    tmpdir: Path,
) -> Tuple[str, dict | None, str | None]:
    hash_id = hashlib.sha1(key.encode("utf-8")).hexdigest()[:10]
    rel_url = f"/assets/audio/voices/{role}_{hash_id}.mp3"
    out_mp3 = OUT_VOICES_DIR / f"{role}_{hash_id}.mp3"

    if out_mp3.exists() and out_mp3.stat().st_size > 500 and key in existing_manifest:
        return key, existing_manifest[key], None

    voice, rate = VOICE_CONFIG[role]
    raw_mp3 = tmpdir / f"{role}_{hash_id}_raw.mp3"

    for attempt in range(4):
        async with sem:
            try:
                comm = edge_tts.Communicate(text, voice, rate=rate, pitch="+0Hz", boundary="WordBoundary")
                audio_chunks = bytearray()
                boundaries: List[Tuple[int, int, str]] = []
                async for chunk in comm.stream():
                    if chunk["type"] == "audio":
                        audio_chunks.extend(chunk["data"])
                    elif chunk["type"] == "WordBoundary":
                        s_ms = round(chunk["offset"] / 10000)
                        e_ms = round((chunk["offset"] + chunk["duration"]) / 10000)
                        boundaries.append((s_ms, e_ms, chunk.get("text", "")))
                if len(audio_chunks) < 200:
                    raise RuntimeError("Empty audio stream")
                raw_mp3.write_bytes(bytes(audio_chunks))
                subprocess.run(
                    [FFMPEG_BIN, "-y", "-loglevel", "error", "-i", str(raw_mp3), "-ac", "1", "-ar", "24000", "-b:a", "48k", str(out_mp3)],
                    check=True,
                )
                timings = align_word_timings(text, boundaries)
                entry = {"f": rel_url}
                if len(tokens := text.split()) > 1:
                    entry["w"] = timings
                return key, entry, None
            except Exception as exc:
                if attempt == 3:
                    return key, None, f"{key}: {exc}"
                await asyncio.sleep(1.2 * (attempt + 1))
    return key, None, f"{key}: max retries"


async def main_async() -> int:
    OUT_VOICES_DIR.mkdir(parents=True, exist_ok=True)
    existing = {}
    if MANIFEST_PATH.exists():
        try:
            existing = json.loads(MANIFEST_PATH.read_text(encoding="utf-8"))
        except Exception:
            existing = {}

    jobs = extract_app_texts()
    print(f"Total unique (role, phrase) jobs collected: {len(jobs)}")

    sem = asyncio.Semaphore(8)
    manifest: Dict[str, dict] = {}
    errors: List[str] = []

    with tempfile.TemporaryDirectory() as tmpdir_str:
        tmpdir = Path(tmpdir_str)
        tasks = [synth_one(sem, key, role, text, existing, tmpdir) for key, role, text in jobs]
        done = 0
        for coro in asyncio.as_completed(tasks):
            key, entry, err = await coro
            done += 1
            if entry:
                manifest[key] = entry
            elif err:
                errors.append(err)
            if done % 80 == 0 or done == len(tasks):
                print(f"Progress: {done}/{len(tasks)} (errors: {len(errors)})")

    ordered = {k: manifest[k] for k in sorted(manifest)}
    MANIFEST_PATH.write_text(json.dumps(ordered, ensure_ascii=False, separators=(",", ":")), encoding="utf-8")

    total_bytes = sum(p.stat().st_size for p in OUT_VOICES_DIR.glob("*.mp3"))
    print(f"Manifest written: {len(ordered)} clips, total audio size: {total_bytes / (1024 * 1024):.2f} MB")
    if errors:
        print("ERRORS SAMPLE:", errors[:10])
        return 1
    return 0


if __name__ == "__main__":
    sys.exit(asyncio.run(main_async()))
