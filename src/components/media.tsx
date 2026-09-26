import { useState } from "react"
import { ArrowUpRight } from "lucide-react"
import { LinkButton } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { press } from "@/data/press"
import { site } from "@/data/site"

function Thumb({ src, outlet }: { src?: string; outlet: string }) {
  const [failed, setFailed] = useState(false)
  if (!src || failed) {
    return (
      <div className="flex aspect-video items-center justify-center bg-muted px-4 text-center text-sm font-semibold text-muted-foreground">
        {outlet}
      </div>
    )
  }
  return (
    <img
      src={src}
      alt={`Imagem da matéria do ${outlet}`}
      loading="lazy"
      referrerPolicy="no-referrer"
      onError={() => setFailed(true)}
      className="aspect-video w-full object-cover"
    />
  )
}

function formatDate(ym: string) {
  const [y, m] = ym.split("-").map(Number)
  return new Date(y, m - 1).toLocaleDateString("pt-BR", { month: "short", year: "numeric" }).replace(".", "")
}

export function Media() {
  return (
    <section id="midia" className="border-t bg-secondary/50">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <h2 className="mb-2 text-2xl font-bold tracking-tight">Na mídia</h2>
        <p className="mb-8 text-muted-foreground">As matérias mais recentes sobre a trajetória do {site.firstName}:</p>

        <div className="px-10">
          <Carousel opts={{ align: "start" }}>
            <CarouselContent>
              {press.map((m) => (
                <CarouselItem key={m.url} className="basis-full sm:basis-1/2 lg:basis-1/3">
                  <a href={m.url} target="_blank" rel="noreferrer noopener" className="group block h-full">
                    <Card className="h-full overflow-hidden pt-0 transition-shadow group-hover:shadow-md">
                      <Thumb src={m.image} outlet={m.outlet} />
                      <CardHeader>
                        <CardDescription className="font-semibold text-primary">
                          {m.outlet}
                          {m.date && <span className="font-normal text-muted-foreground"> · {formatDate(m.date)}</span>}
                        </CardDescription>
                        <CardTitle className="leading-snug">{m.title}</CardTitle>
                        <span className="mt-2 inline-flex items-center gap-1 text-sm text-muted-foreground group-hover:text-foreground">
                          Ler matéria <ArrowUpRight className="size-4" />
                        </span>
                      </CardHeader>
                    </Card>
                  </a>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>

        <h3 className="mb-4 mt-14 text-lg font-semibold">No Instagram</h3>
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
