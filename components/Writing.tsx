import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { writingPieces } from "@/lib/data";

export default function Writing() {
  return (
    <section id="writing" className="relative overflow-hidden py-24 md:py-32">
      {/* editorial section gets a slightly different backdrop to signal the shift from code to words */}
      <div className="absolute inset-0 bg-surface/60" aria-hidden="true" />
      <div className="aurora right-[-20%] top-[-10%] h-[40vh] w-[40vw] bg-violet-700/30" aria-hidden="true" />

      <div className="relative mx-auto max-w-6xl px-6">
        <SectionHeading
          kicker="The Other Craft"
          title="I also write — professionally."
          intro="Beyond research papers and technical reports, I've delivered SEO-driven content across tech and consumer-health niches: reviews, buyer's guides, and long-form listicles engineered to rank and convert."
        />

        <div className="grid gap-6 sm:grid-cols-2">
          {writingPieces.map((piece, i) => (
            <Reveal key={piece.title} delay={(i % 2) * 0.1}>
              <article className="glass group flex h-full flex-col justify-between rounded-3xl p-7 transition-all duration-300 hover:-translate-y-1 hover:border-accent-2/40">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="rounded-full border border-accent-2/40 bg-accent-2/10 px-3 py-1 font-mono text-xs text-accent-2">
                      {piece.type}
                    </span>
                    <span className="font-mono text-xs text-muted">{piece.niche}</span>
                  </div>
                  <h3 className="mt-4 font-serif text-xl font-bold italic leading-snug tracking-tight md:text-2xl">
                    “{piece.title}”
                  </h3>
                </div>
                <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
                  <p className="font-mono text-xs tracking-widest text-muted">
                    GHOSTWRITTEN CLIENT WORK
                  </p>
                  <a
                    href={piece.pdf}
                    download
                    className="inline-flex items-center gap-2 rounded-full border border-line px-4 py-2 text-sm font-medium text-muted transition-colors duration-200 hover:border-accent-2/50 hover:text-accent-2"
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
                    Read PDF
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.15}>
          <p className="mt-10 max-w-2xl text-sm leading-relaxed text-muted">
            Technical writing credentials: a peer-reviewed journal publication, a
            highly-commended industrial FYP report, and IELTS Band 8.0 (CEFR C1) — expert-level
            written English, verified.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
