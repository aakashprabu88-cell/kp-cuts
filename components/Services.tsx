import {
  Scissors,
  Film,
  Palette,
  Type,
  AudioWaveform,
  Zap,
} from "lucide-react";
import SectionHeading from "./SectionHeading";

const services = [
  {
    icon: Scissors,
    title: "Short-form editing",
    desc: "Reels, Shorts and TikTok that hook in the first second and hold till the last.",
  },
  {
    icon: Film,
    title: "Long-form editing",
    desc: "YouTube and podcast cuts with structure, pacing and a story arc that keeps retention up.",
  },
  {
    icon: Palette,
    title: "Color grading",
    desc: "Cinematic looks and clean, consistent color from raw log footage to final punch.",
  },
  {
    icon: Type,
    title: "Motion titles",
    desc: "Animated titles, lower thirds and captions styled to fit your brand, not a template.",
  },
  {
    icon: AudioWaveform,
    title: "Sound design",
    desc: "Clean dialogue, music that fits the mood, and SFX that make the cut feel expensive.",
  },
  {
    icon: Zap,
    title: "Flash transitions",
    desc: "My signature white-flash transitions that snap cuts together with serious energy.",
  },
];

export default function Services() {
  return (
    <section id="services" className="border-y border-line bg-panel">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <SectionHeading
          eyebrow="services"
          title="What I can do for your content"
          sub="Pick a lane or throw the whole clip at me — most projects mix a few of these."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div
              key={s.title}
              className="group rounded-2xl border border-line bg-ink p-6 transition-colors hover:border-accent/50"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-line bg-raised text-accent transition-colors group-hover:border-accent/50">
                <s.icon size={20} />
              </div>
              <h3 className="mt-5 font-semibold text-white">{s.title}</h3>
              <p className="mt-2 text-sm text-fog">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
