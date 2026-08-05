import { StoneNavbar } from "@/components/stone/navbar"
import { StoneHero } from "@/components/stone/hero"
import { TrustedLogos } from "@/components/stone/trusted-logos"
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
        <TrustedLogos />
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