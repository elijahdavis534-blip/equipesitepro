"use client";

import Link from "next/link";
import { ArrowRight, Clock, HeartHandshake, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/i18n/language-context";

const CARD_ICONS = [Clock, HeartHandshake, ShieldCheck];

export function PreviewPromise() {
  const { t } = useLanguage();
  const preview = t.preview;

  return (
    <section
      className="relative overflow-hidden bg-navy py-20 md:py-28"
      aria-labelledby="preview-heading"
    >
      {/* Soft brand glow, purely decorative */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 top-1/3 size-96 rounded-full bg-brand-red/10 blur-3xl"
      />

      <div className="container relative mx-auto flex flex-col items-center gap-14 px-6">
        {/* Heading block */}
        <div className="flex max-w-2xl flex-col items-center gap-5 text-center">
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium text-navy-muted">
            <span className="size-1.5 rounded-full bg-brand-red" />
            {preview.eyebrow}
          </span>

          <h2
            id="preview-heading"
            className="text-balance font-heading text-3xl font-extrabold leading-tight text-white md:text-4xl"
          >
            {preview.title}
          </h2>

          <p className="max-w-xl text-pretty text-lg leading-relaxed text-navy-muted">
            {preview.description}
          </p>
        </div>

        {/* Trust cards */}
        <div className="grid w-full gap-6 md:grid-cols-3">
          {preview.cards.map((card, index) => {
            const Icon = CARD_ICONS[index] ?? Clock;
            return (
              <div
                key={card.title}
                className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-colors hover:border-brand-red/40 hover:bg-white/[0.06]"
              >
                <span className="flex size-12 items-center justify-center rounded-xl bg-brand-red/15 text-brand-red">
                  <Icon className="size-6" aria-hidden="true" />
                </span>
                <h3 className="font-heading text-xl font-bold text-white">
                  {card.title}
                </h3>
                <p className="text-pretty leading-relaxed text-navy-muted">
                  {card.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Stats strip */}
        <div className="grid w-full max-w-3xl grid-cols-1 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-3">
          {preview.stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center gap-1 bg-navy px-6 py-8 text-center"
            >
              <span className="font-heading text-3xl font-extrabold text-brand-red md:text-4xl">
                {stat.value}
              </span>
              <span className="text-sm font-medium uppercase tracking-wide text-navy-muted">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <Link href="#contact">
          <Button
            size="lg"
            className="bg-brand-red text-white hover:bg-brand-red/90"
          >
            {preview.cta}
            <ArrowRight />
          </Button>
        </Link>
      </div>
    </section>
  );
}
