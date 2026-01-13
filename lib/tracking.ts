// Sistema de tracking simples (localStorage + console)
// Pode ser expandido para enviar para analytics (GA, etc)

type EventPayload = Record<string, any>

export function track(eventName: string, payload?: EventPayload) {
  const event = {
    name: eventName,
    payload: payload || {},
    timestamp: new Date().toISOString(),
  }

  // Console log para desenvolvimento
  if (process.env.NODE_ENV === "development") {
    console.log("📊 Event:", event)
  }

  // Salvar no localStorage
  try {
    const existingEvents = JSON.parse(
      localStorage.getItem("clickEvents") || "[]"
    )
    existingEvents.push(event)
    // Manter apenas os últimos 100 eventos
    const recentEvents = existingEvents.slice(-100)
    localStorage.setItem("clickEvents", JSON.stringify(recentEvents))
  } catch (error) {
    console.error("Erro ao salvar evento:", error)
  }

  // Enviar para dataLayer se existir (Google Tag Manager)
  if (typeof window !== "undefined" && (window as any).dataLayer) {
    ;(window as any).dataLayer.push({
      event: eventName,
      ...payload,
    })
  }
}

// Eventos pré-definidos
export const TRACKING_EVENTS = {
  WHATSAPP_PRIMARY: "whatsapp_primary_click",
  WHATSAPP_URGENCY: "whatsapp_urgency_click",
  HORARIOS_CLICK: "horarios_click",
  VALORES_CLICK: "valores_click",
  CATEGORY_CLICK: "category_click",
  LEAD_SUBMIT: "lead_submit",
  INSTAGRAM_CLICK: "instagram_click",
  SITE_OPEN_CLICK: "site_open_click",
  MATERIAL_CLICK: "material_click",
  MAPS_CLICK: "maps_click",
  COPY_ADDRESS: "copy_address",
  COPY_PHONE: "copy_phone",
} as const
