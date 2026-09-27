import { CalendarDays, Heart, MapPin, Plane } from "lucide-react"
import { LinkButton } from "@/components/ui/button"
import { site } from "@/data/site"

export function Challenge() {
  const c = site.challenge
  return (
    <section id="desafio" className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-5xl px-4 py-12 md:py-20">
        <p className="mb-3 inline-flex items-center gap-2 rounded-full bg-primary-foreground/15 px-3 py-1 text-sm font-medium">
          <Plane className="size-4" /> {c.kicker}
        </p>
        <p className="text-lg font-medium opacity-90">{c.headline}</p>
        <h2 className="mt-1 text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl">{c.title}</h2>

        <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-base font-medium">
          <span className="inline-flex items-center gap-2">
            <MapPin className="size-5" /> {c.place}
          </span>
          <span className="inline-flex items-center gap-2">
            <CalendarDays className="size-5" /> {c.date}
          </span>
        </div>

        <p className="mt-6 max-w-3xl text-lg leading-relaxed opacity-95">{c.text}</p>

        <div className="mt-8 grid grid-cols-3 gap-2 sm:gap-4">
          {c.stats.map((s) => (
            <div key={s.label} className="rounded-2xl bg-primary-foreground/10 p-3 text-center sm:p-5">
              <div className="text-2xl font-bold sm:text-4xl">{s.value}</div>
              <div className="mt-1 text-xs leading-snug opacity-90 sm:text-sm">{s.label}</div>
            </div>
          ))}
        </div>

        <div className="mt-8">
          <LinkButton href="#contato" variant="secondary" size="lg" className="h-12 w-full px-6 text-base sm:w-auto">
            <Heart /> {c.cta}
          </LinkButton>
        </div>
      </div>
    </section>
  )
}
