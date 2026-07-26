import { motion, useReducedMotion } from 'framer-motion'
import archiveVisual from '../../assets/cases/cases-hero-leadership-archive.png'
import { useI18n } from '../../i18n'

export function CasesHeroSection() {
  const { copy } = useI18n()
  const reduceMotion = useReducedMotion()
  const { hero } = copy.cases

  return (
    <section className="cases-hero" aria-labelledby="cases-title">
      <div className="cases-hero-inner">
        <motion.div
          className="cases-hero-copy"
          initial={reduceMotion ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="cases-kicker">{hero.label}</p>
          <h1 id="cases-title">{hero.title}</h1>
          <p className="cases-hero-description">{hero.description}</p>
          <span className="cases-short-rule" aria-hidden="true" />
        </motion.div>

        <motion.div
          className="cases-hero-archive"
          initial={reduceMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: reduceMotion ? 0 : 0.12 }}
        >
          <p className="archive-label"><span aria-hidden="true" />{hero.archiveLabel}<span aria-hidden="true" /></p>
          <div className="archive-visual-wrap">
            <span className="archive-year archive-year-start">{hero.startYear}</span>
            <img src={archiveVisual} alt="" />
            <span className="archive-year archive-year-end">{hero.endYear}</span>
          </div>
          <ol className="archive-stages" aria-label={hero.archiveLabel}>
            {hero.stages.map((stage) => (
              <li key={stage.name}>
                <strong>{stage.name}</strong>
                <span>{stage.description}</span>
              </li>
            ))}
          </ol>
        </motion.div>
      </div>
    </section>
  )
}
