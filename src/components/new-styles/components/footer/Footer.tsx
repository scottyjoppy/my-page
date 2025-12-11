"use client";

import { useIcons } from "@/composables/useIcons";
import styles from "./Footer.module.css";

export default function Footer() {
  const { icons } = useIcons();

  return (
    <footer className={styles["footer-container"]}>
      {icons.map((icon) => (
        <a
          key={icon.id}
          dangerouslySetInnerHTML={{ __html: icon.svg }}
          className={styles.icon}
          href={icon.link || ""}
          target="_blank"
        />
      ))}
    </footer>
  );
}
