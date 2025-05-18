"use client"

import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useQuiz } from "../context/QuizContext"
import { motion } from "framer-motion"
import "../styles/Home.css"

const Home = () => {
  const navigate = useNavigate()
  const {
    userName,
    setUserName,
    startQuiz,
    categories,
    difficulties,
    selectedCategory,
    setSelectedCategory,
    selectedDifficulty,
    setSelectedDifficulty,
    timerType,
    setTimerMode,
  } = useQuiz()

  const [name, setName] = useState(userName || "")
  const [nameError, setNameError] = useState("")
  const [selectedTimerType, setSelectedTimerType] = useState(timerType)

  useEffect(() => {
    // Load saved user name if available
    const savedName = localStorage.getItem("quizUserName")
    if (savedName) {
      setName(savedName)
      setUserName(savedName)
    }
  }, [])

  const handleStartQuiz = () => {
    if (!name.trim()) {
      setNameError("Please enter your name to continue")
      return
    }

    setUserName(name)
    setTimerMode(selectedTimerType)
    startQuiz()
    navigate("/quiz")
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
    <motion.div className="home-container" variants={containerVariants} initial="hidden" animate="visible" exit="exit">
      <motion.div className="home-content" variants={itemVariants}>
        <div className="home-header">
          <h1 className="home-title">Welcome to Quiz Master</h1>
          <p className="home-subtitle">Test your knowledge with our interactive quizzes!</p>
        </div>

        <div className="home-form">
          <div className="form-group">
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => {
                setName(e.target.value)
                setNameError("")
              }}
              placeholder="Enter your name"
              className={nameError ? "error" : ""}
            />
            {nameError && <p className="error-message">{nameError}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="category">Select Category</label>
            <select id="category" value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="difficulty">Select Difficulty</label>
            <select id="difficulty" value={selectedDifficulty} onChange={(e) => setSelectedDifficulty(e.target.value)}>
              {difficulties.map((difficulty) => (
                <option key={difficulty} value={difficulty}>
                  {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="timerType">Timer Type</label>
            <select id="timerType" value={selectedTimerType} onChange={(e) => setSelectedTimerType(e.target.value)}>
              <option value="perQuestion">Per Question (60 seconds)</option>
              <option value="wholeQuiz">Whole Quiz</option>
            </select>
          </div>

          <motion.button
            className="start-button"
            onClick={handleStartQuiz}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start Quiz
          </motion.button>
        </div>

        <div className="home-features">
          <h2>Features</h2>
          <ul className="features-list">
            <motion.li variants={itemVariants}>Multiple categories and difficulty levels</motion.li>
            <motion.li variants={itemVariants}>Timer for each question or the whole quiz</motion.li>
            <motion.li variants={itemVariants}>Track your progress and history</motion.li>
            <motion.li variants={itemVariants}>Review your answers after completion</motion.li>
            <motion.li variants={itemVariants}>Get a personalized certificate</motion.li>
            <motion.li variants={itemVariants}>Compete on the leaderboard</motion.li>
          </ul>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default Home
