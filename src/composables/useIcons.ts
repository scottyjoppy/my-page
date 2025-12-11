"use client"

import { supabase } from "@/lib/supabaseClient";
import { PostgrestError } from "@supabase/supabase-js";
import { useEffect, useState } from "react";
import { Database } from "types/database.types";

type Icon = Database["public"]["Tables"]["icons"]["Row"];

export function useIcons() {
  const [icons, setIcons] = useState<Icon[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<PostgrestError | null>(null);

  const loadIcons = async () => {
    setLoading(true);
    const { data, error } = await supabase.from("icons").select("*");

    if (error) {
      console.error("Error loading icons:", error);
      setError(error);
      setLoading(false);
      return;
    }

    setIcons(data);
    setLoading(false);
  };

  useEffect(() => {
    loadIcons();
  }, []);

  return { icons, loading, error, reload: loadIcons };
}
