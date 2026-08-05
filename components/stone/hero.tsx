"use client";

import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HeroSlideshow } from "@/components/stone/hero-images";
import { useLanguage } from "@/lib/i18n/language-context";

export function StoneHero() {
  const { t } = useLanguage();

  return (
    <section
      className="relative overflow-hidden bg-navy"
      aria-labelledby="hero-heading"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage:
            "radial-gradient(ellipse 80% 60% at 50% 0%, #000 40%, transparent 100%)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-24 size-96 rounded-full bg-brand-red/20 blur-3xl"
      />

      <div className="container relative mx-auto grid items-center gap-12 px-6 py-20 lg:grid-cols-2 lg:gap-16 lg:py-28">
        {/* Left */}
        <div className="flex flex-col gap-6">
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium text-navy-muted">
            <span className="size-1.5 rounded-full bg-brand-red" />
            {t.hero.badge}
          </span>

          <h1
            id="hero-heading"
            className="text-balance font-heading text-4xl font-extrabold leading-tight text-white md:text-5xl lg:text-6xl"
          >
            {t.hero.titleLine1} <br />
            <span className="text-brand-red">{t.hero.titleLine2}</span>
          </h1>

          <p className="max-w-xl text-pretty text-lg leading-relaxed text-navy-muted">
            {t.hero.description}
          </p>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Link href="#contact">
              <Button
                size="lg"
                className="w-full bg-brand-red text-white hover:bg-brand-red/90 sm:w-auto"
              >
                {t.hero.ctaPrimary}
                <ArrowRight />
              </Button>
            </Link>
            <Link href="#how-it-works">
              <Button
                size="lg"
                variant="outline"
                className="w-full border-white/30 bg-transparent text-white hover:bg-white/10 hover:text-white sm:w-auto"
              >
                <Play className="size-4" />
                {t.hero.ctaSecondary}
              </Button>
            </Link>
          </div>
        </div>

        <div className="relative h-[400px] lg:h-full">
          <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-brand-red/20 to-transparent blur-2xl" />
          <HeroSlideshow />
        </div>
      </div>
    </section>
  );
}
