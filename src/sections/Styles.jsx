import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SectionHeading from '../components/SectionHeading'

const styles = [
  {
    key: 'vinyasa',
    name: 'Vinyasa Flow',
    kr: '비냐사 플로우',
    blurb: '호흡과 동작이 강물처럼 이어지는 75분.',
    body: '들숨에 한 자세, 날숨에 한 자세. 천천히 달궈진 몸이 호흡과 함께 흐릅니다. 활기를 찾고 싶은 아침에 좋아요.',
    grad: 'linear-gradient(160deg, #f6c9a8 0%, #e8a9a3 100%)',
    pose: (
      <g
        stroke="rgba(91,58,46,0.7)"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="150" cy="80" r="14" fill="rgba(91,58,46,0.2)" />
        <path d="M150 94 L 150 180" />
        <path d="M150 120 L 80 95" />
        <path d="M150 120 L 220 95" />
        <path d="M150 180 L 110 250" />
        <path d="M150 180 L 190 250" />
      </g>
    ),
  },
  {
    key: 'yin',
    name: 'Yin Yoga',
    kr: '인 요가',
    blurb: '한 자세에 3-5분, 깊이 머무는 수련.',
    body: '근육 너머의 결합조직과 마음의 결을 함께 풀어요. 잠들기 전, 몸의 긴장을 천천히 내려놓고 싶을 때.',
    grad: 'linear-gradient(160deg, #b6c2a4 0%, #c98577 100%)',
    pose: (
      <g
        stroke="rgba(91,58,46,0.7)"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="200" cy="170" r="14" fill="rgba(91,58,46,0.2)" />
        <path d="M200 184 C 170 200, 130 215, 90 220" />
        <path d="M70 235 L 240 235" />
        <path d="M200 170 C 215 145, 230 125, 240 100" />
      </g>
    ),
  },
  {
    key: 'restorative',
    name: 'Restorative',
    kr: '회복 요가',
    blurb: '볼스터와 블록에 기대어, 완전한 이완.',
    body: '도구의 도움을 받아 몸을 받치고, 신경계를 가라앉힙니다. 일주일이 길었던 날, 자기 자신에게 주는 선물.',
    grad: 'linear-gradient(160deg, #fdf6ee 0%, #f6c9a8 100%)',
    pose: (
      <g
        stroke="rgba(91,58,46,0.7)"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <ellipse cx="150" cy="195" rx="115" ry="18" fill="rgba(91,58,46,0.14)" />
        <circle cx="60" cy="180" r="14" fill="rgba(91,58,46,0.2)" />
        <path d="M74 180 L 240 180" />
        <path d="M60 195 C 90 220, 200 220, 250 195" />
      </g>
    ),
  },
  {
    key: 'pranayama',
    name: 'Pranayama',
    kr: '호흡 수련',
    blurb: '자세 없이, 오로지 호흡만.',
    body: '나디 쇼다나, 카팔라바티, 우자이. 호흡은 모든 자세의 시작이자 끝. 명상으로 들어가는 가장 짧은 길이에요.',
    grad: 'linear-gradient(160deg, #e8a9a3 0%, #c98577 100%)',
    pose: (
      <g
        stroke="rgba(91,58,46,0.7)"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="150" cy="110" r="16" fill="rgba(91,58,46,0.2)" />
        <path d="M150 126 L 150 220" />
        <path d="M150 165 C 110 175, 100 200, 110 220" />
        <path d="M150 165 C 190 175, 200 200, 190 220" />
        <path d="M85 245 C 110 235, 190 235, 215 245" fill="rgba(91,58,46,0.12)" />
        <circle cx="150" cy="60" r="22" stroke="rgba(91,58,46,0.35)" strokeDasharray="3 5" />
      </g>
    ),
  },
]

export default function Styles() {
  const [active, setActive] = useState(0)
  const s = styles[active]
  return (
    <section id="styles" className="py-28 md:py-40 px-6 sm:px-10 lg:px-20 bg-cream">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          eyebrow="styles"
          title="네 가지 결의 수업"
          subtitle="모두 한 호흡에서 시작합니다. 그날의 몸에 맞는 결을 골라보세요."
        />

        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-10 lg:gap-16">
          {/* menu */}
          <ul className="space-y-1">
            {styles.map((st, i) => (
              <li key={st.key}>
                <button
                  onClick={() => setActive(i)}
                  className="group relative w-full text-left py-5 sm:py-6 border-b border-cocoa/10"
                >
                  <div className="flex items-baseline justify-between gap-4">
                    <div>
                      <div
                        className={`font-serif text-3xl sm:text-5xl transition-colors duration-500 ${
                          active === i
                            ? 'text-clay'
                            : 'text-cocoa/55 group-hover:text-cocoa'
                        }`}
                      >
                        {st.name}
                      </div>
                      <div className="mt-1.5 text-[11px] uppercase tracking-[0.3em] text-cocoa/50">
                        {st.kr}
                      </div>
                    </div>
                    {active === i && (
                      <motion.span
                        layoutId="style-dot"
                        className="block w-3 h-3 rounded-full bg-clay shrink-0"
                      />
                    )}
                  </div>
                  {active === i && (
                    <motion.span
                      layoutId="style-bar"
                      className="absolute -bottom-px left-0 right-0 h-px bg-clay"
                    />
                  )}
                </button>
              </li>
            ))}
          </ul>

          {/* card */}
          <div
            className="relative aspect-[4/5] sm:aspect-[5/6] rounded-[2.5rem] overflow-hidden shadow-[0_30px_80px_-20px_rgba(91,58,46,0.35)]"
            style={{ background: s.grad, transition: 'background 700ms ease' }}
          >
            <AnimatePresence mode="wait">
              <motion.svg
                key={s.key}
                viewBox="0 0 300 300"
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0 w-full h-full p-12"
                preserveAspectRatio="xMidYMid meet"
              >
                {s.pose}
              </motion.svg>
            </AnimatePresence>

            <div className="absolute bottom-5 left-5 right-5 bg-cream/90 backdrop-blur-md rounded-2xl p-5 sm:p-6 border border-cream">
              <div className="text-[10px] uppercase tracking-[0.3em] text-clay">
                {s.kr}
              </div>
              <AnimatePresence mode="wait">
                <motion.div
                  key={s.key}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="font-serif text-cocoa text-xl sm:text-2xl mt-2 leading-snug">
                    {s.blurb}
                  </div>
                  <p className="text-sm text-cocoa/70 mt-3 leading-relaxed">{s.body}</p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
