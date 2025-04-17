import { PostMetadata } from "@/components/interface/PostMetadata";
import fs from "fs";
import matter from "gray-matter";

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
      blogLine: matterResult.data.blogLine,
      date: matterResult.data.date,
      description: matterResult.data.description,
      slug: fileName.replace(".md", ""),
    };
  });
  // Sort based on the number in the slug (e.g., jtse-d1 → 1)
  const sortedPosts = posts.sort((a, b) => {
    const getNum = (slug: string) => parseInt(slug.match(/d(\d+)/)?.[1] || "0");
    return getNum(a.slug) - getNum(b.slug); // ascending order
  });

  return sortedPosts;
};



export default getPostMetadata;
