import { site } from "@/data/site"

export type ContactTopic = "parcerias" | "imprensa"

const messages: Record<ContactTopic, string> = {
  parcerias: "Olá! Vim pelo site do Augusto e gostaria de conversar sobre apoiar as olimpíadas dele.",
  imprensa: "Olá! Sou jornalista e gostaria de falar sobre o Augusto e a Final Global do STEAM AHEAD 2026.",
}

/** Melhor canal disponível para falar com a família (WhatsApp, depois e-mail, depois Instagram). */
export function primaryContact(topic: ContactTopic = "parcerias") {
  const text = messages[topic]
  if (site.whatsapp) {
    return { href: `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`, label: "Chamar no WhatsApp", channel: "whatsapp" as const }
  }
  if (site.email) {
    const subject = topic === "imprensa" ? "Imprensa: Augusto" : "Apoio às olimpíadas do Augusto"
    return { href: `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(text)}`, label: "Enviar e-mail", channel: "email" as const }
  }
  return { href: site.instagramDm, label: "Chamar no Instagram", channel: "instagram" as const }
}

/** Número formatado para mostrar na tela: (85) 99993-5789 */
export function whatsappDisplay() {
  const d = site.whatsapp.replace(/^55/, "")
  return d.length === 11 ? `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7)}` : d
}
