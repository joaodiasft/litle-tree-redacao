"use client"

import { CATEGORIES } from "@/data/config"
import { CategoryCard } from "./CategoryCard"
import { motion } from "framer-motion"

export function CategoryGrid() {
  return (
    <div className="px-6 py-4">
      <div className="grid grid-cols-2 gap-4">
        {CATEGORIES.map((category, index) => (
          <motion.div
            key={category.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <CategoryCard category={category} />
          </motion.div>
        ))}
      </div>
    </div>
  )
}
