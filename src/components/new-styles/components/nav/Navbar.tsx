"use client";

import { menuItems } from "@/components/navbar/menuItems";
import Link from "next/link";
import { useState } from "react";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [expandNav, setExpandNav] = useState(false);

  return (
    <>
      <nav className={styles.nav}>
        <Link href="/" className={styles.icon}>
          <span className={styles["icon-text"]}>ALEX</span>
        </Link>
        <div className={styles["links-container-wrapper"]}>
          {!expandNav ? (
            <div
              className={styles["dropdown-container"]}
              onClick={() => setExpandNav((prev) => !prev)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className={styles["dropdown-svg"]}
              >
                <g id="_icons">
                  <path d="M5 7h14c.6 0 1-.4 1-1s-.4-1-1-1H5c-.6 0-1 .4-1 1s.4 1 1 1zM5 13h14c.6 0 1-.4 1-1s-.4-1-1-1H5c-.6 0-1 .4-1 1s.4 1 1 1zM5 19h14c.6 0 1-.4 1-1s-.4-1-1-1H5c-.6 0-1 .4-1 1s.4 1 1 1z" />
                </g>
              </svg>
            </div>
          ) : (
            <div onClick={() => setExpandNav((prev) => !prev)}>something</div>
          )}
          <div
            className={`${
              expandNav
                ? styles["links-container-expand"]
                : styles["links-container"]
            }`}
          >
            {menuItems.map((item, key) => {
              return (
                <Link
                  href={item.href}
                  key={key}
                  className={styles["page-link"]}
                >
                  <h3>{item.label}</h3>
                </Link>
              );
            })}
          </div>
        </div>
      </nav>
    </>
  );
}
