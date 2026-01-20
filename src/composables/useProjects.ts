"use client";

import { createClient } from "@/lib/supabase/client";
import { PostgrestError } from "@supabase/supabase-js";
import { useEffect, useState } from "react";
import { Database } from "types/database.types";

type Icon = Database["public"]["Tables"]["icons"]["Row"];

type ProjectWithIcons = {
  id: number;
  project_name: string;
  project_description: string | null;
  project_link: string | null;
  github_repo: string | null;
  display_order: number | null;
  project_icon: Icon | null;
  project_tools: {
    icons: Icon;
  }[];
};

const supabase = createClient();

export function useProjects() {
  const [projects, setProjects] = useState<ProjectWithIcons[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<PostgrestError | null>(null);

  const loadProjects = async () => {
    setLoading(true);

    const { data } = await supabase
      .from("projects")
      .select(
        `
    id,
    project_name,
    project_description,
    project_link,
    github_repo,
    display_order,
    project_icon:icons(*),
    project_tools:project_tools(
      icons(*)
    )
  `,
      )
      .not("display_order", "is", null)
      .order("display_order", { ascending: true });

    if (error) {
      setError(error);
      setLoading(false);
      return;
    }

    const transformedData: ProjectWithIcons[] = (data ?? []).map((project) => ({
      ...project,
      project_icon: Array.isArray(project.project_icon)
        ? project.project_icon[0] ?? null
        : project.project_icon,
      project_tools: (project.project_tools ?? []).map((tool: any) => ({
        icons: Array.isArray(tool.icons) ? tool.icons[0] : tool.icons,
      })),
    }));

    setProjects(transformedData);
    setLoading(false);
  };

  useEffect(() => {
    loadProjects();
  }, []);

  return { projects, loading, error, reload: loadProjects };
}
