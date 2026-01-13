import { track, TRACKING_EVENTS } from "./tracking"

export async function copyToClipboard(text: string, label?: string): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(text)
    
    if (label === "address") {
      track(TRACKING_EVENTS.COPY_ADDRESS)
    } else if (label === "phone") {
      track(TRACKING_EVENTS.COPY_PHONE)
    }
    
    return true
  } catch (error) {
    console.error("Erro ao copiar:", error)
    return false
  }
}
