import { motion, useScroll, useSpring } from 'framer-motion'
import FloatingNav from './components/FloatingNav'
import CursorGlow from './components/CursorGlow'
import Footer from './components/Footer'
import Hero from './sections/Hero'
import About from './sections/About'
import Journey from './sections/Journey'
import Philosophy from './sections/Philosophy'
import Styles from './sections/Styles'
import Gallery from './sections/Gallery'
import Voices from './sections/Voices'
import Contact from './sections/Contact'
import useSnapScroll from './hooks/useSnapScroll'

export default function App() {
  useSnapScroll()
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 110,
    damping: 28,
    restDelta: 0.001,
  })

  return (
    <div className="bg-cream text-cocoa overflow-x-hidden">
      <motion.div
        aria-hidden
        className="fixed top-0 left-0 right-0 h-[3px] bg-clay z-50 origin-left"
        style={{ scaleX }}
      />
      <CursorGlow />
      <FloatingNav />

      <main>
        <Hero />
        <About />
        <Journey />
        <Philosophy />
        <Styles />
        <Gallery />
        <Voices />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}
