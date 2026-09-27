import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Challenge } from "@/components/challenge"
import { About } from "@/components/about"
import { Olympiads } from "@/components/olympiads"
import { Media } from "@/components/media"
import { Sponsor } from "@/components/sponsor"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
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
