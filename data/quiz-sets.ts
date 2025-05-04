import type { Question } from "@/types/quiz"

// First set of questions (first half of the original questions)
export const quizSet1: Question[] = [
  {
    question:
      "Do hemodializy stosuje się cewniki jedno lub dwukanałowe wprowadzone do dużych naczyń żylnych. Zabezpieczenie cewników polega na:",
    options: [
      "zamknięciu jałowym korkiem kanału cewnika.",
      "założeniu jałowego opatrunku wokół wkłucia, wypełnieniu kanału cewnika heparyną i zamknięciu jałowym korkiem.",
      "założeniu opatrunku i zamknięciu cewnika.",
      "założeniu jałowego opatrunku i zamknięciu cewnika.",
    ],
    correctAnswer: 1,
  },
  {
    question: "Znieczulenie całkowicie wziewne to:",
    options: [
      "VIMA (Volatile Induction and Maintenance Anaesthesia)",
      "SIMV (Synchronized Intermittent Mandatory Ventilation)",
      "TIVA (Total Intravenous Anaesthesia)",
      "PCV (Pressure Controlled Ventilation)",
    ],
    correctAnswer: 0,
  },
  {
    question: "Znieczulenie całkowicie wziewne to:",
    options: [
      "VIMA (Volatile Induction and Maintenance Anaesthesia)",
      "SIMV (Synchronized Intermittent Mandatory Ventilation)",
      "TIVA (Total Intravenous Anaesthesia)",
      "PCV (Pressure Controlled Ventilation)",
    ],
    correctAnswer: 0,
  },
  {
    question: "Znieczulenie całkowicie wziewne to:",
    options: [
      "VIMA (Volatile Induction and Maintenance Anaesthesia)",
      "SIMV (Synchronized Intermittent Mandatory Ventilation)",
      "TIVA (Total Intravenous Anaesthesia)",
      "PCV (Pressure Controlled Ventilation)",
    ],
    correctAnswer: 0,
  },
  {
    question: "Znieczulenie całkowicie wziewne to:",
    options: [
      "VIMA (Volatile Induction and Maintenance Anaesthesia)",
      "SIMV (Synchronized Intermittent Mandatory Ventilation)",
      "TIVA (Total Intravenous Anaesthesia)",
      "PCV (Pressure Controlled Ventilation)",
    ],
    correctAnswer: 0,
  },
]

// Second set of questions (second half of the original questions)
export const quizSet2: Question[] = [
  {
    question: "Znieczulenie całkowicie wziewne to:",
    options: [
      "VIMA (Volatile Induction and Maintenance Anaesthesia)",
      "SIMV (Synchronized Intermittent Mandatory Ventilation)",
      "TIVA (Total Intravenous Anaesthesia)",
      "PCV (Pressure Controlled Ventilation)",
    ],
    correctAnswer: 0,
  },
  {
    question: "Znieczulenie całkowicie wziewne to:",
    options: [
      "VIMA (Volatile Induction and Maintenance Anaesthesia)",
      "SIMV (Synchronized Intermittent Mandatory Ventilation)",
      "TIVA (Total Intravenous Anaesthesia)",
      "PCV (Pressure Controlled Ventilation)",
    ],
    correctAnswer: 0,
  },
  {
    question: "Znieczulenie całkowicie wziewne to:",
    options: [
      "VIMA (Volatile Induction and Maintenance Anaesthesia)",
      "SIMV (Synchronized Intermittent Mandatory Ventilation)",
      "TIVA (Total Intravenous Anaesthesia)",
      "PCV (Pressure Controlled Ventilation)",
    ],
    correctAnswer: 0,
  },
  {
    question: "Znieczulenie całkowicie wziewne to:",
    options: [
      "VIMA (Volatile Induction and Maintenance Anaesthesia)",
      "SIMV (Synchronized Intermittent Mandatory Ventilation)",
      "TIVA (Total Intravenous Anaesthesia)",
      "PCV (Pressure Controlled Ventilation)",
    ],
    correctAnswer: 0,
  },
  {
    question: "Znieczulenie całkowicie wziewne to:",
    options: [
      "VIMA (Volatile Induction and Maintenance Anaesthesia)",
      "SIMV (Synchronized Intermittent Mandatory Ventilation)",
      "TIVA (Total Intravenous Anaesthesia)",
      "PCV (Pressure Controlled Ventilation)",
    ],
    correctAnswer: 0,
  },
]

// Combined set of all questions
export const allQuestions: Question[] = [...quizSet1, ...quizSet2]

// Export a function to get questions by set
export function getQuestionsBySet(setId: string): Question[] {
  switch (setId) {
    case "set1":
      return quizSet1
    case "set2":
      return quizSet2
    case "all":
    default:
      return allQuestions
  }
}
