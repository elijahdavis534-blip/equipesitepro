"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"

// Replace these with your 4 actual image file names inside your /public folder
const HERO_IMAGES = [
  "/stone-hero-1.jpg", 
  "/stone-hero-2.jpg",
  "/stone-hero-3.jpg",
  "/stone-hero-4.jpg",
]

export function HeroSlideshow() {
  const [currentIndex, setCurrentIndex] = useState(0)

  // Automatically switch images every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % HERO_IMAGES.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative h-full w-full overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <Image
            src={HERO_IMAGES[currentIndex]}
            alt="Un entrepreneur utilisant un système IA pour générer des clients"
            fill
            priority
            className="h-full w-full object-cover"
          />
        </motion.div>
      </AnimatePresence>
    </div>
  )
}