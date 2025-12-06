// Your existing getPostMetadata.ts
import { PostMetadata } from "@/components/interface/PostMetadata";
import { getValidBlogFiles } from "@/lib/blogUtils";
import fs from "fs";
import matter from "gray-matter";

const getPostMetadata = (): PostMetadata[] => {
  const markdownPosts = getValidBlogFiles();

  const posts = markdownPosts.map((fileName) => {
    const slug = fileName.replace(".md", "");
    const fileContents = fs.readFileSync(`blog-posts/${fileName}`, "utf8");
    const matterResult = matter(fileContents);

    return {
      title: matterResult.data.title,
      blogSeries: matterResult.data.blogSeries,
      blogLine: matterResult.data.blogLine,
      date: matterResult.data.date,
      description: matterResult.data.description,
      slug,
    };
  });

  // Sort logic...
  return posts.sort((a, b) => {
    const getNum = (slug: string) =>
      parseInt(slug.match(/D(\d+)/i)?.[1] || "0");
    return getNum(b.slug) - getNum(a.slug);
  });
};

export default getPostMetadata;
