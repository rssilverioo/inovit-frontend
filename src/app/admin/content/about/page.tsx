import { AboutEditor } from "@/components/admin/editors/AboutEditor";
import { getSectionContent } from "@/lib/content";

export default async function AboutContentPage() {
  const data = await getSectionContent("about");
  return <AboutEditor initialData={data} />;
}
// tste
