"use client"

import { motion } from "framer-motion"
import "../styles/PageTransitionEffect.css"

// This component adds visual effects during page transitions
const PageTransitionEffect = () => {
  return (
    <div className="transition-effect-container">
      <motion.div
        className="transition-overlay top"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 0 }}
        exit={{ scaleX: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      />
      <motion.div
        className="transition-overlay bottom"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 0 }}
        exit={{ scaleX: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
      />
    </div>
  )
}

export default PageTransitionEffect
