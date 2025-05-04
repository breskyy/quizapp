import { Suspense } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, BarChart2, History, Play } from "lucide-react"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 bg-gray-50 dark:bg-gray-900">
      <div className="w-full max-w-3xl">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-gray-100">Medical Quiz App</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card className="hover:shadow-md transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Play className="h-5 w-5 text-primary" />
                Start New Quiz
              </CardTitle>
              <CardDescription>Begin a new quiz with random questions</CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/quiz/new">
                <Button className="w-full">Start Quiz</Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="hover:shadow-md transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <History className="h-5 w-5 text-primary" />
                Recent Quizzes
              </CardTitle>
              <CardDescription>View and continue your recent quizzes</CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/history">
                <Button variant="outline" className="w-full">
                  View History
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="hover:shadow-md transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart2 className="h-5 w-5 text-primary" />
                Statistics
              </CardTitle>
              <CardDescription>View your quiz performance statistics</CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/statistics">
                <Button variant="outline" className="w-full">
                  View Stats
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="hover:shadow-md transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-primary" />
                Question Database
              </CardTitle>
              <CardDescription>Browse all available questions</CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/database">
                <Button variant="outline" className="w-full">
                  Browse Questions
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>

        <Suspense fallback={null}>
          <ResumeQuizCard />
        </Suspense>
      </div>
    </main>
  )
}

function ResumeQuizCard() {
  return (
    <div className="mt-6" id="resume-quiz-container">
      {/* This will be populated client-side if there's a quiz to resume */}
    </div>
  )
}

