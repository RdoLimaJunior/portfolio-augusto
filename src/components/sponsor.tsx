import { Check, ChevronDown } from "lucide-react"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { site } from "@/data/site"

export function Sponsor() {
  const { sponsorship: s } = site
  return (
    <section id="apoie" className="border-t bg-secondary/50">
      <div className="mx-auto max-w-5xl px-4 py-14 md:py-20">
        <h2 className="mb-3 text-3xl font-bold tracking-tight">{s.title}</h2>
        <p className="mb-10 max-w-3xl text-lg leading-relaxed text-muted-foreground">{s.intro}</p>

        <h3 className="mb-4 text-xl font-semibold">Por que apoiar</h3>
        <div className="mb-12 grid gap-4 md:grid-cols-3">
          {s.reasons.map((r) => (
            <Card key={r.title}>
              <CardHeader>
                <CardTitle className="text-base">{r.title}</CardTitle>
                <CardDescription className="text-sm leading-relaxed">{r.text}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>

        <h3 className="mb-4 text-xl font-semibold">Como sua empresa pode ajudar</h3>
        <div className="mb-12 grid gap-4 md:grid-cols-3">
          {s.ways.map((w) => (
            <div key={w.title} className="rounded-2xl border bg-card p-5">
              <p className="font-semibold text-primary">{w.title}</p>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{w.text}</p>
            </div>
          ))}
        </div>

        <div className="mb-12 rounded-2xl bg-primary/10 p-6">
          <h3 className="mb-4 text-xl font-semibold">O que sua empresa recebe</h3>
          <ul className="grid gap-3 sm:grid-cols-2">
            {s.benefits.map((b) => (
              <li key={b} className="flex gap-3 leading-snug">
                <Check className="mt-0.5 size-5 shrink-0 text-primary" /> {b}
              </li>
            ))}
          </ul>
        </div>

        <h3 className="mb-4 text-xl font-semibold">Como funciona</h3>
        <ol className="mb-12 grid gap-4 md:grid-cols-3">
          {s.steps.map((st, i) => (
            <li key={st.title} className="flex gap-4 rounded-2xl border bg-card p-5">
              <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-primary font-bold text-primary-foreground">
                {i + 1}
              </span>
              <div>
                <p className="font-semibold">{st.title}</p>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{st.text}</p>
              </div>
            </li>
          ))}
        </ol>

        <h3 className="mb-4 text-xl font-semibold">Perguntas frequentes</h3>
        <div className="divide-y rounded-2xl border bg-card">
          {s.faq.map((f) => (
            <details key={f.q} className="group px-5 py-4">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-medium [&::-webkit-details-marker]:hidden">
                {f.q}
                <ChevronDown className="size-5 shrink-0 text-muted-foreground transition-transform group-open:rotate-180" />
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
