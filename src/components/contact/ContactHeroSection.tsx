import { motion, useReducedMotion } from 'framer-motion'
import collaborationGateway from '../../assets/contact/contact-hero-collaboration-gateway.png'
import { useI18n } from '../../i18n'

export function ContactHeroSection() {
  const { copy } = useI18n()
  const reduceMotion = useReducedMotion()
  const { hero } = copy.contact

  return (
    <section className="contact-hero" aria-labelledby="contact-title">
      <div className="contact-hero__inner">
        <motion.div
          className="contact-hero__copy"
          initial={reduceMotion ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="contact-kicker">{hero.label}</p>
          <h1 id="contact-title" className="contact-hero__title">
            <span>{hero.titleLead}</span>
            <strong>{hero.titleAccent}</strong>
          </h1>
          <p className="contact-hero__description">{hero.description}</p>
          <a className="contact-hero__cta" href={`mailto:${copy.contact.channels.items[0].value}`}>
            {hero.cta}<span aria-hidden="true">→</span>
          </a>
        </motion.div>

        <motion.div
          className="contact-hero__visual"
          initial={reduceMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: reduceMotion ? 0 : 0.12 }}
        >
          <img src={collaborationGateway} alt="" />
        </motion.div>
      </div>
    </section>
  )
}
