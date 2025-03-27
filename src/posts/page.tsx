import Link from "next/link";

function Posts() {
  return (
    <>
      <h1>Posts page</h1>
      <h2>
        <Link href="/posts/first-post"></Link>
      </h2>
    </>
  );
}

export default Posts;
