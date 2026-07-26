import { CasesPage } from './pages/CasesPage'
import { AILabPage } from './pages/AILabPage'
import { ContactPage } from './pages/ContactPage'
import { HomePage } from './pages/HomePage'
import { JourneyPage } from './pages/JourneyPage'
import { ProductThinkingPage } from './pages/ProductThinkingPage'

export function App() {
  const path = window.location.pathname.replace(/\/+$/, '') || '/'
  if (path === '/cases') return <CasesPage />
  if (path === '/journey') return <JourneyPage />
  if (path === '/thinking') return <ProductThinkingPage />
  if (path === '/ai-lab') return <AILabPage />
  if (path === '/contact') return <ContactPage />
  return <HomePage />
}
