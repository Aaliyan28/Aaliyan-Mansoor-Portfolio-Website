import Image from "next/image";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { projects } from "@/lib/data";

function GitHubLink({ href, name }: { href: string; name: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`View ${name} on GitHub`}
      className="inline-flex items-center gap-2 text-sm font-medium text-accent transition-colors duration-200 hover:text-cyan-300"
    >
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
        <path d="M12 .5C5.65.5.5 5.65.5 12a11.5 11.5 0 0 0 7.86 10.91c.58.11.79-.25.79-.55v-2.17c-3.2.7-3.87-1.36-3.87-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.72.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.76 2.7 1.25 3.35.95.1-.74.4-1.25.72-1.54-2.55-.29-5.24-1.28-5.24-5.68 0-1.26.45-2.28 1.18-3.09-.12-.29-.51-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.78 0c2.2-1.49 3.17-1.18 3.17-1.18.62 1.59.23 2.76.11 3.05.74.8 1.18 1.83 1.18 3.09 0 4.41-2.7 5.38-5.26 5.67.41.35.77 1.05.77 2.12v3.15c0 .3.2.67.8.55A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
      </svg>
      View source
    </a>
  );
}

export default function Projects() {
  const featured = projects.find((p) => p.featured)!;
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="relative mx-auto max-w-6xl px-6 py-24 md:py-32">
      <SectionHeading
        kicker="Selected Work"
        title="Projects that shipped."
        intro="From edge-deployed neural networks to booking platforms serving clients in Dubai, Portugal, and Pakistan."
      />

      {/* Featured project */}
      <Reveal>
        <article className="glass group relative mb-8 overflow-hidden rounded-3xl transition-colors duration-300 hover:border-accent/30">
          <div className="grid md:grid-cols-2">
            <div className="relative min-h-64 overflow-hidden md:min-h-full">
              <Image
                src={featured.image!.src}
                alt={featured.image!.alt}
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover object-[50%_62%] transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-surface/60 max-md:bg-gradient-to-t max-md:from-surface/70 max-md:to-transparent" aria-hidden="true" />
            </div>
            <div className="relative p-7 md:p-10">
              <span className="inline-block rounded-full border border-gold/40 bg-gold/10 px-3 py-1 font-mono text-xs tracking-widest text-gold">
                FEATURED · NEDAASC-FUNDED PROJECT
              </span>
              <h3 className="mt-5 font-display text-2xl font-extrabold tracking-tight md:text-3xl">
                {featured.name}
              </h3>
              <p className="mt-1 text-sm text-accent-2">{featured.subtitle}</p>
              <p className="mt-4 leading-relaxed text-muted">{featured.description}</p>

              <dl className="mt-6 grid grid-cols-3 gap-3">
                {featured.metrics!.map((m) => (
                  <div key={m.label} className="rounded-2xl border border-line p-3 text-center">
                    <dt className="order-2 mt-1 block text-[11px] text-muted">{m.label}</dt>
                    <dd className="font-display text-lg font-extrabold text-accent md:text-xl">
                      {m.value}
                    </dd>
                  </div>
                ))}
              </dl>

              <div className="mt-6 flex flex-wrap gap-2">
                {featured.stack.map((tech) => (
                  <span key={tech} className="rounded-full border border-line px-3 py-1 font-mono text-xs text-muted">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-7 flex flex-wrap items-center gap-5">
                <GitHubLink href={featured.github!} name={featured.name} />
                {featured.poster && (
                  <a
                    href={featured.poster}
                    download="Aaliyan-Mansoor-FYP-Poster"
                    className="inline-flex items-center gap-2 text-sm font-medium text-accent transition-colors duration-200 hover:text-cyan-300"
                  >
                    <svg
                      viewBox="0 0 20 20"
                      className="h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M10 3v9m0 0l-3.5-3.5M10 12l3.5-3.5M4 15.5h12" />
                    </svg>
                    Download poster
                  </a>
                )}
              </div>
            </div>
          </div>
        </article>
      </Reveal>

      {/* Other projects */}
      <div className="grid gap-6 md:grid-cols-2">
        {rest.map((project, i) => (
          <Reveal key={project.slug} delay={(i % 2) * 0.1}>
            <article className="glass group flex h-full flex-col rounded-3xl p-7 transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 md:p-8">
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="font-display text-xl font-bold tracking-tight md:text-2xl">
                  {project.name}
                </h3>
                <span className="shrink-0 font-mono text-xs text-muted">{project.period}</span>
              </div>
              <p className="mt-1 text-sm text-accent-2">{project.subtitle}</p>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-muted md:text-base">
                {project.description}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span key={tech} className="rounded-full border border-line px-3 py-1 font-mono text-xs text-muted">
                    {tech}
                  </span>
                ))}
              </div>
              {project.github ? (
                <div className="mt-6">
                  <GitHubLink href={project.github} name={project.name} />
                </div>
              ) : (
                <p className="mt-6 font-mono text-xs tracking-widest text-muted">
                  PRIVATE CLIENT ENGAGEMENT
                </p>
              )}
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
