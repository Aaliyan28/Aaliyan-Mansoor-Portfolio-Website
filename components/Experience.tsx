import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { experience } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="relative mx-auto max-w-6xl px-6 py-24 md:py-32">
      <SectionHeading
        kicker="Experience"
        title="Where I've done the work."
      />

      <div className="space-y-6">
        {experience.map((job, i) => (
          <Reveal key={job.role} delay={i * 0.08}>
            <article className="glass group rounded-3xl p-6 transition-colors duration-300 hover:border-accent/30 md:p-9">
              <div className="flex flex-wrap items-baseline justify-between gap-3">
                <div>
                  <h3 className="font-display text-xl font-bold tracking-tight md:text-2xl">
                    {job.role}
                  </h3>
                  <p className="mt-1 text-accent-2">{job.org}</p>
                </div>
                <div className="text-right">
                  <p className="font-mono text-sm text-accent">{job.period}</p>
                  <p className="mt-1 text-xs text-muted">{job.location}</p>
                </div>
              </div>
              <ul className="mt-5 space-y-2.5">
                {job.points.map((point) => (
                  <li key={point} className="flex items-start gap-3 text-sm leading-relaxed text-muted md:text-base">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                    {point}
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex flex-wrap gap-2">
                {job.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-line px-3 py-1 font-mono text-xs text-muted transition-colors duration-200 group-hover:border-accent/30 group-hover:text-accent"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
