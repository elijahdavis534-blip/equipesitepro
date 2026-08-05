"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/i18n/language-context";

export function StoneHowItWorks() {
  const { t } = useLanguage();

  return (
    <section
      id="how-it-works"
      className="bg-navy-deep py-20 md:py-28"
      aria-labelledby="how-heading"
    >
      <div className="container mx-auto px-6">
        <div className="mx-auto flex max-w-2xl flex-col items-center gap-4 text-center">
          <span className="text-sm font-semibold uppercase tracking-wide text-brand-red">
            {t.howItWorks.eyebrow}
          </span>
          <h2
            id="how-heading"
            className="text-balance font-heading text-3xl font-extrabold text-white md:text-4xl"
          >
            {t.howItWorks.titlePlain}<span className="text-brand-red">{t.howItWorks.titleAccent}</span>
          </h2>
          <p className="text-lg leading-relaxed text-navy-muted">
            {t.howItWorks.subtitle}
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {t.howItWorks.steps.map(({ title, description }, index) => (
            <div
              key={title}
              className="relative flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-8"
            >
              <span className="font-heading text-5xl font-extrabold text-brand-red">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="font-heading text-xl font-bold text-white">
                {title}
              </h3>
              <p className="leading-relaxed text-navy-muted">{description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Link href="#contact">
            <Button
              size="lg"
              className="bg-brand-red text-white hover:bg-brand-red/90"
            >
              {t.howItWorks.cta}
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
