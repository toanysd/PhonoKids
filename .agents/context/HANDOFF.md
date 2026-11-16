# HANDOFF.md — englishStudy (PhonoKids v4 Comic Hero Phonics & Sound Lab)

- **Cập nhật:** 2026-11-17
- **Trạng thái mới nhất:** Đã tích hợp **PhonoKids v4** (`src/App.tsx` 232L, `src/index.css` 216L), dọn sạch toàn bộ tệp/ảnh `v3` cũ (`src/components/v3/`, `public/assets/v3/`, `starGameData.ts`, `starGame.ts`, `starStorage.ts`, `voiceCombatService.ts`, `scripts/build_v3_*.py`).

## 1. Kiến Trúc PhonoKids v4 (`<= 400 dòng/tệp`)
- **8-Portal Comic Hub (`ComicCommandHub.tsx`, `ComicTopHud`):** Bố cục không cuộn trên `390x844` & `1440x900` với 8 cổng độc nhất (`Story Map`, `Sound Lab`, `Battle Arena`, `Mini Games`, `Reading Room`, `Hero Squad`, `Star Zone`, `Daily Quest`) và 4 Anh hùng chính chủ (`Hesman (ゴライオン)` `lockHorizontalSymmetry: true`, `Anpanman`, `Spider-Man`, `Ultraman Zero`).
- **Sayshape Sound Lab (`SoundLabScreen.tsx`, `SagittalMouthSvg.tsx`, `soundLabData.ts`):** 24 âm vị chia nhóm `All / Air / Pop / Voice/Nasal / Vowels`, SVG mặt cắt khẩu hình động (hàm, môi, 9 tư thế lưỡi, nắp ngạc mềm, luồng hơi cyan, rung cổ họng) kèm ống kính tròn `MOUTH CAM`.
- **Mic Engine Đa Tầng (`micEngine.ts`, `ComicBattleScreen.tsx`, `pronunciationScorer.ts`):** Khởi chạy `SpeechRecognition` đồng bộ và WebAudio `AnalyserNode` 16 cột sóng; tự động rơi về **Acoustic Voice Wave** (`peakVolume >= 18`, `220..3000ms`) khi STT gặp lỗi mạng/thiếu hỗ trợ, đồng thời vẫn chấm `retry` trung thực khi STT nghe sai từ.
- **Free Story Map, Reading Room, Mini-Games & Star Zone:** Mở tự do 100% `6` thế giới × `30` chặng (`FreeStoryMapScreen`), `12` truyện ngắn `aa..C` kèm Picture Quiz (`ReadingPlanetScreen`), `3` mini-game (`MiniGamesScreen`), `8` nâng cấp khoang tàu (`StarZoneScreen`, save `phonokids_v4_comic_save`), `HeroSquadModal`, `DailyQuestsModal`, `VietnameseGuideModal` (nút `?`, PIN `1234`), và `RestBreakModal`.
- **Tài Nguyên & Giọng Đọc (`scripts/build_v4_*.py`):** `81` ảnh `.webp` tại `public/assets/comic/` (`50` sprite `74d3547` + `24` từ + `2` props + `5` cảnh nền) và `235` clip US Studio `.mp3` (`voiceManifest.json`).

## 2. Kiểm Chứng Đã Chạy Sau Chỉnh Sửa Cuối
- `npx tsc --noEmit --pretty false`: `exit 0`; `npm run build` (`tsc -b && vite build`): `exit 0` (`33.10s`, `dist/assets/index-BwPuht6E.js`, `310.73 kB`).
- Kiểm tra trần dòng & độ sạch: `OVER_400_COUNT=0`, `0` lỗi UTF-8 (`encoding_guard.py` `0 finding(s)`), `81` `.webp` & `235` `.mp3` hợp lệ.
- Kiểm định E2E (`20261117-064510_phono_v4_comic_swarm.md`): `ALL_PASS` (`390x844` & `1440x900`), qua đủ 8 cổng, Sound Lab, Mic Battle 3 kịch bản & Reading Room / Star Zone.
- **Deploy & vận hành:** Đẩy toàn bộ PhonoKids v4 lên `origin main` -> tự động deploy production tại `https://phonokids.vercel.app`; tuân thủ Quy tắc #9 (không tự sync `D:` ⟷ USB).
