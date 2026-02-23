"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const cases = [
  {
    client: "FinTech Pro",
    description:
      "Plataforma completa de gestão financeira com dashboard em tempo real, integração bancária e relatórios automatizados.",
    technologies: ["React", "Node.js", "AWS", "PostgreSQL"],
    category: "Plataforma Web",
  },
  {
    client: "HealthConnect",
    description:
      "Aplicativo de telemedicina com agendamento inteligente, prontuário eletrônico e integração com wearables.",
    technologies: ["React Native", "Next.js", "MongoDB", "AWS"],
    category: "App Mobile",
  },
  {
    client: "LogiTrack",
    description:
      "Sistema de rastreamento logístico com IoT, otimização de rotas em tempo real e analytics preditivo.",
    technologies: ["TypeScript", "Python", "AWS IoT", "Redis"],
    category: "IoT & Cloud",
  },
  {
    client: "EduSmart",
    description:
      "Plataforma de educação corporativa com gamificação, trilhas de aprendizado personalizadas e IA adaptativa.",
    technologies: ["Next.js", "Node.js", "OpenAI", "PostgreSQL"],
    category: "EdTech",
  },
];

export function CasesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="cases"
      className="relative py-32 bg-black scroll-mt-20"
      ref={ref}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-sm font-medium text-[#00D28C] tracking-widest uppercase">
            Portfólio
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Cases de sucesso
          </h2>
          <p className="mt-4 text-white/50 max-w-xl mx-auto text-lg">
            Conheça alguns dos projetos que desenvolvemos e os resultados
            que geramos para nossos clientes.
          </p>
        </motion.div>

        {/* Cases Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cases.map((caseItem, index) => (
            <motion.div
              key={caseItem.client}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group relative rounded-2xl p-8 glass-card glass-noise"
            >
              {/* Category */}
              <span className="text-xs font-medium text-[#00D28C]/80 tracking-wider uppercase">
                {caseItem.category}
              </span>

              {/* Client Name */}
              <h3 className="mt-3 text-xl font-bold text-white">
                {caseItem.client}
              </h3>

              {/* Description */}
              <p className="mt-3 text-sm text-white/50 leading-relaxed">
                {caseItem.description}
              </p>

              {/* Technologies */}
              <div className="mt-5 flex flex-wrap gap-2">
                {caseItem.technologies.map((tech) => (
                  <Badge
                    key={tech}
                    variant="secondary"
                    className="bg-white/[0.04] text-white/60 border-white/[0.06] hover:bg-white/[0.08] backdrop-blur-sm text-xs"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>

              {/* CTA */}
              <div className="mt-6">
                <Button
                  variant="ghost"
                  className="text-[#00D28C] hover:text-[#00D28C] hover:bg-[#00D28C]/5 p-0 h-auto font-medium text-sm group/btn"
                >
                  Ver projeto
                  <ArrowRight className="ml-1 size-4 transition-transform group-hover/btn:translate-x-1" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
