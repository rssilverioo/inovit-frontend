import { getSectionContent } from "@/lib/content";
import { TechStackEditor } from "@/components/admin/editors/TechStackEditor";

export default async function TechStackContentPage() {
  const data = await getSectionContent("tech-stack");
  return <TechStackEditor initialData={data} />;
}
