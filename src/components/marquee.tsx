import { Star } from "lucide-react"
import { site } from "@/data/site"

/** Faixa inclinada com os assuntos favoritos, correndo sem parar. Fica entre duas seções. */
export function Marquee() {
  const words = [...site.interests, "Medalhas", "Olimpíadas"]
  const row = (key: string) => (
    <div key={key} className="flex shrink-0 items-center gap-6 pr-6" aria-hidden={key === "b"}>
      {words.map((w) => (
        <span key={w} className="flex items-center gap-6 text-lg font-extrabold uppercase tracking-wide">
          {w} <Star className="size-5 fill-indigo-950" />
        </span>
      ))}
    </div>
  )
  return (
    <div className="relative z-10 -my-4 overflow-hidden py-4">
      <div className="-rotate-2 scale-x-105 bg-amber-300 py-3 text-indigo-950 shadow-lg">
        <div className="flex w-max animate-marquee">
          {row("a")}
          {row("b")}
        </div>
      </div>
    </div>
  )
}
