import { Header } from '../components/Header'
import { ExecutiveClosingFooter } from '../components/ExecutiveClosingFooter'
import { CaseArchive } from '../components/cases/CaseArchive'
import { CasesHeroSection } from '../components/cases/CasesHeroSection'
import { CasesPhilosophySection } from '../components/cases/CasesPhilosophySection'

export function CasesPage() {
  return (
    <main className="cases-page">
      <Header activePage="cases" />
      <CasesHeroSection />
      <CaseArchive />
      <div className="cases-closing">
        <CasesPhilosophySection />
      </div>
      <ExecutiveClosingFooter />
    </main>
  )
}
