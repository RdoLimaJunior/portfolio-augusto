import { site } from "@/data/site"

export function Footer() {
  return (
    <footer className="border-t bg-secondary/50">
      <div className="mx-auto max-w-3xl px-4 py-10">
        <h2 className="mb-3 text-sm font-semibold">Sobre este site</h2>
        <ul className="space-y-2 text-sm leading-relaxed text-muted-foreground">
          {site.privacy.map((p) => (
            <li key={p}>{p}</li>
          ))}
        </ul>
        <p className="mt-6 text-xs text-muted-foreground">© {new Date().getFullYear()} {site.name}</p>
      </div>
    </footer>
  )
}
