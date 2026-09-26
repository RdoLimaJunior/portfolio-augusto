import { Check } from "lucide-react"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { site } from "@/data/site"

function List({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h3 className="mb-3 font-semibold">{title}</h3>
      <ul className="space-y-2 text-muted-foreground">
        {items.map((i) => (
          <li key={i} className="flex gap-2">
            <Check className="mt-0.5 size-4 shrink-0 text-primary" /> {i}
          </li>
        ))}
      </ul>
    </div>
  )
}

export function Sponsor() {
  const { sponsorship: s } = site
  return (
    <section id="apoie" className="border-t bg-secondary/50">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <h2 className="mb-4 text-3xl font-bold tracking-tight">{s.title}</h2>
        <p className="mb-10 max-w-3xl text-lg text-muted-foreground">{s.intro}</p>

        <div className="mb-12 grid gap-6 md:grid-cols-3">
          {s.reasons.map((r) => (
            <Card key={r.title}>
              <CardHeader>
                <CardTitle>{r.title}</CardTitle>
                <CardDescription>{r.text}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>

        <div className="grid gap-10 md:grid-cols-2">
          <List title="O apoio ajuda com" items={s.funds} />
          <List title="O que sua empresa recebe" items={s.benefits} />
        </div>
      </div>
    </section>
  )
}
