"use client";

import FalseMirror from "../../components/ascii/FalseMirror";
import styles from "./EndSection.module.css";

const TimelineSection = () => {
  return (
    <>
      <section className={styles.container}>
        <FalseMirror className={styles["ascii-eye"]} />
        <h2 className={styles.title}>
          Life Obliges me to do <br />
          <u>something</u>.
        </h2>
      </section>
    </>
  );
};

export default TimelineSection;
