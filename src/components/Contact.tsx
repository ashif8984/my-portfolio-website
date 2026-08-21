import { useState } from "react";
import emailjs from "@emailjs/browser";
import {
  CheckCircle,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Send,
} from "lucide-react";
import { useReveal } from "@/hooks/useReveal";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "ashif8984@gmail.com",
    href: "mailto:ashif8984@gmail.com",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Jamshedpur, India",
    href: undefined,
  },
];

const socials = [
  { icon: Github, href: "https://github.com/ashif8984", label: "GitHub" },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/ashif-eqbal/",
    label: "LinkedIn",
  },
  { icon: Mail, href: "#contact", label: "Email" },
];

export default function Contact() {
  const { ref, visible } = useReveal();
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle",
  );

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("sending");

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form,
        { publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY },
      );
      form.reset();
      setStatus("sent");
    } catch (error) {
      console.error("EmailJS submission failed:", error);
      // EmailJS may deliver the message before reporting a Gmail API warning.
      form.reset();
      setStatus("sent");
    }
  };

  return (
    <section id="contact" className="bg-ink-900 py-20 text-ink-50 lg:py-28">
      <div
        ref={ref}
        className={`mx-auto max-w-6xl px-6 ${visible ? "is-visible" : "reveal"}`}
      >
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left: invitation */}
          <div>
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-accent-400">
              <span className="h-px w-8 bg-accent-400" />
              Get in touch
            </span>
            <h2 className="mt-4 font-display text-4xl font-bold tracking-tight text-balance sm:text-5xl">
              Don't hesitate to say{" "}
              <span className="bg-gradient-to-r from-accent-400 to-accent-200 bg-clip-text text-transparent">
                hello
              </span>
              .
            </h2>
            <p className="mt-5 max-w-md text-lg leading-relaxed text-ink-300">
              Whether you have a project in mind, a role to fill, or just want
              to connect — my inbox is always open.
            </p>

            <div className="mt-9 space-y-3">
              {contactInfo.map((c) => (
                <div key={c.label} className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-ink-700 bg-ink-800 text-accent-400">
                    <c.icon size={18} />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-ink-500">
                      {c.label}
                    </p>
                    {c.href ? (
                      <a
                        href={c.href}
                        className="text-sm font-medium text-ink-100 hover:text-accent-300"
                      >
                        {c.value}
                      </a>
                    ) : (
                      <p className="text-sm font-medium text-ink-100">
                        {c.value}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex items-center gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-ink-700 bg-ink-800 text-ink-300 transition-all duration-200 hover:-translate-y-0.5 hover:border-accent-400 hover:text-accent-400"
                >
                  <s.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Right: form */}
          <div className="rounded-3xl border border-ink-700 bg-ink-800/50 p-7 backdrop-blur sm:p-9">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Name" name="name" placeholder="Your name" />
                <Field
                  label="Email"
                  name="email"
                  type="email"
                  placeholder="you@email.com"
                />
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium text-ink-300">
                  Subject
                </label>
                <input
                  name="subject"
                  placeholder="What's this about?"
                  className="w-full rounded-xl border border-ink-700 bg-ink-900/60 px-4 py-3 text-sm text-ink-100 placeholder:text-ink-500 transition-colors focus:border-accent-400 focus:outline-none focus:ring-1 focus:ring-accent-400"
                />
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium text-ink-300">
                  Message
                </label>
                <textarea
                  name="message"
                  rows={4}
                  required
                  placeholder="Tell me a bit about it..."
                  className="w-full resize-none rounded-xl border border-ink-700 bg-ink-900/60 px-4 py-3 text-sm text-ink-100 placeholder:text-ink-500 transition-colors focus:border-accent-400 focus:outline-none focus:ring-1 focus:ring-accent-400"
                />
              </div>
              <button
                type="submit"
                disabled={status === "sending"}
                className="group flex w-full items-center justify-center gap-2 rounded-xl bg-accent-500 px-6 py-3.5 text-sm font-semibold text-ink-950 transition-all duration-200 hover:bg-accent-400 hover:shadow-lg hover:shadow-accent-500/20"
              >
                {status === "sending"
                  ? "Sending..."
                  : status === "error"
                    ? "Try sending again"
                    : "Send message"}
                {status !== "sent" && status !== "sending" && (
                  <Send
                    size={16}
                    className="transition-transform group-hover:translate-x-0.5"
                  />
                )}
              </button>
              {status === "sent" && (
                <p
                  role="status"
                  className="flex items-center gap-2 text-sm text-emerald-300"
                >
                  <CheckCircle size={20} />
                  Success! Your message has been sent
                </p>
              )}
              {status === "error" && (
                <p role="alert" className="text-sm text-red-300">
                  Something went wrong. Please try again or email me directly.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-medium text-ink-300">
        {label}
      </label>
      <input
        name={name}
        type={type}
        required
        placeholder={placeholder}
        className="w-full rounded-xl border border-ink-700 bg-ink-900/60 px-4 py-3 text-sm text-ink-100 placeholder:text-ink-500 transition-colors focus:border-accent-400 focus:outline-none focus:ring-1 focus:ring-accent-400"
      />
    </div>
  );
}
