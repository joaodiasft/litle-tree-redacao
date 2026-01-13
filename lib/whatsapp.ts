import { CONTACT } from "@/data/config"
import { track } from "./tracking"

export type WhatsAppType = "matricula" | "urgencia" | "custom"

export function openWhatsApp(
  type: WhatsAppType = "matricula",
  customMessage?: string
) {
  const config =
    type === "matricula"
      ? CONTACT.whatsapp.matricula
      : type === "urgencia"
      ? CONTACT.whatsapp.urgencia
      : { phone: CONTACT.whatsapp.matricula.phone, message: customMessage || "" }

  const message = customMessage || config.message
  const url = `https://wa.me/${config.phone}?text=${encodeURIComponent(message)}`

  // Tracking
  if (type === "matricula") {
    track("whatsapp_primary_click", { phone: config.phone })
  } else if (type === "urgencia") {
    track("whatsapp_urgency_click", { phone: config.phone })
  }

  window.open(url, "_blank")
}

export function buildLeadMessage(
  nome: string,
  whatsapp: string,
  objetivo: string
): string {
  return `Olá! Meu nome é ${nome}. Meu WhatsApp é ${whatsapp}. Meu objetivo é ${objetivo}. Quero informações do Curso Redação Nota 1000.`
}
