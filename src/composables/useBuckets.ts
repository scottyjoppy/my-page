"use client"

import { createClient } from "@/lib/supabase/client";
import { useEffect, useState } from "react";

const supabase = createClient();

export const useAboutBucket = () => {
  const [files, setFiles] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    const fetchFiles = async () => {
      try {
        setLoading(true);

        const { data, error } = await supabase.storage
          .from("about_page")
          .list("public");

        if (error) throw error;

        const filesWithUrls =
          data?.map((file) => ({
            ...file,
            url: supabase.storage
              .from("about_page")
              .getPublicUrl(`public/${file.name}`).data.publicUrl,
          })) ?? [];

        setFiles(filesWithUrls);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchFiles();
  }, []);

  return { files, loading, error };
};
