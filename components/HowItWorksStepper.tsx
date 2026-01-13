"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"

interface Step {
  step: number
  title: string
  description: string
}

interface HowItWorksStepperProps {
  steps: readonly Step[]
}

export function HowItWorksStepper({ steps }: HowItWorksStepperProps) {
  return (
    <div className="px-6 space-y-4">
      {steps.map((step, index) => (
        <motion.div
          key={step.step}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: index * 0.1 }}
        >
          <Card className="p-6 border-2 border-border hover:border-primary transition-colors">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold">
                {step.step}
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-dark mb-1">
                  {step.title}
                </h3>
                <p className="text-sm text-gray-text">{step.description}</p>
              </div>
            </div>
          </Card>
        </motion.div>
      ))}
    </div>
  )
}
