import Layout from "@/components/Layout";
import { buttonVariants } from "@/components/ui/button";
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
        <Link href="/" className={buttonVariants({ variant: "outline"})}>Home</Link>
      </h2>
    </Layout>
  );
}

export default FirstPost;
