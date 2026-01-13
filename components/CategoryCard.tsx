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
    smoothScrollTo(category.anchor, 80)
  }

  return (
    <motion.div
      whileHover={{ scale: category.enabled ? 1.05 : 1 }}
      whileTap={{ scale: category.enabled ? 0.95 : 1 }}
    >
      <Card
        className={`relative overflow-hidden cursor-pointer border-2 transition-all ${
          category.enabled
            ? "border-primary hover:border-primary-strong hover:shadow-lg"
            : "border-border opacity-60 cursor-not-allowed"
        }`}
        onClick={handleClick}
      >
        <div className="aspect-square p-6 flex flex-col items-center justify-center text-center">
          <Icon
            size={40}
            className={`mb-3 ${
              category.enabled ? "text-primary" : "text-gray-text"
            }`}
          />
          <span
            className={`font-semibold text-sm ${
              category.enabled ? "text-dark" : "text-gray-text"
            }`}
          >
            {category.label}
          </span>
        </div>
      </Card>
    </motion.div>
  )
}
