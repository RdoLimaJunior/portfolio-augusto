import { useState } from "react"
import { ArrowDown } from "lucide-react"
import { LinkButton } from "@/components/ui/button"
import { site } from "@/data/site"

function Photo() {
  const [failed, setFailed] = useState(false)
  return (
    <div className="mx-auto aspect-square w-full max-w-40 overflow-hidden rounded-[2rem] bg-gradient-to-br from-primary/25 to-amber-100 shadow-md ring-4 ring-background sm:max-w-56 md:max-w-sm">
      {failed ? (
        <div className="flex size-full items-center justify-center text-7xl font-bold text-primary/70 md:text-8xl">A</div>
      ) : (
        <img src={site.photo} alt={`Foto de ${site.name}`} onError={() => setFailed(true)} className="size-full object-cover" />
      )}
    </div>
  )
}

export function Hero() {
  return (
    <section className="bg-gradient-to-b from-primary/10 via-background to-background">
      <div className="mx-auto grid max-w-5xl gap-8 px-4 pb-12 pt-6 md:grid-cols-[1.3fr_1fr] md:items-center md:gap-12 md:py-24">
        <div className="md:order-last">
          <Photo />
        </div>

        <div className="text-center md:text-left">
          <p className="mb-2 text-sm font-medium text-primary">Ciência · Olimpíadas · Ceará</p>
          <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl">
            Oi, eu sou o <span className="text-primary">{site.firstName}</span>! 👋
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">{site.tagline}</p>
          <div className="mt-6 flex justify-center md:justify-start">
            <LinkButton variant="outline" size="lg" href="#olimpiadas" className="h-12 px-6 text-base">
              Conheça minha história <ArrowDown />
            </LinkButton>
          </div>
        </div>
      </div>
    </section>
  )
}
