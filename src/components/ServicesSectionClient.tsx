"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Cloud, Palette, Rocket, ArrowUpRight, type LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = { Code2, Cloud, Palette, Rocket };

interface ServiceItem {
  icon: string;
  number: string;
  title: string;
  description: string;
  color: string;
}

interface ServicesSectionClientProps {
  label: string;
  title: string;
  subtitle: string;
  items: ServiceItem[];
}

export function ServicesSectionClient({
  label,
  title,
  subtitle,
  items,
}: ServicesSectionClientProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="solucoes"
      className="relative py-28 lg:py-36 bg-[#FAFAFA] scroll-mt-20"
      ref={ref}
    >
      <div className="absolute inset-0 bg-dot-pattern-light opacity-50" />

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
          <p className="mt-5 text-[#0A0A0A]/50 max-w-lg mx-auto text-lg leading-relaxed font-light">
            {subtitle}
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {items.map((service, index) => {
            const Icon = iconMap[service.icon] || Code2;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.7,
                  delay: index * 0.1,
                  ease: [0.16, 1, 0.3, 1] as const,
                }}
                className="group relative rounded-2xl p-8 lg:p-10 card-light overflow-hidden cursor-pointer"
              >
                {/* Colored top accent */}
                <div
                  className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: service.color }}
                />

                <div className="flex items-start justify-between mb-6">
                  {/* Icon */}
                  <div
                    className="flex items-center justify-center w-12 h-12 rounded-xl transition-all duration-500"
                    style={{
                      background: `${service.color}10`,
                      color: service.color,
                    }}
                  >
                    <Icon className="size-5" />
                  </div>

                  {/* Number */}
                  <span className="text-[11px] font-medium text-[#0A0A0A]/15 tracking-widest font-[family-name:var(--font-outfit)]">
                    {service.number}
                  </span>
                </div>

                <h3 className="text-xl font-semibold text-[#0A0A0A] mb-3 tracking-tight">
                  {service.title}
                </h3>
                <p className="text-[15px] text-[#0A0A0A]/45 leading-relaxed font-light">
                  {service.description}
                </p>

                {/* Hover arrow */}
                <div className="mt-6 flex items-center gap-2 text-[#0A0A0A]/0 group-hover:text-[#0A0A0A]/40 transition-all duration-500">
                  <span className="text-xs font-medium tracking-wide">Saiba mais</span>
                  <ArrowUpRight className="size-3.5" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
