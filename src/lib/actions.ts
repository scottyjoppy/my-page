"use server";

import { prisma } from "@/lib/prisma";

export async function addPost(formData: FormData) {
  const title = formData.get("title") as string;
  const content = formData.get("content") as string;

  if (!title || !content) return { error: "Title and content are required" };

  await prisma.post.create({
    data: { title, content },
  });

  return { success: true };
}
