"use client"

import { MapPin, Phone, Mail, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/i18n/language-context"

export function ContactSection() {
  const { t } = useLanguage()

  return (
    <section id="contact" className="bg-navy-deep py-20 md:py-28 relative overflow-hidden">
      {/* Background decorative glow */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-red/5 blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="mb-12 text-center">
          <span className="text-sm font-semibold uppercase tracking-wide text-brand-red">
            {t.contact.eyebrow}
          </span>
          <h2 className="mt-3 font-heading text-3xl font-extrabold text-white md:text-4xl text-balance max-w-3xl mx-auto">
            {t.contact.titleLine1} <br />
            <span className="text-brand-red">{t.contact.titleLine2}</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* --- LEFT: GOOGLE MAP --- */}
          <div className="group relative h-[400px] lg:h-auto overflow-hidden rounded-2xl bg-navy-muted/20 border border-white/10 shadow-xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2800.000000!2d-73.700000!3d45.500000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDXCsDMwJzAwLjAiTiA3M8KwNDInMDAuMCJX!5e0!3m2!1sfr!2sca!4v1000000000000!5m2!1sfr!2sca"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale-[20%] transition-all duration-500 group-hover:grayscale-0"
            />
            
            <div className="absolute bottom-4 left-4 rounded-full bg-navy/80 backdrop-blur-sm px-4 py-2 text-xs font-medium text-white border border-white/10">
              <MapPin className="inline-block size-3 text-brand-red mr-1" />
              {t.contact.findOnMaps}
            </div>
          </div>

          {/* --- RIGHT: CONTACT INFO CARD --- */}
          <div className="flex flex-col justify-between rounded-2xl bg-navy border border-white/10 p-8 md:p-10 shadow-xl">
            
            {/* Top: Contact Info */}
            <div>
              <h3 className="font-heading text-2xl font-bold text-white">{t.contact.infoTitle}</h3>

              <div className="mt-6 space-y-4">
                {/* Address */}
                <div className="flex items-start gap-4 group">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-navy-muted/20 border border-white/5 group-hover:border-brand-red/50 transition-colors">
                    <MapPin className="size-5 text-navy-muted group-hover:text-brand-red transition-colors" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-navy-muted/80">{t.contact.addressLabel}</p>
                    <p className="text-white font-medium">{t.contact.addressValue}</p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4 group">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-navy-muted/20 border border-white/5 group-hover:border-brand-red/50 transition-colors">
                    <Phone className="size-5 text-navy-muted group-hover:text-brand-red transition-colors" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-navy-muted/80">{t.contact.phoneLabel}</p>
                    <p className="text-white font-medium">514-977-0491</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4 group">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-navy-muted/20 border border-white/5 group-hover:border-brand-red/50 transition-colors">
                    <Mail className="size-5 text-navy-muted group-hover:text-brand-red transition-colors" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-navy-muted/80">{t.contact.emailLabel}</p>
                    <p className="text-white font-medium">info@equipesitepro.ca</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom: The "CTA" Pitch Merged In */}
            <div className="mt-8 border-t border-white/10 pt-8">
              <h4 className="text-xl font-bold text-white">
                {t.contact.pitchTitle}
              </h4>
              <p className="mt-2 text-sm text-navy-muted">
                {t.contact.pitchBody}
              </p>
              
              <div className="mt-6">
                <Button 
                  className="bg-brand-red text-white hover:bg-brand-red/90 px-8 py-6"
                  asChild
                >
                  <a 
                    href="https://cal.com/elijah-davis-dbbrz8/15min" 
                    data-cal-namespace=""
                    data-cal-config='{"theme":"dark", "styles": {"branding": {"brandColor": "#d62b2b"}}}'
                  >
                    {t.common.bookFreeCall}
                    <ArrowRight className="size-4 ml-2" />
                  </a>
                </Button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
