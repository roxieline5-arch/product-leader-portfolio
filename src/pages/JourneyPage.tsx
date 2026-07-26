import { ExecutiveClosingFooter } from '../components/ExecutiveClosingFooter'
import { Header } from '../components/Header'
import { JourneyHeroSection } from '../components/journey/JourneyHeroSection'
import { JourneyPhilosophySection } from '../components/journey/JourneyPhilosophySection'
import { LeadershipJourneySection } from '../components/journey/LeadershipJourneySection'

export function JourneyPage() {
  return (
    <main className="journey-page">
      <Header activePage="journey" />
      <JourneyHeroSection />
      <LeadershipJourneySection />
      <JourneyPhilosophySection />
      <ExecutiveClosingFooter />
    </main>
  )
}
