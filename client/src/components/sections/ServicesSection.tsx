import { motion } from 'framer-motion';
import { services } from '@/data/services';
import ScrollReveal from '@/components/animations/ScrollReveal';

export default function ServicesSection() {
  return (
    <section id="services" className="relative py-24 sm:py-32 overflow-hidden" data-testid="services-section">
      <div className="absolute top-[10%] left-[15%] w-[450px] h-[450px] rounded-full bg-[#ea4335]/10 blur-[140px] animate-blob-2" />
      <div className="absolute bottom-[10%] right-[10%] w-[400px] h-[400px] rounded-full bg-[#f9ab00]/10 blur-[130px] animate-blob-1" />
      <div className="absolute top-[60%] right-[40%] w-[350px] h-[350px] rounded-full bg-[#db4437]/8 blur-[130px] animate-blob-3" />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 sm:px-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-white/[0.06] border border-white/[0.08] text-[11px] font-semibold uppercase tracking-[0.15em] text-[#f9ab00] mb-4">
              Our Services
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#e8eaed] tracking-tight">
              Comprehensive electrical solutions
            </h2>
            <p className="text-[#9aa0a6] mt-4 max-w-xl mx-auto text-base">
              From residential wiring to advanced security systems — we cover every need with precision and safety.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service, i) => (
            <ScrollReveal key={service.id} delay={i * 0.06}>
              <motion.div
                className="group rounded-2xl overflow-hidden bg-white/[0.03] border border-white/[0.06] hover:bg-white/[0.06] hover:border-white/[0.1] transition-all duration-300 h-full flex flex-col"
                whileHover={{ y: -4 }}
                transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                data-testid={`service-card-${service.id}`}
              >
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1b1b1f] via-transparent to-transparent opacity-70" />
                </div>

                <div className="p-5 flex flex-col flex-1">
                  <h3 className="text-sm font-semibold text-[#e8eaed] mb-2">
                    {service.title}
                  </h3>
                  <p className="text-[#9aa0a6] text-xs leading-relaxed flex-1">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
