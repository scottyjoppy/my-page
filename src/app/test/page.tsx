"use client";

import { useBlogs } from "@/composables/useBlogs";
import jsonToMd from "@/lib/jsonToMd";
import { mdToJson } from "@/lib/mdToJson";
import { useEffect, useRef, useState } from "react";
import ReactMarkdown from "react-markdown";
import SyntaxHighlighter from "react-syntax-highlighter";

export default function Test() {
  const { blogs, updateBlogs } = useBlogs();
  const [selectedBlog, setSelectedBlog] = useState(0);
  const [preview, setPreview] = useState(false);
  const [draft, setDraft] = useState("");

  const editorRef = useRef<HTMLPreElement>(null);

  const getDraft = () => editorRef.current?.textContent ?? "";

  const saveDraft = async () => {
    const blog = blogs[selectedBlog];
    if (!blog) return;

    const md = getDraft();

    if (!md.trim()) return;

    const json = mdToJson(md);
    await updateBlogs(blog.id, json);
  };

  const togglePreview = () => {
    setDraft(getDraft());
    setPreview(!preview);
  };

  useEffect(() => {
    if (!editorRef.current || !blogs?.[selectedBlog]) return;

    if (!preview || !draft) {
      editorRef.current.textContent = jsonToMd(
        blogs[selectedBlog].content ?? ""
      );
    } else {
      editorRef.current.textContent = draft;
    }
  }, [selectedBlog, blogs, preview, draft]);

  useEffect(() => {
    const handler = () => {
      if (draft.trim()) {
        saveDraft();
      }
    };
    window.addEventListener("beforeunload", handler);
    return () => window.removeEventListener("beforeunload", handler);
  }, [draft, selectedBlog]);

  if (!blogs || blogs.length === 0) {
    return <div>No Blogs</div>;
  }

  if (!blogs || blogs.length === 0) {
    return <div>No Blogs</div>;
  }

  return (
    <>
      <select
        name="Blog"
        onChange={(e) => {
          setSelectedBlog(Number(e.target.value));
          setPreview(false)
        }}
      >
        <option disabled>Choose a blog</option>

        {blogs.map((blog, index) => (
          <option key={blog.id} value={index}>
            {blog.title}
          </option>
        ))}
      </select>
      <button
        onClick={togglePreview}
        className="p-2 bg-white hover:bg-gray-100 transition-all"
      >
        {preview ? "Preview" : "Markdown"}
      </button>
      <button onClick={saveDraft}>Save</button>
      {preview ? (
        <div className="outline-none">
          <ReactMarkdown
            components={{
              a: ({ ...props }) => <a target="_blank" {...props} />, // Add target="_blank" to links
              ul: ({ ...props }) => (
                <ul
                  className="list-disc list-inside my-6 space-y-2"
                  {...props}
                />
              ),
              ol: ({ ...props }) => (
                <ol
                  className="list-decimal list-inside my-6 space-y-2"
                  {...props}
                />
              ),
              li: ({ ...props }) => <li className="ml-4" {...props} />,
              code: ({ children, className, ...props }) => {
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
                  <code className={className} {...props}>
                    {children}
                  </code>
                );
              },
              img: ({ src, alt, ...props }) => (
                <img alt={alt} src={src} {...props} className="w-1/2" />
              ),
            }}
            skipHtml={false}
          >
            {draft}
          </ReactMarkdown>
        </div>
      ) : (
        <pre
          ref={editorRef}
          contentEditable
          suppressContentEditableWarning
          onInput={() => {
            if (!editorRef.current) return;
            setDraft(editorRef.current.innerText);
          }}
        />
      )}
    </>
  );
}
