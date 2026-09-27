import { Badge } from "@/components/ui/badge"
import { site } from "@/data/site"

export function About() {
  const { about } = site
  return (
    <section id="sobre" className="border-t bg-secondary/50">
      <div className="mx-auto max-w-5xl px-4 py-14 md:py-20">
        <h2 className="mb-4 text-3xl font-bold tracking-tight">Sobre mim</h2>
        <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">{about.intro}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {site.interests.map((i) => (
            <Badge key={i}>{i}</Badge>
          ))}
        </div>

        <h3 className="mb-3 mt-12 text-xl font-semibold">{about.houstonTitle}</h3>
        <div className="max-w-2xl space-y-4 text-lg leading-relaxed text-muted-foreground">
          {about.houston.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>

        <div className="-mx-4 mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-2 sm:mx-0 sm:grid sm:grid-cols-2 sm:overflow-visible lg:grid-cols-4 sm:px-0">
          {site.gallery.map((g) => (
            <figure key={g.src} className="w-[75%] shrink-0 snap-center sm:w-auto">
              <img src={g.src} alt={g.alt} loading="lazy" className="aspect-[3/4] w-full rounded-2xl object-cover shadow-sm" />
              <figcaption className="mt-2 text-sm text-muted-foreground">{g.caption}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
