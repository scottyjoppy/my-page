"use client";

import { supabase } from "@/lib/supabase/client";
import { PostgrestError } from "@supabase/supabase-js";
import { useEffect, useState } from "react";
import { Database } from "types/database.types";

export type Icons = Database["public"]["Tables"]["icons"]["Row"];

export type FooterWithIcon = Omit<
  Database["public"]["Tables"]["footer"]["Row"],
  "icon_id"
> & {
  icon_id: Icons | null;
};

export function useFooter() {
  const [footers, setFooters] = useState<FooterWithIcon[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<PostgrestError | null>(null);

  const loadFooter = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("footer")
      .select("*, icon_id:icons(*)")
      .order("display_order", { ascending: true });

    if (error) {
      console.error("Error loading footer:", error);
      setError(error);
      setLoading(false);
      return;
    }

    setFooters(data);
    setLoading(false);
  };

  useEffect(() => {
    loadFooter();
  }, []);

  return { footers, loading, error, reload: loadFooter };
}
