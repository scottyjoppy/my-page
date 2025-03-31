import GridSectionCenterFull from "@/components/GridSectionCenterFull";
import GridTitleSection from "@/components/GridTitleSection";
import Title from "@/components/Title";
import { prisma } from "@/lib/prisma";

export default async function Blog() {
  const posts = await prisma.post.findMany({ orderBy: { createdAt: "desc" } });

  return (
    <>
      <GridTitleSection>
        <Title>Blog</Title>
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
