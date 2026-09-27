import { Medal, Plane } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { site } from "@/data/site"

export function Olympiads() {
  const { challenge, highlight } = site
  return (
    <section id="olimpiadas" className="mx-auto max-w-5xl px-4 py-14 md:py-20">
      <h2 className="mb-6 text-3xl font-bold tracking-tight">Olimpíadas</h2>

      <Card className="mb-4 border-primary/30 bg-primary/5">
        <CardHeader>
          <div className="mb-2 flex size-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
            <Plane className="size-5" />
          </div>
          <p className="text-sm font-medium text-primary">O próximo desafio</p>
          <CardTitle className="text-xl">{challenge.title}</CardTitle>
          <CardDescription>
            {challenge.place} · {challenge.date}
          </CardDescription>
        </CardHeader>
        <CardContent className="max-w-3xl leading-relaxed text-muted-foreground">{challenge.text}</CardContent>
      </Card>

      <Card className="mb-10 border-amber-300 bg-amber-50 dark:bg-amber-950/20">
        <CardHeader>
          <div className="mb-2 flex size-10 items-center justify-center rounded-full bg-amber-200 text-amber-950">
            <Medal className="size-5" />
          </div>
          <CardTitle className="text-xl">{highlight.title}</CardTitle>
          <CardDescription>{highlight.place}</CardDescription>
        </CardHeader>
        <CardContent className="max-w-3xl leading-relaxed text-muted-foreground">{highlight.text}</CardContent>
      </Card>

      <h3 className="mb-4 text-lg font-semibold">{site.olympiadsTitle}</h3>
      <div className="grid gap-4 sm:grid-cols-2">
        {site.olympiads.map((o) => (
          <Card key={o.title}>
            <CardHeader>
              <CardTitle>{o.title}</CardTitle>
              <CardDescription>{o.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <Badge>{o.tag}</Badge>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
