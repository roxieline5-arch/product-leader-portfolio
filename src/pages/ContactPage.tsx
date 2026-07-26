import { ExecutiveClosingFooter } from '../components/ExecutiveClosingFooter'
import { Header } from '../components/Header'
import { CollaborationAreasSection } from '../components/contact/CollaborationAreasSection'
import { ContactChannelsSection } from '../components/contact/ContactChannelsSection'
import { ContactClosingSection } from '../components/contact/ContactClosingSection'
import { ContactHeroSection } from '../components/contact/ContactHeroSection'

export function ContactPage() {
  return (
    <main className="contact-page">
      <Header activePage="contact" />
      <ContactHeroSection />
      <CollaborationAreasSection />
      <ContactChannelsSection />
      <ContactClosingSection />
      <ExecutiveClosingFooter />
    </main>
  )
}
