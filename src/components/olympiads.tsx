import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MedalBadge } from "@/components/medal"
import { Reveal } from "@/components/reveal"
import { WorldMap } from "@/components/world-map"
import { site } from "@/data/site"

const stripe = [
  "border-t-sky-400",
  "border-t-amber-400",
  "border-t-emerald-500",
  "border-t-rose-400",
  "border-t-violet-400",
  "border-t-orange-400",
  "border-t-indigo-400",
]
const tagColor = [
  "bg-sky-200 text-sky-950",
  "bg-amber-200 text-amber-950",
  "bg-emerald-200 text-emerald-950",
  "bg-rose-200 text-rose-950",
  "bg-violet-200 text-violet-950",
  "bg-orange-200 text-orange-950",
  "bg-indigo-200 text-indigo-950",
]

export function Olympiads() {
  const { highlight, mapPins } = site
  return (
    <section id="olimpiadas" className="bg-emerald-50 py-14 md:py-20">
      <div className="mx-auto max-w-5xl px-4">
        <Reveal>
          <h2 className="mb-2 text-3xl font-extrabold tracking-tight md:text-4xl">
            Olimpíadas <span className="inline-block animate-wiggle">🏅</span>
          </h2>
          <p className="mb-8 text-lg text-indigo-950/70">Meu quadro de medalhas e por onde já passei. Toque nos pins!</p>
        </Reveal>

        <Reveal>
          <WorldMap
            pins={[...mapPins.competed, mapPins.next]}
            label="Mapa-múndi com os lugares onde competi e o próximo destino, Tashkent"
            className="mb-10"
          />
        </Reveal>

        <Reveal>
          <Card className="mb-10 overflow-hidden rounded-3xl border-4 border-amber-300 bg-gradient-to-br from-amber-100 via-yellow-50 to-orange-100 shadow-lg">
            <div className="flex flex-col gap-5 p-6 sm:flex-row sm:items-center sm:p-8">
              <MedalBadge size="lg" className="animate-pop" />
              <div>
                <p className="text-sm font-extrabold uppercase tracking-wide text-orange-700">Destaque</p>
                <CardTitle className="mt-1 text-2xl leading-tight">{highlight.title}</CardTitle>
                <CardDescription className="mt-1 text-base font-semibold text-indigo-950/70">{highlight.place}</CardDescription>
                <p className="mt-3 max-w-2xl text-base leading-relaxed text-indigo-950/80">{highlight.text}</p>
              </div>
            </div>
          </Card>
        </Reveal>

        <Reveal>
          <h3 className="mb-4 text-xl font-extrabold">{site.olympiadsTitle}</h3>
        </Reveal>
        <div className="grid gap-4 sm:grid-cols-2">
          {site.olympiads.map((o, i) => (
            <Reveal key={o.title} delay={(i % 2) * 100}>
              <Card className={`h-full rounded-2xl border-2 border-t-8 bg-white transition-transform hover:-translate-y-1 hover:rotate-[0.5deg] ${stripe[i % stripe.length]}`}>
                <CardHeader className="flex-row items-start gap-3">
                  {(o as { medal?: boolean }).medal && <MedalBadge size="sm" />}
                  <div>
                    <CardTitle>{o.title}</CardTitle>
                    <CardDescription className="mt-1">{o.description}</CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <span className={`inline-block rounded-full px-3 py-1 text-xs font-bold ${tagColor[i % tagColor.length]}`}>{o.tag}</span>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
