"use client"

import { CATEGORIES } from "@/data/config"
import { CategoryCard } from "./CategoryCard"
import { motion } from "framer-motion"

export function CategoryGrid() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.5 }}
      className="px-6 py-6"
    >
      <div className="grid grid-cols-2 gap-5">
        {CATEGORIES.map((category, index) => (
          <motion.div
            key={category.id}
            initial={{ opacity: 0, scale: 0.5, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ 
              duration: 0.6, 
              delay: 1.6 + index * 0.15,
              type: "spring",
              stiffness: 150
            }}
          >
            <CategoryCard category={category} />
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}
