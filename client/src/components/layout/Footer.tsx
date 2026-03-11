import { motion } from 'framer-motion';
import { ArrowUp, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';
import { SiInstagram, SiTiktok, SiYoutube, SiWhatsapp } from 'react-icons/si';
import { COMPANY_INFO, SOCIAL_MEDIA, NAV_LINKS } from '@/data/constants';
import logoImg from '@assets/ke_logo_v2_nobg.png';
import ecLogoImg from '@assets/mda_1632695752_1773006442956.jpeg';

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const socialLinks = [
    { icon: SiInstagram, href: SOCIAL_MEDIA.instagram, label: 'Instagram' },
    { icon: SiTiktok, href: SOCIAL_MEDIA.tiktok, label: 'TikTok' },
    { icon: SiYoutube, href: SOCIAL_MEDIA.youtube, label: 'YouTube' },
    { icon: SiWhatsapp, href: SOCIAL_MEDIA.whatsapp, label: 'WhatsApp' },
  ];

  return (
    <footer className="bg-[#141417] border-t border-white/[0.06]" data-testid="footer">
      <div className="max-w-[1200px] mx-auto px-6 sm:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <img src={logoImg} alt={COMPANY_INFO.name} className="h-[60px] w-auto" />
            </div>
            <p className="text-[#9aa0a6] text-sm mb-4">{COMPANY_INFO.tagline}</p>
            <div className="flex items-center gap-2 mb-6 px-3 py-2 rounded-lg bg-white/[0.04] border border-white/[0.06] w-fit">
              <img src={ecLogoImg} alt="Ghana Energy Commission" className="w-4 h-4 object-contain" />
              <span className="text-xs text-[#9aa0a6] font-mono">{COMPANY_INFO.ecLicenseNumber}</span>
            </div>
            <div className="flex gap-2">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-9 h-9 rounded-full bg-white/[0.04] border border-white/[0.06] flex items-center justify-center text-[#9aa0a6] hover:text-[#e8eaed] hover:bg-white/[0.08] transition-all duration-200"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  data-testid={`footer-social-${social.label.toLowerCase()}`}
                >
                  <social.icon className="w-3.5 h-3.5" />
                </motion.a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-xs text-[#e8eaed] mb-4 uppercase tracking-widest">Quick Links</h4>
            <ul className="space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-[#9aa0a6] hover:text-[#e8eaed] transition-colors text-sm"
                    data-testid={`footer-link-${link.label.toLowerCase()}`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-xs text-[#e8eaed] mb-4 uppercase tracking-widest">Contact</h4>
            <ul className="space-y-2.5">
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#4285f4] flex-shrink-0" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="text-[#9aa0a6] hover:text-[#e8eaed] transition-colors text-sm">
                  {COMPANY_INFO.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MessageCircle className="w-4 h-4 text-[#0f9d58] flex-shrink-0" />
                <a href={SOCIAL_MEDIA.whatsapp} target="_blank" rel="noopener noreferrer" className="text-[#9aa0a6] hover:text-[#e8eaed] transition-colors text-sm">
                  {COMPANY_INFO.whatsapp}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-[#ea4335] flex-shrink-0" />
                <span className="text-[#9aa0a6] text-sm">{COMPANY_INFO.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-[#f9ab00] flex-shrink-0" />
                <span className="text-[#9aa0a6] text-sm">24/7 Emergency Available</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/[0.04]">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-10 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <p className="text-[#5f6368] text-xs">&copy; 2025 {COMPANY_INFO.name}. All rights reserved.</p>
          </div>
          <motion.button
            onClick={scrollToTop}
            className="w-9 h-9 rounded-full bg-white/[0.04] border border-white/[0.06] flex items-center justify-center text-[#9aa0a6] hover:text-[#e8eaed] hover:bg-white/[0.08] transition-all"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Back to top"
            data-testid="back-to-top"
          >
            <ArrowUp className="w-4 h-4" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
