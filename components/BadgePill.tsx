"use client"

import { Badge } from "@/components/ui/badge"

type BadgeType = "new" | "promo" | "soon" | "limited" | "urgent"

interface BadgePillProps {
  type: BadgeType
  className?: string
}

const badgeConfig: Record<BadgeType, { label: string; variant: any }> = {
  new: { label: "Novo", variant: "new" },
  promo: { label: "Promo", variant: "promo" },
  soon: { label: "Em breve", variant: "secondary" },
  limited: { label: "Vagas limitadas", variant: "urgent" },
  urgent: { label: "URGENTE", variant: "urgent" },
}

export function BadgePill({ type, className = "" }: BadgePillProps) {
  const config = badgeConfig[type]
  return (
    <Badge variant={config.variant} className={className}>
      {config.label}
    </Badge>
  )
}
