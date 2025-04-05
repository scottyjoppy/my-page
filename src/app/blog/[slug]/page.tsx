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
          <div className="mx-50 my-3">
            <h3 className="text-left">{post.data.blogSeries}</h3>
            <h4 className="text-left mb-5">{post.data.blogLine}</h4>
            <h1 className="-ml-1 mb-5">{post.data.title}</h1>
            <h2 className="mb-5">{post.data.description}</h2>
          </div>
        </div>
      <div className="mx-40">
        <div className="m-10">
          <p className="mb-3">{post.data.date}</p>
          <ReactMarkdown
            remarkPlugins={[remarkBreaks]} // Handle line breaks (two spaces or <br>)
            rehypePlugins={[rehypeRaw, rehypeHighlight]} // Render raw HTML (e.g., <u>) and syntax highlight code
            components={{
              u: ({ node, ...props }) => <u {...props} />, // Custom component for <u> tag
            }}
            skipHtml={false}
          >
            {post.content}
          </ReactMarkdown>
        </div>
      </div>
    </>
  );
};

export default BlogPage;
