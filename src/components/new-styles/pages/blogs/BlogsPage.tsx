"use client"

import { useBlogs } from "@/composables/useBlogs";

export default function BlogsPage() {
  const { blogs } = useBlogs();
  console.log(blogs);
  return (
    <>
      <h1>Blogs</h1>
      {/* <ReactMarkdown
        components={{
          u: ({ node, ...props }) => <u {...props} />, // Custom component for <u> tag
          a: ({ node, ...props }) => <a target="_blank" {...props} />, // Add target="_blank" to links
          ul: ({ node, ...props }) => (
            <ul className="list-disc list-inside my-6 space-y-2" {...props} />
          ),
          ol: ({ node, ...props }) => (
            <ol
              className="list-decimal list-inside my-6 space-y-2"
              {...props}
            />
          ),
          li: ({ node, ...props }) => <li className="ml-4" {...props} />,
          code(props) {
            const { children, className } = props;
            const match = /language-(\w+)/.exec(className || "");
            return match ? (
              <SyntaxHighlighter
                PreTag="div"
                language={match[1]}
                wrapLines
                customStyle={{
                  backgroundColor: "var(--primary-90)",
                  maxWidth: "100vw",
                  whiteSpace: "wrap",
                }}
                children={String(children).replace(/\n$/, "")}
              />
            ) : (
              <code className={className}>{children}</code>
            );
          },
        }}
        skipHtml={false}
      >
        {data.content}
      </ReactMarkdown> */}
    </>
  );
}
