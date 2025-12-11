import Image from "next/image";
import Link from "next/link";
import styles from "./AboutPage.module.css";

export default function AboutPage() {
  return (
    <>
      <section className={styles["page-container"]}>
        <h1 className={styles.title}>ABOUT PAGE</h1>
        <div className={styles["content-row"]}>
          <p className={styles["text-block"]}>
            My name is Alexander Delisle. I'm 24, and I relocated to Vienna from
            Canada last year. I'm transitioning into software engineering and am
            currently educating myself on the programming fundamentals,
            security, web design, and data storage.
          </p>
          <img
            alt="Alexander Delisle"
            src="/images/alex-image.jpg"
            className={styles.image}
          />
        </div>
        <div className={styles["content-row"]}>
          <img
            alt="Alexander Delisle"
            src="/images/alex-camera.jpg"
            className={styles.image}
          />
          <p className={styles["text-block"]}>
            I studied film production and wore many hats on and off set. I love
            cameras, lighting, directing, writing, but was a video editor more
            than anything.
          </p>
        </div>
        <div className={styles["content-row"]}>
          <p className={styles["text-block"]}>
            Aside from film, music has always been an important part of my life.
            I love piano and have been making songs from a very young age. In
            and out of school I've grown to love making scores for short films.
            My final project was a{" "}
            <Link
              href="https://vimeo.com/720844027"
              target="_blank"
              className="font-bold hover:underline"
            >
              documentary
            </Link>{" "}
            about me making a song.
          </p>
          <img
            alt="Alexander Delisle"
            src="/images/alex-piano.png"
            className={styles.image}
          />
        </div>
      </section>
    </>
  );
}
