import fs from "fs";
import Markdown from "markdown-to-jsx";

const getPostContent = (slug: string) => {
  const folder = "blog-posts/";
  const file = `${folder}${slug}.md`;
  const content = fs.readFileSync(file, "utf8");
  return content;
};

const BlogPage = ({ params }: { params: { slug: string } }) => {
  const content = getPostContent(params.slug);
  return <Markdown>{content}</Markdown>;
};

export default BlogPage;
