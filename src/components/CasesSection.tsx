import { getSectionContent } from "@/lib/content";
import { CasesSectionClient } from "./CasesSectionClient";

const defaultItems = [
  {
    client: "FinTech Pro",
    description:
      "Plataforma completa de gestão financeira com dashboard em tempo real, integração bancária e relatórios automatizados.",
    technologies: ["React", "Node.js", "AWS", "PostgreSQL"],
    category: "Plataforma Web",
    gradient: "from-emerald-500/20 via-emerald-500/5 to-transparent",
    iconColor: "#00D28C",
  },
  {
    client: "HealthConnect",
    description:
      "Aplicativo de telemedicina com agendamento inteligente, prontuário eletrônico e integração com wearables.",
    technologies: ["React Native", "Next.js", "MongoDB", "AWS"],
    category: "App Mobile",
    gradient: "from-cyan-500/20 via-cyan-500/5 to-transparent",
    iconColor: "#06B6D4",
  },
  {
    client: "LogiTrack",
    description:
      "Sistema de rastreamento logístico com IoT, otimização de rotas em tempo real e analytics preditivo.",
    technologies: ["TypeScript", "Python", "AWS IoT", "Redis"],
    category: "IoT & Cloud",
    gradient: "from-blue-500/20 via-blue-500/5 to-transparent",
    iconColor: "#3B82F6",
  },
  {
    client: "EduSmart",
    description:
      "Plataforma de educação corporativa com gamificação, trilhas personalizadas e IA adaptativa.",
    technologies: ["Next.js", "Node.js", "OpenAI", "PostgreSQL"],
    category: "EdTech",
    gradient: "from-violet-500/20 via-violet-500/5 to-transparent",
    iconColor: "#8B5CF6",
  },
];

export async function CasesSection() {
  const data = await getSectionContent("cases");

  return (
    <CasesSectionClient
      label={(data.label as string) || "Portfólio"}
      title={(data.title as string) || "Cases de sucesso"}
      subtitle={
        (data.subtitle as string) ||
        "Projetos que desenvolvemos e os resultados que geramos para nossos clientes."
      }
      items={
        (data.items as Array<{
          client: string;
          description: string;
          technologies: string[];
          category: string;
          gradient: string;
          iconColor: string;
        }>) || defaultItems
      }
    />
  );
}
