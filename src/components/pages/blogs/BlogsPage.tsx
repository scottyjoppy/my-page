import getPostMetadata from "utils/getPostMetadata";
import BlogsClient from "./BlogsClient";

export default function Page() {
  const blogs = getPostMetadata();

  return <BlogsClient blogs={blogs} />;
}
