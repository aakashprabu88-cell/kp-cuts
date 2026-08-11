"use client";

import { useState, type FormEvent } from "react";
import { Mail, Camera, Play, MessageCircle, Send } from "lucide-react";
import SectionHeading from "./SectionHeading";

const socials = [
  {
    icon: Camera,
    label: "Instagram",
    href: "https://instagram.com/",
  },
  {
    icon: Play,
    label: "YouTube",
    href: "https://youtube.com/",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    href: "#contact",
  },
];

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    type: "Short-form",
    message: "",
  });

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(`Editing inquiry — ${form.type} (${form.name})`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nProject type: ${form.type}\n\n${form.message}`
    );
    window.location.href = `mailto:hello@kpcuts.in?subject=${subject}&body=${body}`;
  }

  const inputCls =
    "w-full rounded-xl border border-line bg-ink px-4 py-3 text-sm text-mist outline-none transition-colors focus:border-accent";

  return (
    <section id="contact" className="border-t border-line bg-panel">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-24 md:grid-cols-2">
        <div>
          <SectionHeading
            eyebrow="contact"
            title="Let's make your next cut a banger"
            sub="Tell me about your project and I'll reply within a day with a timeline and a quote."
          />

          <div className="mt-8 space-y-4">
            <a
              href="mailto:hello@kpcuts.in"
              className="flex items-center gap-3 text-fog transition-colors hover:text-mist"
            >
              <Mail size={18} className="text-accent" />
              hello@kpcuts.in
            </a>
            <div className="flex gap-4">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-line text-fog transition-colors hover:border-accent hover:text-accent"
                  aria-label={s.label}
                >
                  <s.icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <form onSubmit={onSubmit} className="space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <input
              className={inputCls}
              placeholder="Your name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
            />
            <input
              className={inputCls}
              type="email"
              placeholder="Your email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
            />
          </div>
          <select
            className={inputCls}
            value={form.type}
            onChange={(e) => setForm({ ...form, type: e.target.value })}
          >
            <option>Short-form</option>
            <option>Long-form</option>
            <option>Showreel</option>
            <option>Series / Retainer</option>
            <option>Other</option>
          </select>
          <textarea
            className={`${inputCls} min-h-32 resize-y`}
            placeholder="What are we making? Budget, deadline, links to references…"
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            required
          />
          <button
            type="submit"
            className="flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-soft"
          >
            Send inquiry
            <Send size={15} />
          </button>
          <p className="text-xs text-fog/70">
            This opens your email app with the message pre-filled — no account
            needed.
          </p>
        </form>
      </div>
    </section>
  );
}
