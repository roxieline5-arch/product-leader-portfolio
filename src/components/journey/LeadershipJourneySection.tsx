import { motion, useReducedMotion } from 'framer-motion'
import timelineVisual from '../../assets/journey/journey-leadership-timeline.png'
import stage01Visual from '../../assets/journey/journey-stage01-technical-foundation.png'
import stage02Visual from '../../assets/journey/journey-stage02-product-practice.png'
import stage03Visual from '../../assets/journey/journey-stage03-digital-innovation.png'
import stage04Visual from '../../assets/journey/journey-stage04-product-leadership.png'
import { useI18n } from '../../i18n'

const stageVisuals = [stage01Visual, stage02Visual, stage03Visual, stage04Visual]

export function LeadershipJourneySection() {
  const { copy } = useI18n()
  const reduceMotion = useReducedMotion()
  const { leadership } = copy.journey

  return (
    <section className="leadership-journey" aria-labelledby="leadership-journey-title">
      <header className="leadership-journey-heading">
        <p><span aria-hidden="true" />{leadership.label}<span aria-hidden="true" /></p>
        <h2 id="leadership-journey-title">{leadership.title}</h2>
      </header>

      <div className="journey-stage-list">
        <img className="journey-timeline-spine" src={timelineVisual} alt="" />
        {leadership.stages.map((stage, index) => (
          <motion.article
            className="journey-stage"
            key={stage.number}
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.52, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="journey-stage-number" aria-hidden="true">{stage.number}</div>
            <div className="journey-stage-identity">
              <h3>{stage.name}</h3>
              <time>{stage.period}</time>
            </div>
            <p className="journey-stage-summary">{stage.summary}</p>
            <div className="journey-stage-capabilities">
              <h4>{leadership.capabilityLabel}</h4>
              <ul>
                {stage.capabilities.map((capability) => <li key={capability}>{capability}</li>)}
              </ul>
            </div>
            <div className="journey-stage-visual">
              <img src={stageVisuals[index]} alt="" />
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
