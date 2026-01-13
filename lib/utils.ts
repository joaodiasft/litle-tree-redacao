import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Scroll suave para âncoras
export function smoothScrollTo(elementId: string, offset: number = 80) {
  const element = document.getElementById(elementId.replace("#", ""))
  if (!element) return

  const elementPosition = element.getBoundingClientRect().top
  const offsetPosition = elementPosition + window.pageYOffset - offset

  window.scrollTo({
    top: offsetPosition,
    behavior: "smooth",
  })

  // Atualizar URL sem recarregar
  if (history.pushState) {
    history.pushState(null, "", elementId)
  }
}

// Highlight suave ao chegar na seção
export function highlightSection(elementId: string) {
  const element = document.getElementById(elementId.replace("#", ""))
  if (!element) return

  element.classList.add("highlight-glow")
  setTimeout(() => {
    element.classList.remove("highlight-glow")
  }, 800)
}

// Formatar telefone para exibição
export function formatPhone(phone: string): string {
  const cleaned = phone.replace(/\D/g, "")
  if (cleaned.length === 11) {
    return `(${cleaned.slice(0, 2)}) ${cleaned.slice(2, 7)}-${cleaned.slice(7)}`
  }
  if (cleaned.length === 10) {
    return `(${cleaned.slice(0, 2)}) ${cleaned.slice(2, 6)}-${cleaned.slice(6)}`
  }
  return phone
}

// Formatar valor monetário
export function formatCurrency(value: number): string {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value)
}
