import GridSection from "@/components/GridSection";
import GridTitleSection from "@/components/GridTitleSection";
import { eversportsDraft, myPage, waterMe } from "@/components/projects/project";
import ProjectSection from "@/components/ProjectsSection";
import { BsFilePerson } from "react-icons/bs";

function Projects() {
  return (
    <>
      <GridTitleSection>
        <h1>Projects page</h1>
      </GridTitleSection>
      <GridSection>
        <ProjectSection project={myPage}>
          <BsFilePerson size={100} />
          <div className="text-5xl font-bold">ALX</div>
        </ProjectSection>
      </GridSection>
      <GridSection>
        <ProjectSection project={eversportsDraft}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 150 150"
            fill="currentColor"
            className="w-30 h-30"
          >
            <path fill="none" d="M0,0H150V150H0V0Z" />
            <path d="M137.08,96.03c.66-1.11,2.54-.92,2.08,.48-17.25,52.44-87.64,61.46-118.61,16.17-8.78-13.09-11.64-25.36-10.56-36.05,3.22-32.24,42.82-51.96,71.15-37.89,1.01,.5,.2,1.9-.83,1.83-13.15-.57-23.1,3.55-29.73,10.37-6.64,6.83-9.82,16.22-9.61,25.86,.43,19.26,14.33,39.38,41,43.1,12.61,1.76,38.47,1.2,55.1-23.87Z" />
            <path d="M22.57,37.41c-1.03,.83-1.89,.1-1.17-.83C44.65,3.97,98.87-6.12,130.12,35.33c9.49,12.59,11.24,25.22,8.33,36.28-8.96,33.87-61.55,54.39-82.18,17.27-.47-.8,.34-1.9,1.24-1.67,17.09,4.32,29.91,2.82,38.6-2.1,8.75-4.96,13.22-13.38,13.46-22.48,.44-38.56-58.34-52.05-86.99-25.22Z" />
          </svg>
        </ProjectSection>
      </GridSection>
      <GridSection>
        <ProjectSection project={waterMe}>
          <svg
              height="130"
              viewBox="0 0 36 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M29 26H9V32C9 35.3137 11.6863 38 15 38H23C26.3137 38 29 35.3137 29 32V26Z"
                stroke="black"
                strokeWidth="4"
                strokeMiterlimit="3.99393"
                strokeLinejoin="round"
              />
              <path d="M19 19V26" stroke="black" strokeWidth="4" />
              <path
                d="M2 4V2H7C13.6274 2 19 7.37258 19 14V16H14C7.37259 16 2 10.6274 2 4Z"
                stroke="black"
                strokeWidth="4"
              />
              <path
                d="M34 7V6H31C24.3726 6 19 11.3726 19 18V19L22 19C28.6274 19 34 13.6274 34 7Z"
                stroke="black"
                strokeWidth="4"
              />
            </svg>
        </ProjectSection>
      </GridSection>
    </>
  );
}

export default Projects;
