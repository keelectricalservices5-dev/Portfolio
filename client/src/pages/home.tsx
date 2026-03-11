import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import WhatsAppWidget from '@/components/layout/WhatsAppWidget';
import HeroSection from '@/components/sections/HeroSection';
import StatsSection from '@/components/sections/StatsSection';
import ServicesSection from '@/components/sections/ServicesSection';
import AboutSection from '@/components/sections/AboutSection';
import SafetySection from '@/components/sections/SafetySection';
import ContactSection from '@/components/sections/ContactSection';
import ServiceAreaSection from '@/components/sections/ServiceAreaSection';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#1b1b1f]">
      <Header />
      <main>
        <HeroSection />
        <div className="section-divider" />
        <StatsSection />
        <div className="section-divider" />
        <ServicesSection />
        <div className="section-divider" />
        <AboutSection />
        <div className="section-divider" />
        <SafetySection />
        <div className="section-divider" />
        <ContactSection />
        <div className="section-divider" />
        <ServiceAreaSection />
      </main>
      <Footer />
      <WhatsAppWidget />
    </div>
  );
}
