"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { getUserSettings, saveUserSettings } from "@/utils/storage"
import { getQuestionsBySet } from "@/data/quiz-sets"
import { useToast } from "@/hooks/use-toast"

export default function SettingsPage() {
  const router = useRouter()
  const { toast } = useToast()
  const [questionsPerQuiz, setQuestionsPerQuiz] = useState(10)
  const [questionsPerPage, setQuestionsPerPage] = useState(1)
  const [questionSet, setQuestionSet] = useState("all")
  const [maxQuestions, setMaxQuestions] = useState(100)

  useEffect(() => {
    // Load user settings
    const settings = getUserSettings()
    setQuestionsPerQuiz(settings.questionsPerQuiz)
    setQuestionsPerPage(settings.questionsPerPage)
    setQuestionSet(settings.questionSet || "all")

    // Update max questions based on selected set
    updateMaxQuestions(settings.questionSet || "all")
  }, [])

  // Update max questions when set changes
  useEffect(() => {
    updateMaxQuestions(questionSet)
  }, [questionSet])

  const updateMaxQuestions = (setId: string) => {
    const questions = getQuestionsBySet(setId)
    setMaxQuestions(questions.length)

    // Adjust questions count if it exceeds the new maximum
    if (questionsPerQuiz > questions.length) {
      setQuestionsPerQuiz(questions.length)
    }
  }

  const saveSettings = () => {
    saveUserSettings({
      questionsPerQuiz,
      questionsPerPage,
      questionSet,
    })

    toast({
      title: "Ustawienia zapisane",
      description: "Twoje preferencje zostały zaktualizowane.",
    })

    router.push("/")
  }

  return (
    <main className="container mx-auto py-6 px-4">
      <div className="max-w-2xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle>Ustawienia aplikacji</CardTitle>
            <CardDescription>Dostosuj domyślne parametry quizów</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-lg font-medium mb-2">Domyślny zestaw pytań</h3>
              <Tabs defaultValue={questionSet} onValueChange={setQuestionSet}>
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
              <h3 className="text-lg font-medium mb-2">Domyślna liczba pytań: {questionsPerQuiz}</h3>
              <Slider
                value={[questionsPerQuiz]}
                min={5}
                max={maxQuestions}
                step={1}
                onValueChange={(value) => setQuestionsPerQuiz(value[0])}
              />
              <p className="text-sm text-gray-500 mt-1">
                Wybierz domyślną liczbę pytań w quizie (od 5 do {maxQuestions})
              </p>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-2">Domyślna liczba pytań na stronę: {questionsPerPage}</h3>
              <Slider
                value={[questionsPerPage]}
                min={1}
                max={5}
                step={1}
                onValueChange={(value) => setQuestionsPerPage(value[0])}
              />
              <p className="text-sm text-gray-500 mt-1">
                Wybierz domyślną liczbę pytań wyświetlanych jednocześnie na stronie
              </p>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline" onClick={() => router.push("/")}>
              Anuluj
            </Button>
            <Button onClick={saveSettings}>Zapisz ustawienia</Button>
          </CardFooter>
        </Card>
      </div>
    </main>
  )
}
