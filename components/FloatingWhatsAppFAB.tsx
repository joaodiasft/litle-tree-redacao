"use client"

import { motion } from "framer-motion"
import { MessageCircle } from "lucide-react"
import { openWhatsApp } from "@/lib/whatsapp"

export function FloatingWhatsAppFAB() {
  return (
    <motion.button
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full bg-primary-strong shadow-lg flex items-center justify-center text-white hover:bg-primary-strong/90 transition-colors"
      onClick={() => openWhatsApp("matricula")}
      aria-label="Abrir WhatsApp"
    >
      <MessageCircle size={28} />
      <motion.div
        className="absolute inset-0 rounded-full bg-primary-strong"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.7, 0, 0.7],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </motion.button>
  )
}
