import Link from 'next/link';
import { ArrowLeft, BookOpen, Video, FileText, Brain } from 'lucide-react';
import { getUnitsByGrade } from '@/data/index';
import { Grade } from '@/types';

export function generateStaticParams() {
  return [
    { grade: '3' },
    { grade: '4' },
    { grade: '5' },
    { grade: '6' },
    { grade: '7' },
    { grade: '8' },
    { grade: '9' },
  ];
}

export default function GradePage({ params }: { params: { grade: string } }) {
  const gradeNumber = parseInt(params.grade) as Grade;
  const units = getUnitsByGrade(gradeNumber);
  
  const gradeLevel = gradeNumber <= 5 ? 'Cấp 1' : 'Cấp 2';
  const levelColor = gradeNumber <= 5 ? 'blue' : 'purple';

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center space-x-4">
            <Link href="/" className="text-gray-600 hover:text-blue-600 transition">
              <ArrowLeft className="w-6 h-6" />
            </Link>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                Lớp {gradeNumber} - {gradeLevel}
              </h1>
              <p className="text-sm text-gray-600">Chọn Unit để bắt đầu học</p>
            </div>
          </div>
        </div>
      </header>

      {/* Units List */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {units.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {units.map((unit) => (
              <Link
                key={unit.id}
                href={`/grade/${gradeNumber}/unit/${unit.id}`}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all overflow-hidden group"
              >
                <div className={`bg-gradient-to-r from-${levelColor}-500 to-${levelColor}-600 p-4 text-white`}>
                  <h3 className="text-lg font-bold">Unit {unit.unitNumber}</h3>
                  <p className="text-sm opacity-90">{unit.title}</p>
                </div>
                
                <div className="p-6">
                  <p className="text-gray-600 mb-6 line-clamp-2">{unit.description}</p>
                  
                  <div className="grid grid-cols-2 gap-3 text-sm">
  
                    
                    <div className="flex items-center space-x-2 text-gray-700">
                      <Video className="w-4 h-4 text-purple-500" />
                      <span>{unit.videos.length} video</span>
                    </div>
                    
                    <div className="flex items-center space-x-2 text-gray-700">
                      <FileText className="w-4 h-4 text-orange-500" />
                      <span>{unit.exercises.length} bài tập</span>
                    </div>
                  </div>
                  
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <span className="text-blue-600 font-medium group-hover:text-blue-700 transition">
                      Bắt đầu học →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              Chưa có nội dung
            </h3>
            <p className="text-gray-500">
              Nội dung học tập cho lớp {gradeNumber} đang được cập nhật
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
