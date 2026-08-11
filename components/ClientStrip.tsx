const credits = [
  "GOKUL SRINIVASAN",
  "MUNDHINAM PAARTHENEY",
  "DAILY VLOGS",
  "CINEMATIC EDITS",
  "INSTAGRAM CREATOR",
  "SHORT FILM",
  "KP__CUTS PAGE",
];

export default function ClientStrip() {
  const row = credits.map((c) => `${c}  ✦  `).join("");

  return (
    <div className="relative overflow-hidden border-y border-line bg-panel py-6">
      <p className="mb-5 text-center font-mono text-[11px] uppercase tracking-[0.35em] text-fog">
        Selected credits &amp; lanes
      </p>
      <div className="animate-marquee flex whitespace-nowrap">
        <span className="pr-8 font-mono text-2xl font-semibold text-white/80">
          {row}
        </span>
        <span className="pr-8 font-mono text-2xl font-semibold text-white/80" aria-hidden="true">
          {row}
        </span>
      </div>
      <div className="glow-line absolute bottom-0 left-0 h-px w-full" />
    </div>
  );
}
