"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Cpu,
  Users,
  Gauge,
  ShieldCheck,
  Target,
} from "lucide-react";

const differentials = [
  {
    icon: Cpu,
    title: "Engenharia de alto nível",
    description:
      "Código limpo, arquiteturas robustas e boas práticas que garantem qualidade e longevidade aos seus produtos digitais.",
  },
  {
    icon: Users,
    title: "Times ágeis",
    description:
      "Squads multidisciplinares com processos ágeis, comunicação transparente e entregas contínuas de valor.",
  },
  {
    icon: Gauge,
    title: "Foco em performance",
    description:
      "Otimização constante para garantir velocidade, escalabilidade e a melhor experiência possível para seus usuários.",
  },
  {
    icon: ShieldCheck,
    title: "Segurança e escalabilidade",
    description:
      "Infraestrutura cloud-native com práticas de segurança enterprise. Seus dados e sistemas protegidos.",
  },
  {
    icon: Target,
    title: "Entrega orientada a resultados",
    description:
      "Métricas claras, KPIs definidos e acompanhamento contínuo. Cada feature entregue gera impacto mensurável.",
  },
];

export function DifferentialsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-32 bg-black" ref={ref}>
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#00D28C]/[0.02] via-transparent to-transparent" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-sm font-medium text-[#00D28C] tracking-widest uppercase">
            Diferenciais
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Por que a Inovit?
          </h2>
        </motion.div>

        {/* Alternating Blocks */}
        <div className="space-y-16 lg:space-y-24">
          {differentials.map((item, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.7, delay: index * 0.15 }}
                className={`flex flex-col lg:flex-row items-center gap-10 lg:gap-20 ${
                  !isEven ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Icon/Visual Block */}
                <div className="flex-shrink-0">
                  <div className="relative w-24 h-24 lg:w-32 lg:h-32 rounded-2xl glass-card flex items-center justify-center group">
                    <item.icon className="size-10 lg:size-14 text-[#00D28C]" />
                  </div>
                </div>

                {/* Text Block */}
                <div className={`text-center lg:text-left ${!isEven ? "lg:text-right" : ""} max-w-xl`}>
                  <h3 className="text-xl lg:text-2xl font-bold text-white mb-3">
                    {item.title}
                  </h3>
                  <p className="text-white/50 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
