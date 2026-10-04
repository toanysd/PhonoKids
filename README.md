# 🌟 PhonoKids — Ehon Phonics & Interactive Language Playground

[![React](https://img.shields.io/badge/React-18.3.1-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7.2-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6.0.7-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.17-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![PWA](https://img.shields.io/badge/PWA-Ready-f59e0b?logo=pwa&logoColor=white)](https://web.dev/progressive-web-apps/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

> **PhonoKids** là ứng dụng giáo dục sớm và học ngữ âm tương tác đa giác quan dành riêng cho trẻ em từ 3 đến 8 tuổi. Kết hợp phương pháp **Synthetic Phonics** chuẩn quốc tế (Jolly Phonics, Oxford Phonics World) cùng triết lý thẩm mỹ và hội hoạ **Ehon Nhật Bản**, PhonoKids mang lại môi trường học tập tự nhiên, êm dịu và không áp lực cho bé.

---

## 🎨 Điểm Nhấn Sư Phạm & Tính Năng Đột Phá

### 1. 🔤 42 Âm Vị Phonics Qua 7 Nhóm Tiến Trình
- Lộ trình khoa học từ âm đơn dễ bật hơi (`s, a, t, i, p, n`) đến các nguyên âm đôi, tổ hợp phụ âm (`ch, sh, th, ng, ai, ee, igh, oa, oo`).
- Mỗi âm vị đi kèm:
  - **Mô tả âm học & Viseme khẩu hình**: Hướng dẫn hình dạng môi, lưỡi và luồng hơi.
  - **Vận động phản xạ TPR (Total Physical Response)**: Động tác cơ thể mô phỏng âm điệu giúp ghi nhớ qua xúc giác và vận động.
  - **Bản thu âm bản xứ thuần khiết**: 100% không bị chêm âm đệm (loại bỏ hoàn toàn lỗi phát âm schwa /ə/ như "pơ", "pê" thường gặp).

### 2. 👂 Phòng Lỗi Phát Âm • Cặp Tối Thiểu (Minimal Pairs)
- Rèn luyện độ nhạy đôi tai để phân biệt các âm dễ gây nhầm lẫn (`/p/` vs `/b/`, `/s/` vs `/ʃ/`, `/t/` vs `/d/`, `/f/` vs `/v/`).
- **4 Chế độ tự động đọc thông minh**:
  - 🔊 *Chỉ Từ*: Đọc nhanh từ mục tiêu cần phân biệt.
  - 🎯 *Âm Vị & Từ*: Đọc âm vị chuẩn rồi phát âm từ mục tiêu.
  - 🔤 *Đánh Vần*: Tách từng âm vị ghép từ rồi đọc từ hoàn chỉnh.
  - 🌟 *Toàn Bộ*: Đọc câu gợi ý bằng tiếng Anh tự nhiên và từ mẫu.
- Tự động phát âm khi mở thẻ, Next, Back hoặc chuyển bài tự động khi chọn đúng.
- Cơ chế phản hồi tâm lý nhẹ nhàng (*Gentle Error Feedback*), động viên bé nghe lại mà không tạo cảm giác thất bại.

### 3. ✍️ Xưởng Tập Tô & Nhận Diện Ký Tự (Tracing Studio & Recognition)
- Tô theo nét chữ với thuật toán phân tích điểm chạm, tính toán độ phủ nét chính xác.
- Tự động chuyển chữ tiếp theo tạo phiên học liền mạch, kèm pháo hoa và âm thanh chúc mừng sinh động.
- Trò chơi phân biệt chữ cái tương đồng (`b` vs `d`, `p` vs `q`, `m` vs `w`).

### 4. 📚 Thư Viện Truyện Ehon Giải Mã (Decodable Story Readers)
- Truyện tranh ngắn được viết theo nguyên tắc Decodable: Chỉ sử dụng các từ vựng bé đã học theo từng nhóm âm.
- 100% tranh minh hoạ Ehon vẽ tay ấm áp, loại bỏ hoàn toàn clipart vector công nghiệp vô cảm.
- Chạm vào từng từ để nghe phát âm, có câu hỏi thấu cảm rèn luyện tư duy ngôn ngữ cho bé.

### 5. 🎴 Ngân Hàng 796 Từ Vựng Flashcard Đa Tương Tác
- Phân loại theo 4 chủ đề gần gũi: *Động vật*, *Thiên nhiên*, *Đồ vật & Món ăn*, *Vận động*.
- Chế độ lật thẻ Flashcard liên tục, tích hợp bộ đọc mẫu 4 chế độ và tự động chuyển thẻ.

### 6. 📱 Thiết Kế Zero-Scroll Locked Viewport
- Giao diện được tối ưu hoá theo chiều cao màn hình cố định, loại bỏ hoàn toàn thanh cuộn khó chịu trên iPad và máy tính bảng.
- Màu sắc pastel bảo vệ mắt trẻ nhỏ, các nút bấm to, phản hồi nảy 3D thân thiện với bàn tay bé.

---

## 🛠️ Công Nghệ & Kiến Trúc Kỹ Thuật

- **Frontend Core**: React 18 / 19 + TypeScript (Strict Mode).
- **Build Tool**: Vite 6 (HMR tức thì, đóng gói siêu tốc).
- **Styling**: Tailwind CSS với bảng màu pastel thân thiện và font chữ tròn trẻ em Nunito.
- **Audio Engine**: Web Audio API (Synthesized acoustic jingles) + Native SpeechSynthesis Engine + HTML5 Audio Preload.
- **Micro-Interactions**: Canvas-confetti, Lucide Icons, Touch Event Handlers.
- **PWA Ready**: Web App Manifest, Service Worker caching, tối ưu hóa toàn màn hình cho iPad & Tablet.

---

## 🚀 Hướng Dẫn Khởi Chạy Cục Bộ (Local Development)

### Yêu cầu môi trường
- [Node.js](https://nodejs.org/) (phiên bản 18 trở lên).
- Trình quản lý gói `npm` (đi kèm Node.js).

### Các bước cài đặt
```bash
# 1. Sao chép mã nguồn từ GitHub
git clone https://github.com/toanysd/PhonoKids.git

# 2. Di chuyển vào thư mục dự án
cd PhonoKids

# 3. Cài đặt các gói phụ thuộc
npm install

# 4. Khởi động môi trường phát triển (Dev Server)
npm run dev
```
Trình duyệt sẽ tự động mở tại địa chỉ `http://localhost:5173` (hoặc cổng động được cấp phát).

### Kiểm tra và đóng gói bản phát hành
```bash
# Kiểm tra toàn bộ kiểu TypeScript và build production
npm run build

# Xem thử bản build trước khi deploy
npm run preview
```

---

## 🌐 Triển Khai Trực Tuyến (Deploy Online Trong 1 Phút)

### Cách 1: Triển khai qua Vercel (Khuyến nghị)
1. Truy cập [Vercel](https://vercel.com/) và đăng nhập bằng tài khoản GitHub.
2. Bấm **Add New Project** ➔ Chọn repository **`toanysd/PhonoKids`**.
3. Giữ nguyên cấu hình mặc định:
   - **Framework Preset**: `Vite`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
4. Bấm **Deploy**. Sau 45 giây, ứng dụng sẽ có link online toàn cầu với HTTPS bảo mật tự động.

### Cách 2: Triển khai qua Cloudflare Pages
1. Đăng nhập [Cloudflare Dashboard](https://dash.cloudflare.com/) ➔ Chọn **Workers & Pages**.
2. Kết nối repo **`toanysd/PhonoKids`**, chọn preset **Vite**.
3. Bấm **Save and Deploy**.

---

## 📲 Cài Đặt Ứng Dụng Trên iPad / Điện Thoại (PWA)
1. Mở link ứng dụng trên trình duyệt **Safari** (iOS / iPadOS) hoặc **Chrome** (Android).
2. Bấm vào nút **Chia sẻ (Share)** trên Safari ➔ Chọn **"Thêm vào Màn hình chính" (Add to Home Screen)**.
3. Biểu tượng **PhonoKids 🌟** sẽ xuất hiện trên màn hình như một ứng dụng gốc, chạy toàn màn hình và lưu cache âm thanh để học ngay cả khi mất mạng.

---

## 🗺️ Lộ Trình Phát Triển Tiếp Theo (Roadmap)

- [x] Hoàn thiện 42 âm vị Synthetic Phonics & 7 nhóm bài học.
- [x] Xưởng tập tô chữ (Letter Tracing) & Game nhận diện.
- [x] Phòng luyện phân biệt âm (Minimal Pairs) với 4 chế độ đọc tự động.
- [x] Ngân hàng 796 từ vựng tranh Ehon đa chủ đề.
- [ ] **Mở rộng Module Tiếng Nhật (KanaPhonics)**:
  - 50 âm cơ bản (Gojūon 五十音): *a-ka-sa-ta-na-ha-ma-ya-ra-wa*.
  - Biến âm đục (Dakuon) và bán đục (Handakuon).
  - Luyện âm ngắt (Sokuon) và trường âm (Chōon) theo giáo trình *Kodomo Challenge*, *Kumon Kokugo* và *Gakken*.
- [ ] Đóng gói phiên bản ứng dụng độc lập `.exe` cho máy tính Windows (Tauri v2).

---

## 📄 Bản Quyền & Giấy Phép

Phát triển bởi đội ngũ kỹ thuật tự trị **PE - THOAN - AN**.  
Phát hành theo giấy phép mã nguồn mở [MIT License](LICENSE).
