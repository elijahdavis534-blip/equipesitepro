"use client";

import { Monitor, Calendar, CheckCircle, Image as ImageIcon, HelpCircle, Globe } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/lib/i18n/language-context";

// Icons stay in code and map by index to the translated items in the dictionary.
const OUTCOME_ICONS = [Globe, Monitor, ImageIcon, Calendar, CheckCircle, HelpCircle];

export function StoneOutcomes() {
  const { t } = useLanguage();

  return (
    <section
      id="services"
      className="border-b border-border bg-background py-20 md:py-28"
      aria-labelledby="solution-heading"
    >
      <div className="container mx-auto px-6" id="solution">
        <div className="mx-auto flex max-w-2xl flex-col items-center gap-4 text-center">
          <span className="text-sm font-semibold uppercase tracking-wide text-brand-red">
            {t.outcomes.eyebrow}
          </span>
          <h2
            id="solution-heading"
            className="text-balance font-heading text-3xl font-extrabold text-navy md:text-4xl"
          >
            {t.outcomes.titlePlain}
            <span className="text-brand-red">{t.outcomes.titleAccent}</span>
          </h2>
          <p className="text-lg leading-relaxed text-muted-foreground">
            {t.outcomes.descriptionPlain}
            <span className="font-semibold text-navy">{t.outcomes.descriptionAccent}</span>
            {t.outcomes.descriptionEnd}
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {t.outcomes.items.map((item, index) => {
            const Icon = OUTCOME_ICONS[index] ?? Globe;
            return (
              <Card
                key={item.title}
                className="border-border shadow-sm transition-all hover:shadow-md hover:-translate-y-1 duration-300"
              >
                <CardContent className="flex flex-col gap-4 p-8">
                  <div className="flex size-12 items-center justify-center rounded-xl bg-accent">
                    <Icon className="size-6 text-brand-red" aria-hidden="true" />
                  </div>
                  <div className="flex flex-col gap-3">
                    <div>
                      <h3 className="font-heading text-xl font-bold text-navy">
                        {item.title}
                      </h3>
                      <div className="mt-2 h-1 w-10 rounded-full bg-brand-red" />
                    </div>
                    <p className="leading-relaxed text-muted-foreground">
                      {item.description}
                    </p>
                    <div className="flex items-start gap-2 text-sm text-navy font-medium pt-2">
                      <CheckCircle className="size-4 text-brand-red mt-0.5 shrink-0" />
                      <span>{item.bullet}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
