export interface Question {
  question: string
  options: string[]
  correctAnswer: number
}

export interface QuizSession {
  id: string
  date: string
  questions: Question[]
  answers: number[]
  completed: boolean
  score?: number
  questionsPerPage?: number
}

export interface UserStats {
  totalQuizzes: number
  totalQuestions: number
  correctAnswers: number
  averageScore: number
}

