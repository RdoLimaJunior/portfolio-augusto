import { site } from "@/data/site"

const message = "Olá! Vim pelo site do Augusto e gostaria de conversar sobre apoiar as olimpíadas dele."

/** Melhor canal disponível para uma empresa falar com a família. */
export function primaryContact() {
  if (site.whatsapp) {
    return { href: `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`, label: "Chamar no WhatsApp" }
  }
  if (site.email) {
    return { href: `mailto:${site.email}?subject=${encodeURIComponent("Apoio às olimpíadas do Augusto")}&body=${encodeURIComponent(message)}`, label: "Enviar e-mail" }
  }
  return { href: site.instagramDm, label: "Chamar no Instagram" }
}
