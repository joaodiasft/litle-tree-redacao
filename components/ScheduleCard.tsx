"use client"

import { Card } from "@/components/ui/card"
import { Clock } from "lucide-react"
import { motion } from "framer-motion"

interface Schedule {
  id: string
  dia: string
  horario: string
  duracao: string
  turma: string
}

interface ScheduleCardProps {
  schedule: Schedule
  index: number
}

export function ScheduleCard({ schedule, index }: ScheduleCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      <Card className="p-6 border-2 border-border hover:border-primary transition-colors">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-lg font-bold text-dark mb-1">
              {schedule.dia}
            </h3>
            <div className="flex items-center gap-2 text-gray-text mb-2">
              <Clock size={16} />
              <span className="text-sm">{schedule.horario}</span>
              <span className="text-sm">• {schedule.duracao}</span>
            </div>
            <p className="text-sm text-primary font-medium">{schedule.turma}</p>
          </div>
        </div>
      </Card>
    </motion.div>
  )
}
