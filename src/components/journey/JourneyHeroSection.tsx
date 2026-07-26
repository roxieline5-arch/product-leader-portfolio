import { motion, useReducedMotion } from 'framer-motion'
import heroVisual from '../../assets/journey/journey-hero-evolution-archive.png'
import { useI18n } from '../../i18n'

const stageIcons = ['</>', '◇', '✦', '♛']

export function JourneyHeroSection() {
  const { copy } = useI18n()
  const reduceMotion = useReducedMotion()
  const { hero } = copy.journey

  return (
    <section className="journey-hero" aria-labelledby="journey-title">
      <div className="journey-hero-inner">
        <motion.div
          className="journey-hero-copy"
          initial={reduceMotion ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="journey-kicker">{hero.label}</p>
          <h1 id="journey-title">{hero.title}</h1>
          <p className="journey-hero-description">{hero.description}</p>
          <span className="journey-short-rule" aria-hidden="true" />
        </motion.div>

        <motion.div
          className="journey-evolution"
          initial={reduceMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: reduceMotion ? 0 : 0.12 }}
        >
          <div className="journey-evolution-heading">
            <strong>{hero.archiveLabel}</strong>
            <span>{hero.archiveDescription}</span>
          </div>
          <div className="journey-evolution-canvas">
            <img src={heroVisual} alt="" />
            {hero.stages.map((stage, index) => (
              <div className={`evolution-stage evolution-stage-${index + 1}`} key={stage.number}>
                <i aria-hidden="true">{stageIcons[index]}</i>
                <div>
                  <span>{stage.number}</span>
                  <strong>{stage.name}</strong>
                  <small>{stage.description}</small>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
