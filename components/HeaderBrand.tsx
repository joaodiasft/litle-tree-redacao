"use client"

import { BRANDING } from "@/data/config"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"

export function HeaderBrand() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="px-6 pt-8 pb-4 text-center"
    >
      <h1 className="text-3xl font-bold text-dark mb-2">{BRANDING.name}</h1>
      <Badge variant="secondary" className="mb-2">
        {BRANDING.location}
      </Badge>
      <p className="text-sm text-gray-text mt-2">{BRANDING.tagline}</p>
    </motion.div>
  )
}
