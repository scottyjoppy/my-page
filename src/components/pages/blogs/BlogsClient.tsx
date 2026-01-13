"use client";

import { PostMetadata } from "@/components/interface/PostMetadata";
import { useState } from "react";
import styles from "./BlogsPage.module.css";

type Props = {
  blogs: PostMetadata[];
};

export default function BlogsClient({ blogs }: Props) {
  const [blogAmount, setBlogAmount] = useState(3);

  return (
    <section className={styles["page-container"]}>
      <h1>Blogs</h1>

      {blogs.length === 0 ? (
        <div>No Blogs</div>
      ) : (
        blogs.slice(0, blogAmount).map((blog) => (
          <div key={blog.title}>
            <h2>{blog.title}</h2>
            <div>{blog.description}</div>
          </div>
        ))
      )}

      {blogAmount < blogs.length && (
        <button onClick={() => setBlogAmount((prev) => prev + 3)}>
          Load more
        </button>
      )}
    </section>
  );
}
