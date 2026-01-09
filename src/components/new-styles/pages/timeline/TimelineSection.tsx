"use client";

import CreationOfAdam from "../../components/ascii/CreationOfAdam";
import DirectionalBorder from "../../components/ascii/DirectionalBorder";
import TreeImage from "../../components/ascii/TreeImage";
import styles from "./TimelineSection.module.css";

const TimelineSection = () => {
  return (
    <>
      <section className={styles.container}>
        <CreationOfAdam className={styles["ascii-art"]} />
        <div className={styles["tree-container"]}>
          <p className={styles["grid-box"]}>Thing 1</p>
          <p className={styles["grid-box"]}>Thing 2</p>
          <p className={styles["grid-box"]}>Thing 3</p>
          <TreeImage className={styles["ascii-tree"]} />
        </div>
      </section>
    </>
  );
};

export default TimelineSection;
