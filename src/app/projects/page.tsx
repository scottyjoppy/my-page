import GridSection from "@/components/GridSection";
import GridSectionCenterFull from "@/components/GridSectionCenterFull";
import GridTitleSection from "@/components/GridTitleSection";

function Projects() {
  return (
    <>
      <GridTitleSection>
        <h1>Projects page</h1>
      </GridTitleSection>
      <GridSection>
        <GridSectionCenterFull>
          <p>Here I display my projects</p>
        </GridSectionCenterFull>
      </GridSection>
    </>
  );
}

export default Projects;
