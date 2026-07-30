import { motion, useReducedMotion } from 'framer-motion'
import decisionLandscape from '../../assets/product-thinking/product-thinking-hero-decision-landscape.png'
import { useI18n } from '../../i18n'

export function ProductThinkingHeroSection() {
  const { copy } = useI18n()
  const reduceMotion = useReducedMotion()
  const { hero } = copy.productThinking

  return (
    <section className="thinking-hero" aria-labelledby="product-thinking-title">
      <div className="thinking-hero-inner">
        <motion.div
          className="thinking-hero-copy"
          initial={reduceMotion ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="thinking-kicker">{hero.label}</p>
          <h1 id="product-thinking-title">{hero.title}</h1>
          <span className="thinking-short-rule" aria-hidden="true" />
          <p className="thinking-hero-description">{hero.description}</p>
          <a className="thinking-cta" href={`${import.meta.env.BASE_URL}cases`}>
            {hero.cta}<span aria-hidden="true">→</span>
          </a>
        </motion.div>

        <motion.div
          className="decision-landscape"
          initial={reduceMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: reduceMotion ? 0 : 0.12 }}
        >
          <div className="decision-landscape-heading">
            <strong>{hero.archiveLabel}</strong>
            <span>{hero.archiveDescription}</span>
          </div>
          <div className="decision-landscape-canvas">
            <img src={decisionLandscape} alt="" />
            {hero.signals.map((signal) => (
              <div className={`decision-signal decision-signal-${signal.key}`} key={signal.key}>
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
