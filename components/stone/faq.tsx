"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { useLanguage } from "@/lib/i18n/language-context"

export function FAQ() {
  const { t } = useLanguage()

  return (
    <section id="faq" className="bg-secondary py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl">
          <div className="mb-12 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">{t.faq.eyebrow}</p>
            <h2 className="font-heading text-3xl font-bold tracking-tight text-navy md:text-4xl text-balance">
              {t.faq.title}
            </h2>
          </div>

          <Accordion type="single" collapsible className="w-full">
            {t.faq.items.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-border">
                <AccordionTrigger className="text-left font-semibold text-navy hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="leading-relaxed text-muted-foreground">{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
