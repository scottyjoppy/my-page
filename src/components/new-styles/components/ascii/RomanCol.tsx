"use client";

import { useEffect, useState } from "react";
import styles from "./Ascii.module.css";

type Props = {
  className?: string;
  parentRef: React.RefObject<HTMLElement | null>;
};

const PIPE_ROW = "     ||||||||||||";

const LINE_HEIGHT = 16;
const FIXED_LINES = 7; // cap + base
const MIN_ROWS = 6;
const MAX_ROWS = 480;

const RomanCol = ({ className, parentRef }: Props) => {
  const [rows, setRows] = useState(12);

  useEffect(() => {
    if (!parentRef?.current) return;

    const computeRows = () => {
      const height = parentRef.current!.offsetHeight;
      const available = height - FIXED_LINES * LINE_HEIGHT;

      const next = Math.floor(available / LINE_HEIGHT);
      setRows(Math.max(MIN_ROWS, Math.min(next, MAX_ROWS)));
    };

    computeRows();

    const observer = new ResizeObserver(computeRows);
    observer.observe(parentRef.current);

    return () => observer.disconnect();
  }, [parentRef]);

  const asciiArt = `
    ______________
   (_,..........,_)
${Array.from({ length: rows })
  .map(() => PIPE_ROW)
  .join("\n")}
    <____________>
      )        (
    _/__________\\_
  _/______________\\_
 |__________________|`;

  return (
    <div className={`${className} absolute`}>
      <pre className={styles["ascii-bg"]}>{asciiArt}</pre>
    </div>
  );
};

export default RomanCol;
