import { EyeOff, Lock, Newspaper, ShieldCheck, Users } from "lucide-react"
import { Reveal } from "@/components/reveal"
import { site } from "@/data/site"

const icons = [
  { Icon: Users, tone: "bg-sky-200 text-sky-900" },
  { Icon: EyeOff, tone: "bg-emerald-200 text-emerald-900" },
  { Icon: Lock, tone: "bg-amber-200 text-amber-900" },
  { Icon: Newspaper, tone: "bg-rose-200 text-rose-900" },
]

/** Transparência e cuidados com a criança, em linguagem simples. */
export function SiteNotes() {
  return (
    <section id="sobre-o-site" className="bg-emerald-50">
      <div className="mx-auto max-w-5xl px-4 py-14 md:py-20">
        <Reveal>
          <h2 className="mb-2 flex items-center gap-2 text-2xl font-extrabold tracking-tight md:text-3xl">
            <ShieldCheck className="size-7 text-emerald-600" /> Sobre este site
          </h2>
          <p className="mb-8 max-w-2xl text-indigo-950/70">Cuidados que a família tem com o Augusto e com quem visita.</p>
        </Reveal>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {site.privacy.map((item, i) => {
            const { Icon, tone } = icons[i % icons.length]
            return (
              <Reveal key={item.title} delay={i * 100}>
                <div className="h-full rounded-2xl border-2 border-white bg-white p-5 shadow-sm">
                  <span className={`mb-3 flex size-10 items-center justify-center rounded-full ${tone}`}>
                    <Icon className="size-5" />
                  </span>
                  <h3 className="font-extrabold">{item.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-indigo-950/75">{item.text}</p>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
