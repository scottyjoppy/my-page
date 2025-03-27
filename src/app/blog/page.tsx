import BlogForm from "@/components/BlogForm";
import Link from "next/link";

function Blog() {
  return (
    <>
      <h1>Posts page</h1>
      <h2>
        <Link href="/blog/first-post">Go To Post 1</Link>
      </h2>
      <BlogForm />
    </>
  );
}

export default Blog;
