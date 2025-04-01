import fs from "fs";
import matter from "gray-matter";
import Markdown from "markdown-to-jsx";
import getPostMetadata from "utils/getPostMetadata";

interface PostMetadata {
  slug: string;
  title: string;
  date: string;
}

interface PostContent {
  content: string;
  data: Record<string, any>;
}

interface BlogPageProps {
  params: {
    slug: string;
  };
}

function getPostContent(slug: string): PostContent {
  const folder = "blog-posts/";
  const file = folder + `${slug}.md`;
  const content = fs.readFileSync(file, "utf8");

  const matterResult = matter(content);
  return { content: matterResult.content, data: matterResult.data };
}

export const generateStaticParams = async (): Promise<{ slug: string }[]> => {
  const posts: PostMetadata[] = getPostMetadata("blog-posts");
  return posts.map((post) => ({ slug: post.slug }));
};

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<{ title: string }> {
  const id = params?.slug ? " . " + params?.slug : "";
  return {
    title: `Alexanders Blogs ${id.replaceAll("-", " ")}`,
  };
}

export default function BlogPage({ params }: BlogPageProps) {
  const slug = params.slug;
  const post = getPostContent(slug);
  return (
    <>
      <div>
        <h2>{post.data.title || "Untitled Post"}</h2>
        <h2>{post.data.blogSeries || ""}</h2>
        <h2>{post.data.date}</h2>
        <br />
        <h2>{post.data.description}</h2>
        <Markdown>{post.content}</Markdown>
      </div>
    </>
  );
}
