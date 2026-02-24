import { getSectionContent } from "@/lib/content";
import { HeroEditor } from "@/components/admin/editors/HeroEditor";

export default async function HeroContentPage() {
  const data = await getSectionContent("hero");
  return <HeroEditor initialData={data} />;
}
