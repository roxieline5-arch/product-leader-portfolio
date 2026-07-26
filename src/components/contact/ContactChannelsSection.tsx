import { motion, useReducedMotion } from 'framer-motion'
import emailIcon from '../../assets/contact/contact-channel-email-icon.png'
import executiveProfileIcon from '../../assets/contact/contact-channel-executive-profile-icon.png'
import linkedInIcon from '../../assets/contact/contact-channel-linkedin-icon.png'
import { useI18n } from '../../i18n'

const channelIcons = [emailIcon, executiveProfileIcon, linkedInIcon]

export function ContactChannelsSection() {
  const { copy } = useI18n()
  const reduceMotion = useReducedMotion()
  const { channels } = copy.contact

  return (
    <section className="contact-channels" aria-labelledby="contact-channels-title">
      <h2 id="contact-channels-title" className="contact-section-label">
        <span aria-hidden="true" />{channels.label}<span aria-hidden="true" />
      </h2>
      <div className="contact-channels__inner">
        {channels.items.map((channel, index) => (
          <motion.a
            className="contact-channel"
            href={channel.href}
            key={channel.name}
            initial={reduceMotion ? false : { opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.45 }}
            transition={{ duration: 0.45, delay: reduceMotion ? 0 : index * 0.07 }}
          >
            <img src={channelIcons[index]} alt="" />
            <span className="contact-channel__copy">
              <strong>{channel.name}</strong>
              <em>{channel.title}</em>
              <small>{channel.value}</small>
            </span>
            <b aria-hidden="true">→</b>
          </motion.a>
        ))}
      </div>
    </section>
  )
}
