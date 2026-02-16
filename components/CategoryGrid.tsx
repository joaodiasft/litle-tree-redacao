"use client"

import { CATEGORIES } from "@/data/config"
import { CategoryCard } from "./CategoryCard"
import { motion } from "framer-motion"

export function CategoryGrid() {
  return (
    <div className="px-6 pb-8">
      <div className="grid grid-cols-2 gap-4">
        {CATEGORIES.map((category, index) => (
          <CategoryCard key={category.id} category={category} />
        ))}
      </div>
    </div>
  )
}
