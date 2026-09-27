/** Divisor ondulado entre seções. `className` define a cor (text-...) da onda. */
export function Wave({ className = "", flip = false }: { className?: string; flip?: boolean }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 1440 80"
      preserveAspectRatio="none"
      className={`block h-8 w-full sm:h-12 md:h-16 ${flip ? "rotate-180" : ""} ${className}`}
    >
      <path fill="currentColor" d="M0 40 C 180 90, 360 0, 540 40 S 900 90, 1080 40 S 1300 10, 1440 40 V80 H0 Z" />
    </svg>
  )
}
