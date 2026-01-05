"use client";

import { useAboutBucket } from "@/composables/useBuckets";
import ImageBorder from "../../components/ascii/ImageBorder";
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
              <img src={files[1].url} className={styles.image} />
              <ImageBorder className={styles["ascii-pos"]} />
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default HomePage;
