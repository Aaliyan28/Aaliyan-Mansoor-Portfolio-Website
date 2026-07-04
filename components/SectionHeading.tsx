import Reveal from "./Reveal";

type SectionHeadingProps = {
  kicker: string;
  title: string;
  intro?: string;
};

export default function SectionHeading({ kicker, title, intro }: SectionHeadingProps) {
  return (
    <div className="mb-14 max-w-3xl md:mb-20">
      <Reveal>
        <p className="kicker mb-4">{kicker}</p>
      </Reveal>
      <Reveal delay={0.08}>
        <h2 className="font-display text-4xl font-extrabold tracking-tight text-ink md:text-6xl">
          {title}
        </h2>
      </Reveal>
      {intro ? (
        <Reveal delay={0.16}>
          <p className="mt-5 text-base leading-relaxed text-muted md:text-lg">{intro}</p>
        </Reveal>
      ) : null}
    </div>
  );
}
