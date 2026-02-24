import { getSectionContent } from "@/lib/content";
import { CasesEditor } from "@/components/admin/editors/CasesEditor";

export default async function CasesContentPage() {
  const data = await getSectionContent("cases");
  return <CasesEditor initialData={data} />;
}
