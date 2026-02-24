import { getSectionContent } from "@/lib/content";
import { AboutSectionClient } from "./AboutSectionClient";

const defaultStats = [
  { number: "50+", label: "Projetos entregues", color: "#00D28C" },
  { number: "30+", label: "Clientes ativos", color: "#06B6D4" },
  { number: "99%", label: "Satisfação", color: "#8B5CF6" },
  { number: "24/7", label: "Suporte técnico", color: "#F59E0B" },
];

export async function AboutSection() {
  const data = await getSectionContent("about");

  return (
    <AboutSectionClient
      label={(data.label as string) || "Sobre nós"}
      title={(data.title as string) || "Quem é a Inovit Digital"}
      paragraph1={
        (data.paragraph1 as string) ||
        "A Inovit Digital nasceu com o propósito de desenvolver soluções tecnológicas inteligentes que impulsionam negócios. Unimos estratégia, design e engenharia para construir produtos digitais escaláveis e inovadores."
      }
      paragraph2={
        (data.paragraph2 as string) ||
        "Acreditamos que a tecnologia é o principal motor de transformação das empresas. Por isso, trabalhamos lado a lado com nossos clientes, entendendo suas dores e construindo soluções que geram resultados reais e mensuráveis."
      }
      quote={
        (data.quote as string) ||
        "Tecnologia é o principal motor de transformação. Cada linha de código que escrevemos é pensada para gerar impacto."
      }
      stats={
        (data.stats as Array<{ number: string; label: string; color: string }>) || defaultStats
      }
    />
  );
}
