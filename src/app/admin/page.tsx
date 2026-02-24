export const dynamic = "force-dynamic";

import Link from "next/link";
import {
  Sparkles,
  Briefcase,
  GitBranch,
  FolderOpen,
  Shield,
  Cpu,
  BarChart3,
  Users,
  Megaphone,
  FileText,
  Building2,
  ArrowRight,
} from "lucide-react";

const sections = [
  { label: "Hero", href: "/admin/content/hero", icon: Sparkles, description: "Título, subtítulo e métricas do hero" },
  { label: "Serviços", href: "/admin/content/services", icon: Briefcase, description: "Cards de serviços oferecidos" },
  { label: "Processo", href: "/admin/content/process", icon: GitBranch, description: "Etapas do processo de trabalho" },
  { label: "Cases", href: "/admin/content/cases", icon: FolderOpen, description: "Cases de sucesso e portfólio" },
  { label: "Diferenciais", href: "/admin/content/differentials", icon: Shield, description: "Diferenciais da empresa" },
  { label: "Tech Stack", href: "/admin/content/tech-stack", icon: Cpu, description: "Tecnologias utilizadas" },
  { label: "Métricas", href: "/admin/content/metrics", icon: BarChart3, description: "Métricas de performance" },
  { label: "Sobre", href: "/admin/content/about", icon: Users, description: "Sobre a empresa e estatísticas" },
  { label: "CTA", href: "/admin/content/cta", icon: Megaphone, description: "Call-to-action e contato" },
  { label: "Footer", href: "/admin/content/footer", icon: FileText, description: "Links e informações do footer" },
  { label: "Logo Cloud", href: "/admin/content/logo-cloud", icon: Building2, description: "Logos de empresas parceiras" },
];

export default function AdminDashboard() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-[#0A0A0A] tracking-tight">
          Dashboard
        </h1>
        <p className="text-sm text-[#0A0A0A]/40 mt-1">
          Gerencie o conteúdo do site Inovit Digital
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {sections.map((section) => (
          <Link
            key={section.href}
            href={section.href}
            className="group bg-white rounded-xl border border-black/[0.06] p-5 hover:border-[#00D28C]/20 hover:shadow-sm transition-all"
          >
            <div className="flex items-center justify-between mb-3">
              <div className="w-9 h-9 rounded-lg bg-[#00D28C]/8 text-[#00D28C] flex items-center justify-center">
                <section.icon className="size-4" />
              </div>
              <ArrowRight className="size-4 text-[#0A0A0A]/15 group-hover:text-[#00D28C] transition-colors" />
            </div>
            <h3 className="font-semibold text-[#0A0A0A] text-sm">
              {section.label}
            </h3>
            <p className="text-xs text-[#0A0A0A]/35 mt-1">
              {section.description}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
