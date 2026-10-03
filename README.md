# 🌟 LittleLingo Playground — Ứng Dụng Học Tiếng Anh Tương Tác Trẻ 3–5 Tuổi

Ứng dụng học tiếng Anh tương tác mầm non chuẩn sư phạm quốc tế, kết hợp **Synthetic Phonics (7 nhóm Jolly Phonics)**, **TPR (Total Physical Response)**, **Comprehensible Input (Stephen Krashen)**, và **Tranh truyện tương tác theo nhịp (Interactive Leveled Readers)**.

Dự án được tư vấn thiết kế và nghiệm thu độc lập bởi **Kiến trúc sư trưởng PE (Claude Sonnet 5 Thinking qua Perplexity Pro)** và thi công bởi **Kỹ sư AN (Antigravity)** dưới sự chỉ đạo của **Minh Chủ Thoan**.

---

## 🚀 Hướng Dẫn Cài Đặt & Khởi Động

### Yêu cầu hệ thống:
- Node.js ≥ 18 (Đã kiểm thử tốt trên Node v26)
- npm ≥ 9

### Khởi chạy:
```bash
# 1. Cài đặt thư viện phụ thuộc (nếu chưa cài)
npm install

# 2. Khởi chạy Development Server (Cổng 5180, tự động nâng port + 1 nếu bận)
npm run dev

# 3. Hoặc đóng gói & chạy bản Production Preview:
npm run build
npm run preview
```

> **Quy định quản lý cổng mạng:** Máy chủ được cấu hình tại cổng `5180` với thuộc tính `strictPort: false`. Nếu cổng `5180` bị chiếm dụng, hệ thống sẽ tự động chuyển tiếp sang cổng kế tiếp (`5181`, `5182`...) mà không gây lỗi xung đột cổng.

---

## 🎨 Trụ Cột Tính Năng Hoàn Chỉnh

### 1. Bản Đồ Thám Hiểm 7 Quần Đảo Âm Thanh (`PhonicsIslandMap.tsx`)
- Phân nhóm 42 âm vị tiếng Anh theo **7 nhóm Jolly Phonics** quốc tế:
  - **Nhóm 1:** `s, a, t, i, p, n` (Đảo Mặt Trời & Rừng Rậm) — Trẻ học xong nhóm này đã có thể tự đọc và ghép hàng chục từ tiếng Anh có nghĩa.
  - **Nhóm 2:** `c/k, e, h, r, m, d` (Đảo Nông Trại Vui Vẻ)
  - **Nhóm 3:** `g, o, u, l, f, b` (Đảo Hải Tặc Thân Thiện)
  - **Nhóm 4:** `ai, j, oa, ie, ee, or` (Đảo Cầu Vồng Thần Tiên)
  - **Nhóm 5:** `z, w, ng, v, oo (ngắn/dài)` (Đảo Rừng Nhiệt Đới)
  - **Nhóm 6:** `y, x, ch, sh, th (vô thanh/hữu thanh)` (Đảo Phép Thuật)
  - **Nhóm 7:** `qu, ou, oi, ue, er, ar` (Đảo Vương Quốc Vàng)

### 2. Micro-Lesson Player 6 Bước Không Áp Lực (`LessonPlayer.tsx`)
1. **Làm quen âm thanh:** Chữ cái to bản, hoạt ảnh nhấp nháy, âm chuẩn người bản xứ.
2. **Khẩu hình chuẩn 2D (`SoundVisemeGuide.tsx`):** Mô phỏng vị trí răng, lưỡi, môi và luồng hơi thở (puff/continuous), hướng dẫn tiếng Việt dễ hiểu.
3. **Vận động toàn thân (TPR):** Mỗi âm vị đi kèm một động tác hình tượng (ví dụ: uốn tay như rắn `sssss`, thổi nến `p-p-p`).
4. **Từ vựng cốt lõi:** Nghe và nhận diện âm qua các thẻ hình ảnh trực quan.
5. **Cỗ máy ghép vần bong bóng (`BubbleBlender.tsx`):** Chạm từng bong bóng âm thanh rồi bấm nút thần kỳ để ghép thành từ hoàn chỉnh (`s` + `a` + `t` = `sat`).
6. **Chiến thắng & Ngôi sao:** Pháo hoa chúc mừng, không điểm số, không trừ phạt.

### 3. Phòng Ngừa Lỗi Phát Âm — Trò Chơi Lắng Nghe Phân Biệt Âm (`MinimalPairsView.tsx`)
- Luyện tập phân biệt các cặp âm then chốt dễ gây mất gốc cho người Việt:
  - `/p/` (thổi hơi gió) vs `/b/` (rung cổ họng)
  - `/s/` (cười hé răng) vs `/ʃ/` (chu môi suỵt shhh)
  - `/t/` (gõ tích tắc) vs `/d/` (gõ trầm có rung)
  - `/f/` (cắn môi thổi gió) vs `/v/` (cắn môi rung kèn)
- Có nút "Bỏ qua bài này", tuyệt đối không gây áp lực điểm số.

### 4. Tranh Truyện Đọc Tương Tác Theo Nhịp (`StoryReader.tsx` & `StoryLibrary.tsx`)
- Thư viện Decodable Readers theo từng cấp độ (Level 1, Level 2).
- **Karaoke Word Timing:** Tô sáng từng từ đồng bộ theo giọng đọc chuẩn.
- **Interactive Hotspots:** Chạm vào nhân vật, đồ vật để xem chuyển động nhảy múa, phát tiếng kêu sinh động (meow, bark, chime).
- **Touch-to-Answer:** Câu hỏi tương tác chạm hình ảnh, không đòi hỏi trẻ phải biết đọc chữ.
- **Thử thách nói thân thiện:** Tự chọn 100%, không bắt buộc.

### 5. Tuân Thủ Nghiêm Ngặt COPPA & Bảo Mật Trẻ Em
- **Microphone:** Mặc định **TẮT**. Chỉ được kích hoạt khi phụ huynh chủ động bật trong Góc Phụ Huynh.
- **Xử lý âm thanh:** 100% tạm thời (transient) trên bộ nhớ RAM thiết bị, **không lưu trữ file ghi âm**, **không gửi dữ liệu lên máy chủ**.
- **Không quảng cáo, không mã theo dõi hành vi**.
- Cung cấp tính năng **Xóa Toàn Bộ Dữ Liệu (Right to Deletion)** một chạm.

### 6. Bảo Vệ Mắt & Sức Khỏe Mầm Non (`RestBreakModal.tsx`)
- Hẹn giờ tự động nhắc nghỉ ngơi sau 5–8 phút (chuẩn khuyến cáo y khoa trẻ 3-5 tuổi).
- Tích hợp bài tập vận động vươn vai hươu cao cổ (TPR Giraffe Stretch) để trẻ rời mắt khỏi màn hình.
- Chế độ **Giảm chuyển động (Reduced Motion)** cho mắt nhạy cảm.

### 7. Góc Phụ Huynh Bảo Mật (`ParentDashboard.tsx`)
- Khóa bằng phép tính người lớn ngẫu nhiên (Math Gate).
- Bảng phân tích tiến độ nhận thức âm vị.
- Cài đặt thời lượng phiên chơi, giọng US/UK.
- 3 Thẻ bài gợi ý tương tác Co-play 1 phút ngoài đời thực giữa bố mẹ và con.

---

## 📂 Cấu Trúc Mã Nguồn

```text
src/
├── types/
│   ├── phonics.ts          # Định nghĩa kiểu dữ liệu Phonics, Viseme, Minimal Pairs
│   ├── story.ts            # Định nghĩa Decodable Story, Timing, Hotspot
│   └── user.ts             # Định nghĩa Profile, SessionSettings (COPPA, Health)
├── data/
│   ├── phonicsGroups.ts    # Dữ liệu 7 nhóm Jolly Phonics (42 âm vị) & Đảo âm thanh
│   ├── minimalPairs.ts     # Dữ liệu các cặp âm tối thiểu phân biệt
│   └── stories.ts          # Thư viện truyện tranh giải mã tương tác có timing
├── services/
│   ├── audioService.ts     # Web Audio API Synthesizer (SFX) & SpeechSynthesis
│   ├── speechRecognition.ts# Child Speech Coach (Transient, No-fail, COPPA opt-in)
│   └── storageService.ts   # Local-first persistence & Right to Deletion
├── components/
│   ├── Navbar.tsx          # Thanh điều hướng, bộ đếm sao, toggle âm thanh, nút phụ huynh
│   ├── KidButton.tsx       # Nút bấm nảy xúc giác to bản kèm âm pop
│   ├── CharacterCompanion.tsx # Chú sư tử Leo đồng hành tương tác
│   ├── SoundVisemeGuide.tsx# Mô phỏng khẩu hình răng-lưỡi-hơi thở 2D
│   ├── BubbleBlender.tsx   # Ghép âm bong bóng
│   ├── MinimalPairDrill.tsx# Bài tập nghe phân biệt âm
│   ├── StoryReader.tsx     # Đọc truyện tương tác karaoke + hotspots
│   ├── StoryLibrary.tsx    # Thư viện truyện decodable
│   ├── PhonicsIslandMap.tsx# Bản đồ 7 đảo âm thanh
│   ├── LessonPlayer.tsx    # Trình học micro-lesson 6 bước
│   ├── ParentDashboard.tsx # Cổng phụ huynh có khóa tính nhẩm & COPPA
│   └── RestBreakModal.tsx  # Cảnh báo nghỉ mắt & bài tập TPR
├── App.tsx                 # Điều phối luồng ứng dụng chính
├── main.tsx                # Entry point
└── index.css               # Tailwind CSS & hoạt ảnh trẻ thơ
```
