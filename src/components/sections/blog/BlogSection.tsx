import getPostMetadata from "utils/getPostMetadata";
import styles from "./BlogSection.module.css";

const BlogSection = () => {
  const posts = getPostMetadata();

  return (
    <>
      <section className={styles.container}>
        <div className={styles["post-container"]}>
          {posts.splice(0, 3).map((post) => (
            <div className={styles["post-box"]} key={post.title}>
              <div className={styles["post-top"]}>
                <a
                  href={`/blogs/${post.slug}`}
                  className={styles["post-title"]}
                >
                  {post.title}
                </a>
              </div>
              <div className={styles["post-desc"]}>{post.description}</div>
              <div className={styles["post-date"]}>{post.date}</div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default BlogSection;
