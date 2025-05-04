"use client"

import type React from "react"

import { useState, useRef } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Slider } from "@/components/ui/slider"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, Download, Upload, Save, Trash2, AlertTriangle } from "lucide-react"
import {
  getUserSettings,
  saveUserSettings,
  exportUserData,
  importUserData,
  resetUserStats,
  resetQuizHistory,
  resetAllData,
} from "@/utils/storage"
import { useToast } from "@/hooks/use-toast"

export default function SettingsPage() {
  const router = useRouter()
  const { toast } = useToast()
  const fileInputRef = useRef<HTMLInputElement>(null)

  const settings = getUserSettings()
  const [questionsPerQuiz, setQuestionsPerQuiz] = useState(settings.questionsPerQuiz)
  const [questionsPerPage, setQuestionsPerPage] = useState(settings.questionsPerPage)

  const handleSaveSettings = () => {
    saveUserSettings({
      questionsPerQuiz,
      questionsPerPage,
    })

    toast({
      title: "Settings Saved",
      description: "Your quiz settings have been updated.",
    })
  }

  const handleExportData = () => {
    const data = exportUserData()
    if (!data) return

    const blob = new Blob([data], { type: "application/json" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = `quiz-app-data-${new Date().toISOString().split("T")[0]}.json`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)

    toast({
      title: "Data Exported",
      description: "Your quiz data has been exported successfully.",
    })
  }

  const handleImportClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click()
    }
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    const reader = new FileReader()
    reader.onload = (event) => {
      const content = event.target?.result as string
      const success = importUserData(content)

      if (success) {
        toast({
          title: "Data Imported",
          description: "Your quiz data has been imported successfully.",
        })

        // Update settings state
        const newSettings = getUserSettings()
        setQuestionsPerQuiz(newSettings.questionsPerQuiz)
        setQuestionsPerPage(newSettings.questionsPerPage)
      } else {
        toast({
          title: "Import Failed",
          description: "There was an error importing your data.",
          variant: "destructive",
        })
      }
    }
    reader.readAsText(file)

    // Reset the input
    e.target.value = ""
  }

  return (
    <main className="flex min-h-screen flex-col items-center p-4 bg-gray-50 dark:bg-gray-900">
      <div className="w-full max-w-3xl">
        <div className="flex items-center mb-6">
          <Button variant="ghost" size="sm" onClick={() => router.push("/")} className="mr-2">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Powrót
          </Button>
          <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Ustawienia i Dane</h1>
        </div>

        <Tabs defaultValue="settings">
          <TabsList className="grid w-full grid-cols-3 mb-6">
            <TabsTrigger value="settings">Ustawienia Quizu</TabsTrigger>
            <TabsTrigger value="data">Zarządzanie Danymi</TabsTrigger>
            <TabsTrigger value="reset">Resetowanie</TabsTrigger>
          </TabsList>

          <TabsContent value="settings">
            <Card>
              <CardHeader>
                <CardTitle>Domyślne Ustawienia Quizu</CardTitle>
                <CardDescription>Skonfiguruj domyślne preferencje quizu</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <Label htmlFor="questionsPerQuiz">Liczba Pytań</Label>
                    <span className="text-sm font-medium">{questionsPerQuiz}</span>
                  </div>
                  <Slider
                    id="questionsPerQuiz"
                    min={5}
                    max={50}
                    step={5}
                    value={[questionsPerQuiz]}
                    onValueChange={(value) => setQuestionsPerQuiz(value[0])}
                  />
                  <p className="text-xs text-gray-500">Wybierz domyślną liczbę pytań dla nowych quizów</p>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between">
                    <Label htmlFor="questionsPerPage">Pytań na Stronę</Label>
                    <span className="text-sm font-medium">{questionsPerPage}</span>
                  </div>
                  <Slider
                    id="questionsPerPage"
                    min={1}
                    max={5}
                    step={1}
                    value={[questionsPerPage]}
                    onValueChange={(value) => setQuestionsPerPage(value[0])}
                  />
                  <p className="text-xs text-gray-500">Wybierz domyślną liczbę pytań wyświetlanych na stronie</p>
                </div>

                <Button onClick={handleSaveSettings} className="w-full">
                  <Save className="h-4 w-4 mr-2" />
                  Zapisz Ustawienia
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="data">
            <Card>
              <CardHeader>
                <CardTitle>Kopia Zapasowa i Przywracanie</CardTitle>
                <CardDescription>Eksportuj lub importuj dane quizu, aby zachować historię i statystyki</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label>Eksportuj Dane</Label>
                  <p className="text-sm text-gray-500">Pobierz kopię zapasową historii quizów, statystyk i ustawień</p>
                  <Button onClick={handleExportData} className="w-full">
                    <Download className="h-4 w-4 mr-2" />
                    Eksportuj Dane
                  </Button>
                </div>

                <div className="space-y-2">
                  <Label>Importuj Dane</Label>
                  <p className="text-sm text-gray-500">Przywróć dane quizu z wcześniej wyeksportowanego pliku</p>
                  <Button onClick={handleImportClick} variant="outline" className="w-full">
                    <Upload className="h-4 w-4 mr-2" />
                    Importuj Dane
                  </Button>
                  <Input ref={fileInputRef} type="file" accept=".json" onChange={handleFileChange} className="hidden" />
                </div>

                <div className="rounded-md bg-amber-50 p-4 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-900">
                  <p className="text-sm text-amber-800 dark:text-amber-300">
                    <strong>Uwaga:</strong> Importowanie danych nadpisze bieżącą historię quizów, statystyki i
                    ustawienia.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="reset">
            <Card>
              <CardHeader>
                <CardTitle>Resetowanie Danych</CardTitle>
                <CardDescription>Usuń historię quizów lub statystyki</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label>Resetuj Statystyki</Label>
                  <p className="text-sm text-gray-500">Usuń wszystkie statystyki quizów</p>
                  <Button
                    onClick={() => {
                      resetUserStats()
                      toast({
                        title: "Statystyki Zresetowane",
                        description: "Twoje statystyki zostały usunięte.",
                      })
                    }}
                    variant="outline"
                    className="w-full"
                  >
                    <Trash2 className="h-4 w-4 mr-2" />
                    Resetuj Statystyki
                  </Button>
                </div>

                <div className="space-y-2">
                  <Label>Resetuj Historię Quizów</Label>
                  <p className="text-sm text-gray-500">Usuń historię wszystkich rozwiązanych quizów</p>
                  <Button
                    onClick={() => {
                      resetQuizHistory()
                      toast({
                        title: "Historia Zresetowana",
                        description: "Twoja historia quizów została usunięta.",
                      })
                    }}
                    variant="outline"
                    className="w-full"
                  >
                    <Trash2 className="h-4 w-4 mr-2" />
                    Resetuj Historię
                  </Button>
                </div>

                <div className="space-y-2">
                  <Label>Resetuj Wszystkie Dane</Label>
                  <p className="text-sm text-gray-500">
                    Usuń wszystkie dane, w tym historię, statystyki i bieżące sesje
                  </p>
                  <Button
                    onClick={() => {
                      if (confirm("Czy na pewno chcesz usunąć wszystkie dane? Tej operacji nie można cofnąć.")) {
                        resetAllData()
                        toast({
                          title: "Wszystkie Dane Zresetowane",
                          description: "Wszystkie twoje dane zostały usunięte.",
                        })
                      }
                    }}
                    variant="destructive"
                    className="w-full"
                  >
                    <AlertTriangle className="h-4 w-4 mr-2" />
                    Resetuj Wszystkie Dane
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </main>
  )
}

