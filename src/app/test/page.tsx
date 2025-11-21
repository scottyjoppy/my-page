import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

async function loader() {
  const path = "/api/blog?populate=*";
  const BASE_URL = "http://localhost:1337";

  const url = new URL(path, BASE_URL);

  const response = await fetch(url.href);
  const data = await response.json();

  return data;
}

export default async function Test() {
  const { data } = await loader();
  console.log(data.serie);
  return (
    <>
      <ReactMarkdown
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
      </ReactMarkdown>
    </>
  );
}
