import { site } from "@/data/site"

export function Sponsor() {
  const { invite } = site
  return (
    <section id="apoie" className="border-t bg-secondary/50">
      <div className="mx-auto max-w-3xl px-4 py-14 md:py-20">
        <h2 className="mb-6 text-3xl font-bold tracking-tight">{invite.title}</h2>
        <div className="space-y-4 text-lg leading-relaxed text-muted-foreground">
          {invite.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
      </div>
    </section>
  )
}
