import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { skillGroups, certifications } from "@/lib/data";

export default function Skills() {
  return (
    <section id="skills" className="relative mx-auto max-w-6xl px-6 py-24 md:py-32">
      <SectionHeading kicker="The Toolkit" title="Three disciplines, one engineer." />

      <div className="grid gap-6 md:grid-cols-3">
        {skillGroups.map((group, i) => (
          <Reveal key={group.name} delay={i * 0.1}>
            <div className="glass h-full rounded-3xl p-7 transition-colors duration-300 hover:border-accent/30">
              <p className="font-display text-6xl font-black text-outline select-none" aria-hidden="true">
                {String(i + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-3 font-display text-xl font-bold tracking-tight">{group.name}</h3>
              <div className="mt-5 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-line px-3 py-1.5 font-mono text-xs text-muted transition-colors duration-200 hover:border-accent/40 hover:text-accent"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      {/* Certifications marquee */}
      <Reveal className="mt-16">
        <h3 className="kicker mb-6">Certifications</h3>
      </Reveal>
      <div
        className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]"
      >
        <div className="animate-marquee flex w-max gap-4 hover:[animation-play-state:paused]">
          {[...certifications, ...certifications].map((cert, i) => (
            <div
              key={`${cert.name}-${i}`}
              className="glass flex w-72 shrink-0 flex-col justify-between rounded-2xl p-5"
            >
              <p className="text-sm font-semibold leading-snug">{cert.name}</p>
              <p className="mt-3 font-mono text-xs text-muted">
                {cert.issuer} · <span className="text-accent">{cert.year}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
