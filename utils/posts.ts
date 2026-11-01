import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function getPosts() {
  const posts = await prisma.post.findMany();
  return posts;
}

export async function getPostById(id: number) {
  const post = await prisma.post.findUnique({
    where: {
      id,
    },
  });
  return post;
}
