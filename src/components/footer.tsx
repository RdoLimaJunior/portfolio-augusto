import { ArrowRight, Camera, Download, FileText, ShieldCheck } from "lucide-react"
import { site } from "@/data/site"

const nav = [
  { href: "#desafio", label: "O desafio" },
  { href: "#sobre", label: "Sobre mim" },
  { href: "#olimpiadas", label: "Olimpíadas" },
  { href: "#midia", label: "Na imprensa" },
  { href: "#apoie", label: "Um convite" },
  { href: "#contato", label: "Contato" },
]

export function Footer() {
  return (
    <footer className="bg-indigo-950 text-indigo-100">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
        {/* Destaque: press release (primeiro no celular) */}
        <div className="order-first rounded-3xl bg-amber-300 p-6 text-indigo-950 shadow-lg sm:col-span-2 lg:order-none lg:col-span-1">
          <FileText className="mb-3 size-8" />
          <h2 className="text-xl font-extrabold leading-tight">Para a imprensa</h2>
          <p className="mt-2 text-sm leading-relaxed">Nota à imprensa (press release), fatos rápidos, biografia e fotos para baixar.</p>
          <a
            href="/imprensa"
            className="mt-5 inline-flex items-center gap-2 rounded-full bg-indigo-950 px-5 py-3 text-sm font-extrabold text-white no-underline transition-transform hover:-translate-y-0.5"
          >
            Ver o press release <ArrowRight className="size-4" />
          </a>
          <a href="/imprensa#fotos" className="mt-3 flex items-center gap-2 text-sm font-bold no-underline hover:underline">
            <Download className="size-4" /> Fotos para baixar
          </a>
        </div>

        {/* Marca */}
        <div>
          <p className="text-2xl font-extrabold text-white">{site.firstName}</p>
          <p className="mt-2 text-sm leading-relaxed">Estudante cearense, apaixonado por ciência e por olimpíadas. Rumo à Final Global do STEAM AHEAD 2026.</p>
          <a
            href={site.instagram}
            target="_blank"
            rel="noreferrer noopener"
            className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-amber-300 no-underline hover:text-amber-200"
          >
            <Camera className="size-4" /> @augustodpb
          </a>
        </div>

        {/* Navegação */}
        <nav aria-label="Rodapé">
          <h2 className="mb-3 text-sm font-extrabold uppercase tracking-wide text-white">Navegue</h2>
          <ul className="space-y-2 text-sm">
            {nav.map((n) => (
              <li key={n.href}>
                <a href={n.href} className="no-underline hover:text-amber-300">
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Sobre este site */}
        <div>
          <h2 className="mb-3 flex items-center gap-2 text-sm font-extrabold uppercase tracking-wide text-white">
            <ShieldCheck className="size-4 text-emerald-400" /> Sobre este site
          </h2>
          <ul className="space-y-2 text-xs leading-relaxed text-indigo-200">
            {site.privacy.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 py-5 text-center text-xs text-indigo-300">
        © {new Date().getFullYear()} {site.name}
      </div>
    </footer>
  )
}
