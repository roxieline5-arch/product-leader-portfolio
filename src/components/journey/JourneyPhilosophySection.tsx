import { motion, useReducedMotion } from 'framer-motion'
import { useI18n } from '../../i18n'

export function JourneyPhilosophySection() {
  const { copy } = useI18n()
  const reduceMotion = useReducedMotion()

  return (
    <section className="journey-philosophy" aria-labelledby="journey-philosophy-title">
      <div className="journey-philosophy-background" aria-hidden="true" />
      <motion.div
        className="journey-philosophy-content"
        initial={reduceMotion ? false : { opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      >
        <p><span aria-hidden="true" />{copy.journey.philosophy.label}<span aria-hidden="true" /></p>
        <h2 id="journey-philosophy-title">{copy.journey.philosophy.title}</h2>
      </motion.div>
    </section>
  )
}
