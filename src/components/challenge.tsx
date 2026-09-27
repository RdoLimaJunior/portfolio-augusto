import { CalendarDays, Heart, MapPin, Plane, Sparkles, Star } from "lucide-react"
import { LinkButton } from "@/components/ui/button"
import { Reveal } from "@/components/reveal"
import { WorldMap, distanceKm } from "@/components/world-map"
import { site } from "@/data/site"

const tile = ["border-sky-400/70 bg-sky-400/10", "border-amber-300/70 bg-amber-300/10", "border-rose-400/70 bg-rose-400/10"]

function daysLeft(startsOn: string) {
  const [y, m, d] = startsOn.split("-").map(Number)
  return Math.ceil((new Date(y, m - 1, d).getTime() - Date.now()) / 86_400_000)
}

export function Challenge() {
  const c = site.challenge
  const { home, next } = site.mapPins
  const days = daysLeft(c.startsOn)
  const km = Math.round(distanceKm(home, next) / 100) * 100

  return (
    <section id="desafio" className="relative overflow-hidden bg-indigo-950 text-white">
      <div aria-hidden="true" className="bg-stars absolute inset-0 opacity-80" />
      <div aria-hidden="true" className="absolute -right-10 top-24 size-32 animate-float-slow rounded-full bg-gradient-to-br from-orange-300 to-rose-500 sm:size-44" />
      <div aria-hidden="true" className="absolute -left-8 bottom-32 size-20 animate-float rounded-full bg-gradient-to-br from-sky-300 to-indigo-500" />
      <Star aria-hidden="true" className="absolute left-[12%] top-28 size-5 animate-twinkle fill-amber-300 text-amber-300" />
      <Star aria-hidden="true" className="absolute right-[30%] top-16 size-4 animate-twinkle fill-white text-white [animation-delay:1s]" />
      <Sparkles aria-hidden="true" className="absolute bottom-24 left-[40%] size-6 animate-twinkle text-sky-300 [animation-delay:2s]" />
      <Plane aria-hidden="true" className="absolute left-0 top-10 size-9 animate-fly fill-amber-300 text-amber-300" />

      <div className="relative mx-auto max-w-5xl px-4 pb-16 pt-24 md:pb-24 md:pt-32">
        <Reveal>
          <p className="mb-4 inline-flex items-center gap-2 rounded-full bg-amber-300 px-4 py-1.5 text-sm font-extrabold text-indigo-950">
            <Plane className="size-4" /> {c.kicker}
          </p>
          <p className="text-xl font-semibold text-sky-200">{c.headline}</p>
          <h2 className="mt-1 text-4xl font-extrabold leading-[1.05] tracking-tight text-amber-300 sm:text-5xl md:text-6xl">{c.title}</h2>

          <div className="mt-6 flex flex-wrap gap-3 text-base font-bold">
            <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-indigo-950">
              <MapPin className="size-5 text-rose-500" /> {c.place}
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-indigo-950">
              <CalendarDays className="size-5 text-emerald-600" /> {c.date}
            </span>
            {days > 0 && (
              <span className="inline-flex rotate-2 animate-pop items-center rounded-full bg-rose-500 px-4 py-2 text-white">
                Faltam {days} {days === 1 ? "dia" : "dias"}!
              </span>
            )}
          </div>
        </Reveal>

        <Reveal delay={120}>
          <p className="mt-7 max-w-3xl text-lg leading-relaxed text-indigo-100">{c.text}</p>
        </Reveal>

        <Reveal delay={160}>
          <div className="mt-10 text-indigo-950">
            <p className="mb-3 text-lg font-extrabold text-white">
              Do Ceará ao Uzbequistão: <span className="text-amber-300">cerca de {km.toLocaleString("pt-BR")} km</span> de viagem
            </p>
            <WorldMap
              pins={[home, next]}
              arc={[home.id, next.id]}
              label="Mapa-múndi com a rota do Ceará, no Brasil, até Tashkent, no Uzbequistão"
              className="[&_li]:text-indigo-100"
            />
          </div>
        </Reveal>

        <div className="mt-10 grid grid-cols-3 gap-2 sm:gap-4">
          {c.stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 120}>
              <div className={`h-full rounded-2xl border-2 p-3 text-center sm:p-5 ${tile[i % tile.length]}`}>
                <div className="text-2xl font-extrabold text-white sm:text-4xl">{s.value}</div>
                <div className="mt-1 text-xs leading-snug text-indigo-100 sm:text-sm">{s.label}</div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
          <div className="mt-9">
            <LinkButton
              href="#contato"
              size="lg"
              className="h-14 w-full rounded-full bg-amber-300 px-8 text-lg font-extrabold text-indigo-950 shadow-lg transition-transform hover:-translate-y-0.5 hover:bg-amber-400 sm:w-auto"
            >
              <Heart className="fill-rose-500 text-rose-500" /> {c.cta}
            </LinkButton>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
