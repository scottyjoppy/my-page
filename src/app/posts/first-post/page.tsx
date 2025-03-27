import Layout from "@/components/Layout";
import Head from "next/head";
import Link from "next/link";

function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      <h1>First Post</h1>
      <h2>
        <Link href="/">Home</Link>
      </h2>
    </Layout>
  );
}

export default FirstPost;
