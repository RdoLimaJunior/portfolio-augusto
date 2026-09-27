import { useState } from "react"
import { basePath, highlightPaths, MAP, project } from "@/data/world-map"

export type MapPin = {
  id: string
  label: string
  detail?: string
  lat: number
  lon: number
  emoji: string
  /** destaque pulsando (ex.: o próximo destino) */
  pulse?: boolean
}

/** Distância em km entre dois pontos (fórmula de Haversine). */
export function distanceKm(a: Pick<MapPin, "lat" | "lon">, b: Pick<MapPin, "lat" | "lon">) {
  const rad = (d: number) => (d * Math.PI) / 180
  const dLat = rad(b.lat - a.lat)
  const dLon = rad(b.lon - a.lon)
  const h = Math.sin(dLat / 2) ** 2 + Math.cos(rad(a.lat)) * Math.cos(rad(b.lat)) * Math.sin(dLon / 2) ** 2
  return 2 * 6371 * Math.asin(Math.sqrt(h))
}

/** Mapa-múndi ilustrado, guardado no próprio site, com pins de emoji. Toque/clique em um pin para ver o detalhe. */
export function WorldMap({
  pins,
  arc,
  label,
  className = "",
}: {
  pins: MapPin[]
  /** pares de ids de pins ligados por uma linha tracejada (voo) */
  arc?: [string, string]
  label: string
  className?: string
}) {
  const [active, setActive] = useState<string | null>(null)
  const byId = Object.fromEntries(pins.map((p) => [p.id, p]))
  const toSvg = (p: MapPin) => {
    const { x, y } = project(p.lat, p.lon)
    return { x: (x / 100) * MAP.width, y: (y / 100) * MAP.height }
  }

  let arcPath = ""
  if (arc && byId[arc[0]] && byId[arc[1]]) {
    const a = toSvg(byId[arc[0]])
    const b = toSvg(byId[arc[1]])
    const cx = (a.x + b.x) / 2
    const cy = Math.min(a.y, b.y) - Math.hypot(b.x - a.x, b.y - a.y) * 0.35
    arcPath = `M${a.x} ${a.y} Q${cx} ${cy} ${b.x} ${b.y}`
  }

  return (
    <div className={className}>
      <div
        className="relative w-full overflow-hidden rounded-3xl border-4 border-white bg-sky-200 shadow-lg"
        style={{ aspectRatio: `${MAP.width} / ${MAP.height}` }}
      >
        <svg viewBox={`0 0 ${MAP.width} ${MAP.height}`} role="img" aria-label={label} className="absolute inset-0 size-full">
          <path d={basePath} className="fill-emerald-200 stroke-white" strokeWidth={0.6} />
          <path d={highlightPaths.brasil} className="fill-emerald-500 stroke-white" strokeWidth={0.6} />
          <path d={highlightPaths.eua} className="fill-sky-400 stroke-white" strokeWidth={0.6} />
          <path d={highlightPaths.uzbequistao} className="fill-amber-400 stroke-white" strokeWidth={0.6} />
          {arcPath && <path d={arcPath} fill="none" strokeWidth={2.5} strokeLinecap="round" className="arc-dash stroke-rose-500" />}
        </svg>

        {pins.map((p) => {
          const { x, y } = project(p.lat, p.lon)
          const open = active === p.id
          return (
            <div key={p.id} className="absolute" style={{ left: `${x}%`, top: `${y}%`, zIndex: open ? 20 : 10 }}>
              <button
                type="button"
                aria-expanded={open}
                aria-label={`${p.label}${p.detail ? `: ${p.detail}` : ""}`}
                onClick={() => setActive(open ? null : p.id)}
                onBlur={() => setActive((cur) => (cur === p.id ? null : cur))}
                className={`absolute -translate-x-1/2 -translate-y-full text-2xl leading-none drop-shadow-md transition-transform hover:scale-125 focus-visible:scale-125 focus-visible:outline-none sm:text-3xl ${p.pulse ? "animate-pop" : ""}`}
              >
                <span className="flex size-9 items-center justify-center rounded-full border-2 border-white bg-white shadow-md sm:size-11">{p.emoji}</span>
                <span className="mx-auto block h-0 w-0 border-x-[6px] border-t-[8px] border-x-transparent border-t-white" />
              </button>
              {open && (
                <div
                  role="status"
                  className="absolute bottom-12 left-1/2 w-48 -translate-x-1/2 rounded-2xl bg-white p-3 text-left text-xs leading-snug text-indigo-950 shadow-xl sm:bottom-14 sm:w-56 sm:text-sm"
                >
                  <p className="font-extrabold">{p.label}</p>
                  {p.detail && <p className="mt-1 text-indigo-950/80">{p.detail}</p>}
                </div>
              )}
            </div>
          )
        })}
      </div>

      {/* Legenda em texto: funciona sem tocar e para leitores de tela */}
      <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-sm">
        {pins.map((p) => (
          <li key={p.id} className="inline-flex items-center gap-1.5">
            <span aria-hidden="true">{p.emoji}</span>
            <span className="font-semibold">{p.label}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
