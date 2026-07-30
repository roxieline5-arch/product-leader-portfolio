import { useI18n, type Locale } from '../i18n'

type HeaderPage = 'home' | 'cases' | 'journey' | 'thinking' | 'aiLab' | 'contact'

export function Header({ activePage = 'home' }: { activePage?: HeaderPage }) {
  const { copy, locale, setLocale } = useI18n()
  const { home } = copy
  const baseUrl = import.meta.env.BASE_URL
  const nav = [
    { key: 'home' as const, label: home.nav.home, href: baseUrl },
    { key: 'cases' as const, label: home.nav.cases, href: `${baseUrl}cases` },
    { key: 'journey' as const, label: home.nav.journey, href: `${baseUrl}journey` },
    { key: 'thinking' as const, label: home.nav.thinking, href: `${baseUrl}thinking` },
    { key: 'aiLab' as const, label: home.nav.aiLab, href: `${baseUrl}ai-lab` },
    { key: 'contact' as const, label: home.nav.contact, href: `${baseUrl}contact` },
  ]

  return <header className="site-header"><a className="brand" href={baseUrl} aria-label={home.brand.name}><span>{home.brand.name}</span><small>{home.brand.role}</small></a><nav aria-label={home.nav.home}>{nav.map((item) => <a className={'key' in item && item.key === activePage ? 'active' : ''} href={item.href} key={item.label}>{item.label}</a>)}</nav><div className="language" aria-label={home.nav.language}><LanguageButton locale="zh" active={locale === 'zh'} setLocale={setLocale} label={home.languages.zh} /><i aria-hidden="true" /> <LanguageButton locale="en" active={locale === 'en'} setLocale={setLocale} label={home.languages.en} /></div></header>
}

function LanguageButton({ locale, active, setLocale, label }: { locale: Locale; active: boolean; setLocale: (locale: Locale) => void; label: string }) {
  return <button className={active ? 'active' : ''} onClick={() => setLocale(locale)}>{label}</button>
}
