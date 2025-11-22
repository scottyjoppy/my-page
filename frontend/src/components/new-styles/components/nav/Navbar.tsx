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
            <div className={styles["dropdown-container-expand"]}>
              <svg
                onClick={() => setExpandNav((prev) => !prev)}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className={styles["exit-svg"]}
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M5.293 5.293a1 1 0 0 1 1.414 0L12 10.586l5.293-5.293a1 1 0 1 1 1.414 1.414L13.414 12l5.293 5.293a1 1 0 0 1-1.414 1.414L12 13.414l-5.293 5.293a1 1 0 0 1-1.414-1.414L10.586 12 5.293 6.707a1 1 0 0 1 0-1.414Z"
                />
              </svg>
              {menuItems.map((item, key) => {
                return (
                  <Link
                    href={item.href}
                    key={key}
                    className={styles["page-link"]}
                  >
                    <div>{item.label}</div>
                  </Link>
                );
              })}
            </div>
          )}
          <div className={styles["links-container"]}>
            {menuItems.map((item, key) => {
              return (
                <Link
                  href={item.href}
                  key={key}
                  className={styles["page-link"]}
                >
                  <div>{item.label}</div>
                </Link>
              );
            })}
          </div>
        </div>
      </nav>
    </>
  );
}
