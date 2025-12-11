"use client";

import { useIcons } from "@/composables/useIcons";
import styles from "./Footer.module.css";

export default function Footer() {
  const { icons, loading, error } = useIcons();

  if (loading) return <div>Loading…</div>;
  if (error) return <div>Failed to load icons</div>;

  return (
    <section className={styles["footer-container"]}>
      {icons.map((icon) => (
        <a
          key={icon.id}
          dangerouslySetInnerHTML={{ __html: icon.svg }}
          className={styles.icon}
          href={icon.link || ""}
          target="_blank"
        />
      ))}
    </section>
  );
}
