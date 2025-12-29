"use client";

import { createClient } from "@/lib/supabase/client";
import { PostgrestError } from "@supabase/supabase-js";
import { useEffect, useState } from "react";
import { Database } from "types/database.types";

type Nav = Database["public"]["Tables"]["nav"]["Row"];

const supabase = createClient()

export function useNav() {
  const [navs, setNavs] = useState<Nav[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<PostgrestError | null>(null);

  const loadNav = async () => {
    setLoading(true);
    const { data, error } = await supabase.from("nav").select("*");

    if (error) {
      console.error("Error loading nav:", error);
      setError(error);
      setLoading(false);
      return;
    }

    setNavs(data);
    setLoading(false);
  };

  useEffect(() => {
    loadNav();
  }, []);

  return { navs, loading, error, reload: loadNav };
}
