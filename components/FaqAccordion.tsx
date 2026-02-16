"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { motion } from "framer-motion"
import { HelpCircle } from "lucide-react"
import { Card } from "@/components/ui/card"

interface FAQItem {
  id: string
  pergunta: string
  resposta: string
}

interface FaqAccordionProps {
  items: readonly FAQItem[]
}

export function FaqAccordion({ items }: FaqAccordionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="px-6"
    >
      <div className="mb-6">
        <Card className="p-4 bg-gradient-to-r from-primary/10 to-primary-strong/10 border-2 border-primary/20">
          <div className="flex items-center gap-3">
            <HelpCircle className="text-primary w-6 h-6 flex-shrink-0" />
            <div>
              <p className="font-bold text-dark text-sm">
                Tem mais dúvidas?
              </p>
              <p className="text-xs text-gray-text">
                Entre em contato conosco via WhatsApp!
              </p>
            </div>
          </div>
        </Card>
      </div>

      <Accordion type="single" collapsible className="w-full space-y-2">
        {items.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
          >
            <AccordionItem 
              value={item.id}
              className="border-2 border-border rounded-xl mb-2 px-4 hover:border-primary transition-colors"
            >
              <AccordionTrigger className="text-left font-semibold text-dark hover:text-primary-strong transition-colors py-4">
                <span className="flex items-center gap-3">
                  <span className="text-primary font-bold text-sm">Q{index + 1}</span>
                  {item.pergunta}
                </span>
              </AccordionTrigger>
              <AccordionContent className="text-gray-text leading-relaxed pb-4 pt-2">
                <div className="pl-6 border-l-2 border-primary/20">
                  {item.resposta}
                </div>
              </AccordionContent>
            </AccordionItem>
          </motion.div>
        ))}
      </Accordion>
    </motion.div>
  )
}
