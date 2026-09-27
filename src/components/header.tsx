import { LinkButton } from "@/components/ui/button"
import { site } from "@/data/site"

const links = [
  { href: "#sobre", label: "Sobre" },
  { href: "#olimpiadas", label: "Olimpíadas" },
  { href: "#midia", label: "Na mídia" },
  { href: "#apoie", label: "Apoie" },
]

export function Header() {
  return (
    <header className="sticky top-0 z-20 border-b bg-background/90 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between gap-4 px-4">
        <a href="#" className="text-lg font-bold tracking-tight">
          {site.firstName}
        </a>
        <nav className="flex gap-4 overflow-x-auto text-sm text-muted-foreground md:gap-6">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="transition-colors hover:text-foreground">
              {l.label}
            </a>
          ))}
        </nav>
        <LinkButton size="sm" href="#contato" className="hidden md:inline-flex">
          Quero apoiar
        </LinkButton>
      </div>
    </header>
  )
}
