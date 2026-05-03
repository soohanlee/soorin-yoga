import { motion } from 'framer-motion'

export default function SectionHeading({ eyebrow, title, subtitle, align = 'left' }) {
  const a = align === 'center' ? 'text-center mx-auto' : ''
  return (
    <div className={`mb-12 sm:mb-16 ${align === 'center' ? 'text-center' : ''}`}>
      {eyebrow && (
        <motion.div
          initial={{ opacity: 0, y: 6 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          className="text-[11px] uppercase tracking-[0.4em] text-clay mb-4"
        >
          {eyebrow}
        </motion.div>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ delay: 0.05, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="font-serif text-4xl sm:text-5xl md:text-6xl text-cocoa leading-[1.05]"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ delay: 0.12, duration: 0.7 }}
          className={`mt-5 text-cocoa/70 max-w-xl leading-relaxed ${a}`}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  )
}
