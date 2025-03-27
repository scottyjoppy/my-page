import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>Home Page</h1>
      <h2>
        <Link href="/posts/first-post">Go First Post</Link>
      </h2>
    </>
  );
}
