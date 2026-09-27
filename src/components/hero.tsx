import { useState } from "react"
import { ArrowDown, Atom, FlaskConical, Medal, Rocket, Sparkles, Star } from "lucide-react"
import { LinkButton } from "@/components/ui/button"
import { site } from "@/data/site"

function Cover() {
  const [failed, setFailed] = useState(false)
  return (
    <div className="relative mx-auto max-w-5xl px-4 pt-6 md:pt-10">
      <div className="rotate-[-1.2deg] overflow-hidden rounded-[2rem] border-8 border-white bg-gradient-to-br from-emerald-200 to-amber-200 shadow-xl">
        <div className="aspect-[2/1]">
          {!failed && <img src={site.photo} alt={site.photoAlt} onError={() => setFailed(true)} className="size-full object-cover" />}
        </div>
      </div>
      <div className="absolute -bottom-5 right-6 flex rotate-3 animate-pop items-center gap-2 rounded-full bg-amber-300 px-4 py-2 text-sm font-extrabold text-indigo-950 shadow-lg md:right-12">
        <Medal className="size-5" /> Bronze · Houston 2026
      </div>
    </div>
  )
}

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-sky-300 via-sky-100 to-background pb-20 md:pb-28">
      <div aria-hidden="true" className="pointer-events-none absolute -right-14 -top-14 size-48 rounded-full bg-amber-300 sm:size-64" />
      <Star aria-hidden="true" className="absolute left-4 top-24 size-7 animate-float fill-amber-300 text-amber-400" />
      <Sparkles aria-hidden="true" className="absolute right-6 top-40 size-8 animate-float-slow text-rose-400" />
      <Atom aria-hidden="true" className="absolute left-3 top-[52%] hidden size-10 animate-spin-slow text-sky-600 sm:block" />
      <Rocket aria-hidden="true" className="absolute right-6 top-[46%] hidden size-9 animate-float text-rose-500 md:block" />
      <FlaskConical aria-hidden="true" className="absolute bottom-16 left-[8%] hidden size-9 animate-float-slow text-emerald-600 md:block" />

      <Cover />

      <div className="relative mx-auto max-w-2xl px-4 pt-12 text-center">
        <p className="mb-3 inline-block rounded-full bg-white/80 px-4 py-1 text-sm font-bold text-emerald-700 shadow-sm">
          Ciência · Olimpíadas · Ceará
        </p>
        <h1 className="text-5xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">
          Oi, eu sou o{" "}
          <span className="squiggle">
            <span className="bg-gradient-to-r from-emerald-600 to-sky-600 bg-clip-text text-transparent">{site.firstName}</span>
          </span>
          !{" "}
          <span className="inline-block origin-[70%_70%] animate-wiggle">👋</span>
        </h1>
        <p className="mt-5 text-lg leading-relaxed text-indigo-950/80">{site.tagline}</p>

        <div className="mt-7 flex justify-center">
          <LinkButton
            href="#desafio"
            size="lg"
            className="h-12 rounded-full bg-amber-300 px-7 text-base font-extrabold text-indigo-950 shadow-md transition-transform hover:-translate-y-0.5 hover:bg-amber-400"
          >
            Conheça minha história <ArrowDown />
          </LinkButton>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
          <span className="text-xs font-bold uppercase tracking-wide text-indigo-950/60">Na imprensa</span>
          {site.seenIn.map((o) => (
            <span key={o} className="rounded-full border-2 border-white bg-white/70 px-3 py-1 text-xs font-semibold">
              {o}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
