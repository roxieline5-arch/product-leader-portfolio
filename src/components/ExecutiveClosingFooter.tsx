import { useI18n } from '../i18n'

export function ExecutiveClosingFooter() {
  const { copy } = useI18n()
  const { name, role, connect } = copy.executiveFooter

  return (
    <footer className="executive-closing-footer" aria-label={role}>
      <div className="executive-closing-footer__inner">
        <div className="executive-closing-footer__brand">
          <span>{name}</span>
          <small>{role}</small>
        </div>
        <div className="executive-closing-footer__signature" aria-hidden="true">
          <span />
        </div>
        <a className="executive-closing-footer__connect" href="mailto:hello@example.com">
          {connect}<span aria-hidden="true">→</span>
        </a>
      </div>
    </footer>
  )
}
