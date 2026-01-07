"use client";

import CreationOfAdam from "../../components/ascii/CreationOfAdam";
import DirectionalBorder from "../../components/ascii/DirectionalBorder";
import styles from "./TimelineSection.module.css";

const TimelineSection = () => {
  return (
    <>
      <section className={styles.container}>
        <DirectionalBorder className={styles["ascii-border"]}/>
        <CreationOfAdam className={styles["ascii-art"]} />
      </section>
    </>
  );
};

export default TimelineSection;
