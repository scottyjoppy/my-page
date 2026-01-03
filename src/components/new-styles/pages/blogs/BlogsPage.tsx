import BlogsClient from "@/components/new-styles/pages/blogs/BlogsClient";
import getPostMetadata from "utils/getPostMetadata";

export default function Page() {
  const blogs = getPostMetadata();

  return <BlogsClient blogs={blogs} />;
}
