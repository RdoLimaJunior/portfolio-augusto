import { press } from "@/data/press"

export function Stats() {
  const stats = [
    { value: "Bronze", label: "Copernicus Global Round 2026, em Houston" },
    { value: String(press.length), label: "matérias, vídeos e posts sobre a história" },
    { value: "2025", label: "destaques em olimpíadas de astronomia, inglês e mais" },
  ]
  return (
    <section className="mx-auto max-w-5xl px-4 pb-4">
      <div className="grid grid-cols-3 gap-2 rounded-2xl border bg-card p-3 shadow-sm sm:gap-4 sm:p-6">
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <div className="text-2xl font-bold text-primary sm:text-4xl">{s.value}</div>
            <div className="mt-1 text-[11px] leading-snug text-muted-foreground sm:text-sm">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
