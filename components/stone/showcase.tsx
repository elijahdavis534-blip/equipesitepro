"use client"

import * as React from "react"
import Image from "next/image"
import { X, ExternalLink } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { useLanguage } from "@/lib/i18n/language-context"
import type { Dictionary } from "@/lib/i18n/dictionary"

// --- DATA CONFIGURATION (6 PROJECTS) ---
const showcaseProjects = [
  {
    id: 1,
    title: "Zéro Tension",
    category: "Massothérapeute",
    beforeImage: "/showcase-1-before.jpg",
    afterImage: "/showcase-1-after.jpg",
    liveUrl: "https://zero-tension-sport-excellence-lt6r.vercel.app", 
  },
  {
    id: 2,
    title: "Iridology Canada",
    category: "Naturopathe",
    beforeImage: "/showcase-2-before.jpg",
    afterImage: "/showcase-2-after.jpg",
    liveUrl: "https://paysagiste-montreal-equipesitepro.vercel.app",
  },
  {
    id: 3,
    title: "Électricien Pro",
    category: "Service",
    beforeImage: "/showcase-3-before.jpg",
    afterImage: "/showcase-3-after.jpg",
    liveUrl: "https://electricien-pro-equipesitepro.vercel.app",
  },
]

export function ProjectShowcase() {
  const { t } = useLanguage()
  const tc = t.showcase
  const [selectedProject, setSelectedProject] = React.useState<null | typeof showcaseProjects[0]>(null)

  return (
    <section id="showcase" className="bg-navy-deep py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-6 mb-12 text-center relative z-10">
        <span className="text-sm font-semibold uppercase tracking-wide text-brand-red">
          {tc.eyebrow}
        </span>
        <h2 className="mt-3 font-heading text-3xl font-extrabold text-white md:text-4xl text-balance max-w-3xl mx-auto">
          {tc.titlePlain}<span className="text-brand-red">{tc.titleAccent}</span>
        </h2>
        <p className="mt-4 text-navy-muted max-w-2xl mx-auto">
          {tc.subtitlePlain}<span className="font-semibold text-brand-red">{tc.subtitleAccent}</span>.
        </p>
      </div>

      {/* --- STATIC GRID GALLERY WITH INDEPENDENT AUTO-SWITCH CARDS --- */}
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {showcaseProjects.map((project) => (
            <AutoCard key={project.id} project={project} tc={tc} onClick={() => setSelectedProject(project)} />
          ))}
        </div>
      </div>

      {/* --- LIGHTBOX MODAL WITH GLOWING BUTTON --- */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-navy-deep/95 backdrop-blur-md p-4 md:p-8"
          >
            <motion.div
              initial={{ scale: 0.8, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 20 }}
              transition={{ type: "spring", damping: 25 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl w-full rounded-2xl bg-navy border border-white/10 overflow-hidden shadow-2xl"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute right-4 top-4 z-40 rounded-full bg-navy/80 p-2 text-white backdrop-blur-sm transition-colors hover:bg-brand-red"
              >
                <X className="size-6" />
              </button>

              <div className="bg-navy-deep border-b border-white/10 p-6 text-center">
                <h3 className="text-2xl font-bold text-white">{selectedProject.title}</h3>
                <p className="text-sm text-navy-muted">
                  {tc.categories[selectedProject.category] ?? selectedProject.category}
                </p>
              </div>

              {/* Split Screen Comparison */}
              <div className="flex flex-col md:flex-row h-full min-h-[450px]">
                <div className="relative w-full md:w-1/2 aspect-square md:aspect-auto bg-navy-muted/20 border-b md:border-b-0 md:border-r border-white/10">
                  <Image
                    src={selectedProject.beforeImage}
                    alt={`${selectedProject.title} - ${tc.before}`}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute bottom-4 left-4 rounded-lg bg-black/70 px-3 py-1.5 text-sm font-semibold text-white backdrop-blur-sm border border-white/10">
                    {tc.simple}
                  </div>
                  <div className="absolute top-4 left-4 text-xs font-medium text-navy-muted">{tc.before}</div>
                </div>

                <div className="relative w-full md:w-1/2 aspect-square md:aspect-auto bg-navy-muted/20">
                  <Image
                    src={selectedProject.afterImage}
                    alt={`${selectedProject.title} - ${tc.after}`}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute bottom-4 left-4 rounded-lg bg-brand-red px-3 py-1.5 text-sm font-semibold text-white backdrop-blur-sm shadow-lg shadow-brand-red/30">
                    {tc.pro}
                  </div>
                  <div className="absolute top-4 left-4 text-xs font-medium text-brand-red">{tc.after}</div>
                </div>
              </div>

              {/* --- NEW: GLOWING VISIT BUTTON --- */}
              <div className="bg-navy-deep border-t border-white/10 p-6 flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="flex-1 text-center md:text-left">
                  <p className="text-lg italic text-navy-muted">
                    &quot;<span className="text-white font-medium">{tc.quotePart1}</span>{tc.quotePart2}<span className="text-brand-red font-semibold">{tc.quotePart3}</span>.&quot;
                  </p>
                </div>
                
                <a
                  href={selectedProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-brand-red px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(214,43,43,0.5)]"
                >
                  {tc.visitSite}
                  <ExternalLink className="size-4" />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

// --- SEPARATE AUTO-CARD COMPONENT ---
function AutoCard({
  project,
  tc,
  onClick,
}: {
  project: typeof showcaseProjects[0]
  tc: Dictionary["showcase"]
  onClick: () => void
}) {
  const [isPro, setIsPro] = React.useState(false)

  React.useEffect(() => {
    // Every 3.5 seconds, switch to the other image
    const timer = setInterval(() => {
      setIsPro((prev) => !prev)
    }, 3500)

    return () => clearInterval(timer)
  }, [])

  return (
    <div
      onClick={onClick}
      className="group relative aspect-[4/3] cursor-pointer overflow-hidden rounded-xl border border-white/10 bg-navy-muted/20 transition-all hover:scale-[1.02] hover:border-brand-red/50 hover:shadow-[0_0_40px_rgba(204,0,0,0.15)]"
    >
      {/* "Simple" (Before) - Removed grayscale & brightness filter */}
      <div className={`absolute inset-0 z-10 transition-all duration-700 ${isPro ? "opacity-0" : "opacity-100"}`}>
        <Image
          src={project.beforeImage}
          alt={`${project.title} - ${tc.before}`}
          fill
          className="object-cover" // <--- CHANGED: Removed 'grayscale brightness-75'
        />
        <div className="absolute bottom-4 left-4 rounded-lg bg-black/60 px-3 py-1.5 text-sm font-semibold text-white backdrop-blur-sm border border-white/10">
          {tc.simple}
        </div>
      </div>

      {/* "PRO" (After) */}
      <div className={`absolute inset-0 z-20 transition-all duration-700 ${isPro ? "opacity-100" : "opacity-0"}`}>
        <Image
          src={project.afterImage}
          alt={`${project.title} - ${tc.after}`}
          fill
          className="object-cover"
        />
        <div className="absolute bottom-4 left-4 rounded-lg bg-brand-red/90 px-3 py-1.5 text-sm font-semibold text-white backdrop-blur-sm shadow-lg shadow-brand-red/30">
          {tc.pro}
        </div>
      </div>

      {/* Overlay Text */}
      <div className="absolute inset-0 z-30 bg-gradient-to-t from-navy-deep/90 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="absolute bottom-4 right-4 z-30 translate-y-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 text-right">
        <p className="text-xs font-medium text-brand-red">{tc.categories[project.category] ?? project.category}</p>
        <p className="text-sm font-semibold text-white">{project.title}</p>
      </div>

      {/* Hover Label */}
      <div className="absolute inset-x-0 top-4 z-30 flex justify-center opacity-0 transition-all duration-500 group-hover:opacity-100">
        <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white backdrop-blur-md border border-white/20">
          {tc.fromSimpleToPro}
        </span>
      </div>
    </div>
  )
}
