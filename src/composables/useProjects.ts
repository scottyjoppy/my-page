"use client";

import { supabase } from "@/lib/supabaseClient";
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
  order: number;
  project_icon: Icon | null;
  project_tools: {
    icons: Icon;
  }[];
};

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
    order,
    project_icon:icons(*),
    project_tools:project_tools(
      icons(*)
    )
  `
      )
      .order("order", { ascending: true });

    if (error) {
      setError(error);
      setLoading(false);
      return;
    }

    setProjects(data ?? []);
    setLoading(false);
  };

  useEffect(() => {
    loadProjects();
  }, []);

  return { projects, loading, error, reload: loadProjects };
}
