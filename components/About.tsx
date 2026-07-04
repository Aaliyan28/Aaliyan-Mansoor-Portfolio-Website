import Image from "next/image";
import Reveal from "./Reveal";
import { stats } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="relative mx-auto max-w-6xl px-6 py-24 md:py-36">
      <div className="grid items-center gap-12 md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] md:gap-16">
        <Reveal className="relative mx-auto w-full max-w-sm">
          <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-accent/25 via-transparent to-accent-2/25 blur-2xl" aria-hidden="true" />
          <div className="glass relative overflow-hidden rounded-[2rem]">
            <Image
              src="/images/profile-pic.png"
              alt="Portrait of Aaliyan Mansoor"
              width={512}
              height={512}
              priority
              className="h-auto w-full"
            />
          </div>
        </Reveal>

        <div>
          <Reveal>
            <p className="kicker mb-4">Prologue — About me</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="font-display text-4xl font-extrabold tracking-tight md:text-5xl">
              From silicon <span className="text-gradient">to story.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-muted md:text-lg">
              <p>
                I work across an unusual range: I have deployed quantized neural networks on
                FPGAs for real-time industrial inspection, architected B2B platforms used by
                businesses on three continents, and written everything from peer-reviewed
                research to conversion-focused web copy.
              </p>
              <p>
                That range is the point. Whether the medium is hardware, software, or prose,
                the job is the same — take something complex and make it work beautifully for
                the people on the other side.
              </p>
            </div>
          </Reveal>

          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {stats.map((stat, i) => (
              <Reveal key={stat.label} delay={0.1 + i * 0.07}>
                <div className="glass rounded-2xl p-4 text-center">
                  <p className="font-display text-3xl font-extrabold text-accent">{stat.value}</p>
                  <p className="mt-1 text-xs text-muted">{stat.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
