import { useReveal } from "@/hooks/useReveal";

const companies = [
  {
    name: "TCS",
    note: "Tata Consultancy Services",
    logo: "https://cdn.simpleicons.org/tcs/1f3a68",
  },
  { name: "Cognizant", note: "Cognizant", logo: "/cognizant.svg" },
  { name: "Amdocs", note: "Amdocs", logo: "/amdocs.svg" },
  { name: "Amazon", note: "Amazon", logo: "/aws.svg" },
  { name: "EY", note: "Ernst & Young", logo: "/ey.svg" },
];

export default function About() {
  const { ref, visible } = useReveal();

  return (
    <section id="about" className="py-20 lg:py-28">
      <div
        ref={ref}
        className={`mx-auto max-w-6xl px-6 ${visible ? "is-visible" : "reveal"}`}
      >
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Profile card */}
          <div className="lg:col-span-5">
            <div className="relative  mx-auto max-w-sm">
              {/* <div className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-accent-200/40 to-slate-200/50 blur-2xl" /> */}
              <div className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-accent-200/60 to-accent-400/20 blur-2xl" />
              <div className="relative overflow-hidden rounded-3xl border border-ink-200 bg-gradient-to-br from-ink-900 to-ink-800 p-4 shadow-2xl shadow-ink-900/10">
                {/* Profile Image Container with Aspect Ratio */}
                <div className="relative aspect-[5/5] w-full overflow-hidden rounded-2xl">
                  <img
                    src="/imgpic.jpg"
                    alt="Ashif Eqbal"
                    className="h-full w-full object-cover"
                  />
                  {/* Subtle bottom gradient overlay to blend into the card text area */}
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-900 via-transparent to-transparent opacity-80" />
                </div>

                {/* Card Content Section */}
                <div className="p-4 pt-5 text-left">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <h3 className="font-display text-xl font-bold text-ink-50">
                        Ashif Eqbal
                      </h3>
                      {/* Verified checkmark badge */}
                      <svg
                        className="h-5 w-5 text-emerald-500"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307 4.49 4.49 0 01-3.397 1.549 4.49 4.49 0 01-3.498-1.307 4.491 4.491 0 01-1.307-3.497A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>

                  <p className="mt-1 text-sm text-ink-300">
                    Senior DevOps Engineer
                  </p>
                  <button 
                  
                    className="bg-transparent mt-3 w-full  hover:bg-white hover:text-black text-white font-semibold py-2 px-8 border border-gray-400 rounded-xl shadow">
                    
                    <a href="#contact">Say Hello</a>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* About copy */}
          <div className="lg:col-span-7">
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-accent-600">
              <span className="h-px w-8 bg-accent-500" />
              About me
            </span>

            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-ink-900 sm:text-4xl">
              Senior DevOps Engineer
            </h2>
            <div className="mt-6 space-y-5 text-md leading-relaxed text-ink-700">
              <p>
                My name is Ashif Eqbal, and I am a passionate Senior DevOps
                Engineer with experience in building scalable cloud
                architecture, designing and automating infrastructure management
                and orchestrating microservices using Kubernetes and ArgoCD.
              </p>
              <p>
                I live in Jamshedpur, India and currently working in EY as a
                Associate Architecture. Outside the terminal, I’m an avid movie
                watcher, especially Marvel films (huge fan of Tobey Maguire's
                Spider-Man) and always on the hunt to explore new cuisines."
              </p>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-4">
              {[
                { value: "11", label: "Years experience" },
                { value: "5", label: "Companies" },
                { value: "4", label: "Specialties" },
              ].map((s) => (
                <div
                  key={s.label}
                  className="rounded-2xl border border-ink-200 bg-white/60 p-5 backdrop-blur transition-colors hover:border-accent-300"
                >
                  <p className="font-display text-3xl font-bold text-ink-900">
                    {s.value}
                  </p>
                  <p className="mt-1 text-sm text-ink-500">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Companies */}
        <div className="mt-16 lg:mt-20">
          <div className="text-center">
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-accent-600">
              <span className="h-px w-8 bg-accent-500" />
              Companies I've worked with
              <span className="h-px w-8 bg-accent-500" />
            </span>
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            {companies.map((c) => (
              <div
                key={c.name}
                className="group flex w-40 flex-col items-center gap-3 rounded-2xl border border-ink-200 bg-white/70 px-5 py-6 backdrop-blur transition-all duration-200 hover:-translate-y-0.5 hover:border-ink-300 hover:shadow-md sm:w-42"
              >
                <img
                  src={c.logo}
                  alt={`${c.name} logo`}
                  className="h-9 w-auto object-contain opacity-80 transition-all duration-200 group-hover:opacity-100"
                  loading="lazy"
                />
                <span className="font-display text-sm font-semibold text-ink-700 transition-colors group-hover:text-ink-900">
                  {c.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
