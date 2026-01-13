"use client"

import { ReactNode } from "react"
import { motion } from "framer-motion"

interface PageShellProps {
  children: ReactNode
  className?: string
}

export function PageShell({ children, className = "" }: PageShellProps) {
  return (
    <div className="min-h-screen bg-gray-light">
      <div className={`mx-auto max-w-[520px] bg-background ${className}`}>
        {children}
      </div>
    </div>
  )
}
