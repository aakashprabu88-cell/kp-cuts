import SectionHeading from "./SectionHeading";

const tools = ["CapCut", "DaVinci Resolve", "CapCut PC", "Photoshop"];

const facts = [
  "Self-taught editor, obsessed with pacing and hooks",
  "Built a signature flash-transition style",
  "Cut for a daily-vlog Instagram influencer",
  "Edited the short film 'Mundhinam Paartheney'",
  "Worked directly with Gokul Srinivasan",
  "Runs my own page of cinematic edits",
];

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-28">
      <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
        <div>
          <SectionHeading
            eyebrow="about"
            title="The editor behind the cuts"
            sub="It started with an Instagram page of cinematic edits, turned into daily vlogs for an influencer, then into a short film — and one of India's biggest creators."
          />
          <ul className="mt-9 space-y-4">
            {facts.map((f) => (
              <li key={f} className="flex items-start gap-3 text-sm text-fog">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                {f}
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-3xl border border-line bg-panel p-8">
          <h3 className="font-mono text-sm text-accent">// toolbox</h3>
          <div className="mt-4 flex flex-wrap gap-2">
            {tools.map((t) => (
              <span
                key={t}
                className="rounded-full border border-line bg-ink px-4 py-2 text-sm text-mist"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="mt-9 rounded-2xl border border-accent/30 bg-ink p-6">
            <p className="font-mono text-sm text-accent">signature</p>
            <h4 className="mt-2 text-lg font-semibold text-white">
              The kp__cuts flash pack
            </h4>
            <p className="mt-2 text-sm leading-relaxed text-fog">
              A custom set of white-flash transition overlays I built — the
              finishing touch that makes cuts hit harder. Your project can have
              them too.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
