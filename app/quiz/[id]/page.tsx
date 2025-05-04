"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import type { QuizSession } from "@/types/quiz"
import { getCurrentSession, saveQuizSession, saveCurrentSession, clearCurrentSession } from "@/utils/storage"
import QuizContainer from "@/components/quiz-container"

export default function QuizPage({ params }: { params: { id: string } }) {
  const router = useRouter()
  const [session, setSession] = useState<QuizSession | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const currentSession = getCurrentSession()

    if (!currentSession || currentSession.id !== params.id) {
      // If no current session or ID doesn't match, redirect to home
      router.push("/")
      return
    }

    // Ensure the session has the questionsPerPage property
    if (!currentSession.questionsPerPage) {
      currentSession.questionsPerPage = 1
    }

    setSession(currentSession)
    setLoading(false)
  }, [params.id, router])

  // Modify the handleAnswerSelect function to prevent scrolling
  const handleAnswerSelect = (questionIndex: number, selectedOptionIndex: number) => {
    if (!session) return

    // Use functional update to avoid potential race conditions
    setSession((prevSession) => {
      if (!prevSession) return null

      const newAnswers = [...prevSession.answers]
      newAnswers[questionIndex] = selectedOptionIndex

      const updatedSession = {
        ...prevSession,
        answers: newAnswers,
      }

      // Save to storage
      saveCurrentSession(updatedSession)

      return updatedSession
    })
  }

  const handleQuizComplete = (finalSession: QuizSession) => {
    // Calculate score
    const correctAnswers = finalSession.questions.reduce((count, question, index) => {
      return count + (finalSession.answers[index] === question.correctAnswer ? 1 : 0)
    }, 0)

    const score = Math.round((correctAnswers / finalSession.questions.length) * 100)

    const completedSession = {
      ...finalSession,
      completed: true,
      score,
    }

    // Save to recent quizzes
    saveQuizSession(completedSession)

    // Clear current session
    clearCurrentSession()

    // Update state
    setSession(completedSession)
  }

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <h2 className="text-xl font-semibold mb-2">Ładowanie quizu...</h2>
        </div>
      </div>
    )
  }

  if (!session) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <h2 className="text-xl font-semibold mb-2">Nie znaleziono quizu</h2>
          <p className="text-gray-500 mb-4">Szukany quiz nie istnieje.</p>
          <button onClick={() => router.push("/")} className="px-4 py-2 bg-primary text-white rounded-md">
            Strona Główna
          </button>
        </div>
      </div>
    )
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 bg-gray-50 dark:bg-gray-900">
      <div className="w-full max-w-3xl">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-gray-100">Quiz Medyczny</h1>

        <QuizContainer session={session} onAnswerSelect={handleAnswerSelect} onComplete={handleQuizComplete} />
      </div>
    </main>
  )
}

