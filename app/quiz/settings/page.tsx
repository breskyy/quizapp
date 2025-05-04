"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { ArrowLeft } from "lucide-react"
import { getUserSettings, saveUserSettings } from "@/utils/storage"
import { quizData } from "@/data/quiz-data"

export default function QuizSettingsPage() {
  const router = useRouter()
  const [questionsPerQuiz, setQuestionsPerQuiz] = useState(10)
  const [questionsPerPage, setQuestionsPerPage] = useState(1)
  const maxQuestions = quizData.length

  useEffect(() => {
    const settings = getUserSettings()
    setQuestionsPerQuiz(settings.questionsPerQuiz)
    setQuestionsPerPage(settings.questionsPerPage)
  }, [])

  const handleStartQuiz = () => {
    // Save settings
    saveUserSettings({
      questionsPerQuiz,
      questionsPerPage,
    })

    // Navigate to new quiz
    router.push(`/quiz/new?count=${questionsPerQuiz}&perPage=${questionsPerPage}`)
  }

  return (
    <main className="flex min-h-screen flex-col items-center p-4 bg-gray-50 dark:bg-gray-900">
      <div className="w-full max-w-3xl">
        <div className="flex items-center mb-6">
          <Button variant="ghost" size="sm" onClick={() => router.push("/")} className="mr-2">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Powrót
          </Button>
          <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Ustawienia Quizu</h1>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Dostosuj Swój Quiz</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-3">
              <div className="flex justify-between">
                <Label htmlFor="questionsPerQuiz">Liczba Pytań</Label>
                <span className="text-sm font-medium">{questionsPerQuiz}</span>
              </div>
              <Slider
                id="questionsPerQuiz"
                min={5}
                max={Math.min(100, maxQuestions)}
                step={1}
                value={[questionsPerQuiz]}
                onValueChange={(value) => setQuestionsPerQuiz(value[0])}
              />
              <p className="text-xs text-gray-500">Wybierz liczbę pytań w quizie (5-{Math.min(100, maxQuestions)})</p>
            </div>

            <div className="space-y-3">
              <div className="flex justify-between">
                <Label htmlFor="questionsPerPage">Pytań na Stronę</Label>
                <span className="text-sm font-medium">{questionsPerPage}</span>
              </div>
              <Slider
                id="questionsPerPage"
                min={1}
                max={5}
                step={1}
                value={[questionsPerPage]}
                onValueChange={(value) => setQuestionsPerPage(value[0])}
              />
              <p className="text-xs text-gray-500">Wybierz liczbę pytań wyświetlanych na stronie (1-5)</p>
            </div>

            <Button onClick={handleStartQuiz} className="w-full">
              Rozpocznij Quiz
            </Button>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}

