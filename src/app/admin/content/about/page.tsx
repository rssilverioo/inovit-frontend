import { getSectionContent } from "@/lib/content";
import { AboutEditor } from "@/components/admin/editors/AboutEditor";

export default async function AboutContentPage() {
  const data = await getSectionContent("about");
  return <AboutEditor initialData={data} />;
}
