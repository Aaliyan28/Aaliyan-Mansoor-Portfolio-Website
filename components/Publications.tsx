import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { publications, awards } from "@/lib/data";

export default function Publications() {
  return (
    <section id="research" className="relative mx-auto max-w-6xl px-6 py-24 md:py-32">
      <SectionHeading
        kicker="Research & Recognition"
        title="Published, peer-reviewed, funded."
        intro="Research at the intersection of computer vision, edge deployment, and industrial inspection."
      />

      <div className="space-y-6">
        {publications.map((pub, i) => (
          <Reveal key={pub.title} delay={i * 0.08}>
            <article className="glass rounded-3xl p-7 transition-colors duration-300 hover:border-accent/30 md:p-9">
              <div className="flex flex-wrap items-center gap-3">
                <span
                  className={`rounded-full px-3 py-1 font-mono text-xs tracking-widest ${
                    pub.status === "Published"
                      ? "border border-emerald-400/40 bg-emerald-400/10 text-emerald-300"
                      : "border border-gold/40 bg-gold/10 text-gold"
                  }`}
                >
                  {pub.status.toUpperCase()}
                </span>
                <span className="font-mono text-xs text-muted">{pub.year}</span>
              </div>
              <h3 className="mt-4 font-display text-xl font-bold leading-snug tracking-tight md:text-2xl">
                “{pub.title}”
              </h3>
              <p className="mt-3 text-accent-2">
                {pub.venue} — {pub.detail}
              </p>
              <p className="mt-2 text-sm text-muted">{pub.authors}</p>
              {(pub.doi || pub.pdf) && (
                <div className="mt-6 flex flex-wrap items-center gap-4">
                  {pub.doi && (
                    <a
                      href={pub.doi}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-slate-950 transition-colors duration-200 hover:bg-cyan-300"
                    >
                      Read on ASTRJ
                      <svg
                        viewBox="0 0 20 20"
                        className="h-3.5 w-3.5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <path d="M7 13L13 7M8 7h5v5" />
                      </svg>
                    </a>
                  )}
                  {pub.pdf && (
                    <a
                      href={pub.pdf}
                      download
                      className="inline-flex items-center gap-2 rounded-full border border-line px-5 py-2.5 text-sm font-medium text-muted transition-colors duration-200 hover:border-accent/50 hover:text-accent"
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
                      Download PDF
                    </a>
                  )}
                </div>
              )}
            </article>
          </Reveal>
        ))}
      </div>

      <div className="mt-14">
        <Reveal>
          <h3 className="kicker mb-6">Honors & Awards</h3>
        </Reveal>
        <div className="grid gap-6 md:grid-cols-2">
          {awards.map((award, i) => (
            <Reveal key={award.name} delay={i * 0.08}>
              <div className="glass flex h-full items-start gap-4 rounded-3xl p-6">
                <svg
                  viewBox="0 0 24 24"
                  className="mt-1 h-6 w-6 shrink-0 text-gold"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M8 21h8M12 17v4M7 4h10v5a5 5 0 0 1-10 0V4Z" />
                  <path d="M7 6H4a1 1 0 0 0-1 1c0 2.5 1.5 4 4 4M17 6h3a1 1 0 0 1 1 1c0 2.5-1.5 4-4 4" />
                </svg>
                <div>
                  <p className="font-display font-bold">{award.name}</p>
                  <p className="mt-1 text-sm leading-relaxed text-muted">{award.detail}</p>
                  <p className="mt-2 font-mono text-xs text-accent">{award.year}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
