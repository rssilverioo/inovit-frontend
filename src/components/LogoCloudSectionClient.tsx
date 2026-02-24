"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface LogoCloudSectionClientProps {
  title: string;
  logos: string[];
}

export function LogoCloudSectionClient({
  title,
  logos,
}: LogoCloudSectionClientProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section className="relative py-16 lg:py-20 bg-white border-b border-black/[0.04]" ref={ref}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <p className="text-xs text-[#0A0A0A]/30 tracking-widest uppercase font-medium mb-8">
            {title}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
            {logos.map((logo, index) => (
              <motion.div
                key={logo}
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                  ease: [0.16, 1, 0.3, 1] as const,
                }}
                className="text-lg font-semibold text-[#0A0A0A]/12 tracking-tight hover:text-[#0A0A0A]/25 transition-colors duration-300 font-[family-name:var(--font-outfit)]"
              >
                {logo}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
