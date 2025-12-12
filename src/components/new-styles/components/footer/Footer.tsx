"use client";

import { useFooter } from "@/composables/useFooter";
import styles from "./Footer.module.css";

export default function Footer() {
  const { footers } = useFooter();

  return (
    <footer className={styles["footer-container"]}>
      {footers.map((item) => (
        <a
          key={item.id}
          dangerouslySetInnerHTML={{ __html: item.icons?.svg || "" }}
          className={styles.icon}
          href={item.icons?.link || ""}
          target="_blank"
        />
      ))}
    </footer>
  );
}
