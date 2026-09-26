import { ExternalLink, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { site } from "@/data/site"

export function Contact() {
  return (
    <section id="contato" className="border-t bg-secondary/50">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <h2 className="mb-4 text-2xl font-bold tracking-tight">Vamos conversar?</h2>
        <p className="mb-6 max-w-xl text-muted-foreground">
          Quer saber mais sobre o {site.firstName}? Me siga no Instagram ou mande uma mensagem.
        </p>
        <div className="flex flex-wrap gap-3">
          <Button asChild>
            <a href={site.instagram} target="_blank" rel="noreferrer noopener">
              Instagram <ExternalLink />
            </a>
          </Button>
          {site.email && (
            <Button variant="outline" asChild>
              <a href={`mailto:${site.email}`}><Mail /> E-mail</a>
            </Button>
          )}
        </div>
      </div>
    </section>
  )
}
