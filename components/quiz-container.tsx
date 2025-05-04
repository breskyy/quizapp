"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import type { QuizSession } from "@/types/quiz"
import QuizQuestion from "./quiz-question"
import QuizResults from "./quiz-results"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

interface QuizContainerProps {
  session: QuizSession
  onAnswerSelect: (questionIndex: number, selectedOptionIndex: number) => void
  onComplete: (session: QuizSession) => void
}

export default function QuizContainer({ session, onAnswerSelect, onComplete }: QuizContainerProps) {
  const router = useRouter()
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(
    // Start at the first unanswered question or 0
    session.answers.findIndex((a) => a === undefined) !== -1 ? session.answers.findIndex((a) => a === undefined) : 0,
  )
  const [showResults, setShowResults] = useState(session.completed)

  const handleNext = () => {
    if (currentQuestionIndex < session.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1)
    } else {
      // If all questions are answered, show completion button
      const allAnswered = session.answers.every((a) => a !== undefined)
      if (allAnswered && !session.completed) {
        onComplete(session)
        setShowResults(true)
      }
    }
  }

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1)
    }
  }

  const handleRestartQuiz = () => {
    router.push("/")
  }

  if (showResults) {
    return <QuizResults session={session} onRestartQuiz={handleRestartQuiz} />
  }

  const currentQuestion = session.questions[currentQuestionIndex]
  const selectedAnswer = session.answers[currentQuestionIndex]
  const isAnswered = selectedAnswer !== undefined
  const isLastQuestion = currentQuestionIndex === session.questions.length - 1

  // Check if all questions are answered
  const allAnswered = session.answers.every((a) => a !== undefined)

  return (
    <Card className="p-6 shadow-lg">
      <div className="flex justify-between mb-4">
        <div className="text-sm font-medium text-gray-500 dark:text-gray-400">
          Question {currentQuestionIndex + 1} of {session.questions.length}
        </div>

        <div className="text-sm font-medium">
          {session.answers.filter((a) => a !== undefined).length} of {session.questions.length} answered
        </div>
      </div>

      <QuizQuestion
        question={currentQuestion}
        selectedAnswer={selectedAnswer}
        onSelectAnswer={(index) => onAnswerSelect(currentQuestionIndex, index)}
      />

      <div className="flex justify-between mt-6">
        <Button variant="outline" onClick={handlePrevious} disabled={currentQuestionIndex === 0}>
          Previous
        </Button>

        <div className="flex gap-2">
          {isLastQuestion && allAnswered ? (
            <Button
              onClick={() => {
                onComplete(session)
                setShowResults(true)
              }}
            >
              Finish Quiz
            </Button>
          ) : (
            <Button onClick={handleNext} disabled={!isAnswered}>
              Next
            </Button>
          )}
        </div>
      </div>
    </Card>
  )
}

