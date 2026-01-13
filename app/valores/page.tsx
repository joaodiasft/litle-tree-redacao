"use client"

import { PageShell } from "@/components/PageShell"
import { SectionTitle } from "@/components/SectionTitle"
import { PricingCard } from "@/components/PricingCard"
import { FloatingWhatsAppFAB } from "@/components/FloatingWhatsAppFAB"
import { BackToTop } from "@/components/BackToTop"
import { ModernFooter } from "@/components/ModernFooter"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"
import { PRICING } from "@/data/config"

export default function ValoresPage() {
  return (
    <PageShell>
      {/* Header com botão voltar */}
      <div className="sticky top-0 z-30 bg-background border-b border-border">
        <div className="px-6 py-4 flex items-center gap-4">
          <Link href="/">
            <Button variant="ghost" size="icon" aria-label="Voltar">
              <ArrowLeft size={20} />
            </Button>
          </Link>
          <div>
            <h1 className="text-xl font-bold text-dark">Planos e Valores</h1>
            <p className="text-xs text-gray-text">Módulos por turma • Parcelamento em até 10x</p>
          </div>
        </div>
      </div>

      {/* Conteúdo */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="px-6 py-8"
      >
        <div className="space-y-4">
          {PRICING.map((pricing, index) => (
            <PricingCard key={pricing.id} pricing={pricing} index={index} />
          ))}
        </div>
        <div className="text-center mt-6">
          <p className="text-sm text-gray-text">
            Parcelamento em até 10x sem juros (consulte condições)
          </p>
        </div>
      </motion.section>

      <ModernFooter />
      <FloatingWhatsAppFAB />
      <BackToTop />
    </PageShell>
  )
}
