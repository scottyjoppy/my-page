import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>Hello welcome to the Home Page</h1>
      <Link href="/posts/first-post">Go To Post 1</Link>
    </>
  );
}
