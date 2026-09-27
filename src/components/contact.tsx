import { ExternalLink, Heart, MessageCircle, Newspaper, Star } from "lucide-react"
import { LinkButton } from "@/components/ui/button"
import { Reveal } from "@/components/reveal"
import { primaryContact } from "@/lib/contact"
import { site } from "@/data/site"

export function Contact() {
  const main = primaryContact("apoio")
  return (
    <section id="contato" className="relative overflow-hidden bg-gradient-to-br from-emerald-800 via-emerald-700 to-sky-700 text-white">
      <div aria-hidden="true" className="bg-dots absolute inset-0 opacity-30" />
      <Heart aria-hidden="true" className="absolute left-[8%] top-10 size-8 animate-float fill-rose-300 text-rose-300" />
      <Star aria-hidden="true" className="absolute right-[10%] top-16 size-7 animate-float-slow fill-amber-300 text-amber-300" />
      <Heart aria-hidden="true" className="absolute bottom-10 right-[18%] size-6 animate-float fill-white/70 text-white/70" />
      <div className="relative mx-auto max-w-3xl px-4 py-16 text-center md:py-24">
        <Reveal>
          <h2 className="mb-4 text-3xl font-extrabold leading-tight tracking-tight md:text-5xl">Ajude o {site.firstName} a conquistar mais medalhas</h2>
          <p className="mx-auto mb-8 max-w-xl text-lg leading-relaxed text-white/95">
            Venha ajudar o {site.firstName} a conquistar mais medalhas e provar que, com educação, podemos mudar o mundo.
          </p>
          <div className="mx-auto flex max-w-sm flex-col gap-3">
            <LinkButton
              href={main.href}
              target="_blank"
              rel="noreferrer noopener"
              size="lg"
              className="h-14 rounded-full bg-white text-lg font-extrabold text-emerald-800 shadow-lg transition-transform hover:-translate-y-0.5 hover:bg-amber-100"
            >
              <MessageCircle /> Quero ajudar
            </LinkButton>
            <LinkButton
              href="/imprensa"
              variant="outline"
              size="lg"
              className="h-12 rounded-full border-2 border-white bg-transparent text-base font-bold text-white hover:bg-white/15"
            >
              <Newspaper /> Sou da imprensa
            </LinkButton>
            <LinkButton
              href={site.instagram}
              target="_blank"
              rel="noreferrer noopener"
              variant="outline"
              size="lg"
              className="h-12 rounded-full border-2 border-white/60 bg-transparent text-base font-bold text-white hover:bg-white/15"
            >
              Acompanhe no Instagram <ExternalLink />
            </LinkButton>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
