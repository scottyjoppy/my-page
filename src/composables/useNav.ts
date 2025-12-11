"use client";

import { supabase } from "@/lib/supabaseClient";
import { PostgrestError } from "@supabase/supabase-js";
import { useEffect, useState } from "react";
import { Database } from "types/database.types";

type Page = Database["public"]["Tables"]["nav"]["Row"];

export function useNav() {
  const [pages, setPages] = useState<Page[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<PostgrestError | null>(null);

  const loadPages = async () => {
    setLoading(true);
    const { data, error } = await supabase.from("nav").select("*");

    if (error) {
      console.error("Error loading nav:", error);
      setError(error);
      setLoading(false);
      return;
    }

    setPages(data);
    setLoading(false);
  };

  useEffect(() => {
    loadPages();
  }, []);

  return { pages, loading, error, reload: loadPages };
}
