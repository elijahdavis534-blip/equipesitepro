"use client"

import * as React from "react"
import { dictionary, type Dictionary, type Language } from "@/lib/i18n/dictionary"

const STORAGE_KEY = "espro-lang"

type LanguageContextValue = {
  language: Language
  setLanguage: (language: Language) => void
  toggleLanguage: () => void
  /** The active translation dictionary for the current language. */
  t: Dictionary
}

const LanguageContext = React.createContext<LanguageContextValue | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = React.useState<Language>("fr")

  // Load the saved preference once on mount.
  React.useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY)
    if (stored === "fr" || stored === "en") {
      setLanguageState(stored)
    }
  }, [])

  // Keep <html lang> and localStorage in sync with the active language.
  React.useEffect(() => {
    document.documentElement.lang = language
    window.localStorage.setItem(STORAGE_KEY, language)
  }, [language])

  const setLanguage = React.useCallback((next: Language) => {
    setLanguageState(next)
  }, [])

  const toggleLanguage = React.useCallback(() => {
    setLanguageState((prev) => (prev === "fr" ? "en" : "fr"))
  }, [])

  const value = React.useMemo<LanguageContextValue>(
    () => ({
      language,
      setLanguage,
      toggleLanguage,
      t: dictionary[language],
    }),
    [language, setLanguage, toggleLanguage],
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = React.useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
