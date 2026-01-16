"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./Ascii.module.css";

type Props = {
  className?: string;
  parentRef: React.RefObject<HTMLElement | null>;
};

const ASCII_TILE =`
| \`--.___,-._      | \`--.___,-._      | \`--.___,-._      | \`--.    |
|,-.' \`.  /  _,'o ) ,-.' \`.  /  _,'o ) ,-.' \`.  /  _,'o ) ,-.' \`.  |
||__.-. \`' ,'    /  |__.-. \`' ,'    /  |__.-. \`' ,'    /  |__.-. \`'|
|,--. |  ,'     (___,--. |  ,'     (___,--. |  ,'     (___,--. |  ,|
|,--' |      _,-.___,--' |      _,-.___,--' |      _,-.___,--' |   |
|\\  ,' \\,-. ( o\`._  \\  ,' \`,-. ( o\`._  \\  ,' \\,-. ( o\`._  \\  ,' \`,-|
| \\' .-.__|  \\    \`. \`' .-.__|  \\    \`. \`' .-.__|  \\    \`. \`' .-.__|
|\`.  | ,--.___)     \`.  | ,--.___)     \`.  | ,--.___)     \`.  | ,--|`
    .trim()
    .split("\n");

const LINE_HEIGHT = 8;
const MIN_ROWS = 20;
const MAX_ROWS = 50000;
const FILL_RATIO = 1;

const FrogPattern = ({ className, parentRef }: Props) => {
  const [rows, setRows] = useState(MIN_ROWS);
  const preRef = useRef<HTMLPreElement>(null);

  useEffect(() => {
    const computeRows = () => {
      const height = parentRef.current?.offsetHeight ?? window.innerHeight;

      if (!height) return;

      const totalLines = Math.floor((height * FILL_RATIO) / LINE_HEIGHT);

      setRows(Math.max(MIN_ROWS, Math.min(totalLines, MAX_ROWS)));
    };

    computeRows();
    window.addEventListener("resize", computeRows);

    const resizeObserver = new ResizeObserver(computeRows);
    if (parentRef.current) {
      resizeObserver.observe(parentRef.current);
    }

    return () => {
      window.removeEventListener("resize", computeRows);
      resizeObserver.disconnect();
    };
  }, [parentRef]);

  const asciiArt = Array.from({ length: rows })
    .map((_, i) => ASCII_TILE[i % ASCII_TILE.length])
    .join("\n");

  return (
    <div className={`${className} absolute`} inert>
      <pre ref={preRef} className={styles["ascii-base"]}>
        {asciiArt}
      </pre>
    </div>
  );
};

export default FrogPattern;
