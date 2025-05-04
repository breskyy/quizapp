"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { getRecentQuizzes } from "@/utils/storage"
import type { QuizSession } from "@/types/quiz"
import { ArrowLeft, Calendar, CheckCircle, Clock } from "lucide-react"

export default function HistoryPage() {
  const router = useRouter()
  const [recentQuizzes, setRecentQuizzes] = useState<QuizSession[]>([])
  const [selectedFilter, setSelectedFilter] = useState("all")

  useEffect(() => {
    setRecentQuizzes(getRecentQuizzes())
  }, [])

  // Filtrowanie quizów na podstawie wybranego zestawu
  const filteredQuizzes = recentQuizzes.filter((quiz) => {
    if (selectedFilter === "all") return true
    return quiz.questionSet === selectedFilter
  })

  // Funkcja pomocnicza do wyświetlania nazwy zestawu
  const getSetName = (setId: string) => {
    switch (setId) {
      case "set1":
        return "Zestaw 1"
      case "set2":
        return "Zestaw 2"
      case "all":
        return "Wszystkie pytania"
      default:
        return "Nieznany zestaw"
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
          <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Ostatnie Quizy</h1>
        </div>

        {recentQuizzes.length === 0 ? (
          <Card>
            <CardContent className="pt-6 text-center">
              <p className="text-gray-500 dark:text-gray-400">Nie rozwiązałeś jeszcze żadnych quizów.</p>
              <Link href="/quiz/new" className="mt-4 inline-block">
                <Button>Rozpocznij Pierwszy Quiz</Button>
              </Link>
            </CardContent>
          </Card>
        ) : (
          <>
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

            <div className="space-y-4">
              {filteredQuizzes.length === 0 ? (
                <Card>
                  <CardContent className="pt-6 text-center">
                    <p className="text-gray-500 dark:text-gray-400">Brak quizów dla wybranego zestawu.</p>
                  </CardContent>
                </Card>
              ) : (
                filteredQuizzes.map((quiz) => (
                  <Card key={quiz.id} className="hover:shadow-md transition-shadow">
                    <CardHeader className="pb-2">
                      <CardTitle className="flex justify-between items-center">
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-2 text-gray-500" />
                          <span>{new Date(quiz.date).toLocaleDateString()}</span>
                        </div>
                        {quiz.completed ? (
                          <div className="flex items-center text-sm font-normal">
                            <CheckCircle className="h-4 w-4 mr-1 text-green-500" />
                            <span>Ukończony</span>
                          </div>
                        ) : (
                          <div className="flex items-center text-sm font-normal">
                            <Clock className="h-4 w-4 mr-1 text-amber-500" />
                            <span>W trakcie</span>
                          </div>
                        )}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex justify-between items-center mb-4">
                        <div>
                          <p className="text-sm text-gray-500">{quiz.questions.length} pytań</p>
                          <p className="text-sm text-gray-500">Zestaw: {getSetName(quiz.questionSet || "all")}</p>
                          {quiz.completed && quiz.score !== undefined && (
                            <p className="font-medium">
                              Wynik: <span className="text-primary">{quiz.score}%</span>
                            </p>
                          )}
                        </div>

                        {quiz.completed ? (
                          <Link href={`/history/${quiz.id}`}>
                            <Button variant="outline" size="sm">
                              Zobacz Wyniki
                            </Button>
                          </Link>
                        ) : (
                          <Link href={`/quiz/${quiz.id}`}>
                            <Button size="sm">Kontynuuj</Button>
                          </Link>
                        )}
                      </div>

                      <div className="text-xs text-gray-500">
                        <span>Postęp: </span>
                        <span>
                          {quiz.answers.filter((a) => a !== undefined).length} z {quiz.questions.length} odpowiedziano
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-1.5 mt-1 dark:bg-gray-700">
                        <div
                          className="bg-primary h-1.5 rounded-full"
                          style={{
                            width: `${(quiz.answers.filter((a) => a !== undefined).length / quiz.questions.length) * 100}%`,
                          }}
                        ></div>
                      </div>
                    </CardContent>
                  </Card>
                ))
              )}
            </div>
          </>
        )}
      </div>
    </main>
  )
}
