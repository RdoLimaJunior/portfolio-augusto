import { useEffect } from "react"
import { ArrowLeft, ArrowUpRight, Download, MessageCircle, ShieldCheck } from "lucide-react"
import { LinkButton } from "@/components/ui/button"
import { press } from "@/data/press"
import { pressKit } from "@/data/press-kit"
import { site } from "@/data/site"
import { primaryContact, whatsappDisplay } from "@/lib/contact"

function formatDate(ym: string) {
  const [y, m] = ym.split("-").map(Number)
  return new Date(y, m - 1).toLocaleDateString("pt-BR", { month: "short", year: "numeric" }).replace(".", "")
}

export function PressKit() {
  const contact = primaryContact("imprensa")
  const coverage = press.filter((p) => p.type === "site").slice(0, 8)

  useEffect(() => {
    const prev = document.title
    document.title = `Para a imprensa · ${site.name}`
    window.scrollTo(0, 0)
    return () => {
      document.title = prev
    }
  }, [])

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b-4 border-amber-300 bg-indigo-950 text-white">
        <div className="mx-auto flex max-w-4xl items-center justify-between gap-4 px-4 py-4">
          <a href="/" className="inline-flex items-center gap-2 text-sm font-bold text-amber-300 no-underline hover:text-amber-200">
            <ArrowLeft className="size-4" /> Voltar ao site
          </a>
          <span className="text-sm font-semibold text-indigo-200">Para a imprensa</span>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-4 py-10 md:py-16">
        {/* Nota à imprensa */}
        <article>
          <p className="text-sm font-bold uppercase tracking-wide text-emerald-700">Nota à imprensa · {pressKit.dateline}</p>
          <h1 className="mt-3 text-3xl font-extrabold leading-tight tracking-tight md:text-5xl">{pressKit.headline}</h1>
          <p className="mt-6 text-xl leading-relaxed text-indigo-950/90">{pressKit.lead}</p>

          <div className="mt-6 space-y-4 text-lg leading-relaxed text-indigo-950/80">
            {pressKit.body.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>

          <blockquote className="mt-8 rounded-2xl border-l-8 border-amber-300 bg-amber-50 p-5 text-xl font-semibold leading-snug">
            “{pressKit.quote.text}”
            <footer className="mt-2 text-sm font-medium text-indigo-950/70">{pressKit.quote.by}</footer>
          </blockquote>
        </article>

        {/* Contato */}
        <section className="mt-12 rounded-3xl bg-emerald-600 p-6 text-white md:p-8">
          <h2 className="text-2xl font-extrabold">Contato de imprensa</h2>
          <p className="mt-2 text-lg text-white/95">
            Falamos direto com os responsáveis: WhatsApp <strong>{whatsappDisplay()}</strong>.
          </p>
          <LinkButton
            href={contact.href}
            target="_blank"
            rel="noreferrer noopener"
            size="lg"
            className="mt-5 h-12 w-full rounded-full bg-white px-6 text-base font-extrabold text-emerald-800 hover:bg-amber-100 sm:w-auto"
          >
            <MessageCircle /> {contact.label}
          </LinkButton>
        </section>

        {/* Fatos */}
        <section className="mt-12">
          <h2 className="mb-4 text-2xl font-extrabold">Fatos rápidos</h2>
          <dl className="divide-y rounded-2xl border bg-card">
            {pressKit.facts.map((f) => (
              <div key={f.label} className="grid gap-1 px-5 py-4 sm:grid-cols-[11rem_1fr] sm:gap-4">
                <dt className="font-bold text-indigo-950">{f.label}</dt>
                <dd className="text-indigo-950/80">{f.value}</dd>
              </div>
            ))}
          </dl>
        </section>

        {/* Biografias */}
        <section className="mt-12 grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border bg-card p-5">
            <h2 className="mb-2 text-lg font-extrabold">Biografia curta</h2>
            <p className="leading-relaxed text-indigo-950/80">{pressKit.bioShort}</p>
          </div>
          <div className="rounded-2xl border bg-card p-5">
            <h2 className="mb-2 text-lg font-extrabold">Biografia completa</h2>
            <p className="leading-relaxed text-indigo-950/80">{pressKit.bioLong}</p>
          </div>
        </section>

        {/* Fotos */}
        <section className="mt-12">
          <h2 className="mb-1 text-2xl font-extrabold">Fotos para baixar</h2>
          <p className="mb-5 text-indigo-950/70">Versões para web. Crédito obrigatório: “{pressKit.credit}”. Alta resolução sob pedido.</p>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4">
            {pressKit.photos.map((ph) => (
              <figure key={ph.src} className="overflow-hidden rounded-2xl border bg-card">
                <img src={ph.src} alt={ph.alt} loading="lazy" className="aspect-square w-full object-cover" />
                <figcaption className="p-3 text-sm">
                  <span className="block font-semibold leading-snug">{ph.label}</span>
                  <a
                    href={ph.src}
                    download
                    className="mt-2 inline-flex items-center gap-1.5 font-bold text-emerald-700 no-underline hover:text-emerald-900"
                  >
                    <Download className="size-4" /> Baixar
                  </a>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        {/* Regras */}
        <section className="mt-12 rounded-2xl border-2 border-amber-300 bg-amber-50 p-5 md:p-6">
          <h2 className="mb-3 flex items-center gap-2 text-xl font-extrabold">
            <ShieldCheck className="size-6 text-emerald-700" /> Regras de uso da imagem e do nome
          </h2>
          <ul className="list-disc space-y-2 pl-5 leading-relaxed text-indigo-950/90">
            {pressKit.rules.map((r) => (
              <li key={r}>{r}</li>
            ))}
          </ul>
        </section>

        {/* Cobertura */}
        <section className="mt-12">
          <h2 className="mb-4 text-2xl font-extrabold">Cobertura já publicada</h2>
          <ul className="divide-y rounded-2xl border bg-card">
            {coverage.map((c) => (
              <li key={c.url}>
                <a
                  href={c.url}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="flex items-start justify-between gap-4 px-5 py-3 no-underline transition-colors hover:bg-muted"
                >
                  <span>
                    <span className="font-bold text-emerald-700">{c.outlet}</span>
                    {c.date && <span className="text-sm text-indigo-950/60"> · {formatDate(c.date)}</span>}
                    <span className="block text-indigo-950/80">{c.title}</span>
                  </span>
                  <ArrowUpRight className="mt-1 size-4 shrink-0 text-indigo-950/50" />
                </a>
              </li>
            ))}
          </ul>
          <p className="mt-3 text-sm">
            <a href="/#midia" className="font-bold text-emerald-700">
              Ver todas as matérias, vídeos e publicações
            </a>
          </p>
        </section>
      </main>

      <footer className="bg-indigo-950 py-8 text-center text-xs text-indigo-300">
        © {new Date().getFullYear()} {site.name}
      </footer>
    </div>
  )
}
