# HANDOFF.md — englishStudy (PhonoKids v4.1 Living Manga Battle)

- **Cập nhật:** 2026-11-17
- **Trạng thái mới nhất:** Hoàn thành nâng cấp **Living Manga Page (5 góc máy)** cho Đấu Trường Mic từ nhánh `ab97c22` (`src/components/comic/MangaBattleStage.tsx` + `ComicBattleScreen.tsx`).

## 1. Kiến Trúc PhonoKids v4.1 (`<= 400 dòng/tệp`)
- **Living Manga Battle (`MangaBattleStage.tsx`, `ComicBattleScreen.tsx`, `comicGame.ts`, `comicGameData.ts`):** Trang truyện chiếm `74.4%` (`390x844`) đến `76.5%` (`1440x900`) màn hình, tự động chuyển 5 góc máy theo nhịp giọng nói (`1:VS` khung chéo đối đầu + huy hiệu `VS`, `2:EYE` dải cắt mắt + speed lines theo âm lượng, `3:SPL` trang đôi tung tuyệt chiêu + ô `HIT!`, `4:OTS` qua vai khích lệ, `5:COV` bìa tập truyện `CLEAR!`) kèm thanh chuyển nhanh `CAM`. Giữ khóa cứng đối xứng ngang Hesman (`lockHorizontalSymmetry: true`).
- **Tài Nguyên Đồ Họa Manga (`scripts/build_v4_manga_shots.py`):** Đủ `14/14` tranh góc máy `.webp` trong `public/assets/comic/manga/` (`cutin_*` `1200x450`, `splash_*` `960x1280`, `menace_*` `800x800`), nâng tổng kho comic lên `95` tệp `.webp` (kèm `235` clip US Studio `.mp3`).
- **Hub 8 Cổng, Sound Lab, Reading Room & Star Zone:** Giữ nguyên toàn bộ luồng PhonoKids v4 đã triển khai tại `ComicCommandHub.tsx`, `SoundLabScreen.tsx`, `ReadingPlanetScreen.tsx`, `StarZoneScreen.tsx`.

## 2. Kiểm Chứng Đã Chạy Sau Chỉnh Sửa Cuối (`20261117-122105_manga_battle_v4_2.md`)
- `npx.cmd tsc --noEmit --pretty false`: `exit 0` (`4.5s`, không lỗi).
- `encoding_guard.py`: `exit 0`, `0 finding(s)` trên 4 tệp chỉnh sửa chính.
- `palace_cli.py check-modularity englishStudy` & `verify_modular_line_ceiling()`: `exit 0`, toàn bộ `src/` `<= 400` dòng (`0` độc khối `> 600` dòng).
- `python scripts/verify_manga_battle.py`: `exit 0` (`390x844` & `1440x900` không tràn cuộn, `stageRatio >= 0.744`, `ALL_4_HEROES_MANGA_OK=True`, `BATTLE_LOOP_OK=True`).
- `npm run build` (`20261117-133000_prod_build_v4_1.md`): `exit 0` (`15.32s`, `dist/assets/index-CHKjQbg9.js` `323.16 kB`, `dist/assets/index-Bnsn_p1W.css` `44.49 kB`).
- **Deploy & Đồng bộ:** Đẩy bản PhonoKids v4.1 lên `origin/main` (auto-deploy `https://phonokids.vercel.app`) và đồng bộ gương `D: -> G:\AntiGravity\apps\englishStudy`.
