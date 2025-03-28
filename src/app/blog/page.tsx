import Link from "next/link";

function Blog() {
  return (
    <>
      <h1>Blog Page</h1>
      <h2>
        <Link href="/blog/first-post">Go To Post 1</Link>
      </h2>
    </>
  );
}

export default Blog;
