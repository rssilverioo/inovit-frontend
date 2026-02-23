"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Cloud, Palette, Rocket } from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Desenvolvimento de Software",
    description:
      "Aplicações web, mobile e plataformas sob medida com código limpo, escalável e de alta performance.",
  },
  {
    icon: Cloud,
    title: "Arquitetura e Cloud",
    description:
      "Soluções escaláveis em AWS e cloud-native. Infraestrutura resiliente e otimizada para o seu negócio.",
  },
  {
    icon: Palette,
    title: "UX/UI Design",
    description:
      "Experiências digitais centradas no usuário. Design que encanta, converte e fideliza.",
  },
  {
    icon: Rocket,
    title: "Transformação Digital",
    description:
      "Modernização de sistemas e inovação corporativa. Aceleramos sua jornada digital com estratégia.",
  },
];

export function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="solucoes"
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
            Soluções
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            O que fazemos
          </h2>
          <p className="mt-4 text-white/50 max-w-xl mx-auto text-lg">
            Combinamos engenharia de ponta e design estratégico para construir
            soluções digitais que geram resultados reais.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group relative rounded-2xl p-8 glass-card gradient-border glass-noise"
            >
              <div className="mb-6 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[#00D28C]/10 text-[#00D28C] group-hover:bg-[#00D28C]/20 transition-colors">
                <service.icon className="size-6" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-3">
                {service.title}
              </h3>
              <p className="text-sm text-white/50 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
