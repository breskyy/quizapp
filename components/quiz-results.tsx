"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import type { Question } from "@/types/quiz"
import { CheckCircle, XCircle } from "lucide-react"

interface QuizResultsProps {
  answers: number[]
  quizData: Question[]
  onRestartQuiz: () => void
}

export default function QuizResults({ answers, quizData, onRestartQuiz }: QuizResultsProps) {
  const correctAnswers = answers.filter((answer, index) => answer === quizData[index].correctAnswer).length

  const score = Math.round((correctAnswers / quizData.length) * 100)

  return (
    <Card className="p-6 shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-center text-gray-800 dark:text-gray-100">Quiz Results</h2>

      <div className="text-center mb-6">
        <div className="text-5xl font-bold mb-2 text-primary">{score}%</div>
        <p className="text-gray-600 dark:text-gray-400">
          You got {correctAnswers} out of {quizData.length} questions correct
        </p>
      </div>

      <div className="space-y-4 mb-6">
        <h3 className="text-lg font-semibold border-b pb-2 text-gray-700 dark:text-gray-300">Question Summary</h3>

        {quizData.map((question, index) => {
          const isCorrect = answers[index] === question.correctAnswer

          return (
            <div key={index} className="border-b pb-3">
              <div className="flex items-start gap-2">
                {isCorrect ? (
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                ) : (
                  <XCircle className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                )}
                <div>
                  <p className="font-medium text-gray-800 dark:text-gray-200">
                    {index + 1}. {question.question}
                  </p>

                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    Your answer: {question.options[answers[index]]}
                  </p>

                  {!isCorrect && (
                    <p className="text-sm text-green-600 dark:text-green-400 mt-1">
                      Correct answer: {question.options[question.correctAnswer]}
                    </p>
                  )}
                </div>
              </div>
            </div>
          )
        })}
      </div>

      <div className="flex justify-center">
        <Button onClick={onRestartQuiz}>Restart Quiz</Button>
      </div>
    </Card>
  )
}

