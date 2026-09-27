export type Photo = {
  src: string
  alt: string
  caption?: string
  /** altura ÷ largura da foto (ex.: retrato 3:4 = 1.33). Usado para equilibrar as colunas. */
  ratio?: number
  /** link opcional (ex.: a publicação original no Instagram) */
  href?: string
}

/** Reparte as fotos em colunas de alturas parecidas (as mais altas primeiro, sempre na coluna mais baixa). */
function balance(photos: Photo[], columns: number) {
  const cols: { items: Photo[]; height: number }[] = Array.from({ length: columns }, () => ({ items: [], height: 0 }))
  const order = photos.map((p, i) => ({ p, i })).sort((a, b) => (b.p.ratio ?? 1.25) - (a.p.ratio ?? 1.25))
  for (const { p } of order) {
    const shortest = cols.reduce((min, c) => (c.height < min.height ? c : min), cols[0])
    shortest.items.push(p)
    shortest.height += p.ratio ?? 1.25
  }
  // dentro de cada coluna, volta à ordem original
  return cols.map((c) => c.items.sort((a, b) => photos.indexOf(a) - photos.indexOf(b)))
}

function Tile({ photo }: { photo: Photo }) {
  const inner = (
    <div className="group relative overflow-hidden rounded-3xl bg-muted shadow-md ring-1 ring-black/5">
      <img
        src={photo.src}
        alt={photo.alt}
        loading="lazy"
        className="block w-full object-cover transition-transform duration-500 group-hover:scale-105"
        style={photo.ratio ? { aspectRatio: `1 / ${photo.ratio}` } : undefined}
      />
      {photo.caption && (
        <>
          <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/55 to-transparent" />
          <span className="absolute bottom-3 left-3 right-3 text-sm font-bold leading-tight text-white drop-shadow sm:text-base">{photo.caption}</span>
        </>
      )}
    </div>
  )
  return photo.href ? (
    <a href={photo.href} target="_blank" rel="noreferrer noopener" className="block">
      {inner}
    </a>
  ) : (
    inner
  )
}

/**
 * Mural de fotos em colunas ("masonry"): cada foto mantém a proporção original, então ficam de tamanhos
 * diferentes, e as colunas terminam quase na mesma altura. A segunda coluna desce um pouco no computador.
 */
export function PhotoWall({ photos, columns = 2 }: { photos: Photo[]; columns?: number }) {
  const cols = balance(photos, columns)
  return (
    <div className="mx-auto flex max-w-3xl gap-3 sm:gap-5">
      {cols.map((items, c) => (
        <div key={c} className={`flex min-w-0 flex-1 flex-col gap-3 sm:gap-5 ${c % 2 === 1 ? "sm:mt-10" : ""}`}>
          {items.map((p) => (
            <Tile key={p.src} photo={p} />
          ))}
        </div>
      ))}
    </div>
  )
}
