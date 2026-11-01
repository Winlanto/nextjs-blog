"use server";

import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const prisma = new PrismaClient();

export async function createPost(formData: FormData) {
  const title = String(formData.get("title") ?? "").trim();
  const content = String(formData.get("content") ?? "").trim();

  if (!title || !content) return;

  await prisma.post.create({
    data: {
      title,
      content,
    },
  });
  revalidatePath("/posts");
}

export async function deletePost(id: number) {
  await prisma.post.delete({
    where: {
      id,
    },
  });
  revalidatePath("/posts");
  revalidatePath(`/posts/${id}`);
  redirect("/posts");
}

export async function updatePost(id: number, formData: FormData) {
  const title = String(formData.get("title") ?? "").trim();
  const content = String(formData.get("content") ?? "").trim();

  if (!title || !content) return;

  await prisma.post.update({
    where: {
      id,
    },
    data: {
      title,
      content,
    },
  });
  revalidatePath("/posts");
  revalidatePath(`/posts/${id}`);
  revalidatePath(`/posts/${id}/edit`);
  redirect(`/posts/${id}`);
}
