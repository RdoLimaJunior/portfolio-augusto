import { ExternalLink, Mail, MessageCircle } from "lucide-react"
import { LinkButton } from "@/components/ui/button"
import { primaryContact } from "@/lib/contact"
import { site } from "@/data/site"

export function Contact() {
  const main = primaryContact()
  const Icon = site.email && !site.whatsapp ? Mail : MessageCircle
  return (
    <section id="contato" className="border-t bg-primary text-primary-foreground">
      <div className="mx-auto max-w-5xl px-4 py-14 text-center md:py-20">
        <h2 className="mb-3 text-3xl font-bold tracking-tight">Vamos conversar?</h2>
        <p className="mx-auto mb-8 max-w-xl text-lg leading-relaxed opacity-90">
          Sua empresa acredita na educação? Chame a família do {site.firstName}. Conversamos com carinho e sem compromisso.
        </p>
        <div className="mx-auto flex max-w-sm flex-col gap-3">
          <LinkButton
            href={main.href}
            target="_blank"
            rel="noreferrer noopener"
            variant="secondary"
            size="lg"
            className="h-12 text-base"
          >
            <Icon /> {main.label}
          </LinkButton>
          {site.email && site.whatsapp && (
            <LinkButton href={`mailto:${site.email}`} variant="outline" size="lg" className="h-12 bg-transparent text-base text-primary-foreground hover:bg-primary-foreground/10">
              <Mail /> Enviar e-mail
            </LinkButton>
          )}
          <LinkButton
            href={site.instagram}
            target="_blank"
            rel="noreferrer noopener"
            variant="outline"
            size="lg"
            className="h-12 bg-transparent text-base text-primary-foreground hover:bg-primary-foreground/10"
          >
            Acompanhe no Instagram <ExternalLink />
          </LinkButton>
        </div>
      </div>
    </section>
  )
}
