import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { LogoCloudSection } from "@/components/LogoCloudSection";
import { ServicesSection } from "@/components/ServicesSection";
import { ProcessSection } from "@/components/ProcessSection";
import { CasesSection } from "@/components/CasesSection";
import { TechStackSection } from "@/components/TechStackSection";
import { MetricsDashboard } from "@/components/MetricsDashboard";
import { DifferentialsSection } from "@/components/DifferentialsSection";
import { AboutSection } from "@/components/AboutSection";
import { CtaSection } from "@/components/CtaSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <LogoCloudSection />
        <ServicesSection />
        <ProcessSection />
        <CasesSection />
        <TechStackSection />
        <MetricsDashboard />
        <DifferentialsSection />
        <AboutSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
