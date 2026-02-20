# HƯỚNG DẪN NHANH - QUICK START GUIDE

## 🚀 Cách chạy ứng dụng

### Bước 1: Cài đặt Node.js
Nếu chưa có Node.js, tải và cài đặt từ: https://nodejs.org/
Chọn phiên bản LTS (Long Term Support)

### Bước 2: Mở Terminal/Command Prompt
- **Windows**: Nhấn `Win + R`, gõ `cmd`, Enter
- **Mac**: Nhấn `Cmd + Space`, gõ `terminal`, Enter

### Bước 3: Di chuyển vào thư mục dự án
```bash
cd đường_dẫn_đến_thư_mục/english-learning-app
```

### Bước 4: Cài đặt các package cần thiết
```bash
npm install
```
Quá trình này sẽ mất vài phút. Đợi cho đến khi hoàn tất.

### Bước 5: Chạy ứng dụng
```bash
npm run dev
```

### Bước 6: Mở trình duyệt
Mở trình duyệt và truy cập: **http://localhost:3000**

🎉 **Xong! Ứng dụng đã chạy!**

---

## 📱 Sử dụng ứng dụng

### Trang chủ
- Chọn **Cấp 1** cho học sinh lớp 3, 4, 5
- Chọn **Cấp 2** cho học sinh lớp 6, 7, 8, 9

### Chọn lớp
- Click vào nút lớp (VD: Lớp 3, Lớp 6...)
- Xem danh sách các Unit có sẵn

### Học từng Unit
Mỗi Unit có 4 phần:

1. **📚 Từ Vựng**
   - Xem từ mới với phát âm
   - Đọc nghĩa và ví dụ
   - Click icon loa để nghe (tính năng mở rộng)

2. **📖 Ngữ Pháp**
   - Đọc giải thích ngữ pháp
   - Xem các ví dụ minh họa
   - Lưu ý các điểm quan trọng

3. **🎥 Video Bài Giảng**
   - Xem video giảng dạy
   - Học theo hướng dẫn của giáo viên

4. **✍️ Bài Tập**
   - Chọn bài tập muốn làm
   - Trả lời các câu hỏi
   - Click "Kiểm tra đáp án" để xem kết quả
   - Đọc giải thích để hiểu rõ hơn

---

## 🛠️ Tùy chỉnh nội dung

### Thêm Unit mới
Mở file: `data/units.ts`

Thêm một object mới vào mảng `sampleUnits`:

```typescript
{
  id: 'unit-3-2',        // ID duy nhất
  unitNumber: 2,         // Số thứ tự Unit
  title: 'Tên Unit',     // Tiêu đề
  description: 'Mô tả',  // Mô tả ngắn
  grade: 3,              // Lớp (3-9)
  vocabulary: [...],     // Danh sách từ vựng
  grammar: [...],        // Danh sách ngữ pháp
  videos: [...],         // Danh sách video
  exercises: [...]       // Danh sách bài tập
}
```

### Thêm từ vựng mới
```typescript
vocabulary: [
  {
    id: 'vocab-1',
    word: 'Apple',
    pronunciation: '/ˈæpl/',
    meaning: 'Quả táo',
    example: 'I like apples.'
  }
]
```

### Thêm ngữ pháp mới
```typescript
grammar: [
  {
    id: 'grammar-1',
    title: 'Present Simple',
    explanation: 'Giải thích...',
    examples: [
      'I play football.',
      'She likes music.'
    ],
    notes: 'Lưu ý...'
  }
]
```

### Thêm bài tập mới
```typescript
exercises: [
  {
    id: 'exercise-1',
    title: 'Bài tập 1',
    type: 'vocabulary', // hoặc 'grammar', 'listening', 'reading', 'mixed'
    totalPoints: 10,
    questions: [
      {
        id: 'q1',
        type: 'multiple-choice',
        question: 'Câu hỏi?',
        options: ['A', 'B', 'C', 'D'],
        correctAnswer: 'A',
        explanation: 'Giải thích...'
      }
    ]
  }
]
```

---

## 💡 Tips

1. **Lưu tiến trình**: Hiện tại chưa có tính năng lưu tự động. Có thể thêm bằng Local Storage hoặc Database

2. **Thêm âm thanh**: Sử dụng Web Speech API hoặc các file MP3

3. **Video thật**: Thay thế placeholder bằng link YouTube hoặc video tự host

4. **Responsive**: Ứng dụng đã tối ưu cho cả desktop và mobile

5. **Mở rộng**: Có thể thêm:
   - Hệ thống đăng nhập
   - Theo dõi tiến độ
   - Bảng xếp hạng
   - Chứng chỉ hoàn thành
   - Forum thảo luận

---

## ❓ Troubleshooting

### Lỗi khi chạy npm install
- Kiểm tra kết nối internet
- Thử xóa folder `node_modules` và chạy lại

### Lỗi "Port 3000 is already in use"
- Có ứng dụng khác đang chạy port 3000
- Tắt ứng dụng đó hoặc đổi port trong file config

### Lỗi không tìm thấy module
- Chạy lại `npm install`
- Kiểm tra file `package.json`

---

## 📞 Hỗ trợ

Nếu gặp vấn đề, có thể:
1. Đọc lại README.md
2. Kiểm tra console của trình duyệt (F12)
3. Google lỗi cụ thể
4. Tìm kiếm trên Stack Overflow

---

**Chúc bạn thành công! 🎓✨**
