import Link from 'next/link';
import { BookOpen, GraduationCap, Users, Award } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <BookOpen className="w-8 h-8 text-blue-600" />
              <h1 className="text-2xl font-bold text-gray-900">Learning English </h1>
            </div>
            <nav className="hidden md:flex space-x-6">
              <Link href="/" className="text-gray-600 hover:text-blue-600 transition">Trang chủ</Link>
              <Link href="/about" className="text-gray-600 hover:text-blue-600 transition">Giới thiệu</Link>
              <Link href="/contact" className="text-gray-600 hover:text-blue-600 transition">Liên hệ</Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Ms. Le Nhi English Learning Space
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Smart Learning - Happy Teaching
          </p>
        </div>
      </section>

      {/* Grade Selection */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Cấp 1 */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
            <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-6 text-white">
              <div className="flex items-center space-x-3">
                <GraduationCap className="w-10 h-10" />
                <div>
                  <h4 className="text-2xl font-bold">Primary</h4>
                  <p className="text-blue-100">Tiếng Anh Global Success</p>
                </div>
              </div>
            </div>
            <div className="p-6">
      
              <div className="grid grid-cols-3 gap-3">
                <Link 
                  href="/grade/3" 
                  className="bg-blue-50 hover:bg-blue-100 text-blue-700 font-semibold py-3 px-4 rounded-lg text-center transition"
                >
                  Lớp 3
                </Link>
                <Link 
                  href="/grade/4" 
                  className="bg-blue-50 hover:bg-blue-100 text-blue-700 font-semibold py-3 px-4 rounded-lg text-center transition"
                >
                  Lớp 4
                </Link>
                <Link 
                  href="/grade/5" 
                  className="bg-blue-50 hover:bg-blue-100 text-blue-700 font-semibold py-3 px-4 rounded-lg text-center transition"
                >
                  Lớp 5
                </Link>
              </div>
            </div>
          </div>

          {/* Cấp 2 */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
            <div className="bg-gradient-to-r from-purple-500 to-purple-600 p-6 text-white">
              <div className="flex items-center space-x-3">
                <Users className="w-10 h-10" />
                <div>
                  <h4 className="text-2xl font-bold"> Secondary</h4>
                  <p className="text-purple-100">Tiếng Anh Global Success</p>
                </div>
              </div>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-4 gap-3">
                <Link 
                  href="/grade/6" 
                  className="bg-purple-50 hover:bg-purple-100 text-purple-700 font-semibold py-3 px-4 rounded-lg text-center transition"
                >
                  Lớp 6
                </Link>
                <Link 
                  href="/grade/7" 
                  className="bg-purple-50 hover:bg-purple-100 text-purple-700 font-semibold py-3 px-4 rounded-lg text-center transition"
                >
                  Lớp 7
                </Link>
                <Link 
                  href="/grade/8" 
                  className="bg-purple-50 hover:bg-purple-100 text-purple-700 font-semibold py-3 px-4 rounded-lg text-center transition"
                >
                  Lớp 8
                </Link>
                <Link 
                  href="/grade/9" 
                  className="bg-purple-50 hover:bg-purple-100 text-purple-700 font-semibold py-3 px-4 rounded-lg text-center transition"
                >
                  Lớp 9
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-900">Tính Năng Nổi Bật</h3>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-blue-600" />
              </div>
              <h4 className="font-semibold text-lg mb-2">Từ Vựng Phong Phú</h4>
              <p className="text-gray-600">Học từ vựng theo chủ đề với hình ảnh và phát âm chuẩn</p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-green-600" />
              </div>
              <h4 className="font-semibold text-lg mb-2">Ngữ Pháp Chi Tiết</h4>
              <p className="text-gray-600">Giải thích ngữ pháp dễ hiểu với nhiều ví dụ</p>
            </div>

            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="w-8 h-8 text-purple-600" />
              </div>
              <h4 className="font-semibold text-lg mb-2">Video Bài Giảng</h4>
              <p className="text-gray-600">Video giảng dạy sinh động, dễ hiểu</p>
            </div>

            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-orange-600" />
              </div>
              <h4 className="font-semibold text-lg mb-2">Bài Tập Tương Tác</h4>
              <p className="text-gray-600">Luyện tập với bài tập đa dạng và kiểm tra ngay</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; 2026 Learning English . Kho học liệu Tiếng Anh.</p>
        </div>
      </footer>
    </div>
  );
}
