"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface CaseItem {
  client: string;
  description: string;
  technologies: string[];
  category: string;
  gradient: string;
  iconColor: string;
}

interface CasesSectionClientProps {
  label: string;
  title: string;
  subtitle: string;
  items: CaseItem[];
}

export function CasesSectionClient({
  label,
  title,
  subtitle,
  items,
}: CasesSectionClientProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="cases"
      className="relative py-28 lg:py-36 bg-[#F5F6F8] scroll-mt-20"
      ref={ref}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
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

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {items.map((caseItem, index) => (
            <motion.div
              key={caseItem.client}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.7,
                delay: index * 0.1,
                ease: [0.16, 1, 0.3, 1] as const,
              }}
              className="group relative rounded-2xl overflow-hidden card-light cursor-pointer"
            >
              {/* Gradient top strip */}
              <div className={`absolute top-0 left-0 right-0 h-40 bg-gradient-to-b ${caseItem.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />

              <div className="relative p-8 lg:p-10">
                {/* Header row */}
                <div className="flex items-center justify-between mb-6">
                  <span
                    className="text-[11px] font-semibold tracking-widest uppercase px-3 py-1 rounded-full"
                    style={{
                      background: `${caseItem.iconColor}10`,
                      color: caseItem.iconColor,
                    }}
                  >
                    {caseItem.category}
                  </span>
                  <div className="w-9 h-9 rounded-full flex items-center justify-center border border-[#0A0A0A]/8 text-[#0A0A0A]/20 group-hover:border-[#00D28C]/20 group-hover:text-[#00D28C] transition-all duration-500">
                    <ArrowUpRight className="size-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                  </div>
                </div>

                {/* Client */}
                <h3 className="text-2xl font-bold text-[#0A0A0A] tracking-tight">
                  {caseItem.client}
                </h3>

                {/* Description */}
                <p className="mt-3 text-[15px] text-[#0A0A0A]/40 leading-relaxed font-light">
                  {caseItem.description}
                </p>

                {/* Technologies */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {caseItem.technologies.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="bg-[#0A0A0A]/[0.04] text-[#0A0A0A]/50 border-[#0A0A0A]/[0.06] hover:bg-[#0A0A0A]/[0.06] text-[11px] font-normal px-2.5 py-1"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
