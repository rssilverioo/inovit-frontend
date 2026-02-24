import { getSectionContent } from "@/lib/content";
import { ServicesEditor } from "@/components/admin/editors/ServicesEditor";

export default async function ServicesContentPage() {
  const data = await getSectionContent("services");
  return <ServicesEditor initialData={data} />;
}
