"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { heroCarousel } from "@/lib/data";

const INTERVAL_MS = 4500;

// Slow crossfading photo frame for the hero's right side (desktop only).
export default function HeroCarousel() {
  const [index, setIndex] = useState(0);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % heroCarousel.length);
    }, INTERVAL_MS);
    return () => clearInterval(id);
  }, [reduce]);

  return (
    <div className="relative mx-auto w-full max-w-sm">
      {/* glow backdrop */}
      <div
        className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-br from-accent/20 via-transparent to-accent-2/20 blur-2xl"
        aria-hidden="true"
      />
      <motion.div
        animate={reduce ? undefined : { y: [0, -10, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="glass relative aspect-[3/4] overflow-hidden rounded-[2rem] shadow-[0_24px_80px_rgba(0,0,0,0.55)]"
      >
        {/* All photos stay mounted and preloaded; only opacity animates, so
            the crossfade never waits on a network request. */}
        {heroCarousel.map((photo, i) => (
          <motion.div
            key={photo.src}
            initial={false}
            animate={{ opacity: i === index ? 1 : 0, scale: i === index ? 1 : 1.04 }}
            transition={{ duration: 1.1, ease: "easeOut" }}
            className="absolute inset-0"
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              sizes="(min-width: 1024px) 24rem, 0px"
              priority
              className="object-cover"
            />
          </motion.div>
        ))}
        {/* subtle bottom vignette so the frame edge reads cleanly */}
        <div
          className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/40 to-transparent"
          aria-hidden="true"
        />
      </motion.div>

      {/* progress dots */}
      <div className="mt-5 flex justify-center gap-2">
        {heroCarousel.map((p, i) => (
          <button
            key={p.src}
            type="button"
            onClick={() => setIndex(i)}
            aria-label={`Show photo ${i + 1}`}
            className={`h-1.5 cursor-pointer rounded-full transition-all duration-300 ${
              i === index ? "w-6 bg-accent" : "w-1.5 bg-line hover:bg-accent/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
