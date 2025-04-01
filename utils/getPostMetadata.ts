import fs from "fs";
import matter from "gray-matter";

export default function getPostMetadata(basePath: string) {
  const folder = basePath + "/";
  const files = fs.readdirSync(folder);
  const markdownPosts = files.filter((file) => file.endsWith(".md"));

  const posts = markdownPosts.map((filename) => {
    const fileContents = fs.readFileSync(`${basePath}/${filename}`, "utf8");
    const matterResult = matter(fileContents);
    return {
      title: matterResult.data.title,
      blogSeries: matterResult.data.blogSeries,
      date: matterResult.data.date,
      content: matterResult.data.content,
      slug: filename.replace(".md", ""),
    };
  });
  return posts;
}
