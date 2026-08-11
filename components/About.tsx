import SectionHeading from "./SectionHeading";

const tools = [
  "DaVinci Resolve",
  "After Effects",
  "Photoshop",
  "CapCut",
  "Audacity",
  "Motion Graphics",
];

const facts = [
  "Self-taught editor, obsessed with pacing",
  "Built my own flash-transition pack",
  "Work with creators, brands and podcasts",
  "Fast turnarounds, clear communication",
];

export default function About() {
  return (
    <section id="about" className="border-y border-line bg-panel">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-24 md:grid-cols-2">
        <div>
          <SectionHeading
            eyebrow="about"
            title="Behind the cuts"
            sub="kp__cuts started with a phone, a free editor and a refusal to make boring content. Now it's a full freelance editing service."
          />
          <ul className="mt-8 space-y-3">
            {facts.map((f) => (
              <li key={f} className="flex items-start gap-3 text-sm text-fog">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                {f}
              </li>
            ))}
          </ul>
        </div>

        <div>
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

          <div className="mt-10 rounded-2xl border border-accent/30 bg-ink p-6">
            <p className="font-mono text-sm text-accent">signature</p>
            <h4 className="mt-2 text-lg font-semibold text-white">
              The kp__cuts flash pack
            </h4>
            <p className="mt-2 text-sm text-fog">
              A set of custom white-flash transition overlays I built in DaVinci
              Resolve — the finishing touch that makes cuts hit harder. Ask me
              to use them on your project.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
