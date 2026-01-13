"use client"

import { ReactNode } from "react"
import { motion } from "framer-motion"
import { Hand } from "lucide-react"

interface BorderCalloutProps {
  children: ReactNode
  className?: string
}

export function BorderCallout({ children, className = "" }: BorderCalloutProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className={`mx-6 my-6 rounded-2xl border-2 border-primary p-4 bg-background ${className}`}
    >
      <div className="flex items-start gap-3">
        <Hand className="text-primary flex-shrink-0 mt-1" size={20} />
        <p className="text-sm text-gray-text">{children}</p>
      </div>
    </motion.div>
  )
}
