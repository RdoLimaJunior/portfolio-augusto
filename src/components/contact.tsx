import { ExternalLink, Mail } from "lucide-react"
import { LinkButton } from "@/components/ui/button"
import { site } from "@/data/site"

export function Contact() {
  return (
    <section id="contato" className="border-t">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <h2 className="mb-4 text-2xl font-bold tracking-tight">Sua empresa acredita na educação?</h2>
        <p className="mb-6 max-w-xl text-muted-foreground">
          Fale com a família do {site.firstName} e conheça as formas de apoiar. Acompanhe também a rotina de estudos e as competições no Instagram.
        </p>
        <div className="flex flex-wrap gap-3">
          {site.email && (
            <LinkButton href={`mailto:${site.email}`}>
              <Mail /> Falar sobre patrocínio
            </LinkButton>
          )}
          <LinkButton variant={site.email ? "outline" : "default"} href={site.instagram} target="_blank" rel="noreferrer noopener">
            Instagram <ExternalLink />
          </LinkButton>
        </div>
      </div>
    </section>
  )
}
