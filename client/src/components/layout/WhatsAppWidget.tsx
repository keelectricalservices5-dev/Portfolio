import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { SiWhatsapp } from 'react-icons/si';

export default function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const preFilledMessage = encodeURIComponent("Hello! I'd like to enquire about your electrical services.");
  const whatsappURL = `https://wa.me/233244080750?text=${preFilledMessage}`;

  return (
    <div className="fixed bottom-6 right-6 z-50" data-testid="whatsapp-widget">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="mb-4 bg-[#28282c] border border-white/[0.08] rounded-2xl p-5 w-72 shadow-2xl shadow-black/40"
          >
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#0f9d58] flex items-center justify-center">
                  <SiWhatsapp className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-[#e8eaed] text-sm">K.E Electrical</p>
                  <p className="text-xs text-[#9aa0a6]">Usually replies instantly</p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-[#9aa0a6] hover:text-[#e8eaed] transition-colors" aria-label="Close chat" data-testid="whatsapp-close">
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="bg-white/[0.04] rounded-xl p-3 mb-3">
              <p className="text-sm text-[#9aa0a6]">Hello! I'd like to enquire about your electrical services.</p>
            </div>
            <a
              href={whatsappURL}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-[#0f9d58] text-white text-center py-2.5 rounded-xl font-semibold text-sm hover:bg-[#1aab66] transition-colors"
              data-testid="whatsapp-start-chat"
            >
              Start Chat
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-[#0f9d58] rounded-full flex items-center justify-center shadow-lg shadow-black/30 relative"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Chat on WhatsApp"
        data-testid="whatsapp-toggle"
      >
        <SiWhatsapp className="w-7 h-7 text-white" />
        <span className="absolute inset-0 rounded-full bg-[#0f9d58] animate-pulse-ring" />
      </motion.button>
    </div>
  );
}
