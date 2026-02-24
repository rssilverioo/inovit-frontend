import { getSectionContent } from "@/lib/content";
import { ServicesSectionClient } from "./ServicesSectionClient";

const defaultItems = [
  {
    icon: "Code2",
    number: "01",
    title: "Desenvolvimento de Software",
    description:
      "Aplicações web, mobile e plataformas sob medida com código limpo, escalável e de alta performance. Do MVP ao produto enterprise.",
    color: "#00D28C",
  },
  {
    icon: "Cloud",
    number: "02",
    title: "Arquitetura e Cloud",
    description:
      "Soluções escaláveis em AWS e cloud-native. Infraestrutura resiliente e otimizada para o seu negócio.",
    color: "#06B6D4",
  },
  {
    icon: "Palette",
    number: "03",
    title: "UX/UI Design",
    description:
      "Experiências digitais centradas no usuário. Design que encanta, converte e fideliza.",
    color: "#8B5CF6",
  },
  {
    icon: "Rocket",
    number: "04",
    title: "Transformação Digital",
    description:
      "Modernização de sistemas e inovação corporativa. Aceleramos sua jornada digital com estratégia.",
    color: "#F59E0B",
  },
];

export async function ServicesSection() {
  const data = await getSectionContent("services");

  return (
    <ServicesSectionClient
      label={(data.label as string) || "Soluções"}
      title={(data.title as string) || "O que fazemos"}
      subtitle={
        (data.subtitle as string) ||
        "Combinamos engenharia de ponta e design estratégico para construir soluções digitais que geram resultados reais."
      }
      items={
        (data.items as Array<{
          icon: string;
          number: string;
          title: string;
          description: string;
          color: string;
        }>) || defaultItems
      }
    />
  );
}
