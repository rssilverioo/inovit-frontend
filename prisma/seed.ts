import "dotenv/config";
import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import bcrypt from "bcryptjs";

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL! });
const prisma = new PrismaClient({ adapter });

async function main() {
  console.log("🌱 Seeding database...");

  // ─── 1. Create admin user ───
  const email = process.env.ADMIN_EMAIL || "admin@inovitdigital.com.br";
  const password = process.env.ADMIN_PASSWORD || "InovitAdmin@2026";
  const hashedPassword = await bcrypt.hash(password, 12);

  const admin = await prisma.user.upsert({
    where: { email },
    update: { password: hashedPassword },
    create: {
      email,
      name: "Admin",
      password: hashedPassword,
      role: "admin",
    },
  });
  console.log(`✅ Admin user: ${admin.email}`);

  // ─── 2. Seed site content ───
  const content: { section: string; key: string; value: unknown }[] = [
    // ── Hero ──
    {
      section: "hero",
      key: "badge",
      value: "Engenharia de Software & Inovação",
    },
    {
      section: "hero",
      key: "headline",
      value: "Construímos tecnologia que transforma negócios",
    },
    {
      section: "hero",
      key: "subtitle",
      value:
        "Da estratégia ao deploy. Criamos produtos digitais escaláveis com engenharia de alto nível e design centrado no usuário.",
    },
    {
      section: "hero",
      key: "ctaPrimary",
      value: "Iniciar Projeto",
    },
    {
      section: "hero",
      key: "ctaSecondary",
      value: "Ver como funciona",
    },
    {
      section: "hero",
      key: "metrics",
      value: [
        { value: "50+", label: "Projetos" },
        { value: "99%", label: "Satisfação" },
        { value: "24/7", label: "Suporte" },
      ],
    },

    // ── Services ──
    {
      section: "services",
      key: "label",
      value: "Soluções",
    },
    {
      section: "services",
      key: "title",
      value: "O que fazemos",
    },
    {
      section: "services",
      key: "subtitle",
      value:
        "Combinamos engenharia de ponta e design estratégico para construir soluções digitais que geram resultados reais.",
    },
    {
      section: "services",
      key: "items",
      value: [
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
      ],
    },

    // ── Process ──
    {
      section: "process",
      key: "label",
      value: "Processo",
    },
    {
      section: "process",
      key: "title",
      value: "Como trabalhamos",
    },
    {
      section: "process",
      key: "subtitle",
      value: "Um processo claro e transparente do discovery ao deploy.",
    },
    {
      section: "process",
      key: "steps",
      value: [
        {
          icon: "MessageSquare",
          number: "01",
          title: "Discovery",
          description:
            "Entendemos suas dores, objetivos e contexto de negócio.",
          color: "#00D28C",
        },
        {
          icon: "Pencil",
          number: "02",
          title: "Design & Arquitetura",
          description:
            "Projetamos UX/UI e definimos a arquitetura técnica ideal.",
          color: "#06B6D4",
        },
        {
          icon: "Code2",
          number: "03",
          title: "Desenvolvimento",
          description:
            "Construímos com sprints ágeis, entregas contínuas e qualidade.",
          color: "#3B82F6",
        },
        {
          icon: "Rocket",
          number: "04",
          title: "Deploy & Scale",
          description:
            "Deploy em cloud, monitoramento e otimização contínua.",
          color: "#8B5CF6",
        },
        {
          icon: "CheckCircle2",
          number: "05",
          title: "Suporte & Evolução",
          description:
            "Suporte 24/7, novas features e evolução constante do produto.",
          color: "#F59E0B",
        },
      ],
    },

    // ── Cases ──
    {
      section: "cases",
      key: "label",
      value: "Portfólio",
    },
    {
      section: "cases",
      key: "title",
      value: "Cases de sucesso",
    },
    {
      section: "cases",
      key: "subtitle",
      value:
        "Projetos que desenvolvemos e os resultados que geramos para nossos clientes.",
    },
    {
      section: "cases",
      key: "items",
      value: [
        {
          client: "FinTech Pro",
          description:
            "Plataforma completa de gestão financeira com dashboard em tempo real, integração bancária e relatórios automatizados.",
          technologies: ["React", "Node.js", "AWS", "PostgreSQL"],
          category: "Plataforma Web",
          gradient: "from-emerald-500/20 via-emerald-500/5 to-transparent",
          iconColor: "#00D28C",
        },
        {
          client: "HealthConnect",
          description:
            "Aplicativo de telemedicina com agendamento inteligente, prontuário eletrônico e integração com wearables.",
          technologies: ["React Native", "Next.js", "MongoDB", "AWS"],
          category: "App Mobile",
          gradient: "from-cyan-500/20 via-cyan-500/5 to-transparent",
          iconColor: "#06B6D4",
        },
        {
          client: "LogiTrack",
          description:
            "Sistema de rastreamento logístico com IoT, otimização de rotas em tempo real e analytics preditivo.",
          technologies: ["TypeScript", "Python", "AWS IoT", "Redis"],
          category: "IoT & Cloud",
          gradient: "from-blue-500/20 via-blue-500/5 to-transparent",
          iconColor: "#3B82F6",
        },
        {
          client: "EduSmart",
          description:
            "Plataforma de educação corporativa com gamificação, trilhas personalizadas e IA adaptativa.",
          technologies: ["Next.js", "Node.js", "OpenAI", "PostgreSQL"],
          category: "EdTech",
          gradient: "from-violet-500/20 via-violet-500/5 to-transparent",
          iconColor: "#8B5CF6",
        },
      ],
    },

    // ── Differentials ──
    {
      section: "differentials",
      key: "label",
      value: "Diferenciais",
    },
    {
      section: "differentials",
      key: "title",
      value: "Por que a Inovit?",
    },
    {
      section: "differentials",
      key: "subtitle",
      value:
        "Nossos diferenciais garantem entregas consistentes e resultados mensuráveis.",
    },
    {
      section: "differentials",
      key: "items",
      value: [
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
      ],
    },

    // ── Tech Stack ──
    {
      section: "tech-stack",
      key: "label",
      value: "Stack",
    },
    {
      section: "tech-stack",
      key: "title",
      value: "Tecnologias",
    },
    {
      section: "tech-stack",
      key: "subtitle",
      value:
        "Trabalhamos com as tecnologias mais modernas e robustas do mercado.",
    },
    {
      section: "tech-stack",
      key: "techRow1",
      value: ["React", "Next.js", "TypeScript", "Node.js", "Python"],
    },
    {
      section: "tech-stack",
      key: "techRow2",
      value: [
        "AWS",
        "PostgreSQL",
        "Docker",
        "Redis",
        "MongoDB",
        "Tailwind CSS",
      ],
    },

    // ── Metrics ──
    {
      section: "metrics",
      key: "label",
      value: "Performance",
    },
    {
      section: "metrics",
      key: "title",
      value: "Infraestrutura de alta performance",
    },
    {
      section: "metrics",
      key: "subtitle",
      value:
        "Monitoramos e otimizamos cada aspecto da sua aplicação. Performance, segurança e disponibilidade são prioridade.",
    },
    {
      section: "metrics",
      key: "items",
      value: [
        {
          icon: "Zap",
          label: "Tempo de resposta",
          value: "< 100ms",
          detail: "P95 latency",
          trend: "-23%",
          color: "#00D28C",
          barWidth: "92%",
        },
        {
          icon: "TrendingUp",
          label: "Uptime garantido",
          value: "99.99%",
          detail: "SLA enterprise",
          trend: "+0.02%",
          color: "#06B6D4",
          barWidth: "99%",
        },
        {
          icon: "Shield",
          label: "Score de segurança",
          value: "A+",
          detail: "SSL Labs rating",
          trend: "Stable",
          color: "#8B5CF6",
          barWidth: "98%",
        },
        {
          icon: "Globe",
          label: "CDN global",
          value: "42",
          detail: "Edge locations",
          trend: "+8",
          color: "#F59E0B",
          barWidth: "85%",
        },
      ],
    },

    // ── About ──
    {
      section: "about",
      key: "label",
      value: "Sobre nós",
    },
    {
      section: "about",
      key: "title",
      value: "Quem é a Inovit Digital",
    },
    {
      section: "about",
      key: "paragraph1",
      value:
        "A Inovit Digital nasceu com o propósito de desenvolver soluções tecnológicas inteligentes que impulsionam negócios. Unimos estratégia, design e engenharia para construir produtos digitais escaláveis e inovadores.",
    },
    {
      section: "about",
      key: "paragraph2",
      value:
        "Acreditamos que a tecnologia é o principal motor de transformação das empresas. Por isso, trabalhamos lado a lado com nossos clientes, entendendo suas dores e construindo soluções que geram resultados reais e mensuráveis.",
    },
    {
      section: "about",
      key: "quote",
      value:
        "Tecnologia é o principal motor de transformação. Cada linha de código que escrevemos é pensada para gerar impacto.",
    },
    {
      section: "about",
      key: "stats",
      value: [
        { number: "50+", label: "Projetos entregues", color: "#00D28C" },
        { number: "30+", label: "Clientes ativos", color: "#06B6D4" },
        { number: "99%", label: "Satisfação", color: "#8B5CF6" },
        { number: "24/7", label: "Suporte técnico", color: "#F59E0B" },
      ],
    },

    // ── CTA ──
    {
      section: "cta",
      key: "label",
      value: "Comece agora",
    },
    {
      section: "cta",
      key: "title",
      value: "Vamos construir o próximo grande produto digital juntos?",
    },
    {
      section: "cta",
      key: "subtitle",
      value:
        "Entre em contato e descubra como podemos transformar sua ideia em uma solução digital de alto impacto.",
    },
    {
      section: "cta",
      key: "ctaText",
      value: "Iniciar Projeto",
    },
    {
      section: "cta",
      key: "email",
      value: "contato@inovit.digital",
    },

    // ── Footer ──
    {
      section: "footer",
      key: "brandDescription",
      value:
        "Tecnologia, design e inovação para acelerar empresas e construir soluções digitais de alto impacto.",
    },
    {
      section: "footer",
      key: "socialLinks",
      value: [
        { icon: "Linkedin", href: "#", label: "LinkedIn" },
        { icon: "Instagram", href: "#", label: "Instagram" },
        { icon: "Github", href: "#", label: "GitHub" },
      ],
    },
    {
      section: "footer",
      key: "institucional",
      value: [
        { label: "Sobre", href: "#sobre" },
        { label: "Cases", href: "#cases" },
        { label: "Tecnologia", href: "#tecnologia" },
        { label: "Carreiras", href: "#" },
      ],
    },
    {
      section: "footer",
      key: "servicos",
      value: [
        { label: "Desenvolvimento de Software", href: "#solucoes" },
        { label: "Arquitetura e Cloud", href: "#solucoes" },
        { label: "UX/UI Design", href: "#solucoes" },
        { label: "Transformação Digital", href: "#solucoes" },
      ],
    },
    {
      section: "footer",
      key: "contato",
      value: [
        {
          label: "contato@inovit.digital",
          href: "mailto:contato@inovit.digital",
        },
        { label: "São Paulo, SP - Brasil", href: "#" },
      ],
    },
    {
      section: "footer",
      key: "cnpj",
      value: "CNPJ: 00.000.000/0001-00",
    },

    // ── Logo Cloud ──
    {
      section: "logo-cloud",
      key: "title",
      value: "Empresas que confiam na Inovit",
    },
    {
      section: "logo-cloud",
      key: "logos",
      value: [
        "Startup Alpha",
        "TechCorp",
        "FinGroup",
        "HealthTech",
        "LogiSystems",
        "EduPlatform",
      ],
    },
  ];

  // Upsert all content rows
  for (const row of content) {
    await prisma.siteContent.upsert({
      where: {
        section_key: { section: row.section, key: row.key },
      },
      update: { value: row.value as object },
      create: {
        section: row.section,
        key: row.key,
        value: row.value as object,
      },
    });
  }

  console.log(`✅ Seeded ${content.length} content rows across ${new Set(content.map((r) => r.section)).size} sections`);
  console.log("🎉 Seed complete!");
}

main()
  .catch((e) => {
    console.error("❌ Seed failed:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
