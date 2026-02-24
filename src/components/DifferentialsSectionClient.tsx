"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Cpu,
  Users,
  Gauge,
  ShieldCheck,
  Target,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = { Cpu, Users, Gauge, ShieldCheck, Target };

interface DifferentialItem {
  icon: string;
  number: string;
  title: string;
  description: string;
}

interface DifferentialsSectionClientProps {
  label: string;
  title: string;
  subtitle: string;
  items: DifferentialItem[];
}

export function DifferentialsSectionClient({
  label,
  title,
  subtitle,
  items,
}: DifferentialsSectionClientProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="relative py-28 lg:py-36 bg-white" ref={ref}>
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as const }}
          className="mb-16 lg:mb-20"
        >
          <div className="flex items-center gap-4 mb-6">
            <span className="section-label">{label}</span>
            <div className="flex-1 accent-line-left-dark max-w-32" />
          </div>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">
            <h2 className="text-3xl md:text-4xl lg:text-[3.25rem] font-bold text-[#0A0A0A] tracking-[-0.03em] leading-tight">
              {title}
            </h2>
            <p className="text-[#0A0A0A]/40 max-w-md text-base leading-relaxed font-light lg:text-right">
              {subtitle}
            </p>
          </div>
        </motion.div>

        {/* Items */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-12 lg:gap-y-14">
          {items.map((item, index) => {
            const Icon = iconMap[item.icon] || Cpu;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                  ease: [0.16, 1, 0.3, 1] as const,
                }}
                className="group"
              >
                {/* Number + Icon */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-[#00D28C]/8 text-[#00D28C] group-hover:bg-[#00D28C]/15 transition-colors duration-400">
                    <Icon className="size-5" />
                  </div>
                  <span className="text-[11px] font-medium text-[#0A0A0A]/12 tracking-widest font-[family-name:var(--font-outfit)]">
                    {item.number}
                  </span>
                </div>

                <h3 className="text-lg font-semibold text-[#0A0A0A] tracking-tight mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-[#0A0A0A]/40 leading-relaxed font-light">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
