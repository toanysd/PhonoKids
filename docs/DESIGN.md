# DESIGN.md — PhonoKids v4 Comic Hero Phonics & Sound Lab

## 1. Aesthetic Commitment (`ui_design_pro`)
- **Theme:** Bold Comic & Anime Action Hub (`border-[3.5px] border-[#0F172A]`, comic offset shadow `shadow-[4px_5px_0_#0F172A]`, halftone dots `.comic-halftone`, radial speed-lines `.comic-speedlines`, starburst animations `.animate-starburst`), zero emojis in UI, zero `lucide-react` icons (100% custom bold `#0F172A` outline SVGs).
- **Palette Tokens (`src/index.css` & `ComicUiPrimitives.tsx`):**
  - Sunny Yellow (`#FACC15` / `#FEF08A`), Cyan (`#22D3EE` / `#CFFAFE`), Crimson (`#EF4444` / `#FFE4E6`), Lime (`#A3E635` / `#ECFCCB`), Cream Card (`#FFFDF5`), Deep Ink (`#0F172A`).
- **Typography Scale:**
  - **Display (`font-display`):** `'Baloo 2'`, `'Plus Jakarta Sans'`, `'Nunito'`, `sans-serif`.
  - **Telemetry (`font-mono tabular-nums`):** `'JetBrains Mono'`, `monospace` for Stars, Gems, Energy (`0–100`), HP, Combo, and Accuracy Arc Meter (`0–100%`).

## 2. Canonical Art & Studio Voice Pipeline (`public/assets/comic/`, `scripts/build_v4_*.py`)
1. **4 Canonical Personal Heroes + 6 Villains (`public/assets/comic/sprites/`):** Recovered from canonical `74d3547` into 5 poses (`idle`, `speaking`, `attack`, `hit`, `victory`) totaling `50` transparent `.webp` sprites:
   - Heroes: `Hesman (ゴライオン)` (`mecha_lion`, `lockHorizontalSymmetry: true` — never flipped), `Anpanman` (`bread_hero`), `Spider-Man` (`spider_hero`), `Ultraman Zero` (`cosmic_ultra`).
   - Villains: `galra_boss`, `robeast_mech`, `germ_ufo`, `goblin_glider`, `octo_mech`, `alien_baltan`.
2. **24 Word Sprites, 2 Props, 5 Scenes & 14 Multi-Angle Manga Panels (`95` `.webp` files total):** `public/assets/comic/words/*.webp`, `props/{chest_closed,chest_open}.webp`, `scenes/{hub_space_city,arena_galra,arena_city,arena_cosmos,rocket_room}.webp`, và bộ `14` tranh góc máy `public/assets/comic/manga/{cutin_*,splash_*,menace_*}.webp` (`scripts/build_v4_manga_shots.py`).
3. **US Studio Voice Bank (`scripts/build_v4_voices.py` -> `src/data/voiceManifest.json`):** `235` mono `24kHz/48kbps` `.mp3` clips (`teacher`: `en-US-AvaNeural`, `kid`: `en-US-AnaNeural`, `hero`: `en-US-GuyNeural`, `villain`: `en-US-GuyNeural`, `pitch=+0Hz`) plus `48` isolated phonemes in `/assets/audio/phonemes/*.mp3`.

## 3. Zero-Scroll Screens (`100dvh`, `390x844` & `1440x900`)
- **`ComicTopHud` (`ComicUiPrimitives.tsx`):** Hero portrait medallion (opens `HeroSquadModal`), Stars, Gems, `Energy/100` bar, Sound toggle, `?` (`VietnameseGuideModal`), and Home button (`hub`).
- **`ComicCommandHub.tsx`:** Space-city backdrop, greeting strip, 8 unique portal buttons (`Story Map`, `Sound Lab`, `Battle Arena`, `Mini Games`, `Reading Room`, `Hero Squad`, `Star Zone`, `Daily Quest`), and foreground 4-Hero Command Deck.
- **`SoundLabScreen.tsx` + `SagittalMouthSvg.tsx`:** 24 phonemes (`Air`, `Pop`, `Voice/Nasal`, `Vowels`), animated sagittal side-profile head (jaw, lips, 9 tongue modes, velum nasal gate, cyan airflow, throat vibration) + circular `MOUTH CAM` + live `MicWaveformOrb`.
- **`ComicBattleScreen.tsx` + `MangaBattleStage.tsx`:** Living Manga Page occupying `~74%–76%` viewport height on zero-scroll screens (`390×844` & `1440×900`) with 5 camera shots (`vs_split`, `eye_cutin`, `finisher_splash`, `clash_shoulder`, `victory_cover`), manual + voice-driven `AUTO` director, integrated shout balloon, and slim VS strip.
- **`MiniGamesAndMapScreen.tsx`, `ReadingPlanetScreen.tsx`, `StarZoneScreen.tsx`:** 100% unlocked 30-stage Story Map, 12 `aa..C` comic books with Picture Quiz, 3 instant Mini-Games, and Rocket Command Room upgrade shop.
