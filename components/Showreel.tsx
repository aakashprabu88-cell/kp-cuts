"use client";

import { useState } from "react";
import { Play } from "lucide-react";

export default function Showreel() {
  const [playing, setPlaying] = useState(false);

  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <div className="mb-10">
        <p className="font-mono text-sm text-accent">// showreel</p>
        <h2 className="mt-2 text-3xl font-bold text-white md:text-4xl">
          What you&apos;re really buying
        </h2>
      </div>

      <div className="relative aspect-video overflow-hidden rounded-2xl border border-line bg-panel">
        {playing ? (
          <iframe
            className="absolute inset-0 h-full w-full"
            src="https://www.youtube.com/embed/PLACEHOLDER_REEL_ID?autoplay=1"
            title="kp__cuts showreel"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <button
            onClick={() => setPlaying(true)}
            className="group absolute inset-0 flex w-full flex-col items-center justify-center bg-gradient-to-br from-zinc-900 via-zinc-800 to-black"
          >
            <div className="flex h-20 w-20 items-center justify-center rounded-full border border-accent/50 bg-accent/10 transition-all group-hover:scale-110 group-hover:bg-accent/20">
              <Play className="ml-1 h-8 w-8 fill-accent text-accent" />
            </div>
            <p className="mt-4 font-mono text-sm text-fog group-hover:text-mist">
              press play — 60s of cuts
            </p>
            <p className="mt-1 text-xs text-fog/60">
              Drop your showreel YouTube ID here to embed the real reel
            </p>
          </button>
        )}
      </div>
    </section>
  );
}
