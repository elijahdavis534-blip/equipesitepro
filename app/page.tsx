import { StoneNavbar } from "@/components/stone/navbar"
import { StoneHero } from "@/components/stone/hero"
import { StoneProblem } from "@/components/stone/problem"
import { StoneOutcomes } from "@/components/stone/outcomes"  // <--- CHANGED IMPORT
import { StoneHowItWorks } from "@/components/stone/how-it-works"
import { AnimatedGallery } from "@/components/stone/animated-gallery"
import { Testimonials } from "@/components/stone/testimonials"
import { Pricing } from "@/components/stone/pricing"
import { FAQ } from "@/components/stone/faq"
import { ProjectShowcase } from "@/components/stone/showcase"
import { ContactSection } from "@/components/stone/contact"
import { Footer } from "@/components/stone/footer"

export default function Page() {
  return (
    <div id="top" className="min-h-screen bg-background">
      <StoneNavbar />
      <main>
        <StoneHero />
        <div className="bg-navy" aria-hidden="true">
          <div className="container mx-auto flex items-center justify-center gap-4 px-6 py-2">
            <span className="h-px w-full max-w-xs bg-gradient-to-r from-transparent to-white/20" />
            <span className="size-2 shrink-0 rotate-45 bg-brand-red shadow-[0_0_16px_2px_rgba(220,38,38,0.5)]" />
            <span className="h-px w-full max-w-xs bg-gradient-to-l from-transparent to-white/20" />
          </div>
        </div>
        <StoneProblem />
        <StoneOutcomes />      {/* <--- CHANGED COMPONENT */}
        <StoneHowItWorks />
        <AnimatedGallery />
        <Testimonials />
        <Pricing />
        <FAQ />
        <ProjectShowcase />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
