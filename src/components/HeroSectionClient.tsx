"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CodeAnimation } from "./CodeAnimation";

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
  },
};

interface HeroSectionClientProps {
  badge: string;
  headline: string;
  subtitle: string;
  ctaPrimary: string;
  ctaSecondary: string;
  metrics: Array<{ value: string; label: string }>;
}

export function HeroSectionClient({
  badge,
  headline,
  subtitle,
  ctaPrimary,
  ctaSecondary,
  metrics,
}: HeroSectionClientProps) {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#050505]">
      {/* Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40" />

      {/* Gradient orbs */}
      <motion.div
        animate={{ scale: [1, 1.3, 1], opacity: [0.12, 0.25, 0.12] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[10%] left-[10%] w-[600px] h-[600px] rounded-full bg-[#00D28C]/10 blur-[160px]"
      />
      <motion.div
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.08, 0.2, 0.08] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[5%] right-[5%] w-[500px] h-[500px] rounded-full bg-cyan-500/10 blur-[160px]"
      />
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.04, 0.1, 0.04] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[40%] right-[30%] w-[400px] h-[400px] rounded-full bg-blue-500/5 blur-[140px]"
      />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 w-full py-32 lg:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-center">
          {/* Left: Text */}
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
          >
            {/* Badge */}
            <motion.div variants={fadeUp} className="mb-8">
              <span className="inline-flex items-center gap-2.5 rounded-full glass-badge px-4 py-1.5 text-[12px] font-medium text-[#00D28C] tracking-wide">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00D28C] opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00D28C]" />
                </span>
                {badge}
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={fadeUp}
              className="text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-[4rem] font-bold tracking-[-0.035em] text-white leading-[1.08]"
            >
              {headline.includes("tecnologia") ? (
                <>
                  {headline.split("tecnologia")[0]}
                  <span className="text-gradient">tecnologia</span>
                  {headline.split("tecnologia")[1]}
                </>
              ) : (
                headline
              )}
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={fadeUp}
              className="mt-6 text-lg text-white/40 max-w-lg leading-relaxed font-light"
            >
              {subtitle}
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={fadeUp}
              className="mt-10 flex flex-col sm:flex-row items-start gap-4"
            >
              <Button
                asChild
                size="lg"
                className="bg-[#00D28C] text-black hover:bg-[#00E8A0] font-semibold rounded-full px-8 h-12 text-[15px] shimmer-btn transition-all duration-300 hover:shadow-[0_0_40px_rgba(0,210,140,0.2)]"
              >
                <a href="#contato">
                  {ctaPrimary}
                  <ArrowRight className="ml-2 size-4" />
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-full px-6 h-12 text-[15px] border-white/8 text-white/70 bg-white/[0.02] hover:bg-white/[0.05] hover:text-white hover:border-white/15 transition-all duration-300"
              >
                <a href="#cases">
                  <Play className="mr-2 size-4" />
                  {ctaSecondary}
                </a>
              </Button>
            </motion.div>

            {/* Metrics */}
            <motion.div
              variants={fadeUp}
              className="mt-14 flex items-center gap-8"
            >
              {metrics.map((m, i) => (
                <div key={m.label} className="flex items-center gap-8">
                  <div>
                    <div className="text-xl font-bold text-white/85">{m.value}</div>
                    <div className="text-[11px] text-white/30 tracking-wider uppercase font-medium mt-0.5">{m.label}</div>
                  </div>
                  {i < metrics.length - 1 && <div className="h-8 w-px bg-white/[0.06]" />}
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Code Animation */}
          <div className="relative">
            <CodeAnimation />
          </div>
        </div>
      </div>
    </section>
  );
}
