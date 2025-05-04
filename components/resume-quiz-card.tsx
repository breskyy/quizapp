"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { PlayCircle } from "lucide-react"
import { getCurrentSession } from "@/utils/storage"
import type { QuizSession } from "@/types/quiz"

export default function ResumeQuizCard() {
  const [currentSession, setCurrentSession] = useState<QuizSession | null>(null)

  useEffect(() => {
    const session = getCurrentSession()
    if (session && !session.completed) {
      setCurrentSession(session)
    }
  }, [])

  if (!currentSession) {
    return null
  }

  const progress = currentSession.answers.filter((a) => a !== undefined).length
  const total = currentSession.questions.length
  const progressPercentage = Math.round((progress / total) * 100)

  return (
    <Card className="border-primary/20 bg-primary/5 hover:shadow-md transition-shadow">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <PlayCircle className="h-5 w-5 text-primary" />
          Wznów Quiz
        </CardTitle>
        <CardDescription>
          You have an unfinished quiz from {new Date(currentSession.date).toLocaleDateString()}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="mb-4">
          <div className="flex justify-between text-sm mb-1">
            <span>Progress</span>
            <span>
              {progress} of {total} questions
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
            <div className="bg-primary h-2.5 rounded-full" style={{ width: `${progressPercentage}%` }}></div>
          </div>
        </div>
        <Link href={`/quiz/${currentSession.id}`}>
          <Button className="w-full">Continue Quiz</Button>
        </Link>
      </CardContent>
    </Card>
  )
}

