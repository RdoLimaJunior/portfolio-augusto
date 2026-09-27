import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Stats } from "@/components/stats"
import { About } from "@/components/about"
import { Olympiads } from "@/components/olympiads"
import { Media } from "@/components/media"
import { Sponsor } from "@/components/sponsor"
import { Contact } from "@/components/contact"
import { StickyCta } from "@/components/sticky-cta"

export default function App() {
  return (
    <div className="min-h-screen pb-20 md:pb-0">
      <Header />
      <main>
        <Hero />
        <Stats />
        <About />
        <Olympiads />
        <Media />
        <Sponsor />
        <Contact />
      </main>
      <footer className="border-t py-8 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Augusto de Paula Bezerra
      </footer>
      <StickyCta />
    </div>
  )
}
