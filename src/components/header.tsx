import { Medal } from "lucide-react"

const links = [
  { href: "#desafio", label: "Desafio" },
  { href: "#sobre", label: "Sobre", hideOnMobile: true },
  { href: "#olimpiadas", label: "Olimpíadas" },
  { href: "#midia", label: "Imprensa", hideOnMobile: true },
  { href: "#apoie", label: "Convite" },
]

export function Header() {
  return (
    <header className="sticky top-0 z-30 bg-background/90 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-5xl items-center gap-3 px-4">
        <a href="#" className="flex items-center gap-1.5 text-lg font-extrabold tracking-tight">
          <Medal className="size-5 text-orange-500" /> Augusto
        </a>
        <nav className="flex gap-0 overflow-x-auto text-sm font-semibold text-indigo-950/70 md:gap-3">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`whitespace-nowrap rounded-full px-2 py-1 no-underline transition-colors hover:bg-amber-200 hover:text-indigo-950 ${l.hideOnMobile ? "hidden sm:inline" : ""}`}
            >
              {l.label}
            </a>
          ))}
        </nav>
      </div>
      <div aria-hidden="true" className="h-1 bg-gradient-to-r from-emerald-500 via-amber-300 to-sky-500" />
    </header>
  )
}
