import { ArrowRight, Camera, Download, FileText, MessageCircle, ShieldCheck } from "lucide-react"
import { LinkButton } from "@/components/ui/button"
import { primaryContact } from "@/lib/contact"
import { site } from "@/data/site"

const nav = [
  { href: "#desafio", label: "O desafio" },
  { href: "#sobre", label: "Sobre mim" },
  { href: "#olimpiadas", label: "Olimpíadas" },
  { href: "#midia", label: "Na imprensa" },
  { href: "#apoie", label: "Um convite" },
  { href: "#contato", label: "Contato" },
]

function Title({ children }: { children: React.ReactNode }) {
  return <h2 className="mb-3 text-sm font-extrabold uppercase tracking-wide text-white">{children}</h2>
}

export function Footer() {
  const help = primaryContact("apoio")
  return (
    <footer className="bg-indigo-950 text-indigo-100">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:grid-cols-2 md:grid-cols-4 md:gap-6 lg:gap-8">
        {/* 1. Quem é o Augusto + sobre este site (resumido) */}
        <div>
          <div className="flex items-center gap-3">
            <img
              src={site.avatar}
              alt={`Foto de ${site.firstName}`}
              loading="lazy"
              className="size-16 shrink-0 rounded-full object-cover ring-4 ring-amber-300"
            />
            <div>
              <p className="text-xl font-extrabold leading-tight text-white">{site.name}</p>
              <a
                href={site.instagram}
                target="_blank"
                rel="noreferrer noopener"
                className="mt-1 inline-flex items-center gap-1.5 text-sm font-bold text-amber-300 no-underline hover:text-amber-200"
              >
                <Camera className="size-4" /> @augustodpb
              </a>
            </div>
          </div>
          <p className="mt-4 text-sm leading-relaxed">Estudante cearense, apaixonado por ciência e por olimpíadas. Rumo à Final Global do STEAM AHEAD 2026.</p>
          <div className="mt-5 border-t border-white/10 pt-4">
            <p className="mb-2 flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wide text-emerald-300">
              <ShieldCheck className="size-4" /> Sobre este site
            </p>
            <ul className="space-y-1.5 text-xs leading-relaxed text-indigo-200">
              {site.privacy.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* 2. Destaque: press release */}
        <div className="rounded-3xl bg-amber-300 p-5 text-indigo-950 shadow-lg lg:p-6">
          <FileText className="mb-3 size-8" />
          <h2 className="text-xl font-extrabold leading-tight">Para a imprensa</h2>
          <p className="mt-2 text-sm leading-relaxed">Nota à imprensa (press release), fatos rápidos, biografia e fotos para baixar.</p>
          <a
            href="/imprensa"
            className="mt-5 inline-flex items-center gap-2 rounded-full bg-indigo-950 px-4 py-2.5 text-sm font-extrabold text-white no-underline transition-transform hover:-translate-y-0.5"
          >
            Ver o press release <ArrowRight className="size-4" />
          </a>
          <a href="/imprensa#fotos" className="mt-3 flex items-center gap-2 text-sm font-bold no-underline hover:underline">
            <Download className="size-4" /> Fotos para baixar
          </a>
        </div>

        {/* 3. Contato */}
        <div>
          <Title>Ajude o {site.firstName}</Title>
          <p className="mb-4 text-sm leading-relaxed">Quer ajudar a conquistar mais medalhas? Toque para iniciar uma conversa com a família.</p>
          <LinkButton
            href={help.href}
            target="_blank"
            rel="noreferrer noopener"
            className="h-10 rounded-full bg-emerald-500 px-4 text-sm font-extrabold text-white hover:bg-emerald-400"
          >
            <MessageCircle /> Quero ajudar
          </LinkButton>
        </div>

        {/* 4. Navegação (por último) */}
        <nav aria-label="Rodapé">
          <Title>Navegue</Title>
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
      </div>

      <div className="border-t border-white/10 py-5 text-center text-xs text-indigo-300">
        © {new Date().getFullYear()} {site.name}
      </div>
    </footer>
  )
}
