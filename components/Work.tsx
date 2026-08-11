import SectionHeading from "./SectionHeading";

const projects = [
  {
    id: "01",
    title: "Product launch reel",
    tags: ["Short-form", "Motion titles"],
    duration: "0:42",
  },
  {
    id: "02",
    title: "Podcast highlights",
    tags: ["Long-form", "Captions"],
    duration: "12:30",
  },
  {
    id: "03",
    title: "Brand flash intro",
    tags: ["Flash transitions", "Grade"],
    duration: "0:15",
  },
  {
    id: "04",
    title: "Music video cut",
    tags: ["Multi-cam", "Sync"],
    duration: "3:11",
  },
  {
    id: "05",
    title: "Creator vlog series",
    tags: ["Series", "Sound design"],
    duration: "8 x ~10min",
  },
  {
    id: "06",
    title: "Testimonial package",
    tags: ["Corporate", "Color grade"],
    duration: "2:05",
  },
];

export default function Work() {
  return (
    <section id="work" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading
        eyebrow="selected work"
        title="Cuts that do the talking"
        sub="A handful of recent projects across niches. Full portfolio and case studies on request."
      />

      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <a
            key={p.id}
            href="#contact"
            className="group overflow-hidden rounded-2xl border border-line bg-panel transition-colors hover:border-accent/50"
          >
            <div className="relative aspect-video overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-zinc-800 to-black transition-transform duration-500 group-hover:scale-105">
                <span className="font-mono text-5xl font-bold text-white/10 transition-colors group-hover:text-accent/30">
                  {p.id}
                </span>
              </div>
              <span className="absolute right-3 top-3 rounded-full bg-black/70 px-2.5 py-1 font-mono text-xs text-fog">
                {p.duration}
              </span>
            </div>
            <div className="p-5">
              <h3 className="font-semibold text-white group-hover:text-accent-soft">
                {p.title}
              </h3>
              <div className="mt-3 flex flex-wrap gap-2">
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

      <p className="mt-8 font-mono text-xs text-fog/70">
        // replace these placeholder cards with your real work — drop a link,
               thumbnail and tags for each project
      </p>
    </section>
  );
}
