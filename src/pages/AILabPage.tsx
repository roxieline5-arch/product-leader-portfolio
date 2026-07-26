import { Header } from '../components/Header'
import { ExecutiveClosingFooter } from '../components/ExecutiveClosingFooter'
import { AILabCreationFrameworkSection } from '../components/ai-lab/AILabCreationFrameworkSection'
import { AILabExperimentsArchive } from '../components/ai-lab/AILabExperimentsArchive'
import { AILabHeroSection } from '../components/ai-lab/AILabHeroSection'
import { AILabPhilosophySection } from '../components/ai-lab/AILabPhilosophySection'

export function AILabPage() {
  return (
    <main className="ai-lab-page">
      <Header activePage="aiLab" />
      <AILabHeroSection />
      <AILabCreationFrameworkSection />
      <AILabExperimentsArchive />
      <AILabPhilosophySection />
      <ExecutiveClosingFooter />
    </main>
  )
}
