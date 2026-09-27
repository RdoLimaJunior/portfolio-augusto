import { useState } from "react"
import { ArrowDown } from "lucide-react"
import { LinkButton } from "@/components/ui/button"
import { site } from "@/data/site"

function Cover() {
  const [failed, setFailed] = useState(false)
  return (
    <div className="mx-auto max-w-5xl px-4 pt-4 md:pt-8">
      <div className="aspect-[2/1] overflow-hidden rounded-3xl bg-gradient-to-br from-primary/25 to-amber-100 shadow-md">
        {!failed && (
          <img
            src={site.photo}
            alt={site.photoAlt}
            onError={() => setFailed(true)}
            className="size-full object-cover"
          />
        )}
      </div>
    </div>
  )
}

export function Hero() {
  return (
    <section className="bg-gradient-to-b from-primary/10 via-background to-background pb-12 md:pb-20">
      <Cover />
      <div className="mx-auto max-w-2xl px-4 pt-8 text-center">
        <p className="mb-2 text-sm font-medium text-primary">Ciência · Olimpíadas · Ceará</p>
        <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl">
          Oi, eu sou o <span className="text-primary">{site.firstName}</span>! 👋
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-muted-foreground">{site.tagline}</p>
        <div className="mt-6 flex justify-center">
          <LinkButton variant="outline" size="lg" href="#olimpiadas" className="h-12 px-6 text-base">
            Conheça minha história <ArrowDown />
          </LinkButton>
        </div>
      </div>
    </section>
  )
}
