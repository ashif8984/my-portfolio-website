import { ArrowUp } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-ink-900 border-t border-ink-800">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <a href="#home" className="group flex items-center gap-2.5">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-ink-50 font-display text-sm font-bold text-accent-500 transition-transform group-hover:scale-105">
              A
            </span>
            <span className="font-display text-sm font-semibold text-ink-100">
              Ashif Eqbal
            </span>
          </a>

          <p className="text-center text-xs text-ink-500">
            © {new Date().getFullYear()} Ashif Eqbal. All rights reserved.
          </p>

          <a
            href="#home"
            className="group flex items-center gap-2 text-xs font-medium text-ink-400 transition-colors hover:text-ink-100"
          >
            Back to top
            <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-ink-700 transition-all group-hover:border-ink-500 group-hover:bg-ink-800">
              <ArrowUp size={14} />
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}
