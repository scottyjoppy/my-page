"use client";

import { useEffect, useState, useRef } from "react";
import styles from "./Ascii.module.css";

type Props = {
  className?: string;
  parentRef: React.RefObject<HTMLElement | null>;
};

const PIPE_ROW = "     ||||||||||||";

const MIN_ROWS = 6;
const MAX_ROWS = 480;

const RomanCol = ({ className, parentRef }: Props) => {
  const [rows, setRows] = useState(MIN_ROWS);
  const preRef = useRef<HTMLPreElement>(null);

  useEffect(() => {
    const computeRows = () => {
      if (!preRef.current) return;
      
      // Measure the actual rendered line height
      const computedStyle = window.getComputedStyle(preRef.current);
      const fontSize = parseFloat(computedStyle.fontSize);
      const lineHeight = parseFloat(computedStyle.lineHeight);
      
      // Use whichever is valid (lineHeight might be 'normal')
      const actualLineHeight = isNaN(lineHeight) ? fontSize : lineHeight;
      
      const height = parentRef.current?.offsetHeight ?? window.innerHeight;
      const totalLines = Math.floor(height / actualLineHeight);
      const next = totalLines - 6; // subtract fixed lines (cap + base)
      setRows(Math.max(MIN_ROWS, Math.min(next, MAX_ROWS)));
    };

    computeRows();
    window.addEventListener("resize", computeRows);
    
    // Also recompute when fonts load
    document.fonts.ready.then(computeRows);
    
    return () => window.removeEventListener("resize", computeRows);
  }, [parentRef]);

  const asciiArt = `    ______________
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
    <div className={`${className} absolute`} inert>
      <pre ref={preRef} className={styles["ascii-bg"]}>{asciiArt}</pre>
    </div>
  );
};

export default RomanCol;