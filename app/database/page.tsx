"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { quizData } from "@/data/quiz-data"
import { ArrowLeft, Search } from "lucide-react"

export default function DatabasePage() {
  const router = useRouter()
  const [searchTerm, setSearchTerm] = useState("")

  const filteredQuestions = quizData.filter(
    (question) =>
      question.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      question.options.some((option) => option.toLowerCase().includes(searchTerm.toLowerCase())),
  )

  return (
    <main className="flex min-h-screen flex-col items-center p-4 bg-gray-50 dark:bg-gray-900">
      <div className="w-full max-w-3xl">
        <div className="flex items-center mb-6">
          <Button variant="ghost" size="sm" onClick={() => router.push("/")} className="mr-2">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back
          </Button>
          <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Question Database</h1>
        </div>

        <Card className="mb-6">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Search Questions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
              <Input
                type="text"
                placeholder="Search by keyword..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-9"
              />
            </div>
          </CardContent>
        </Card>

        <div className="space-y-4">
          <p className="text-sm text-gray-500">
            Showing {filteredQuestions.length} of {quizData.length} questions
          </p>

          {filteredQuestions.map((question, index) => (
            <Card key={index} className="hover:shadow-md transition-shadow">
              <CardContent className="pt-6">
                <p className="font-medium mb-3">{question.question}</p>

                <div className="space-y-2 ml-4">
                  {question.options.map((option, optionIndex) => (
                    <div
                      key={optionIndex}
                      className={`p-2 rounded-md ${
                        optionIndex === question.correctAnswer
                          ? "bg-green-100 dark:bg-green-900/20 border border-green-200 dark:border-green-900"
                          : "bg-gray-50 dark:bg-gray-800"
                      }`}
                    >
                      <p
                        className={`text-sm ${
                          optionIndex === question.correctAnswer
                            ? "font-medium text-green-800 dark:text-green-400"
                            : "text-gray-700 dark:text-gray-300"
                        }`}
                      >
                        {optionIndex === question.correctAnswer && "✓ "}
                        {option}
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}

          {filteredQuestions.length === 0 && (
            <Card>
              <CardContent className="pt-6 text-center">
                <p className="text-gray-500 dark:text-gray-400">No questions found matching your search.</p>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </main>
  )
}

