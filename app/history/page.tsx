"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { getRecentQuizzes } from "@/utils/storage"
import type { QuizSession } from "@/types/quiz"
import { ArrowLeft, Calendar, CheckCircle, Clock } from "lucide-react"

export default function HistoryPage() {
  const router = useRouter()
  const [recentQuizzes, setRecentQuizzes] = useState<QuizSession[]>([])

  useEffect(() => {
    setRecentQuizzes(getRecentQuizzes())
  }, [])

  return (
    <main className="flex min-h-screen flex-col items-center p-4 bg-gray-50 dark:bg-gray-900">
      <div className="w-full max-w-3xl">
        <div className="flex items-center mb-6">
          <Button variant="ghost" size="sm" onClick={() => router.push("/")} className="mr-2">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back
          </Button>
          <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Recent Quizzes</h1>
        </div>

        {recentQuizzes.length === 0 ? (
          <Card>
            <CardContent className="pt-6 text-center">
              <p className="text-gray-500 dark:text-gray-400">You haven't taken any quizzes yet.</p>
              <Link href="/quiz/new" className="mt-4 inline-block">
                <Button>Start Your First Quiz</Button>
              </Link>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-4">
            {recentQuizzes.map((quiz) => (
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
                        <span>Completed</span>
                      </div>
                    ) : (
                      <div className="flex items-center text-sm font-normal">
                        <Clock className="h-4 w-4 mr-1 text-amber-500" />
                        <span>In Progress</span>
                      </div>
                    )}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center mb-4">
                    <div>
                      <p className="text-sm text-gray-500">{quiz.questions.length} questions</p>
                      {quiz.completed && quiz.score !== undefined && (
                        <p className="font-medium">
                          Score: <span className="text-primary">{quiz.score}%</span>
                        </p>
                      )}
                    </div>

                    {quiz.completed ? (
                      <Link href={`/history/${quiz.id}`}>
                        <Button variant="outline" size="sm">
                          View Results
                        </Button>
                      </Link>
                    ) : (
                      <Link href={`/quiz/${quiz.id}`}>
                        <Button size="sm">Continue</Button>
                      </Link>
                    )}
                  </div>

                  <div className="text-xs text-gray-500">
                    <span>Progress: </span>
                    <span>
                      {quiz.answers.filter((a) => a !== undefined).length} of {quiz.questions.length} answered
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
            ))}
          </div>
        )}
      </div>
    </main>
  )
}

