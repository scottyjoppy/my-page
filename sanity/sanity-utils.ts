import { createClient, groq } from "next-sanity";
import { Blog } from "types/Blog";
import clientConfig from "./config/client-config";

export async function getBlogs(): Promise<Blog[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "blog"] | order(sortOrder desc){
        _id,
        _createdAt,
        title,
        blogSeries,
        blogLine,
        date,
        description,
        "slug": slug.current,
        content
        }`
  );
}

export async function getBlog(slug: string): Promise<Blog> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "blog" && slug.current == $slug][0]{
        _id,
        _createdAt,
        title,
        blogSeries,
        blogLine,
        date,
        description,
        "slug": slug.current,
        content
      }`,
    { slug }
  );
}
