"use client"

import { Phone, MessageCircle, X } from "lucide-react" 
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useLanguage } from "@/lib/i18n/language-context"

export function FloatingContact() {
  const { t } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            className="flex flex-col gap-2"
          >
            <a
              href="tel:+15149770491"
              className="flex items-center gap-2 rounded-full bg-brand-red px-4 py-2 text-sm font-medium text-white shadow-lg shadow-brand-red/25 hover:bg-brand-red/90 transition-colors"
            >
              <Phone className="size-4" />
              {t.floatingContact.call}
            </a>
            <a
              href="mailto:info@equipesitepro.ca"
              className="flex items-center gap-2 rounded-full bg-brand-red px-4 py-2 text-sm font-medium text-white shadow-lg shadow-brand-red/25 hover:bg-brand-red/90 transition-colors"
            >
              <MessageCircle className="size-4" />
              {t.floatingContact.message}
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group relative flex size-12 items-center justify-center rounded-full bg-brand-red text-white shadow-xl shadow-brand-red/30 transition-transform hover:scale-110 active:scale-95"
      >
        {isOpen ? (
          <X className="size-5" />
        ) : (
          <Phone className="size-5 transition-transform group-hover:rotate-12" />
        )}
        {/* --- CHANGED THE DOT TO BLUE HERE --- */}
        <span className="absolute -right-1 -top-1 flex size-3">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-500/70 opacity-75"></span>
          <span className="relative inline-flex size-3 rounded-full bg-blue-500/50 border border-white/20"></span>
        </span>
      </button>
    </div>
  )
}
