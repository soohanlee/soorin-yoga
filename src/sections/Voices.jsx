import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SectionHeading from '../components/SectionHeading'

const voices = [
  {
    name: '미진',
    role: '디자이너 · 1년차 수강생',
    quote:
      '잘하지 않아도 된다는 말이 처음엔 어색했어요. 이제는 그 말이 매트 위에서 가장 큰 위로예요.',
  },
  {
    name: '재훈',
    role: '개발자 · 6개월차',
    quote:
      '하루 종일 굳어 있던 어깨가 수업 30분 만에 풀려요. 무엇보다, 머리가 조용해집니다.',
  },
  {
    name: '소영',
    role: '한남동 이웃 · 2년차',
    quote:
      '동네에 이런 공간이 생겨서 정말 다행이에요. 수업 끝나고 마시는 차 한 잔이 한 주의 하이라이트.',
  },
  {
    name: '하늘',
    role: '대학원생 · 8개월차',
    quote:
      '논문에 시달리던 시기, 수린 선생님의 인 요가가 저를 잠들게 해줬어요. 진짜 잠.',
  },
]

export default function Voices() {
  const [i, setI] = useState(0)
  const v = voices[i]

  return (
    <section
      id="voices"
      className="relative py-28 md:py-40 px-6 sm:px-10 lg:px-20"
      style={{ background: 'linear-gradient(180deg, #fdf6ee 0%, #f4dfd4 100%)' }}
    >
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          eyebrow="voices"
          title="수강생의 목소리"
          subtitle="그분들의 호흡이, 우리 스튜디오의 호흡이에요."
        />

        <div className="grid lg:grid-cols-[1.5fr_1fr] gap-8 lg:gap-16 items-stretch">
          <div className="relative bg-cream rounded-[2rem] sm:rounded-[3rem] p-8 sm:p-12 md:p-16 border border-cocoa/8 min-h-[360px] flex flex-col justify-center overflow-hidden shadow-sm">
            <div className="absolute -top-12 -left-2 font-serif text-[14rem] sm:text-[20rem] leading-none text-clay/15 select-none pointer-events-none">
              “
            </div>
            <AnimatePresence mode="wait">
              <motion.div
                key={v.name}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -24 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="relative"
              >
                <p className="font-serif italic text-cocoa text-2xl sm:text-3xl md:text-4xl leading-snug">
                  {v.quote}
                </p>
                <div className="mt-8 flex items-center gap-4">
                  <div className="w-10 h-px bg-clay" />
                  <div>
                    <div className="font-serif text-xl text-cocoa">{v.name}</div>
                    <div className="text-[10px] uppercase tracking-[0.3em] text-cocoa/60 mt-1">
                      {v.role}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <ul className="flex lg:flex-col gap-2 sm:gap-3 overflow-x-auto lg:overflow-visible no-scrollbar pb-2 lg:pb-0">
            {voices.map((vv, idx) => (
              <li key={vv.name} className="flex-1 lg:flex-initial min-w-[170px]">
                <button
                  onClick={() => setI(idx)}
                  className={`relative w-full text-left rounded-2xl p-4 sm:p-5 border transition-colors ${
                    i === idx
                      ? 'border-clay bg-cream'
                      : 'border-cocoa/10 bg-cream/60 hover:bg-cream'
                  }`}
                >
                  {i === idx && (
                    <motion.span
                      layoutId="voice-ring"
                      className="absolute inset-0 rounded-2xl ring-2 ring-clay pointer-events-none"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <div className="font-serif text-2xl text-cocoa">{vv.name}</div>
                  <div className="text-[10px] sm:text-[11px] uppercase tracking-[0.3em] text-cocoa/55 mt-1">
                    {vv.role}
                  </div>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
