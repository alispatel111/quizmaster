"use client"

import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useQuiz } from "../context/QuizContext"
import { motion } from "framer-motion"
import "../styles/ReviewAnswers.css"

const ReviewAnswers = () => {
  const navigate = useNavigate()
  const { questions, selectedAnswers, quizCompleted } = useQuiz()

  // Redirect if quiz not completed
  useEffect(() => {
    if (!quizCompleted) {
      navigate("/")
    }
  }, [quizCompleted, navigate])

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
      className="review-container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <motion.div className="review-header" variants={itemVariants}>
        <h1>Review Your Answers</h1>
        <button className="back-button" onClick={() => navigate("/results")}>
          Back to Results
        </button>
      </motion.div>

      <div className="review-questions">
        {questions.map((question, questionIndex) => {
          const selectedAnswer = selectedAnswers[questionIndex]
          const isCorrect = selectedAnswer === question.correctAnswer

          return (
            <motion.div
              key={questionIndex}
              className={`review-question ${isCorrect ? "correct" : "incorrect"}`}
              variants={itemVariants}
            >
              <div className="question-number">Question {questionIndex + 1}</div>
              <h3 className="question-text">{question.question}</h3>

              <div className="review-answers">
                {question.answers.map((answer, answerIndex) => (
                  <div
                    key={answerIndex}
                    className={`review-answer ${
                      selectedAnswer === answerIndex ? (isCorrect ? "selected-correct" : "selected-incorrect") : ""
                    } ${!isCorrect && answerIndex === question.correctAnswer ? "correct-answer" : ""}`}
                  >
                    <div className="answer-letter">{String.fromCharCode(65 + answerIndex)}</div>
                    <div className="answer-text">{answer}</div>
                    {selectedAnswer === answerIndex && (
                      <div className="answer-icon">
                        {isCorrect ? (
                          <svg viewBox="0 0 24 24" className="check-icon">
                            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                          </svg>
                        ) : (
                          <svg viewBox="0 0 24 24" className="x-icon">
                            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" />
                          </svg>
                        )}
                      </div>
                    )}
                    {!isCorrect && answerIndex === question.correctAnswer && (
                      <div className="answer-icon">
                        <svg viewBox="0 0 24 24" className="check-icon">
                          <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                        </svg>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {question.explanation && (
                <div className="question-explanation">
                  <h4>Explanation:</h4>
                  <p>{question.explanation}</p>
                </div>
              )}
            </motion.div>
          )
        })}
      </div>

      <motion.div className="review-actions" variants={itemVariants}>
        <button className="results-button" onClick={() => navigate("/results")}>
          Back to Results
        </button>
        <button className="certificate-button" onClick={() => navigate("/certificate")}>
          View Certificate
        </button>
      </motion.div>
    </motion.div>
  )
}

export default ReviewAnswers
