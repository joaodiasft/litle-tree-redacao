"use client"

import { ReactNode } from "react"
import { motion } from "framer-motion"

interface SectionTitleProps {
  children: ReactNode
  id?: string
  className?: string
}

export function SectionTitle({ children, id, className = "" }: SectionTitleProps) {
  return (
    <motion.h2
      id={id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`text-2xl font-bold text-dark mb-6 px-6 ${className}`}
    >
      {children}
    </motion.h2>
  )
}
