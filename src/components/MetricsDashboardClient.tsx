"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { TrendingUp, Zap, Shield, Globe, type LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = { Zap, TrendingUp, Shield, Globe };

interface MetricItem {
  icon: string;
  label: string;
  value: string;
  detail: string;
  trend: string;
  color: string;
  barWidth: string;
}

interface MetricsDashboardClientProps {
  label: string;
  title: string;
  subtitle: string;
  items: MetricItem[];
}

export function MetricsDashboardClient({
  label,
  title,
  subtitle,
  items,
}: MetricsDashboardClientProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="relative py-28 lg:py-36 bg-[#0A0B0D] overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#00D28C]/[0.03] blur-[150px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as const }}
          >
            <div className="flex items-center gap-4 mb-6">
              <span className="section-label">{label}</span>
              <div className="flex-1 accent-line-left max-w-32" />
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-[3.25rem] font-bold text-white tracking-[-0.03em] leading-tight">
              {title.includes("alta performance") ? (
                <>
                  {title.split("alta performance")[0]}
                  <span className="text-gradient">alta performance</span>
                  {title.split("alta performance")[1]}
                </>
              ) : (
                title
              )}
            </h2>
            <p className="mt-6 text-white/40 text-lg leading-relaxed font-light max-w-md">
              {subtitle}
            </p>

            {/* Mini terminal */}
            <div className="mt-8 rounded-lg bg-white/[0.03] border border-white/[0.06] p-4 font-mono text-[12px] max-w-sm">
              <div className="flex items-center gap-2 text-white/20 mb-2">
                <span className="text-[10px]">$</span>
                <span className="text-[#00D28C]/60">inovit</span>
                <span className="text-white/30">status --production</span>
              </div>
              <div className="space-y-1 text-white/25">
                <div className="flex justify-between">
                  <span>API</span>
                  <span className="text-[#00D28C]">healthy</span>
                </div>
                <div className="flex justify-between">
                  <span>Database</span>
                  <span className="text-[#00D28C]">connected</span>
                </div>
                <div className="flex justify-between">
                  <span>CDN</span>
                  <span className="text-[#00D28C]">active (42 edges)</span>
                </div>
                <div className="flex justify-between">
                  <span>SSL</span>
                  <span className="text-[#00D28C]">A+ rating</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Metrics cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] as const }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {items.map((metric, index) => {
              const Icon = iconMap[metric.icon] || Zap;
              return (
                <motion.div
                  key={metric.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: 0.6,
                    delay: 0.3 + index * 0.1,
                    ease: [0.16, 1, 0.3, 1] as const,
                  }}
                  className="rounded-xl p-5 bg-white/[0.025] border border-white/[0.06] hover:border-white/[0.1] transition-all duration-500 group"
                >
                  {/* Header */}
                  <div className="flex items-center justify-between mb-3">
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center"
                      style={{ background: `${metric.color}12`, color: metric.color }}
                    >
                      <Icon className="size-4" />
                    </div>
                    <span
                      className="text-[10px] font-medium px-2 py-0.5 rounded-full"
                      style={{ background: `${metric.color}10`, color: metric.color }}
                    >
                      {metric.trend}
                    </span>
                  </div>

                  {/* Value */}
                  <div className="text-2xl font-bold text-white tracking-tight mb-0.5">
                    {metric.value}
                  </div>
                  <div className="text-[11px] text-white/30 mb-3">{metric.label}</div>

                  {/* Progress bar */}
                  <div className="h-1 rounded-full bg-white/[0.04] overflow-hidden">
                    <motion.div
                      initial={{ width: "0%" }}
                      animate={isInView ? { width: metric.barWidth } : {}}
                      transition={{ duration: 1.5, delay: 0.5 + index * 0.15, ease: "easeOut" }}
                      className="h-full rounded-full"
                      style={{ background: metric.color }}
                    />
                  </div>
                  <div className="mt-1.5 text-[10px] text-white/15">{metric.detail}</div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
