"use client"

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import type { Question } from "@/types/quiz"

interface QuizQuestionProps {
  question: Question
  selectedAnswer?: number
  onSelectAnswer: (index: number) => void
}

export default function QuizQuestion({ question, selectedAnswer, onSelectAnswer }: QuizQuestionProps) {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-100">{question.question}</h2>

      <RadioGroup
        value={selectedAnswer?.toString()}
        onValueChange={(value) => onSelectAnswer(Number.parseInt(value))}
        className="space-y-3"
      >
        {question.options.map((option, index) => (
          <div
            key={index}
            className={`flex items-center space-x-2 rounded-lg border p-4 cursor-pointer transition-colors hover:bg-gray-100 dark:hover:bg-gray-800 ${
              selectedAnswer === index
                ? "bg-gray-100 dark:bg-gray-800 border-primary"
                : "border-gray-200 dark:border-gray-700"
            }`}
            onClick={() => onSelectAnswer(index)}
          >
            <RadioGroupItem value={index.toString()} id={`option-${index}`} className="sr-only" />
            <Label htmlFor={`option-${index}`} className="flex-grow cursor-pointer text-gray-700 dark:text-gray-300">
              {option}
            </Label>
          </div>
        ))}
      </RadioGroup>
    </div>
  )
}

