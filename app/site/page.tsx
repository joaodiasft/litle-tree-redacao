"use client"

import { PageShell } from "@/components/PageShell"
import { HeaderBrand } from "@/components/HeaderBrand"
import { SectionTitle } from "@/components/SectionTitle"
import { HowItWorksStepper } from "@/components/HowItWorksStepper"
import { InfoCard } from "@/components/InfoCard"
import { CompetenciaCard } from "@/components/CompetenciaCard"
import { TestimonialCarousel } from "@/components/TestimonialCarousel"
import { FaqAccordion } from "@/components/FaqAccordion"
import { FloatingWhatsAppFAB } from "@/components/FloatingWhatsAppFAB"
import { BackToTop } from "@/components/BackToTop"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowLeft, MessageCircle, MapPin } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"
import {
  BENEFITS,
  HOW_IT_WORKS,
  COMPETENCIAS,
  TESTIMONIALS,
  FAQ,
  CONTACT,
  BRANDING,
} from "@/data/config"
import { openWhatsApp } from "@/lib/whatsapp"
import { CopyButton } from "@/components/CopyButton"
import { track, TRACKING_EVENTS } from "@/lib/tracking"

export default function SitePage() {
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
            <h1 className="text-xl font-bold text-dark">{BRANDING.name}</h1>
            <p className="text-xs text-gray-text">{BRANDING.tagline}</p>
          </div>
        </div>
      </div>

      {/* Hero */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="px-6 py-12 text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-primary-strong mb-4">
          Sua aprovação começa aqui
        </h2>
        <p className="text-lg text-gray-text mb-8 max-w-md mx-auto">
          Correção comentada, acompanhamento e estratégias para a nota máxima
          no ENEM.
        </p>
        <Button
          size="lg"
          className="w-full max-w-sm"
          onClick={() => openWhatsApp("matricula")}
        >
          <MessageCircle className="mr-2 h-5 w-5" />
          Matrícula no WhatsApp
        </Button>
      </motion.section>

      {/* Método */}
      <section className="py-8">
        <SectionTitle>Nosso Método</SectionTitle>
        <HowItWorksStepper steps={HOW_IT_WORKS} />
      </section>

      {/* Diferenciais */}
      <section className="py-8">
        <SectionTitle>Diferenciais</SectionTitle>
        <div className="px-6">
          <InfoCard title="Por que escolher?" items={BENEFITS.geral} />
        </div>
      </section>

      {/* Como é a correção */}
      <section className="py-8">
        <SectionTitle>Como é a Correção</SectionTitle>
        <div className="px-6 space-y-4">
          <Card className="p-6 border-2 border-border">
            <h3 className="text-xl font-bold text-dark mb-4">
              Entenda como sua redação é corrigida
            </h3>
            <p className="text-gray-text mb-6">
              Nossa correção segue os critérios oficiais do ENEM, focando em
              ajudar você a evoluir com cada texto para alcançar a nota máxima.
            </p>
            <h4 className="font-bold text-dark mb-4">
              As 5 Competências do ENEM
            </h4>
          </Card>
          <div className="space-y-3">
            {COMPETENCIAS.map((competencia, index) => (
              <CompetenciaCard
                key={competencia.id}
                competencia={competencia}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="py-8">
        <SectionTitle>Depoimentos</SectionTitle>
        <TestimonialCarousel testimonials={TESTIMONIALS} />
      </section>

      {/* FAQ */}
      <section className="py-8">
        <SectionTitle>Perguntas Frequentes</SectionTitle>
        <FaqAccordion items={FAQ} />
      </section>

      {/* Localização e Contato */}
      <section className="py-8">
        <SectionTitle>Localização e Contato</SectionTitle>
        <div className="px-6 space-y-4">
          <Card className="p-6 border-2 border-border">
            <div className="flex items-start gap-3 mb-4">
              <MapPin className="text-primary flex-shrink-0 mt-1" size={24} />
              <div>
                <p className="font-bold text-dark mb-1">
                  {CONTACT.endereco.rua}
                </p>
                <p className="text-sm text-gray-text">
                  {CONTACT.endereco.bairro}, {CONTACT.endereco.cidade} -{" "}
                  {CONTACT.endereco.uf}
                </p>
                <p className="text-sm text-gray-text">
                  CEP: {CONTACT.endereco.cep}
                </p>
              </div>
            </div>
            <div className="space-y-3">
              <Button
                className="w-full"
                onClick={() => {
                  track("maps_click")
                  window.open(CONTACT.endereco.mapsUrl, "_blank")
                }}
              >
                <MapPin className="mr-2 h-4 w-4" />
                Abrir no Maps
              </Button>
              <CopyButton
                text={`${CONTACT.endereco.rua}, ${CONTACT.endereco.bairro}, ${CONTACT.endereco.cidade} - ${CONTACT.endereco.uf}, ${CONTACT.endereco.cep}`}
                label="address"
                variant="outline"
                className="w-full"
              />
            </div>
          </Card>
          <Button
            className="w-full"
            size="lg"
            onClick={() => openWhatsApp("matricula")}
          >
            <MessageCircle className="mr-2 h-5 w-5" />
            Matrícula no WhatsApp
          </Button>
        </div>
      </section>

      {/* Rodapé */}
      <footer className="px-6 py-8 text-center border-t border-border mt-8">
        <p className="text-sm text-gray-text mb-2">
          {CONTACT.endereco.rua}, {CONTACT.endereco.bairro}
        </p>
        <p className="text-sm text-gray-text mb-2">
          {CONTACT.endereco.cidade} - {CONTACT.endereco.uf}, CEP:{" "}
          {CONTACT.endereco.cep}
        </p>
        <p className="text-sm text-gray-text mb-4">
          Instagram: {BRANDING.instagram}
        </p>
        <p className="text-xs text-gray-text">
          © {new Date().getFullYear()} {BRANDING.name}
        </p>
      </footer>

      <FloatingWhatsAppFAB />
      <BackToTop />
    </PageShell>
  )
}
