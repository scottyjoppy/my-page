import BlogForm from "@/components/BlogForm";
import GridSectionCenterFull from "@/components/GridSectionCenterFull";
import GridTitleSection from "@/components/GridTitleSection";
import Title from "@/components/Title";

function NewBlog() {
  return (
    <>
      <GridTitleSection>
        <Title>Create Blog Page</Title>
      </GridTitleSection>
      <GridSectionCenterFull>
        <BlogForm />
      </GridSectionCenterFull>
    </>
  );
}

export default NewBlog;
