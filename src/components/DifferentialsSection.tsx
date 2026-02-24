import { getSectionContent } from "@/lib/content";
import { DifferentialsSectionClient } from "./DifferentialsSectionClient";

const defaultItems = [
  {
    icon: "Cpu",
    number: "01",
    title: "Engenharia de alto nível",
    description:
      "Código limpo, arquiteturas robustas e boas práticas que garantem qualidade e longevidade.",
  },
  {
    icon: "Users",
    number: "02",
    title: "Times ágeis",
    description:
      "Squads multidisciplinares com processos ágeis, comunicação transparente e entregas contínuas.",
  },
  {
    icon: "Gauge",
    number: "03",
    title: "Foco em performance",
    description:
      "Otimização constante para garantir velocidade, escalabilidade e a melhor experiência.",
  },
  {
    icon: "ShieldCheck",
    number: "04",
    title: "Segurança enterprise",
    description:
      "Infraestrutura cloud-native com práticas de segurança enterprise. Dados protegidos.",
  },
  {
    icon: "Target",
    number: "05",
    title: "Orientação a resultados",
    description:
      "Métricas claras, KPIs definidos e acompanhamento contínuo. Impacto mensurável.",
  },
];

export async function DifferentialsSection() {
  const data = await getSectionContent("differentials");

  return (
    <DifferentialsSectionClient
      label={(data.label as string) || "Diferenciais"}
      title={(data.title as string) || "Por que a Inovit?"}
      subtitle={
        (data.subtitle as string) ||
        "Nossos diferenciais garantem entregas consistentes e resultados mensuráveis."
      }
      items={
        (data.items as Array<{
          icon: string;
          number: string;
          title: string;
          description: string;
        }>) || defaultItems
      }
    />
  );
}
