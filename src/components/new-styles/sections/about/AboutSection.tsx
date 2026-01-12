"use client";

import { useAboutBucket } from "@/composables/useBuckets";
import Link from "next/link";
import { useRef } from "react";
import BrickPattern from "../../components/ascii/BrickPattern";
import styles from "./AboutSection.module.css";

const AboutSection = () => {
  const { files } = useAboutBucket();
  const sectionRef = useRef<HTMLElement | null>(null);

  const sections = [
    {
      imageIndex: "alex-budapest",
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
      imageIndex: "alex-piano",
      imageSide: "left",
      content: (
        <>
          I studied film production and wore many hats on and off set. I love
          cameras, lighting, directing, writing, but was a video editor more
          than anything.
        </>
      ),
    },
    {
      imageIndex: "alex-image",
      imageSide: "right",
      content: (
        <>
          Aside from film, music has always been an important part of my life. I
          love piano and have been making songs from a very young age. In and
          out of school I've grown to love making scores for short films. My
          final project was a{" "}
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
    <section ref={sectionRef} className={styles["container"]}>
      <div className={styles["about-container"]}>
        <h1 className={`${styles.title}`}>
          ABO
          <span className="relative inline-block w-[1ch] group">
            <span className="block group-hover:opacity-0">U</span>
            <span className="absolute inset-0 block opacity-0 group-hover:opacity-100">
              O
            </span>
          </span>
          T
        </h1>
        {sections.map((section, i) => {
          const image = files[section.imageIndex];
          return (
            <div key={i} className={styles["content-row"]}>
              {section.imageSide === "left" && image && (
                <img
                  src={image}
                  alt="Alexander Delisle"
                  className={styles.image}
                />
              )}
              <p className={styles["text-block"]}>{section.content}</p>
              {section.imageSide === "right" && image && (
                <img
                  src={image}
                  alt="Alexander Delisle"
                  className={styles.image}
                />
              )}
            </div>
          );
        })}
        <div className={styles["brick-container"]} inert>
          <BrickPattern
            className={styles["ascii-brick-r"]}
            parentRef={sectionRef}
          />
          <BrickPattern
            className={styles["ascii-brick-l"]}
            parentRef={sectionRef}
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
