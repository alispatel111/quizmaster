"use client"

import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { useQuiz } from "../context/QuizContext"
import { motion } from "framer-motion"
import confetti from "canvas-confetti"
import PageTransitionEffect from "./PageTransitionEffect"
import "../styles/Results.css"

const Results = () => {
  const navigate = useNavigate()
  const { calculateScore, getPerformanceMessage, startQuiz, quizCompleted, saveQuizHistory, userName } = useQuiz()
  const [animateScore, setAnimateScore] = useState(false)

  // Calculate score once outside of useEffect to avoid infinite loop
  const score = calculateScore()
  const isPassing = score && score.percentage >= 30 // Set passing threshold to 30%

  // Redirect if quiz not completed
  useEffect(() => {
    if (!quizCompleted) {
      navigate("/")
    }
  }, [quizCompleted, navigate])

  // Save quiz result to history and trigger confetti - only once when component mounts
  useEffect(() => {
    if (quizCompleted && score) {
      // Make sure we have all the data before saving
      const quizResult = {
        ...score,
        userName: userName || "User",
        correctAnswers: score.correctAnswers || 0,
        totalQuestions: score.totalQuestions || 0,
        timeTaken: score.timeTaken || 0,
        category: score.category || "General Knowledge",
        difficulty: score.difficulty || "Medium",
        date: new Date().toISOString(),
      }

      // Save the complete quiz result
      saveQuizHistory(quizResult)

      // Animate score after a short delay
      setTimeout(() => {
        setAnimateScore(true)
      }, 500)

      // Trigger confetti if score is passing (30% or higher)
      if (isPassing) {
        // Trigger confetti
        const duration = 5 * 1000
        const end = Date.now() + duration

        const colors = ["#4f46e5", "#3b82f6", "#8b5cf6", "#10b981", "#f59e0b"]

        // More intense confetti for passing
        const confettiBlast = () => {
          confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 },
            colors: colors,
          })
        }

        // Initial blast
        confettiBlast()

        // Continuous confetti
        ;(function frame() {
          confetti({
            particleCount: 2,
            angle: 60,
            spread: 55,
            origin: { x: 0 },
            colors: colors,
          })

          confetti({
            particleCount: 2,
            angle: 120,
            spread: 55,
            origin: { x: 1 },
            colors: colors,
          })

          if (Date.now() < end) {
            requestAnimationFrame(frame)
          }
        })()

        // Another blast after 1 second
        setTimeout(confettiBlast, 1000)
      }
    }
  }, [quizCompleted])

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60)
    const secs = Math.floor(seconds % 60)
    return `${mins}m ${secs}s`
  }

  // Add error handling
  if (!quizCompleted || !score) {
    return <div className="loading-message">Loading results or invalid quiz data...</div>
  }

  const performanceMessage = getPerformanceMessage(score.percentage)

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
        duration: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  }

  return (
    <>
      <PageTransitionEffect />
      <motion.div className="results-container" variants={containerVariants} initial="hidden" animate="visible">
        <motion.div className="results-card" variants={itemVariants}>
          <motion.div className="results-header" variants={itemVariants}>
            <h1 className="results-title">Quiz Results</h1>
            <p className="results-subtitle">Great effort, {userName || "User"}!</p>
          </motion.div>

          <motion.div className="score-container" variants={itemVariants}>
            <div className="score-circle-container">
              <div className="score-circle">
                <div className="score-content">
                  <div className="score-value">{score.percentage}%</div>
                  <div className="score-label">Score</div>
                </div>
              </div>
              <svg className="score-svg" viewBox="0 0 100 100">
                <circle className="score-background" cx="50" cy="50" r="45" />
                <circle
                  className={`score-progress ${isPassing ? "passing" : "failing"}`}
                  cx="50"
                  cy="50"
                  r="45"
                  strokeDasharray="283"
                  strokeDashoffset={animateScore ? 283 - score.percentage * 2.83 : 283}
                  transform="rotate(-90 50 50)"
                />
                <defs>
                  <linearGradient id="passing-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#10b981" />
                    <stop offset="100%" stopColor="#3b82f6" />
                  </linearGradient>
                  <linearGradient id="failing-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#f59e0b" />
                    <stop offset="100%" stopColor="#ef4444" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </motion.div>

          <motion.div className={`message-box ${isPassing ? "passing" : "failing"}`} variants={itemVariants}>
            <p className="performance-message">
              {isPassing ? (
                <>
                  <span className="success-icon">✓</span> {performanceMessage}
                </>
              ) : (
                <>
                  <span className="fail-icon">!</span> {performanceMessage}
                </>
              )}
            </p>
          </motion.div>

          {/* <motion.div className="stats-grid" variants={itemVariants}>
            <motion.div className="stat-card" whileHover={{ y: -8, boxShadow: "0 15px 30px rgba(0, 0, 0, 0.1)" }}>
              <div className="stat-label">Correct Answers</div>
              <div className="stat-value correct-value">
                {score.correctAnswers !== undefined ? score.correctAnswers : 0} / {score.totalQuestions || 0}
              </div>
            </motion.div>

            <motion.div className="stat-card" whileHover={{ y: -8, boxShadow: "0 15px 30px rgba(0, 0, 0, 0.1)" }}>
              <div className="stat-label">Time Taken</div>
              <div className="stat-value time-value">{formatTime(score.timeTaken || 0)}</div>
            </motion.div>

            <motion.div className="stat-card" whileHover={{ y: -8, boxShadow: "0 15px 30px rgba(0, 0, 0, 0.1)" }}>
              <div className="stat-label">Topic</div>
              <div className="stat-value topic-value">
                {score.category
                  ? score.category.charAt(0).toUpperCase() + score.category.slice(1)
                  : "General Knowledge"}
              </div>
            </motion.div>

            <motion.div className="stat-card" whileHover={{ y: -8, boxShadow: "0 15px 30px rgba(0, 0, 0, 0.1)" }}>
              <div className="stat-label">Difficulty</div>
              <div className="stat-value difficulty-value">
                {score.difficulty ? score.difficulty.charAt(0).toUpperCase() + score.difficulty.slice(1) : "Medium"}
              </div>
            </motion.div>
          </motion.div> */}

          <motion.div className="results-actions" variants={itemVariants}>
            <motion.button
              onClick={() => {
                startQuiz()
                navigate("/quiz")
              }}
              className="btn-primary"
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              Retake Quiz
            </motion.button>

            <motion.button
              onClick={() => navigate("/certificate")}
              className="btn-success"
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              View Certificate
            </motion.button>

            <motion.button
              onClick={() => navigate("/")}
              className="btn-secondary"
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              Back to Home
            </motion.button>
          </motion.div>
        </motion.div>
      </motion.div>
    </>
  )
}

export default Results
