"use client";

import AlexPiano from "@/components/ascii/AlexPiano";
import styles from "./AboutEnd.module.css";

const AboutEnd = () => {
  return (
    <>
      <section className={styles.container}>
        <AlexPiano className={styles["ascii-art"]} />
        <h2 className={styles.title}>
          You can't force creativity.
          <br />
          <br />
          It's a living, breathing force that must be
          <br />
          nurtured and allowed to flourish <strong>on its own</strong> terms.
          <br />
          <br />
          - Count Basie
        </h2>
      </section>
    </>
  );
};

export default AboutEnd;
