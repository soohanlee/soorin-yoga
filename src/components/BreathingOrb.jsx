import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const phases = [
  { label: 'inhale', sub: '4s', duration: 4, scale: 1 },
  { label: 'hold', sub: '2s', duration: 2, scale: 1 },
  { label: 'exhale', sub: '6s', duration: 6, scale: 0.55 },
]

export default function BreathingOrb() {
  const [i, setI] = useState(0)
  const current = phases[i]

  useEffect(() => {
    const t = setTimeout(() => setI((p) => (p + 1) % phases.length), current.duration * 1000)
    return () => clearTimeout(t)
  }, [i, current.duration])

  return (
    <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 flex items-center justify-center select-none">
      <motion.div
        className="absolute inset-0 rounded-full"
        style={{
          background:
            'radial-gradient(circle, rgba(232,169,163,0.55) 0%, rgba(246,201,168,0.25) 55%, rgba(253,246,238,0) 100%)',
        }}
        initial={{ scale: 0.55 }}
        animate={{ scale: current.scale }}
        transition={{ duration: current.duration, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute rounded-full border border-clay/40"
        style={{ inset: '14%' }}
        initial={{ scale: 0.55 }}
        animate={{ scale: current.scale * 0.96 }}
        transition={{ duration: current.duration, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute rounded-full"
        style={{
          inset: '30%',
          background: 'linear-gradient(160deg, #f6c9a8 0%, #e8a9a3 100%)',
          boxShadow: '0 30px 80px -20px rgba(201,133,119,0.6)',
        }}
        initial={{ scale: 0.55 }}
        animate={{ scale: current.scale }}
        transition={{ duration: current.duration, ease: 'easeInOut' }}
      />
      <div className="relative z-10 text-center">
        <motion.div
          key={current.label}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="font-serif italic text-3xl sm:text-4xl text-cocoa"
        >
          {current.label}
        </motion.div>
        <div className="text-[10px] uppercase tracking-[0.4em] text-cocoa/55 mt-2">
          {current.sub}
        </div>
      </div>
    </div>
  )
}
