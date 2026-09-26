import { Medal } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { site } from "@/data/site"

export function Olympiads() {
  const { highlight } = site
  return (
    <section id="olimpiadas" className="mx-auto max-w-5xl px-6 py-20">
      <h2 className="mb-8 text-2xl font-bold tracking-tight">Olimpíadas</h2>

      <Card className="mb-6 border-primary/30 bg-primary/5">
        <CardHeader>
          <div className="mb-2 flex size-10 items-center justify-center rounded-full bg-accent text-accent-foreground">
            <Medal className="size-5" />
          </div>
          <CardTitle className="text-xl">{highlight.title}</CardTitle>
          <CardDescription>{highlight.place}</CardDescription>
        </CardHeader>
        <CardContent className="max-w-3xl text-muted-foreground">{highlight.text}</CardContent>
      </Card>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {site.olympiads.map((a) => (
          <Card key={a.title}>
            <CardHeader>
              <CardTitle>{a.title}</CardTitle>
              <CardDescription>{a.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <Badge>{a.tag}</Badge>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
