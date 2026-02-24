import { getSectionContent } from "@/lib/content";
import { FooterClient } from "./FooterClient";

const defaultSocialLinks = [
  { icon: "Linkedin", href: "#", label: "LinkedIn" },
  { icon: "Instagram", href: "#", label: "Instagram" },
  { icon: "Github", href: "#", label: "GitHub" },
];

const defaultInstitucional = [
  { label: "Sobre", href: "#sobre" },
  { label: "Cases", href: "#cases" },
  { label: "Tecnologia", href: "#tecnologia" },
  { label: "Carreiras", href: "#" },
];

const defaultServicos = [
  { label: "Desenvolvimento de Software", href: "#solucoes" },
  { label: "Arquitetura e Cloud", href: "#solucoes" },
  { label: "UX/UI Design", href: "#solucoes" },
  { label: "Transformação Digital", href: "#solucoes" },
];

const defaultContato = [
  { label: "contato@inovit.digital", href: "mailto:contato@inovit.digital" },
  { label: "São Paulo, SP - Brasil", href: "#" },
];

export async function Footer() {
  const data = await getSectionContent("footer");

  return (
    <FooterClient
      brandDescription={
        (data.brandDescription as string) ||
        "Tecnologia, design e inovação para acelerar empresas e construir soluções digitais de alto impacto."
      }
      socialLinks={
        (data.socialLinks as Array<{ icon: string; href: string; label: string }>) ||
        defaultSocialLinks
      }
      institucional={
        (data.institucional as Array<{ label: string; href: string }>) || defaultInstitucional
      }
      servicos={
        (data.servicos as Array<{ label: string; href: string }>) || defaultServicos
      }
      contato={
        (data.contato as Array<{ label: string; href: string }>) || defaultContato
      }
      cnpj={(data.cnpj as string) || "CNPJ: 00.000.000/0001-00"}
    />
  );
}
