"use client"

import { motion } from "framer-motion"
import { MessageCircle, Sparkles } from "lucide-react"
import { openWhatsApp } from "@/lib/whatsapp"

export function FloatingWhatsAppFAB() {
  return (
    <motion.div
      initial={{ scale: 0, rotate: -180 }}
      animate={{ scale: 1, rotate: 0 }}
      transition={{ 
        type: "spring",
        stiffness: 200,
        delay: 1
      }}
      className="fixed bottom-6 right-6 z-50"
    >
      <motion.button
        whileHover={{ scale: 1.15, rotate: 5 }}
        whileTap={{ scale: 0.9 }}
        className="relative w-16 h-16 rounded-full bg-gradient-to-br from-primary-strong to-primary shadow-2xl flex items-center justify-center text-white hover:shadow-primary-strong/50 transition-all duration-300 group"
        onClick={() => openWhatsApp("matricula")}
        aria-label="Abrir WhatsApp"
      >
        <MessageCircle size={28} className="relative z-10" />
        
        {/* Efeito de pulso */}
        <motion.div
          className="absolute inset-0 rounded-full bg-primary-strong"
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.6, 0, 0.6],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        {/* Decoração de brilho */}
        <motion.div
          className="absolute -top-1 -right-1"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <Sparkles className="text-yellow-300 w-4 h-4" />
        </motion.div>
        
        {/* Badge de notificação */}
        <motion.div
          className="absolute -top-1 -left-1 w-5 h-5 rounded-full bg-red-500 border-2 border-white flex items-center justify-center"
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
          }}
        >
          <span className="text-white text-xs font-bold">!</span>
        </motion.div>
      </motion.button>
      
      {/* Tooltip */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 2 }}
        className="absolute right-20 top-1/2 -translate-y-1/2 bg-dark text-white px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap shadow-xl"
      >
        Fale conosco!
        <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1 w-2 h-2 bg-dark rotate-45"></div>
      </motion.div>
    </motion.div>
  )
}
