"use client";

import FalseMirror from "@/components/ascii/FalseMirror";
import styles from "./EndSection.module.css";

const EndSection = () => {
  return (
    <>
      <section className={styles.container}>
        <FalseMirror className={styles["ascii-eye"]} />
        <h2 className={styles.title}>
          Life Obliges me to do <br />
          <br/>
          <strong><u>something</u></strong>.
          <br/>
          <br/>
          - René Magritte
        </h2>
      </section>
    </>
  );
};

export default EndSection;
