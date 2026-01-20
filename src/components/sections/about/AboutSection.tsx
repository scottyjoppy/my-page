"use client";

import BrickPattern from "@/components/ascii/BrickPattern";
import { useAboutBucket } from "@/composables/useBuckets";
import Link from "next/link";
import { useRef } from "react";
import styles from "./AboutSection.module.css";

const AboutSection = () => {
  const { files } = useAboutBucket();
  const sectionRef = useRef<HTMLElement | null>(null);

  const birthDate = new Date("2001-04-04");
  const age = Math.floor((Date.now() - birthDate.getTime()) / 31557600000);

  const sections = [
    {
      imageIndex: "alex-budapest",
      imageSide: "right",
      content: (
        <>
          My name is Alexander Delisle. I'm a {age} year old Canadian living in
          Vienna. With that move came the start of my journey down software
          engineering.
        </>
      ),
    },
    {
      imageIndex: "alex-piano",
      imageSide: "left",
      content: (
        <>
          I studied film production and was a jack-of-all-trades on set. I love
          cameras, lighting, directing, writing, and video editing. But mainly
          the ability to tell stories.
        </>
      ),
    },
    {
      imageIndex: "alex-image",
      imageSide: "right",
      content: (
        <>
          Music has always been an important part of my life. I love piano and
          have been making songs from a very young age. In and out of school
          I've grown to love writing scores for short films. My graduating
          project was a{" "}
          <Link
            href="https://vimeo.com/720844027"
            target="_blank"
            className="font-bold hover:underline"
          >
            documentary
          </Link>{" "}
          about me creating a song.
        </>
      ),
    },
    {
      imageIndex: "alex-camera",
      imageSide: "left",
      content: (
        <>
          Now I enter my coding age. Ever since I discovered code I've been
          entranced by this amazing world of ones and zeroes. I'm excited to
          follow this path, and bring to life all the creations in my head.
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
            <span className="block group-hover:opacity-0 group-active:opacity-0">
              U
            </span>
            <span className="absolute inset-0 block opacity-0 group-hover:opacity-100 group-active:opacity-100">
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
      </div>
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
    </section>
  );
};

export default AboutSection;
