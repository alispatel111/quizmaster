"use client"

import { AnimatePresence, motion } from "framer-motion"
import { useLocation } from "react-router-dom"
import "../styles/AnimatedLayout.css"

// Animation variants for page transitions
const pageVariants = {
  initial: {
    opacity: 0,
    x: "100vw",
    scale: 0.8,
  },
  in: {
    opacity: 1,
    x: 0,
    scale: 1,
  },
  out: {
    opacity: 0,
    x: "-100vw",
    scale: 1.2,
  },
}

const pageTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 0.5,
}

const AnimatedLayout = ({ children }) => {
  const location = useLocation()

  return (
    <div className="animated-layout">
      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          className="page-transition"
          initial="initial"
          animate="in"
          exit="out"
          variants={pageVariants}
          transition={pageTransition}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

export default AnimatedLayout
