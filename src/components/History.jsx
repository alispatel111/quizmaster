"use client"

import { useNavigate } from "react-router-dom"
import { useQuiz } from "../context/QuizContext"
import { motion } from "framer-motion"
import "../styles/History.css"

const History = () => {
  const navigate = useNavigate()
  const { quizHistory } = useQuiz()

  const formatDate = (dateString) => {
    const options = {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    }
    return new Date(dateString).toLocaleDateString(undefined, options)
  }

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}m ${secs < 10 ? "0" : ""}${secs}s`
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.3 },
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
    <motion.div
      className="history-container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <motion.div className="history-header" variants={itemVariants}>
        <h1>Quiz History</h1>
        <button className="back-button" onClick={() => navigate("/")}>
          Back to Home
        </button>
      </motion.div>

      {quizHistory.length === 0 ? (
        <motion.div className="empty-history" variants={itemVariants}>
          <div className="empty-icon">📊</div>
          <h2>No Quiz History Yet</h2>
          <p>Complete a quiz to see your history here.</p>
          <button className="start-quiz-button" onClick={() => navigate("/")}>
            Start a Quiz
          </button>
        </motion.div>
      ) : (
        <>
          <motion.div className="history-filters" variants={itemVariants}>
            <div className="filter-info">
              <span>Total Quizzes: {quizHistory.length}</span>
              <span>
                Average Score:{" "}
                {Math.round(quizHistory.reduce((acc, record) => acc + record.percentage, 0) / quizHistory.length)}%
              </span>
            </div>
          </motion.div>

          <motion.div className="history-table-container" variants={itemVariants}>
            <table className="history-table">
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Category</th>
                  <th>Difficulty</th>
                  <th>Score</th>
                  <th>Time</th>
                </tr>
              </thead>
              <tbody>
                {quizHistory
                  .slice()
                  .reverse()
                  .map((record, index) => (
                    <motion.tr key={index} variants={itemVariants} className="history-row">
                      <td>{formatDate(record.date)}</td>
                      <td className="category-cell">
                        {record.category
                          ? record.category.charAt(0).toUpperCase() + record.category.slice(1)
                          : "General"}
                      </td>
                      <td className="difficulty-cell">
                        <span className={`difficulty-badge ${record.difficulty || "medium"}`}>
                          {record.difficulty
                            ? record.difficulty.charAt(0).toUpperCase() + record.difficulty.slice(1)
                            : "Medium"}
                        </span>
                      </td>
                      <td className="score-cell">
                        <div
                          className={`score-badge ${
                            record.percentage >= 70 ? "high" : record.percentage >= 40 ? "medium" : "low"
                          }`}
                        >
                          {record.percentage}%
                        </div>
                        <span className="score-detail">
                          ({record.correctAnswers}/{record.totalQuestions})
                        </span>
                      </td>
                      <td>{formatTime(record.timeTaken)}</td>
                    </motion.tr>
                  ))}
              </tbody>
            </table>
          </motion.div>

          <motion.div className="history-stats" variants={itemVariants}>
            <div className="stats-card">
              <h3>Performance by Category</h3>
              <div className="stats-content">
                {Array.from(new Set(quizHistory.map((record) => record.category || "general"))).map((category) => {
                  const categoryRecords = quizHistory.filter((record) => (record.category || "general") === category)
                  const avgScore = Math.round(
                    categoryRecords.reduce((acc, record) => acc + record.percentage, 0) / categoryRecords.length,
                  )

                  return (
                    <div key={category} className="stat-item">
                      <div className="stat-label">
                        {category ? category.charAt(0).toUpperCase() + category.slice(1) : "General"}
                      </div>
                      <div className="stat-bar-container">
                        <div className="stat-bar" style={{ width: `${avgScore}%` }}></div>
                        <span className="stat-value">{avgScore}%</span>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            <div className="stats-card">
              <h3>Performance by Difficulty</h3>
              <div className="stats-content">
                {Array.from(new Set(quizHistory.map((record) => record.difficulty || "medium"))).map((difficulty) => {
                  const difficultyRecords = quizHistory.filter(
                    (record) => (record.difficulty || "medium") === difficulty,
                  )
                  const avgScore = Math.round(
                    difficultyRecords.reduce((acc, record) => acc + record.percentage, 0) / difficultyRecords.length,
                  )

                  return (
                    <div key={difficulty} className="stat-item">
                      <div className="stat-label">
                        {difficulty ? difficulty.charAt(0).toUpperCase() + difficulty.slice(1) : "Medium"}
                      </div>
                      <div className="stat-bar-container">
                        <div className="stat-bar" style={{ width: `${avgScore}%` }}></div>
                        <span className="stat-value">{avgScore}%</span>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </motion.div>
  )
}

export default History
