import { Button } from "@/components/ui/button"
import { ArrowRight, PhoneCall } from "lucide-react"

export function CTA() {
  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="relative overflow-hidden rounded-3xl bg-navy px-6 py-14 text-center md:px-12 md:py-20">
          <div
            className="pointer-events-none absolute inset-0 opacity-10"
            aria-hidden="true"
            style={{
              backgroundImage:
                "radial-gradient(circle at 20% 20%, var(--brand-red) 0, transparent 40%), radial-gradient(circle at 80% 80%, var(--brand-red) 0, transparent 40%)",
            }}
          />
          <div className="relative mx-auto max-w-2xl">
            <h2 className="font-heading text-3xl font-bold tracking-tight text-navy-foreground md:text-4xl text-balance">
              Prêt à obtenir un site web qui vous apporte réellement des clients&nbsp;?
            </h2>
            <p className="mt-4 text-pretty leading-relaxed text-navy-muted">
              Réservez un appel gratuit de 15&nbsp;minutes. Nous examinerons votre configuration actuelle et vous montrerons exactement ce qu&apos;un meilleur site pourrait faire pour vos résultats. Sans pression, sans jargon.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                Réservez votre appel gratuit
                <ArrowRight className="size-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-navy-muted/40 bg-transparent text-navy-foreground hover:bg-navy-foreground/10 hover:text-navy-foreground"
              >
                <PhoneCall className="size-4" />
                Appelez le (555) 012-3456
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}