const skills = [
  "DAVINCI RESOLVE",
  "SHORT-FORM",
  "LONG-FORM",
  "COLOR GRADE",
  "SOUND DESIGN",
  "MOTION TITLES",
  "FLASH TRANSITIONS",
  "REEL EDITING",
  "SUBTITLES & CAPTIONS",
  "YOUTUBE / REELS / TIKTOK",
];

export default function Marquee() {
  const row = skills.map((s) => s + "  ✦  ").join("");

  return (
    <div className="overflow-hidden border-b border-line bg-raised py-4">
      <div className="animate-marquee flex whitespace-nowrap font-mono text-sm text-fog">
        <span className="pr-8">{row}</span>
        <span className="pr-8" aria-hidden="true">
          {row}
        </span>
      </div>
    </div>
  );
}
