import SingleBlog from "@/components/pages/singleBlog/singleBlog";
import getPostMetadata from "utils/getPostMetadata";

export const generateStaticParams = async () => {
  const posts = getPostMetadata();
  return posts
    .filter((post) => typeof post.slug === "string")
    .map((post) => ({
      slug: post.slug,
    }));
};

export default async function Blog(props: any) {
  const params = await props.params;
  return <SingleBlog slug={params.slug} />;
}