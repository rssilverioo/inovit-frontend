"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CtaSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contato" className="relative py-32 bg-black scroll-mt-20" ref={ref}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-3xl glass-cta px-8 py-20 md:px-16 md:py-28"
        >
          {/* Background glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#00D28C]/5 blur-[150px]" />

          <div className="relative text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight max-w-3xl mx-auto">
              Vamos construir o próximo grande{" "}
              <span className="text-gradient">produto digital</span>{" "}
              juntos?
            </h2>
            <p className="mt-6 text-white/50 text-lg max-w-xl mx-auto">
              Entre em contato e descubra como podemos transformar sua ideia em
              uma solução digital de alto impacto.
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-10"
            >
              <Button
                asChild
                size="lg"
                className="bg-[#00D28C] text-black hover:bg-[#00D28C]/90 font-semibold rounded-full px-10 h-14 text-base"
              >
                <a href="mailto:contato@inovit.digital">
                  Iniciar Projeto
                  <ArrowRight className="ml-2 size-5" />
                </a>
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
