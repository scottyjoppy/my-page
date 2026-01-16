import fs from "fs";
import matter from "gray-matter";
import "highlight.js/styles/monokai.css";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import rehypeRaw from "rehype-raw";
import remarkBreaks from "remark-breaks";
import getPostMetadata from "utils/getPostMetadata";

const getPostContent = (slug: string) => {
  // Add validation FIRST
  if (!slug || slug === "undefined" || typeof slug !== "string") {
    console.error("Invalid slug received:", slug);
    return null;
  }

  const file = `blog-posts/${slug}.md`;

  // Check file exists
  if (!fs.existsSync(file)) {
    console.error("File does not exist:", file);
    return null;
  }

  try {
    const content = fs.readFileSync(file, "utf8");
    const matterResult = matter(content);

    if (!matterResult.data.title) {
      console.error("Missing title in:", slug);
      return null;
    }

    return matterResult;
  } catch (error) {
    console.error(`Error reading post ${slug}:`, error);
    return null;
  }
};

export const generateStaticParams = async () => {
  const posts = getPostMetadata();
  return posts
    .filter((post) => typeof post.slug === "string")
    .map((post) => ({
      slug: post.slug,
    }));
};

// Change from 'any' to proper type and await params
const BlogPage = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params; // IMPORTANT: await the params

  console.log("BlogPage rendering for slug:", slug); // Debug log

  const post = getPostContent(slug);

  if (!post) {
    notFound();
  }

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
            remarkPlugins={[remarkBreaks]}
            rehypePlugins={[rehypeRaw, rehypeHighlight]}
            components={{
              u: ({ node, ...props }) => <u {...props} />,
              a: ({ node, ...props }) => <a target="_blank" {...props} />,
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
