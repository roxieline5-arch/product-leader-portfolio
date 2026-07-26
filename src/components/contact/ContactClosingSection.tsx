import { motion, useReducedMotion } from 'framer-motion'
import { useI18n } from '../../i18n'

export function ContactClosingSection() {
  const { copy } = useI18n()
  const reduceMotion = useReducedMotion()
  const { closing } = copy.contact

  return (
    <section className="contact-closing" aria-labelledby="contact-closing-title">
      <motion.div
        className="contact-closing__content"
        initial={reduceMotion ? false : { opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      >
        <p>{closing.label}</p>
        <h2 id="contact-closing-title">
          <span>{closing.titleLead}</span>
          <strong>{closing.titleAccent}</strong>
        </h2>
      </motion.div>
    </section>
  )
}
