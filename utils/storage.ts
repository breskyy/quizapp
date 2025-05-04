import type { QuizSession, UserStats } from "@/types/quiz"

// Local storage keys
const RECENT_QUIZZES_KEY = "quizapp_recent_quizzes"
const CURRENT_SESSION_KEY = "quizapp_current_session"
const USER_STATS_KEY = "quizapp_user_stats"

// Get recent quizzes from local storage
export const getRecentQuizzes = (): QuizSession[] => {
  if (typeof window === "undefined") return []

  const storedQuizzes = localStorage.getItem(RECENT_QUIZZES_KEY)
  return storedQuizzes ? JSON.parse(storedQuizzes) : []
}

// Save a quiz session to local storage
export const saveQuizSession = (session: QuizSession): void => {
  if (typeof window === "undefined") return

  const recentQuizzes = getRecentQuizzes()

  // Check if this session already exists
  const existingIndex = recentQuizzes.findIndex((quiz) => quiz.id === session.id)

  if (existingIndex !== -1) {
    // Update existing session
    recentQuizzes[existingIndex] = session
  } else {
    // Add new session, limit to 10 recent quizzes
    recentQuizzes.unshift(session)
    if (recentQuizzes.length > 10) {
      recentQuizzes.pop()
    }
  }

  localStorage.setItem(RECENT_QUIZZES_KEY, JSON.stringify(recentQuizzes))

  // If completed, update stats
  if (session.completed && session.score !== undefined) {
    updateStats(session)
  }
}

// Save current session for resuming later
export const saveCurrentSession = (session: QuizSession): void => {
  if (typeof window === "undefined") return
  localStorage.setItem(CURRENT_SESSION_KEY, JSON.stringify(session))
}

// Get current session
export const getCurrentSession = (): QuizSession | null => {
  if (typeof window === "undefined") return null

  const storedSession = localStorage.getItem(CURRENT_SESSION_KEY)
  return storedSession ? JSON.parse(storedSession) : null
}

// Clear current session
export const clearCurrentSession = (): void => {
  if (typeof window === "undefined") return
  localStorage.removeItem(CURRENT_SESSION_KEY)
}

// Get user stats
export const getUserStats = (): UserStats => {
  if (typeof window === "undefined") {
    return {
      totalQuizzes: 0,
      totalQuestions: 0,
      correctAnswers: 0,
      averageScore: 0,
    }
  }

  const storedStats = localStorage.getItem(USER_STATS_KEY)
  return storedStats
    ? JSON.parse(storedStats)
    : {
        totalQuizzes: 0,
        totalQuestions: 0,
        correctAnswers: 0,
        averageScore: 0,
      }
}

// Update stats with a completed quiz
const updateStats = (session: QuizSession): void => {
  if (typeof window === "undefined" || !session.completed || session.score === undefined) return

  const stats = getUserStats()

  const correctCount = session.questions.reduce((count, question, index) => {
    return count + (session.answers[index] === question.correctAnswer ? 1 : 0)
  }, 0)

  // Update stats
  stats.totalQuizzes += 1
  stats.totalQuestions += session.questions.length
  stats.correctAnswers += correctCount
  stats.averageScore = (stats.correctAnswers / stats.totalQuestions) * 100

  localStorage.setItem(USER_STATS_KEY, JSON.stringify(stats))
}

