import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const sections = [
  { id: 'hero', label: 'home' },
  { id: 'about', label: 'about' },
  { id: 'journey', label: 'journey' },
  { id: 'philosophy', label: 'philosophy' },
  { id: 'styles', label: 'styles' },
  { id: 'gallery', label: 'gallery' },
  { id: 'voices', label: 'voices' },
  { id: 'contact', label: 'contact' },
]

export default function FloatingNav() {
  const [active, setActive] = useState('hero')
  const [hovered, setHovered] = useState(null)

  useEffect(() => {
    const onScroll = () => {
      const mid = window.innerHeight / 2
      let current = 'hero'
      for (const s of sections) {
        const el = document.getElementById(s.id)
        if (!el) continue
        const r = el.getBoundingClientRect()
        if (r.top <= mid && r.bottom >= mid) {
          current = s.id
          break
        }
      }
      setActive(current)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      {/* desktop dot nav */}
      <nav className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden lg:block">
        <ul className="flex flex-col gap-5">
          {sections.map((s) => (
            <li
              key={s.id}
              className="relative flex items-center justify-end"
              onMouseEnter={() => setHovered(s.id)}
              onMouseLeave={() => setHovered(null)}
            >
              <AnimatePresence>
                {hovered === s.id && (
                  <motion.span
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 10 }}
                    transition={{ duration: 0.18 }}
                    className="absolute right-8 whitespace-nowrap text-[10px] uppercase tracking-[0.3em] text-cocoa/70 bg-cream/90 backdrop-blur px-3 py-1.5 rounded-full shadow-sm border border-cocoa/5"
                  >
                    {s.label}
                  </motion.span>
                )}
              </AnimatePresence>
              <a href={`#${s.id}`} className="relative block w-3 h-3" aria-label={s.label}>
                {active === s.id && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute -inset-1.5 rounded-full bg-clay/25"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <span
                  className={`relative block w-3 h-3 rounded-full transition-colors ${
                    active === s.id ? 'bg-clay' : 'bg-cocoa/30 group-hover:bg-cocoa/50'
                  }`}
                />
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* mobile pill nav */}
      <nav className="fixed top-3 left-1/2 -translate-x-1/2 z-40 lg:hidden no-scrollbar overflow-x-auto max-w-[92vw]">
        <ul className="flex gap-1 bg-cream/85 backdrop-blur-md border border-cocoa/10 rounded-full p-1 shadow-sm">
          {sections.map((s) => (
            <li key={s.id} className="relative">
              <a
                href={`#${s.id}`}
                className={`relative block px-3 py-1.5 text-[10px] uppercase tracking-[0.25em] rounded-full transition-colors ${
                  active === s.id ? 'text-cream' : 'text-cocoa/70'
                }`}
              >
                {active === s.id && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 bg-clay rounded-full"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative">{s.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  )
}
