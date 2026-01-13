"use client"

import { Card } from "@/components/ui/card"
import { formatCurrency } from "@/lib/utils"
import { motion } from "framer-motion"

interface Pricing {
  id: string
  nome: string
  valor: number
  modulo: string
  parcelamento: string
}

interface PricingCardProps {
  pricing: Pricing
  index: number
}

export function PricingCard({ pricing, index }: PricingCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      <Card className="p-6 border-2 border-border hover:border-primary transition-colors">
        <h3 className="text-xl font-bold text-dark mb-2">{pricing.nome}</h3>
        <div className="mb-3">
          <span className="text-3xl font-bold text-primary-strong">
            {formatCurrency(pricing.valor)}
          </span>
          <span className="text-sm text-gray-text ml-2">
            / {pricing.modulo}
          </span>
        </div>
        <p className="text-sm text-gray-text">{pricing.parcelamento}</p>
      </Card>
    </motion.div>
  )
}
