"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { getRecentQuizzes } from "@/utils/storage"
import type { QuizSession } from "@/types/quiz"
import QuizResults from "@/components/quiz-results"
import { ArrowLeft } from "lucide-react"

export default function QuizHistoryPage({ params }: { params: { id: string } }) {
  const router = useRouter()
  const [session, setSession] = useState<QuizSession | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const recentQuizzes = getRecentQuizzes()
    const foundQuiz = recentQuizzes.find((quiz) => quiz.id === params.id)

    if (foundQuiz) {
      setSession(foundQuiz)
    }

    setLoading(false)
  }, [params.id])

  const handleGoBack = () => {
    router.push("/history")
  }

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <h2 className="text-xl font-semibold mb-2">Ładowanie wyników quizu...</h2>
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
          <Button onClick={() => router.push("/history")}>Powrót do Historii</Button>
        </div>
      </div>
    )
  }

  return (
    <main className="flex min-h-screen flex-col items-center p-4 bg-gray-50 dark:bg-gray-900">
      <div className="w-full max-w-3xl">
        <div className="flex items-center mb-6">
          <Button variant="ghost" size="sm" onClick={handleGoBack} className="mr-2">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Powrót
          </Button>
          <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Wyniki Quizu</h1>
        </div>

        <QuizResults session={session} onRestartQuiz={() => router.push("/")} />
      </div>
    </main>
  )
}
