# DESIGN.md — HeroSpeak Kids Visual & UI Token System

## 1. Aesthetic Commitment (`ui_design_pro`)
- **Archetype:** `maximalist` × `organic` Tactical Storybook Stage (`DESIGN_VARIANCE: 8`, `MOTION_INTENSITY: 7`, `VISUAL_DENSITY: 5`).
- **Typography Scale:**
  - **Display (`font-display`):** `'Baloo 2'`, `'Plus Jakarta Sans'`, `'Nunito'`, `sans-serif` — tiêu đề màn chơi hỗ trợ 100% dấu tiếng Việt sắc nét, câu nói trên đầu đối thủ, khẩu hiệu tuyệt kỹ.
  - **Body (`font-sans`):** `'Plus Jakarta Sans'`, `'Nunito'`, `sans-serif` — hướng dẫn sư phạm tiếng Việt rõ dấu, thẻ Unit.
  - **Telemetry (`font-mono` + `tabular-nums`):** `'JetBrains Mono'`, `monospace` — thanh HP, đếm Sao, tỷ lệ Micro `%`, chỉ số tiến độ `X/24`.

## 2. Color & Surface Tokens (`src/index.css`)
- `--stage-sky`: `#e0f2fe` (nền sân khấu hoạt cảnh ban ngày)
- `--surface-card`: `#fffdf7` (thẻ bài học & hộp thoại ấm áp)
- `--surface-muted`: `#fef3c7` (nền điều hướng & phân vùng phụ)
- `--accent-gold`: `#f59e0b` (nút hành động chính & huy hiệu Sao)
- `--accent-energy`: `#2563eb` (điểm nhấn anh hùng & tương tác phụ)
- `--ink-primary`: `#1e1b4b` (chữ chính độ tương phản cao trên nền sáng)

## 3. Spatial Layout Families & Responsive 2.5D/Voice Architecture
1. **2D AI Character DNA & 2.5D Motion Pipeline (`src/data/characterSpriteManifest.ts`, `src/components/hero/CharacterRigSvg.tsx`, `public/assets/sprites/`, `public/assets/worlds/`):** Bộ 65 sprite nhân vật `.webp` (`512×512` RGBA, 5 tư thế mỗi nhân vật) và 6 bối cảnh sân khấu 16:9 kết hợp hoạt ảnh GPU 2.5D mượt mà (đổ bóng nền, hào quang giọng nói, nghiêng thẻ 2.5D khi kéo; giữ engine 3D WebGL ở chế độ dự phòng `renderMode="3d_webgl"`).
2. **Mobile-First `100dvh` Shell & Bottom Thumb Navigation (`App.tsx`, `Navbar.tsx`):** Mobile (`< 1024px`) dùng Top Bar gọn 1 hàng + `MobileBottomNav` cố định đáy (`>= 52px` nút chạm); tự động ẩn toàn bộ điều hướng khi vào `hero_cutscene` / `hero_battle` để mở rộng không gian sân khấu `100dvh`.
3. **Asymmetric Hero Hangar Banner & 1-Screen-Per-Page Mission Carousel (`HeroAdventureHub.tsx`):** Dải tiêu đề gọn (ảnh Anh hùng vs Đối thủ, huy hiệu `{n}/24 • {stars}⭐`, nút `Đổi` / `Đổi Nhân Vật`), dải 6 Thế Giới (`Đảo 1..6`) và Thẻ Nhiệm Vụ nền `opacity-45` lồng thanh kính mờ `bg-white/85` hiển thị đúng 1 bài học/màn hình với nút `◀`/`▶`, nút số `1..4`, 3 ô nghe mẫu, `CHƠI NGAY` (`min-h-[54px]`) và `Đấu Ngay`.
4. **Adaptive Portrait/Landscape Voice Battle Stage (`BattleStageArena.tsx`, `BattleStageViewport.tsx`, `BattleHudOverlay.tsx`):** Bố cục trục dọc (Mục tiêu/Boss nửa trên — Anh hùng nửa dưới) ở `< 768px`, trục ngang 16:9 ở Desktop, tia chưởng SVG toàn hướng, và Quả cầu Micro `min-h-[52px]` luôn sẵn sàng giữa vùng ngón cái.
5. **Media Studio with Default Privacy Blur Shield** (`CustomCharacterStudioModal.tsx`): Khung ảnh upload đầu vào và khung output mặc định `.privacy-blur-shield` (`blur(12px)`), sáng rõ khi `:hover` hoặc bấm `Toggle Blur`.
6. **Zero-Scroll 1-Screen-Per-Page Mobile Architecture (`390×844`):** `App.tsx` khóa `<main className="flex-1 min-h-0 overflow-hidden flex flex-col">`; toàn bộ màn nhiều mục (`HeroAdventureHub`, `HeroRosterDrawer`, `TrainingDojoHub` + `PhonicsIslandMap` + `ArcadePlayground`, `StoryLibrary`, `StickerAlbumModal`) chỉ hiển thị 1 thẻ trọng tâm vừa khít 1 màn hình (`scrollHeight === clientHeight`, zero overflow) kèm điều hướng `◀`/`▶`, vuốt chạm `40px` và thanh sub-tab `grid-cols-4` trên di động; chuẩn hóa emoji Unicode 6–11 (`🎈` thay `🫧`) tránh lỗi ô vuông `□` trên Windows 10.
7. **Mobile Full-Width Stacked Q&A & Compact Rest Break:** `QaDuelStageCard.tsx` chuyển lưới chọn đáp án sang `grid-cols-1 sm:grid-cols-3` (`min-h-[50px]` toàn chiều ngang trên di động, nới cửa sổ nhắc thử lại sai lên `1800ms`); `RestBreakModal.tsx` dùng hộp thoại gọn 1 màn hình hỗ trợ `Escape` / nút `✕`.
