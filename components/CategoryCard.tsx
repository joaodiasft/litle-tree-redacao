"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { LucideIcon } from "lucide-react"
import * as Icons from "lucide-react"
import { smoothScrollTo } from "@/lib/utils"
import { track, TRACKING_EVENTS } from "@/lib/tracking"

interface Category {
  id: string
  label: string
  anchor: string
  icon: string
  enabled: boolean
}

interface CategoryCardProps {
  category: Category
}

export function CategoryCard({ category }: CategoryCardProps) {
  const Icon = (Icons[category.icon as keyof typeof Icons] as LucideIcon) || Icons.BookOpen

  const handleClick = () => {
    if (!category.enabled) return
    track(TRACKING_EVENTS.CATEGORY_CLICK, { category: category.id })
    
    // Navegar para páginas específicas
    if (category.id === "redacao") {
      window.location.href = "/redacao"
    } else if (category.id === "resultados") {
      window.location.href = "/resultados"
    } else {
      smoothScrollTo(category.anchor, 80)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      whileHover={{ scale: category.enabled ? 1.05 : 1 }}
      whileTap={{ scale: category.enabled ? 0.98 : 1 }}
      transition={{ 
        type: "spring",
        stiffness: 200,
        damping: 20
      }}
    >
      <Card
        className={`relative cursor-pointer border-2 transition-all duration-200 ${
          category.enabled
            ? "border-primary/30 hover:border-primary hover:shadow-lg bg-white"
            : "border-border opacity-50 cursor-not-allowed bg-gray-light"
        }`}
        onClick={handleClick}
      >
        <div className="aspect-square p-5 flex flex-col items-center justify-center gap-3">
          <Icon
            size={40}
            className={`transition-colors ${
              category.enabled 
                ? "text-primary" 
                : "text-gray-text"
            }`}
          />
          <span
            className={`font-semibold text-sm ${
              category.enabled 
                ? "text-dark" 
                : "text-gray-text"
            }`}
          >
            {category.label}
          </span>
        </div>
      </Card>
    </motion.div>
  )
}
