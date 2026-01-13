"use client"

import { PageShell } from "@/components/PageShell"
import { SectionTitle } from "@/components/SectionTitle"
import { TestimonialCarousel } from "@/components/TestimonialCarousel"
import { FloatingWhatsAppFAB } from "@/components/FloatingWhatsAppFAB"
import { BackToTop } from "@/components/BackToTop"
import { ModernFooter } from "@/components/ModernFooter"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"
import { TESTIMONIALS } from "@/data/config"

export default function ResultadosPage() {
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
            <h1 className="text-xl font-bold text-dark">Resultados</h1>
            <p className="text-xs text-gray-text">Depoimentos de nossos alunos</p>
          </div>
        </div>
      </div>

      {/* Conteúdo */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="py-8"
      >
        <TestimonialCarousel testimonials={TESTIMONIALS} />
      </motion.section>

      <ModernFooter />
      <FloatingWhatsAppFAB />
      <BackToTop />
    </PageShell>
  )
}
