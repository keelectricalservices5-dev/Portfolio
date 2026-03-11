import type { ElementType } from 'react';
import { motion } from 'framer-motion';
import { ClipboardCheck, HardHat, Search, Lock, GraduationCap, ShieldCheck } from 'lucide-react';
import { safetyProtocols } from '@/data/safety';
import ScrollReveal from '@/components/animations/ScrollReveal';

const iconMap: Record<string, ElementType> = {
  'clipboard-check': ClipboardCheck,
  'hard-hat': HardHat,
  'search': Search,
  'lock': Lock,
  'graduation-cap': GraduationCap,
  'shield-check': ShieldCheck,
};

export default function SafetySection() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden" data-testid="safety-section">
      <div className="absolute top-[20%] left-[10%] w-[450px] h-[450px] rounded-full bg-[#ea4335]/10 blur-[150px] animate-blob-2" />
      <div className="absolute bottom-[15%] right-[10%] w-[400px] h-[400px] rounded-full bg-[#f9ab00]/8 blur-[140px] animate-blob-1" />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 sm:px-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-white/[0.06] border border-white/[0.08] text-[11px] font-semibold uppercase tracking-[0.15em] text-[#0f9d58] mb-4">
              Safety First
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#e8eaed] tracking-tight">
              Our commitment to safety
            </h2>
            <p className="text-[#9aa0a6] mt-4 max-w-xl mx-auto text-base">
              Every project follows strict safety protocols to protect you, your property, and our team.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {safetyProtocols.map((protocol, i) => {
            const Icon = iconMap[protocol.icon] || ShieldCheck;
            return (
              <ScrollReveal key={protocol.id} delay={i * 0.06}>
                <motion.div
                  className="rounded-2xl bg-white/[0.04] border border-white/[0.06] p-6 h-full hover:bg-white/[0.06] hover:border-white/[0.1] transition-all duration-300"
                  whileHover={{ y: -3 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                  data-testid={`safety-card-${protocol.id}`}
                >
                  <div className="w-10 h-10 rounded-full flex items-center justify-center mb-4 bg-[#0f9d58]/10">
                    <Icon className="w-5 h-5 text-[#0f9d58]" />
                  </div>
                  <h3 className="font-semibold text-[#e8eaed] text-sm mb-2">
                    {protocol.title}
                  </h3>
                  <p className="text-[#9aa0a6] text-xs leading-relaxed">{protocol.description}</p>
                </motion.div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
