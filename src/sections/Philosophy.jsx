import { motion } from 'framer-motion'

const values = [
  {
    num: '01',
    title: '호흡이 먼저',
    body: '자세는 호흡이 머무는 그릇. 들숨과 날숨이 길어지면 자세는 자연히 따라옵니다.',
  },
  {
    num: '02',
    title: '몸의 정직함',
    body: '오늘의 몸은 어제의 몸이 아니에요. 매일 다시 인사하고, 다시 듣습니다.',
  },
  {
    num: '03',
    title: '느림의 용기',
    body: '빠르게 도달한 자세보다, 천천히 머문 자세가 더 깊이 새겨져요.',
  },
  {
    num: '04',
    title: '함께의 온도',
    body: '혼자의 수련도 좋지만, 곁의 호흡은 나의 호흡을 따뜻하게 만들어요.',
  },
]

export default function Philosophy() {
  return (
    <section
      id="philosophy"
      className="relative py-28 md:py-40 px-6 sm:px-10 lg:px-20 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #fdf6ee 0%, #ecf0e3 100%)' }}
    >
      <div className="absolute -top-16 left-2 sm:left-10 font-serif text-[18rem] sm:text-[28rem] leading-none text-clay/12 select-none pointer-events-none">
        “
      </div>
      <div className="absolute -bottom-32 right-2 sm:right-10 font-serif text-[18rem] sm:text-[28rem] leading-none text-clay/12 select-none pointer-events-none">
        ”
      </div>

      <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
        <div>
          <div className="text-[11px] uppercase tracking-[0.4em] text-clay mb-5">
            philosophy
          </div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif text-4xl sm:text-5xl md:text-6xl text-cocoa leading-[1.1]"
          >
            자세는 모양이 아니라
            <br />
            <span className="italic text-clay">자기와의 대화</span>예요
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.7 }}
            className="mt-8 max-w-md text-cocoa/70 leading-relaxed"
          >
            완벽한 정렬보다, 오늘의 내가 머물 수 있는 곳을 찾는 일. 우리가 매트 위에서
            만나려는 것은 자세의 모양이 아니라 자신의 호흡이에요.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
          {values.map((v, i) => (
            <motion.div
              key={v.num}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.08, duration: 0.7 }}
              whileHover={{ y: -8, rotate: i % 2 === 0 ? -1.5 : 1.5 }}
              className="bg-cream border border-cocoa/8 rounded-3xl p-6 sm:p-7 shadow-sm cursor-default transition-shadow hover:shadow-xl"
            >
              <div className="font-serif italic text-clay text-2xl">{v.num}</div>
              <div className="mt-3 text-cocoa font-medium text-lg">{v.title}</div>
              <p className="mt-3 text-sm text-cocoa/70 leading-relaxed">{v.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
