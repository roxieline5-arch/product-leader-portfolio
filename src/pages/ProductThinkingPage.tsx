import { Header } from '../components/Header'
import { ExecutiveClosingFooter } from '../components/ExecutiveClosingFooter'
import { ProductJudgmentProcessSection } from '../components/product-thinking/ProductJudgmentProcessSection'
import { ProductThinkingHeroSection } from '../components/product-thinking/ProductThinkingHeroSection'
import { ProductThinkingPrinciplesSection } from '../components/product-thinking/ProductThinkingPrinciplesSection'

export function ProductThinkingPage() {
  return (
    <main className="product-thinking-page">
      <Header activePage="thinking" />
      <ProductThinkingHeroSection />
      <ProductJudgmentProcessSection />
      <ProductThinkingPrinciplesSection />
      <ExecutiveClosingFooter />
    </main>
  )
}
