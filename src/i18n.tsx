import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from 'react'
import zh from './locales/zh.json'
import en from './locales/en.json'

export type Locale = 'zh' | 'en'
type Dictionary = typeof zh
type I18nValue = { locale: Locale; setLocale: (locale: Locale) => void; copy: Dictionary }
const I18nContext = createContext<I18nValue | null>(null)
const LOCALE_STORAGE_KEY = 'jing-dong-home-locale'

function getStoredLocale(): Locale {
  if (typeof window === 'undefined') return 'zh'
  return window.localStorage.getItem(LOCALE_STORAGE_KEY) === 'en' ? 'en' : 'zh'
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(getStoredLocale)
  useEffect(() => {
    const root = document.documentElement
    root.lang = locale === 'zh' ? 'zh-CN' : 'en'
    root.classList.toggle('locale-zh', locale === 'zh')
    root.classList.toggle('locale-en', locale === 'en')
  }, [locale])
  const setLocale = useCallback((nextLocale: Locale) => {
    window.localStorage.setItem(LOCALE_STORAGE_KEY, nextLocale)
    setLocaleState(nextLocale)
  }, [])
  const value = useMemo(() => ({ locale, setLocale, copy: locale === 'zh' ? zh : en }), [locale, setLocale])
  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}

export function useI18n() {
  const context = useContext(I18nContext)
  if (!context) throw new Error('useI18n must be used inside I18nProvider')
  return context
}
