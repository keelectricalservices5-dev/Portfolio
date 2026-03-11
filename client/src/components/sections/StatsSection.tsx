import { motion } from 'framer-motion';
import { Briefcase, Users, Calendar, Clock } from 'lucide-react';
import { useCounterAnimation } from '@/hooks/use-counter-animation';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import ScrollReveal from '@/components/animations/ScrollReveal';

const stats = [
  { icon: Briefcase, value: 30, suffix: '+', label: 'Projects Completed', color: '#f9ab00' },
  { icon: Users, value: 100, suffix: '+', label: 'Happy Clients', color: '#4285f4' },
  { icon: Calendar, value: 3, suffix: '+', label: 'Years Experience', color: '#0f9d58' },
  { icon: Clock, value: 24, suffix: '/7', label: 'Availability', color: '#ea4335' },
];

function StatCard({ stat, index, isVisible }: { stat: typeof stats[0]; index: number; isVisible: boolean }) {
  const count = useCounterAnimation(stat.value, 2000, isVisible);

  return (
    <ScrollReveal delay={index * 0.08}>
      <motion.div
        className="rounded-2xl bg-white/[0.04] border border-white/[0.06] p-6 sm:p-8 text-center hover:bg-white/[0.06] transition-colors duration-300"
        whileHover={{ y: -3 }}
        transition={{ type: 'spring', stiffness: 400, damping: 25 }}
        data-testid={`stat-card-${index}`}
      >
        <div className="w-12 h-12 rounded-full mx-auto mb-4 flex items-center justify-center" style={{ background: `${stat.color}18` }}>
          <stat.icon className="w-5 h-5" style={{ color: stat.color }} />
        </div>
        <div className="text-3xl sm:text-4xl font-bold text-[#e8eaed] mb-1">
          {count}{stat.suffix}
        </div>
        <p className="text-[#9aa0a6] text-sm">{stat.label}</p>
      </motion.div>
    </ScrollReveal>
  );
}

export default function StatsSection() {
  const { ref, isVisible } = useScrollAnimation(0.15);

  return (
    <section className="relative py-20 sm:py-28 overflow-hidden" data-testid="stats-section">
      <div className="absolute top-[20%] left-[10%] w-[400px] h-[400px] rounded-full bg-[#ea4335]/8 blur-[140px] animate-blob-1" />
      <div className="absolute bottom-[20%] right-[10%] w-[350px] h-[350px] rounded-full bg-[#f9ab00]/8 blur-[130px] animate-blob-3" />
      <div ref={ref} className="relative z-10 max-w-[1200px] mx-auto px-6 sm:px-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat, i) => (
            <StatCard key={stat.label} stat={stat} index={i} isVisible={isVisible} />
          ))}
        </div>
      </div>
    </section>
  );
}
