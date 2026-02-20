// Types for the English learning application

export type Grade = 3 | 4 | 5 | 6 | 7 | 8 | 9;

export type Level = 'cap1' | 'cap2';





export interface Video {
  id: string;
  title: string;
  url: string;
}

export interface Img {
  id : string;
  title: string;
  url: string;
}

export interface Question {
  id: string;
  type: 'multiple-choice' | 'fill-in-blank' | 'matching' | 'true-false';
  question: string;
  options?: string[];
  correctAnswer: string | string[];
  explanation?: string;
}

export interface Exercise {
  id: string;
  title: string;
  type: 'vocabulary' | 'grammar' | 'listening' | 'reading' | 'mixed';
  questions: Question[];
  totalPoints: number;
}

export interface Unit {
  id: string;
  unitNumber: number;
  title: string;
  description: string;
  grade: Grade;
  videos: Video[];
  exercises: Exercise[];
  img?: Img[];
  wordwall: Wordwall[];
  yourhomewwork: YourHomework[];

}

export interface Wordwall {
  id: string;
  title: string;
  url: string;
}

export interface YourHomework {
  id: string;
  title: string;
  url: string;
}

export interface Progress {
  userId: string;
  unitId: string;
  completedExercises: string[];
  score: number;
  lastAccessed: Date;
}

export interface Test {
  id: string;
  question: string;

}
