import { ExternalLink, Mail, MessageCircle } from "lucide-react"
import { LinkButton } from "@/components/ui/button"
import { primaryContact } from "@/lib/contact"
import { site } from "@/data/site"

export function Contact() {
  const main = primaryContact()
  const Icon = site.email && !site.whatsapp ? Mail : MessageCircle
  return (
    <section id="contato" className="border-t">
      <div className="mx-auto max-w-3xl px-4 py-14 md:py-20">
        <h2 className="mb-3 text-2xl font-bold tracking-tight">Vamos conversar?</h2>
        <p className="mb-6 text-lg leading-relaxed text-muted-foreground">
          A conversa é sempre com os responsáveis pelo {site.firstName}. Escreva com calma, sem compromisso.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <LinkButton href={main.href} target="_blank" rel="noreferrer noopener" size="lg" className="h-12 px-6 text-base">
            <Icon /> {main.label}
          </LinkButton>
          <LinkButton
            href={site.instagram}
            target="_blank"
            rel="noreferrer noopener"
            variant="outline"
            size="lg"
            className="h-12 px-6 text-base"
          >
            Acompanhe no Instagram <ExternalLink />
          </LinkButton>
        </div>
      </div>
    </section>
  )
}
