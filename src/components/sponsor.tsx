import { Heart } from "lucide-react"
import { Reveal } from "@/components/reveal"
import { Wave } from "@/components/wave"
import { site } from "@/data/site"

export function Sponsor() {
  const { invite, family } = site
  return (
    <section id="apoie" className="relative bg-amber-300 text-indigo-950">
      <Wave flip className="absolute inset-x-0 top-0 text-sky-100" />
      <div className="relative mx-auto max-w-3xl px-4 pb-16 pt-20 md:pb-24 md:pt-28">
        <Reveal>
          <h2 className="mb-6 flex items-center gap-3 text-3xl font-extrabold tracking-tight md:text-4xl">
            {invite.title} <Heart className="size-8 animate-pop fill-rose-500 text-rose-500" />
          </h2>
          <div className="space-y-4 text-lg leading-relaxed">
            {invite.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </Reveal>
        <Reveal>
          <figure className="mx-auto mt-10 max-w-md rotate-1 rounded-md bg-white p-3 pb-4 shadow-xl">
            <img src={family.src} alt={family.alt} loading="lazy" className="w-full rounded-sm object-cover" />
            <figcaption className="mt-2 text-center text-sm font-bold">{family.caption}</figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  )
}
