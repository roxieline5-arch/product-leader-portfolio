import { motion, useReducedMotion } from 'framer-motion'
import heroVisual from '../../assets/ai-lab/ai-lab-hero-creation-intelligence.png'
import { useI18n } from '../../i18n'

export function AILabHeroSection() {
  const { copy } = useI18n()
  const reduceMotion = useReducedMotion()
  const { hero } = copy.aiLab
  const title = `${hero.titleLead} ${hero.titleBase}${hero.titleAccent}`

  return (
    <section className="ai-lab-hero" aria-labelledby="ai-lab-title">
      <div className="ai-lab-hero-inner">
        <motion.div
          className="ai-lab-hero-copy"
          initial={reduceMotion ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="ai-lab-kicker">{hero.label}</p>
          <h1 id="ai-lab-title" aria-label={title}>
            <span>{hero.titleLead}</span>
            <span>{hero.titleBase}<strong>{hero.titleAccent}</strong></span>
          </h1>
          <span className="ai-lab-short-rule" aria-hidden="true" />
          <p className="ai-lab-hero-description">{hero.description}</p>
          <a className="ai-lab-cta" href="#ai-experiments">
            {hero.cta}<span aria-hidden="true">→</span>
          </a>
        </motion.div>

        <motion.div
          className="ai-creation-space"
          initial={reduceMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: reduceMotion ? 0 : 0.12 }}
        >
          <div className="ai-creation-space-canvas">
            <img src={heroVisual} alt="" />
            {hero.signals.map((signal) => (
              <div className={`ai-creation-signal ai-creation-signal-${signal.key}`} key={signal.key}>
                <strong>{signal.label}</strong>
                <span>{signal.description}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
