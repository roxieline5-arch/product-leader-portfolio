import { motion, useReducedMotion } from 'framer-motion'
import { useI18n } from '../../i18n'

export function AILabCreationFrameworkSection() {
  const { copy } = useI18n()
  const reduceMotion = useReducedMotion()
  const { framework } = copy.aiLab

  return (
    <section className="ai-lab-framework" aria-labelledby="ai-creation-framework-title">
      <motion.div
        className="ai-lab-framework-panel"
        initial={reduceMotion ? false : { opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.58, ease: [0.22, 1, 0.36, 1] }}
      >
        <h2 id="ai-creation-framework-title" className="ai-lab-section-label">
          <span aria-hidden="true" />{framework.label}<span aria-hidden="true" />
        </h2>
        <ol className="ai-creation-stages">
          {framework.stages.map((stage) => (
            <li key={stage.number}>
              <header>
                <span>{stage.number}</span>
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
