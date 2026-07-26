import { motion, useReducedMotion } from 'framer-motion'
import creationEngineVisual from '../../assets/ai-lab/ai-lab-experiment-creation-engine.png'
import productStudioVisual from '../../assets/ai-lab/ai-lab-experiment-product-studio.png'
import workflowSystemVisual from '../../assets/ai-lab/ai-lab-experiment-workflow-system.png'
import { useI18n } from '../../i18n'

const experimentVisuals = [workflowSystemVisual, creationEngineVisual, productStudioVisual]

export function AILabExperimentsArchive() {
  const { copy } = useI18n()
  const reduceMotion = useReducedMotion()
  const { experiments } = copy.aiLab

  return (
    <section id="ai-experiments" className="ai-lab-experiments" aria-labelledby="ai-experiments-title">
      <h2 id="ai-experiments-title" className="ai-lab-section-label">
        <span aria-hidden="true" />{experiments.label}<span aria-hidden="true" />
      </h2>
      <div className="ai-experiment-archive">
        {experiments.items.map((experiment, index) => (
          <motion.article
            className="ai-experiment-entry"
            key={experiment.number}
            initial={reduceMotion ? false : { opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.5, delay: reduceMotion ? 0 : index * 0.06 }}
          >
            <img src={experimentVisuals[index]} alt="" />
            <div className="ai-experiment-copy">
              <span>{experiment.number}</span>
              <h3>{experiment.name}</h3>
              <p>{experiment.title}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
