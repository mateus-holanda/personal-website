import About from '@/components/About'
import Experience from '@/components/Experience'
import { Hero } from '@/components/Hero'
import { Navbar } from '@/components/Navbar'
import Tech from '@/components/Tech'
import Testimonials from '@/components/Testimonials'
import Work from '@/components/Work'

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
      <Work />
      <Testimonials />
    </div>
  )
}
