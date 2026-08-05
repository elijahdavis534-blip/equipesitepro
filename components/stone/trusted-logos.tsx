"use client"

import Image from "next/image"
import { useLanguage } from "@/lib/i18n/language-context"

// Replace these with your actual client logo images in /public
const logos = [
  { name: "Client 1", src: "/client-1.png" },
  { name: "Client 2", src: "/client-2.png" },
  { name: "Client 3", src: "/client-3.png" },
  { name: "Client 4", src: "/client-4.png" },
  { name: "Client 5", src: "/client-5.png" },
  { name: "Client 6", src: "/client-6.png" },
  // Duplicating for the infinite scroll effect
  ...Array.from({ length: 2 }).flatMap(() => [
    { name: "Client 1", src: "/client-1.png" },
    { name: "Client 2", src: "/client-2.png" },
    { name: "Client 3", src: "/client-3.png" },
    { name: "Client 4", src: "/client-4.png" },
    { name: "Client 5", src: "/client-5.png" },
    { name: "Client 6", src: "/client-6.png" },
  ])
]

export function TrustedLogos() {
  const { t } = useLanguage()

  return (
    <section className="bg-navy-deep py-12 border-y border-white/5">
      <div className="container mx-auto px-4 md:px-6">
        <p className="mb-8 text-center text-sm font-medium uppercase tracking-wider text-navy-muted">
          {t.trustedLogos.label}
        </p>
        <div className="relative overflow-hidden w-full">
          {/* Fade masks so the logos fade out at the edges */}
          <div className="absolute left-0 top-0 z-10 h-full w-16 bg-gradient-to-r from-navy-deep to-transparent" />
          <div className="absolute right-0 top-0 z-10 h-full w-16 bg-gradient-to-l from-navy-deep to-transparent" />
          
          <div className="flex w-max animate-scroll-logos gap-12 md:gap-16">
            {logos.map((logo, index) => (
              <div 
                key={`${logo.name}-${index}`} 
                className="flex items-center justify-center grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              >
                <Image
                  src={logo.src}
                  alt={logo.name}
                  width={120}
                  height={60}
                  className="max-h-10 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scrollLogos {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll-logos {
          animation: scrollLogos 40s linear infinite;
        }
      `}</style>
    </section>
  )
}
