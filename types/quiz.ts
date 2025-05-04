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
  questionSet: string // Dodane pole informujące o zestawie pytań
}

export interface UserStats {
  totalQuizzes: number
  totalQuestions: number
  correctAnswers: number
  averageScore: number
}

export interface UserSettings {
  questionsPerQuiz: number
  questionsPerPage: number
  questionSet: string
}

export interface QuizResult {
  totalQuestions: number
  correctAnswers: number
  incorrectAnswers: number
  unansweredQuestions: number
  score: number
  date: string
  timeSpent?: number
}
