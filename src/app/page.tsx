import About from '@/components/About'
import Contact from '@/components/Contact'
import Experience from '@/components/Experience'
import { Hero } from '@/components/Hero'
import { Navbar } from '@/components/Navbar'
import Projects from '@/components/Projects'
import { StarsCanvas } from '@/components/StarsCanvas'
import Tech from '@/components/Tech'
import Testimonials from '@/components/Testimonials'

export default function Home() {
  return (
    <div className="relative z-0 bg-primary">
      <div className="bg-[url(../assets/herobg.png)] bg-cover bg-center bg-no-repeat">
        <Navbar />
        <Hero />
      </div>

      <About />
      <Experience />
      <Tech />
      <Projects />
      <Testimonials />
      <div className="relative z-0">
        <Contact />
        <StarsCanvas />
      </div>
    </div>
  )
}
