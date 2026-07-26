import { motion, useReducedMotion } from 'framer-motion'
import { useI18n } from '../../i18n'

export function ProductJudgmentProcessSection() {
  const { copy } = useI18n()
  const reduceMotion = useReducedMotion()
  const { process } = copy.productThinking

  return (
    <section className="thinking-process" aria-labelledby="judgment-process-title">
      <motion.div
        className="thinking-process-panel"
        initial={reduceMotion ? false : { opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <h2 id="judgment-process-title" className="thinking-process-label">
          <span aria-hidden="true" />{process.label}<span aria-hidden="true" />
        </h2>
        <ol className="thinking-process-stages">
          {process.stages.map((stage) => (
            <li key={stage.number}>
              <header>
                <span className="thinking-stage-number">{stage.number}</span>
                <strong>{stage.keyword}</strong>
                <h3>{stage.title}</h3>
              </header>
              <p>{stage.description}</p>
            </li>
          ))}
        </ol>
      </motion.div>
    </section>
  )
}
