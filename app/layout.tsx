import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ScrollProgress } from "@/components/stone/scroll-progress";
import { FloatingContact } from "@/components/stone/floating-contact";
import { BackToTop } from "@/components/stone/back-to-top";
import { LanguageProvider } from "@/lib/i18n/language-context";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "ÉquipeSitePRO — Votre site web professionnel au service de votre entreprise",
  description:
    "Nous construisons des sites web modernes et professionnels pour les entrepreneurs québécois. Design, configuration, et optimisation locale. Offre de lancement : site gratuit pendant 2 semaines.",
  generator: "v0.app",
};

export const viewport: Viewport = {
  themeColor: "#0d1b2a",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning className="bg-background scroll-smooth">
      <head />
      <body className={`${poppins.variable} relative font-sans antialiased`}>
        <LanguageProvider>
          <ScrollProgress />

          {children}

          <FloatingContact />
          <BackToTop />
        </LanguageProvider>
      </body>
    </html>
  );
}
