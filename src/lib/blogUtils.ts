// lib/blogUtils.ts
import fs from "fs";
import matter from "gray-matter";

export function getValidBlogFiles(): string[] {
  const folder = "blog-posts/";
  const files = fs.readdirSync(folder);

  return files.filter((file) => {
    if (!file.endsWith(".md")) return false;
    if (file === "undefined.md") return false;
    if (file.trim() === ".md") return false;
    
    const slug = file.replace(".md", "");
    if (!slug || slug === "undefined") return false;

    try {
      const fileContents = fs.readFileSync(`blog-posts/${file}`, "utf8");
      const matterResult = matter(fileContents);
      return !!matterResult.data.title;
    } catch {
      return false;
    }
  });
}