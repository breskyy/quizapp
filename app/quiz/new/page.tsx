"use client"

import { useEffect } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { v4 as uuidv4 } from "uuid"
import { saveCurrentSession, getUserSettings } from "@/utils/storage"
import { getQuestionsBySet } from "@/data/quiz-sets"

export default function NewQuizPage() {
  const router = useRouter()
  const searchParams = useSearchParams()

  useEffect(() => {
    // Get parameters from URL or use defaults from settings
    const settings = getUserSettings()
    const count = Number.parseInt(searchParams.get("count") || settings.questionsPerQuiz.toString())
    const perPage = Number.parseInt(searchParams.get("perPage") || settings.questionsPerPage.toString())
    const set = searchParams.get("set") || settings.questionSet || "all"

    // Get questions from the selected set
    const availableQuestions = getQuestionsBySet(set)

    // Create a new quiz session with the specified number of random questions
    const shuffled = [...availableQuestions].sort(() => 0.5 - Math.random())
    const selectedQuestions = shuffled.slice(0, Math.min(count, availableQuestions.length))

    const newSession = {
      id: uuidv4(),
      date: new Date().toISOString(),
      questions: selectedQuestions,
      answers: Array(selectedQuestions.length).fill(undefined),
      completed: false,
      questionsPerPage: perPage,
      questionSet: set, // Zapisujemy informację o zestawie pytań
    }

    // Save to local storage
    saveCurrentSession(newSession)

    // Redirect to the quiz page
    router.push(`/quiz/${newSession.id}`)
  }, [router, searchParams])

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="text-center">
        <h2 className="text-xl font-semibold mb-2">Tworzenie quizu...</h2>
        <p className="text-gray-500">Proszę czekać, przygotowujemy pytania.</p>
      </div>
    </div>
  )
}
