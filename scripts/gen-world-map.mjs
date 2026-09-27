// Gera src/data/world-map.ts (paths SVG do mapa-múndi, projeção equiretangular recortada) a partir do Natural Earth 110m.
import { readFileSync, writeFileSync } from "node:fs"
import { feature } from "topojson-client"

const topo = JSON.parse(readFileSync("./node_modules/world-atlas/countries-110m.json", "utf8"))
const countries = feature(topo, topo.objects.countries).features

const W = 1000
const LAT_MAX = 83
const LAT_MIN = -57
const H = Math.round((W * (LAT_MAX - LAT_MIN)) / 360)

const px = (lon) => ((lon + 180) / 360) * W
const py = (lat) => ((LAT_MAX - lat) / (LAT_MAX - LAT_MIN)) * H

function ringToPath(ring) {
  let d = ""
  let lastX = null
  let lastY = null
  let count = 0
  for (const [lon, lat] of ring) {
    if (lat < LAT_MIN - 2) continue // Antártida fora do recorte
    const x = Math.round(px(lon) * 10) / 10
    const y = Math.round(py(lat) * 10) / 10
    if (lastX !== null && Math.abs(x - lastX) < 0.35 && Math.abs(y - lastY) < 0.35) continue
    d += (count === 0 ? "M" : "L") + x + " " + y
    lastX = x
    lastY = y
    count++
  }
  return count > 2 ? d + "Z" : ""
}

function geomToPath(g) {
  const polys = g.type === "Polygon" ? [g.coordinates] : g.type === "MultiPolygon" ? g.coordinates : []
  return polys.map((poly) => poly.map(ringToPath).join("")).join("")
}

const HIGHLIGHT = { "076": "brasil", "840": "eua", "860": "uzbequistao" }
let base = ""
const highlights = {}
for (const f of countries) {
  const d = geomToPath(f.geometry)
  const key = HIGHLIGHT[String(f.id).padStart(3, "0")]
  if (key) highlights[key] = (highlights[key] ?? "") + d
  else base += d
}

const out =
  `// GERADO por um script a partir do Natural Earth 110m (domínio público). Não editar à mão.\n` +
  `export const MAP = { width: ${W}, height: ${H}, latMax: ${LAT_MAX}, latMin: ${LAT_MIN} } as const\n\n` +
  `/** Converte [latitude, longitude] em porcentagem (0-100) sobre o mapa. */\n` +
  `export function project(lat: number, lon: number) {\n` +
  `  return { x: ((lon + 180) / 360) * 100, y: ((MAP.latMax - lat) / (MAP.latMax - MAP.latMin)) * 100 }\n` +
  `}\n\n` +
  `export const basePath = ${JSON.stringify(base)}\n\n` +
  `export const highlightPaths = ${JSON.stringify(highlights)} as const\n`

writeFileSync("C:/Projetos/portfolio-augusto/src/data/world-map.ts", out)
console.log("ok", { H, baseKB: Math.round(base.length / 1024), hl: Object.fromEntries(Object.entries(highlights).map(([k, v]) => [k, Math.round(v.length / 1024) + "KB"])) })
