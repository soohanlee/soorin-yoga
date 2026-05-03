import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import BreathingOrb from '../components/BreathingOrb'

const words = ['inhale,', 'exhale,', 'be.']

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -220])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -120])
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -260])
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])

  return (
    <section
      id="hero"
      ref={ref}
      className="relative min-h-screen overflow-hidden"
      style={{ background: 'linear-gradient(155deg, #fdf6ee 0%, #f6c9a8 100%)' }}
    >
      <motion.div
        style={{ y: y1 }}
        className="absolute -top-32 -left-20 w-[26rem] h-[26rem] rounded-full bg-rose/40 blur-3xl"
      />
      <motion.div
        style={{ y: y2 }}
        className="absolute top-40 right-[-6rem] w-[30rem] h-[30rem] rounded-full bg-peach/60 blur-3xl"
      />
      <motion.div
        style={{ y: y3 }}
        className="absolute bottom-[-6rem] left-1/3 w-80 h-80 rounded-full bg-sage/40 blur-3xl"
      />

      <motion.div
        style={{ opacity }}
        className="relative z-10 px-6 sm:px-10 lg:px-20 pt-32 lg:pt-40 pb-24 max-w-7xl mx-auto grid lg:grid-cols-[1.2fr_1fr] gap-12 items-center min-h-screen"
      >
        <div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-[11px] uppercase tracking-[0.5em] text-cocoa/60 mb-8"
          >
            su rin · yoga · seoul
          </motion.div>

          <h1 className="font-serif text-6xl sm:text-7xl md:text-8xl lg:text-[8.5rem] leading-[1] text-cocoa">
            {words.map((w, i) => (
              <span
                key={i}
                className="inline-block overflow-hidden align-bottom mr-4 pb-2"
              >
                <motion.span
                  className="inline-block"
                  initial={{ y: '110%' }}
                  animate={{ y: 0 }}
                  transition={{
                    delay: 0.35 + i * 0.18,
                    duration: 0.95,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  {w}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="mt-8 max-w-md text-cocoa/75 leading-relaxed"
          >
            slow yoga in hannam-dong, seoul.
            <br />
            guided by su rin — one breath, one pose at a time.
          </motion.p>

          <motion.a
            href="#about"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.7 }}
            className="group mt-12 inline-flex items-center gap-4 text-cocoa text-[11px] uppercase tracking-[0.4em]"
          >
            <span>scroll &amp; breathe</span>
            <span className="block w-12 h-px bg-cocoa/40 transition-all duration-500 group-hover:w-24 group-hover:bg-cocoa" />
            <ArrowDown size={16} className="transition-transform group-hover:translate-y-1" />
          </motion.a>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center justify-center"
        >
          <BreathingOrb />
        </motion.div>
      </motion.div>
    </section>
  )
}
