"use client"

import { BRANDING } from "@/data/config"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { Sparkles } from "lucide-react"

export function HeaderBrand() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.6,
        type: "spring",
        stiffness: 100
      }}
      className="px-6 pt-12 pb-6 text-center relative"
    >
      {/* Decoração superior */}
      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
        className="absolute top-4 left-1/2 -translate-x-1/2"
      >
        <Sparkles className="text-primary w-6 h-6" />
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, type: "spring", stiffness: 150 }}
        className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-primary-strong via-primary to-primary-strong bg-clip-text text-transparent mb-3"
      >
        {BRANDING.name}
      </motion.h1>
      
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <Badge 
          variant="secondary" 
          className="mb-3 text-xs px-4 py-1.5 font-semibold shadow-md"
        >
          {BRANDING.location}
        </Badge>
      </motion.div>
      
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="text-sm text-gray-text mt-3 font-medium"
      >
        {BRANDING.tagline}
      </motion.p>
    </motion.div>
  )
}
