"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { getRecentQuizzes } from "@/utils/storage"
import type { UserStats, QuizSession } from "@/types/quiz"
import { ArrowLeft, BarChart2, CheckCircle, HelpCircle, Percent } from "lucide-react"

export default function StatisticsPage() {
  const router = useRouter()
  const [selectedFilter, setSelectedFilter] = useState("all")
  const [stats, setStats] = useState<UserStats>({
    totalQuizzes: 0,
    totalQuestions: 0,
    correctAnswers: 0,
    averageScore: 0,
  })

  useEffect(() => {
    // Pobierz wszystkie quizy
    const quizzes = getRecentQuizzes()

    // Filtruj quizy na podstawie wybranego zestawu
    const filteredQuizzes = quizzes.filter((quiz) => {
      if (selectedFilter === "all") return true
      return quiz.questionSet === selectedFilter
    })

    // Oblicz statystyki dla przefiltrowanych quizów
    const calculatedStats = calculateStats(filteredQuizzes)
    setStats(calculatedStats)
  }, [selectedFilter])

  // Funkcja do obliczania statystyk na podstawie quizów
  const calculateStats = (quizzes: QuizSession[]): UserStats => {
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

  return (
    <main className="flex min-h-screen flex-col items-center p-4 bg-gray-50 dark:bg-gray-900">
      <div className="w-full max-w-3xl">
        <div className="flex items-center mb-6">
          <Button variant="ghost" size="sm" onClick={() => router.push("/")} className="mr-2">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Powrót
          </Button>
          <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Twoje Statystyki</h1>
        </div>

        <Card className="mb-6">
          <CardContent className="pt-6">
            <Tabs defaultValue="all" onValueChange={setSelectedFilter}>
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="all">Wszystkie</TabsTrigger>
                <TabsTrigger value="set1">Zestaw 1</TabsTrigger>
                <TabsTrigger value="set2">Zestaw 2</TabsTrigger>
              </TabsList>
            </Tabs>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg flex items-center">
                <BarChart2 className="h-5 w-5 mr-2 text-primary" />
                Rozwiązane Quizy
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-4xl font-bold">{stats.totalQuizzes}</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg flex items-center">
                <HelpCircle className="h-5 w-5 mr-2 text-primary" />
                Wszystkie Pytania
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-4xl font-bold">{stats.totalQuestions}</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg flex items-center">
                <CheckCircle className="h-5 w-5 mr-2 text-primary" />
                Poprawne Odpowiedzi
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-4xl font-bold">{stats.correctAnswers}</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg flex items-center">
                <Percent className="h-5 w-5 mr-2 text-primary" />
                Średni Wynik
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-4xl font-bold">{stats.averageScore.toFixed(1)}%</p>
            </CardContent>
          </Card>
        </div>

        {stats.totalQuizzes === 0 ? (
          <Card>
            <CardContent className="pt-6 text-center">
              <p className="text-gray-500 dark:text-gray-400">
                Nie rozwiązałeś jeszcze żadnych quizów. Rozpocznij quiz, aby zobaczyć swoje statystyki.
              </p>
              <Button onClick={() => router.push("/quiz/new")} className="mt-4">
                Rozpocznij Quiz
              </Button>
            </CardContent>
          </Card>
        ) : (
          <Card>
            <CardHeader>
              <CardTitle>Podsumowanie Wyników</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Wskaźnik Dokładności</span>
                    <span>{((stats.correctAnswers / stats.totalQuestions) * 100).toFixed(1)}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                    <div
                      className="bg-primary h-2.5 rounded-full"
                      style={{ width: `${(stats.correctAnswers / stats.totalQuestions) * 100}%` }}
                    ></div>
                  </div>
                </div>

                <div className="pt-4">
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Kontynuuj rozwiązywanie quizów, aby poprawić swoje statystyki i śledzić postępy.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </main>
  )
}
