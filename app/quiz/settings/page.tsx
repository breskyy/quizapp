"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { getUserSettings } from "@/utils/storage"
import { getQuestionsBySet } from "@/data/quiz-sets"

export default function QuizSettingsPage() {
  const router = useRouter()
  const [questionsCount, setQuestionsCount] = useState(10)
  const [questionsPerPage, setQuestionsPerPage] = useState(1)
  const [selectedSet, setSelectedSet] = useState("all")
  const [maxQuestions, setMaxQuestions] = useState(100)

  useEffect(() => {
    // Load user settings
    const settings = getUserSettings()
    setQuestionsCount(settings.questionsPerQuiz)
    setQuestionsPerPage(settings.questionsPerPage)
    setSelectedSet(settings.questionSet || "all")

    // Update max questions based on selected set
    updateMaxQuestions(settings.questionSet || "all")
  }, [])

  // Update max questions when set changes
  useEffect(() => {
    updateMaxQuestions(selectedSet)
  }, [selectedSet])

  const updateMaxQuestions = (setId: string) => {
    const questions = getQuestionsBySet(setId)
    setMaxQuestions(questions.length)

    // Adjust questions count if it exceeds the new maximum
    if (questionsCount > questions.length) {
      setQuestionsCount(questions.length)
    }
  }

  const startQuiz = () => {
    router.push(`/quiz/new?count=${questionsCount}&perPage=${questionsPerPage}&set=${selectedSet}`)
  }

  return (
    <main className="container mx-auto py-6 px-4">
      <div className="max-w-2xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle>Ustawienia quizu</CardTitle>
            <CardDescription>Dostosuj parametry quizu przed rozpoczęciem</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-lg font-medium mb-2">Zestaw pytań</h3>
              <Tabs defaultValue={selectedSet} onValueChange={setSelectedSet}>
                <TabsList className="grid grid-cols-3 mb-2">
                  <TabsTrigger value="all">Wszystkie pytania</TabsTrigger>
                  <TabsTrigger value="set1">Zestaw 1</TabsTrigger>
                  <TabsTrigger value="set2">Zestaw 2</TabsTrigger>
                </TabsList>
                <TabsContent value="all">
                  <p className="text-sm text-gray-500">
                    Pytania z obu zestawów (łącznie {getQuestionsBySet("all").length} pytań)
                  </p>
                </TabsContent>
                <TabsContent value="set1">
                  <p className="text-sm text-gray-500">
                    Tylko pytania z pierwszego zestawu ({getQuestionsBySet("set1").length} pytań)
                  </p>
                </TabsContent>
                <TabsContent value="set2">
                  <p className="text-sm text-gray-500">
                    Tylko pytania z drugiego zestawu ({getQuestionsBySet("set2").length} pytań)
                  </p>
                </TabsContent>
              </Tabs>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-2">Liczba pytań: {questionsCount}</h3>
              <Slider
                value={[questionsCount]}
                min={5}
                max={maxQuestions}
                step={1}
                onValueChange={(value) => setQuestionsCount(value[0])}
              />
              <p className="text-sm text-gray-500 mt-1">Wybierz liczbę pytań w quizie (od 5 do {maxQuestions})</p>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-2">Pytań na stronę: {questionsPerPage}</h3>
              <Slider
                value={[questionsPerPage]}
                min={1}
                max={5}
                step={1}
                onValueChange={(value) => setQuestionsPerPage(value[0])}
              />
              <p className="text-sm text-gray-500 mt-1">Wybierz liczbę pytań wyświetlanych jednocześnie na stronie</p>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline" onClick={() => router.back()}>
              Anuluj
            </Button>
            <Button onClick={startQuiz}>Rozpocznij quiz</Button>
          </CardFooter>
        </Card>
      </div>
    </main>
  )
}
