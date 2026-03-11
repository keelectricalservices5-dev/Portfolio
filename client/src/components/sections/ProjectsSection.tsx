import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, X, ExternalLink } from 'lucide-react';
import { projects, type Project } from '@/data/projects';
import ScrollReveal from '@/components/animations/ScrollReveal';
import GeometricLattice from '@/components/animations/GeometricLattice';

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  const handleEsc = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') onClose();
  }, [onClose]);

  useEffect(() => {
    document.addEventListener('keydown', handleEsc);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = '';
    };
  }, [handleEsc]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-md"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={project.title}
    >
      <motion.div
        initial={{ scale: 0.92, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.92, opacity: 0, y: 20 }}
        transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="glass-strong rounded-3xl max-w-2xl w-full max-h-[85vh] overflow-y-auto shadow-2xl"
        onClick={(e) => e.stopPropagation()}
        data-testid="project-modal"
      >
        <div className="relative">
          <img src={project.image} alt={project.title} className="w-full h-56 sm:h-72 object-cover rounded-t-3xl" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0c0a1d] via-transparent to-transparent rounded-t-3xl" />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 rounded-full glass flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 transition-all"
            data-testid="project-modal-close"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
        <div className="p-6 sm:p-8 -mt-8 relative">
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag) => (
              <span key={tag} className="px-3 py-1 rounded-full glass text-[#2563EB] text-[11px] font-semibold">
                {tag}
              </span>
            ))}
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 tracking-tight" style={{ fontFamily: 'var(--font-heading)' }}>
            {project.title}
          </h3>
          <div className="flex items-center gap-2 mb-5">
            <MapPin className="w-3.5 h-3.5 text-[#06B6D4]" />
            <span className="text-white/40 text-sm">{project.location}</span>
          </div>
          <p className="text-white/40 leading-relaxed text-sm">{project.description}</p>
          <div className="mt-6 pt-5 border-t border-white/[0.04]">
            <p className="text-white/25 text-xs uppercase tracking-wider font-medium">Service Category</p>
            <p className="text-[#2563EB] text-sm font-semibold mt-1">{project.service}</p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="relative py-24 sm:py-32 overflow-hidden" data-testid="projects-section">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0c0a1d] via-[#0f0d24] to-[#0c0a1d]" />
      <GeometricLattice />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="inline-flex items-center px-3 py-1 rounded-full glass text-[10px] font-semibold uppercase tracking-[0.2em] text-[#06B6D4]/80 mb-4">
              Recent Projects
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight" style={{ fontFamily: 'var(--font-heading)' }}>
              Our <span className="gradient-text">Work</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {projects.map((project, i) => (
            <ScrollReveal key={project.id} delay={i * 0.08}>
              <motion.button
                type="button"
                className="group relative rounded-2xl overflow-hidden h-56 sm:h-64 w-full text-left glass-card focus:outline-none focus:ring-2 focus:ring-[#2563EB]/50 focus:ring-offset-0"
                onClick={() => setSelectedProject(project)}
                whileHover={{ scale: 1.01 }}
                transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                data-testid={`project-card-${project.id}`}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c0a1d] via-[#0c0a1d]/50 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500" />
                <div className="absolute top-4 right-4 w-8 h-8 rounded-full glass flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ExternalLink className="w-3.5 h-3.5 text-white/60" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <div className="flex flex-wrap gap-1.5 mb-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-2 py-0.5 rounded-full bg-[#2563EB]/15 text-[#2563EB] text-[10px] font-semibold backdrop-blur-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-white font-bold text-sm tracking-tight" style={{ fontFamily: 'var(--font-heading)' }}>
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-1.5 mt-1.5 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-1 group-hover:translate-y-0">
                    <MapPin className="w-3 h-3 text-[#06B6D4]" />
                    <span className="text-white/40 text-xs">{project.location}</span>
                  </div>
                </div>
              </motion.button>
            </ScrollReveal>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}
