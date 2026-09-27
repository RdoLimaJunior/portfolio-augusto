import { useState } from "react"
import { ArrowDown, Heart, Medal } from "lucide-react"
import { LinkButton } from "@/components/ui/button"
import { site } from "@/data/site"

function Photo() {
  const [failed, setFailed] = useState(false)
  return (
    <div className="relative mx-auto w-full max-w-40 sm:max-w-56 md:max-w-sm">
      <div className="aspect-square overflow-hidden rounded-[2rem] bg-gradient-to-br from-primary/30 to-amber-200 shadow-lg ring-4 ring-background">
        {failed ? (
          <div className="flex size-full items-center justify-center text-7xl md:text-8xl font-bold text-primary/70">A</div>
        ) : (
          <img
            src={site.photo}
            alt={`Foto de ${site.name}`}
            onError={() => setFailed(true)}
            className="size-full object-cover"
          />
        )}
      </div>
      <div className="absolute -bottom-3 left-1/2 flex -translate-x-1/2 items-center gap-2 whitespace-nowrap rounded-full bg-amber-100 px-4 py-2 text-sm font-semibold text-amber-950 shadow-md">
        <Medal className="size-4" /> Bronze · Houston 2026
      </div>
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

          <div className="mt-8 flex flex-col gap-3 sm:flex-row md:justify-start sm:justify-center">
            <LinkButton size="lg" href="#contato" className="h-12 px-6 text-base">
              <Heart /> Quero apoiar
            </LinkButton>
            <LinkButton size="lg" variant="outline" href="#olimpiadas" className="h-12 px-6 text-base">
              Conheça a história <ArrowDown />
            </LinkButton>
          </div>

          <p className="mt-8 text-xs uppercase tracking-wide text-muted-foreground">Visto em</p>
          <p className="mt-1 text-sm font-medium">{site.seenIn.join(" · ")}</p>
        </div>
      </div>
    </section>
  )
}
