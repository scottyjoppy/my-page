import GridSectionCenterFull from "@/components/GridSectionCenterFull";
import GridTitleSection from "@/components/GridTitleSection";
import Title from "@/components/Title";
import Link from "next/link";

function Blog() {
  return (
    <>
      <GridTitleSection>
        <Title>Blog</Title>
      </GridTitleSection>
      <GridSectionCenterFull>
        <Link href="/blog/first-post">Go To Post 1</Link>
      </GridSectionCenterFull>
    </>
  );
}

export default Blog;
