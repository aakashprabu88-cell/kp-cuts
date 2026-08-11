import { Check } from "lucide-react";
import SectionHeading from "./SectionHeading";

const tiers = [
  {
    name: "Short-form",
    price: "₹799",
    unit: "/ reel",
    desc: "Reels, Shorts & TikTok cuts",
    features: [
      "1 edit up to 60s",
      "Captions & motion titles",
      "2 revision rounds",
      "48h delivery",
    ],
    featured: false,
  },
  {
    name: "Long-form",
    price: "₹2,999",
    unit: "/ video",
    desc: "YouTube & podcast edits",
    features: [
      "Up to 20min runtime",
      "Full structure & pacing pass",
      "Sound design + color grade",
      "3 revision rounds",
      "5-7 day delivery",
    ],
    featured: true,
  },
  {
    name: "Retainer",
    price: "Let's talk",
    unit: "/ month",
    desc: "For creators posting weekly",
    features: [
      "4-8 edits per month",
      "Priority turnaround",
      "Fixed monthly rate",
      "Direct WhatsApp access",
    ],
    featured: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading
        eyebrow="pricing"
        title="Simple, flat rates"
        sub="No hourly billing games. One price per project, agreed before we start."
      />

      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {tiers.map((t) => (
          <div
            key={t.name}
            className={`relative rounded-2xl border p-7 ${
              t.featured
                ? "border-accent/60 bg-panel"
                : "border-line bg-panel"
            }`}
          >
            {t.featured && (
              <span className="absolute -top-3 left-7 rounded-full bg-accent px-3 py-1 font-mono text-xs font-semibold text-white">
                most booked
              </span>
            )}
            <p className="font-mono text-sm text-accent">{t.name}</p>
            <p className="mt-3 flex items-baseline gap-1">
              <span className="text-3xl font-bold text-white">{t.price}</span>
              <span className="text-sm text-fog">{t.unit}</span>
            </p>
            <p className="mt-1 text-sm text-fog">{t.desc}</p>
            <ul className="mt-6 space-y-3">
              {t.features.map((f) => (
                <li key={f} className="flex items-start gap-3 text-sm text-fog">
                  <Check size={16} className="mt-0.5 shrink-0 text-teal" />
                  {f}
                </li>
              ))}
            </ul>
            <a
              href="#contact"
              className={`mt-8 block rounded-full py-3 text-center text-sm font-semibold transition-colors ${
                t.featured
                  ? "bg-accent text-white hover:bg-accent-soft"
                  : "border border-line text-mist hover:border-accent hover:text-accent"
              }`}
            >
              Start a project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
