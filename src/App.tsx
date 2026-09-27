import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Marquee } from "@/components/marquee"
import { Challenge } from "@/components/challenge"
import { About } from "@/components/about"
import { Olympiads } from "@/components/olympiads"
import { Media } from "@/components/media"
import { Sponsor } from "@/components/sponsor"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { PressKit } from "@/pages/press-kit"

function Home() {
  return (
    <div className="min-h-screen overflow-x-clip">
      <Header />
      <main>
        <Hero />
        <Marquee />
        <Challenge />
        <About />
        <Olympiads />
        <Media />
        <Sponsor />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

/** Sem biblioteca de rotas: o site só tem duas páginas. O Vercel já devolve o index.html para /imprensa. */
export default function App() {
  const path = window.location.pathname.replace(/\/+$/, "")
  return path === "/imprensa" ? <PressKit /> : <Home />
}
