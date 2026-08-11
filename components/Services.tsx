import {
  Scissors,
  Clapperboard,
  Video,
  Film,
  AudioWaveform,
  Palette,
} from "lucide-react";
import SectionHeading from "./SectionHeading";

const services = [
  {
    icon: Scissors,
    title: "Short-form & reels",
    desc: "Hooks in the first second, cuts that never drag — built for Reels, Shorts and TikTok reach.",
  },
  {
    icon: Sparkles,
    title: "Cinematic edits",
    desc: "Transitions, speed ramps, camera shakes and color that turn ordinary clips into a short film.",
  },
  {
    icon: Video,
    title: "Vlog editing",
    desc: "Daily or weekly vlogs cut fast and clean, with a structure that keeps viewers to the end.",
  },
  {
    icon: Film,
    title: "Short film editing",
    desc: "Narrative editing — pacing, continuity, and scene rhythm that serve the story.",
  },
  {
    icon: AudioWaveform,
    title: "Sound & music sync",
    desc: "Clean dialogue, beat-synced cuts, and SFX that make the video feel expensive.",
  },
  {
    icon: Palette,
    title: "Color & looks",
    desc: "Consistent grades and cinematic LUTs applied to your whole series, not just one clip.",
  },
];

function Sparkles({ size = 24 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 3l1.9 5.7L19.6 10l-5.7 1.9L12 17.6l-1.9-5.7L4.4 10l5.7-1.9L12 3z" />
      <path d="M19 15l.9 2.6 2.6.9-2.6.9L19 22l-.9-2.6-2.6-.9 2.6-.9L19 15z" />
    </svg>
  );
}

export default function Services() {
  return (
    <section id="services" className="border-y border-line bg-panel">
      <div className="mx-auto max-w-6xl px-6 py-28">
        <SectionHeading
          eyebrow="services"
          title="What I can do for your content"
          sub="From one reel to a full short film — most projects mix a few of these lanes."
        />

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div
              key={s.title}
              className="group rounded-2xl border border-line bg-ink p-7 transition-all hover:-translate-y-1 hover:border-accent/50"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-line bg-raised text-accent transition-colors group-hover:border-accent/50">
                <s.icon size={20} />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-white">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-fog">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
