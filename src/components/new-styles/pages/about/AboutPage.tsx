"use client"

import { useAboutBucket } from "@/composables/useBuckets";
import Link from "next/link";
import styles from "./AboutPage.module.css";

const AboutPage = () => {
  const { files } = useAboutBucket();

  const sections = [
    {
      imageIndex: 1,
      imageSide: "right",
      content: (
        <>
          My name is Alexander Delisle. I'm 24, and I relocated to Vienna from
          Canada last year. I'm transitioning into software engineering and am
          currently educating myself on the programming fundamentals, security,
          web design, and data storage.
        </>
      ),
    },
    {
      imageIndex: 2,
      imageSide: "left",
      content: (
        <>
          I studied film production and wore many hats on and off set. I love
          cameras, lighting, directing, writing, but was a video editor more than
          anything.
        </>
      ),
    },
    {
      imageIndex: 3,
      imageSide: "right",
      content: (
        <>
          Aside from film, music has always been an important part of my life. I
          love piano and have been making songs from a very young age. In and out
          of school I've grown to love making scores for short films. My final
          project was a{" "}
          <Link
            href="https://vimeo.com/720844027"
            target="_blank"
            className="font-bold hover:underline"
          >
            documentary
          </Link>{" "}
          about me making a song.
        </>
      ),
    },
  ];

  return (
    <section className={styles["page-container"]}>
      <h1 className={styles.title}>ABOUT PAGE</h1>

      {sections.map((section, i) => {
        const image = files[section.imageIndex];

        return (
          <div key={i} className={styles["content-row"]}>
            {section.imageSide === "left" && image && (
              <img
                src={image.url}
                alt="Alexander Delisle"
                className={styles.image}
              />
            )}

            <p className={styles["text-block"]}>{section.content}</p>

            {section.imageSide === "right" && image && (
              <img
                src={image.url}
                alt="Alexander Delisle"
                className={styles.image}
              />
            )}
          </div>
        );
      })}
    </section>
  );
};

export default AboutPage;
