import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function CursorGlow() {
  const [enabled, setEnabled] = useState(false)
  const x = useMotionValue(-1000)
  const y = useMotionValue(-1000)
  const sx = useSpring(x, { stiffness: 80, damping: 18, mass: 0.6 })
  const sy = useSpring(y, { stiffness: 80, damping: 18, mass: 0.6 })

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 1024px) and (pointer: fine)')
    const update = () => setEnabled(mq.matches)
    update()
    mq.addEventListener?.('change', update)
    return () => mq.removeEventListener?.('change', update)
  }, [])

  useEffect(() => {
    if (!enabled) return
    const onMove = (e) => {
      x.set(e.clientX - 210)
      y.set(e.clientY - 210)
    }
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [enabled, x, y])

  if (!enabled) return null

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed top-0 left-0 w-[420px] h-[420px] rounded-full z-30"
      style={{
        x: sx,
        y: sy,
        background:
          'radial-gradient(circle, rgba(246,201,168,0.55) 0%, rgba(246,201,168,0.18) 45%, rgba(246,201,168,0) 70%)',
        mixBlendMode: 'multiply',
      }}
    />
  )
}
