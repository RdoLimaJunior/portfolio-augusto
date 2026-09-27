import { ShieldCheck } from "lucide-react"
import { site } from "@/data/site"

export function Footer() {
  return (
    <footer className="bg-indigo-950 text-indigo-100">
      <div className="mx-auto max-w-3xl px-4 py-12">
        <h2 className="mb-4 flex items-center gap-2 text-base font-extrabold text-white">
          <ShieldCheck className="size-5 text-emerald-400" /> Sobre este site
        </h2>
        <ul className="space-y-2 text-sm leading-relaxed">
          {site.privacy.map((p) => (
            <li key={p}>{p}</li>
          ))}
        </ul>
        <p className="mt-8 text-xs text-indigo-300">
          © {new Date().getFullYear()} {site.name}
        </p>
      </div>
    </footer>
  )
}
