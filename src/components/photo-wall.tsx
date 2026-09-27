export type Photo = {
  src: string
  alt: string
  caption?: string
  /** link opcional (ex.: a publicação original no Instagram) */
  href?: string
}

const tilt = ["-rotate-1", "rotate-1", "rotate-[0.6deg]", "-rotate-[0.8deg]"]

/**
 * Mural de fotos em colunas (estilo "masonry"): cada foto mantém a proporção original,
 * então ficam de tamanhos diferentes, como numa parede de polaroids.
 */
export function PhotoWall({ photos }: { photos: Photo[] }) {
  return (
    <div className="columns-2 gap-3 sm:columns-3 sm:gap-4">
      {photos.map((p, i) => {
        const img = (
          <img src={p.src} alt={p.alt} loading="lazy" className="w-full rounded-sm bg-muted object-cover" />
        )
        return (
          <figure
            key={p.src}
            className={`group mb-3 inline-block w-full break-inside-avoid rounded-md bg-white p-2 pb-3 shadow-md transition-transform duration-300 hover:z-10 hover:scale-[1.03] hover:rotate-0 sm:mb-4 sm:p-3 ${tilt[i % tilt.length]}`}
          >
            {p.href ? (
              <a href={p.href} target="_blank" rel="noreferrer noopener">
                {img}
              </a>
            ) : (
              img
            )}
            {p.caption && <figcaption className="mt-2 text-center text-sm font-semibold text-indigo-950/80">{p.caption}</figcaption>}
          </figure>
        )
      })}
    </div>
  )
}
