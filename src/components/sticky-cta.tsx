import { useEffect, useState } from "react"
import { Heart } from "lucide-react"
import { LinkButton } from "@/components/ui/button"

/** Botão fixo no rodapé, só no celular. Aparece depois da primeira tela e some quando o contato está visível. */
export function StickyCta() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const update = () => {
      const contact = document.getElementById("contato")
      const contactVisible = contact ? contact.getBoundingClientRect().top < window.innerHeight - 80 : false
      setShow(window.scrollY > 500 && !contactVisible)
    }
    update()
    window.addEventListener("scroll", update, { passive: true })
    return () => window.removeEventListener("scroll", update)
  }, [])

  if (!show) return null
  return (
    <div className="fixed inset-x-0 bottom-0 z-20 border-t bg-background/95 p-3 backdrop-blur md:hidden">
      <LinkButton href="#contato" size="lg" className="h-12 w-full text-base">
        <Heart /> Quero apoiar o Augusto
      </LinkButton>
    </div>
  )
}
