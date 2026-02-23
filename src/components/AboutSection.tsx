"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
  { number: "50+", label: "Projetos entregues" },
  { number: "30+", label: "Clientes ativos" },
  { number: "99%", label: "Satisfação" },
  { number: "24/7", label: "Suporte técnico" },
];

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="sobre"
      className="relative py-32 bg-black scroll-mt-20"
      ref={ref}
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#00D28C]/[0.02] to-transparent" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <span className="text-sm font-medium text-[#00D28C] tracking-widest uppercase">
              Sobre nós
            </span>
            <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
              Quem é a{" "}
              <span className="text-gradient">Inovit Digital</span>
            </h2>
            <p className="mt-6 text-white/50 leading-relaxed text-lg">
              A Inovit Digital nasceu com o propósito de desenvolver soluções
              tecnológicas inteligentes que impulsionam negócios. Unimos
              estratégia, design e engenharia para construir produtos digitais
              escaláveis e inovadores.
            </p>
            <p className="mt-4 text-white/40 leading-relaxed">
              Acreditamos que a tecnologia é o principal motor de transformação
              das empresas. Por isso, trabalhamos lado a lado com nossos
              clientes, entendendo suas dores e construindo soluções que geram
              resultados reais e mensuráveis.
            </p>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className="rounded-2xl p-8 text-center glass-card"
              >
                <div className="text-3xl lg:text-4xl font-bold text-[#00D28C]">
                  {stat.number}
                </div>
                <div className="mt-2 text-sm text-white/50">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
