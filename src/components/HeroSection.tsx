import { getSectionContent } from "@/lib/content";
import { HeroSectionClient } from "./HeroSectionClient";

const defaultMetrics = [
  { value: "50+", label: "Projetos" },
  { value: "99%", label: "Satisfação" },
  { value: "24/7", label: "Suporte" },
];

export async function HeroSection() {
  const data = await getSectionContent("hero");

  return (
    <HeroSectionClient
      badge={(data.badge as string) || "Engenharia de Software & Inovação"}
      headline={(data.headline as string) || "Construímos tecnologia que transforma negócios"}
      subtitle={
        (data.subtitle as string) ||
        "Da estratégia ao deploy. Criamos produtos digitais escaláveis com engenharia de alto nível e design centrado no usuário."
      }
      ctaPrimary={(data.ctaPrimary as string) || "Iniciar Projeto"}
      ctaSecondary={(data.ctaSecondary as string) || "Ver como funciona"}
      metrics={(data.metrics as Array<{ value: string; label: string }>) || defaultMetrics}
    />
  );
}
