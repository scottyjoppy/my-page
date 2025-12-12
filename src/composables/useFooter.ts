"use client";

import { supabase } from "@/lib/supabaseClient";
import { PostgrestError } from "@supabase/supabase-js";
import { useEffect, useState } from "react";
import { Database } from "types/database.types";

type Footer = Database["public"]["Tables"]["footer"]["Row"];

type FooterWithIcon = Footer & {
  icons: {
    id: number;
    svg: string;
    link: string | null;
  } | null;
};

export function useFooter() {
  const [footers, setFooters] = useState<FooterWithIcon[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<PostgrestError | null>(null);

  const loadFooter = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("footer")
      .select("id, order, icon_id, icons(*)")
      .order("order", { ascending: true });

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
