import GridSection from "@/components/GridSection";
import GridSectionCenterFull from "@/components/GridSectionCenterFull";
import GridTitleSection from "@/components/GridTitleSection";
import { BsFilePerson } from "react-icons/bs";

function Projects() {
  return (
    <>
      <GridTitleSection>
        <h1>Projects page</h1>
      </GridTitleSection>
      <GridSection>
        <GridSectionCenterFull className="relative">
          <BsFilePerson size={100} />
        </GridSectionCenterFull>
        <GridSectionCenterFull colSpan={{ lg: 2, md: 1 }}>
          <p className="max-w-sm text-foreground">
            A clean and responsive web application for showcasing projects and
            publishing blog posts. Built with Next.js, React, and TypeScript for
            fast performance and scalability.
          </p>
        </GridSectionCenterFull>
      </GridSection>
    </>
  );
}

export default Projects;
