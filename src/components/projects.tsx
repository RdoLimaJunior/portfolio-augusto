import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { site } from "@/data/site"

export function Projects() {
  return (
    <section id="projetos" className="mx-auto max-w-5xl px-6 py-20">
      <h2 className="mb-8 text-2xl font-bold tracking-tight">Projetos</h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {site.projects.map((p) => (
          <Card key={p.title} className="transition-shadow hover:shadow-md">
            <div className="aspect-video rounded-t-xl bg-muted" />
            <CardHeader>
              <CardTitle>{p.title}</CardTitle>
              <CardDescription>{p.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <Badge>{p.tag}</Badge>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
