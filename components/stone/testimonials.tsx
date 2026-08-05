"use client"

import { Star } from "lucide-react"
import { useEffect, useState } from "react"
import { RedIcon, NavyIcon } from "@/components/stone/testimonial-icons"
import { useLanguage } from "@/lib/i18n/language-context"

export function Testimonials() {
  const { t } = useLanguage()

  // Pick 3 random testimonial indices once on mount, then read the copy for those
  // indices from the active language so the toggle translates them in place.
  const [indices, setIndices] = useState<number[]>([0, 1, 2])

  useEffect(() => {
    const all = Array.from({ length: t.testimonials.items.length }, (_, i) => i)
    const shuffled = all.sort(() => 0.5 - Math.random())
    setIndices(shuffled.slice(0, 3))
    // Only shuffle once on mount; language changes reuse the same indices.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const testimonials = indices.map((i) => t.testimonials.items[i]).filter(Boolean)

  return (
    <section id="testimonials" className="bg-secondary py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto mb-12 max-w-2xl text-center md:mb-16">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">
            {t.testimonials.eyebrow}
          </p>
          <h2 className="font-heading text-3xl font-bold tracking-tight text-navy md:text-4xl text-balance">
            {t.testimonials.title}
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((item, index) => (
            <figure
              key={item.name}
              className="flex flex-col rounded-2xl border border-border bg-card p-6 shadow-sm md:p-8"
            >
              <div className="mb-4 flex gap-1" aria-hidden="true">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-4 fill-primary text-primary" />
                ))}
              </div>
              <blockquote className="flex-1 text-pretty leading-relaxed text-navy">{`"${item.quote}"`}</blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-border pt-6">

                {/* --- PERFECTLY ROUNDED BRAND AVATAR --- */}
                <div className="flex size-10 shrink-0 items-center justify-center rounded-full">
                  {index % 2 === 0 ? <RedIcon /> : <NavyIcon />}
                </div>

                <div>
                  <div className="font-semibold text-navy">{item.name}</div>
                  <div className="text-sm text-muted-foreground">{item.role}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
