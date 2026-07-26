import { useI18n } from '../i18n'

export function CapabilitySection() {
  const { copy } = useI18n()
  const items = [copy.home.capability.item1, copy.home.capability.item2, copy.home.capability.item3]
  return <section className="capabilities" aria-label={copy.home.hero.label}><div className="capability-list">{items.map((item, index) => <article className="capability" key={item.title}><span>{String(index + 1).padStart(2, '0')}</span><div><h2>{item.title}</h2><p>{item.description}</p></div></article>)}</div></section>
}
