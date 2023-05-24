import { Hero } from '@/components/Hero'
import { Navbar } from '@/components/Navbar'

export default function Home() {
  return (
    <div className="relative z-0 bg-primary">
      <div className="bg-[url(../assets/herobg.png)] bg-cover bg-center bg-no-repeat">
        <Navbar />
        <Hero />
      </div>
    </div>
  )
}
