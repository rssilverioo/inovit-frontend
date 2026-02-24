"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MessageSquare, Pencil, Code2, Rocket, CheckCircle2, type LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = { MessageSquare, Pencil, Code2, Rocket, CheckCircle2 };

interface StepItem {
  icon: string;
  number: string;
  title: string;
  description: string;
  color: string;
}

interface ProcessSectionClientProps {
  label: string;
  title: string;
  subtitle: string;
  steps: StepItem[];
}

export function ProcessSectionClient({
  label,
  title,
  subtitle,
  steps,
}: ProcessSectionClientProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="relative py-28 lg:py-36 bg-[#F5F6F8] overflow-hidden" ref={ref}>
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as const }}
          className="text-center mb-16 lg:mb-20"
        >
          <span className="section-label">{label}</span>
          <h2 className="mt-5 text-3xl md:text-4xl lg:text-[3.25rem] font-bold text-[#0A0A0A] tracking-[-0.03em]">
            {title}
          </h2>
          <p className="mt-5 text-[#0A0A0A]/40 max-w-lg mx-auto text-lg leading-relaxed font-light">
            {subtitle}
          </p>
        </motion.div>

        {/* Steps — horizontal timeline */}
        <div className="relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-[52px] left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-[#0A0A0A]/8 to-transparent" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-6">
            {steps.map((step, index) => {
              const Icon = iconMap[step.icon] || MessageSquare;
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                    ease: [0.16, 1, 0.3, 1] as const,
                  }}
                  className="relative text-center lg:text-center group"
                >
                  {/* Icon circle */}
                  <div className="relative inline-flex items-center justify-center w-[72px] h-[72px] mx-auto mb-5">
                    <div
                      className="absolute inset-0 rounded-2xl transition-all duration-500 group-hover:scale-110"
                      style={{ background: `${step.color}08`, border: `1px solid ${step.color}15` }}
                    />
                    <div className="relative" style={{ color: step.color }}>
                      <Icon className="size-6" />
                    </div>
                    {/* Pulse ring on hover */}
                    <div
                      className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{ boxShadow: `0 0 0 4px ${step.color}08, 0 0 20px ${step.color}10` }}
                    />
                  </div>

                  {/* Number */}
                  <div
                    className="text-[10px] font-bold tracking-[0.3em] mb-2"
                    style={{ color: step.color }}
                  >
                    STEP {step.number}
                  </div>

                  <h3 className="text-base font-semibold text-[#0A0A0A] tracking-tight mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-[#0A0A0A]/35 leading-relaxed font-light max-w-[200px] mx-auto">
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
