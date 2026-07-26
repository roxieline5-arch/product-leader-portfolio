import { motion } from 'framer-motion'
import { Header } from '../components/Header'
import { HeroSection } from '../components/HeroSection'
import { CapabilitySection } from '../components/CapabilitySection'
import { BeliefSection } from '../components/BeliefSection'
import { ExecutiveClosingFooter } from '../components/ExecutiveClosingFooter'

export function HomePage() {
  return (
    <main className="home-page">
      <Header activePage="home" />
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>
        <HeroSection />
        <CapabilitySection />
        <div className="home-closing">
          <BeliefSection />
        </div>
        <ExecutiveClosingFooter />
      </motion.div>
    </main>
  )
}
