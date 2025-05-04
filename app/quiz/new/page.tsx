"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { v4 as uuidv4 } from "uuid"
import { quizData } from "@/data/quiz-data"
import { saveCurrentSession } from "@/utils/storage"

export default function NewQuizPage() {
  const router = useRouter()

  useEffect(() => {
    // Create a new quiz session with 10 random questions
    const shuffled = [...quizData].sort(() => 0.5 - Math.random())
    const selectedQuestions = shuffled.slice(0, 10)

    const newSession = {
      id: uuidv4(),
      date: new Date().toISOString(),
      questions: selectedQuestions,
      answers: Array(selectedQuestions.length).fill(undefined),
      completed: false,
    }

    // Save to local storage
    saveCurrentSession(newSession)

    // Redirect to the quiz page
    router.push(`/quiz/${newSession.id}`)
  }, [router])

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="text-center">
        <h2 className="text-xl font-semibold mb-2">Creating your quiz...</h2>
        <p className="text-gray-500">Please wait while we prepare your questions.</p>
      </div>
    </div>
  )
}

