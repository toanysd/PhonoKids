# PhonoKids v4 — Đặc Tả Game "Comic Hero Phonics & Sound Lab"

> Cập nhật: `2026-11-17` • Kiến trúc 100% Comic/Anime Pure Game (`React 18 + TypeScript + Tailwind CSS + Vite`, trần mô-đun `<= 400 dòng/file`)

## 1. Cổng Chỉ Huy 8 Chế Độ (`ComicCommandHub.tsx`) & Đội Anh Hùng Chính Chủ
- **8 Cổng Độc Nhất (4 trái + 4 phải, không trùng nhãn):** `Story Map` (`story_map`), `Sound Lab` (`sound_lab`), `Battle Arena` (`battle_arena`), `Mini Games` (`mini_games`), `Reading Room` (`reading_planet`), `Hero Squad` (`hero_squad`), `Star Zone` (`star_zone`), `Daily Quest` (`daily_quest`).
- **4 Siêu Anh Hùng Chính Chủ (`COMIC_HEROES` trong `src/data/comicGameData.ts`):**
  - **`Hesman (ゴライオン)` (`mecha_lion`, `lockHorizontalSymmetry: true`):** Giữ nguyên định hướng đối xứng thanh kiếm ánh sáng (`Blazing Sword!`).
  - **`Anpanman` (`bread_hero`):** Cổ vũ ấm áp (`An Punch!`).
  - **`Spider-Man` (`spider_hero`):** Nhào lộn thành phố (`Web Blast!`).
  - **`Ultraman Zero` (`cosmic_ultra`):** Chiến binh ngân hà (`Specium Ray!`).
- **5 Tư Thế Động & 6 Ác Nhân (`COMIC_VILLAINS`):** Mỗi nhân vật có 5 sprite `.webp` (`idle`, `speaking`, `attack`, `hit`, `victory`) thử nghiệm trực tiếp trong `HeroSquadModal.tsx`.

## 2. Sayshape Sound Lab (`SoundLabScreen.tsx` & `SagittalMouthSvg.tsx`)
- **24 Âm Vị (`src/data/soundLabData.ts`):** Phân nhóm `All`, `Air` (`s, z, sh, ch, th, f, v`), `Pop` (`p, b, t, d, k, g`), `Voice/Nasal` (`m, n, l, r`), `Vowels` (`a, e, i, o, u, ee, oo`).
- **Sơ Đồ Cắt Dọc Khẩu Hình & `MOUTH CAM`:** Tự động biến đổi độ mở hàm (`jawOpen`), 5 kiểu môi (`lipMode`), 9 tư thế lưỡi (`tongueMode`), nắp ngạc mềm âm mũi (`nasal`), luồng hơi cyan (`airflow`), rung dây thanh (`voiced`) kèm ống kính tròn `MOUTH CAM` phía trước.

## 3. Đấu Trường Mic, Living Manga Page 5 Góc Máy & Bắt Sóng Giọng Nói (`micEngine.ts` + `MangaBattleStage.tsx` + `ComicBattleScreen.tsx`)
- **Trang Truyện Tranh Sống 5 Góc Máy (`Living Manga Page` & Camera Director):** Dành `~74%–76%` màn hình cho khung tranh lớn không cuộn (`390×844` & `1440×900`). Ở chế độ `AUTO`, góc máy tự chuyển theo nhịp tương tác giọng nói: `1:VS` (khung chéo đối đầu tràn viền giữa Boss và Hero + huy hiệu `VS`), `2:EYE` (khi bấm Mic: dải cắt mắt cận cảnh `mangaCutinUrl` + đường tốc độ `集中線` co giãn theo âm lượng), `3:SPL` (khi đọc đúng: trang đôi phóng đại toàn trang `mangaSplashUrl` + chữ tượng thanh Manga + ô phản chấn `HIT!`), `4:OTS` (góc qua vai + ô khích lệ), `5:COV` (bìa tập truyện `CLEAR! ★★★` khi Boss về `0%`). Hỗ trợ thanh chuyển nhanh `CAM` (`AUTO | 1:VS | 2:EYE | 3:SPL | 4:OTS | 5:COV`), khóa cứng đối xứng Hesman (`lockHorizontalSymmetry: true`).
- **Đồng Bộ Micro Đa Tầng:** Gọi `audioService.stopSpeaking()` trước khi thu âm, khởi chạy `SpeechRecognition` đồng bộ ngay trong click handler, đồng thời mở WebAudio `AnalyserNode` (`fftSize = 512`) xuất 16 cột tần số thời gian thực cho `MicWaveformOrb`.
- **Voice Wave Fallback Chống Kẹt Mạng/Trình Duyệt:** Khi STT lỗi (`network`, `service-not-allowed`, `aborted`, `audio-capture`, `no-speech`) hoặc không khả dụng nhưng bé thực sự nói (`peakVolume >= 18` và `voicedMs` trong `220..3000ms`), hệ thống chấm đậu `mode: 'voice_wave'` (`GREAT VOICE!`) thay vì báo trượt oan; nói sai từ khi có STT vẫn trả về `retry` trung thực (`heroPose = 'hit'`).
- **Bản Đồ Tự Do 100% (`FreeStoryMapScreen`):** Mở sẵn toàn bộ `6` thế giới × `5` chặng (`30` chặng), nhảy thẳng vào trận bất kỳ hoặc đổi từ/Boss ngay trong trận, kèm nút `Power Assist` cho môi trường yên tĩnh.

## 4. Reading Planet, Star Zone, Mini-Games & Bảo Vệ Mắt
- **Reading Room (`ReadingPlanetScreen.tsx` & `readingPlanetData.ts`):** `12` truyện ngắn cấp độ `aa`, `A`, `B`, `C` (3 câu/truyện), tích hợp `Hear Page` (WordBoundary highlight), `Say Page` (`micEngine`), và `Picture Quiz` thưởng Sao/Ngọc.
- **Star Zone (`StarZoneScreen.tsx`):** Khoang tàu `rocket_room.webp` cho phép mua và gắn `8` trang bị (`ROCKET_UPGRADES`) bằng Sao và Ngọc (`comicStorage.ts`, key `phonokids_v4_comic_save`, khởi tạo `60` Sao, `25` Ngọc, `100` Năng lượng).
- **Mini-Games & Nhiệm Vụ Ngày:** 3 trò chơi nhanh (*Sound Pop Blitz*, *Word Fusion*, *Echo Radar*), `DailyQuestsModal`, `VietnameseGuideModal` (nút `?` + cổng PIN phụ huynh `1234`), và `RestBreakModal` (giữ nguyên `sessionSecondsRef` + `isSessionResting`).
