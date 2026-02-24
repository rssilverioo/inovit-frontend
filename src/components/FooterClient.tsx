"use client";

import Image from "next/image";
import { Linkedin, Instagram, Github, type LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = { Linkedin, Instagram, Github };

interface SocialLink {
  icon: string;
  href: string;
  label: string;
}

interface FooterLink {
  label: string;
  href: string;
}

interface FooterClientProps {
  brandDescription: string;
  socialLinks: SocialLink[];
  institucional: FooterLink[];
  servicos: FooterLink[];
  contato: FooterLink[];
  cnpj: string;
}

export function FooterClient({
  brandDescription,
  socialLinks,
  institucional,
  servicos,
  contato,
  cnpj,
}: FooterClientProps) {
  return (
    <footer className="relative bg-[#0A0B0D] border-t border-white/[0.04]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-4">
            <a href="#">
              <Image
                src="/logo.png"
                alt="Inovit Digital"
                width={120}
                height={32}
              />
            </a>
            <p className="mt-5 text-sm text-white/30 leading-relaxed max-w-xs font-light">
              {brandDescription}
            </p>
            <div className="mt-6 flex gap-2">
              {socialLinks.map((social) => {
                const Icon = iconMap[social.icon] || Linkedin;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="flex items-center justify-center w-9 h-9 rounded-lg border border-white/[0.06] bg-white/[0.02] text-white/30 hover:text-[#00D28C] hover:border-[#00D28C]/15 transition-all duration-300"
                  >
                    <Icon className="size-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Institucional */}
          <div className="lg:col-span-2 lg:col-start-6">
            <h4 className="text-xs font-medium text-white/50 mb-5 tracking-wider uppercase font-[family-name:var(--font-outfit)]">
              Institucional
            </h4>
            <ul className="space-y-3">
              {institucional.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-white/30 hover:text-white/60 transition-colors duration-300 font-light">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Servicos */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-medium text-white/50 mb-5 tracking-wider uppercase font-[family-name:var(--font-outfit)]">
              Servicos
            </h4>
            <ul className="space-y-3">
              {servicos.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-white/30 hover:text-white/60 transition-colors duration-300 font-light">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contato */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-medium text-white/50 mb-5 tracking-wider uppercase font-[family-name:var(--font-outfit)]">
              Contato
            </h4>
            <ul className="space-y-3">
              {contato.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-white/30 hover:text-white/60 transition-colors duration-300 font-light">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-white/[0.04] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/20 font-light">
            &copy; {new Date().getFullYear()} Inovit Digital. Todos os direitos reservados.
          </p>
          <p className="text-xs text-white/15 font-light">
            {cnpj}
          </p>
        </div>
      </div>
    </footer>
  );
}
