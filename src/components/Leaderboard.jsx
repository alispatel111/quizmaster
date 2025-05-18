"use client"

import { useNavigate } from "react-router-dom"
import { useQuiz } from "../context/QuizContext"
import { motion } from "framer-motion"
import "../styles/Leaderboard.css"

const Leaderboard = () => {
  const navigate = useNavigate()
  const { leaderboard } = useQuiz()

  const formatDate = (dateString) => {
    const options = {
      year: "numeric",
      month: "short",
      day: "numeric",
    }
    return new Date(dateString).toLocaleDateString(undefined, options)
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
      className="leaderboard-container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <motion.div className="leaderboard-header" variants={itemVariants}>
        <h1>Leaderboard</h1>
        <button className="back-button" onClick={() => navigate("/")}>
          Back to Home
        </button>
      </motion.div>

      {leaderboard.length === 0 ? (
        <motion.div className="empty-leaderboard" variants={itemVariants}>
          <div className="trophy-icon">🏆</div>
          <h2>No Scores Yet</h2>
          <p>Complete a quiz to get on the leaderboard!</p>
          <button className="start-quiz-button" onClick={() => navigate("/")}>
            Start a Quiz
          </button>
        </motion.div>
      ) : (
        <motion.div className="leaderboard-content" variants={itemVariants}>
          <div className="leaderboard-table-container">
            <table className="leaderboard-table">
              <thead>
                <tr>
                  <th>Rank</th>
                  <th>Name</th>
                  <th>Score</th>
                  <th>Category</th>
                  <th>Difficulty</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                {leaderboard.map((entry, index) => (
                  <motion.tr
                    key={index}
                    className={`leaderboard-row ${index < 3 ? `top-${index + 1}` : ""}`}
                    variants={itemVariants}
                  >
                    <td className="rank-cell">
                      {index === 0 && <span className="rank-icon gold">🥇</span>}
                      {index === 1 && <span className="rank-icon silver">🥈</span>}
                      {index === 2 && <span className="rank-icon bronze">🥉</span>}
                      {index > 2 && <span className="rank-number">{index + 1}</span>}
                    </td>
                    <td className="name-cell">{entry.userName || "Anonymous"}</td>
                    <td className="score-cell">
                      <div className="score-badge">{entry.score}%</div>
                    </td>
                    <td className="category-cell">
                      {entry.category ? entry.category.charAt(0).toUpperCase() + entry.category.slice(1) : "General"}
                    </td>
                    <td className="difficulty-cell">
                      <span className={`difficulty-badge ${entry.difficulty || "medium"}`}>
                        {entry.difficulty
                          ? entry.difficulty.charAt(0).toUpperCase() + entry.difficulty.slice(1)
                          : "Medium"}
                      </span>
                    </td>
                    <td className="date-cell">{formatDate(entry.date)}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="leaderboard-info">
            <p>Complete quizzes with high scores to climb the leaderboard!</p>
            <button className="start-quiz-button" onClick={() => navigate("/")}>
              Start a New Quiz
            </button>
          </div>
        </motion.div>
      )}
    </motion.div>
  )
}

export default Leaderboard
