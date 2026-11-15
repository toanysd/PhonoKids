# HANDOFF.md — englishStudy (HeroSpeak Kids)

- **Cập nhật:** 2026-11-16
- **Trạng thái mới nhất:** Đã sửa triệt để lỗi `RestBreakModal` tự bật lại khi bấm "Nghỉ Ngơi Hôm Nay" và nâng cấp toàn bộ giao diện di động (`390×844`) sang bố cục phân trang 1 màn hình không cuộn.

## 1. Thay Đổi Trọng Tâm Đã Hoàn Tất
- **Sửa bộ đếm Nghỉ Mắt (`App.tsx`, `RestBreakModal.tsx`):** Chỉ đếm giờ ở màn học/chơi (tạm dừng ở `hero_hub`, `document.hidden`, `ParentDashboard`, `isSessionResting`); bấm "Nghỉ Ngơi Hôm Nay" reset `sessionSecondsRef = 0` + `isSessionResting(true)` + về `hero_hub`; bấm "Chơi Thêm 3 Phút Nữa" đặt ngưỡng `180s`; hỗ trợ `Escape` & nút `✕`.
- **Phân trang 1 màn hình Không Cuộn trên Di động (`390×844`):**
  - `App.tsx` khóa `<main overflow-hidden>`; `HeroAdventureHub.tsx` (1 bài/màn hình, nền thế giới `opacity-45` + thanh `Đổi` gọn), `HeroRosterDrawer.tsx`, `TrainingDojoHub.tsx` (`grid-cols-4`), `PhonicsIslandMap.tsx`, `ArcadePlayground.tsx` (`grid-cols-4`, đổi `🎈 Bắt Bóng`), `BlendingPlayground.tsx`, `MinimalPairsView.tsx`, `StoryLibrary.tsx`, `StickerAlbumModal.tsx` đều vừa khít 1 màn hình (`scrollHeight === clientHeight`).
  - `QaDuelStageCard.tsx` (`grid-cols-1 sm:grid-cols-3`) + `BattleStageArena.tsx` (giữ gợi ý sai `1800ms`).

## 2. Kết Quả Kiểm Chứng Mới Nhất
- **Evidence:** `.agents/evidence/20261116-073649_mobile_paged_ux_and_rest_fix.md` (`E1..E4` đều `exit 0`):
  - `npx tsc --noEmit --pretty false`: `exit 0`, không output.
  - `verify_mobile_paged_and_rest.py`: `status: ALL_PASS` (`390×844` & `1440×900`, `hOverflow: 0`, `mScrollH === mClientH`, `broken: []`, `RestBreakModal` không tự bật lại).
  - `verify_phase3_gameplay.py`: `status: ALL_PASS`, 0 lỗi/tràn khung.
  - `run_verify.mjs`: `exit 0`, `console_errors: []`.
  - `npm run build` (`tsc -b && vite build`): `exit 0`, xuất `dist/assets/index-9HiVZSFQ.js` và đẩy nhánh `main` triển khai tự động lên `phonokids.vercel.app`.
- **Lưu ý vận hành:** Mở local bằng `start_game.bat`; tuân thủ Quy tắc #8 (không tự build) & #9 (không tự sync `D:` ⟷ USB).
