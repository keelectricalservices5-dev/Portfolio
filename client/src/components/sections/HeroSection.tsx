import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { COMPANY_INFO } from '@/data/constants';

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export default function HeroSection() {
  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden" data-testid="hero-section">
      <div className="absolute inset-0 bg-[#1b1b1f]" />

      <div className="absolute top-[5%] left-[10%] w-[550px] h-[550px] rounded-full bg-[#ea4335]/20 blur-[140px] animate-blob-1" />
      <div className="absolute top-[15%] right-[5%] w-[500px] h-[500px] rounded-full bg-[#f9ab00]/18 blur-[130px] animate-blob-2" />
      <div className="absolute bottom-[10%] left-[30%] w-[500px] h-[500px] rounded-full bg-[#db4437]/15 blur-[140px] animate-blob-3" />
      <div className="absolute bottom-[5%] right-[20%] w-[400px] h-[400px] rounded-full bg-[#e8710a]/12 blur-[130px] animate-blob-1" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-[900px] mx-auto px-6 sm:px-10 text-center py-32"
      >
        <motion.div variants={itemVariants} className="mb-6">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.06] border border-white/[0.08] text-xs font-medium text-[#f9ab00] tracking-wide uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0f9d58]" />
            EC Licensed — {COMPANY_INFO.ecLicenseNumber}
          </span>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6 tracking-tight"
          data-testid="hero-headline"
        >
          <span className="gradient-text-hero">{COMPANY_INFO.tagline}</span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-lg sm:text-xl text-[#9aa0a6] mb-10 max-w-2xl mx-auto leading-relaxed"
          data-testid="hero-subheadline"
        >
          Expert residential and commercial electrical solutions across Ghana.
          Based in Accra, we bring safety, precision, and reliability to every project.
        </motion.p>

        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center">
          <motion.button
            onClick={() => scrollTo('#contact')}
            className="group inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[#4285f4] text-white font-semibold text-sm hover:bg-[#5a95f5] transition-colors"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            data-testid="hero-cta-contact"
          >
            Get in Touch
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </motion.button>
          <motion.button
            onClick={() => scrollTo('#services')}
            className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-white/[0.06] border border-white/[0.1] text-[#e8eaed] font-semibold text-sm hover:bg-white/[0.1] transition-colors"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            data-testid="hero-cta-services"
          >
            Explore Services
          </motion.button>
        </motion.div>
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#1b1b1f] to-transparent" />
    </section>
  );
}
