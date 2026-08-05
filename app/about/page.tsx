"use client"

import { StoneNavbar } from "@/components/stone/navbar";
import { Footer } from "@/components/stone/footer";
import { Check, X, Shield, Zap, Smartphone, Star, MessageCircle, Users, ArrowRight, Map, DollarSign } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/i18n/language-context";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, transition: { duration: 0.6 } },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function AboutPage() {
  const { t } = useLanguage();
  const a = t.about;

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Brand Glow Background */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 size-[800px] rounded-full bg-navy/10 blur-[120px]" />
        <div className="absolute -bottom-10 -right-40 size-[800px] rounded-full bg-brand-red/5 blur-[120px]" />
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent" />
      </div>

      <StoneNavbar />
      <main className="pt-28 pb-20 relative z-10">
        <div className="container mx-auto px-6 max-w-4xl">
          
          {/* --- HERO SECTION --- */}
          <div className="mb-16 text-center">
            <span className="text-sm font-semibold uppercase tracking-wide text-brand-red">
              {a.eyebrow}
            </span>
            <h1 className="mt-3 font-heading text-4xl font-extrabold text-navy md:text-5xl text-balance max-w-3xl mx-auto">
              {a.titlePlain}<span className="text-brand-red">{a.titleAccent}</span>{a.titleEnd}
            </h1>
          </div>

          {/* --- SECTION 1: THE GOOGLE MAPS FUNNEL --- */}
          <div className="mb-16 rounded-2xl border border-border/60 bg-card p-8 md:p-12 shadow-sm">
            <div className="flex items-center gap-2 mb-4 text-brand-red font-semibold">
              <Map className="size-5" />
              <span>{a.funnelKicker}</span>
            </div>
            
            <h2 className="font-heading text-2xl font-bold text-navy mb-4">
              {a.funnelTitle}
            </h2>
            
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                <strong className="text-navy">{a.funnelStep1Label}</strong>{a.funnelStep1}
              </p>
              <p>
                <strong className="text-navy">{a.funnelStep2Label}</strong>{a.funnelStep2Part1}<span className="font-semibold text-navy">{a.funnelStep2Emph}</span>{a.funnelStep2Part2}
              </p>
              <p>
                <strong className="text-navy">{a.funnelStep3Label}</strong>{a.funnelStep3}
              </p>
            </div>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 bg-navy/5 p-6 rounded-xl border border-border/50">
              <div className="text-center">
                <div className="text-4xl font-bold text-brand-red">{a.stat1Value}</div>
                <div className="text-xs font-medium text-navy uppercase tracking-wider">{a.stat1Label}</div>
                <div className="text-sm text-muted-foreground mt-1">{a.stat1Desc}</div>
              </div>
              <div className="text-center border-t md:border-t-0 md:border-l border-border/30 pt-4 md:pt-0 md:pl-4">
                <div className="text-4xl font-bold text-navy">{a.stat2Value}</div>
                <div className="text-xs font-medium text-navy uppercase tracking-wider">{a.stat2Label}</div>
                <div className="text-sm text-muted-foreground mt-1">{a.stat2Desc}</div>
              </div>
              <div className="text-center border-t md:border-t-0 md:border-l border-border/30 pt-4 md:pt-0 md:pl-4">
                <div className="text-4xl font-bold text-brand-red">{a.stat3Value}</div>
                <div className="text-xs font-medium text-navy uppercase tracking-wider">{a.stat3Label}</div>
                <div className="text-sm text-muted-foreground mt-1">{a.stat3Desc}</div>
              </div>
            </div>
          </div>

          {/* --- SECTION 2: THE REAL COST OF AN OUTDATED WEBSITE --- */}
          <div className="mb-16 rounded-2xl border border-border/60 bg-card p-8 md:p-12 shadow-sm">
            <div className="flex items-center gap-2 mb-4 text-brand-red font-semibold">
              <DollarSign className="size-5" />
              <span>{a.costKicker}</span>
            </div>

            <h2 className="font-heading text-2xl font-bold text-navy mb-4">
              {a.costTitle}
            </h2>
            
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                {a.costP1Plain}<strong className="text-navy">{a.costP1Emph}</strong>
              </p>
              <p>
                {a.costP2}
              </p>
              <p>
                {a.costP3Part1}<span className="text-navy font-medium">{a.costP3Emph1}</span>{a.costP3Part2}<span className="text-navy font-medium">{a.costP3Emph2}</span>{a.costP3Part3}
              </p>
              <p>
                {a.costP4Part1}<span className="text-navy font-medium">{a.costP4Emph}</span>
              </p>
            </div>
          </div>

          {/* --- SECTION 3: OUR SOLUTION --- */}
          <div className="mb-16 rounded-2xl bg-navy p-8 md:p-12 text-white shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-red/5 blur-[80px] pointer-events-none" />
            
            <div className="relative z-10">
              <h2 className="font-heading text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <Zap className="size-5 text-brand-red" />
                {a.solutionTitle}
              </h2>
              
              <p className="text-navy-muted leading-relaxed max-w-3xl">
                {a.solutionP1}
              </p>
              <p className="text-navy-muted leading-relaxed max-w-3xl mt-4">
                {a.solutionP2}
              </p>

              <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <div className="text-brand-red font-bold text-3xl">{a.solutionCard1Value}</div>
                  <div className="text-sm font-medium text-white">{a.solutionCard1Label}</div>
                  <div className="text-xs text-navy-muted mt-1">{a.solutionCard1Desc}</div>
                </div>
                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <div className="text-white font-bold text-3xl">{a.solutionCard2Value}</div>
                  <div className="text-sm font-medium text-white">{a.solutionCard2Label}</div>
                  <div className="text-xs text-navy-muted mt-1">{a.solutionCard2Desc}</div>
                </div>
                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <div className="text-white font-bold text-3xl">{a.solutionCard3Value}</div>
                  <div className="text-sm font-medium text-white">{a.solutionCard3Label}</div>
                  <div className="text-xs text-navy-muted mt-1">{a.solutionCard3Desc}</div>
                </div>
              </div>
            </div>
          </div>

          {/* --- SECTION 4: THE COMPARISON --- */}
          <div className="mb-16 overflow-x-auto">
            <h2 className="font-heading text-2xl font-bold text-navy text-center mb-6">
              {a.comparisonTitle}
            </h2>
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-border bg-navy/5">
                  <th className="p-4 text-left font-semibold text-navy w-1/3">{a.comparisonColTraditional}</th>
                  <th className="p-4 text-center font-semibold text-navy w-1/3">{a.comparisonColVs}</th>
                  <th className="p-4 text-left font-semibold text-brand-red w-1/3">{a.comparisonColUs}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {a.comparisonRows.map((row, i) => (
                  <tr key={i}>
                    <td className="p-4 text-muted-foreground">{row.traditional}</td>
                    <td className="p-4 text-center text-xs text-muted-foreground">{a.comparisonColVs}</td>
                    <td className="p-4 font-medium text-navy">{row.us}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* --- SECTION 5: THE BOTTOM LINE (CTA ONLY) --- */}
          <div className="text-center border-t border-border pt-12 mt-8">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/#contact">
                <Button className="bg-brand-red text-white hover:bg-brand-red/90 px-8 py-6">
                  {a.ctaBook}
                  <ArrowRight className="size-4 ml-2" />
                </Button>
              </Link>
              <Link href="/#pricing">
                <Button variant="outline" className="border-navy-muted/40 text-navy hover:bg-navy/5 px-8 py-6">
                  {a.ctaPricing}
                </Button>
              </Link>
            </div>
          </div>

        </div>
      </main>
      <Footer />
    </div>
  );
}
