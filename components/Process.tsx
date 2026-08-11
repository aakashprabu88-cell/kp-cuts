import SectionHeading from "./SectionHeading";

const steps = [
  {
    n: "01",
    title: "Brief & assets",
    desc: "You send the footage, the references and the vibe. I ask the right questions up front so there are no surprises.",
  },
  {
    n: "02",
    title: "Rough cut",
    desc: "First pass at full length. You get a structured cut to react to — this is where the story locks in.",
  },
  {
    n: "03",
    title: "Grade & sound",
    desc: "Color, music, sound design, captions, titles — everything polished until the cut feels finished.",
  },
  {
    n: "04",
    title: "Delivery",
    desc: "Final export in whatever specs you need, plus your project files if you want them. Ready to post.",
  },
];

export default function Process() {
  return (
    <section id="process" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading
        eyebrow="process"
        title="How a project goes down"
        sub="Simple, structured, and you're never left guessing where things stand."
      />

      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {steps.map((s) => (
          <div key={s.n} className="relative rounded-2xl border border-line bg-panel p-6">
            <p className="font-mono text-sm text-accent">{s.n}</p>
            <h3 className="mt-3 font-semibold text-white">{s.title}</h3>
            <p className="mt-2 text-sm text-fog">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
