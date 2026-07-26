import { motion, useReducedMotion } from 'framer-motion'
import aiInnovation from '../../assets/contact/contact-area-ai-product-innovation.png'
import digitalTransformation from '../../assets/contact/contact-area-digital-transformation.png'
import productLeadership from '../../assets/contact/contact-area-product-leadership.png'
import { useI18n } from '../../i18n'

const areaVisuals = [productLeadership, aiInnovation, digitalTransformation]

export function CollaborationAreasSection() {
  const { copy } = useI18n()
  const reduceMotion = useReducedMotion()
  const { collaborationAreas } = copy.contact

  return (
    <section className="collaboration-areas" aria-labelledby="collaboration-areas-title">
      <h2 id="collaboration-areas-title" className="contact-section-label">
        <span aria-hidden="true" />{collaborationAreas.label}<span aria-hidden="true" />
      </h2>
      <div className="collaboration-areas__inner">
        {collaborationAreas.items.map((area, index) => (
          <motion.article
            className="collaboration-area"
            key={area.number}
            initial={reduceMotion ? false : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.5, delay: reduceMotion ? 0 : index * 0.08 }}
          >
            <img src={areaVisuals[index]} alt="" />
            <div className="collaboration-area__copy">
              <span>{area.number}</span>
              <p>{area.name}</p>
              <h3>{area.title}</h3>
              <small>{area.description}</small>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
