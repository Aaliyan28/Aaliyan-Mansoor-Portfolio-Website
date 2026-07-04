"use client";

import { useState, type FormEvent } from "react";
import Reveal from "./Reveal";
import Magnetic from "./Magnetic";
import { site } from "@/lib/data";

type Status = "idle" | "sending" | "sent" | "error";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    setStatus("sending");
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error || "Something went wrong.");
      setStatus("sent");
      form.reset();
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong.");
    }
  };

  return (
    <section id="contact" className="relative overflow-hidden py-24 md:py-36">
      <div className="aurora left-[10%] top-[20%] h-[45vh] w-[40vw] bg-cyan-600/30" aria-hidden="true" />
      <div className="aurora right-[5%] bottom-[0%] h-[40vh] w-[35vw] bg-violet-700/30 [animation-delay:-8s]" aria-hidden="true" />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="grid gap-14 md:grid-cols-2 md:gap-20">
          <div>
            <Reveal>
              <p className="kicker mb-4">Epilogue — Let&apos;s talk</p>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="font-display text-5xl font-black leading-[1.02] tracking-tight md:text-7xl">
                Let&apos;s build the <span className="text-gradient">next chapter</span> together.
              </h2>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-6 max-w-md leading-relaxed text-muted">
                Whether it&apos;s an edge-AI problem, a web platform, research collaboration, or
                writing that needs to be sharp — I&apos;d love to hear about it.
              </p>
            </Reveal>
            <Reveal delay={0.22}>
              <div className="mt-8 flex items-center gap-4">
                <a
                  href={site.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-line px-5 py-2.5 text-sm text-muted transition-colors duration-200 hover:border-accent/50 hover:text-accent"
                >
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
                    <path d="M12 .5C5.65.5.5 5.65.5 12a11.5 11.5 0 0 0 7.86 10.91c.58.11.79-.25.79-.55v-2.17c-3.2.7-3.87-1.36-3.87-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.72.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.76 2.7 1.25 3.35.95.1-.74.4-1.25.72-1.54-2.55-.29-5.24-1.28-5.24-5.68 0-1.26.45-2.28 1.18-3.09-.12-.29-.51-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.78 0c2.2-1.49 3.17-1.18 3.17-1.18.62 1.59.23 2.76.11 3.05.74.8 1.18 1.83 1.18 3.09 0 4.41-2.7 5.38-5.26 5.67.41.35.77 1.05.77 2.12v3.15c0 .3.2.67.8.55A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
                  </svg>
                  GitHub
                </a>
                <a
                  href={site.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-line px-5 py-2.5 text-sm text-muted transition-colors duration-200 hover:border-accent/50 hover:text-accent"
                >
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
                    <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05a3.74 3.74 0 0 1 3.37-1.85c3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45Z" />
                  </svg>
                  LinkedIn
                </a>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <form onSubmit={onSubmit} className="glass rounded-3xl p-7 md:p-9">
              {/* honeypot field — bots fill it, humans never see it */}
              <input
                type="text"
                name="company"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                className="absolute -left-[9999px] h-0 w-0 opacity-0"
              />

              <div className="space-y-5">
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm font-medium">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    maxLength={100}
                    placeholder="Your name"
                    className="w-full rounded-xl border border-line bg-bg/60 px-4 py-3 text-ink placeholder:text-muted/50 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/25"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-medium">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    maxLength={200}
                    placeholder="you@example.com"
                    className="w-full rounded-xl border border-line bg-bg/60 px-4 py-3 text-ink placeholder:text-muted/50 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/25"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="mb-2 block text-sm font-medium">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    maxLength={4000}
                    placeholder="Tell me about your project, role, or idea…"
                    className="w-full resize-y rounded-xl border border-line bg-bg/60 px-4 py-3 text-ink placeholder:text-muted/50 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/25"
                  />
                </div>

                <Magnetic>
                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="cursor-pointer rounded-full bg-accent px-8 py-3.5 font-medium text-slate-950 transition-colors duration-200 hover:bg-cyan-300 disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {status === "sending" ? "Sending…" : "Send message"}
                  </button>
                </Magnetic>

                <div aria-live="polite">
                  {status === "sent" && (
                    <p className="text-sm text-emerald-300">
                      Message sent — I&apos;ll get back to you soon. Thanks!
                    </p>
                  )}
                  {status === "error" && <p className="text-sm text-red-400">{error}</p>}
                </div>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
