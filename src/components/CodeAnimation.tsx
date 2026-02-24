"use client";

import { motion } from "framer-motion";

const codeLines = [
  { delay: 0.5, content: <><span className="code-comment">{"// inovit.digital"}</span></> },
  { delay: 1.0, content: <><span className="code-keyword">import</span> <span className="code-bracket">{"{"}</span> <span className="code-variable">createApp</span> <span className="code-bracket">{"}"}</span> <span className="code-keyword">from</span> <span className="code-string">&apos;@inovit/core&apos;</span></> },
  { delay: 1.5, content: <></> },
  { delay: 2.0, content: <><span className="code-keyword">const</span> <span className="code-variable">app</span> = <span className="code-function">createApp</span><span className="code-bracket">({"{"}</span></> },
  { delay: 2.4, content: <>&nbsp;&nbsp;<span className="code-property">name</span>: <span className="code-string">&apos;Seu Próximo Projeto&apos;</span>,</> },
  { delay: 2.8, content: <>&nbsp;&nbsp;<span className="code-property">stack</span>: [<span className="code-string">&apos;React&apos;</span>, <span className="code-string">&apos;Node.js&apos;</span>, <span className="code-string">&apos;AWS&apos;</span>],</> },
  { delay: 3.2, content: <>&nbsp;&nbsp;<span className="code-property">performance</span>: <span className="code-string">&apos;optimized&apos;</span>,</> },
  { delay: 3.6, content: <>&nbsp;&nbsp;<span className="code-property">scale</span>: <span className="code-string">&apos;enterprise&apos;</span></> },
  { delay: 4.0, content: <><span className="code-bracket">{"}"})</span></> },
  { delay: 4.4, content: <></> },
  { delay: 4.8, content: <><span className="code-keyword">await</span> app.<span className="code-function">deploy</span>() <span className="code-comment">{"// 🚀 Live!"}</span></> },
];

const floatingBadges = [
  { label: "React 19", x: -40, y: 60, delay: 1.5, color: "#61DAFB" },
  { label: "TypeScript", x: -30, y: 180, delay: 2.0, color: "#3178C6" },
  { label: "AWS", x: -20, y: 300, delay: 2.5, color: "#FF9900" },
  { label: "99.9% uptime", x: "calc(100% + 10px)", y: 80, delay: 3.0, color: "#00D28C" },
  { label: "< 100ms", x: "calc(100% + 20px)", y: 200, delay: 3.5, color: "#06B6D4" },
];

export function CodeAnimation() {
  return (
    <div className="relative w-full max-w-lg mx-auto lg:mx-0">
      {/* Floating badges */}
      {floatingBadges.map((badge, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: badge.delay, duration: 0.5, ease: [0.16, 1, 0.3, 1] as const }}
          className="absolute hidden lg:flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-medium whitespace-nowrap z-10"
          style={{
            left: typeof badge.x === "number" ? badge.x : badge.x,
            top: badge.y,
            background: `${badge.color}12`,
            border: `1px solid ${badge.color}25`,
            color: badge.color,
          }}
        >
          <span className="w-1.5 h-1.5 rounded-full" style={{ background: badge.color }} />
          {badge.label}
        </motion.div>
      ))}

      {/* Code editor window */}
      <motion.div
        initial={{ opacity: 0, y: 30, rotateX: 5 }}
        animate={{ opacity: 1, y: 0, rotateX: 0 }}
        transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] as const }}
        className="code-editor relative"
      >
        {/* Title bar */}
        <div className="flex items-center gap-2 px-4 py-3 border-b border-white/[0.06]">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
            <div className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
            <div className="w-3 h-3 rounded-full bg-[#28C840]" />
          </div>
          <div className="flex-1 text-center">
            <span className="text-[11px] text-white/25 font-mono">app.config.ts</span>
          </div>
          <div className="w-12" />
        </div>

        {/* Line numbers + code */}
        <div className="p-5 font-mono text-[13px] leading-[1.8] min-h-[340px]">
          {codeLines.map((line, i) => (
            <div
              key={i}
              className="code-line flex"
              style={{ animationDelay: `${line.delay}s` }}
            >
              <span className="w-8 text-right mr-4 text-white/15 select-none text-[12px]">
                {i + 1}
              </span>
              <span className="flex-1">
                {line.content}
                {i === codeLines.length - 1 && <span className="cursor-blink" />}
              </span>
            </div>
          ))}
        </div>

        {/* Status bar */}
        <div className="flex items-center justify-between px-4 py-2 border-t border-white/[0.06] text-[10px] text-white/20">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-[#28C840]" />
              Conectado
            </span>
            <span>TypeScript</span>
          </div>
          <div className="flex items-center gap-3">
            <span>UTF-8</span>
            <span>Ln 11, Col 24</span>
          </div>
        </div>

        {/* Glow effect */}
        <div className="absolute -inset-1 rounded-xl bg-gradient-to-b from-[#00D28C]/5 via-transparent to-[#06B6D4]/5 -z-10 blur-xl" />
      </motion.div>
    </div>
  );
}
