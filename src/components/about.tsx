import { PhotoWall } from "@/components/photo-wall"
import { Reveal } from "@/components/reveal"
import { site } from "@/data/site"

const chip = [
  "bg-sky-200 text-sky-950",
  "bg-amber-200 text-amber-950",
  "bg-emerald-200 text-emerald-950",
  "bg-rose-200 text-rose-950",
  "bg-violet-200 text-violet-950",
  "bg-orange-200 text-orange-950",
  "bg-indigo-200 text-indigo-950",
]

export function About() {
  const { about } = site
  return (
    <section id="sobre" className="bg-dots">
      <div className="mx-auto max-w-5xl px-4 py-14 md:py-20">
        <Reveal>
          <h2 className="mb-4 text-3xl font-extrabold tracking-tight md:text-4xl">Sobre mim</h2>
          <p className="max-w-2xl text-lg leading-relaxed text-indigo-950/80">{about.intro}</p>
          <div className="mt-5 flex flex-wrap gap-2">
            {site.interests.map((i, n) => (
              <span key={i} className={`rounded-full px-4 py-1.5 text-sm font-bold shadow-sm ${chip[n % chip.length]}`}>
                {i}
              </span>
            ))}
          </div>
        </Reveal>

        <Reveal>
          <div className="mb-6 mt-14 text-center">
            <h3 className="text-2xl font-extrabold tracking-tight md:text-3xl">
              <span className="squiggle">Momentos</span>
            </h3>
            <p className="mt-2 text-indigo-950/70">Alguns cliques da minha jornada</p>
          </div>
          <PhotoWall photos={site.gallery} />
        </Reveal>
      </div>
    </section>
  )
}
