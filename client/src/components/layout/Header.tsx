import { useState, useEffect } from 'react';
import { COMPANY_INFO, NAV_LINKS } from '@/data/constants';
import logoImg from '@assets/ke_logo_v2_nobg.png';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#1b1b1f]/90 backdrop-blur-xl border-b border-white/[0.08]' : 'bg-[#1b1b1f]/70 backdrop-blur-md'
      }`}
      data-testid="header"
    >
      <nav className="max-w-[1400px] mx-auto pl-2 pr-4 sm:pl-6 sm:pr-10 py-2 flex flex-row items-center justify-between">
        <a
          href="#home"
          onClick={(e) => { e.preventDefault(); scrollTo('#home'); }}
          className="flex items-center flex-shrink-0"
          data-testid="logo-link"
        >
          <img src={logoImg} alt={COMPANY_INFO.name} className="h-[60px] sm:h-[80px] w-auto" />
        </a>

        <div className="flex items-center justify-evenly flex-1">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
              className="text-[#9aa0a6] hover:text-[#e8eaed] text-xs sm:text-sm font-medium transition-colors duration-200 whitespace-nowrap"
              data-testid={`nav-${link.label.toLowerCase()}`}
            >
              {link.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
