"use client"

import { HEADLINES } from "@/data/config"
import { motion } from "framer-motion"
import { Star } from "lucide-react"

interface HeadlineProps {
  className?: string
}

export function Headline({ className = "" }: HeadlineProps) {
  const words = HEADLINES.main.split('\n')
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.8, 
        delay: 0.3,
        type: "spring",
        stiffness: 100
      }}
      className={`px-6 py-10 text-center relative ${className}`}
    >
      {/* Decoração de estrelas */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6 }}
        className="absolute top-0 left-8"
      >
        <Star className="text-primary w-4 h-4 fill-primary animate-pulse" />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.8 }}
        className="absolute top-4 right-12"
      >
        <Star className="text-primary-strong w-3 h-3 fill-primary-strong animate-pulse" />
      </motion.div>

      <div className="relative z-10">
        {words.map((word, index) => (
          <motion.h2
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              delay: 0.5 + index * 0.1,
              type: "spring",
              stiffness: 150
            }}
            className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-primary-strong via-primary to-primary-strong bg-clip-text text-transparent mb-2 leading-tight"
          >
            {word}
          </motion.h2>
        ))}
        
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="text-base md:text-lg text-gray-text mt-4 font-medium"
        >
          {HEADLINES.subtitle}
        </motion.p>
      </div>
    </motion.div>
  )
}
