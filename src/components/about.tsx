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
          <h2 className="mb-4 text-3xl font-extrabold tracking-tight md:text-4xl">
            Sobre mim <span className="inline-block animate-wiggle">✨</span>
          </h2>
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
          <div className="mt-12 rounded-3xl border-4 border-sky-300 bg-sky-100 p-6 sm:p-8">
            <h3 className="mb-3 text-xl font-extrabold">{about.houstonTitle} 🚀</h3>
            <div className="max-w-2xl space-y-4 text-lg leading-relaxed text-indigo-950/80">
              {about.houston.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal>
          <h3 className="mb-4 mt-12 text-xl font-extrabold">Momentos 📸</h3>
          <PhotoWall photos={site.gallery} />
        </Reveal>
      </div>
    </section>
  )
}
