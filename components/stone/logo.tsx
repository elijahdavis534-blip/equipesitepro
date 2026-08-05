import Image from "next/image";
import { cn } from "@/lib/utils";

interface StoneLogoProps {
  className?: string;
  /** "light" renders white text (for dark backgrounds), "dark" renders navy text */
  tone?: "light" | "dark";
}

export function StoneLogo({ className, tone = "dark" }: StoneLogoProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-3 font-heading text-2xl font-extrabold tracking-tight", // Changed text-xl to text-2xl
        tone === "light" ? "text-white" : "text-navy",
        className,
      )}
    >
      {/* MUCH bigger logo image */}
      <Image 
        src="/Logo.png"
        alt="ÉquipeSitePRO Logo"
        width={64}             // Increased from 48 to 64
        height={64}            // Increased from 48 to 64
        className="size-32 object-contain shrink-0" // Changed size-12 to size-16 (64px)
      />
      
      <span className="flex items-baseline">
        ÉquipeSite
        <span className="text-brand-red">PRO</span>
      </span>
    </span>
  );
}