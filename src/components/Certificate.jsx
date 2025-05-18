"use client"

import { useEffect, useRef, useState } from "react"
import { useNavigate } from "react-router-dom"
import { useQuiz } from "../context/QuizContext"
import { motion } from "framer-motion"
import html2canvas from "html2canvas"
import "../styles/Certificate.css"

const Certificate = () => {
  const navigate = useNavigate()
  const { userName, quizCompleted, calculateScore } = useQuiz()
  const certificateRef = useRef(null)
  const [isGenerating, setIsGenerating] = useState(false)
  const [showDownloadMessage, setShowDownloadMessage] = useState(false)

  // Redirect if quiz not completed
  useEffect(() => {
    if (!quizCompleted) {
      navigate("/")
    }
  }, [quizCompleted, navigate])

  const score = calculateScore()

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" }
    return new Date(dateString).toLocaleDateString(undefined, options)
  }

  const downloadCertificate = async () => {
    if (!certificateRef.current) return

    setIsGenerating(true)

    try {
      const canvas = await html2canvas(certificateRef.current, {
        scale: 2,
        logging: false,
        useCORS: true,
        backgroundColor: "#ffffff",
      })

      const image = canvas.toDataURL("image/png")
      const link = document.createElement("a")
      link.href = image
      link.download = `${userName.replace(/\s+/g, "_")}_Quiz_Certificate.png`
      link.click()

      setShowDownloadMessage(true)
      setTimeout(() => setShowDownloadMessage(false), 3000)
    } catch (error) {
      console.error("Error generating certificate:", error)
    } finally {
      setIsGenerating(false)
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.5 },
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.3 },
    },
  }

  if (!quizCompleted || !score) {
    return <div className="loading">Loading certificate...</div>
  }

  return (
    <motion.div
      className="certificate-container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div className="certificate-header">
        <h1>Your Certificate of Achievement</h1>
        <p>Congratulations on completing the quiz!</p>
      </div>

      <div className="certificate-wrapper">
        <div ref={certificateRef} className="certificate">
          <div className="certificate-inner">
            <div className="certificate-content">
              <div className="certificate-logo">
                <img src="/quiz-logo.png" alt="Quiz Master Logo" />
              </div>

              <h2 className="certificate-title">Certificate of Achievement</h2>

              <p className="certificate-presented">This certifies that</p>

              <h3 className="certificate-name">{userName}</h3>

              <p className="certificate-description">
                has successfully completed the quiz on
                <span className="certificate-topic">
                  {score.category.charAt(0).toUpperCase() + score.category.slice(1)}
                </span>
                with a score of
                <span className="certificate-score">{score.percentage}%</span>
                at the
                <span className="certificate-difficulty">
                  {score.difficulty.charAt(0).toUpperCase() + score.difficulty.slice(1)}
                </span>
                level
              </p>

              <div className="certificate-date">{formatDate(new Date())}</div>

              <div className="certificate-signatures">
                <div className="signature">
                  <img src="/signature.png" alt="Signature" className="signature-image" />
                  <div className="signature-name">Quiz Master</div>
                  <div className="signature-title">Director of Education</div>
                </div>

                <div className="certificate-seal">
                  <img src="/quiz-seal.png" alt="Official Seal" className="seal-image" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="certificate-actions">
        <button className="download-button" onClick={downloadCertificate} disabled={isGenerating}>
          {isGenerating ? "Generating..." : "Download Certificate"}
        </button>

        <button className="back-button" onClick={() => navigate("/results")}>
          Back to Results
        </button>
      </div>

      {showDownloadMessage && <div className="download-message">Certificate downloaded successfully!</div>}
    </motion.div>
  )
}

export default Certificate
