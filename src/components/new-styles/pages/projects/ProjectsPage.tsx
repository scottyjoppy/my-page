"use client";

import { useProjects } from "@/composables/useProjects";
import styles from "./ProjectsPage.module.css";

const ProjectsPage = () => {
  const { projects } = useProjects();

  return (
    <>
      <section className={styles["page-container"]}>
        <h1>PROJECTS</h1>
        <div className={styles["project-container"]}>
          {projects.map((proj) => (
            <div key={proj.id} className={styles["project-row"]}>
              <div className={styles["project-info"]}>
                <h2 className="underline">{proj.project_name}</h2>
                <p>{proj.project_description}</p>
                <div className={styles["link-container"]}>
                  <a href={proj.github_repo || ""} target="_blank">
                    Github
                  </a>
                  <a href={proj.project_link || ""} target="_blank">
                    Projects
                  </a>
                </div>
              </div>
              <div className={styles["icon-container"]}>
                <a
                  dangerouslySetInnerHTML={{
                    __html: proj.project_icon?.svg || "",
                  }}
                  target="_blank"
                  className={styles["project-icon"]}
                  href={proj.project_link || ""}
                />
                <div className={styles["tool-icon-container"]}>
                  {proj.project_tools.slice(0, 7).map((tool, id) => (
                    <a
                      dangerouslySetInnerHTML={{
                        __html: tool.icons?.svg || "",
                      }}
                      key={id}
                      className={styles["project-tool"]}
                      data-label={tool.icons?.title || ""}
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default ProjectsPage;
