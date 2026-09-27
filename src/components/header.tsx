import { site } from "@/data/site"

const links = [
  { href: "#sobre", label: "Sobre" },
  { href: "#olimpiadas", label: "Olimpíadas" },
  { href: "#midia", label: "Imprensa" },
  { href: "#apoie", label: "Convite" },
]

export function Header() {
  return (
    <header className="sticky top-0 z-20 border-b bg-background/90 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-5xl items-center gap-4 px-4">
        <a href="#" className="text-lg font-bold tracking-tight">
          {site.firstName}
        </a>
        <nav className="flex gap-3 overflow-x-auto text-sm text-muted-foreground md:gap-6">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="whitespace-nowrap no-underline transition-colors hover:text-foreground">
              {l.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
