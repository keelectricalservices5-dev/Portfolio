import { motion } from 'framer-motion';
import { Clock, Award } from 'lucide-react';
import { COMPANY_INFO } from '@/data/constants';
import ScrollReveal from '@/components/animations/ScrollReveal';
import ecLogoImg from '@assets/mda_1632695752_1773006442956.jpeg';

const features = [
  { icon: Award, title: 'Licensed & Certified', desc: 'Licensed by Ghana Energy Commission', color: '#f9ab00' },
  { icon: Clock, title: '24/7 Emergency Service', desc: 'Always available when you need us', color: '#ea4335' },
  { icon: Award, title: 'Quality Guarantee', desc: 'Guaranteed workmanship on every job', color: '#4285f4' },
];

export default function AboutSection() {
  return (
    <section id="about" className="relative py-24 sm:py-32 overflow-hidden" data-testid="about-section">
      <div className="absolute top-[15%] right-[5%] w-[500px] h-[500px] rounded-full bg-[#ea4335]/12 blur-[140px] animate-blob-3" />
      <div className="absolute bottom-[15%] left-[5%] w-[450px] h-[450px] rounded-full bg-[#f9ab00]/10 blur-[130px] animate-blob-1" />
      <div className="absolute top-[50%] left-[30%] w-[350px] h-[350px] rounded-full bg-[#e8710a]/8 blur-[130px] animate-blob-2" />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 sm:px-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-white/[0.06] border border-white/[0.08] text-[11px] font-semibold uppercase tracking-[0.15em] text-[#0f9d58] mb-4">
              About Us
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#e8eaed] tracking-tight">
              About K.E Electrical Services
            </h2>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="text-[#9aa0a6] text-base leading-[1.8] mb-6">
              K.E Electrical Services is a licensed electrical services company based in Accra, Ghana, with over 3 years of
              professional experience delivering top-tier electrical solutions. We serve residential and commercial
              clients across all regions of Ghana.
            </p>
            <p className="text-[#9aa0a6] text-base leading-[1.8] mb-8">
              Licensed by the Ghana Energy Commission, we bring industry-leading expertise to every project — from domestic wiring
              and commercial installations to advanced security systems and power management solutions.
            </p>

            <motion.div
              className="rounded-2xl bg-white/[0.04] border border-white/[0.06] p-6 text-left inline-block"
              whileHover={{ borderColor: 'rgba(249, 171, 0, 0.2)' }}
              transition={{ duration: 0.3 }}
              data-testid="ec-certification"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 overflow-hidden">
                  <img src={ecLogoImg} alt="Ghana Energy Commission" className="w-12 h-12 object-contain" />
                </div>
                <div>
                  <h4 className="font-semibold text-[#e8eaed] text-sm mb-1">
                    Ghana Energy Commission
                  </h4>
                  <p className="text-[#9aa0a6] text-xs mb-2">Certified Electrical Wiring Professional</p>
                  <p className="text-[#f9ab00] font-mono font-bold text-sm tracking-wider">{COMPANY_INFO.ecLicenseNumber}</p>
                </div>
              </div>
            </motion.div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {features.map((item) => (
              <motion.div
                key={item.title}
                className="rounded-2xl bg-white/[0.04] border border-white/[0.06] p-5 hover:bg-white/[0.06] hover:border-white/[0.1] transition-all duration-300"
                whileHover={{ y: -2 }}
                transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                data-testid={`why-choose-${item.title.toLowerCase().replace(/\s+/g, '-')}`}
              >
                <div className="w-10 h-10 rounded-full flex items-center justify-center mb-3" style={{ background: `${item.color}18` }}>
                  <item.icon className="w-5 h-5" style={{ color: item.color }} />
                </div>
                <h4 className="font-semibold text-[#e8eaed] text-sm mb-1">{item.title}</h4>
                <p className="text-[#9aa0a6] text-xs leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
