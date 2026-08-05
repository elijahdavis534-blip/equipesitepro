"use client"

import * as React from "react"
import Image from "next/image"
import useEmblaCarousel from "embla-carousel-react"
import { ChevronLeft, ChevronRight, MapPin } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/i18n/language-context"

// Non-translatable data (images + anchor links) stays in code and merges by index
// with the translated slide copy from the dictionary.
const slideMeta = [
  { image: "/gallery-1.jpg", ctaLink: "#showcase" },
  { image: "/gallery-2.jpg", ctaLink: "#contact" },
]

export function AnimatedGallery() {
  const { t } = useLanguage()
  const slides = t.gallery.slides.map((slide, index) => ({
    ...slide,
    ...slideMeta[index],
  }))
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })
  const [selectedIndex, setSelectedIndex] = React.useState(0)
  const [scrollSnaps, setScrollSnaps] = React.useState<number[]>([])

  const scrollPrev = React.useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi])
  const scrollNext = React.useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi])

  const onSelect = React.useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi, setSelectedIndex])

  React.useEffect(() => {
    if (!emblaApi) return
    setScrollSnaps(emblaApi.scrollSnapList())
    emblaApi.on("select", onSelect)
    onSelect()
  }, [emblaApi, onSelect])

  return (
    <section className="bg-navy-deep py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="mb-14 text-center">
          <span className="text-sm font-semibold uppercase tracking-wide text-brand-red">
            {t.gallery.eyebrow}
          </span>
          <h2 className="mt-3 font-heading text-3xl font-extrabold text-white md:text-4xl text-balance max-w-3xl mx-auto">
            {t.gallery.titleLine1}<br />
            <span className="text-brand-red">{t.gallery.titleLine2}</span>
          </h2>
        </div>

        <div className="mx-auto max-w-6xl">
          <div className="overflow-hidden rounded-2xl bg-white/[0.03] border border-white/10 shadow-xl" ref={emblaRef}>
            <div className="flex">
              {slides.map((slide, index) => (
                <div key={index} className="flex min-w-0 flex-[0_0_100%] flex-col lg:flex-row">
                  
                  <div className="relative aspect-square w-full lg:aspect-auto lg:w-1/2 bg-navy-muted/20">
                    <Image
                      src={slide.image}
                      alt={slide.title}
                      fill
                      className="object-cover"
                    />
                    
                    <div className="absolute bottom-6 left-6 flex gap-2">
                      <Button
                        variant="outline"
                        size="icon"
                        className="size-10 rounded-full bg-white/10 backdrop-blur-md hover:bg-white/20 border-white/20 text-white"
                        onClick={scrollPrev}
                      >
                        <ChevronLeft className="size-5" />
                      </Button>
                      <Button
                        variant="outline"
                        size="icon"
                        className="size-10 rounded-full bg-white/10 backdrop-blur-md hover:bg-white/20 border-white/20 text-white"
                        onClick={scrollNext}
                      >
                        <ChevronRight className="size-5" />
                      </Button>
                    </div>

                    <div className="absolute bottom-6 right-6 flex gap-1.5">
                      {scrollSnaps.map((_, i) => (
                        <div
                          key={i}
                          className={cn(
                            "h-1 rounded-full transition-all",
                            i === selectedIndex ? "w-6 bg-brand-red" : "w-4 bg-white/40"
                          )}
                        />
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col justify-center p-8 md:p-12 lg:w-1/2">
                    <div className="flex items-center gap-2 text-sm font-medium text-brand-red">
                      <MapPin className="size-4" />
                      {slide.tag}
                    </div>
                    
                    <h3 className="mt-4 font-heading text-3xl font-bold text-white md:text-4xl">
                      {slide.title}
                    </h3>
                    <p className="mt-2 text-lg text-navy-muted">
                      {slide.subtitle}
                    </p>

                    <div className="mt-6 flex items-baseline gap-2">
                      <span className="font-heading text-6xl font-extrabold text-brand-red md:text-7xl">
                        {slide.statNumber}
                      </span>
                      <span className="text-sm text-navy-muted">{slide.statText}</span>
                    </div>

                    <p className="mt-4 text-[15px] leading-relaxed text-navy-muted/90">
                      {slide.description}
                    </p>

                    <div className="mt-8">
                      <Button 
                        className="bg-brand-red text-white hover:bg-brand-red/90 px-8 py-6"
                        asChild
                      >
                        <a href={slide.ctaLink}>{slide.ctaText}</a>
                      </Button>
                    </div>
                  </div>

                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 flex items-center gap-4 text-sm font-semibold tracking-widest">
            <span className="text-brand-red">
              {String(selectedIndex + 1).padStart(2, '0')}
            </span>
            <div className="h-px flex-1 bg-navy-muted/40" />
            <span className="text-navy-muted">
              {String(scrollSnaps.length).padStart(2, '0')}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
