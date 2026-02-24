import { getSectionContent } from "@/lib/content";
import { DifferentialsEditor } from "@/components/admin/editors/DifferentialsEditor";

export default async function DifferentialsContentPage() {
  const data = await getSectionContent("differentials");
  return <DifferentialsEditor initialData={data} />;
}
