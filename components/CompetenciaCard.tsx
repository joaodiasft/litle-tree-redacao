"use client"

import { Card } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { LucideIcon } from "lucide-react"
import * as Icons from "lucide-react"
import { motion } from "framer-motion"

interface Competencia {
  id: string
  titulo: string
  descricao: string
  icon: string
}

interface CompetenciaCardProps {
  competencia: Competencia
  index: number
}

export function CompetenciaCard({ competencia, index }: CompetenciaCardProps) {
  const Icon = (Icons[competencia.icon as keyof typeof Icons] as LucideIcon) || Icons.PenTool

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      <Accordion type="single" collapsible>
        <AccordionItem value={competencia.id} className="border-0">
          <Card className="p-4 border-2 border-border hover:border-primary transition-colors">
            <AccordionTrigger className="hover:no-underline">
              <div className="flex items-center gap-4 w-full">
                <div className="flex-shrink-0">
                  <Icon className="text-primary" size={24} />
                </div>
                <span className="font-semibold text-dark text-left flex-1">
                  {competencia.titulo}
                </span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="pt-2">
              <p className="text-sm text-gray-text leading-relaxed">
                {competencia.descricao}
              </p>
            </AccordionContent>
          </Card>
        </AccordionItem>
      </Accordion>
    </motion.div>
  )
}
