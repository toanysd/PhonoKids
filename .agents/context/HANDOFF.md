# HANDOFF.md — englishStudy (HeroSpeak Kids 2.0)

- **Cập nhật:** 2026-11-16
- **Trạng thái mới nhất:** Hoàn tất nâng cấp **HeroSpeak Kids 2.0**: thay toàn bộ giọng máy thành kho **1,484 clip bản ngữ US Studio (`.mp3` `24kHz`)**, đập bỏ vỏ web `<Navbar>` sang **Bản Đồ Game toàn màn hình 48 chặng**, và mở rộng lên **5 cơ chế chiến đấu + Rạp Truyện đồng bộ chữ theo tiếng đọc**.

## 1. Kiến Trúc & Tính Năng Mới
- **Lõi Giọng Bản Ngữ (`build_native_voice_bank.py`, `voiceManifest.json`, `audioService.ts` `512L`, `sfxService.ts` `95L`, `voiceKey.ts`):** Thu âm `1,484` câu/từ chuẩn Bắc Mỹ (`en-US-AvaNeural`, `AnaNeural`, `AndrewNeural`, `GuyNeural`, `pitch=+0Hz`, `19.52 MB`); xóa `pitch = 1.25`; đồng bộ karaoke từng từ trên 1 mạch kể truyện (`speakEnglishTimed` trong `StoryReader.tsx` `490L`).
- **Full-Bleed 2D Game Shell (`App.tsx` `406L`, `GameHudBar.tsx` `145L`, `WorldOverworldMap.tsx` `361L`, `HeroCommunicatorModal.tsx` `243L`):** Bản đồ chữ S 6 Thế Giới × 8 chặng, HUD nổi (`Lv/XP`, `Đổi Tướng`, `⭐`, `🎁 Rương Quà`, `🔊`, `🛡️`), 4 cổng Game (`Bản Đồ | Đấu Trường | Rạp Truyện | Bộ Đàm`).
- **48 Màn Chơi & 5 Cơ Chế (`campaignExpansionW1To3.ts`, `campaignExpansionW4To6.ts`, `campaignStageEnricher.ts`, `SoundFusionForgeOverlay.tsx`, `MinimalPairChestOverlay.tsx`, `BattleStageArena.tsx` `592L`):** Thêm Lò Rèn Ghép Âm, Rương Thính Âm phân biệt cặp âm, Combo `x{n} 🔥`, XP và mở khóa 28 truyện (`heroStorage.ts`).

## 2. Kiểm Chứng Mới Nhất (`20261116-221926_herospeak_v2_game_and_native_voice.md` & Production Deploy)
- `npx tsc --noEmit --pretty false`: `exit 0` (không lỗi); `npm run build` (`tsc -b && vite build`): `exit 0` (`dist/assets/index-DzVXZH2l.js`, `2,180.68 kB`).
- `verify_herospeak_v2_game.py`: `status: ALL_PASS` (`1,484/1,484` file `.mp3` hợp lệ, `0` `<header>`, `0` tràn/cuộn dọc trên cả Mobile `390×844` & Desktop `1440×900`, đủ 5 mode & `RestBreakModal`).
- **Deploy & vận hành:** Chuẩn bị đẩy toàn bộ mã nguồn + `1,484` file audio `.mp3` lên `origin main` (GitHub -> Vercel auto-deploy `https://phonokids.vercel.app`); tuân thủ Quy tắc #9 (không tự sync `D:` ⟷ USB).
