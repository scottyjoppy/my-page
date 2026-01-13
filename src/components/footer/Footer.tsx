"use client";

import { useFooter } from "@/composables/useFooter";
import { usePathname } from "next/navigation";
import styles from "./Footer.module.css";

export default function Footer() {
  const { footers } = useFooter();
  const pathname = usePathname();
  const switchColor = pathname !== "/projects";

  return (
    <footer
      className={
        switchColor ? styles["footer-container"] : styles["footer-container-2"]
      }
    >
      {footers.map((item) => (
        <a
          key={item.id}
          dangerouslySetInnerHTML={{ __html: item.icon_id?.svg || "" }}
          className={styles.icon}
          href={item.icon_id?.link || ""}
          target="_blank"
        />
      ))}
    </footer>
  );
}
