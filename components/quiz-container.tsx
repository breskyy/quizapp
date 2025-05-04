"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import type { QuizSession } from "@/types/quiz"
import QuizQuestion from "./quiz-question"
import QuizResults from "./quiz-results"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
// Add imports for scroll buttons
import { ChevronLeft, ChevronRight, ArrowUp, ArrowDown } from "lucide-react"

interface QuizContainerProps {
  session: QuizSession
  onAnswerSelect: (questionIndex: number, selectedOptionIndex: number) => void
  onComplete: (session: QuizSession) => void
}

export default function QuizContainer({ session, onAnswerSelect, onComplete }: QuizContainerProps) {
  const router = useRouter()
  const questionsPerPage = session.questionsPerPage || 1

  // Calculate total pages
  const totalPages = Math.ceil(session.questions.length / questionsPerPage)

  // Find the first unanswered question
  const firstUnansweredIndex = session.answers.findIndex((a) => a === undefined)

  // Calculate which page to start on
  const initialPage = firstUnansweredIndex !== -1 ? Math.floor(firstUnansweredIndex / questionsPerPage) : 0

  const [currentPage, setCurrentPage] = useState(initialPage)
  const [showResults, setShowResults] = useState(session.completed)

  // Get questions for the current page
  const getCurrentPageQuestions = () => {
    const startIndex = currentPage * questionsPerPage
    return session.questions.slice(startIndex, startIndex + questionsPerPage)
  }

  const handleNext = () => {
    // Check if all questions on the current page are answered
    const startIndex = currentPage * questionsPerPage
    const endIndex = Math.min(startIndex + questionsPerPage, session.questions.length)
    const currentPageAnswered = session.answers.slice(startIndex, endIndex).every((a) => a !== undefined)

    if (!currentPageAnswered) {
      return // Don't proceed if not all questions are answered
    }

    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1)
      //window.scrollTo(0, 0) // Scroll to top when changing page
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
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1)
      //window.scrollTo(0, 0) // Scroll to top when changing page
    }
  }

  // Add scroll functions and buttons
  // Add this after the handlePrevious function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const scrollToBottom = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" })
  }

  const handleRestartQuiz = () => {
    router.push("/")
  }

  // Check if all questions on the current page are answered
  const areCurrentQuestionsAnswered = () => {
    const startIndex = currentPage * questionsPerPage
    const endIndex = Math.min(startIndex + questionsPerPage, session.questions.length)
    return session.answers.slice(startIndex, endIndex).every((a) => a !== undefined)
  }

  // Check if all questions in the quiz are answered
  const allQuestionsAnswered = session.answers.every((a) => a !== undefined)

  if (showResults) {
    return <QuizResults session={session} onRestartQuiz={handleRestartQuiz} />
  }

  const currentQuestions = getCurrentPageQuestions()
  const startIndex = currentPage * questionsPerPage

  return (
    <Card className="p-6 shadow-lg">
      <div className="flex justify-between mb-4">
        <div className="text-sm font-medium text-gray-500 dark:text-gray-400">
          Strona {currentPage + 1} z {totalPages}
        </div>

        <div className="text-sm font-medium">
          {session.answers.filter((a) => a !== undefined).length} z {session.questions.length} odpowiedziano
        </div>
      </div>

      {/* Update the return statement to include scroll buttons */}
      {/* Add this after the page navigation info */}
      <div className="flex justify-end mb-4">
        <Button variant="outline" size="sm" onClick={scrollToTop} className="mr-2" aria-label="Przewiń do góry">
          <ArrowUp className="h-4 w-4" />
        </Button>
        <Button variant="outline" size="sm" onClick={scrollToBottom} aria-label="Przewiń na dół">
          <ArrowDown className="h-4 w-4" />
        </Button>
      </div>

      <div className="space-y-8">
        {currentQuestions.map((question, index) => {
          const questionIndex = startIndex + index
          return (
            <div key={questionIndex} className={index > 0 ? "pt-6 border-t" : ""}>
              <div className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">
                Pytanie {questionIndex + 1} z {session.questions.length}
              </div>
              <QuizQuestion
                question={question}
                selectedAnswer={session.answers[questionIndex]}
                onSelectAnswer={(answerIndex) => onAnswerSelect(questionIndex, answerIndex)}
              />
            </div>
          )
        })}
      </div>

      <div className="flex justify-between mt-6">
        <Button variant="outline" onClick={handlePrevious} disabled={currentPage === 0}>
          <ChevronLeft className="h-4 w-4 mr-2" />
          Poprzednia
        </Button>

        <div className="flex gap-2">
          {currentPage === totalPages - 1 && allQuestionsAnswered ? (
            <Button
              onClick={() => {
                onComplete(session)
                setShowResults(true)
              }}
            >
              Zakończ Quiz
            </Button>
          ) : (
            <Button onClick={handleNext} disabled={!areCurrentQuestionsAnswered()}>
              Następna
              <ChevronRight className="h-4 w-4 ml-2" />
            </Button>
          )}
        </div>
      </div>
    </Card>
  )
}

