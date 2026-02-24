import { getSectionContent } from "@/lib/content";
import { ProcessSectionClient } from "./ProcessSectionClient";

const defaultSteps = [
  {
    icon: "MessageSquare",
    number: "01",
    title: "Discovery",
    description: "Entendemos suas dores, objetivos e contexto de negócio.",
    color: "#00D28C",
  },
  {
    icon: "Pencil",
    number: "02",
    title: "Design & Arquitetura",
    description: "Projetamos UX/UI e definimos a arquitetura técnica ideal.",
    color: "#06B6D4",
  },
  {
    icon: "Code2",
    number: "03",
    title: "Desenvolvimento",
    description: "Construímos com sprints ágeis, entregas contínuas e qualidade.",
    color: "#3B82F6",
  },
  {
    icon: "Rocket",
    number: "04",
    title: "Deploy & Scale",
    description: "Deploy em cloud, monitoramento e otimização contínua.",
    color: "#8B5CF6",
  },
  {
    icon: "CheckCircle2",
    number: "05",
    title: "Suporte & Evolução",
    description: "Suporte 24/7, novas features e evolução constante do produto.",
    color: "#F59E0B",
  },
];

export async function ProcessSection() {
  const data = await getSectionContent("process");

  return (
    <ProcessSectionClient
      label={(data.label as string) || "Processo"}
      title={(data.title as string) || "Como trabalhamos"}
      subtitle={
        (data.subtitle as string) ||
        "Um processo claro e transparente do discovery ao deploy."
      }
      steps={
        (data.steps as Array<{
          icon: string;
          number: string;
          title: string;
          description: string;
          color: string;
        }>) || defaultSteps
      }
    />
  );
}
