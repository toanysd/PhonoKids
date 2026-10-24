# AGENTS.md — englishStudy (Smart Memory Palace 2.5 Directory)
<!-- Keep <= 4 KB. Always read this file FIRST, then jump to exact [Lstart-Lend] ranges in .agents/context/PROJECT_MAP.md. -->

## 1. Đại Sảnh Dự Án (Quick Overview & Entry Points)
- **Dự án:** `englishStudy` (thuộc hệ sinh thái Monorepo Antigravity).
- **Không gian thi công chính:** `D:\AntiGravity_Workspace\apps\englishStudy`.
- **Quy tắc Cổng mạng:** Không dùng cứng cổng `3000`, `5000`, `8000`, `8080`; tự động xử lý `EADDRINUSE` (`port + 1`).

## 2. Sơ Đồ Các Phòng & Tủ Sách (4-Tier Memory Palace Routing)
1. **Bản đồ Code, DB/API & Tọa độ Dòng (`[Lstart-Lend]`):** Đọc [`.agents/context/PROJECT_MAP.md`](file:///D:/AntiGravity_Workspace/apps/englishStudy/.agents/context/PROJECT_MAP.md) **TRƯỚC KHI** tìm file hay mở tài liệu.
2. **Sổ bàn giao ca ($\le 40\text{ dòng}$):** Đọc [`.agents/context/HANDOFF.md`](file:///D:/AntiGravity_Workspace/apps/englishStudy/.agents/context/HANDOFF.md).
3. **Sổ bài học & Chống tái phạm:** Đọc [`docs/SO_BAI_HOC.md`](file:///D:/AntiGravity_Workspace/apps/englishStudy/docs/SO_BAI_HOC.md).

## 3. Quy Tắc Đọc & Vùng Cấm Đọc (Token Economy & Surgical Changes)
- **TOC-First Reading:** Với mọi file $> 150\text{ dòng}$, tra khoảng dòng `[Lstart-Lend]` trong `PROJECT_MAP.md` rồi gọi `view_file(StartLine, EndLine)`.
- **Vùng CẤM đọc tự động:** `node_modules/`, `.venv/`, `.next/`, `dist/`, `temp_ai/`, lockfiles, các gói nén `.rar`/`.zip`.
- **Code phẫu thuật:** Chỉ sửa đúng khối mã cần thiết; bảo toàn comment/docstring hiện hữu.

## 4. Chu Trình Khép Kín (`Code -> Test -> Spec -> Map -> Handoff`)
- Cập nhật lại Bản đồ tọa độ dòng sau khi sửa code/docs:
  `python "%USERPROFILE%\.gemini\config\plugins\token-economy\scripts\repomap.py" .`
