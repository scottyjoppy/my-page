// check-posts.js
const fs = require("fs");
const matter = require("gray-matter");

const problematicSlugs = ["JTSE-D89", "JTSE-D38", "JTSE-D65"];

problematicSlugs.forEach((slug) => {
  const file = `blog-posts/${slug}.md`;
  console.log(`\n=== Checking ${file} ===`);

  if (!fs.existsSync(file)) {
    console.log("❌ FILE DOES NOT EXIST");
    return;
  }

  try {
    const content = fs.readFileSync(file, "utf8");
    console.log("File length:", content.length);
    console.log("First 200 chars:", content.substring(0, 200));

    const matterResult = matter(content);
    console.log("Frontmatter:", matterResult.data);
    console.log("Has title?", !!matterResult.data.title);
  } catch (error) {
    console.log("❌ ERROR:", error.message);
  }
});
