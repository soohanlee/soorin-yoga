import { motion } from 'framer-motion'
import SectionHeading from '../components/SectionHeading'

const tiles = [
  {
    caption: 'morning practice',
    span: 'col-span-3 row-span-2',
    grad: 'linear-gradient(160deg, #f6c9a8 0%, #e8a9a3 100%)',
  },
  {
    caption: 'mat & sunlight',
    span: 'col-span-3 row-span-1',
    grad: 'linear-gradient(160deg, #fdf6ee 0%, #f6c9a8 100%)',
  },
  {
    caption: 'studio · hannam',
    span: 'col-span-3 row-span-1',
    grad: 'linear-gradient(160deg, #b6c2a4 0%, #c98577 100%)',
  },
  {
    caption: 'inhale',
    span: 'col-span-2 row-span-1',
    grad: 'linear-gradient(160deg, #e8a9a3 0%, #c98577 100%)',
  },
  {
    caption: 'long pause',
    span: 'col-span-2 row-span-1',
    grad: 'linear-gradient(160deg, #f6c9a8 0%, #b6c2a4 100%)',
  },
  {
    caption: 'after class',
    span: 'col-span-2 row-span-1',
    grad: 'linear-gradient(160deg, #c98577 0%, #5b3a2e 100%)',
  },
]

const poses = [
  // morning - mountain
  <g
    key="0"
    stroke="rgba(91,58,46,0.55)"
    strokeWidth="3"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="150" cy="60" r="14" fill="rgba(91,58,46,0.25)" />
    <path d="M150 74 L 150 200" />
    <path d="M150 110 L 150 80" />
    <path d="M150 200 L 130 270" />
    <path d="M150 200 L 170 270" />
    <line x1="40" y1="280" x2="260" y2="280" stroke="rgba(91,58,46,0.25)" />
  </g>,
  // mat & sunlight
  <g
    key="1"
    stroke="rgba(91,58,46,0.55)"
    strokeWidth="3"
    fill="none"
    strokeLinecap="round"
  >
    <circle cx="150" cy="180" r="50" fill="rgba(253,246,238,0.55)" />
    <line x1="40" y1="240" x2="260" y2="240" />
    <line x1="60" y1="100" x2="100" y2="100" stroke="rgba(91,58,46,0.3)" />
    <line x1="200" y1="100" x2="240" y2="100" stroke="rgba(91,58,46,0.3)" />
    <line x1="150" y1="80" x2="150" y2="100" stroke="rgba(91,58,46,0.3)" />
  </g>,
  // studio
  <g
    key="2"
    stroke="rgba(253,246,238,0.7)"
    strokeWidth="3"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="60" y="80" width="180" height="160" fill="rgba(253,246,238,0.18)" />
    <line x1="60" y1="200" x2="240" y2="200" />
    <ellipse cx="150" cy="220" rx="40" ry="6" fill="rgba(253,246,238,0.4)" />
    <line x1="100" y1="120" x2="100" y2="180" />
    <line x1="200" y1="120" x2="200" y2="180" />
  </g>,
  // inhale
  <g
    key="3"
    stroke="rgba(91,58,46,0.55)"
    strokeWidth="3"
    fill="none"
    strokeLinecap="round"
  >
    <circle cx="150" cy="150" r="80" fill="rgba(253,246,238,0.4)" />
    <circle cx="150" cy="150" r="50" />
    <circle cx="150" cy="150" r="20" fill="rgba(91,58,46,0.25)" />
  </g>,
  // long pause - reclined
  <g
    key="4"
    stroke="rgba(91,58,46,0.55)"
    strokeWidth="3"
    fill="none"
    strokeLinecap="round"
  >
    <ellipse cx="150" cy="200" rx="120" ry="14" fill="rgba(91,58,46,0.14)" />
    <circle cx="60" cy="190" r="14" fill="rgba(91,58,46,0.22)" />
    <path d="M74 190 L 250 190" />
    <line x1="40" y1="225" x2="260" y2="225" stroke="rgba(91,58,46,0.18)" />
  </g>,
  // after class - tea cup with steam
  <g
    key="5"
    stroke="rgba(253,246,238,0.85)"
    strokeWidth="3"
    fill="none"
    strokeLinecap="round"
  >
    <path d="M100 130 L 100 220 C 100 240, 200 240, 200 220 L 200 130 Z" fill="rgba(253,246,238,0.15)" />
    <path d="M200 150 C 230 150, 230 200, 200 200" />
    <path d="M120 100 C 125 90, 120 80, 130 75" />
    <path d="M150 100 C 155 90, 150 80, 160 75" />
    <path d="M180 100 C 185 90, 180 80, 190 75" />
  </g>,
]

export default function Gallery() {
  return (
    <section id="gallery" className="py-28 md:py-40 px-6 sm:px-10 lg:px-20 bg-cream">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          eyebrow="gallery"
          title="잠시의 풍경들"
          subtitle="매트 위, 매트 옆. 흘러간 한 호흡들의 기록."
        />

        <div className="grid grid-cols-6 auto-rows-[140px] sm:auto-rows-[180px] gap-3 sm:gap-4">
          {tiles.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: (i % 4) * 0.08, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ scale: 1.015 }}
              className={`relative rounded-2xl sm:rounded-3xl overflow-hidden ${t.span} group cursor-default shadow-sm`}
              style={{ background: t.grad }}
            >
              <svg
                viewBox="0 0 300 300"
                className="absolute inset-0 w-full h-full p-6 sm:p-8 transition-transform duration-700 ease-out group-hover:scale-110"
                preserveAspectRatio="xMidYMid meet"
              >
                {poses[i]}
              </svg>
              <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 text-[10px] sm:text-[11px] uppercase tracking-[0.3em] bg-cream/85 backdrop-blur px-2.5 py-1 rounded-full text-cocoa">
                {t.caption}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
