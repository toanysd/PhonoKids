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
2. **Full-Bleed `100dvh` 2D Game Shell & Overworld Map (`App.tsx`, `GameHudBar.tsx`, `WorldOverworldMap.tsx`, `HeroCommunicatorModal.tsx`):** Xóa bỏ hoàn toàn `<Navbar>` & thanh tab web cũ; khung `100dvh overflow-hidden bg-slate-950` hiển thị nền Thế Giới toàn màn hình với HUD nổi (`Lv.XP`, `Đổi Tướng`, `⭐`, `Rương Quà 🎁`, `Sound`, `Phụ Huynh`), dải `Đảo 1..6`, đường đi hình chữ S 8 chặng (`map-node-*` gắn nhân vật đứng trên chặng chọn & Boss canh chặng 8), thanh phóng nhiệm vụ (`CHƠI NGAY` / `Đấu Ngay`) và 4 cổng Game (`Bản Đồ | Đấu Trường | Rạp Truyện | Bộ Đàm`).
3. **Zero-Scroll 1-Screen-Per-Page Supporting Portals (`HeroRosterDrawer.tsx`, `TrainingDojoHub.tsx`, `PhonicsIslandMap.tsx`, `ArcadePlayground.tsx`, `StoryLibrary.tsx`, `StoryReader.tsx`, `StickerAlbumModal.tsx`):** Mỗi màn con chỉ hiển thị đúng 1 thẻ trọng tâm vừa khít khung hình (`scrollHeight === clientHeight`, zero overflow) kèm `◀`/`▶`, vuốt ngang `40px`, nút quay về `Bản Đồ` và tab `grid-cols-4` (`flex-col sm:flex-row`); chuẩn hóa emoji Unicode 6–11 (`🎈` thay `🫧`) tránh lỗi ô vuông `□` trên Windows 10.
4. **Adaptive 5-Mode Voice Battle Stage (`BattleStageArena.tsx`, `BattleStageViewport.tsx`, `BattleHudOverlay.tsx`, `SoundFusionForgeOverlay.tsx`, `MinimalPairChestOverlay.tsx`, `QaDuelStageCard.tsx`):** Bố cục trục dọc ở `< 768px`, ngang 16:9 ở Desktop, huy hiệu `Combo x{n} 🔥`, Lò Rèn Ghép Âm tinh thể, Rương Thính Âm 2 lựa chọn, Tô Phù Hiệu Chữ và thẻ Hỏi–Đáp `grid-cols-1 sm:grid-cols-3` (`min-h-[50px]`, giữ nhắc sai `1800ms`).
5. **US Native Studio Voice & Story Word-Sync (`audioService.ts`, `voiceManifest.json`):** Phát trực tiếp 1,484 clip `.mp3` (`en-US-AvaNeural` / `AnaNeural` / `AndrewNeural` / `GuyNeural`, giữ nguyên `pitch=+0Hz`, tắt `pitch=1.25`) và đồng bộ highlight từng từ theo `WordBoundary` trên một file đọc liên mạch trong `StoryReader.tsx`.
6. **Media Studio Blur Shield & Compact Rest Break (`CustomCharacterStudioModal.tsx`, `RestBreakModal.tsx`):** Ảnh upload/output mặc định `.privacy-blur-shield` (`blur(12px)`); hộp thoại nghỉ mắt hỗ trợ `Escape` / `✕`.
