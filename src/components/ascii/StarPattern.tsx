"use client";

import { useEffect, useState, useRef } from "react";
import styles from "./Ascii.module.css";

type Props = {
  className?: string;
  parentRef: React.RefObject<HTMLElement | null>;
};

const ROW_A = "_|_     _|_     _|_     _|_     _|_    ";
const ROW_B = " |       |       |       |       |     ";
const ROW_C = "    _|_     _|_     _|_     _|_     _|_";
const ROW_D = "     |       |       |       |       | ";

const PATTERN = [ROW_A, ROW_B, ROW_C, ROW_D];

const LINE_HEIGHT = 8; // ← Hardcoded like BrickPattern
const MIN_ROWS = 20;
const MAX_ROWS = 500;
const FILL_RATIO = 1;

const StarPattern = ({ className, parentRef }: Props) => {
  const [rows, setRows] = useState(MIN_ROWS);
  const preRef = useRef<HTMLPreElement>(null);

  useEffect(() => {
    const computeRows = () => {
      const height = parentRef.current?.offsetHeight ?? window.innerHeight;
      
      if (height === 0) return;

      const totalLines = Math.floor((height * FILL_RATIO) / LINE_HEIGHT);
      
      setRows(Math.max(MIN_ROWS, Math.min(totalLines, MAX_ROWS)));
    };

    computeRows();
    window.addEventListener("resize", computeRows);
    
    // ResizeObserver to catch parent size changes
    const resizeObserver = new ResizeObserver(computeRows);
    if (parentRef.current) {
      resizeObserver.observe(parentRef.current);
    }

    return () => {
      window.removeEventListener("resize", computeRows);
      resizeObserver.disconnect();
    };
  }, [parentRef]);

  const asciiArt = Array.from({ length: Math.max(rows, 1) })
    .map((_, i) => PATTERN[i % PATTERN.length])
    .join("\n");

  return (
    <div className={`${className} absolute`} inert>
      <pre ref={preRef} className={styles["ascii-base"]}>
        {asciiArt}
      </pre>
    </div>
  );
};

export default StarPattern;