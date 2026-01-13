"use client"

import { ReactNode } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { smoothScrollTo } from "@/lib/utils"

interface CtaCardProps {
  title: string
  description: string
  icon?: LucideIcon
  onClick?: () => void
  href?: string
  sectionAnchor?: string
  variant?: "primary" | "dark"
  highlight?: boolean
  enabled?: boolean
  badge?: ReactNode
  className?: string
}

export function CtaCard({
  title,
  description,
  icon: Icon,
  onClick,
  href,
  sectionAnchor,
  variant = "primary",
  highlight = false,
  enabled = true,
  badge,
  className,
}: CtaCardProps) {
  const handleClick = () => {
    if (!enabled) return

    if (onClick) {
      onClick()
    } else if (sectionAnchor) {
      smoothScrollTo(sectionAnchor, 80)
    } else if (href) {
      if (href.startsWith("#")) {
        smoothScrollTo(href, 80)
      } else {
        window.location.href = href
      }
    }
  }

  const bgColor = variant === "primary" ? "bg-primary" : "bg-dark"
  const textColor = variant === "primary" ? "text-white" : "text-white"

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      whileHover={{ 
        scale: enabled ? 1.03 : 1,
        y: enabled ? -5 : 0,
      }}
      whileTap={{ scale: enabled ? 0.98 : 1 }}
      transition={{ 
        duration: 0.5,
        type: "spring",
        stiffness: 200
      }}
      className={cn("relative group", className)}
    >
      <Card
        className={cn(
          "relative overflow-hidden cursor-pointer border-0 shadow-2xl transition-all duration-300",
          "hover:shadow-3xl",
          bgColor,
          !enabled && "opacity-60 cursor-not-allowed",
          "shine"
        )}
        onClick={handleClick}
      >
        {/* Gradiente animado no fundo */}
        <motion.div
          className="absolute inset-0 opacity-20"
          animate={{
            background: variant === "primary" 
              ? "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.3) 100%)"
              : "linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.15) 100%)"
          }}
          transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
        />

        {/* Bolhas decorativas animadas */}
        <motion.div 
          className="absolute inset-0 opacity-10"
          initial={{ opacity: 0.1 }}
          animate={{ opacity: [0.1, 0.15, 0.1] }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          <motion.div
            className="absolute top-4 right-4 w-24 h-24 rounded-full bg-white"
            animate={{
              scale: [1, 1.2, 1],
              x: [0, 10, 0],
              y: [0, -10, 0],
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-4 left-4 w-16 h-16 rounded-full bg-white"
            animate={{
              scale: [1, 1.3, 1],
              x: [0, -10, 0],
              y: [0, 10, 0],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute top-1/2 right-1/4 w-12 h-12 rounded-full bg-white"
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 180, 360],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          />
        </motion.div>

        <div className="relative p-6 flex items-center justify-between gap-4 z-10">
          <div className="flex-1">
            {badge && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring" }}
                className="mb-2"
              >
                {badge}
              </motion.div>
            )}
            <motion.h3
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className={cn("text-xl font-bold mb-2", textColor)}
            >
              {title}
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className={cn("text-sm opacity-90", textColor)}
            >
              {description}
            </motion.p>
          </div>
          {Icon && (
            <motion.div
              initial={{ opacity: 0, scale: 0, rotate: -180 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              whileHover={{ 
                scale: 1.2,
                rotate: 10,
              }}
              transition={{ 
                delay: 0.3,
                type: "spring",
                stiffness: 200
              }}
              className={cn("flex-shrink-0", textColor)}
            >
              <Icon size={36} />
            </motion.div>
          )}
        </div>
      </Card>
    </motion.div>
  )
}
