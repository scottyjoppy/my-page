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
                <a href={`#${proj.project_name}`} className={styles.anchor}>
                  <h2 id={`${proj.project_name}`} className="underline">
                    {proj.project_name}
                  </h2>
                </a>
                <p>{proj.project_description}</p>
                <div className={styles["link-container"]}>
                  <a href={proj.github_repo || ""} target="_blank">
                    Github
                  </a>
                  {proj.project_link ? (
                    <a href={proj.project_link || ""} target="_blank">
                      Project
                    </a>
                  ) : (
                    ""
                  )}
                </div>
              </div>
              <div className={styles["icon-container"]}>
                <a
                  dangerouslySetInnerHTML={{
                    __html: proj.project_icon?.svg || "",
                  }}
                  target="_blank"
                  className={styles["project-icon"]}
                  href={proj.github_repo || ""}
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
