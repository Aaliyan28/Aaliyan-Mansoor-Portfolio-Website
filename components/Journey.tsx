"use client";

import Image from "next/image";
import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { journey } from "@/lib/data";

export default function Journey() {
  const trackRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start 70%", "end 65%"],
  });
  const lineScale = useSpring(scrollYProgress, { stiffness: 90, damping: 24 });

  return (
    <section id="journey" className="relative mx-auto max-w-6xl px-6 py-24 md:py-36">
      <SectionHeading
        kicker="The Journey"
        title="Every engineer has an origin story."
        intro="From a Karachi classroom to a published research paper — scroll through the chapters."
      />

      <div ref={trackRef} className="relative">
        {/* rail */}
        <div
          className="absolute left-4 top-0 h-full w-px bg-line md:left-1/2"
          aria-hidden="true"
        />
        <motion.div
          style={{ scaleY: lineScale }}
          className="absolute left-4 top-0 h-full w-px origin-top bg-gradient-to-b from-accent via-accent-2 to-accent md:left-1/2"
          aria-hidden="true"
        />

        <ol className="space-y-16 md:space-y-24">
          {journey.map((chapter, i) => {
            const flip = i % 2 === 1;
            return (
              <li key={chapter.id} className="relative">
                {/* node */}
                <div
                  className="absolute left-4 top-2 z-10 -translate-x-1/2 md:left-1/2"
                  aria-hidden="true"
                >
                  <div className="h-3.5 w-3.5 rounded-full border-2 border-accent bg-bg shadow-[0_0_18px_rgba(103,232,249,0.65)]" />
                </div>

                <div
                  className={`grid gap-6 pl-12 md:grid-cols-2 md:gap-16 md:pl-0 ${
                    flip ? "" : ""
                  }`}
                >
                  <Reveal
                    className={`${flip ? "md:order-2 md:pl-16" : "md:pr-16 md:text-right"}`}
                  >
                    <p className="kicker mb-3">{chapter.kicker}</p>
                    <p className="font-mono text-sm text-muted">{chapter.period}</p>
                    <h3 className="mt-2 font-display text-2xl font-extrabold tracking-tight md:text-3xl">
                      {chapter.title}
                    </h3>
                    <p className="mt-1 text-sm font-medium text-accent-2">{chapter.place}</p>
                    <p className="mt-4 leading-relaxed text-muted">{chapter.description}</p>
                    {chapter.highlights ? (
                      <ul
                        className={`mt-4 space-y-2 text-sm text-muted ${
                          flip ? "" : "md:ml-auto md:max-w-md"
                        }`}
                      >
                        {chapter.highlights.map((h) => (
                          <li
                            key={h}
                            className={`flex items-start gap-2 ${
                              flip ? "" : "md:flex-row-reverse md:text-right"
                            }`}
                          >
                            <svg
                              viewBox="0 0 20 20"
                              className="mt-0.5 h-4 w-4 shrink-0 text-gold"
                              fill="currentColor"
                              aria-hidden="true"
                            >
                              <path d="M10 1.5l2.47 5.01 5.53.8-4 3.9.94 5.5L10 14.11l-4.94 2.6.94-5.5-4-3.9 5.53-.8L10 1.5z" />
                            </svg>
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </Reveal>

                  <Reveal
                    delay={0.12}
                    className={`${flip ? "md:order-1 md:pr-16" : "md:pl-16"}`}
                  >
                    {chapter.image ? (
                      <div className="glass group relative overflow-hidden rounded-3xl">
                        <Image
                          src={chapter.image.src}
                          alt={chapter.image.alt}
                          width={880}
                          height={660}
                          className="h-64 w-full object-cover transition-transform duration-700 group-hover:scale-105 md:h-80"
                        />
                        <div
                          className="absolute inset-0 bg-gradient-to-t from-bg/70 via-transparent to-transparent"
                          aria-hidden="true"
                        />
                      </div>
                    ) : (
                      <div
                        className="hidden h-full min-h-24 items-center md:flex"
                        aria-hidden="true"
                      >
                        <p className="font-display text-8xl font-black text-outline select-none">
                          {String(i + 1).padStart(2, "0")}
                        </p>
                      </div>
                    )}
                  </Reveal>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
