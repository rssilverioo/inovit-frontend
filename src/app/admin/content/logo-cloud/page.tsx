import { getSectionContent } from "@/lib/content";
import { LogoCloudEditor } from "@/components/admin/editors/LogoCloudEditor";

export default async function LogoCloudContentPage() {
  const data = await getSectionContent("logo-cloud");
  return <LogoCloudEditor initialData={data} />;
}
