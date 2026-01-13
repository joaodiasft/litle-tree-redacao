"use client"

import { ReactNode } from "react"
import { motion } from "framer-motion"
import { Hand, Sparkles } from "lucide-react"

interface BorderCalloutProps {
  children: ReactNode
  className?: string
}

export function BorderCallout({ children, className = "" }: BorderCalloutProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ 
        duration: 0.6, 
        delay: 1.2,
        type: "spring",
        stiffness: 150
      }}
      className={`mx-6 my-8 rounded-3xl border-2 border-primary bg-gradient-to-br from-primary/5 via-background to-primary/5 p-5 shadow-lg backdrop-blur-sm ${className}`}
    >
      <div className="flex items-start gap-4">
        <motion.div
          animate={{ 
            rotate: [0, 10, -10, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            repeatDelay: 1
          }}
        >
          <Hand className="text-primary flex-shrink-0 mt-1" size={24} />
        </motion.div>
        <div className="flex-1">
          <motion.p
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.4 }}
            className="text-sm font-medium text-gray-text leading-relaxed"
          >
            {children}
          </motion.p>
        </div>
        <motion.div
          animate={{ 
            opacity: [0.3, 1, 0.3],
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity
          }}
        >
          <Sparkles className="text-primary w-4 h-4" />
        </motion.div>
      </div>
    </motion.div>
  )
}
