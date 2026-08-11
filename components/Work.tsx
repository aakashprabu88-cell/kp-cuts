import { Film, MonitorPlay, Camera, Sparkles } from "lucide-react";
import SectionHeading from "./SectionHeading";

const projects = [
  {
    icon: Film,
    id: "01",
    title: "Mundhinam Paartheney",
    role: "Short film edit",
    desc: "Cut a narrative short film — story pacing, scene rhythm and a grade that carries the mood.",
    tags: ["Short film", "Cinematic", "Sound design"],
  },
  {
    icon: MonitorPlay,
    id: "02",
    title: "Gokul Srinivasan",
    role: "Creator edits",
    desc: "Edited content for one of India's biggest creators — retention-first cuts that hold millions of viewers.",
    tags: ["Big creator", "YouTube", "Retention"],
  },
  {
    icon: Camera,
    id: "03",
    title: "Daily vlog series",
    role: "Instagram influencer",
    desc: "Day-in-the-life vlogs cut daily — fast turnaround, hooks in the first second, clean captions.",
    tags: ["Vlogs", "Daily", "Instagram"],
  },
  {
    icon: Sparkles,
    id: "04",
    title: "kp__cuts page",
    role: "Own cinematic edits",
    desc: "My own page of cinematic edits and videos — where I experiment with transitions, looks and pacing.",
    tags: ["Original", "Cinematic", "Transitions"],
  },
];

export default function Work() {
  return (
    <section id="work" className="mx-auto max-w-6xl px-6 py-28">
      <SectionHeading
        eyebrow="selected work"
        title="Work that's already out there"
        sub="Real edits for real audiences — a short film, a top creator, daily vlogs, and my own cinematic edits."
      />

      <div className="mt-14 grid gap-6 md:grid-cols-2">
        {projects.map((p) => (
          <a
            key={p.id}
            href="#contact"
            className="group relative overflow-hidden rounded-2xl border border-line bg-panel transition-all hover:border-accent/50"
          >
            <div className="relative aspect-[16/10] overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-zinc-800 via-zinc-900 to-black transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,92,31,0.25),transparent_60%)]" />
              <div className="absolute inset-0 flex items-center justify-center">
                <p.icon
                  size={46}
                  className="text-white/15 transition-colors group-hover:text-accent/40"
                />
              </div>
              <span className="absolute left-5 top-5 font-mono text-sm text-accent">
                {p.id}
              </span>
              <span className="absolute right-5 top-5 rounded-full bg-black/70 px-3 py-1 font-mono text-xs text-fog">
                {p.role}
              </span>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-white group-hover:text-accent-soft">
                {p.title}
              </h3>
              <p className="mt-2 text-sm text-fog">{p.desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-line px-2.5 py-0.5 font-mono text-xs text-fog"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </a>
        ))}
      </div>

      <p className="mt-8 font-mono text-xs text-fog/60">
        // drop your actual reels / film stills in here to replace these covers
      </p>
    </section>
  );
}
