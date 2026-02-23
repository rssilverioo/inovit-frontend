"use client";

import Image from "next/image";
import { Linkedin, Instagram, Github } from "lucide-react";

const footerLinks = {
  institucional: [
    { label: "Sobre", href: "#sobre" },
    { label: "Cases", href: "#cases" },
    { label: "Tecnologia", href: "#tecnologia" },
    { label: "Carreiras", href: "#" },
  ],
  servicos: [
    { label: "Desenvolvimento de Software", href: "#solucoes" },
    { label: "Arquitetura e Cloud", href: "#solucoes" },
    { label: "UX/UI Design", href: "#solucoes" },
    { label: "Transformação Digital", href: "#solucoes" },
  ],
  contato: [
    { label: "contato@inovit.digital", href: "mailto:contato@inovit.digital" },
    { label: "São Paulo, SP - Brasil", href: "#" },
  ],
};

const socialLinks = [
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Github, href: "#", label: "GitHub" },
];

export function Footer() {
  return (
    <footer className="relative border-t border-white/[0.04] bg-black/80 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <a href="#">
              <Image
                src="/logo.png"
                alt="Inovit Digital"
                width={140}
                height={36}
              />
            </a>
            <p className="mt-4 text-sm text-white/40 leading-relaxed max-w-xs">
              Tecnologia, design e inovação para acelerar empresas e construir
              soluções digitais de alto impacto.
            </p>
            {/* Social Links */}
            <div className="mt-6 flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="flex items-center justify-center w-9 h-9 rounded-lg glass-subtle text-white/40 hover:text-[#00D28C] hover:border-[#00D28C]/20 transition-all duration-300"
                >
                  <social.icon className="size-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Institucional */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">
              Institucional
            </h4>
            <ul className="space-y-3">
              {footerLinks.institucional.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-white/40 hover:text-[#00D28C] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Serviços */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">
              Serviços
            </h4>
            <ul className="space-y-3">
              {footerLinks.servicos.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-white/40 hover:text-[#00D28C] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">
              Contato
            </h4>
            <ul className="space-y-3">
              {footerLinks.contato.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-white/40 hover:text-[#00D28C] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/30">
            &copy; {new Date().getFullYear()} Inovit Digital. Todos os direitos
            reservados.
          </p>
          <p className="text-xs text-white/20">
            CNPJ: 00.000.000/0001-00
          </p>
        </div>
      </div>
    </footer>
  );
}
