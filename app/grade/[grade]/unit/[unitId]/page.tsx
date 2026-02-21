'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, BookOpen, Brain, Video, FileText, Volume2, CheckCircle } from 'lucide-react';
import { getUnitById } from '@/data/index';
import { Unit, Question } from '@/types';
import Image from 'next/image';

export default function UnitPage({ params }: { params: { grade: string; unitId: string } }) {
  const unit = getUnitById(params.unitId);
  const [activeTab, setActiveTab] = useState< 'videos' | 'exercises' |'img' | 'wordwall' |'yourhomework'>('img');
  const [selectedExercise, setSelectedExercise] = useState<number | null>(null);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [showResults, setShowResults] = useState(false);

  if (!unit) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-700">Unit không tồn tại</h1>
          <Link href={`/grade/${params.grade}`} className="text-blue-600 hover:underline mt-4 inline-block">
            Quay lại danh sách Units
          </Link>
        </div>
      </div>
    );
  }

  const handleAnswerChange = (questionId: string, answer: string) => {
    setAnswers(prev => ({ ...prev, [questionId]: answer }));
  };

  const checkAnswers = () => {
    setShowResults(true);
  };

  const resetExercise = () => {
    setAnswers({});
    setShowResults(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center space-x-4">
            <Link href={`/grade/${params.grade}`} className="text-gray-600 hover:text-blue-600 transition">
              <ArrowLeft className="w-6 h-6" />
            </Link>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Unit {unit.unitNumber}: {unit.title}</h1>
              <p className="text-sm text-gray-600">{unit.description}</p>
            </div>
          </div>
        </div>
      </header>

      {/* Tabs */}
      <div className="bg-white border-b border-gray-200 sticky top-[73px] z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8 overflow-x-auto">
          


            <button
              onClick={() => setActiveTab('videos')}
              className={`flex items-center space-x-2 py-4 border-b-2 transition whitespace-nowrap ${
                activeTab === 'videos'
                  ? 'border-blue-600 text-blue-600'
                  : 'border-transparent text-gray-600 hover:text-gray-900'
              }`}
            >
              <Video className="w-5 h-5" />
              <span className="font-medium">Video Ôn Tập</span>
            </button>

            <button
              onClick={() => setActiveTab('exercises')}
              className={`flex items-center space-x-2 py-4 border-b-2 transition whitespace-nowrap ${
                activeTab === 'exercises'
                  ? 'border-blue-600 text-blue-600'
                  : 'border-transparent text-gray-600 hover:text-gray-900'
              }`}
            >
              <FileText className="w-5 h-5" />
              <span className="font-medium">Bài Tập</span>
            </button>

            <button
              onClick={() => setActiveTab('img')}
              className={`flex items-center space-x-2 py-4 border-b-2 transition whitespace-nowrap ${
                activeTab === 'img'
                  ? 'border-blue-600 text-blue-600'
                  : 'border-transparent text-gray-600 hover:text-gray-900'
              }`}
            >
              <FileText className="w-5 h-5" />
              <span className="font-medium">Inforgraphics</span>
            </button>

            <button
              onClick={() => setActiveTab('wordwall')}
              className={`flex items-center space-x-2 py-4 border-b-2 transition whitespace-nowrap ${
                activeTab === 'wordwall'
                  ? 'border-blue-600 text-blue-600'
                  : 'border-transparent text-gray-600 hover:text-gray-900'
              }`}
            >
              <FileText className="w-5 h-5" />
              <span className="font-medium">Wordwall</span>
            </button>

              <button
              onClick={() => setActiveTab('yourhomework')}
              className={`flex items-center space-x-2 py-4 border-b-2 transition whitespace-nowrap ${
                activeTab === 'yourhomework'
                  ? 'border-blue-600 text-blue-600'
                  : 'border-transparent text-gray-600 hover:text-gray-900'
              }`}
            >
              <FileText className="w-5 h-5" />
              <span className="font-medium">Yourhomework</span>
            </button>

          </div>


        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
     

        {/* Videos Tab */}
        {activeTab === "videos" && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Video Bài Giảng
            </h2>

            {unit.videos.map((video) => {
              // Hàm chuyển link youtube sang embed
              const getEmbedUrl = (url: string) => {
                const regExp =
                  /(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&]+)/;
                const match = url.match(regExp);
                return match
                  ? `https://www.youtube.com/embed/${match[1]}`
                  : url;
              };

              return (
                <div
                  key={video.id}
                  className="bg-white rounded-lg shadow-md overflow-hidden"
                >
                  <div className="aspect-video">
                    <iframe
                      className="w-full h-full"
                      src={getEmbedUrl(video.url)}
                      title={video.title}
                      allowFullScreen
                    />
                  </div>

                  <div className="p-4">
                    <h3 className="font-semibold text-lg">
                      {video.title}
                    </h3>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Exercises Tab */}
        {activeTab === 'exercises' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Bài Tập</h2>
            
            {/* Exercise List */}
            {selectedExercise === null ? (
              <div className="grid md:grid-cols-2 gap-6">
                {unit.exercises.map((exercise, index) => (
                  <div
                    key={exercise.id}
                    className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition cursor-pointer"
                    onClick={() => setSelectedExercise(index)}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-lg font-bold text-gray-900">{exercise.title}</h3>
                        <p className="text-sm text-gray-600 capitalize">{exercise.type}</p>
                      </div>
                      <div className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold">
                        {exercise.totalPoints} điểm
                      </div>
                    </div>
                    <p className="text-gray-600 mb-4">{exercise.questions.length} câu hỏi</p>
                    <button className="text-blue-600 font-medium hover:text-blue-700">
                      Làm bài →
                    </button>
                  </div>
                ))}
              </div>
            ) : (
              /* Exercise Detail */
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-gray-900">
                    {unit.exercises[selectedExercise].title}
                  </h3>
                  <button
                    onClick={() => {
                      setSelectedExercise(null);
                      resetExercise();
                    }}
                    className="text-gray-600 hover:text-gray-900"
                  >
                    <ArrowLeft className="w-5 h-5" />
                  </button>
                </div>

                <div className="space-y-6">
                  {unit.exercises[selectedExercise].questions.map((question, qIndex) => (
                    <div key={question.id} className="border-b border-gray-200 pb-6 last:border-0">
                      <p className="font-semibold text-gray-900 mb-4">
                        Câu {qIndex + 1}: {question.question}
                      </p>

                      {question.type === 'multiple-choice' && question.options && (
                        <div className="space-y-2">
                          {question.options.map((option) => (
                            <label
                              key={option}
                              className={`flex items-center space-x-3 p-3 rounded-lg border-2 cursor-pointer transition ${
                                showResults
                                  ? option === question.correctAnswer
                                    ? 'border-green-500 bg-green-50'
                                    : answers[question.id] === option
                                    ? 'border-red-500 bg-red-50'
                                    : 'border-gray-200'
                                  : answers[question.id] === option
                                  ? 'border-blue-500 bg-blue-50'
                                  : 'border-gray-200 hover:border-gray-300'
                              }`}
                            >
                              <input
                                type="radio"
                                name={question.id}
                                value={option}
                                checked={answers[question.id] === option}
                                onChange={(e) => handleAnswerChange(question.id, e.target.value)}
                                disabled={showResults}
                                className="w-4 h-4"
                              />
                              <span className="flex-1">{option}</span>
                              {showResults && option === question.correctAnswer && (
                                <CheckCircle className="w-5 h-5 text-green-600" />
                              )}
                            </label>
                          ))}
                        </div>
                      )}

                      {question.type === 'fill-in-blank' && (
                        <div>
                          <input
                            type="text"
                            value={answers[question.id] || ''}
                            onChange={(e) => handleAnswerChange(question.id, e.target.value)}
                            disabled={showResults}
                            placeholder="Nhập câu trả lời..."
                            className={`w-full px-4 py-2 border-2 rounded-lg ${
                              showResults
                                ? answers[question.id]?.toLowerCase() === (question.correctAnswer as string).toLowerCase()
                                  ? 'border-green-500 bg-green-50'
                                  : 'border-red-500 bg-red-50'
                                : 'border-gray-300 focus:border-blue-500 focus:outline-none'
                            }`}
                          />
                        </div>
                      )}

                      {showResults && question.explanation && (
                        <div className="mt-3 bg-blue-50 border-l-4 border-blue-400 p-3">
                          <p className="text-sm text-gray-700">
                            <span className="font-semibold">Giải thích:</span> {question.explanation}
                          </p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                <div className="mt-8 flex gap-4">
                  {!showResults ? (
                    <button
                      onClick={checkAnswers}
                      className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
                    >
                      Kiểm tra đáp án
                    </button>
                  ) : (
                    <button
                      onClick={resetExercise}
                      className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition"
                    >
                      Làm lại
                    </button>
                  )}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Inforgraphics */}
        {activeTab === 'img' && (
          <div className="space-y-6">
             {unit.img?.map((img) => (
            <Image
              key={img.id}
              src={img.url}
              alt={img.title}
              width={600}
              height={400}
            />
          ))}

          </div>
        )}

        {/* wordwall */}
        {activeTab === 'wordwall' && (
            <div className="flex flex-wrap justify-center gap-4 p-6 min-h-[300px]">
              {unit.wordwall?.map((wordwall, index) => (
                <a
                  key={index}
                  href={wordwall.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center px-6 py-4 bg-blue-500 text-white rounded-xl hover:bg-blue-700 transition-all shadow-md hover:shadow-lg w-full max-w-[200px] text-center"
                >
                  <span className="font-bold mb-1">🎮 {wordwall.title || 'Trò chơi Wordwall'}</span>
                  <span className="text-sm opacity-90">👉 Nhấn để bắt đầu</span>
                </a>
              ))}
            </div>
          )}


        {/* yourhomework */}
       {activeTab === 'yourhomework' && (
            <div className="flex flex-wrap justify-center gap-4 p-6 min-h-[300px]">
              {unit.yourhomewwork?.map((yourhomework, index) => (
                <a
                  key={index}
                  href={yourhomework.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center px-6 py-4 bg-blue-500 text-white rounded-xl hover:bg-blue-700 transition-all shadow-md hover:shadow-lg w-full max-w-[200px] text-center"
                >
                  <span className="font-bold mb-1"> {yourhomework.title || 'Trò chơi Yourhomework'}</span>
                  <span className="text-sm opacity-90">👉 Nhấn để bắt đầu</span>
                </a>
              ))}
            </div>
          )}


      </div>
    </div>
  );
}
