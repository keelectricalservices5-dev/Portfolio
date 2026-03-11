import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap, X, Phone } from 'lucide-react';
import { SiWhatsapp } from 'react-icons/si';
import { CONTACT_LINKS } from '@/data/constants';

export default function EmergencyButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3" data-testid="emergency-button">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="bg-[#28282c] border border-[#f9ab00]/20 rounded-2xl p-4 w-64 shadow-2xl shadow-black/40"
          >
            <div className="flex items-center justify-between mb-3">
              <h4 className="font-semibold text-[#f9ab00] text-sm">Emergency Contact</h4>
              <button onClick={() => setIsOpen(false)} className="text-[#9aa0a6] hover:text-[#e8eaed] transition-colors" aria-label="Close" data-testid="emergency-close">
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="space-y-2">
              <a
                href={CONTACT_LINKS.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] transition-colors"
                data-testid="emergency-whatsapp"
              >
                <SiWhatsapp className="w-5 h-5 text-[#0f9d58]" />
                <div>
                  <p className="text-[#e8eaed] text-sm font-medium">WhatsApp</p>
                  <p className="text-[#9aa0a6] text-xs">Chat now</p>
                </div>
              </a>
              <a
                href="tel:+233244080750"
                className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] transition-colors"
                data-testid="emergency-call"
              >
                <Phone className="w-5 h-5 text-[#f9ab00]" />
                <div>
                  <p className="text-[#e8eaed] text-sm font-medium">Call Us</p>
                  <p className="text-[#9aa0a6] text-xs">+233 24 408 0750</p>
                </div>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-5 py-3 bg-[#f9ab00] text-[#1b1b1f] rounded-full font-bold text-sm shadow-lg shadow-black/30 relative"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        data-testid="emergency-toggle"
      >
        <Zap className="w-4 h-4" />
        <span className="hidden sm:inline">24/7 Emergency</span>
        <span className="sm:hidden">SOS</span>
        <span className="absolute inset-0 rounded-full border-2 border-[#f9ab00] animate-pulse-ring" />
      </motion.button>
    </div>
  );
}
