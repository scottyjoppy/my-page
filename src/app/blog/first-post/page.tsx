import GridSectionCenterFull from "@/components/GridSectionCenterFull";
import GridTitleSection from "@/components/GridTitleSection";
import { prisma } from "@/lib/prisma";

export default async function Blog() {
  const posts = await prisma.post.findMany({ orderBy: { createdAt: "desc" } });

  return (
    <>
      <GridTitleSection>
        <h1>Blog</h1>
      </GridTitleSection>
      <GridSectionCenterFull>
        {posts.map((post) => (
          <div key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
            <p>{new Date(post.createdAt).toLocaleDateString()}</p>
          </div>
        ))}
      </GridSectionCenterFull>
    </>
  );
}
