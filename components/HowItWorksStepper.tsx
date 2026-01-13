"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { CheckCircle2, ArrowRight } from "lucide-react"

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
          initial={{ opacity: 0, x: -30, scale: 0.9 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.02, x: 5 }}
          transition={{ 
            duration: 0.5, 
            delay: index * 0.15,
            type: "spring",
            stiffness: 150
          }}
        >
          <Card className="p-5 border-2 border-border hover:border-primary-strong transition-all duration-300 hover:shadow-xl bg-gradient-to-r from-background to-gray-light group">
            <div className="flex items-start gap-4">
              <motion.div
                className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-primary to-primary-strong text-white flex items-center justify-center font-bold text-lg shadow-lg"
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                {step.step}
              </motion.div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-lg font-bold text-dark group-hover:text-primary-strong transition-colors">
                    {step.title}
                  </h3>
                  {index === steps.length - 1 && (
                    <CheckCircle2 className="text-primary w-5 h-5" />
                  )}
                </div>
                <p className="text-sm text-gray-text leading-relaxed">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <motion.div
                  className="flex-shrink-0 text-primary opacity-50"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight size={20} />
                </motion.div>
              )}
            </div>
          </Card>
        </motion.div>
      ))}
    </div>
  )
}
