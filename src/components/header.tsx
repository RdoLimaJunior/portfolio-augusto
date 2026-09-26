import { site } from "@/data/site"

const links = [
  { href: "#sobre", label: "Sobre" },
  { href: "#olimpiadas", label: "Olimpíadas" },
  { href: "#midia", label: "Na mídia" },
  { href: "#apoie", label: "Apoie" },
]

export function Header() {
  return (
    <header className="sticky top-0 z-10 border-b bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        <a href="#" className="font-semibold tracking-tight">{site.firstName}</a>
        <nav className="flex gap-6 text-sm text-muted-foreground">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="transition-colors hover:text-foreground">{l.label}</a>
          ))}
        </nav>
      </div>
    </header>
  )
}
