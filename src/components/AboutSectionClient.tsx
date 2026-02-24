"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface StatItem {
  number: string;
  label: string;
  color: string;
}

interface AboutSectionClientProps {
  label: string;
  title: string;
  paragraph1: string;
  paragraph2: string;
  quote: string;
  stats: StatItem[];
}

export function AboutSectionClient({
  label,
  title,
  paragraph1,
  paragraph2,
  quote,
  stats,
}: AboutSectionClientProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="sobre"
      className="relative py-28 lg:py-36 bg-white scroll-mt-20"
      ref={ref}
    >
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as const }}
            className="lg:col-span-7"
          >
            <div className="flex items-center gap-4 mb-6">
              <span className="section-label">{label}</span>
              <div className="flex-1 accent-line-left-dark max-w-32" />
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-[3.25rem] font-bold text-[#0A0A0A] tracking-[-0.03em] leading-tight">
              {title.includes("Inovit Digital") ? (
                <>
                  {title.split("Inovit Digital")[0]}
                  <span className="text-gradient">Inovit Digital</span>
                  {title.split("Inovit Digital")[1]}
                </>
              ) : (
                title
              )}
            </h2>

            <div className="mt-8 space-y-5">
              <p className="text-[#0A0A0A]/50 leading-relaxed text-lg font-light">
                {paragraph1}
              </p>
              <p className="text-[#0A0A0A]/35 leading-relaxed font-light">
                {paragraph2}
              </p>
            </div>

            {/* Quote */}
            <div className="mt-10 flex items-start gap-4">
              <div className="w-px h-12 bg-[#00D28C] shrink-0 mt-1" />
              <p className="text-[15px] text-[#0A0A0A]/55 italic leading-relaxed font-light">
                &ldquo;{quote}&rdquo;
              </p>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] as const }}
            className="lg:col-span-5"
          >
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: 0.6,
                    delay: 0.3 + index * 0.08,
                    ease: [0.16, 1, 0.3, 1] as const,
                  }}
                  className="rounded-2xl p-6 lg:p-7 card-light-flat text-center"
                >
                  <div
                    className="text-3xl lg:text-4xl font-bold tracking-tight"
                    style={{ color: stat.color }}
                  >
                    {stat.number}
                  </div>
                  <div className="mt-2 text-xs text-[#0A0A0A]/35 tracking-wider uppercase font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
