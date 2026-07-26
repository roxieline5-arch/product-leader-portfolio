import { motion, useReducedMotion } from 'framer-motion'
import { useI18n } from '../../i18n'

export function CasesPhilosophySection() {
  const { copy } = useI18n()
  const reduceMotion = useReducedMotion()

  return (
    <section className="cases-philosophy" aria-labelledby="cases-philosophy-title">
      <motion.div
        className="cases-philosophy-content"
        initial={reduceMotion ? false : { opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      >
        <p className="cases-philosophy-label">{copy.cases.philosophy.label}</p>
        <h2 id="cases-philosophy-title">{copy.cases.philosophy.title}</h2>
        <span className="cases-short-rule" aria-hidden="true" />
      </motion.div>
    </section>
  )
}
