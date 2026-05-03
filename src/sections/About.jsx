import { motion } from 'framer-motion'
import SectionHeading from '../components/SectionHeading'

const stats = [
  { num: '8년', label: '의 수련' },
  { num: 'RYT', label: '500h+' },
  { num: '1,200+', label: '수강생' },
]

export default function About() {
  return (
    <section id="about" className="relative py-28 md:py-40 px-6 sm:px-10 lg:px-20 bg-cream">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        {/* portrait card */}
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="relative aspect-[3/4] rounded-[2.5rem] overflow-hidden shadow-[0_30px_80px_-20px_rgba(91,58,46,0.35)]"
            style={{ background: 'linear-gradient(160deg, #f6c9a8 0%, #e8a9a3 100%)' }}
          >
            <svg
              viewBox="0 0 300 400"
              className="absolute inset-0 w-full h-full"
              preserveAspectRatio="xMidYMid meet"
            >
              <defs>
                <linearGradient id="aboutSky" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#fdf6ee" stopOpacity="0.55" />
                  <stop offset="100%" stopColor="#f6c9a8" stopOpacity="0" />
                </linearGradient>
              </defs>
              <rect x="0" y="0" width="300" height="200" fill="url(#aboutSky)" />
              <g
                stroke="rgba(91,58,46,0.65)"
                strokeWidth="2.5"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {/* head */}
                <circle cx="150" cy="120" r="22" fill="rgba(91,58,46,0.18)" />
                {/* body seated meditation */}
                <path d="M150 142 C 150 200, 150 240, 150 280" />
                {/* arms in lap */}
                <path d="M150 200 C 110 220, 95 250, 110 270" />
                <path d="M150 200 C 190 220, 205 250, 190 270" />
                {/* crossed legs */}
                <path
                  d="M150 280 C 80 290, 70 310, 105 320 L 195 320 C 230 310, 220 290, 150 280 Z"
                  fill="rgba(91,58,46,0.12)"
                />
                <path d="M105 320 L 195 320" />
                {/* horizon line */}
                <path d="M30 360 L 270 360" stroke="rgba(91,58,46,0.25)" />
              </g>
            </svg>
          </motion.div>

          {/* "since '17" badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.7, rotate: -20 }}
            whileInView={{ opacity: 1, scale: 1, rotate: -8 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, type: 'spring', stiffness: 200, damping: 18 }}
            className="absolute -top-6 -left-4 sm:-left-6 w-28 h-28 rounded-full bg-cocoa text-cream flex items-center justify-center text-center shadow-lg"
          >
            <div>
              <div className="font-serif italic text-xl">since</div>
              <div className="font-serif text-3xl leading-none">'17</div>
            </div>
          </motion.div>

          {/* floating quote card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="absolute -bottom-10 -right-2 sm:-right-8 max-w-xs bg-cream border border-cocoa/10 rounded-2xl p-5 sm:p-6 shadow-xl"
          >
            <p className="font-serif italic text-cocoa text-lg sm:text-xl leading-snug">
              "잘하지 않아도 괜찮아요. 머무를 수만 있다면."
            </p>
            <div className="text-[10px] uppercase tracking-[0.3em] text-cocoa/50 mt-3">
              — su rin
            </div>
          </motion.div>
        </div>

        {/* text */}
        <div>
          <SectionHeading eyebrow="about" title={<span>안녕하세요,<br className="hidden sm:block" /> 정수린입니다.</span>} />
          <div className="space-y-5 text-cocoa/75 leading-relaxed">
            <p>
              회사를 다니다 번아웃을 만난 어느 봄, 처음 매트를 깔았어요. 그날의 한 시간이 지금까지
              이어져, 8년째 매일 같은 시간에 호흡합니다.
            </p>
            <p>
              인도 리시케시에서 RYT-200을 마치고, 인 요가와 회복 요가에 깊이 빠진 뒤 RYT-500까지
              이수했어요. 빠른 흐름보다는, 느림 속에서 자신을 듣는 시간을 좋아합니다.
            </p>
            <p>
              한남동의 작은 스튜디오에서, 천천히. 잘하려 애쓰지 않는 수업을 만들어가고 있습니다.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-3 sm:gap-4 mt-10">
            {stats.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="rounded-2xl bg-peach/30 border border-peach/50 p-4 sm:p-5 text-center"
              >
                <div className="font-serif text-2xl sm:text-3xl text-cocoa">{s.num}</div>
                <div className="text-[10px] sm:text-[11px] uppercase tracking-[0.25em] text-cocoa/60 mt-1.5">
                  {s.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
