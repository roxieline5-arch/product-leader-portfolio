import { motion, useReducedMotion } from 'framer-motion'
import case01Visual from '../../assets/cases/case01-business-digitalization.png'
import case02Visual from '../../assets/cases/case02-digital-asset-ecosystem.png'
import case03Visual from '../../assets/cases/case03-financial-infrastructure.png'
import { useI18n } from '../../i18n'

const caseVisuals = [case01Visual, case02Visual, case03Visual]

export function CaseArchive() {
  const { copy } = useI18n()
  const reduceMotion = useReducedMotion()

  return (
    <section className="case-archive" aria-label={copy.cases.archiveLabel}>
      {copy.cases.items.map((item, index) => (
        <motion.article
          className="case-row"
          key={item.number}
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="case-row-inner">
            <div className="case-number" aria-hidden="true">{item.number}</div>
            <div className="case-summary">
              <h2>{item.title}</h2>
              <p>{item.description}</p>
            </div>
            <dl className="case-meta">
              <div><dt>{copy.cases.meta.role}</dt><dd>{item.role}</dd></div>
              <div><dt>{copy.cases.meta.period}</dt><dd>{item.period}</dd></div>
              <div><dt>{copy.cases.meta.scope}</dt><dd>{item.scope}</dd></div>
            </dl>
            <div className="case-visual">
              <img src={caseVisuals[index]} alt="" />
            </div>
          </div>
        </motion.article>
      ))}
    </section>
  )
}
