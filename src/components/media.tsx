import { useEffect, useState } from "react"
import { ArrowUpRight, Newspaper, PlayCircle, Share2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel"
import { press, pressTypeLabels, type PressItem, type PressType } from "@/data/press"
import { site } from "@/data/site"

const typeIcon = { site: Newspaper, video: PlayCircle, social: Share2 } as const

function Thumb({ item }: { item: PressItem }) {
  const [failed, setFailed] = useState(false)
  const Icon = typeIcon[item.type]
  const hasImage = item.image && !failed
  return (
    <div className="relative aspect-video overflow-hidden bg-muted md:aspect-auto md:min-h-72">
      {hasImage ? (
        <img
          src={item.image}
          alt={`Imagem da matéria do ${item.outlet}`}
          loading="lazy"
          referrerPolicy="no-referrer"
          onError={() => setFailed(true)}
          className="absolute inset-0 size-full object-cover"
        />
      ) : (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 px-6 text-center text-muted-foreground">
          <Icon className="size-10" />
          <span className="font-semibold">{item.outlet}</span>
        </div>
      )}
    </div>
  )
}

function formatDate(ym: string) {
  const [y, m] = ym.split("-").map(Number)
  return new Date(y, m - 1).toLocaleDateString("pt-BR", { month: "long", year: "numeric" })
}

const cta: Record<PressType, string> = {
  site: "Ler matéria",
  video: "Assistir",
  social: "Ver publicação",
}

export function Media() {
  const [filter, setFilter] = useState<PressType | "all">("all")
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)

  const types = (Object.keys(pressTypeLabels) as PressType[]).filter((t) => press.some((p) => p.type === t))
  const items = filter === "all" ? press : press.filter((p) => p.type === filter)

  useEffect(() => {
    if (!api) return
    const update = () => setCurrent(api.selectedScrollSnap())
    update()
    api.on("select", update)
    return () => {
      api.off("select", update)
    }
  }, [api])

  return (
    <section id="midia" className="border-t bg-secondary/50">
      <div className="mx-auto max-w-5xl px-4 py-14 md:py-20">
        <h2 className="mb-2 text-3xl font-bold tracking-tight">Na mídia</h2>
        <p className="mb-6 text-muted-foreground">
          A trajetória do {site.firstName} em matérias, vídeos e redes sociais, das mais recentes às mais antigas.
        </p>

        <div className="mb-8 flex flex-wrap gap-2">
          <Button size="sm" variant={filter === "all" ? "default" : "outline"} onPress={() => setFilter("all")}>
            Tudo ({press.length})
          </Button>
          {types.map((t) => (
            <Button
              key={t}
              size="sm"
              variant={filter === t ? "default" : "outline"}
              onPress={() => setFilter(t)}
            >
              {pressTypeLabels[t]} ({press.filter((p) => p.type === t).length})
            </Button>
          ))}
        </div>

        <div className="px-0 md:px-14">
          <Carousel key={filter} setApi={setApi} opts={{ align: "start" }}>
            <CarouselContent>
              {items.map((m) => {
                const Icon = typeIcon[m.type]
                return (
                  <CarouselItem key={m.url} className="basis-full">
                    <a href={m.url} target="_blank" rel="noreferrer noopener" className="group block">
                      <Card className="grid gap-0 overflow-hidden py-0 transition-shadow group-hover:shadow-md md:grid-cols-2">
                        <Thumb item={m} />
                        <div className="flex flex-col justify-center gap-3 p-6 md:p-10">
                          <div className="flex flex-wrap items-center gap-2 text-sm">
                            <span className="inline-flex items-center gap-1.5 font-semibold text-primary">
                              <Icon className="size-4" /> {m.outlet}
                            </span>
                            {m.date && <span className="text-muted-foreground">· {formatDate(m.date)}</span>}
                          </div>
                          <h3 className="text-xl font-semibold leading-snug md:text-2xl">{m.title}</h3>
                          <span className="mt-2 inline-flex items-center gap-1 text-sm font-medium text-muted-foreground group-hover:text-foreground">
                            {cta[m.type]} <ArrowUpRight className="size-4" />
                          </span>
                        </div>
                      </Card>
                    </a>
                  </CarouselItem>
                )
              })}
            </CarouselContent>
            <CarouselPrevious className="hidden md:inline-flex" />
            <CarouselNext className="hidden md:inline-flex" />
          </Carousel>
        </div>

        <div className="mt-4 flex items-center justify-between md:justify-center md:gap-4">
          <Button size="sm" variant="outline" className="md:hidden" onPress={() => api?.scrollPrev()}>
            Anterior
          </Button>
          <span className="text-sm text-muted-foreground">
            {Math.min(current + 1, items.length)} de {items.length}
          </span>
          <Button size="sm" variant="outline" className="md:hidden" onPress={() => api?.scrollNext()}>
            Próxima
          </Button>
        </div>
      </div>
    </section>
  )
}
