"use client";

import { Clock, HeartHandshake } from "lucide-react";
import { useLanguage } from "@/lib/i18n/language-context";

const ITEM_ICONS = [Clock, HeartHandshake];

export function PreviewPromise() {
  const { t } = useLanguage();
  const preview = t.preview;
  const items = preview.cards.slice(0, 2);

  return (
    <section
      className="relative overflow-hidden border-y border-white/10 bg-navy py-12"
      aria-labelledby="preview-heading"
    >
      <div className="container relative mx-auto flex flex-col gap-8 px-6">
        {/* Heading block */}
        <div className="flex flex-col gap-2">
          <span className="inline-flex w-fit items-center gap-2 text-xs font-medium uppercase tracking-wide text-brand-red">
            <span className="size-1.5 rounded-full bg-brand-red" />
            {preview.eyebrow}
          </span>
          <h2
            id="preview-heading"
            className="text-balance font-heading text-2xl font-extrabold leading-tight text-white md:text-3xl"
          >
            {preview.title}
          </h2>
        </div>

        {/* Two focus points */}
        <div className="grid gap-4 md:grid-cols-2">
          {items.map((item, index) => {
            const Icon = ITEM_ICONS[index] ?? Clock;
            return (
              <div
                key={item.title}
                className="group relative flex items-start gap-4 overflow-hidden rounded-xl border border-white/10 bg-white/[0.03] p-5 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-brand-red/40 hover:bg-white/[0.06] hover:shadow-[0_18px_40px_-18px_rgba(220,38,38,0.5)]"
              >
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-red/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                />
                <span className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-brand-red/15 text-brand-red transition-all duration-300 group-hover:scale-110 group-hover:bg-brand-red group-hover:text-white">
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <div className="flex flex-col gap-1">
                  <h3 className="font-heading text-base font-bold text-white">
                    {item.title}
                  </h3>
                  <p className="text-pretty text-sm leading-relaxed text-navy-muted">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
