import { useEffect, useState } from "react";

function getWindowDimensions() {
  const hasWindow = typeof window !== "undefined";

  const width = hasWindow ? window.innerWidth : 0;
  const height = hasWindow ? window.innerHeight : 0;

  return {
    width,
    height,
  };
}

export function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
}
