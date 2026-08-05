"use client";

import Image from "next/image";
import Link from "next/link";
import { XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/i18n/language-context";

export function StoneProblem() {
  const { t } = useLanguage();

  return (
    <section className="bg-navy py-20 md:py-28" aria-labelledby="problem-heading">
      <div className="container mx-auto grid items-center gap-12 px-6 lg:grid-cols-2 lg:gap-16">
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
    </section>
  );
}
