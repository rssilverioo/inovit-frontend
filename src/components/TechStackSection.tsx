import { getSectionContent } from "@/lib/content";
import { TechStackSectionClient } from "./TechStackSectionClient";

const defaultTechRow1 = ["React", "Next.js", "TypeScript", "Node.js", "Python"];
const defaultTechRow2 = ["AWS", "PostgreSQL", "Docker", "Redis", "MongoDB", "Tailwind CSS"];

export async function TechStackSection() {
  const data = await getSectionContent("tech-stack");

  return (
    <TechStackSectionClient
      label={(data.label as string) || "Stack"}
      title={(data.title as string) || "Tecnologias"}
      subtitle={
        (data.subtitle as string) ||
        "Trabalhamos com as tecnologias mais modernas e robustas do mercado."
      }
      techRow1={(data.techRow1 as string[]) || defaultTechRow1}
      techRow2={(data.techRow2 as string[]) || defaultTechRow2}
    />
  );
}
