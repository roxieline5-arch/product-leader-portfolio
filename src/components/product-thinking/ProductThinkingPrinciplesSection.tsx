import { motion, useReducedMotion } from 'framer-motion'
import { useI18n } from '../../i18n'

export function ProductThinkingPrinciplesSection() {
  const { copy } = useI18n()
  const reduceMotion = useReducedMotion()
  const { principles } = copy.productThinking

  return (
    <section className="thinking-principles" aria-labelledby="product-principles-title">
      <motion.div
        className="thinking-principles-content"
        initial={reduceMotion ? false : { opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      >
        <p>{principles.label}</p>
        <h2 id="product-principles-title">
          <span>{principles.line1}</span>
          <span>{principles.line2}</span>
          <strong>{principles.line3}</strong>
        </h2>
      </motion.div>
    </section>
  )
}
