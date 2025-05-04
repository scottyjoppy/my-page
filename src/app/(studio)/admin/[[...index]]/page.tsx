"use client";

import { NextStudio } from "next-sanity/studio";
import { useState } from "react";
import config from "../../../../../sanity.config";

export default function AdminPage() {
  const [loading, setLoading] = useState(false);

  const handleCreateBlogPost = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/create-blog", {
        method: "POST",
      });
      const data = await res.json();

      if (data.success) {
        alert("Blog post created!");
        console.log(data.result);
      } else {
        throw new Error(data.error);
      }
    } catch (err) {
      console.error("Error creating blog post:", err);
      alert("Failed to create blog post.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <button
        onClick={handleCreateBlogPost}
        disabled={loading}
        className="bg-blue-600 text-white px-4 py-2 rounded m-4"
      >
        {loading ? "Creating..." : "Create Blog Post"}
      </button>
      <NextStudio config={config} />
    </>
  );
}
