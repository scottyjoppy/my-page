import GridSection from "@/components/GridSection";
import GridTitleSection from "@/components/GridTitleSection";
import PostPreview from "@/components/PostPreview";

const Blog = () => {
  return (
    <>
      <GridTitleSection>
        <h1>Blog</h1>
      </GridTitleSection>
      <GridSection>
        <PostPreview />
      </GridSection>
    </>
  );
};

export default Blog;
