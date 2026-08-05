"use client"

import { useEffect, useState } from "react"

export function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollPx = document.documentElement.scrollTop
      const winHeightPx =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight
      const scrolled = `${(scrollPx / winHeightPx) * 100}%`
      setScrollProgress(parseFloat(scrolled))
    }

    window.addEventListener("scroll", updateScrollProgress)
    
    return () => {
      window.removeEventListener("scroll", updateScrollProgress)
    }
  }, [])

  return (
    <div className="fixed top-0 left-0 z-50 h-1 w-full bg-navy/50">
      <div
        className="h-full bg-brand-red transition-all duration-100 ease-out"
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  )
}