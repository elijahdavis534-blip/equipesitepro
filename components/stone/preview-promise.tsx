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
        <div className="grid gap-6 md:grid-cols-2">
          {items.map((item, index) => {
            const Icon = ITEM_ICONS[index] ?? Clock;
            return (
              <div key={item.title} className="flex items-start gap-4">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-brand-red/15 text-brand-red">
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
