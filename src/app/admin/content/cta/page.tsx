import { getSectionContent } from "@/lib/content";
import { CtaEditor } from "@/components/admin/editors/CtaEditor";

export default async function CtaContentPage() {
  const data = await getSectionContent("cta");
  return <CtaEditor initialData={data} />;
}
