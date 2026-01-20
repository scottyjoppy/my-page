import fs from "fs";
import matter from "gray-matter";
import "highlight.js/styles/monokai.css";
import { notFound } from "next/navigation";
import path from "path";
import { Children } from "react";
import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import rehypeRaw from "rehype-raw";
import remarkBreaks from "remark-breaks";
import styles from "./singleBlog.module.css";

const slugify = (text: string) =>
  text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-");

const getPostContent = (slug: string) => {
  if (!slug) notFound();

  const filePath = path.join(process.cwd(), "blog-posts", `${slug}.md`);

  if (!fs.existsSync(filePath)) {
    notFound();
  }

  const content = fs.readFileSync(filePath, "utf8");
  return matter(content);
};

interface SingleBlogProps {
  slug: string;
}

const SingleBlog = ({ slug }: SingleBlogProps) => {
  const post = getPostContent(slug);

  return (
    <section className={styles.container}>
      <div className={styles["top-container"]}>
        <div className={styles["blog-serie-container"]}>
          <p className={styles["blog-serie"]}>
            C:\{post.data.blogSeries}\{slug}
          </p>
          <p className={styles["blog-serie"]}>
            ::{"{"}
            {post.data.blogLine}
            {"}"}
          </p>
        </div>
        <h2 className={styles["title-container"]}>
          <span className={styles["day-container"]}>
            {post.data.title.split(":")[0].trim()}
          </span>
          <span className={styles.title}>
            {post.data.title.split(":")[1].trim()}
          </span>
        </h2>
        <p className={styles["blog-desc"]}>{post.data.description}</p>
      </div>
      <div className={styles["blog-content"]}>
        <p className={styles.date}>{post.data.date}</p>
        <br />
        <article className="prose">
          <ReactMarkdown
            remarkPlugins={[remarkBreaks]}
            rehypePlugins={[rehypeRaw, rehypeHighlight]}
            components={{
              h2: ({ children }) => {
                const text = Children.toArray(children).join("");
                const id = slugify(text);

                return (
                  <h2 id={id}>
                    <a href={`#${id}`} className={styles["blog-anchor"]}>
                      {children}
                    </a>
                  </h2>
                );
              },
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

export default SingleBlog;
