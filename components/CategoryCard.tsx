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
      initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
      whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
      viewport={{ once: true }}
      whileHover={{ 
        scale: category.enabled ? 1.08 : 1,
        y: category.enabled ? -8 : 0,
        rotate: category.enabled ? 2 : 0,
      }}
      whileTap={{ scale: category.enabled ? 0.95 : 1 }}
      transition={{ 
        type: "spring",
        stiffness: 200,
        damping: 15
      }}
    >
      <Card
        className={`relative overflow-hidden cursor-pointer border-2 transition-all duration-300 group ${
          category.enabled
            ? "border-primary hover:border-primary-strong hover:shadow-2xl bg-gradient-to-br from-background to-gray-light"
            : "border-border opacity-60 cursor-not-allowed"
        }`}
        onClick={handleClick}
      >
        {/* Efeito de brilho no hover */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/10 to-primary-strong/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          initial={false}
        />

        {/* Decoração de fundo */}
        <div className="absolute inset-0 opacity-5">
          <motion.div
            className="absolute top-2 right-2 w-16 h-16 rounded-full bg-primary"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{ duration: 3, repeat: Infinity }}
          />
        </div>

        <div className="aspect-square p-6 flex flex-col items-center justify-center text-center relative z-10">
          <motion.div
            whileHover={{ 
              scale: 1.2,
              rotate: [0, -10, 10, -10, 0],
            }}
            transition={{ duration: 0.5 }}
          >
            <Icon
              size={48}
              className={`mb-4 transition-colors ${
                category.enabled 
                  ? "text-primary group-hover:text-primary-strong" 
                  : "text-gray-text"
              }`}
            />
          </motion.div>
          <motion.span
            className={`font-bold text-sm transition-colors ${
              category.enabled 
                ? "text-dark group-hover:text-primary-strong" 
                : "text-gray-text"
            }`}
            whileHover={{ scale: 1.1 }}
          >
            {category.label}
          </motion.span>
        </div>
      </Card>
    </motion.div>
  )
}
