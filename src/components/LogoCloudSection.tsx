import { getSectionContent } from "@/lib/content";
import { LogoCloudSectionClient } from "./LogoCloudSectionClient";

const defaultLogos = [
  "Startup Alpha",
  "TechCorp",
  "FinGroup",
  "HealthTech",
  "LogiSystems",
  "EduPlatform",
];

export async function LogoCloudSection() {
  const data = await getSectionContent("logo-cloud");

  return (
    <LogoCloudSectionClient
      title={(data.title as string) || "Empresas que confiam na Inovit"}
      logos={(data.logos as string[]) || defaultLogos}
    />
  );
}
