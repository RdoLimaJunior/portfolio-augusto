import { ArrowUpRight } from "lucide-react"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { site } from "@/data/site"

export function Media() {
  return (
    <section id="midia" className="border-t bg-secondary/50">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <h2 className="mb-2 text-2xl font-bold tracking-tight">Na mídia</h2>
        <p className="mb-8 text-muted-foreground">Matérias sobre a medalha em Houston:</p>
        <div className="grid gap-6 md:grid-cols-3">
          {site.media.map((m) => (
            <a key={m.url} href={m.url} target="_blank" rel="noreferrer noopener" className="group">
              <Card className="h-full transition-shadow group-hover:shadow-md">
                <CardHeader>
                  <CardDescription className="font-semibold text-primary">{m.outlet}</CardDescription>
                  <CardTitle className="leading-snug">{m.title}</CardTitle>
                  <span className="mt-2 inline-flex items-center gap-1 text-sm text-muted-foreground group-hover:text-foreground">
                    Ler matéria <ArrowUpRight className="size-4" />
                  </span>
                </CardHeader>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
