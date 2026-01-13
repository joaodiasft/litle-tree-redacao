"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { buildLeadMessage, openWhatsApp } from "@/lib/whatsapp"
import { track, TRACKING_EVENTS } from "@/lib/tracking"
import { motion } from "framer-motion"

export function LeadForm() {
  const [nome, setNome] = useState("")
  const [whatsapp, setWhatsapp] = useState("")
  const [objetivo, setObjetivo] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!nome || !whatsapp || !objetivo) {
      return
    }

    const message = buildLeadMessage(nome, whatsapp, objetivo)
    track(TRACKING_EVENTS.LEAD_SUBMIT, { nome, objetivo })
    openWhatsApp("custom", message)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="px-6"
    >
      <Card className="p-6 border-2 border-primary">
        <h3 className="text-xl font-bold text-dark mb-4">
          Quer saber mais?
        </h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="nome">Nome</Label>
            <Input
              id="nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              placeholder="Seu nome"
              required
            />
          </div>
          <div>
            <Label htmlFor="whatsapp">WhatsApp</Label>
            <Input
              id="whatsapp"
              type="tel"
              value={whatsapp}
              onChange={(e) => setWhatsapp(e.target.value)}
              placeholder="(62) 99999-9999"
              required
            />
          </div>
          <div>
            <Label htmlFor="objetivo">Objetivo</Label>
            <Input
              id="objetivo"
              value={objetivo}
              onChange={(e) => setObjetivo(e.target.value)}
              placeholder="ENEM / Concurso / Vestibular"
              required
            />
          </div>
          <Button type="submit" className="w-full" size="lg">
            Enviar informações
          </Button>
        </form>
      </Card>
    </motion.div>
  )
}
