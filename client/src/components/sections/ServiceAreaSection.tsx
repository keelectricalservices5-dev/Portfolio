import { motion } from 'framer-motion';
import { MapPin, Globe, Navigation } from 'lucide-react';
import { SiWhatsapp } from 'react-icons/si';
import { ghanaRegions } from '@/data/regions';
import { CONTACT_LINKS } from '@/data/constants';
import ScrollReveal from '@/components/animations/ScrollReveal';

const areaStats = [
  { icon: Globe, value: '16', label: 'Regions Served', color: '#4285f4' },
  { icon: MapPin, value: '100%', label: 'Nationwide Coverage', color: '#ea4335' },
  { icon: Navigation, value: 'Professional', label: 'Site Survey & Estimates', color: '#f9ab00' },
];

export default function ServiceAreaSection() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden" data-testid="service-area-section">
      <div className="absolute top-[15%] right-[10%] w-[450px] h-[450px] rounded-full bg-[#ea4335]/10 blur-[150px] animate-blob-2" />
      <div className="absolute bottom-[20%] left-[15%] w-[400px] h-[400px] rounded-full bg-[#f9ab00]/8 blur-[140px] animate-blob-1" />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 sm:px-10">
        <ScrollReveal>
          <div className="text-center mb-6">
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-white/[0.06] border border-white/[0.08] text-[11px] font-semibold uppercase tracking-[0.15em] text-[#ea4335] mb-4">
              Coverage
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#e8eaed] tracking-tight">
              We serve all of Ghana
            </h2>
            <p className="text-[#9aa0a6] mt-4 text-base">Based in Accra — operating nationwide</p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-12 max-w-2xl mx-auto">
            {areaStats.map((stat) => (
              <motion.div
                key={stat.label}
                className="rounded-2xl bg-white/[0.04] border border-white/[0.06] p-5 text-center hover:bg-white/[0.06] transition-colors duration-300"
                whileHover={{ y: -2 }}
                transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                data-testid={`area-stat-${stat.label.toLowerCase().replace(/\s+/g, '-')}`}
              >
                <stat.icon className="w-5 h-5 mx-auto mb-2" style={{ color: stat.color }} />
                <p className={`font-bold text-[#e8eaed] ${stat.value.length > 4 ? 'text-lg' : 'text-2xl'}`}>{stat.value}</p>
                <p className="text-[#9aa0a6] text-xs mt-1">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="flex flex-wrap justify-center gap-2.5 mb-12 max-w-4xl mx-auto">
            {ghanaRegions.map((region) => (
              <div
                key={region.name}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  region.isHome
                    ? 'bg-[#f9ab00]/15 border border-[#f9ab00]/30 text-[#f9ab00]'
                    : 'bg-white/[0.04] border border-white/[0.06] text-[#9aa0a6] hover:bg-white/[0.06] hover:text-[#e8eaed]'
                }`}
                data-testid={`region-${region.name.toLowerCase().replace(/\s+/g, '-')}`}
              >
                {region.name}
              </div>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <div className="text-center">
            <p className="text-[#9aa0a6] text-sm mb-4">Contact us to confirm service in your area</p>
            <motion.a
              href={CONTACT_LINKS.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3 bg-[#0f9d58] text-white rounded-full font-semibold text-sm hover:bg-[#1aab66] transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              data-testid="service-area-whatsapp"
            >
              <SiWhatsapp className="w-4 h-4" />
              Chat on WhatsApp
            </motion.a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
