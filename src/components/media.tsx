import { site } from "@/data/site"

export function Media() {
  return (
    <section id="midia" className="border-t bg-secondary/50">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <h2 className="mb-2 text-2xl font-bold tracking-tight">Na mídia</h2>
        <p className="mb-6 text-muted-foreground">A história foi contada por estes veículos:</p>
        <ul className="flex flex-wrap gap-3">
          {site.media.map((m) => (
            <li key={m} className="rounded-full border bg-card px-4 py-2 text-sm font-medium">{m}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}
