import { ArrowDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { site } from "@/data/site"

export function Hero() {
  return (
    <section className="mx-auto flex max-w-5xl flex-col items-start gap-6 px-6 py-24 md:py-32">
      <Badge>Ciência · Olimpíadas · Ceará</Badge>
      <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
        Oi, eu sou o <span className="text-primary">{site.firstName}</span>.
      </h1>
      <p className="max-w-2xl text-lg text-muted-foreground">{site.tagline}</p>
      <div className="flex gap-3">
        <Button size="lg" asChild>
          <a href="#conquistas">Ver conquistas <ArrowDown /></a>
        </Button>
        <Button size="lg" variant="outline" asChild>
          <a href="#contato">Contato</a>
        </Button>
      </div>
    </section>
  )
}
