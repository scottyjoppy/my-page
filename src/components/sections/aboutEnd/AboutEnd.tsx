"use client";

import CountBasie from "@/components/ascii/CountBasie";
import styles from "./AboutEnd.module.css";

const AboutEnd = () => {
  return (
    <>
      <section className={styles.container}>
        <CountBasie className={styles["ascii-art"]} />
        <h2 className={styles.title}>You can't force creativity. It's a living, breathing force that must be nurtured and allowed to flourish on its own terms.</h2>
      </section>
    </>
  );
};

export default AboutEnd;
