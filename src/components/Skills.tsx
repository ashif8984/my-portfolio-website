import { Cloud, Code2, GitBranch, Palette } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';

const specialties = [
  {
    icon: GitBranch,
    title: 'DevOps',
    desc: 'Architecting robust CI/CD, cloud environments, and automated systems built for zero-downtime reliability.',
  },
  {
    icon: Cloud,
    title: 'Cloud',
    desc: 'Architecting resilient, high-availability multi-cloud environments for scalability and enterprise performance.',
  },
  {
    icon: Code2,
    title: 'Platform Engineering',
    desc: 'Designing enterprise-grade platforms systems that empower teams to ship faster with zero overhead.',
  },
  {
    icon: Palette,
    title: 'SRE',
    desc: 'Applying software engineering rigor to infrastructure operations eliminating toil and building fail-safe environments.',
  }
];

const tools = [
  { name: 'Git', logo: 'https://cdn.simpleicons.org/github/181717' },
  { name: 'GitHub Actions', logo: 'https://cdn.simpleicons.org/githubactions/2088ff' },
  { name: 'Jenkins', logo: 'https://cdn.simpleicons.org/jenkins/D24939' },
  { name: 'Docker', logo: 'https://cdn.simpleicons.org/docker/2496ed' },
  { name: 'Kubernetes', logo: 'https://cdn.simpleicons.org/kubernetes/326ce5' },
  { name: 'Ansible', logo: 'https://cdn.simpleicons.org/ansible/ee0000' },
  { name: 'Terraform', logo: 'https://cdn.simpleicons.org/terraform/7b42bc' },
  { name: 'GitOps', logo: 'https://cdn.simpleicons.org/git/ FC6D26' },
  { name: 'Nodejs', logo: 'https://cdn.simpleicons.org/javascript/339933' },
  { name: 'Python', logo: 'https://cdn.simpleicons.org/python/3776ab' },
  { name: 'Linux', logo: 'https://cdn.simpleicons.org/linux/000000' },
  { name: 'Prometheus', logo: 'https://cdn.simpleicons.org/prometheus/000000' }


];



export default function Skills() {
  const { ref, visible } = useReveal();

  return (
    <section id="skills" className="bg-white/50 py-20 lg:py-28">
      <div ref={ref} className={`mx-auto max-w-6xl px-6 ${visible ? 'is-visible' : 'reveal'}`}>
        {/* Specialties */}
        <div className="text-center">
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-accent-600">
            <span className="h-px w-8 bg-accent-500" />
            Specialized in
            <span className="h-px w-8 bg-accent-500" />
          </span>
           <h3 className="mt-4 font-display text-2xl font-bold tracking-tight text-ink-900 sm:text-3xl">
              {/* Skills I have */}
              What I Do Best
          </h3>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {specialties.map((s, i) => (
            <div
              key={s.title}
              className="group relative overflow-hidden rounded-2xl border border-ink-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent-300 hover:shadow-xl hover:shadow-ink-900/5"
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              <div className="absolute -right-6 -top-6 h-20 w-20 rounded-full bg-accent-100/0 transition-all duration-300 group-hover:bg-accent-100/60" />
              <div className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-ink-600 text-accent-400 transition-transform duration-300 group-hover:scale-110">
                <s.icon size={22} />
              </div>
              <h3 className="relative mt-5 font-display text-lg font-semibold text-ink-900">
                {s.title}
              </h3>
              <p className="relative mt-2 text-sm leading-relaxed text-ink-600">{s.desc}</p>
            </div>
          ))}
        </div>

        {/* Toolbox */}
        <div className="mt-16 lg:mt-20">
          <div className="text-center">
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-accent-600">
              <span className="h-px w-8 bg-accent-500" />
              My toolbox
              
              <span className="h-px w-8 bg-accent-500" />
            </span>
            <h3 className="mt-4 font-display text-2xl font-bold tracking-tight text-ink-900 sm:text-3xl">
              {/* Tools & technologies */}
               Weapons of Choice
            </h3>

          </div>

          <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {tools.map((t) => (
              <div
                key={t.name}
                className="group flex items-center gap-3 rounded-2xl border border-ink-200 bg-white/70 px-5 py-4 backdrop-blur transition-all duration-200 hover:-translate-y-1 hover:border-accent-300 hover:shadow-lg"
              >
                {t.logo ? (
                  <img
                    src={t.logo}
                    alt={`${t.name} logo`}
                    className="h-7 w-7 shrink-0 object-contain transition-transform duration-300 group-hover:scale-110"
                    loading="lazy"
                  />
                ) : (
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-ink-900 text-accent-400 transition-transform duration-300 group-hover:scale-110">
                    {/* <t.icon size={18} /> */}
                  </span>
                )}
                <span className="text-sm font-medium text-ink-700">{t.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
