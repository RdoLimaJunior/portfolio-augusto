import { site } from "@/data/site"

export type ContactTopic = "apoio" | "imprensa"

const messages: Record<ContactTopic, string> = {
  apoio: "Olá! Vim pelo site do Augusto e quero ajudá-lo a conquistar mais medalhas.",
  imprensa: "Olá! Sou jornalista e gostaria de falar sobre o Augusto e a Final Global do STEAM AHEAD 2026.",
}

/** Melhor canal disponível para falar com a família (WhatsApp, depois e-mail, depois Instagram). O número nunca aparece na tela. */
export function primaryContact(topic: ContactTopic = "apoio") {
  const text = messages[topic]
  if (site.whatsapp) {
    return { href: `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`, label: "Chamar no WhatsApp", channel: "whatsapp" as const }
  }
  if (site.email) {
    const subject = topic === "imprensa" ? "Imprensa: Augusto" : "Ajudar o Augusto"
    return { href: `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(text)}`, label: "Enviar e-mail", channel: "email" as const }
  }
  return { href: site.instagramDm, label: "Chamar no Instagram", channel: "instagram" as const }
}
