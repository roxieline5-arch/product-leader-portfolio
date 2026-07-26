import { motion, useReducedMotion } from 'framer-motion'
import { useI18n } from '../../i18n'

export function AILabPhilosophySection() {
  const { copy } = useI18n()
  const reduceMotion = useReducedMotion()
  const { philosophy } = copy.aiLab

  return (
    <section className="ai-lab-philosophy" aria-labelledby="ai-product-philosophy-title">
      <motion.div
        className="ai-lab-philosophy-content"
        initial={reduceMotion ? false : { opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      >
        <p>{philosophy.label}</p>
        <h2 id="ai-product-philosophy-title">
          <span>{philosophy.line1}</span>
          <strong>{philosophy.line2}</strong>
        </h2>
      </motion.div>
    </section>
  )
}
