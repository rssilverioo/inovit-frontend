import { getSectionContent } from "@/lib/content";
import { CtaSectionClient } from "./CtaSectionClient";

export async function CtaSection() {
  const data = await getSectionContent("cta");

  return (
    <CtaSectionClient
      label={(data.label as string) || "Comece agora"}
      title={
        (data.title as string) ||
        "Vamos construir o próximo grande produto digital juntos?"
      }
      subtitle={
        (data.subtitle as string) ||
        "Entre em contato e descubra como podemos transformar sua ideia em uma solução digital de alto impacto."
      }
      ctaText={(data.ctaText as string) || "Iniciar Projeto"}
      email={(data.email as string) || "contato@inovit.digital"}
    />
  );
}
