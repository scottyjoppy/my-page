"use client";

import { useAboutBucket } from "@/composables/useBuckets";
import Link from "next/link";
import styles from "./HomePage.module.css";

const HomePage = () => {
  const { files } = useAboutBucket();

  return (
    <>
      <section className={styles.container}>
        <div className={styles["welcome-container"]}>
          <div className={styles["welcome-text"]}>
            <h2 className="uppercase">Welcome</h2>
            <p>My name is Alexander Delisle</p>
            <p>I'm here to learn</p>
          </div>
          {files[1] && (
            <div className={styles["image-container"]}>
              <Link href="/about">
                <img src={files[1].url} className={styles.image} />
              </Link>
            </div>
          )}
        </div>
        <div className={styles["info-container"]}></div>
      </section>
    </>
  );
};

export default HomePage;
