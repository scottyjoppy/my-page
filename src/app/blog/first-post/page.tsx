import { prisma } from "@/lib/prisma";

export default async function Blog() {
  const posts = await prisma.post.findMany({ orderBy: { createdAt: "desc" } });

  return (
    <>
      <h1>Blog</h1>
      {posts.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
          <p>{new Date(post.createdAt).toLocaleDateString()}</p>
        </div>
      ))}
    </>
  );
}
