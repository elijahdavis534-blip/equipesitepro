"use client"

import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/i18n/language-context"

// Non-translatable data (price, highlight, booking link) stays in code and merges
// by index with the translated plan copy from the dictionary.
const planMeta = [
  {
    price: "2 000 $",
    highlighted: false,
    href: "/#contact",
    isBooking: false,
  },
  {
    price: "97 $",
    highlighted: true,
    href: "https://cal.com/elijah-davis-dbbrz8/15min",
    isBooking: true,
  },
]

export function Pricing() {
  const { t, language } = useLanguage()

  const plans = t.pricing.plans.map((plan, index) => ({
    ...plan,
    ...planMeta[index],
  }))

  return (
    <section id="pricing" className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto mb-12 max-w-2xl text-center md:mb-16">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">{t.pricing.eyebrow}</p>
          <h2 className="font-heading text-3xl font-bold tracking-tight text-navy md:text-4xl text-balance">
            {t.pricing.title}
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            {t.pricing.subtitle}
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2 max-w-4xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={
                plan.highlighted
                  ? "relative flex flex-col rounded-2xl bg-navy p-8 text-navy-foreground shadow-xl ring-1 ring-navy"
                  : "relative flex flex-col rounded-2xl border border-border bg-card p-8 shadow-sm"
              }
            >
              {plan.tag && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-xs font-semibold uppercase tracking-wide text-primary-foreground">
                  {plan.tag}
                </span>
              )}
              <h3
                className={
                  plan.highlighted ? "font-heading text-lg font-semibold" : "font-heading text-lg font-semibold text-navy"
                }
              >
                {plan.name}
              </h3>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="font-heading text-4xl font-bold">{plan.price}</span>
                {plan.cadence && (
                  <span className={plan.highlighted ? "text-sm text-navy-muted" : "text-sm text-muted-foreground"}>
                    {plan.cadence}
                  </span>
                )}
              </div>
              <p className={plan.highlighted ? "mt-3 text-sm leading-relaxed text-navy-muted" : "mt-3 text-sm leading-relaxed text-muted-foreground"}>
                {plan.description}
              </p>
              <ul className="mt-6 flex-1 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check
                      className={plan.highlighted ? "mt-0.5 size-5 shrink-0 text-primary" : "mt-0.5 size-5 shrink-0 text-primary"}
                    />
                    <span className={plan.highlighted ? "text-sm" : "text-sm text-navy"}>{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                asChild
                size="lg"
                className={
                  plan.highlighted
                    ? "mt-8 w-full bg-primary text-primary-foreground hover:bg-primary/90"
                    : "mt-8 w-full bg-navy text-navy-foreground hover:bg-navy-deep"
                }
              >
                <a
                  href={plan.href}
                  {...(plan.isBooking
                    ? {
                        "data-cal-namespace": "",
                        "data-cal-config": `{"theme":"dark", "locale":"${language}", "styles": {"branding": {"brandColor": "#d62b2b"}}}`,
                      }
                    : {})}
                >
                  {plan.cta}
                </a>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
