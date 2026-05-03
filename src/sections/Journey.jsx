import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import SectionHeading from '../components/SectionHeading'

const milestones = [
  {
    year: '2017',
    title: '첫 매트',
    body: '회사 점심시간, 동네 요가원 트라이얼. 그날 처음으로 호흡을 들었어요.',
  },
  {
    year: '2019',
    title: 'RYT-200',
    body: '인도 리시케시, 한 달의 수련. 갠지스 옆에서 매일 새벽 4시 30분.',
  },
  {
    year: '2021',
    title: '인 요가',
    body: '오래 머무는 자세. 결합조직과 마음의 결을 함께 풀어내는 시간.',
  },
  {
    year: '2023',
    title: 'RYT-500',
    body: '해부학과 명상을 다시. 가르치는 일은 결국 잘 듣는 일이라는 것.',
  },
  {
    year: '2024',
    title: '한남동 스튜디오',
    body: '내 매트와 너의 매트가 닿는 거리. 작은 공간을 열었어요.',
  },
  {
    year: 'now',
    title: '오늘도 호흡',
    body: '매일 같은 시간, 같은 매트. 익숙함 속에서 자라는 새로움.',
  },
]

export default function Journey() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 70%', 'end 60%'],
  })
  const lineH = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

  return (
    <section
      id="journey"
      ref={ref}
      className="relative py-28 md:py-40 px-6 sm:px-10 lg:px-20 bg-cream"
    >
      <div className="max-w-5xl mx-auto">
        <SectionHeading
          eyebrow="journey"
          title="2017 → now"
          subtitle="매트 위에서 자라온 이야기. 한 자세, 한 챕터씩."
          align="center"
        />

        <div className="relative mt-20">
          {/* base line */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-cocoa/12" />
          {/* progress line */}
          <motion.div
            className="absolute left-1/2 -translate-x-1/2 top-0 w-[3px] bg-clay rounded-full"
            style={{ height: lineH }}
          />

          <ul className="relative space-y-20 sm:space-y-28">
            {milestones.map((m, i) => {
              const left = i % 2 === 0
              return (
                <li
                  key={m.year}
                  className="relative grid grid-cols-2 gap-6 sm:gap-12 items-center"
                >
                  <motion.span
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ type: 'spring', stiffness: 280, damping: 18 }}
                    className="absolute left-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-cream border-[3px] border-clay z-10 shadow-sm"
                  />
                  <div
                    className={
                      left
                        ? 'pr-5 sm:pr-12 text-right'
                        : 'col-start-2 pl-5 sm:pl-12 text-left'
                    }
                  >
                    <motion.div
                      initial={{ opacity: 0, x: left ? -40 : 40 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, amount: 0.4 }}
                      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <div className="font-serif italic text-5xl sm:text-6xl text-clay leading-none">
                        {m.year}
                      </div>
                      <div className="mt-3 text-cocoa text-lg sm:text-xl font-medium">
                        {m.title}
                      </div>
                      <p className="mt-3 text-sm sm:text-base text-cocoa/70 leading-relaxed">
                        {m.body}
                      </p>
                    </motion.div>
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </section>
  )
}
