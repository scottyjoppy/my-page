---
title: "Day 216: Blog Page Continuation"
blogSeries: "Journey To: Software Engineer"
blogLine: "From warehouse racks to full stack"
date: "December 19, 2025"
description: "Continuing development of the new blog page."
---

Hello friends,

<br>

Today I dove back into this black hole known to me as the blog page. I think it would be beneficial for me to just post the current code and try my best to explain how things work line by line here. So here we go.

<br>

## The Code

<br>

```tsx
// I'll start by skipping all the imports, but they're there, importing

export default function Test() {

  // Setting all the variables I'll be using, as well as fetching blogs from supabase 
  const { blogs, updateBlogs } = useBlogs();
  const [selectedBlog, setSelectedBlog] = useState(0);
  const [preview, setPreview] = useState(false);
  const [draft, setDraft] = useState("");

  const editorRef = useRef<HTMLPreElement>(null);

  // This is how I switch between seeing the markdown and seeing the converted markdown (what the user sees)
  const togglePreview = () => {
    // Now we learn about the draft variable
    // The way things will be rendered later is through this editorRef
    // I'm only allowing editing during markdown mode, or !preview
    // Mainly because the text shown during preview mode is just not markdown
    // It's already been rendered for the user
    // So I don't want to save that into the current draft
    if (!preview && editorRef.current) {
      setDraft(editorRef.current.innerText);
    }
    // Flip preview
    setPreview(!preview);
  };

  // A function to simplify how I'm saving blogs
  // Checks to make sure blog is populated before converting the markdown to jsonBlocks and saving them into the database
  const saveDraft = async () => {
    const blog = blogs[selectedBlog];
    if (!blog) return;

    const md = getDraft();

    if (!md.trim()) return;

    const json = mdToJson(md);
    await updateBlogs(blog.id, json);
  };

  // Use effect to detect when the user changes the selected blog, changes the current draft to the editorRef text
  useEffect(() => {
    const blog = blogs[selectedBlog];
    if (!blog || !editorRef.current) return;

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

  // Use effect to save when you close the page
  useEffect(() => {
    const handler = () => {
      if (draft.trim()) {
        saveDraft();
      }
    };
    window.addEventListener("beforeunload", handler);
    return () => window.removeEventListener("beforeunload", handler);
  }, [draft, selectedBlog]);

  // Default when there's no blogs present
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
              a: ({ ...props }) => <a target="_blank" {...props} />,
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
        <pre ref={editorRef} contentEditable suppressContentEditableWarning />
      )}
    </>
  );
}
```

<br>

And there you have it. I didn't add any comments in the HTML part because it's more so just there to show how the top code works. But I hope I was able to explain things somewhat clearly. The code is at a point now that I just have to tighten up some things and modify the jsonToMd and mdToJson files. Then I'll have to style the pages which shouldn't be too complicated. Thank you for reading today's blog, until next time, friend.
