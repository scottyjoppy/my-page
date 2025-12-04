"use client";

import { supabase } from "@/lib/getSeries";
import { useEffect, useState } from "react";
import { Database } from "types/database.types";
import jsonToMd from "@/lib/jsonToMd"

type Blog = Database["public"]["Tables"]["blogs"]["Row"];

export default function Test() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [selectedBlog, setSelectedBlog] = useState(0);
  const [preview, setPreview] = useState(false);

  useEffect(() => {
    async function fetchBlogs() {
      const { data, error } = await supabase.from("blogs").select("*");
      if (!error && data) setBlogs(data);
    }
    fetchBlogs();
  }, []);

  if (!blogs || blogs.length === 0) {
    return <div>No Blogs</div>;
  }

  return (
    <>
      <select
        name="Blog"
        onChange={(e) => setSelectedBlog(Number(e.target.value))}
      >
        <option disabled>Choose a blog</option>

        {blogs.map((blog, index) => (
          <option key={blog.id} value={index}>
            {blog.title}
          </option>
        ))}
      </select>
      <button
        onClick={() => setPreview(!preview)}
        className="p-2 bg-white hover:bg-gray-100 active:scale-90 transition-all"
      >
        PREVIEW
      </button>
      {preview ? (
        <div className="outline-none">
          {JSON.stringify(blogs[selectedBlog].content, null, 2)}
        </div>
      ) : (
        <div>{jsonToMd(blogs[selectedBlog].content)}</div>
      )}
    </>
  );
}

// return (
//   <>
//     <ReactMarkdown
//       components={{
//         a: ({ ...props }) => <a target="_blank" {...props} />, // Add target="_blank" to links
//         ul: ({ ...props }) => (
//           <ul className="list-disc list-inside my-6 space-y-2" {...props} />
//         ),
//         ol: ({ ...props }) => (
//           <ol
//             className="list-decimal list-inside my-6 space-y-2"
//             {...props}
//           />
//         ),
//         li: ({ ...props }) => <li className="ml-4" {...props} />,
//         code: ({ children, className, ...props }) => {
//           const match = /language-(\w+)/.exec(className || "");
//           return match ? (
//             <SyntaxHighlighter
//               PreTag="div"
//               language={match[1]}
//               wrapLines
//               customStyle={{
//                 backgroundColor: "var(--primary-90)",
//                 maxWidth: "100vw",
//                 whiteSpace: "wrap",
//               }}
//               children={String(children).replace(/\n$/, "")}
//             />
//           ) : (
//             <code className={className} {...props}>
//               {children}
//             </code>
//           );
//         },
//         img: ({ src, alt, ...props }) => (
//           <img alt={alt} src={src} {...props} className="w-1/2" />
//         ),
//       }}
//       skipHtml={false}
//     >
//       {}
//     </ReactMarkdown>
//   </>
// );
