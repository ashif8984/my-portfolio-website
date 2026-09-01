import { useReveal } from "@/hooks/useReveal";

const tools = [
  { name: "Github Actions", logo: "./githubactions.png" },
  { name: "Github Copilot", logo: "./githubcopilot.png" },
  { name: "AWS DevOps", logo: "./awsdevops.png" },
  { name: "AWS Solution Architect", logo: "./awssolutions.png" },
  { name: "Terraform Associate", logo: "./terraform.jpeg" },
  { name: "Google Cloud Engineer", logo: "./gcp.png" },
];

export default function Skills() {
  const { ref, visible } = useReveal();

  return (
    <section id="skills" className="bg-white/50 py-20 lg:py-28">
      <div
        ref={ref}
        className={`mx-auto max-w-6xl px-6 ${visible ? "is-visible" : "reveal"}`}
      >
        {/* Specialties */}
        <div className="text-center">
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-accent-600">
            <span className="h-px w-8 bg-accent-500" />
            Verified Credentials
            <span className="h-px w-8 bg-accent-500" />
          </span>
          <h3 className="mt-4 font-display text-2xl font-bold tracking-tight text-ink-900 sm:text-3xl">
            {/* Skills I have */}
            Certifications & Accreditations
          </h3>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-y-4 gap-x-0 sm:grid-cols-3 lg:grid-cols-3 items-center justify-items-center">
          {tools.map((t) => (
            <div
              key={t.name}
              className="group flex items-center justify-center p-2 transition-transform duration-200 hover:-translate-y-1"
            >
              {t.logo ? (
                <img
                  src={t.logo}
                  alt={`${t.name} logo`}
                  className="w-2/5 h-2/5 object-cover rounded-lg transition-transform duration-300 group-hover:scale-110"
                  loading="lazy"
                />
              ) : (
                <span className="flex h-40 w-40 items-center justify-center text-ink-900 transition-transform duration-300 group-hover:scale-110">
                  {/* <t.icon size={24} /> */}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
