import fs from "fs";
import matter from "gray-matter";
import "highlight.js/styles/monokai.css";
import { notFound } from "next/navigation";
import path from "path";
import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import rehypeRaw from "rehype-raw";
import remarkBreaks from "remark-breaks";
import getPostMetadata from "utils/getPostMetadata";

const getPostContent = (slug: string) => {
  if (!slug) notFound();

  const filePath = path.join(process.cwd(), "blog-posts", `${slug}.md`);

  if (!fs.existsSync(filePath)) {
    notFound();
  }

  const content = fs.readFileSync(filePath, "utf8");
  return matter(content);
};

export const generateStaticParams = async () => {
  const posts = getPostMetadata();
  return posts
    .filter((post) => typeof post.slug === "string")
    .map((post) => ({
      slug: post.slug,
    }));
};

const BlogPage = async (props: any) => {
  const params = await props.params;
  const slug = params.slug;
  const post = getPostContent(slug);
  return (
    <section>
      <div>
        <div>
          <h3>{post.data.blogSeries}</h3>
          <h4>{post.data.blogLine}</h4>
          <h1>{post.data.title}</h1>
          <p>{post.data.description}</p>
        </div>
      </div>
      <div>
        <p>{post.data.date}</p>
        <article className="prose">
          <ReactMarkdown
            remarkPlugins={[remarkBreaks]} // Handle line breaks (two spaces or <br>)
            rehypePlugins={[rehypeRaw, rehypeHighlight]} // Render raw HTML (e.g., <u>) and syntax highlight code
            components={{
              u: ({ node, ...props }) => <u {...props} />, // Custom component for <u> tag
              a: ({ node, ...props }) => <a target="_blank" {...props} />, // Add target="_blank" to links
              ul: ({ node, ...props }) => (
                <ul
                  className="list-disc list-inside my-6 space-y-2"
                  {...props}
                />
              ),
              ol: ({ node, ...props }) => (
                <ol
                  className="list-decimal list-inside my-6 space-y-2"
                  {...props}
                />
              ),
              li: ({ node, ...props }) => <li className="ml-4" {...props} />,
            }}
            skipHtml={false}
          >
            {post.content}
          </ReactMarkdown>
        </article>
      </div>
    </section>
  );
};

export default BlogPage;
