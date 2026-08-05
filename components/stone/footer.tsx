"use client"

import { StoneLogo } from "@/components/stone/logo"
import { useLanguage } from "@/lib/i18n/language-context"

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-navy-deep text-navy-foreground">
      <div className="container mx-auto px-4 py-14 md:px-6 md:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <StoneLogo tone="light" />
            <p className="mt-4 max-w-xs text-pretty text-sm leading-relaxed text-navy-muted">
              {t.footer.tagline}
            </p>
          </div>

          {t.footer.columns.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <h3 className="font-heading text-sm font-semibold text-navy-foreground">{col.title}</h3>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-navy-muted transition-colors hover:text-navy-foreground">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-navy-muted/20 pt-8 text-sm text-navy-muted sm:flex-row">
          <p>© {new Date().getFullYear()} ÉquipeSitePRO. {t.footer.rights}</p>
          <div className="flex gap-6">
            <a href="#" className="transition-colors hover:text-navy-foreground">
              {t.footer.privacy}
            </a>
            <a href="#" className="transition-colors hover:text-navy-foreground">
              {t.footer.terms}
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
