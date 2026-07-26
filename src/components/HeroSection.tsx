import { motion } from 'framer-motion'
import { useI18n } from '../i18n'
import heroVisual from '../assets/home/home-hero-product-intelligence-system.png'

export function HeroSection() {
  const { copy } = useI18n()
  const { hero } = copy.home
  const visualLabels = [
    { className: 'home-hero-label-insight', text: hero.insight },
    { className: 'home-hero-label-tech', text: hero.tech },
    { className: 'home-hero-label-ai', text: hero.ai },
    { className: 'home-hero-label-build', text: hero.build },
  ]

  return (
    <section id="home" className="hero">
      <div className="presentation-background hero-background" aria-hidden="true" />
      <div className="hero-inner">
        <motion.div
          className="hero-copy"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.65 }}
        >
          <p className="eyebrow">{hero.label}</p>
          <h1>{hero.title}</h1>
          <p className="statement">{hero.subtitle}</p>
          <p className="description">{hero.description}</p>
          <a className="home-hero-cta" href="/cases">
            {hero.cta}
            <span aria-hidden="true">→</span>
          </a>
        </motion.div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          aria-label={hero.system}
        >
          <div className="home-hero-visual-frame">
            <img src={heroVisual} alt="" />
            <span className="home-hero-label home-hero-label-system">{hero.system}</span>
            {visualLabels.map((label) => (
              <span className={`home-hero-label ${label.className}`} key={label.className}>
                {label.text}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
