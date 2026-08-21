import { Github, Linkedin, Mail } from 'lucide-react';



const socials = [
  { icon: Github, href: 'https://github.com/ashif8984', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/ashif-eqbal/', label: 'LinkedIn' },
  { icon: Mail, href: '#contact', label: 'Email' },
];

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-32 pb-20 lg:pt-44 lg:pb-28">
      {/* ambient background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 left-1/2 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-accent-200/40 blur-3xl" />
        <div className="absolute right-0 top-40 h-72 w-72 rounded-full bg-accent-100/50 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)',
            backgroundSize: '56px 56px',
          }}
        />
      </div>

      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center text-center">
          <div className="animate-fade-in inline-flex items-center gap-2 rounded-full border border-ink-200 bg-white/60 px-4 py-1.5 text-xs font-medium text-ink-600 backdrop-blur">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            Available for new opportunities
          </div>

          <h1
            className="animate-fade-up mt-7 font-display text-5xl font-bold leading-[1.05] tracking-tight text-ink-900 text-balance sm:text-6xl lg:text-7xl"
            style={{ animationDelay: '0.05s' }}
          >
            Hello, I'm{' '}
            <span className="relative whitespace-nowrap">
              <span className="bg-gradient-to-r from-accent-600 to-accent-400 bg-clip-text text-transparent">
                Ashif Eqbal
              </span>
              <svg
                className="absolute -bottom-2 left-0 w-full"
                viewBox="0 0 300 12"
                fill="none"
                preserveAspectRatio="none"
              >
                <path
                  d="M2 9C60 3 240 3 298 7"
                  stroke="#22d3ee"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h1>

          <p
            className="animate-fade-up mt-6 max-w-2xl text-lg leading-relaxed text-ink-600 text-balance sm:text-xl"
            style={{ animationDelay: '0.15s' }}
          >
            Senior DevOps Engineer with  <span className="font-semibold text-ink-900">11+ years</span> of experience building scalable cloud architecture and high-velocity deployment pipelines.
          </p>

          <div
            className="animate-fade-up mt-9 flex flex-col items-center gap-5 sm:flex-row"
            style={{ animationDelay: '0.25s' }}
          >
            <a
              href="#work"
              className="group inline-flex items-center gap-2 rounded-xl bg-ink-900 px-12 py-3.5 text-sm font-semibold text-ink-50 transition-all duration-200 hover:bg-ink-800 hover:shadow-xl hover:shadow-ink-900/20"
            >
              My Work


      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-chevron-down-icon lucide-chevron-down"><path d="m6 10 6 6 6-6"/></svg>        
              {/* <ion-icon name="chevron-down-circle-outline"></ion-icon> */}
              {/* <ArrowDown size={16} className="transition-transform duration-200 group-hover:translate-y-0.5" /> */}
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-xl border border-ink-300 bg-white/60  px-12 py-3.5 text-sm font-semibold text-ink-800 backdrop-blur transition-all duration-200 hover:border-ink-400 hover:bg-white"
            >
              Get in touch
            </a>
          </div>

          <div
            className="animate-fade-up mt-10 flex items-center gap-3"
            style={{ animationDelay: '0.35s' }}
          >
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith('http') ? '_blank' : undefined}
                rel={s.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                aria-label={s.label}
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-ink-200 bg-white/60 text-ink-600 backdrop-blur transition-all duration-200 hover:-translate-y-0.5 hover:border-accent-400 hover:text-accent-600 hover:shadow-md"
              >
                <s.icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
