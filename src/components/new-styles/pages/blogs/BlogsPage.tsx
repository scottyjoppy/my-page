"use client";

import { useBlogs } from "@/composables/useBlogs";
import { useState } from "react";
import styles from "./BlogsPage.module.css";

export default function BlogsPage() {
  const { blogs } = useBlogs();
  const [blogAmount, setBlogAmount] = useState(3);

  return (
    <>
      <section className={styles["page-container"]}>
        <h1>Blogs</h1>
        {blogs.length === 0 ? (
          <div>No Blogs</div>
        ) : (
          blogs.slice(0, blogAmount).map((blog) => (
            <>
              <h2 key={blog.id}>{blog.title}</h2>
              <div>{blog.description}</div>
            </>
          ))
        )}
      </section>
    </>
  );
}
