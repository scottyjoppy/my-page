"use client";

import { JsonBlock } from "@/lib/jsonToMd";
import { createClient } from "@/lib/supabase/client";
import { PostgrestError } from "@supabase/supabase-js";
import { useEffect, useState } from "react";
import { Database } from "types/database.types";

export type Series = Database["public"]["Tables"]["series"]["Row"];

export type BlogWithSeries = Omit<
  Database["public"]["Tables"]["blogs"]["Row"],
  "blog_series"
> & {
  blog_series: Series | null;
};

const supabase = createClient()

export function useBlogs() {
  const [blogs, setBlogs] = useState<BlogWithSeries[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<PostgrestError | null>(null);

  const loadBlogs = async () => {
    setLoading(true);

    const { data } = await supabase
      .from("blogs")
      .select("*, blog_series:series(*)")
      .order("date", { ascending: false });

    if (error) {
      setError(error);
      setLoading(false);
      return;
    }

    setBlogs(data ?? []);
    setLoading(false);
  };

  const updateBlogs = async (blogId: number, content: JsonBlock[]) => {
    const { error } = await supabase
      .from("blogs")
      .update({ content })
      .eq("id", blogId);

    if (error) {
      setError(error);
      throw error;
    }

    console.log("setting:", content)

    setBlogs((prev) =>
      prev.map((b) => (b.id === blogId ? { ...b, content } : b))
    );
  };

  useEffect(() => {
    loadBlogs();
  }, []);

  return { blogs, loading, error, reload: loadBlogs, updateBlogs };
}
