import Layout from "@/components/Layout";
import { MyPicture } from "@/components/MyPicture";
import Head from "next/head";
import Link from "next/link";

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      <h1>First Post</h1>
      <h2>
        <Link href="/">Back To Home</Link>
      </h2>
      <MyPicture />
    </Layout>
  );
}
