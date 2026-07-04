"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import ParticleField from "./ParticleField";
import HeroCarousel from "./HeroCarousel";
import Magnetic from "./Magnetic";
import { heroRoles, site } from "@/lib/data";

function useTypewriter(words: string[], typeMs = 65, holdMs = 1800) {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce) return;
    let cancelled = false;
    const word = words[index % words.length];
    let i = 0;

    const typeNext = () => {
      if (cancelled) return;
      if (i <= word.length) {
        setText(word.slice(0, i));
        i += 1;
        setTimeout(typeNext, typeMs);
      } else {
        setTimeout(() => {
          if (!cancelled) setIndex((v) => v + 1);
        }, holdMs);
      }
    };
    typeNext();

    return () => {
      cancelled = true;
    };
  }, [index, words, typeMs, holdMs, reduce]);

  // With reduced motion we skip the animation and show the first role statically.
  return reduce ? words[0] : text;
}

export default function Hero() {
  const typed = useTypewriter(heroRoles);
  const reduce = useReducedMotion();

  return (
    <section id="top" className="relative flex min-h-svh items-center overflow-hidden">
      {/* backdrop */}
      <div className="absolute inset-0">
        <div className="aurora left-[-10%] top-[-15%] h-[55vh] w-[55vw] bg-cyan-500/50" />
        <div className="aurora right-[-15%] top-[30%] h-[60vh] w-[50vw] bg-violet-600/40 [animation-delay:-6s]" />
        <div className="aurora bottom-[-25%] left-[25%] h-[50vh] w-[45vw] bg-blue-700/40 [animation-delay:-12s]" />
      </div>
      <ParticleField />
      {/* bottom fade into page background */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-bg" />

      <div className="relative z-10 mx-auto grid w-full max-w-6xl gap-12 px-6 pb-24 pt-36 md:pt-28 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] lg:items-center">
        <div>
        <motion.p
          initial={reduce ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="kicker mb-6"
        >
          Karachi, Pakistan — open to opportunities worldwide
        </motion.p>

        <motion.h1
          initial={reduce ? false : { opacity: 0, y: 34 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.25, ease: [0.21, 0.65, 0.32, 1] }}
          className="font-display text-[13vw] font-black leading-[0.95] tracking-tight md:text-[7.5rem] lg:text-[clamp(4rem,8.3vw,7.5rem)]"
        >
          <span className="block text-ink">Aaliyan</span>
          <span className="text-gradient block">Mansoor</span>
        </motion.h1>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-8 flex min-h-8 items-center font-mono text-base text-muted md:text-xl"
        >
          <span className="mr-3 text-accent">&gt;</span>
          <span className="caret text-ink">{typed}</span>
        </motion.div>

        <motion.p
          initial={reduce ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.65 }}
          className="mt-6 max-w-2xl text-base leading-relaxed text-muted md:text-lg"
        >
          {site.summary}
        </motion.p>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <Magnetic>
            <a
              href="#projects"
              className="inline-block rounded-full bg-accent px-7 py-3.5 font-medium text-slate-950 transition-colors duration-200 hover:bg-cyan-300"
            >
              Explore my work
            </a>
          </Magnetic>
          <Magnetic>
            <a
              href="#journey"
              className="inline-block rounded-full border border-line px-7 py-3.5 font-medium text-ink transition-colors duration-200 hover:border-accent/50 hover:text-accent"
            >
              Read my story
            </a>
          </Magnetic>

          <div className="ml-1 flex items-center gap-3">
            <a
              href={site.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-line text-muted transition-colors duration-200 hover:border-accent/50 hover:text-accent"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
                <path d="M12 .5C5.65.5.5 5.65.5 12a11.5 11.5 0 0 0 7.86 10.91c.58.11.79-.25.79-.55v-2.17c-3.2.7-3.87-1.36-3.87-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.72.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.76 2.7 1.25 3.35.95.1-.74.4-1.25.72-1.54-2.55-.29-5.24-1.28-5.24-5.68 0-1.26.45-2.28 1.18-3.09-.12-.29-.51-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.78 0c2.2-1.49 3.17-1.18 3.17-1.18.62 1.59.23 2.76.11 3.05.74.8 1.18 1.83 1.18 3.09 0 4.41-2.7 5.38-5.26 5.67.41.35.77 1.05.77 2.12v3.15c0 .3.2.67.8.55A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
              </svg>
            </a>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-line text-muted transition-colors duration-200 hover:border-accent/50 hover:text-accent"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
                <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05a3.74 3.74 0 0 1 3.37-1.85c3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45Z" />
              </svg>
            </a>
          </div>
        </motion.div>
        </div>

        <motion.div
          initial={reduce ? false : { opacity: 0, x: 32 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.6, ease: [0.21, 0.65, 0.32, 1] }}
          className="hidden lg:block"
        >
          <HeroCarousel />
        </motion.div>
      </div>

      {/* scroll cue */}
      <div className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 md:block" aria-hidden="true">
        <div className="flex h-10 w-6 items-start justify-center rounded-full border border-line p-1.5">
          <div className="animate-scroll-cue h-2 w-1 rounded-full bg-accent" />
        </div>
      </div>
    </section>
  );
}
