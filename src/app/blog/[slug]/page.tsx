import fs from "fs";
import matter from "gray-matter";
import Markdown from "markdown-to-jsx";
import getPostMetadata from "utils/getPostMetadata";

const getPostContent = (slug: string) => {
  const file = `blog-posts/${slug}.md`;
  const content = fs.readFileSync(file, "utf8");
  const matterResult = matter(content);
  return matterResult;
};

export const generateStaticParams = async () => {
  const posts = getPostMetadata();
  return posts.map((post) => ({
    slug: post.slug,
  }));
};

const BlogPage = ({ params }: { params: { slug: string } }) => {
  const { slug } = params;
  const post = getPostContent(slug);
  return (
    <>
      <p>{post.data.date}</p>
      <h1>{post.data.title}</h1>
      <Markdown>{post.content}</Markdown>
    </>
  );
};

export default BlogPage;
