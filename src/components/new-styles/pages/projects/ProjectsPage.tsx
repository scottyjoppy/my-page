"use client";

import { useProjects } from "@/composables/useProjects";

const ProjectsPage = () => {
  const { projects } = useProjects();

  console.log(projects);
  return (
    <>
      <section>
        <h1>Projects page</h1>
      </section>
    </>
  );
};

export default ProjectsPage;
