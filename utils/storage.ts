// Define types for our storage
export interface QuizSession {
  id: string
  date: string
  questions: any[]
  answers: (number | undefined)[]
  completed: boolean
  score?: number
  questionsPerPage: number
}

export interface UserStats {
  totalQuizzes: number
  totalQuestions: number
  correctAnswers: number
  averageScore: number
}

// Get recent quizzes
export function getRecentQuizzes(): QuizSession[] {
  if (typeof window === "undefined") return []

  const quizzes = localStorage.getItem("recentQuizzes")
  return quizzes ? JSON.parse(quizzes) : []
}

// Save quiz session to recent quizzes
export function saveQuizSession(session: QuizSession): void {
  if (typeof window === "undefined") return

  const quizzes = getRecentQuizzes()
  quizzes.unshift(session) // Add to the beginning
  localStorage.setItem("recentQuizzes", JSON.stringify(quizzes.slice(0, 10))) // Limit to 10 recent quizzes
}

// Get user stats
export function getUserStats(): UserStats {
  if (typeof window === "undefined")
    return {
      totalQuizzes: 0,
      totalQuestions: 0,
      correctAnswers: 0,
      averageScore: 0,
    }

  const quizzes = getRecentQuizzes()
  const totalQuizzes = quizzes.length
  let totalQuestions = 0
  let correctAnswers = 0

  quizzes.forEach((quiz) => {
    totalQuestions += quiz.questions.length
    quiz.questions.forEach((question, index) => {
      if (quiz.answers[index] === question.correctAnswer) {
        correctAnswers++
      }
    })
  })

  const averageScore = totalQuizzes > 0 ? (correctAnswers / totalQuestions) * 100 : 0

  return {
    totalQuizzes,
    totalQuestions,
    correctAnswers,
    averageScore,
  }
}

// Define types for our storage
export interface UserSettings {
  questionsPerQuiz: number
  questionsPerPage: number
  questionSet?: string
}

// Default settings
const DEFAULT_SETTINGS: UserSettings = {
  questionsPerQuiz: 10,
  questionsPerPage: 1,
  questionSet: "all",
}

// Get current quiz session
export function getCurrentSession(): QuizSession | null {
  if (typeof window === "undefined") return null

  const session = localStorage.getItem("currentQuizSession")
  return session ? JSON.parse(session) : null
}

// Save current quiz session
export function saveCurrentSession(session: QuizSession): void {
  if (typeof window === "undefined") return

  localStorage.setItem("currentQuizSession", JSON.stringify(session))
}

// Clear current quiz session
export function clearCurrentSession(): void {
  if (typeof window === "undefined") return

  localStorage.removeItem("currentQuizSession")
}

// Get completed quiz sessions
export function getCompletedSessions(): QuizSession[] {
  if (typeof window === "undefined") return []

  const sessions = localStorage.getItem("completedQuizSessions")
  return sessions ? JSON.parse(sessions) : []
}

// Save a completed quiz session
export function saveCompletedSession(session: QuizSession): void {
  if (typeof window === "undefined") return

  const sessions = getCompletedSessions()
  sessions.push(session)
  localStorage.setItem("completedQuizSessions", JSON.stringify(sessions))
}

// Get user settings
export function getUserSettings(): UserSettings {
  if (typeof window === "undefined") return DEFAULT_SETTINGS

  const settings = localStorage.getItem("userSettings")
  return settings ? { ...DEFAULT_SETTINGS, ...JSON.parse(settings) } : DEFAULT_SETTINGS
}

// Save user settings
export function saveUserSettings(settings: UserSettings): void {
  if (typeof window === "undefined") return

  localStorage.setItem("userSettings", JSON.stringify(settings))
}

// Get a specific completed session by ID
export function getSessionById(id: string): QuizSession | null {
  if (typeof window === "undefined") return null

  // Check if it's the current session
  const currentSession = getCurrentSession()
  if (currentSession && currentSession.id === id) {
    return currentSession
  }

  // Check completed sessions
  const completedSessions = getCompletedSessions()
  return completedSessions.find((session) => session.id === id) || null
}
