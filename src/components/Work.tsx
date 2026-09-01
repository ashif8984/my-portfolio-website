import {
  ArrowUpRight,
  FlaskConical,
  Ghost,
  ShieldHalf,
  Database,
} from "lucide-react";
import { useReveal } from "@/hooks/useReveal";

const works = [
  {
    title: "ArgoCD Node Application",
    url: "https://github.com/ashif8984/argocd-node-application",
    desc: "Node.js application deployment using GitOps workflow using Docker, GitHub Actions, Kubernetes, and Argo CD.",
    tags: ["ArgoCD", "NodeJS", "GitOps"],
    icon: Ghost,
    accent: "from-emerald-500/15 to-emerald-500/0",
    iconBg: "bg-emerald-500",
  },
  {
    title: "Terraform using Localstack",
    url: "https://github.com/ashif8984/terraform-localstack",
    desc: "GitHub Actions pipelinefor provisioning AWS resources on LocalStack using Terraform",
    tags: ["Terraform", "Localstack", "AWS"],
    icon: Database,
    accent: "from-accent-500/15 to-accent-500/0",
    iconBg: "bg-accent-500",
  },
  {
    title: "K8s Monitoring using Prometheus and Grafana",
    url: "https://github.com/ashif8984/kubernetes-monitoring-prometheus",
    desc: "Deploying Kubernetes monitoring stack using Prometheus, Grafana and Helm",
    tags: ["Prometheus", "Grafana", "Helm"],
    icon: ShieldHalf,
    accent: "from-amber-500/15 to-amber-500/0",
    iconBg: "bg-amber-500",
  },
  {
    title: "Python Flask Application on Kubernetes",
    url: "https://github.com/ashif8984/python-flask-k8s-app",
    desc: "Deploying a Python Flask application on Kubernetes with proper configuration and deployment strategies.",
    tags: ["Python", "Flask", "Kubernetes"],
    icon: FlaskConical,
    accent: "from-rose-500/15 to-rose-500/0",
    iconBg: "bg-rose-500",
  },
];

export default function Work() {
  const { ref, visible } = useReveal();

  return (
    <section id="work" className="py-20 lg:py-28">
      <div
        ref={ref}
        className={`mx-auto max-w-6xl px-6 ${visible ? "is-visible" : "reveal"}`}
      >
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-accent-600">
              <span className="h-px w-8 bg-accent-500" />
              Latest works
            </span>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-ink-900 sm:text-4xl">
              {/* Selected projects */}
              Things I’ve Built and Deployed
            </h2>
          </div>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {works.map((w) => (
            <article
              key={w.title}
              className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-ink-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-ink-300 hover:shadow-2xl hover:shadow-ink-900/10"
            >
              <div
                className={`pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-to-br ${w.accent} blur-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
              />
              <div className="relative flex items-start justify-between">
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-xl ${w.iconBg} text-white shadow-md transition-transform duration-300 group-hover:scale-110`}
                >
                  <w.icon size={22} />
                </div>
                <a
                  href={w.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${w.title} project`}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-ink-200 text-ink-400 transition-all duration-300 group-hover:border-ink-900 group-hover:bg-ink-900 group-hover:text-white"
                >
                  <ArrowUpRight size={16} />
                </a>
              </div>

              <h3 className="relative mt-6 font-display text-xl font-semibold text-ink-900">
                <a
                  href={w.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-accent-600"
                >
                  {w.title}
                </a>
              </h3>
              <p className="relative mt-2 text-sm leading-relaxed text-ink-600">
                {w.desc}
              </p>

              <div className="relative mt-auto flex flex-wrap gap-2 pt-5">
                {w.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-ink-100 px-3 py-1 text-xs font-medium text-ink-600"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
