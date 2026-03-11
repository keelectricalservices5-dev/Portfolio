import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import { testimonials } from '@/data/testimonials';
import ScrollReveal from '@/components/animations/ScrollReveal';

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % testimonials.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(next, 5000);
    return () => clearInterval(interval);
  }, [isPaused, next]);

  const t = testimonials[current];

  return (
    <section className="bg-[#1E1B4B] py-20 sm:py-28" data-testid="testimonials-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-14">
            <span className="text-[#06B6D4] text-sm font-semibold uppercase tracking-widest" style={{ fontFamily: 'var(--font-heading)' }}>
              Testimonials
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#F1F5F9] mt-3" style={{ fontFamily: 'var(--font-heading)' }}>
              What Our Clients <span className="gradient-text">Say</span>
            </h2>
          </div>
        </ScrollReveal>

        <div
          className="max-w-3xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="bg-[#16133A] rounded-2xl p-8 sm:p-10 border border-[#2563EB]/20 relative" data-testid={`testimonial-${current}`}>
            <Quote className="w-10 h-10 text-[#2563EB]/30 absolute top-6 left-6" />

            <div className="relative z-10">
              <div className="flex gap-1 mb-6 justify-center">
                {Array.from({ length: t.rating }, (_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#FBBF24] text-[#FBBF24]" />
                ))}
              </div>

              <p className="text-[#F1F5F9] text-base sm:text-lg leading-relaxed text-center mb-8 italic">
                "{t.text}"
              </p>

              <div className="flex items-center justify-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#2563EB] to-[#06B6D4] flex items-center justify-center text-white font-bold text-sm">
                  {t.initials}
                </div>
                <div>
                  <p className="font-bold text-[#F1F5F9]" style={{ fontFamily: 'var(--font-heading)' }}>{t.name}</p>
                  <p className="text-[#94A3B8] text-sm">{t.type} — {t.location}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-[#2563EB]/40 flex items-center justify-center text-[#2563EB] hover:bg-[#2563EB] hover:text-white transition-all"
              aria-label="Previous testimonial"
              data-testid="testimonial-prev"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    i === current ? 'bg-[#2563EB] w-6' : 'bg-[#94A3B8]/30 hover:bg-[#94A3B8]/50'
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                  data-testid={`testimonial-dot-${i}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-[#2563EB]/40 flex items-center justify-center text-[#2563EB] hover:bg-[#2563EB] hover:text-white transition-all"
              aria-label="Next testimonial"
              data-testid="testimonial-next"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
