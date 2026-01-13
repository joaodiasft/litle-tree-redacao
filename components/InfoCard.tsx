"use client"

import { Card } from "@/components/ui/card"
import { Check } from "lucide-react"
import { motion } from "framer-motion"

interface InfoCardProps {
  title: string
  items: readonly string[]
  className?: string
}

export function InfoCard({ title, items, className = "" }: InfoCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={className}
    >
      <Card className="p-6 border-2 border-border">
        <h3 className="text-xl font-bold text-dark mb-4">{title}</h3>
        <ul className="space-y-3">
          {items.map((item, index) => (
            <li key={index} className="flex items-start gap-3">
              <Check className="text-primary flex-shrink-0 mt-0.5" size={20} />
              <span className="text-gray-text">{item}</span>
            </li>
          ))}
        </ul>
      </Card>
    </motion.div>
  )
}
