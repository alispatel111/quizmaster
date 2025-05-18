"use client"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./components/Home"
import Quiz from "./components/Quiz"
import Results from "./components/Results"
import Certificate from "./components/Certificate"
import History from "./components/History"
import ReviewAnswers from "./components/ReviewAnswers"
import Leaderboard from "./components/Leaderboard"
import Navbar from "./components/Navbar"
import { QuizProvider } from "./context/QuizContext"
import { ThemeProvider } from "./context/ThemeContext"
import { AnimatePresence } from "framer-motion"
import "./styles/App.css"

function App() {
  return (
    <ThemeProvider>
      <QuizProvider>
        <Router>
          <div className="app-container">
            <Navbar />
            <main className="main-content">
              <AnimatePresence mode="wait">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/quiz" element={<Quiz />} />
                  <Route path="/results" element={<Results />} />
                  <Route path="/certificate" element={<Certificate />} />
                  <Route path="/history" element={<History />} />
                  <Route path="/review" element={<ReviewAnswers />} />
                  <Route path="/leaderboard" element={<Leaderboard />} />
                </Routes>
              </AnimatePresence>
            </main>
            <footer className="app-footer">
              <p>© {new Date().getFullYear()} Quiz Master | All Rights Reserved</p>
            </footer>
          </div>
        </Router>
      </QuizProvider>
    </ThemeProvider>
  )
}

export default App
