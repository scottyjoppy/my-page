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

const BlogPage = (props: any) => {
  const slug = props.params.slug;
  const post = getPostContent(slug);
  return (
    <>
      <div className="border-b-8 border-primary">
        <div className="m-10">
          <h1 className="text-left -ml-1 mb-5">{post.data.title}</h1>
          <h2 className="text-left mb-5">{post.data.description}</h2>
          <p className="text-left">{post.data.date}</p>
        </div>
      </div>
      <div className="m-10">
        <Markdown>{post.content}</Markdown>
      </div>
    </>
  );
};

export default BlogPage;
