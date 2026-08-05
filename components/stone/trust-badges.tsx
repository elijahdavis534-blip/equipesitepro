import {
  HardHat,
  Wrench,
  Leaf,
  Waves,
  PaintRoller,
  Hammer,
} from "lucide-react";

const INDUSTRIES = [
  { label: "Couvreurs", icon: HardHat },
  { label: "Services de bricolage", icon: Wrench },
  { label: "Paysagistes", icon: Leaf },
  { label: "Constructeurs de piscines", icon: Waves },
  { label: "Peintres", icon: PaintRoller },
  { label: "Entrepreneurs généraux", icon: Hammer },
];

const STATS = [
  { value: "100%", label: "Engagement envers la qualité" },
  { value: "4,6/5", label: "Note moyenne" },
  { value: "97 %", label: "Taux de fidélisation" },
];

export function StoneTrustBadges() {
  return (
    <section className="border-b border-border bg-background py-16 md:py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-center font-heading text-2xl font-bold text-navy md:text-3xl">
          Approuvé par des entrepreneurs partout en Amérique du Nord
        </h2>

        <ul className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {INDUSTRIES.map(({ label, icon: Icon }) => (
            <li
              key={label}
              className="flex flex-col items-center gap-3 rounded-xl border border-border bg-secondary p-5 text-center"
            >
              <Icon className="size-7 text-brand-red" aria-hidden="true" />
              <span className="text-sm font-medium text-navy">{label}</span>
            </li>
          ))}
        </ul>

        <div className="mt-12 flex flex-col items-center justify-center gap-8 sm:flex-row sm:gap-16">
          {STATS.map(({ value, label }) => (
            <div key={label} className="flex flex-col items-center">
              <span className="font-heading text-3xl font-extrabold text-brand-red md:text-4xl">
                {value}
              </span>
              <span className="mt-1 text-sm font-medium text-muted-foreground">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
