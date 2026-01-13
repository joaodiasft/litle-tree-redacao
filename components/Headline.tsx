"use client"

import { HEADLINES } from "@/data/config"
import { motion } from "framer-motion"

interface HeadlineProps {
  className?: string
}

export function Headline({ className = "" }: HeadlineProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className={`px-6 py-8 text-center ${className}`}
    >
      <h2 className="text-2xl md:text-3xl font-bold text-primary-strong mb-3 whitespace-pre-line">
        {HEADLINES.main}
      </h2>
      <p className="text-base text-gray-text">{HEADLINES.subtitle}</p>
    </motion.div>
  )
}
