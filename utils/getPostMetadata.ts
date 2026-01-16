import { PostMetadata } from "@/components/interface/PostMetadata";
import fs from "fs";
import matter from "gray-matter";
import path from "path";

const getPostMetadata = (): PostMetadata[] => {
  const folder = path.join(process.cwd(), "blog-posts");
  const files = fs.readdirSync(folder);

  const markdownPosts = files.filter((file) => file.endsWith(".md"));

  const posts = markdownPosts.map((fileName) => {
    const filePath = path.join(folder, fileName);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data } = matter(fileContents);

    return {
      title: data.title ?? "Untitled",
      blogSeries: data.blogSeries ?? "",
      blogLine: data.blogLine ?? "",
      date: data.date ?? "",
      description: data.description ?? "",
      slug: fileName.replace(".md", ""),
    };
  });

  return posts.sort((a, b) => {
    const getNum = (slug: string) =>
      parseInt(slug.match(/D(\d+)/i)?.[1] ?? "0");
    return getNum(b.slug) - getNum(a.slug);
  });
};

export default getPostMetadata;
