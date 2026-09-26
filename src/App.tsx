import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Olympiads } from "@/components/olympiads"
import { Media } from "@/components/media"
import { Contact } from "@/components/contact"

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Olympiads />
        <Media />
        <Contact />
      </main>
      <footer className="border-t py-8 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Augusto de Paula Bezerra
      </footer>
    </div>
  )
}
