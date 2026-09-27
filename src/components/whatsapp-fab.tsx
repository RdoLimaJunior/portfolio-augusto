import { MessageCircle } from "lucide-react"
import { primaryContact } from "@/lib/contact"

/** Botão discreto no canto inferior direito para iniciar uma conversa. Não mostra o número. */
export function WhatsAppFab({ topic = "apoio" }: { topic?: "apoio" | "imprensa" }) {
  const c = primaryContact(topic)
  const label = c.channel === "whatsapp" ? "Falar com a família pelo WhatsApp" : c.label
  return (
    <a
      href={c.href}
      target="_blank"
      rel="noreferrer noopener"
      aria-label={label}
      title={label}
      className="fixed bottom-4 right-4 z-40 flex size-10 items-center justify-center rounded-full border border-emerald-200 bg-white/90 text-emerald-600 shadow-md backdrop-blur transition-colors hover:bg-emerald-50 hover:text-emerald-700 sm:bottom-5 sm:right-5"
    >
      <MessageCircle className="size-5" />
    </a>
  )
}
