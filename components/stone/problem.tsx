"use client";

import Image from "next/image";
import Link from "next/link";
import { Clock, HeartHandshake, XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/i18n/language-context";

const PREVIEW_ICONS = [Clock, HeartHandshake];

export function StoneProblem() {
  const { t } = useLanguage();
  const previewItems = t.preview.cards.slice(0, 2);

  return (
    <section className="bg-navy py-20 md:py-28" aria-labelledby="problem-heading">
      <div className="container mx-auto flex flex-col gap-12 px-6 lg:gap-16">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="flex flex-col gap-6">

          <h2
            id="problem-heading"
            className="text-balance font-heading text-3xl font-extrabold text-white md:text-4xl"
          >
            {t.problem.titleLine1} <br />
            <span className="text-brand-red">{t.problem.titleLine2}</span>
          </h2>

          <p className="max-w-lg text-lg leading-relaxed text-navy-muted">
            {t.problem.description}
          </p>

          <ul className="flex flex-col gap-4">
            <li className="flex items-start gap-3">
              <XCircle className="mt-0.5 size-5 shrink-0 text-brand-red" />
              <span className="text-base font-medium text-white">
                {t.problem.bullet1}
              </span>
            </li>
            <li className="flex items-start gap-3">
              <XCircle className="mt-0.5 size-5 shrink-0 text-brand-red" />
              <span className="text-base font-medium text-white">
                {t.problem.bullet2}
              </span>
            </li>
            <li className="flex items-start gap-3">
              <XCircle className="mt-0.5 size-5 shrink-0 text-brand-red" />
              <span className="text-base font-medium text-white">
                {t.problem.bullet3}
              </span>
            </li>
          </ul>

          <div>
            <Link href="#solution">
              <Button className="bg-brand-red text-white hover:bg-brand-red/90">
                {t.problem.cta}
              </Button>
            </Link>
          </div>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
            <Image
              src="/stone-problem.png"
              alt={t.problem.imageAlt}
              width={720}
              height={560}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>

        {/* Our promise: 24h preview + human support */}
        <div className="flex flex-col gap-6 border-t border-white/10 pt-10">
          <div className="flex flex-col gap-2">
            <span className="inline-flex w-fit items-center gap-2 text-xs font-medium uppercase tracking-wide text-brand-red">
              <span className="size-1.5 rounded-full bg-brand-red" />
              {t.preview.eyebrow}
            </span>
            <h3 className="text-balance font-heading text-2xl font-extrabold leading-tight text-white md:text-3xl">
              {t.preview.title}
            </h3>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {previewItems.map((item, index) => {
              const Icon = PREVIEW_ICONS[index] ?? Clock;
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
                    <h4 className="font-heading text-base font-bold text-white">
                      {item.title}
                    </h4>
                    <p className="text-pretty text-sm leading-relaxed text-navy-muted">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
