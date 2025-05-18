"use client"

import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { useQuiz } from "../context/QuizContext"
import { motion, AnimatePresence } from "framer-motion"
import "../styles/Quiz.css"

const Quiz = () => {
  const navigate = useNavigate()
  const {
    currentQuestionIndex,
    questions,
    selectedAnswers,
    selectAnswer,
    handleNextQuestion,
    handlePrevQuestion,
    completeQuiz,
    showAnswer,
    timeLeft,
    timerType,
    isTimerActive,
  } = useQuiz()

  const [exitAnimation, setExitAnimation] = useState(false)

  // Redirect if no questions
  useEffect(() => {
    if (!questions || questions.length === 0) {
      navigate("/")
    }
  }, [questions, navigate])

  const currentQuestion = questions[currentQuestionIndex]

  if (!currentQuestion) return null

  const isLastQuestion = currentQuestionIndex === questions.length - 1
  const selectedAnswerIndex = selectedAnswers[currentQuestionIndex]
  const isCorrect = selectedAnswerIndex === currentQuestion.correctAnswer

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`
  }

  const handleAnswerSelect = (answerIndex) => {
    if (showAnswer) return // Prevent changing answer after showing result
    selectAnswer(currentQuestionIndex, answerIndex)
  }

  const handleNext = () => {
    setExitAnimation(true)
    setTimeout(() => {
      handleNextQuestion()
      setExitAnimation(false)
    }, 300)
  }

  const handlePrev = () => {
    setExitAnimation(true)
    setTimeout(() => {
      handlePrevQuestion()
      setExitAnimation(false)
    }, 300)
  }

  const handleFinish = () => {
    completeQuiz()
    navigate("/results")
  }

  const containerVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
    exit: {
      opacity: 0,
      x: -100,
      transition: { duration: 0.3 },
    },
  }

  const questionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: { duration: 0.3 },
    },
  }

  return (
    <motion.div className="quiz-container" variants={containerVariants} initial="hidden" animate="visible" exit="exit">
      <div className="quiz-header">
        <div className="quiz-info">
          <h2>
            Question {currentQuestionIndex + 1} of {questions.length}
          </h2>
          <div className="quiz-category">
            <span>Category:</span> {currentQuestion.category || "General"}
          </div>
        </div>
        <div className="timer-container">
          <div className={`timer ${timeLeft < 10 ? "timer-warning" : ""}`}>
            <svg viewBox="0 0 100 100" className="timer-svg">
              <circle cx="50" cy="50" r="45" className="timer-background" />
              <circle
                cx="50"
                cy="50"
                r="45"
                className="timer-progress"
                style={{
                  strokeDashoffset:
                    timerType === "perQuestion"
                      ? 283 - (timeLeft / 60) * 283
                      : 283 - (timeLeft / (questions.length * 45)) * 283,
                }}
              />
            </svg>
            <div className="timer-text">{formatTime(timeLeft)}</div>
          </div>
          <div className="timer-label">{timerType === "perQuestion" ? "Time for this question" : "Time remaining"}</div>
        </div>
      </div>

      <div className="progress-bar-container">
        <div
          className="progress-bar"
          style={{ width: `${((currentQuestionIndex + 1) / questions.length) * 100}%` }}
        ></div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentQuestionIndex}
          className={`question-container ${exitAnimation ? "exit" : ""}`}
          variants={questionVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <h3 className="question-text">{currentQuestion.question}</h3>

          <div className="answers-container">
            {currentQuestion.answers.map((answer, index) => (
              <motion.div
                key={index}
                className={`answer-option ${
                  selectedAnswerIndex === index ? (showAnswer ? (isCorrect ? "correct" : "incorrect") : "selected") : ""
                } ${
                  showAnswer && currentQuestion.correctAnswer === index && selectedAnswerIndex !== index
                    ? "correct-answer"
                    : ""
                }`}
                onClick={() => handleAnswerSelect(index)}
                whileHover={{ scale: !showAnswer ? 1.02 : 1 }}
                whileTap={{ scale: !showAnswer ? 0.98 : 1 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="answer-letter">{String.fromCharCode(65 + index)}</div>
                <div className="answer-text">{answer}</div>
              </motion.div>
            ))}
          </div>

          {showAnswer && (
            <motion.div
              className={`explanation ${isCorrect ? "correct" : "incorrect"}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <h4>{isCorrect ? "Correct!" : "Incorrect!"}</h4>
              <p>
                {currentQuestion.explanation ||
                  (isCorrect
                    ? "Great job! You selected the right answer."
                    : `The correct answer is ${String.fromCharCode(65 + currentQuestion.correctAnswer)}: ${currentQuestion.answers[currentQuestion.correctAnswer]}`)}
              </p>
            </motion.div>
          )}
        </motion.div>
      </AnimatePresence>

      <div className="quiz-navigation">
        <button className="nav-button prev" onClick={handlePrev} disabled={currentQuestionIndex === 0}>
          Previous
        </button>

        {isLastQuestion ? (
          <button className="nav-button finish" onClick={handleFinish}>
            Finish Quiz
          </button>
        ) : (
          <button className="nav-button next" onClick={handleNext}>
            {showAnswer ? "Next Question" : "Skip"}
          </button>
        )}
      </div>
    </motion.div>
  )
}

export default Quiz
