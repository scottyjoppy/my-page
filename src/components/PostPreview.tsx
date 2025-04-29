import Link from "next/link";
import { getBlogs } from "../../sanity/sanity-utils";
import GridSectionCenterFull from "./GridSectionCenterFull";
import { Button } from "./ui/button";

export default async function PostPreview() {
  const blogs = await getBlogs();

  const formatDate = (date: string) => {
    return date.split("-").reverse().join("-");
  };

  return (
    <>
      {blogs.map((blog, index) => (
        <GridSectionCenterFull key={index}>
          <div className="w-full p-4 flex flex-col h-full">
            <div className="flex justify-between items-center mb-4">
              <div className="text-left">
                <h3>{blog.blogSeries}</h3>
                <h4>{blog.blogLine}</h4>
              </div>
              <Link href={`/blog/${blog.slug}`}>
                <Button className="hover:cursor-pointer">Read</Button>
              </Link>
            </div>
            <Link href={`/blog/${blog.slug}`} className="flex flex-1 w-full">
              <div className="w-full rounded-2xl border-primary border-2 px-5 py-4 backdrop-brightness-95 flex flex-col justify-center transition-all hover:bg-primary/10">
                <h2 className="mb-3">{blog.title}</h2>
                <h3 className="mb-2">{blog.description}</h3>
                <h4>{formatDate(blog.date)}</h4>
              </div>
            </Link>
          </div>
        </GridSectionCenterFull>
      ))}
    </>
  );
}
