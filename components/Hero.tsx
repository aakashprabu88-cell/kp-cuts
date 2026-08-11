"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "120+", label: "videos cut" },
  { value: "5M+", label: "views driven" },
  { value: "48h", label: "avg turnaround" },
  { value: "12+", label: "niches served" },
];

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="pointer-events-none absolute -top-40 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-accent/20 blur-[120px]" />
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 md:grid-cols-2 md:py-28">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-sm text-accent">
            <span className="mr-2 inline-block h-2 w-2 rounded-full bg-accent animate-pulse-dot" />
            FREELANCE VIDEO EDITOR
          </p>
          <h1 className="mt-4 text-4xl font-bold leading-tight text-white md:text-6xl">
            Raw footage in.
            <br />
            <span className="text-accent">Stories</span> out.
          </h1>
          <p className="mt-5 max-w-md text-base text-fog">
            I&apos;m <span className="text-mist">kp__cuts</span> — I edit videos
            that hold attention, land the joke, and make the brand feel sharp.
            Short-form, long-form, color grade, and my signature flash
            transitions.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#work"
              className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-soft"
            >
              See my work
            </a>
            <a
              href="#contact"
              className="rounded-full border border-line px-6 py-3 text-sm font-semibold text-mist transition-colors hover:border-accent hover:text-accent"
            >
              Book a session
            </a>
          </div>
        </motion.div>

        <EditorMock />
      </div>

      <div className="border-y border-line bg-panel">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-6 py-8 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label}>
              <p className="font-mono text-3xl font-bold text-white">{s.value}</p>
              <p className="mt-1 text-sm text-fog">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function EditorMock() {
  const clips = [
    { w: "w-[18%]", c: "bg-accent/70", l: "A01" },
    { w: "w-[12%]", c: "bg-teal/50", l: "A02" },
    { w: "w-[22%]", c: "bg-indigo-500/60", l: "A03" },
    { w: "w-[14%]", c: "bg-accent/70", l: "A04" },
    { w: "w-[20%]", c: "bg-teal/50", l: "A05" },
    { w: "w-[10%]", c: "bg-indigo-500/60", l: "A06" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7, delay: 0.15 }}
      className="rounded-2xl border border-line bg-panel p-4 shadow-2xl shadow-black/60"
    >
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-red-500" />
          <span className="h-3 w-3 rounded-full bg-yellow-500" />
          <span className="h-3 w-3 rounded-full bg-green-500" />
        </div>
        <p className="font-mono text-xs text-fog">kp__cuts — timeline</p>
        <p className="font-mono text-xs text-accent">
          <span className="mr-1 inline-block h-2 w-2 rounded-full bg-accent animate-pulse-dot" />
          REC
        </p>
      </div>

      <div className="relative aspect-video overflow-hidden rounded-lg border border-line bg-black">
        <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 via-zinc-800 to-black" />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="font-mono text-sm text-fog/70">preview</span>
        </div>
        <div className="absolute bottom-3 left-1/2 h-1 w-1/2 -translate-x-1/2 bg-accent/80" />
      </div>

      <div className="mt-4 space-y-2">
        <div className="flex items-center justify-between font-mono text-[10px] text-fog">
          <span>00:00:00:00</span>
          <span className="text-accent">V2</span>
        </div>
        <div className="flex gap-1">
          {clips.map((c) => (
            <div
              key={c.l}
              className={`h-8 rounded ${c.w} ${c.c} flex items-center justify-center font-mono text-[10px] text-white/90`}
            >
              {c.l}
            </div>
          ))}
        </div>
        <div className="flex gap-1">
          <div className="flex h-6 flex-1 items-center gap-2 rounded bg-teal/30 px-2 font-mono text-[10px] text-teal">
            A1
          </div>
          <div className="flex h-6 flex-1 items-center gap-2 rounded bg-teal/30 px-2 font-mono text-[10px] text-teal">
            A2
          </div>
        </div>
      </div>

      <div className="mt-4 flex items-center justify-between border-t border-line pt-3">
        <div className="flex gap-3 text-fog">
          <span className="text-white">▶</span>
          <span>⏸</span>
          <span>⏹</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs text-fog">25fps</span>
          <span className="h-1 w-24 rounded-full bg-raised">
            <span className="block h-1 w-2/3 rounded-full bg-accent" />
          </span>
        </div>
      </div>
    </motion.div>
  );
}
