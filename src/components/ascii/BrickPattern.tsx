"use client";

import { useEffect, useState } from "react";
import styles from "./Ascii.module.css";

type Props = {
  className?: string;
  parentRef: React.RefObject<HTMLElement | null>;
};

const ROW_A = "|_|___|___|___|___|___|___|___|___|___|";
const ROW_B = "|___|___|___|___|___|___|___|___|___|_|";

const LINE_HEIGHT = 8;
const MIN_ROWS = 20;
const MAX_ROWS = 500;

const BrickPattern = ({ className, parentRef }: Props) => {
  const [rows, setRows] = useState(MIN_ROWS);

  useEffect(() => {
    const computeRows = () => {
      const height = parentRef.current?.offsetHeight ?? window.innerHeight;
      const next = Math.floor(height / LINE_HEIGHT);
      setRows(Math.max(MIN_ROWS, Math.min(next, MAX_ROWS)));
    };

    computeRows();
    window.addEventListener("resize", computeRows);
    return () => window.removeEventListener("resize", computeRows);
  }, [parentRef]);

  const asciiArt =
    " _____________________________________\n" +
    Array.from({ length: rows })
      .map((_, i) => (i % 2 === 0 ? ROW_A : ROW_B))
      .join("\n");

  return (
    <div className={`${className} absolute`} inert>
      <pre className={styles["ascii-bg"]}>{asciiArt}</pre>
    </div>
  );
};

export default BrickPattern;
