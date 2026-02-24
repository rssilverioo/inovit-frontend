import { getSectionContent } from "@/lib/content";
import { FooterEditor } from "@/components/admin/editors/FooterEditor";

export default async function FooterContentPage() {
  const data = await getSectionContent("footer");
  return <FooterEditor initialData={data} />;
}
