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
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: enabled ? 1.02 : 1 }}
      transition={{ duration: 0.4 }}
      className={cn("relative", className)}
    >
      <Card
        className={cn(
          "relative overflow-hidden cursor-pointer border-0 shadow-lg",
          bgColor,
          !enabled && "opacity-60 cursor-not-allowed"
        )}
        onClick={handleClick}
      >
        {/* Bolhas decorativas no fundo */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-4 right-4 w-24 h-24 rounded-full bg-white" />
          <div className="absolute bottom-4 left-4 w-16 h-16 rounded-full bg-white" />
          <div className="absolute top-1/2 right-1/4 w-12 h-12 rounded-full bg-white" />
        </div>

        <div className="relative p-6 flex items-center justify-between gap-4">
          <div className="flex-1">
            {badge && <div className="mb-2">{badge}</div>}
            <h3 className={cn("text-xl font-bold mb-2", textColor)}>
              {title}
            </h3>
            <p className={cn("text-sm opacity-90", textColor)}>
              {description}
            </p>
          </div>
          {Icon && (
            <div className={cn("flex-shrink-0", textColor)}>
              <Icon size={32} />
            </div>
          )}
        </div>
      </Card>
    </motion.div>
  )
}
