import { getSectionContent } from "@/lib/content";
import { MetricsEditor } from "@/components/admin/editors/MetricsEditor";

export default async function MetricsContentPage() {
  const data = await getSectionContent("metrics");
  return <MetricsEditor initialData={data} />;
}
