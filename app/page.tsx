"use client"

import { PageShell } from "@/components/PageShell"
import { HeaderBrand } from "@/components/HeaderBrand"
import { Headline } from "@/components/Headline"
import { CtaCard } from "@/components/CtaCard"
import { BorderCallout } from "@/components/BorderCallout"
import { CategoryGrid } from "@/components/CategoryGrid"
import { SectionTitle } from "@/components/SectionTitle"
import { ScheduleCard } from "@/components/ScheduleCard"
import { PricingCard } from "@/components/PricingCard"
import { HowItWorksStepper } from "@/components/HowItWorksStepper"
import { InfoCard } from "@/components/InfoCard"
import { TestimonialCarousel } from "@/components/TestimonialCarousel"
import { FaqAccordion } from "@/components/FaqAccordion"
import { FloatingWhatsAppFAB } from "@/components/FloatingWhatsAppFAB"
import { BackToTop } from "@/components/BackToTop"
import { CopyButton } from "@/components/CopyButton"
import { Button } from "@/components/ui/button"
import { BadgePill } from "@/components/BadgePill"
import { Card } from "@/components/ui/card"
import { MapPin, MessageCircle, Instagram, Copy } from "lucide-react"
import {
  LINKS_CONFIG,
  SCHEDULES,
  PRICING,
  HOW_IT_WORKS,
  BENEFITS,
  TESTIMONIALS,
  FAQ,
  CONTACT,
  BRANDING,
  MATERIALS,
} from "@/data/config"
import { openWhatsApp } from "@/lib/whatsapp"
import { track, TRACKING_EVENTS } from "@/lib/tracking"
import { smoothScrollTo, highlightSection } from "@/lib/utils"
import { useEffect } from "react"
import * as Icons from "lucide-react"

export default function Home() {
  // Scroll suave e highlight ao chegar nas seções
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash
      if (hash) {
        setTimeout(() => {
          highlightSection(hash)
        }, 300)
      }
    }

    window.addEventListener("hashchange", handleHashChange)
    if (window.location.hash) {
      handleHashChange()
    }

    return () => window.removeEventListener("hashchange", handleHashChange)
  }, [])

  return (
    <PageShell>
      <HeaderBrand />
      <Headline />

      {/* CTAs principais */}
      <div className="px-6 space-y-4 mb-6">
        {LINKS_CONFIG.map((link, index) => {
          const Icon =
            (Icons[link.icon as keyof typeof Icons] as any) || Icons.MessageCircle

          return (
            <CtaCard
              key={link.id}
              title={link.label}
              description={link.description}
              icon={Icon}
              onClick={
                link.type === "whatsapp"
                  ? () => openWhatsApp("matricula")
                  : link.type === "internal"
                  ? () => {
                      track(TRACKING_EVENTS.SITE_OPEN_CLICK)
                    }
                  : link.sectionAnchor
                  ? () => smoothScrollTo(link.sectionAnchor!, 80)
                  : undefined
              }
              href={link.type === "internal" ? link.href || undefined : undefined}
              sectionAnchor={link.sectionAnchor || undefined}
              variant={index % 2 === 0 ? "primary" : "dark"}
              highlight={link.highlight}
              enabled={link.enabled}
              badge={link.badge ? <BadgePill type={link.badge as any} /> : null}
            />
          )
        })}
      </div>

      <BorderCallout>
        Selecione abaixo e veja o caminho para sua nota máxima.
      </BorderCallout>

      <CategoryGrid />

      {/* Seção Horários */}
      <section id="horarios" className="py-8 scroll-mt-20">
        <SectionTitle>Horários e Turmas</SectionTitle>
        <div className="px-6 space-y-4">
          {SCHEDULES.map((schedule, index) => (
            <ScheduleCard key={schedule.id} schedule={schedule} index={index} />
          ))}
        </div>
      </section>

      {/* Seção Valores */}
      <section id="valores" className="py-8 scroll-mt-20">
        <SectionTitle>Planos e Valores</SectionTitle>
        <div className="px-6 space-y-4">
          {PRICING.map((pricing, index) => (
            <PricingCard key={pricing.id} pricing={pricing} index={index} />
          ))}
          <div className="text-center mt-4">
            <p className="text-sm text-gray-text">
              Parcelamento até 10x sem juros (consulte condições)
            </p>
          </div>
        </div>
      </section>

      {/* Seção Como Funciona */}
      <section id="como-funciona" className="py-8 scroll-mt-20">
        <SectionTitle>Como Funciona</SectionTitle>
        <HowItWorksStepper steps={HOW_IT_WORKS} />
      </section>

      {/* Seção Redação */}
      <section id="redacao" className="py-8 scroll-mt-20">
        <SectionTitle>Redação</SectionTitle>
        <div className="px-6">
          <InfoCard title="Benefícios" items={BENEFITS.redacao} />
        </div>
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

      {/* Seção Resultados */}
      <section id="resultados" className="py-8 scroll-mt-20">
        <SectionTitle>Resultados</SectionTitle>
        <TestimonialCarousel testimonials={TESTIMONIALS} />
      </section>

      {/* Seção FAQ */}
      <section id="faq" className="py-8 scroll-mt-20">
        <SectionTitle>Perguntas Frequentes</SectionTitle>
        <FaqAccordion items={FAQ} />
      </section>

      {/* Seção Endereço */}
      <section id="endereco" className="py-8 scroll-mt-20">
        <SectionTitle>Onde nos encontrar?</SectionTitle>
        <div className="px-6">
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
        </div>
      </section>

      {/* Seção Contato */}
      <section id="contato" className="py-8 scroll-mt-20">
        <SectionTitle>Contato</SectionTitle>
        <div className="px-6 space-y-4">
          <Button
            className="w-full"
            size="lg"
            onClick={() => openWhatsApp("matricula")}
          >
            <MessageCircle className="mr-2 h-5 w-5" />
            WhatsApp Matrícula
            <br />
            <span className="text-xs opacity-90">
              {CONTACT.whatsapp.matricula.display}
            </span>
          </Button>
          <Button
            variant="outline"
            className="w-full"
            size="lg"
            onClick={() => openWhatsApp("urgencia")}
          >
            <MessageCircle className="mr-2 h-5 w-5" />
            WhatsApp Urgência
            <BadgePill type="urgent" className="ml-2" />
            <br />
            <span className="text-xs text-gray-text">
              {CONTACT.whatsapp.urgencia.display}
            </span>
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
            Instagram: {BRANDING.instagram}
          </Button>
          <div className="flex gap-2">
            <CopyButton
              text={CONTACT.whatsapp.matricula.display}
              label="phone"
              variant="ghost"
              size="sm"
              className="flex-1"
            />
            <CopyButton
              text={CONTACT.whatsapp.urgencia.display}
              label="phone"
              variant="ghost"
              size="sm"
              className="flex-1"
            />
          </div>
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
