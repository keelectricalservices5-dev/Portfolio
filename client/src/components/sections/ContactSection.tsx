import { motion } from 'framer-motion';
import { Mail, MapPin, Clock } from 'lucide-react';
import { SiWhatsapp, SiInstagram, SiTiktok, SiYoutube } from 'react-icons/si';
import { COMPANY_INFO, CONTACT_LINKS, SOCIAL_MEDIA } from '@/data/constants';
import ScrollReveal from '@/components/animations/ScrollReveal';

const contactCards = [
  {
    icon: Mail,
    label: 'Send Us an Email',
    value: COMPANY_INFO.email,
    subLabel: 'We reply within 24 hours',
    href: CONTACT_LINKS.emailHref,
    color: '#4285f4',
    isExternal: false,
  },
  {
    icon: SiWhatsapp,
    label: 'Chat on WhatsApp',
    value: COMPANY_INFO.whatsapp,
    subLabel: 'Usually replies within minutes',
    href: CONTACT_LINKS.whatsappHref,
    color: '#0f9d58',
    isExternal: true,
  },
  {
    icon: MapPin,
    label: 'Our Location',
    value: COMPANY_INFO.address,
    subLabel: 'Serving all regions of Ghana',
    href: null,
    color: '#ea4335',
    isExternal: false,
  },
  {
    icon: Clock,
    label: 'Availability',
    value: '24/7 Emergency Service',
    subLabel: 'Always available for emergencies',
    href: CONTACT_LINKS.whatsappHref,
    color: '#f9ab00',
    isExternal: true,
  },
];

const socialLinks = [
  { icon: SiInstagram, href: SOCIAL_MEDIA.instagram, label: 'Instagram' },
  { icon: SiTiktok, href: SOCIAL_MEDIA.tiktok, label: 'TikTok' },
  { icon: SiYoutube, href: SOCIAL_MEDIA.youtube, label: 'YouTube' },
  { icon: SiWhatsapp, href: SOCIAL_MEDIA.whatsapp, label: 'WhatsApp' },
];

export default function ContactSection() {
  return (
    <section id="contact" className="relative py-24 sm:py-32 overflow-hidden" data-testid="contact-section">
      <div className="absolute top-[15%] right-[5%] w-[450px] h-[450px] rounded-full bg-[#ea4335]/12 blur-[140px] animate-blob-1" />
      <div className="absolute bottom-[15%] left-[10%] w-[400px] h-[400px] rounded-full bg-[#f9ab00]/10 blur-[130px] animate-blob-3" />
      <div className="absolute top-[50%] left-[40%] w-[350px] h-[350px] rounded-full bg-[#db4437]/8 blur-[130px] animate-blob-2" />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 sm:px-10">
        <ScrollReveal>
          <div className="text-center mb-6">
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-white/[0.06] border border-white/[0.08] text-[11px] font-semibold uppercase tracking-[0.15em] text-[#4285f4] mb-4">
              Contact Us
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#e8eaed] tracking-tight">
              Get in touch
            </h2>
            <p className="text-[#9aa0a6] mt-4 max-w-xl mx-auto text-base">
              Ready to power your project? Reach out directly — no complicated forms.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16 mt-12">
          {contactCards.map((card, i) => {
            const isLink = !!card.href;
            const CardWrapper = isLink ? 'a' : 'div';
            const wrapperProps = isLink
              ? {
                  href: card.href,
                  ...(card.isExternal ? { target: '_blank' as const, rel: 'noopener noreferrer' } : {}),
                }
              : {};

            return (
              <ScrollReveal key={card.label} delay={i * 0.08}>
                <motion.div whileHover={{ y: -3 }} transition={{ type: 'spring', stiffness: 400, damping: 25 }}>
                  <CardWrapper
                    {...wrapperProps}
                    className={`block rounded-2xl bg-white/[0.04] border border-white/[0.06] p-6 text-center h-full hover:bg-white/[0.06] hover:border-white/[0.1] transition-all duration-300 ${
                      isLink ? 'cursor-pointer' : 'cursor-default'
                    }`}
                    data-testid={`contact-card-${card.label.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    <div className="w-12 h-12 rounded-full mx-auto mb-4 flex items-center justify-center" style={{ background: `${card.color}18` }}>
                      <card.icon className="w-5 h-5" style={{ color: card.color }} />
                    </div>
                    <p className="text-[#9aa0a6] text-xs mb-1">{card.label}</p>
                    <p className="text-[#e8eaed] font-semibold text-[13px] mb-2 break-words">{card.value}</p>
                    <p className="text-[#9aa0a6]/60 text-xs">{card.subLabel}</p>
                  </CardWrapper>
                </motion.div>
              </ScrollReveal>
            );
          })}
        </div>

        <ScrollReveal delay={0.3}>
          <div className="text-center">
            <h3 className="text-lg font-semibold text-[#e8eaed] mb-6">Follow our work</h3>
            <div className="flex justify-center gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-full bg-white/[0.04] border border-white/[0.06] flex items-center justify-center text-[#9aa0a6] hover:text-[#e8eaed] hover:bg-white/[0.08] transition-all duration-200"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  data-testid={`contact-social-${social.label.toLowerCase()}`}
                >
                  <social.icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
