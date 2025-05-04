import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, BarChart2, History, Play, Settings } from "lucide-react"
import ResumeQuizCard from "@/components/resume-quiz-card"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 bg-gray-50 dark:bg-gray-900">
      <div className="w-full max-w-3xl">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-gray-100">Quiz Medyczny</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card className="hover:shadow-md transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Play className="h-5 w-5 text-primary" />
                Rozpocznij Nowy Quiz
              </CardTitle>
              <CardDescription>Rozpocznij nowy quiz z losowymi pytaniami</CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/quiz/settings">
                <Button className="w-full">Rozpocznij Quiz</Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="hover:shadow-md transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <History className="h-5 w-5 text-primary" />
                Ostatnie Quizy
              </CardTitle>
              <CardDescription>Zobacz i kontynuuj swoje ostatnie quizy</CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/history">
                <Button variant="outline" className="w-full">
                  Zobacz Historię
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="hover:shadow-md transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart2 className="h-5 w-5 text-primary" />
                Statystyki
              </CardTitle>
              <CardDescription>Zobacz statystyki swoich wyników</CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/statistics">
                <Button variant="outline" className="w-full">
                  Zobacz Statystyki
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="hover:shadow-md transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-primary" />
                Baza Pytań
              </CardTitle>
              <CardDescription>Przeglądaj wszystkie dostępne pytania</CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/database">
                <Button variant="outline" className="w-full">
                  Przeglądaj Pytania
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="hover:shadow-md transition-shadow md:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Settings className="h-5 w-5 text-primary" />
                Ustawienia i Dane
              </CardTitle>
              <CardDescription>Zarządzaj ustawieniami quizu i danymi</CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/settings">
                <Button variant="outline" className="w-full">
                  Otwórz Ustawienia
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>

        <div className="mt-6">
          <ResumeQuizCard />
        </div>
      </div>
    </main>
  )
}

