"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { StoneLogo } from "@/components/stone/logo";
import { useLanguage } from "@/lib/i18n/language-context";

export function StoneNavbar() {
  const { language, toggleLanguage, t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Menu items: hrefs stay constant, labels come from the active language.
  const menuItems = [
    { label: t.nav.services, href: "/#services" },
    { label: t.nav.howItWorks, href: "/#how-it-works" },
    { label: t.nav.pricing, href: "/#pricing" },
    { label: t.nav.testimonials, href: "/#testimonials" },
    { label: t.nav.about, href: "/about", special: true },
    { label: t.nav.blog, href: "/blog", special: true },
    { label: t.nav.contact, href: "/#contact" },
  ];

  // The code shown on the toggle is the language you'll switch TO.
  const nextLangCode = language === "fr" ? "EN" : "FR";
  const toggleLabel =
    language === "fr" ? t.common.switchToEnglish : t.common.switchToFrench;

  // Control navbar visibility based on scroll direction
  useEffect(() => {
    const controlNavbar = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        // Scrolling DOWN - Hide the navbar
        setIsVisible(false);
      } else {
        // Scrolling UP - Show the navbar
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", controlNavbar);
    return () => window.removeEventListener("scroll", controlNavbar);
  }, [lastScrollY]);

  return (
    <nav
      className={`sticky top-0 z-50 border-b border-white/10 bg-navy-deep/90 backdrop-blur-md supports-[backdrop-filter]:bg-navy-deep/70 py-1.5 transition-all duration-500 ${
        isVisible
          ? "translate-y-0 opacity-100"
          : "-translate-y-full opacity-0"
      }`}
    >
      <div className="container mx-auto flex flex-col gap-2 px-6 md:flex-row md:items-center md:justify-between md:gap-3">
        <div className="flex items-center justify-between">
          <Link href="/" aria-label={t.common.homeAria} className="group">
            <StoneLogo tone="light" />
          </Link>
          <Button
            variant="ghost"
            className="flex size-7 items-center justify-center text-white hover:bg-white/5 hover:text-white md:hidden"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            aria-label={isMenuOpen ? t.common.closeMenu : t.common.openMenu}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {/* Desktop nav - WITH RED HIGHLIGHT FOR ABOUT & BLOG */}
        <div className="hidden items-center gap-0.5 md:flex">
          {menuItems.map(({ label, href, special }) => (
            <Link key={href} href={href}>
              <Button
                variant="ghost"
                className={`text-sm transition-colors hover:bg-white/5 ${
                  special
                    ? "text-brand-red/80 hover:text-brand-red"
                    : "text-navy-muted hover:text-white"
                }`}
              >
                {label}
              </Button>
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-2 md:flex">
          {/* Language toggle */}
          <Button
            variant="ghost"
            onClick={toggleLanguage}
            aria-label={toggleLabel}
            title={toggleLabel}
            className="flex items-center gap-1.5 rounded-full border border-white/15 px-3 text-sm font-semibold text-navy-muted transition-colors hover:bg-white/5 hover:text-white"
          >
            <Globe className="size-4" aria-hidden="true" />
            {nextLangCode}
          </Button>

          <Link href="/#contact">
            <Button className="bg-brand-red text-white transition-all duration-300 hover:bg-gradient-to-r hover:from-brand-red hover:to-brand-red/80 hover:scale-105 hover:shadow-lg hover:shadow-brand-red/25">
              {t.common.freeConsultation}
            </Button>
          </Link>
        </div>

        {/* Mobile nav */}
        {isMenuOpen && (
          <div className="flex flex-col gap-1 pb-1 md:hidden">
            {menuItems.map(({ label, href, special }) => (
              <Link key={href} href={href} onClick={() => setIsMenuOpen(false)}>
                <Button
                  variant="ghost"
                  className={`w-full justify-start transition-colors hover:bg-white/5 ${
                    special
                      ? "text-brand-red/80 hover:text-brand-red"
                      : "text-navy-muted hover:text-white"
                  }`}
                >
                  {label}
                </Button>
              </Link>
            ))}

            {/* Language toggle (mobile) */}
            <Button
              variant="ghost"
              onClick={toggleLanguage}
              aria-label={toggleLabel}
              className="mt-1 w-full justify-start gap-2 text-navy-muted transition-colors hover:bg-white/5 hover:text-white"
            >
              <Globe className="size-4" aria-hidden="true" />
              {toggleLabel}
            </Button>

            <Link href="/#contact" onClick={() => setIsMenuOpen(false)}>
              <Button className="mt-2 w-full bg-brand-red text-white hover:bg-brand-red/90">
                {t.common.freeConsultation}
              </Button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
