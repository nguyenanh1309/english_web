# English Learning App - Ứng dụng học tiếng Anh

Nền tảng học tiếng Anh trực tuyến cho học sinh cấp 1 (lớp 3, 4, 5) và cấp 2 (lớp 6, 7, 8, 9) được xây dựng bằng Next.js 14 với App Router và TypeScript.

## Tính năng

### ✨ Tính năng chính
- **Phân chia theo khối lớp**: Hỗ trợ từ lớp 3 đến lớp 9
- **Học theo Unit**: Mỗi unit bao gồm:
  - 📚 Từ vựng với phát âm và ví dụ
  - 📖 Ngữ pháp với giải thích chi tiết
  - 🎥 Video bài giảng
  - ✍️ Bài tập tương tác với nhiều dạng câu hỏi
- **Giao diện thân thiện**: Thiết kế hiện đại, dễ sử dụng
- **Responsive**: Hoạt động tốt trên mọi thiết bị

### 📝 Các loại bài tập
- Trắc nghiệm nhiều lựa chọn (Multiple choice)
- Điền từ vào chỗ trống (Fill in the blank)
- Nối từ (Matching)
- Đúng/Sai (True/False)

## Công nghệ sử dụng

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **State Management**: React Hooks

## Cài đặt và chạy dự án

### Yêu cầu
- Node.js 18.x trở lên
- npm hoặc yarn

### Các bước cài đặt

1. **Clone hoặc tải project**

2. **Cài đặt dependencies**
```bash
npm install
# hoặc
yarn install
```

3. **Chạy development server**
```bash
npm run dev
# hoặc
yarn dev
```

4. **Mở trình duyệt**
Truy cập [http://localhost:3000](http://localhost:3000) để xem ứng dụng.

## Cấu trúc thư mục

```
english-learning-app/
├── app/                          # Next.js App Router
│   ├── page.tsx                  # Trang chủ
│   ├── layout.tsx                # Root layout
│   ├── globals.css               # Global styles
│   └── grade/
│       └── [grade]/              # Dynamic route cho từng lớp
│           ├── page.tsx          # Danh sách units theo lớp
│           └── unit/
│               └── [unitId]/
│                   └── page.tsx  # Chi tiết unit
├── types/
│   └── index.ts                  # TypeScript types
├── data/
│   └── units.ts                  # Dữ liệu mẫu các units
├── components/                   # React components (có thể mở rộng)
├── public/                       # Static files
├── tailwind.config.ts            # Tailwind configuration
├── tsconfig.json                 # TypeScript configuration
└── package.json
```

## Mở rộng và tùy chỉnh

### Thêm Units mới
Chỉnh sửa file `data/units.ts` để thêm units cho các lớp:

```typescript
{
  id: 'unit-6-2',
  unitNumber: 2,
  title: 'My home',
  description: 'Học về ngôi nhà',
  grade: 6,
  vocabulary: [...],
  grammar: [...],
  videos: [...],
  exercises: [...]
}
```

### Tích hợp Video thật
Hiện tại video đang dùng placeholder. Để tích hợp video YouTube:

```tsx
<iframe
  width="100%"
  height="100%"
  src={`https://www.youtube.com/embed/${videoId}`}
  title={video.title}
  frameBorder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen
/>
```

### Thêm Audio cho từ vựng
Sử dụng Web Speech API hoặc tích hợp với các dịch vụ text-to-speech.

### Lưu tiến độ học tập
Có thể tích hợp với:
- Local Storage (đơn giản)
- Database (Supabase, Firebase, PostgreSQL)
- API backend riêng

## Build cho production

```bash
npm run build
npm start
```

## Đóng góp

Mọi đóng góp để cải thiện ứng dụng đều được hoan nghênh!

## License

MIT License - Tự do sử dụng cho mục đích học tập và giảng dạy.

## Liên hệ

Nếu có câu hỏi hoặc góp ý, vui lòng tạo issue trên GitHub.

---

**Chúc bạn học tốt! 📚🎓**
