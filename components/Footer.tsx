export default function Footer() {
  return (
    <footer className="mx-auto max-w-6xl px-6 py-10">
      <div className="flex flex-col items-center justify-between gap-4 border-t border-line pt-8 sm:flex-row">
        <p className="font-mono text-sm text-mist">
          kp<span className="text-accent">__</span>cuts
        </p>
        <p className="text-xs text-fog">
          Every frame earned. © {new Date().getFullYear()} kp__cuts
        </p>
        <p className="font-mono text-xs text-fog/60">built with Next.js</p>
      </div>
    </footer>
  );
}
