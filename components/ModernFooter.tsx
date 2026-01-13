"use client"

import { BRANDING, CONTACT } from "@/data/config"
import { Instagram, MapPin, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { openWhatsApp } from "@/lib/whatsapp"
import { track, TRACKING_EVENTS } from "@/lib/tracking"
import Link from "next/link"
import { motion } from "framer-motion"

export function ModernFooter() {
  return (
    <footer className="mt-12 border-t-2 border-border bg-gray-light">
      <div className="px-6 py-8">
        {/* Logo e descrição */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <h3 className="text-2xl font-bold text-dark mb-2">{BRANDING.name}</h3>
          <p className="text-sm text-gray-text mb-4">{BRANDING.tagline}</p>
          <div className="flex items-center justify-center gap-2">
            <span className="text-xs text-gray-text">{BRANDING.location}</span>
          </div>
        </motion.div>

        {/* Links rápidos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid grid-cols-2 gap-4 mb-8"
        >
          <Link href="/horarios">
            <Button variant="outline" className="w-full" size="sm">
              Horários
            </Button>
          </Link>
          <Link href="/valores">
            <Button variant="outline" className="w-full" size="sm">
              Valores
            </Button>
          </Link>
          <Link href="/redacao">
            <Button variant="outline" className="w-full" size="sm">
              Redação
            </Button>
          </Link>
          <Link href="/resultados">
            <Button variant="outline" className="w-full" size="sm">
              Resultados
            </Button>
          </Link>
        </motion.div>

        {/* Contato */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-3 mb-8"
        >
          <Button
            className="w-full"
            size="lg"
            onClick={() => openWhatsApp("matricula")}
          >
            <MessageCircle className="mr-2 h-5 w-5" />
            WhatsApp Matrícula
          </Button>
          <Button
            variant="outline"
            className="w-full"
            onClick={() => {
              track(TRACKING_EVENTS.INSTAGRAM_CLICK)
              window.open(BRANDING.instagramUrl, "_blank")
            }}
          >
            <Instagram className="mr-2 h-4 w-4" />
            Instagram
          </Button>
        </motion.div>

        {/* Endereço */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center space-y-2 mb-6"
        >
          <div className="flex items-center justify-center gap-2 text-gray-text">
            <MapPin size={16} />
            <span className="text-xs">
              {CONTACT.endereco.bairro}, {CONTACT.endereco.cidade} - {CONTACT.endereco.uf}
            </span>
          </div>
          <p className="text-xs text-gray-text">
            {CONTACT.endereco.rua}
          </p>
          <p className="text-xs text-gray-text">
            CEP: {CONTACT.endereco.cep}
          </p>
        </motion.div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center pt-6 border-t border-border"
        >
          <p className="text-xs text-gray-text">
            © {new Date().getFullYear()} {BRANDING.name}. Todos os direitos reservados.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
