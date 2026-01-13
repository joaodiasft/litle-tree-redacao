"use client"

import { Card } from "@/components/ui/card"
import { Star, Instagram } from "lucide-react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { BRANDING } from "@/data/config"
import { track, TRACKING_EVENTS } from "@/lib/tracking"

interface Testimonial {
  id: string
  nome: string
  texto: string
  nota?: number
}

interface TestimonialCarouselProps {
  testimonials: readonly Testimonial[]
}

export function TestimonialCarousel({
  testimonials,
}: TestimonialCarouselProps) {
  return (
    <div className="px-6 space-y-4">
      {testimonials.map((testimonial, index) => (
        <motion.div
          key={testimonial.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: index * 0.1 }}
        >
          <Card className="p-6 border-2 border-border">
            <div className="flex items-start justify-between mb-3">
              <div>
                <h4 className="font-bold text-dark mb-1">
                  {testimonial.nome}
                </h4>
                {testimonial.nota && (
                  <div className="flex items-center gap-1">
                    <Star className="text-yellow-400 fill-yellow-400" size={16} />
                    <span className="text-sm font-semibold text-dark">
                      {testimonial.nota} pontos
                    </span>
                  </div>
                )}
              </div>
            </div>
            <p className="text-gray-text text-sm leading-relaxed">
              &ldquo;{testimonial.texto}&rdquo;
            </p>
          </Card>
        </motion.div>
      ))}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="pt-4"
      >
        <Button
          variant="outline"
          className="w-full"
          onClick={() => {
            track(TRACKING_EVENTS.INSTAGRAM_CLICK)
            window.open(BRANDING.instagramUrl, "_blank")
          }}
        >
          <Instagram className="mr-2 h-4 w-4" />
          Ver mais no Instagram
        </Button>
      </motion.div>
    </div>
  )
}
