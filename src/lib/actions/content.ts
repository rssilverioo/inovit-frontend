"use server";

import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { revalidateTag } from "next/cache";

export async function updateSectionContent(
  section: string,
  data: Record<string, unknown>
) {
  const session = await auth();
  if (!session?.user) {
    throw new Error("Unauthorized");
  }

  await prisma.$transaction(
    Object.entries(data).map(([key, value]) =>
      prisma.siteContent.upsert({
        where: { section_key: { section, key } },
        update: { value: value as object },
        create: { section, key, value: value as object },
      })
    )
  );

  revalidateTag("site-content", "default");
  return { success: true };
}
