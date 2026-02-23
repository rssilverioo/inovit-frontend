"use client";

import { motion } from "framer-motion";
import { ArrowRight, FolderOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Grid Pattern Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-50" />

      {/* Gradient Orbs */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full bg-[#00D28C]/10 blur-[120px]"
      />
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-cyan-500/10 blur-[120px]"
      />

      {/* Floating Geometric Elements */}
      <motion.div
        animate={{ y: [-20, 20, -20], rotate: [0, 90, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[20%] right-[15%] w-16 h-16 rounded-lg hidden lg:block glass-subtle"
      />
      <motion.div
        animate={{ y: [15, -15, 15], rotate: [0, -60, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[30%] left-[10%] w-12 h-12 rounded-full hidden lg:block glass-subtle"
      />
      <motion.div
        animate={{ y: [-10, 25, -10] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[40%] left-[20%] w-3 h-3 bg-[#00D28C]/30 rounded-full hidden lg:block"
      />
      <motion.div
        animate={{ y: [20, -15, 20] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[20%] right-[25%] w-4 h-4 bg-cyan-500/20 rounded-full hidden lg:block"
      />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6"
        >
          <span className="inline-flex items-center gap-2 rounded-full glass-badge px-4 py-1.5 text-sm text-[#00D28C]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#00D28C] animate-pulse" />
            Engenharia de Software & Inovação Digital
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1] max-w-5xl mx-auto"
        >
          Transformamos ideias em{" "}
          <span className="text-gradient">produtos digitais</span>{" "}
          escaláveis.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-8 text-lg md:text-xl text-white/60 max-w-2xl mx-auto leading-relaxed"
        >
          Criamos tecnologia, design e inovação para acelerar empresas e
          construir soluções digitais de alto impacto.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button
            asChild
            size="lg"
            className="bg-[#00D28C] text-black hover:bg-[#00D28C]/90 font-semibold rounded-full px-8 h-12 text-base"
          >
            <a href="#contato">
              Fale com um especialista
              <ArrowRight className="ml-2 size-4" />
            </a>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="rounded-full px-8 h-12 text-base border-white/10 text-white backdrop-blur-md bg-white/[0.03] hover:bg-white/[0.06] hover:text-white hover:border-white/20"
          >
            <a href="#cases">
              <FolderOpen className="mr-2 size-4" />
              Ver cases
            </a>
          </Button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 rounded-full flex items-start justify-center p-1.5 glass-subtle"
          >
            <div className="w-1 h-2 rounded-full bg-[#00D28C]" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
