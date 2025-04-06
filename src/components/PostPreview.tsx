import Link from "next/link";
import GridSectionCenterFull from "./GridSectionCenterFull";
import { PostMetadata } from "./interface/PostMetadata";

const PostPreview = (props: PostMetadata) => {
  return (
    <GridSectionCenterFull>
      <div className="w-full p-4 flex flex-col h-full">
        <div className="text-left mb-4">
          <h3>{props.blogSeries}</h3>
          <h4>{props.blogLine}</h4>
        </div>
        <Link href={`/blog/${props.slug}`} className="flex flex-1 w-full">
          <div className="w-full rounded-2xl border-primary border-2 px-5 py-4 backdrop-brightness-95 flex flex-col justify-center">
            <h2 className="mb-3">{props.title}</h2>
            <h3 className="mb-2">{props.description}</h3>
            <h4>{props.date}</h4>
          </div>
        </Link>
      </div>
    </GridSectionCenterFull>
  );
};

export default PostPreview;
