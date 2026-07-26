import { useI18n } from '../i18n'

export function BeliefSection() {
  const { copy } = useI18n()
  const { belief } = copy.home
  return (
    <section className="belief" aria-labelledby="home-belief-title">
      <div className="belief-content">
        <p className="eyebrow">{belief.label}</p>
        <h2 id="home-belief-title">
          <span className="belief-intro">{belief.intro}</span>
          <span className="belief-pillars">
            <span className="belief-pillar">{belief.direction}</span>
            <i aria-hidden="true" />
            <span className="belief-pillar">{belief.system}</span>
            <i aria-hidden="true" />
            <span className="belief-pillar">{belief.value}</span>
          </span>
        </h2>
        <p className="belief-description">{belief.description}</p>
      </div>
    </section>
  )
}
