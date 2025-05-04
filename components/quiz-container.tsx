"use client"

import { useState } from "react"
import QuizQuestion from "./quiz-question"
import QuizResults from "./quiz-results"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { quizData } from "@/data/quiz-data"

export default function QuizContainer() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [answers, setAnswers] = useState<number[]>([])
  const [quizCompleted, setQuizCompleted] = useState(false)
  const [showResults, setShowResults] = useState(false)

  const handleAnswerSelect = (selectedOptionIndex: number) => {
    const newAnswers = [...answers]
    newAnswers[currentQuestionIndex] = selectedOptionIndex
    setAnswers(newAnswers)
  }

  const handleNext = () => {
    if (currentQuestionIndex < quizData.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1)
    } else {
      setQuizCompleted(true)
    }
  }

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1)
    }
  }

  const handleSubmit = () => {
    setShowResults(true)
  }

  const handleRestartQuiz = () => {
    setCurrentQuestionIndex(0)
    setAnswers([])
    setQuizCompleted(false)
    setShowResults(false)
  }

  if (showResults) {
    return <QuizResults answers={answers} quizData={quizData} onRestartQuiz={handleRestartQuiz} />
  }

  const currentQuestion = quizData[currentQuestionIndex]
  const selectedAnswer = answers[currentQuestionIndex]
  const isAnswered = selectedAnswer !== undefined
  const isLastQuestion = currentQuestionIndex === quizData.length - 1

  return (
    <Card className="p-6 shadow-lg">
      <div className="mb-4 text-sm font-medium text-gray-500 dark:text-gray-400">
        Question {currentQuestionIndex + 1} of {quizData.length}
      </div>

      <QuizQuestion question={currentQuestion} selectedAnswer={selectedAnswer} onSelectAnswer={handleAnswerSelect} />

      <div className="flex justify-between mt-6">
        <Button variant="outline" onClick={handlePrevious} disabled={currentQuestionIndex === 0}>
          Previous
        </Button>

        <div className="flex gap-2">
          {quizCompleted ? (
            <Button onClick={handleSubmit} disabled={!isAnswered}>
              Show Results
            </Button>
          ) : (
            <Button onClick={handleNext} disabled={!isAnswered}>
              {isLastQuestion ? "Finish" : "Next"}
            </Button>
          )}
        </div>
      </div>
    </Card>
  )
}

