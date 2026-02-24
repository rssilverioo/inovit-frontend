import { prisma } from "@/lib/prisma";
import { unstable_cache } from "next/cache";

export const getSectionContent = unstable_cache(
  async (section: string): Promise<Record<string, unknown>> => {
    try {
      const rows = await prisma.siteContent.findMany({
        where: { section },
      });

      const content: Record<string, unknown> = {};
      for (const row of rows) {
        content[row.key] = row.value;
      }
      return content;
    } catch {
      // Return empty object so fallback defaults are used
      return {};
    }
  },
  ["site-content"],
  { tags: ["site-content"], revalidate: 60 }
);

export async function getAllContent() {
  try {
    const rows = await prisma.siteContent.findMany({
      orderBy: [{ section: "asc" }, { key: "asc" }],
    });

    const grouped: Record<string, Record<string, unknown>> = {};
    for (const row of rows) {
      if (!grouped[row.section]) grouped[row.section] = {};
      grouped[row.section][row.key] = row.value;
    }
    return grouped;
  } catch {
    return {};
  }
}
