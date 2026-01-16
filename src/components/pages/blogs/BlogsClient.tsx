"use client";

import FrogPattern from "@/components/ascii/FrogPattern";
import { PostMetadata } from "@/components/interface/PostMetadata";
import { useRef, useState } from "react";
import styles from "./BlogsPage.module.css";

type Props = {
  blogs: PostMetadata[];
};

export default function BlogsClient({ blogs }: Props) {
  const [blogAmount, setBlogAmount] = useState(8);
  const sectionRef = useRef<HTMLElement | null>(null);

  return (
    <section ref={sectionRef} className={styles["container"]}>
      <h2 className={styles.title}>BLOGS</h2>
      <div className={styles["blogs-container"]}>
        {blogs.length === 0 ? (
          <div>No Blogs</div>
        ) : (
          blogs.slice(0, blogAmount).map((blog) => (
            <div key={blog.title} className={styles["blog-box"]}>
              <div className={styles["title-container"]}>
                <a href={`/blogs/${blog.slug}`} className={styles["blog-serie"]}>
                  C:\{blog.blogSeries}\{blog.slug}
                </a>
                <p className={styles["blog-date"]}>{blog.date}</p>
              </div>
              <h2 className={styles["blog-title"]}>{blog.title}</h2>
              <div className={styles["desc-container"]}>
                <p className={styles["blog-desc"]}>{blog.description}</p>
                <a href={`/blogs/${blog.slug}`} className={styles["read-btn"]}>
                  READ
                </a>
              </div>
            </div>
          ))
        )}

        {blogAmount < blogs.length && (
          <button
            onClick={() => setBlogAmount((prev) => prev + 5)}
            className={styles["more-button"]}
          >
            Load more
          </button>
        )}
      </div>
      <div className={styles["frog-wrapper"]} inert>
        <div className={styles["frog-container"]} inert>
          <FrogPattern
            className={styles["ascii-frog-r"]}
            parentRef={sectionRef}
          />
          <FrogPattern
            className={styles["ascii-frog-l"]}
            parentRef={sectionRef}
          />
        </div>
      </div>
    </section>
  );
}
