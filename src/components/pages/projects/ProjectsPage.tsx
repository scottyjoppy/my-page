"use client";

import StarPattern from "@/components/ascii/StarPattern";
import { useProjects } from "@/composables/useProjects";
import { useRef } from "react";
import styles from "./ProjectsPage.module.css";

const ProjectsPage = () => {
  const { projects } = useProjects();
  const sectionRef = useRef<HTMLElement | null>(null);

  return (
    <>
      <section ref={sectionRef} className={styles["page-container"]}>
        <h2 className={styles.title}>PROJECTS</h2>
        <div className={styles["project-container"]}>
          {projects.map((proj) => (
            <div key={proj.id} className={styles["project-row"]}>
              <div className={styles["project-info"]}>
                <a href={`#${proj.project_name}`} className={styles.anchor}>
                  <h2
                    id={`${proj.project_name}`}
                    className={styles["project-name"]}
                  >
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
        <div className={styles["star-container"]} inert>
          <StarPattern
            className={styles["ascii-star-r"]}
            parentRef={sectionRef}
          />
          <StarPattern
            className={styles["ascii-star-l"]}
            parentRef={sectionRef}
          />
        </div>
      </section>
    </>
  );
};

export default ProjectsPage;
