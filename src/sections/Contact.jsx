import { motion } from 'framer-motion'
import { Instagram, Mail, MessageCircle, MapPin } from 'lucide-react'

const links = [
  { icon: Instagram, label: 'instagram', value: '@soorin.yoga', href: '#' },
  { icon: Mail, label: 'email', value: 'hello@soorin.yoga', href: 'mailto:hello@soorin.yoga' },
  { icon: MessageCircle, label: 'kakao', value: 'soorin_yoga', href: '#' },
  { icon: MapPin, label: 'studio', value: '한남동, 서울', href: '#' },
]

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative py-28 md:py-40 px-6 sm:px-10 lg:px-20 overflow-hidden"
      style={{
        background:
          'linear-gradient(180deg, #f6c9a8 0%, #e8a9a3 50%, #c98577 100%)',
      }}
    >
      {/* rising sun */}
      <motion.div
        initial={{ y: 240, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
        className="absolute left-1/2 -translate-x-1/2 bottom-[-22rem] sm:bottom-[-28rem] w-[44rem] h-[44rem] sm:w-[60rem] sm:h-[60rem] rounded-full pointer-events-none"
        style={{
          background:
            'radial-gradient(circle at 50% 30%, #fdf6ee 0%, #f6c9a8 35%, #e8a9a3 65%, rgba(232,169,163,0) 100%)',
        }}
      />

      <div className="relative max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[11px] uppercase tracking-[0.5em] text-cocoa/70"
        >
          contact · let's breathe together
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="font-serif text-5xl sm:text-7xl md:text-8xl text-cocoa mt-6 leading-none"
        >
          가까이서, <span className="italic">한 호흡.</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.25, duration: 0.8 }}
          className="mt-7 text-cocoa/80 max-w-md mx-auto leading-relaxed"
        >
          한남동 작은 스튜디오의 문은 늘 열려 있어요. 한 시간만 들러도, 좋습니다.
        </motion.p>

        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
          {links.map((l, i) => {
            const Icon = l.icon
            return (
              <motion.a
                key={l.label}
                href={l.href}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.08, duration: 0.7 }}
                whileHover={{ y: -8 }}
                className="group bg-cream/85 backdrop-blur border border-cream rounded-2xl p-5 sm:p-6 text-left shadow-sm hover:shadow-xl transition-shadow"
              >
                <Icon size={20} className="text-clay" />
                <div className="mt-4 text-[10px] uppercase tracking-[0.3em] text-cocoa/55">
                  {l.label}
                </div>
                <div className="font-serif text-xl sm:text-2xl text-cocoa mt-1 break-words">
                  {l.value}
                </div>
              </motion.a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
