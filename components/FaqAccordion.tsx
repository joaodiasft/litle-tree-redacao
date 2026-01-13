"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { motion } from "framer-motion"

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
      <Accordion type="single" collapsible className="w-full">
        {items.map((item) => (
          <AccordionItem key={item.id} value={item.id}>
            <AccordionTrigger className="text-left font-semibold text-dark">
              {item.pergunta}
            </AccordionTrigger>
            <AccordionContent className="text-gray-text">
              {item.resposta}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </motion.div>
  )
}
