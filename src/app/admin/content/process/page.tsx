import { getSectionContent } from "@/lib/content";
import { ProcessEditor } from "@/components/admin/editors/ProcessEditor";

export default async function ProcessContentPage() {
  const data = await getSectionContent("process");
  return <ProcessEditor initialData={data} />;
}
