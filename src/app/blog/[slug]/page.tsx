import fs from "fs";
import matter from "gray-matter";
import "highlight.js/styles/monokai.css";
import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import rehypeRaw from "rehype-raw";
import remarkBreaks from "remark-breaks";
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
      <div className="border-b-8 border-primary flex items-center">
        <div className="container px-5 mx-auto my-3 max-w-250">
          <h3 className="text-left">{post.data.blogSeries}</h3>
          <h4 className="text-left mb-5">{post.data.blogLine}</h4>
          <h1 className="-ml-1 mb-5">{post.data.title}</h1>
          <p className="mb-5">{post.data.description}</p>
        </div>
      </div>
      <div className="container mx-auto my-10 max-w-250 px-5">
        <p className="mb-3">{post.data.date}</p>
        <article className="prose prose-lg max-w-none">
          <ReactMarkdown
            remarkPlugins={[remarkBreaks]} // Handle line breaks (two spaces or <br>)
            rehypePlugins={[rehypeRaw, rehypeHighlight]} // Render raw HTML (e.g., <u>) and syntax highlight code
            components={{
              u: ({ node, ...props }) => <u {...props} />, // Custom component for <u> tag
              a: ({ node, ...props }) => <a target="_blank" {...props} />, // Add target="_blank" to links
            }}
            skipHtml={false}
          >
            {post.content}
          </ReactMarkdown>
        </article>
      </div>
    </>
  );
};

export default BlogPage;
