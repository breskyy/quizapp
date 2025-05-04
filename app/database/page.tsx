"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { quizSet1, quizSet2, allQuestions } from "@/data/quiz-sets"
import { ArrowLeft, Search } from "lucide-react"

export default function DatabasePage() {
  const router = useRouter()
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedSet, setSelectedSet] = useState("all")

  // Get the appropriate question set based on selection
  const getQuestionSet = () => {
    switch (selectedSet) {
      case "set1":
        return quizSet1
      case "set2":
        return quizSet2
      case "all":
      default:
        return allQuestions
    }
  }

  const currentQuestionSet = getQuestionSet()

  // Filter questions based on search term
  const filteredQuestions = currentQuestionSet.filter(
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
            Powrót
          </Button>
          <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Baza Pytań</h1>
        </div>

        <Card className="mb-6">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Wyszukaj Pytania</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                <Input
                  type="text"
                  placeholder="Szukaj według słowa kluczowego..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-9"
                />
              </div>

              <Tabs defaultValue="all" onValueChange={setSelectedSet}>
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="all">Wszystkie pytania</TabsTrigger>
                  <TabsTrigger value="set1">Zestaw 1</TabsTrigger>
                  <TabsTrigger value="set2">Zestaw 2</TabsTrigger>
                </TabsList>
                <TabsContent value="all">
                  <p className="text-sm text-gray-500">Wyświetlanie wszystkich pytań ({allQuestions.length})</p>
                </TabsContent>
                <TabsContent value="set1">
                  <p className="text-sm text-gray-500">Wyświetlanie pytań z zestawu 1 ({quizSet1.length})</p>
                </TabsContent>
                <TabsContent value="set2">
                  <p className="text-sm text-gray-500">Wyświetlanie pytań z zestawu 2 ({quizSet2.length})</p>
                </TabsContent>
              </Tabs>
            </div>
          </CardContent>
        </Card>

        <div className="space-y-4">
          <p className="text-sm text-gray-500">
            Pokazano {filteredQuestions.length} z {currentQuestionSet.length} pytań
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
                <p className="text-gray-500 dark:text-gray-400">Nie znaleziono pytań pasujących do wyszukiwania.</p>
                {/* Placeholder image to prevent loading error */}
                <img src="/placeholder.svg?height=100&width=200" alt="Placeholder" className="mx-auto mt-4" />
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </main>
  )
}
