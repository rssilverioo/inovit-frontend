"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CtaSectionClientProps {
  label: string;
  title: string;
  subtitle: string;
  ctaText: string;
  email: string;
}

export function CtaSectionClient({
  label,
  title,
  subtitle,
  ctaText,
  email,
}: CtaSectionClientProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="contato" className="relative py-28 lg:py-36 bg-[#FAFAFA] scroll-mt-20" ref={ref}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
          className="relative overflow-hidden rounded-3xl bg-[#0A0B0D]"
        >
          {/* Background orbs */}
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full bg-[#00D28C]/[0.06] blur-[160px] pointer-events-none" />
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-cyan-500/[0.04] blur-[140px] pointer-events-none" />

          {/* Grid pattern */}
          <div className="absolute inset-0 bg-grid-pattern opacity-30" />

          <div className="relative px-8 py-20 md:px-16 md:py-28 lg:px-24 lg:py-32">
            <div className="text-center max-w-3xl mx-auto">
              <motion.span
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="section-label"
              >
                {label}
              </motion.span>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] as const }}
                className="mt-6 text-3xl md:text-4xl lg:text-[3.25rem] font-bold text-white tracking-[-0.03em] leading-tight text-balance"
              >
                {title.includes("produto digital") ? (
                  <>
                    {title.split("produto digital")[0]}
                    <span className="text-gradient">produto digital</span>
                    {title.split("produto digital")[1]}
                  </>
                ) : (
                  title
                )}
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] as const }}
                className="mt-6 text-white/40 text-lg max-w-xl mx-auto font-light leading-relaxed"
              >
                {subtitle}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5, ease: [0.16, 1, 0.3, 1] as const }}
                className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
              >
                <Button
                  asChild
                  size="lg"
                  className="bg-[#00D28C] text-black hover:bg-[#00E8A0] font-semibold rounded-full px-10 h-14 text-[15px] shimmer-btn transition-all duration-300 hover:shadow-[0_0_40px_rgba(0,210,140,0.25)]"
                >
                  <a href={`mailto:${email}`}>
                    {ctaText}
                    <ArrowRight className="ml-2 size-4" />
                  </a>
                </Button>
                <span className="text-sm text-white/25 font-light">
                  {email}
                </span>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
