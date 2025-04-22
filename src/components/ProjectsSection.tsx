import Link from "next/link";
import GridSectionCenterFull from "./GridSectionCenterFull";
import { projectType } from "./projects/projectType";

export default function ProjectSection({
  children,
  project,
}: {
  children: React.ReactNode;
  project: projectType;
}) {
  return (
    <>
      <GridSectionCenterFull>
        <div className="flex flex-col w-full h-full items-center justify-center gap-5">
          <div className="flex items-center justify-center">
            <Link href={project.gLink} target="_blank">
              <div className="flex flex-col items-center gap-2 hover:text-primary/80 transition-all hover:scale-105">
                {children}
              </div>
            </Link>
          </div>
          <div className="flex gap-4">
            {project.tech.map((icon, index) => (
              <div
                key={index}
                className="relative flex flex-col items-center [&>h3]:opacity-0 hover:[&>h3]:opacity-100 [&>h3]:transition-opacity"
              >
                {icon}
              </div>
            ))}
          </div>
        </div>
      </GridSectionCenterFull>
      <GridSectionCenterFull colSpan={{ lg: 2, md: 1 }}>
        <div className="flex w-xl">
            <div className="flex flex-col gap-2">
                <h3 className="text-2xl">{project.title}</h3>
              <h2>Description:</h2>
              <p className="max-w-xl text-foreground">{project.description} </p>
              <div className="flex gap-3">
                <Link
                  href={project.pLink}
                  className="font-bold hover:underline"
                  target="_blank"
                >
                  Project
                </Link>
                <Link
                  href={project.gLink}
                  className="font-bold hover:underline"
                  target="_blank"
                >
                  GitHub
                </Link>
              </div>
            </div>
        </div>
      </GridSectionCenterFull>
    </>
  );
}
