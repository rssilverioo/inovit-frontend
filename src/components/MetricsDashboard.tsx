import { getSectionContent } from "@/lib/content";
import { MetricsDashboardClient } from "./MetricsDashboardClient";

const defaultItems = [
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
];

export async function MetricsDashboard() {
  const data = await getSectionContent("metrics");

  return (
    <MetricsDashboardClient
      label={(data.label as string) || "Performance"}
      title={(data.title as string) || "Infraestrutura de alta performance"}
      subtitle={
        (data.subtitle as string) ||
        "Monitoramos e otimizamos cada aspecto da sua aplicação. Performance, segurança e disponibilidade são prioridade."
      }
      items={
        (data.items as Array<{
          icon: string;
          label: string;
          value: string;
          detail: string;
          trend: string;
          color: string;
          barWidth: string;
        }>) || defaultItems
      }
    />
  );
}
