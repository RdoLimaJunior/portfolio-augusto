import { Badge } from "@/components/ui/badge"
import { site } from "@/data/site"

export function About() {
  return (
    <section id="sobre" className="border-t bg-secondary/50">
      <div className="mx-auto max-w-5xl px-4 py-14 md:py-20">
        <h2 className="mb-4 text-3xl font-bold tracking-tight">Sobre mim</h2>
        <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">{site.bio}</p>
        <div className="mt-6 flex flex-wrap gap-2">
          {site.interests.map((i) => <Badge key={i}>{i}</Badge>)}
        </div>
      </div>
    </section>
  )
}
