# HeroSpeak Kids — Đặc Tả Kỹ Thuật & Giáo Trình Hệ Thống

> Cập nhật: `2026-11-15` • Kiến trúc mô-đun cho ứng dụng `englishStudy` (React 18 + TypeScript + Tailwind CSS + Vite)

## 1. Tổng Quan Kiến Trúc & Lộ Trình Sư Phạm Kép (3–8 Tuổi)
**HeroSpeak Kids** chuyển đổi nền tảng học ngữ âm thành Game Nhập Vai Hoạt Cảnh Chiến Đấu điều khiển bằng tương tác chạm/phím và giọng nói tiếng Anh trực tiếp cho trẻ từ 3 tuổi:

- **6 Thế Giới / 24 Bài Học Toàn Diện (`src/data/curriculumWorlds.ts`):**
  1. **Thế Giới 1 (3–4 Tuổi — `Wow English & Super Simple Oral/TPR`):** Chào hỏi (`Hello!`, `Bye-bye!`), màu sắc (`Red`, `Blue`, `Yellow`), trái cây (`Apple`, `Banana`, `Yummy!`), thú cưng & vận động (`Cat`, `Dog`, `Jump!`).
  2. **Thế Giới 2 (3.5–4.5 Tuổi — `Oxford Phonics World Level 1`):** Âm đầu A–Z gắn 100% file `.mp3` thuần âm vị (`s, a, t, p`, `i, n, c, k, e`, `h, r, m, d, g`, `o, u, l, f, b`) và khẩu hình miệng thật (`/assets/visemes/*.jpg`).
  3. **Thế Giới 3 (4–5 Tuổi — `Oxford Phonics World Level 2`):** Ghép vần ngắn CVC (`-at`, `-an`, `-en`, `-ig`, `-og`, `-un`) và đọc câu nối âm.
  4. **Thế Giới 4 (5–6 Tuổi — `Wow English Preschool & GrapeSEED`):** Cơ thể & cảm xúc, gia đình, phương tiện & thời tiết, toán học đếm 1–5 và Big/Small.
  5. **Thế Giới 5 (5.5–7 Tuổi — `Oxford Phonics World Levels 3 & 4`):** Nguyên âm dài `Magic E`, cặp nguyên âm `ee/oa/ai`, tổ hợp phụ âm `st/cl/fr`, âm ghép `sh/ch/th`.
  6. **Thế Giới 6 (6–8 Tuổi — `Oxford L5 & Cambridge Pre-A1 Starters`):** Nguyên âm trượt `ar/or/ou/oi`, mẫu câu `I can... / Yes, I can!`, giới từ `in/on/under` và Đại Chiến Ngân Hà.

## 2. Hệ Thống Đồ Họa 2D AI Character DNA & Studio Tự Tạo (`characterSpriteManifest.ts`, `CharacterRigSvg.tsx`, `src/three/*`)
- **Kho Sprite 2D AI Tách Nền & Hoạt Ảnh 2.5D (`public/assets/sprites/`, `src/data/characterSpriteManifest.ts`):**
  - **65 Sprite `.webp` `512×512` RGBA (13 Nhân vật × 5 Tư thế: `idle`, `speaking`, `attack`, `hit`, `victory`):** Tách nền bằng phân đoạn vùng liên thông 2D (`scripts/extract_ai_sprites.py`) bảo toàn chi tiết trắng & viền mượt, tự động tải trước (`preload`) đổi tư thế tức thì kết hợp chuyển động GPU 2.5D (`src/index.css`) và kéo nghiêng tương tác. Khóa chống lật gương ngang riêng cho `mecha_lion`.
  - **6 Tranh Bối Cảnh Sân Khấu 16:9 (`public/assets/worlds/world_1..6.webp`):** Phủ toàn màn hình sân khấu chiến đấu và lồng nền video mở đầu cho cả 6 Thế Giới.
  - **Dự phòng động cơ 3D WebGL (`renderMode="3d_webgl"`, `src/three/*`):** Vẫn bảo toàn bộ dựng 3D `threeStageEngine.ts` + 13 rig (`buildHesman3D.ts`, `buildComicHeroes3D.ts`, `buildCosmicAndPetHeroes3D.ts`, `buildRivalsComic3D.ts`, `buildRivalsMecha3D.ts`) làm lớp dự phòng kỹ thuật.
- **Thư Viện Nhân Vật & Xưởng Tự Tạo (`heroRoster.ts`, `HeroRosterDrawer.tsx`, `CustomCharacterStudioModal.tsx`):** Hỗ trợ 5 Anh hùng (`Dũng Sĩ Hesman / Golion ゴライオン` chuẩn nguyên tác tai chữ `L` vàng & cánh hộp chữ nhật đỏ-trắng, `Anpanman`, `Spider-Man`, `Ultraman Zero`, `Pikachu`) và 8 Đối thủ. Xưởng tự tạo cho phép đổi bảng màu (`hue-rotate`), tải ảnh đại diện (nén canvas `160×160`) với **Lớp Làm Mờ Bảo Mật Mặc Định (`privacy-blur-shield` — Quy tắc #3)**: mặc định `blur-md`, xem rõ khi rê chuột, có nút `Toggle Blur` và Popup xem chi tiết.

## 3. Cơ Chế Điều Khiển Tự Do & Đạo Diễn Giọng Nói Không Điểm Nghẽn (`useVoiceDirector.ts`, `BattleStageArena.tsx`, `voiceCombatService.ts`)
- **Ưu tiên Giọng nói — Tự do Thao tác (`Hands-Free Voice-First + Parallel Touch/Keyboard`):**
  - Sau khi vào bài học hoặc trận đấu, Quả cầu Micro luôn sẵn sàng ở mọi chặng (`target_hunt` lẫn `echo_duel`) mà **không khóa sau thao tác di chuyển**. Khi bé đọc đúng từ/âm mục tiêu (chốt sớm ngay ở `interimResult`), anh hùng tự động lao tới tung chiêu.
  - Song song 100%, bé vẫn tự do chạm trực tiếp lên thẻ/sân khấu, dùng D-Pad ảo hoặc phím (`WASD` / `Arrow` di chuyển, `Space` bật Mic, `R` nghe lại).
- **Cơ chế Chống Nghẽn 3 Tầng (`Zero-Deadlock 3-Tier Cascade`):**
  1. *Tầng 1 (`0–4.5s`):* Nhân vật/đối thủ đọc mẫu ➔ tự mở Micro (`warmUpSession` giữ ấm `MediaStream`/`AudioContext`, tự phân biệt âm im lặng thật với giọng nói thật và nhắc khi bé gọi nhầm từ bẫy).
  2. *Tầng 2 (`~4.5s`):* Bật **Đèn Tâm Điểm + Bàn tay chỉ dẫn `👆`** trên đúng mục tiêu và đọc mẫu chậm lại 1 lần rồi tự mở lại Mic.
  3. *Tầng 3 (`~9s`):* Kích hoạt **Anh Hùng Trợ Lực Co-op (`2⭐`)**, cùng hô vang từ khóa và tự động tung chiêu đưa bé sang hiệp kế tiếp — trẻ 3 tuổi không bao giờ bị kẹt màn hình.
- **Chấm Phát Âm Nghiêm Ngặt Cho Trẻ ESL (`src/utils/pronunciationScorer.ts`, `voiceCombatService.ts`):**
  - Chuẩn hóa và tách ranh giới nguyên từ (*whole-word boundary*, không dùng `includes()` lỏng lẻo dễ trúng bừa từ lạ hoặc từ đệm `"um"`, `"uh"`, `"ah"`, `"okay"`, `"please"`). Khóa bỏ âm ngắn `"i"`/`"o"` đứng riêng khi câu mẫu dài nhiều từ; bảo toàn cặp *Magic E* (`kit` ≠ `kite` nhờ chỉ bỏ `-e` câm với từ `>= 5` ký tự) và cặp tối thiểu (`pen` ≠ `pin`, `ship` ≠ `chick`, `cat` ≠ `cut`).
  - Lọc điểm tin cậy STT (`confidence < 0.35` bị từ chối ở kết quả cuối) và **bỏ cơ chế tự cho qua khi chỉ có tiếng ồn lớn** nếu trình duyệt hỗ trợ Speech API; từ mồi gây nhiễu (`distractors`) kiểm tra trước `coreKeywords`.
  - Khi bật `toddlerMode`, nếu bé nói trúng từ khóa cốt lõi (`coreKeywords`, ví dụ `"Hello"` thay vì `"Find Hello!"`), chấm `2⭐` khích lệ; nói tròn câu hoặc ở chế độ Chuẩn (`>= 75%`) mới đạt `3⭐` và kích hoạt chốt sớm ở `interimResult`.
- **Đồng Bộ 1:1 Câu Đọc Mẫu & Yêu Cầu Nhắc Lại (`curriculumUnitsStage1To3.ts`, `curriculumUnitsStage4To6.ts`):**
  - Toàn bộ 37 vòng `targetHuntRounds` bỏ hướng dẫn siêu ngôn ngữ (`sound`, `for `, `c a t`), hiển thị và đọc đúng câu 1:1 (ví dụ `"Find Hello!"`). Mọi vòng lặp lại (`echoDuelRounds`, `bossRounds` ngoài `qa`) bảo đảm `speakerPromptEn === childTargetEn`.
- **Vòng Lặp Chiến Đấu 3 Chặng + Bộ Chuyển Chặng Trên Thanh HUD (`BattleStageArena.tsx`, `BattleHudOverlay.tsx`, `battleRoundHelpers.ts`):**
  - Thanh đầu trang giữ gọn **3 nút chuyển chặng tức thì** (`1. Săn & Nhắc` | `2. Tô Chữ` | `3. Hỏi Đáp`).
  1. **Chặng 1 — Săn & Nhắc 1:1 (`target_hunt`):** Nghe & nhắc lại đúng câu lệnh tìm mục tiêu hoặc di chuyển/chạm chọn thẻ đúng.
  2. **Chặng 2 — Tô Nét Chữ Lồng Âm Vị (`BattleLetterTraceOverlay.tsx`, `curriculumInteractiveData.ts`):** Toàn bộ 24 bài học (`u1_1`..`u6_4`) gắn chữ cái/âm ghép tương ứng kho `letterStrokes.ts`, tự phát âm vị + từ ví dụ (trì hoãn 160ms chống `StrictMode`), cho phép tô nét với dung sai rộng thân thiện cho trẻ 3–8 tuổi (`r = 38` trên khung `200×200`), nút *Nghe Âm / Xem Mẫu / Xóa Vẽ Lại* và tự động tung chiêu khi tô xong toàn bộ nét.
  3. **Chặng 3 — Hỏi Đáp Tương Tác & Đấu Boss (`QaDuelStageCard.tsx`, `interactionType: 'qa'`):** Mỗi bài học tích hợp 1 vòng Hỏi–Đáp có câu hỏi tiếng Anh + giải nghĩa tiếng Việt và **3 thẻ đáp án minh họa**; chạm thẻ sai lắc nhẹ nhắc thử lại (không trừ HP), chạm thẻ đúng lần 1 chọn thẻ & mở Mic đọc đáp án, chạm lần 2 hoặc nói đúng đáp án để tung chiêu dứt điểm.
- **Chuỗi Tự Chạy Toàn Tuyến & Giao Diện Mobile-First `100dvh`:**
  1. **Video Hoạt Cảnh Mở Đầu (`VideoLessonCutscene.tsx`):** Tự đọc mẫu ➔ mở Mic 3.8s ➔ tự lật sang thẻ tiếp theo và đếm ngược `3..2..1` vào trận (có nút tạm dừng).
  2. **Sân Khấu Chiến Đấu (`BattleStageArena.tsx`, `BattleStageViewport.tsx`, `BattleHudOverlay.tsx`, `useArenaMovement.ts`):** Toàn màn hình `100dvh` ẩn thanh điều hướng tổng; tự chuyển bố cục **Trục Dọc (Trên–Dưới)** trên Mobile `<768px` và **Đấu Trường Ngang 16:9** trên Desktop, kèm đếm ngược `6s` tự sang bài mới sau khi thắng.
- **Tài liệu & Âm thanh giữ nguyên:** 42 file âm thuần `/assets/audio/phonemes/*.mp3`, kho tranh Ehon `/assets/ehon/*.jpg`, và `TrainingDojoHub.tsx` (Phòng Luyện Âm, Ghép Vần, Tai Tinh, Tô Chữ, Truyện Tranh Ehon, Bạn Leo AI). Chế độ Tiếng Nhật (`ja`) được ẩn khỏi UI.
