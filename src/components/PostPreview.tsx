import Link from "next/link";
import GridSectionCenterFull from "./GridSectionCenterFull";
import { PostMetadata } from "./interface/PostMetadata";

const PostPreview = (props: PostMetadata) => {
  return (
    <>
        <GridSectionCenterFull colNum="1">
      <Link href={`/blog/${props.slug}`}>
          <div className="rounded-2xl border-primary border-2 px-5 py-1 whitespace-nowrap backdrop-brightness-95">
            <h2 className="mb-5 text-center">{props.title}</h2>
            <h3>{props.description}</h3>
            <h4>{props.date}</h4>
          </div>
      </Link>
        </GridSectionCenterFull>
    </>
  );
};

export default PostPreview;
