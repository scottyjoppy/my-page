import GridSectionCenterFull from "@/components/GridSectionCenterFull";
import GridTitleSection from "@/components/GridTitleSection";
import Link from "next/link";

function Blog() {
  return (
    <>
      <GridTitleSection>
        <h1>Blog</h1>
      </GridTitleSection>
      <GridSectionCenterFull>
        <Link href="/blog/first-post">Go To Post 1</Link>
      </GridSectionCenterFull>
    </>
  );
}

export default Blog;
