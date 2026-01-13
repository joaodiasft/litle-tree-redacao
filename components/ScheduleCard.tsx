"use client"

import { Card } from "@/components/ui/card"
import { Clock, Calendar } from "lucide-react"
import { motion } from "framer-motion"

interface Schedule {
  id: string
  codigo: string
  dia: string
  horario: string
  duracao: string
  materia: string
  turma: string
}

interface ScheduleCardProps {
  schedule: Schedule
  index: number
}

export function ScheduleCard({ schedule, index }: ScheduleCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02, y: -5 }}
      transition={{ 
        duration: 0.5, 
        delay: index * 0.1,
        type: "spring",
        stiffness: 150
      }}
    >
      <Card className="p-6 border-2 border-border hover:border-primary-strong transition-all duration-300 hover:shadow-xl bg-gradient-to-br from-background to-gray-light group">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-3">
              <motion.div
                className="px-3 py-1.5 rounded-lg bg-primary text-white font-bold text-sm"
                whileHover={{ scale: 1.1 }}
              >
                {schedule.codigo}
              </motion.div>
              <div className="flex items-center gap-2 text-primary font-semibold">
                <Calendar size={16} />
                <span className="text-sm">{schedule.dia}</span>
              </div>
            </div>
            
            <div className="flex items-center gap-2 text-gray-text mb-3">
              <Clock size={18} className="text-primary" />
              <span className="text-base font-medium">{schedule.horario}</span>
              <span className="text-sm">• {schedule.duracao}</span>
            </div>
            
            <div className="px-3 py-2 rounded-lg bg-primary/10 border border-primary/20">
              <p className="text-sm font-bold text-primary">{schedule.materia}</p>
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  )
}
