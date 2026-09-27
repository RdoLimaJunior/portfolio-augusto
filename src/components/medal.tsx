import { Medal as MedalIcon } from "lucide-react"

/** Medalha de bronze desenhada com CSS. */
export function MedalBadge({ size = "md", className = "" }: { size?: "sm" | "md" | "lg"; className?: string }) {
  const box = { sm: "size-10", md: "size-14", lg: "size-24 sm:size-28" }[size]
  const icon = { sm: "size-5", md: "size-7", lg: "size-12 sm:size-14" }[size]
  return (
    <div
      aria-hidden="true"
      className={`relative flex shrink-0 items-center justify-center rounded-full border-4 border-orange-300 text-orange-950 shadow-lg ${box} ${className}`}
      style={{ background: "radial-gradient(circle at 30% 30%, #fed7aa, #ea9a5a 55%, #b45f2b)" }}
    >
      <MedalIcon className={icon} />
    </div>
  )
}
