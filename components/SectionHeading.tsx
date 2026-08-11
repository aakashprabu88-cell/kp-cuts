export default function SectionHeading({
  eyebrow,
  title,
  sub,
}: {
  eyebrow: string;
  title: string;
  sub?: string;
}) {
  return (
    <div className="max-w-2xl">
      <p className="font-mono text-sm text-accent">// {eyebrow}</p>
      <h2 className="mt-2 text-3xl font-bold text-white md:text-4xl">{title}</h2>
      {sub && <p className="mt-3 text-fog">{sub}</p>}
    </div>
  );
}
