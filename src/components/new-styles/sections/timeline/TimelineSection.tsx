"use client";

import CreationOfAdam from "../../components/ascii/CreationOfAdam";
import TreeImage from "../../components/ascii/TreeImage";
import styles from "./TimelineSection.module.css";

const TimelineSection = () => {
  return (
    <>
      <section className={styles.container}>
        <CreationOfAdam className={styles["ascii-art"]} />
        <h2 className={styles["art-text"]}>
          "I know I’m supposed to hate humans, but there’s something about them.
          They don’t just survive. They discover, they create! Just look at what
          they do with food!"
          <br />
          <a href="https://www.imdb.com/title/tt0382932/" target="_blank">- Remy</a>
        </h2>
        <div className={styles["tree-container"]}>
          <TreeImage className={styles["ascii-tree"]} />
          <h2 className={styles["grid-title"]}>TIMELINE TREE</h2>
          <div className={styles["grid-box"]}>
            <p className={styles["box-title"]}>2001</p>
            <p className={styles["box-text"]}>Birth</p>
          </div>
          <div className={styles["grid-box"]}>
            <p className={styles["box-title"]}>2006-2012</p>
            <p className={styles["box-text"]}>School</p>
            <p className={styles["box-text"]}>
              <em>Life Goal: Become a Clown</em>
            </p>
          </div>
          <div className={styles["grid-box"]}>
            <p className={styles["box-title"]}>2012-2018</p>
            <p className={styles["box-text"]}>High-School</p>
            <p className={styles["box-text"]}>
              <em>Work: Lifeguard</em>
            </p>
            <p className={styles["box-text"]}>
              <em>Life Goal: Compose a Symphony</em>
            </p>
          </div>
          <div className={styles["grid-box"]}>
            <p className={styles["box-title"]}>2018-2020</p>
            <p className={styles["box-text"]}>
              <em>Work: Railway Labourer</em>
            </p>
            <p className={styles["box-text"]}>
              <em>Life Goal: Film a Masterpiece</em>
            </p>
          </div>
          <div className={styles["grid-box"]}>
            <p className={styles["box-title"]}>2020-2024</p>
            <p className={styles["box-text"]}>
              <em>Work: Film Crew</em>
            </p>
            <p className={styles["box-text"]}>
              <em>Life Goal: Raise Film in Canada</em>
            </p>
          </div>
          <div className={styles["grid-box"]}>
            <p className={styles["box-title"]}>2024-Now</p>
            <p className={styles["box-text"]}>
              <em>Work: Receptionist</em>
            </p>
            <p className={styles["box-text"]}>
              <em>Life Goal: Revolutionize Robotics</em>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default TimelineSection;
