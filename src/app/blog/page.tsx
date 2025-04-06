import GridSection from "@/components/GridSection";
import GridTitleSection from "@/components/GridTitleSection";
import PostPreview from "@/components/PostPreview";
import getPostMetadata from "utils/getPostMetadata";

const Blog = () => {
  const postMetadata = getPostMetadata();
  const postPreviews = postMetadata.map((post) => (
    <PostPreview key={post.slug} {...post} />
  ));

  return (
    <>
      <GridTitleSection>
        <h1>Blog</h1>
      </GridTitleSection>
      <GridSection>{postPreviews}</GridSection>
    </>
  );
};

export default Blog;
