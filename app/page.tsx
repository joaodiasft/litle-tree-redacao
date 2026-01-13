"use client"

import { PageShell } from "@/components/PageShell"
import { HeaderBrand } from "@/components/HeaderBrand"
import { Headline } from "@/components/Headline"
import { CtaCard } from "@/components/CtaCard"
import { BorderCallout } from "@/components/BorderCallout"
import { CategoryGrid } from "@/components/CategoryGrid"
import { SectionTitle } from "@/components/SectionTitle"
import { HowItWorksStepper } from "@/components/HowItWorksStepper"
import { FaqAccordion } from "@/components/FaqAccordion"
import { FloatingWhatsAppFAB } from "@/components/FloatingWhatsAppFAB"
import { BackToTop } from "@/components/BackToTop"
import { ModernFooter } from "@/components/ModernFooter"
import { Card } from "@/components/ui/card"
import {
  LINKS_CONFIG,
  HOW_IT_WORKS,
  FAQ,
  MATERIALS,
} from "@/data/config"
import { openWhatsApp } from "@/lib/whatsapp"
import { track, TRACKING_EVENTS } from "@/lib/tracking"
import { useEffect } from "react"
import * as Icons from "lucide-react"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"

export default function Home() {
  const router = useRouter()

  return (
    <PageShell>
      <HeaderBrand />
      <Headline />

      {/* CTAs principais */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="px-6 space-y-5 mb-8"
      >
        {LINKS_CONFIG.map((link, index) => {
          const Icon =
            (Icons[link.icon as keyof typeof Icons] as any) || Icons.MessageCircle

          return (
            <motion.div
              key={link.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ 
                delay: 0.7 + index * 0.15,
                type: "spring",
                stiffness: 100
              }}
            >
              <CtaCard
                title={link.label}
                description={link.description}
                icon={Icon}
                onClick={
                  link.type === "whatsapp"
                    ? () => openWhatsApp("matricula")
                    : link.type === "internal"
                    ? () => {
                        if (link.href) {
                          track(TRACKING_EVENTS.SITE_OPEN_CLICK)
                          router.push(link.href)
                        }
                      }
                    : undefined
                }
                href={link.type === "internal" ? link.href || undefined : undefined}
                variant={index % 2 === 0 ? "primary" : "dark"}
                highlight={link.highlight}
                enabled={link.enabled}
                badge={null}
              />
            </motion.div>
          )
        })}
      </motion.div>

      <BorderCallout>
        Selecione abaixo e descubra o caminho para sua nota máxima no ENEM.
      </BorderCallout>

      <CategoryGrid />

      {/* Seção Como Funciona */}
      <section id="como-funciona" className="py-8 scroll-mt-20">
        <SectionTitle>Como Funciona</SectionTitle>
        <HowItWorksStepper steps={HOW_IT_WORKS} />
      </section>

      {/* Seção Materiais */}
      <section id="materiais" className="py-8 scroll-mt-20">
        <SectionTitle>Materiais Gratuitos</SectionTitle>
        <div className="px-6 space-y-4">
          {MATERIALS.map((material) => (
            <Card
              key={material.id}
              className="p-6 border-2 border-border hover:border-primary transition-colors cursor-pointer"
            >
              <h3 className="font-bold text-dark mb-2">{material.titulo}</h3>
              <p className="text-sm text-gray-text">{material.descricao}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Seção FAQ */}
      <section id="faq" className="py-8 scroll-mt-20">
        <SectionTitle>Perguntas Frequentes</SectionTitle>
        <FaqAccordion items={FAQ} />
      </section>

      {/* Rodapé Moderno */}
      <ModernFooter />

      <FloatingWhatsAppFAB />
      <BackToTop />
    </PageShell>
  )
}
