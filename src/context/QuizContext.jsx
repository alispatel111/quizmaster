"use client"

import { createContext, useState, useContext, useEffect } from "react"
import quizData from "../data/quizData"

const QuizContext = createContext()

export const useQuiz = () => useContext(QuizContext)

export const QuizProvider = ({ children }) => {
  // Quiz state
  const [userName, setUserName] = useState("")
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [selectedAnswers, setSelectedAnswers] = useState({})
  const [quizStartTime, setQuizStartTime] = useState(null)
  const [quizEndTime, setQuizEndTime] = useState(null)
  const [quizCompleted, setQuizCompleted] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState("general")
  const [selectedDifficulty, setSelectedDifficulty] = useState("medium")
  const [quizHistory, setQuizHistory] = useState([])
  const [showAnswer, setShowAnswer] = useState(false)
  const [timeLeft, setTimeLeft] = useState(60) // 60 seconds per question
  const [isTimerActive, setIsTimerActive] = useState(true)
  const [timerType, setTimerType] = useState("perQuestion") // "perQuestion" or "wholeQuiz"
  const [totalQuizTime, setTotalQuizTime] = useState(0)
  const [leaderboard, setLeaderboard] = useState([])

  // Get available categories and difficulties
  const categories = [...new Set(quizData.map((quiz) => quiz.category))]
  const difficulties = [...new Set(quizData.map((quiz) => quiz.difficulty))]

  // Get current quiz based on selected category and difficulty
  const currentQuiz =
    quizData.find((quiz) => quiz.category === selectedCategory && quiz.difficulty === selectedDifficulty) || quizData[0]

  const questions = currentQuiz.questions

  // Load quiz history and leaderboard from localStorage
  useEffect(() => {
    const storedHistory = localStorage.getItem("quizHistory")
    if (storedHistory) {
      setQuizHistory(JSON.parse(storedHistory))
    }

    const storedLeaderboard = localStorage.getItem("quizLeaderboard")
    if (storedLeaderboard) {
      setLeaderboard(JSON.parse(storedLeaderboard))
    }

    const storedName = localStorage.getItem("quizUserName")
    if (storedName) {
      setUserName(storedName)
    }
  }, [])

  // Timer effect
  useEffect(() => {
    if (!isTimerActive || !quizStartTime) return

    let timer
    if (timerType === "perQuestion") {
      timer = setInterval(() => {
        setTimeLeft((prevTime) => {
          if (prevTime <= 1) {
            clearInterval(timer)
            // Auto-move to next question or complete quiz if time runs out
            if (currentQuestionIndex < questions.length - 1) {
              handleNextQuestion()
              return 60 // Reset timer for next question
            } else {
              completeQuiz()
              return 0
            }
          }
          return prevTime - 1
        })
      }, 1000)
    } else if (timerType === "wholeQuiz") {
      timer = setInterval(() => {
        const elapsed = Math.floor((Date.now() - quizStartTime) / 1000)
        const remaining = totalQuizTime - elapsed

        if (remaining <= 0) {
          clearInterval(timer)
          completeQuiz()
          setTimeLeft(0)
        } else {
          setTimeLeft(remaining)
        }
      }, 1000)
    }

    return () => clearInterval(timer)
  }, [currentQuestionIndex, isTimerActive, quizStartTime, timerType])

  // Reset timer when question changes (for per-question timer)
  useEffect(() => {
    if (timerType === "perQuestion" && isTimerActive) {
      setTimeLeft(60)
    }
  }, [currentQuestionIndex, timerType])

  const saveQuizHistory = (result) => {
    const updatedHistory = [...quizHistory, result]
    setQuizHistory(updatedHistory)
    localStorage.setItem("quizHistory", JSON.stringify(updatedHistory))

    // Update leaderboard if score is high enough
    updateLeaderboard(result)
  }

  const updateLeaderboard = (result) => {
    // Create a new entry
    const newEntry = {
      userName: result.userName,
      score: result.percentage,
      category: result.category,
      difficulty: result.difficulty,
      date: result.date,
    }

    // Add to leaderboard and sort
    const updatedLeaderboard = [...leaderboard, newEntry].sort((a, b) => b.score - a.score).slice(0, 10) // Keep only top 10

    setLeaderboard(updatedLeaderboard)
    localStorage.setItem("quizLeaderboard", JSON.stringify(updatedLeaderboard))
  }

  const startQuiz = () => {
    setCurrentQuestionIndex(0)
    setSelectedAnswers({})
    setQuizStartTime(Date.now())
    setQuizEndTime(null)
    setQuizCompleted(false)
    setShowAnswer(false)
    setIsTimerActive(true)

    // Set total quiz time if using whole quiz timer
    if (timerType === "wholeQuiz") {
      // 45 seconds per question
      setTotalQuizTime(questions.length * 45)
      setTimeLeft(questions.length * 45)
    } else {
      setTimeLeft(60) // 60 seconds for first question
    }

    // Save user name
    localStorage.setItem("quizUserName", userName)
  }

  const selectAnswer = (questionIndex, answerIndex) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [questionIndex]: answerIndex,
    })
    setShowAnswer(true)
    setIsTimerActive(false) // Pause timer when answer is selected
  }

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1)
      setShowAnswer(false)
      setIsTimerActive(true) // Resume timer for next question
    } else {
      completeQuiz()
    }
  }

  const handlePrevQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1)
      setShowAnswer(false)
      setIsTimerActive(true)
    }
  }

  const completeQuiz = () => {
    setQuizEndTime(Date.now())
    setQuizCompleted(true)
    setIsTimerActive(false)
  }

  const calculateScore = () => {
    let correctAnswers = 0

    questions.forEach((question, index) => {
      if (selectedAnswers[index] === question.correctAnswer) {
        correctAnswers++
      }
    })

    // Make sure we have a valid category and difficulty
    const category = currentQuiz?.category || "general knowledge"
    const difficulty = currentQuiz?.difficulty || "medium"

    // Calculate time taken, ensuring it's not negative or undefined
    const timeTaken = quizEndTime && quizStartTime ? Math.max(0, Math.floor((quizEndTime - quizStartTime) / 1000)) : 0

    return {
      userName,
      correctAnswers,
      totalQuestions: questions.length,
      percentage: Math.round((correctAnswers / questions.length) * 100),
      timeTaken,
      category,
      difficulty,
      date: new Date().toISOString(),
    }
  }

  const getPerformanceMessage = (percentage) => {
    if (percentage >= 90) return "Excellent! You're a master!"
    if (percentage >= 70) return "Great job! Well done!"
    if (percentage >= 50) return "Good effort! Keep learning!"
    if (percentage >= 30) return "You passed! Keep practicing!"
    return "Keep trying! You'll improve!"
  }

  const setTimerMode = (mode) => {
    setTimerType(mode)
  }

  return (
    <QuizContext.Provider
      value={{
        userName,
        setUserName,
        currentQuestionIndex,
        questions,
        selectedAnswers,
        quizStartTime,
        quizEndTime,
        quizCompleted,
        selectedCategory,
        setSelectedCategory,
        selectedDifficulty,
        setSelectedDifficulty,
        quizHistory,
        showAnswer,
        setShowAnswer,
        timeLeft,
        timerType,
        setTimerMode,
        isTimerActive,
        setIsTimerActive,
        leaderboard,
        startQuiz,
        selectAnswer,
        handleNextQuestion,
        handlePrevQuestion,
        completeQuiz,
        calculateScore,
        getPerformanceMessage,
        saveQuizHistory,
        categories,
        difficulties,
      }}
    >
      {children}
    </QuizContext.Provider>
  )
}
