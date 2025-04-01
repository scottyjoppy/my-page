import BlogForm from "@/components/BlogForm";
import GridSectionCenterFull from "@/components/GridSectionCenterFull";
import GridTitleSection from "@/components/GridTitleSection";

function NewBlog() {
  return (
    <>
      <GridTitleSection>
        <h1>Create Blog Page</h1>
      </GridTitleSection>
      <GridSectionCenterFull>
        <BlogForm />
      </GridSectionCenterFull>
    </>
  );
}

export default NewBlog;
