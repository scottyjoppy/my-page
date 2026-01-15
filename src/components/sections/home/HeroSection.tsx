"use client";

import RomanCol from "@/components/ascii/RomanCol";
import Footer from "@/components/footer/Footer";
import { useAboutBucket } from "@/composables/useBuckets";
import { useRef } from "react";
import styles from "./HeroSection.module.css";

const HeroSection = () => {
  const { files } = useAboutBucket();

  const sectionRef = useRef<HTMLElement | null>(null);

  return (
    <>
      <section ref={sectionRef} className={styles.container}>
        <div className={styles["welcome-container"]}>
          <h2 className={styles.title}>Welcome</h2>
          <div className={styles["welcome-text"]}>
            <p className={`${styles["small-p"]} text-left`}>
              You've reached the personal page of this guy ====={">"}
            </p>
            {files && (
              <div className={styles["image-container"]}>
                <img src={files["alex-magic"]} className={styles.image} />
              </div>
            )}
            <p className={`${styles["small-p"]} text-right`}>
              My chunk of digital land to share blogs, projects, and anything
              else I think is cool
            </p>
          </div>
        </div>
        <Footer />
        <div className={styles["col-container"]}>
          <RomanCol
            className={styles["ascii-col-pos-l"]}
            parentRef={sectionRef}
          />
          <RomanCol
            className={styles["ascii-col-pos-r"]}
            parentRef={sectionRef}
          />
        </div>
      </section>
    </>
  );
};

export default HeroSection;
