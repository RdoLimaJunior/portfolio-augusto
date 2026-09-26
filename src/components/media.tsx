import { useState } from "react"
import { ArrowUpRight } from "lucide-react"
import { LinkButton } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { site } from "@/data/site"

function Thumb({ src, alt }: { src: string; alt: string }) {
  const [failed, setFailed] = useState(false)
  if (failed) return <div className="aspect-video bg-muted" />
  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      referrerPolicy="no-referrer"
      onError={() => setFailed(true)}
      className="aspect-video w-full object-cover"
    />
  )
}

export function Media() {
  return (
    <section id="midia" className="border-t bg-secondary/50">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <h2 className="mb-2 text-2xl font-bold tracking-tight">Na mídia</h2>
        <p className="mb-8 text-muted-foreground">Matérias sobre a medalha em Houston:</p>
        <div className="grid gap-6 md:grid-cols-3">
          {site.media.map((m) => (
            <a key={m.url} href={m.url} target="_blank" rel="noreferrer noopener" className="group">
              <Card className="h-full overflow-hidden pt-0 transition-shadow group-hover:shadow-md">
                <Thumb src={m.image} alt={`Imagem da matéria do ${m.outlet}`} />
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

        <h3 className="mb-4 mt-14 text-lg font-semibold">Mais na imprensa</h3>
        <ul className="divide-y rounded-xl border bg-card">
          {site.pressMore.map((m) => (
            <li key={m.url}>
              <a
                href={m.url}
                target="_blank"
                rel="noreferrer noopener"
                className="flex items-start justify-between gap-4 px-5 py-3 text-sm transition-colors hover:bg-muted"
              >
                <span>
                  <span className="font-semibold text-primary">{m.outlet}</span>
                  <span className="text-muted-foreground"> · {m.title}</span>
                </span>
                <ArrowUpRight className="mt-0.5 size-4 shrink-0 text-muted-foreground" />
              </a>
            </li>
          ))}
        </ul>

        <h3 className="mb-4 mt-10 text-lg font-semibold">No Instagram</h3>
        <div className="flex flex-wrap gap-3">
          {site.instagramPosts.map((p) => (
            <LinkButton key={p.url} variant="outline" href={p.url} target="_blank" rel="noreferrer noopener">
              {p.label} <ArrowUpRight />
            </LinkButton>
          ))}
        </div>
      </div>
    </section>
  )
}
