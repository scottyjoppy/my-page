import GridSectionCenterFull from "@/components/GridSectionCenterFull";
import GridTitleSection from "@/components/GridTitleSection";
import { PostMetadata } from "@/components/interface/PostMetadata";
import fs from "fs";
import matter from "gray-matter";
import Link from "next/link";

const getPostMetadata = (): PostMetadata[] => {
  const folder = "blog-posts/";
  const files = fs.readdirSync(folder);
  const markdownPosts = files.filter((file) => file.endsWith(".md"));

  const posts = markdownPosts.map((fileName) => {
    const fileContents = fs.readFileSync(`blog-posts/${fileName}`, "utf8");
    const matterResult = matter(fileContents);
    return {
      title: matterResult.data.title,
      blogSeries: matterResult.data.blogSeries,
      date: matterResult.data.date,
      description: matterResult.data.description,
      slug: fileName.replace(".md", ""),
    };
  });
  return posts;
};

const Blog = () => {
  const postMetadata = getPostMetadata();
  const postPreviews = postMetadata.map((post, index) => (
    <div key={index}>
      <Link href={`/blog/${post.slug}`}>
        <h2>{post.title}</h2>
        <h2>{post.description}</h2>
      </Link>
    </div>
  ));

  return (
    <>
      <GridTitleSection>
        <h1>Blog</h1>
      </GridTitleSection>
      <GridSectionCenterFull>{postPreviews}</GridSectionCenterFull>
    </>
  );
};

export default Blog;
