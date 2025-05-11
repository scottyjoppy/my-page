import { useEffect, useState } from "react";

interface ShapeProps {
  className?: string;
}

const IsometricShape = ({ className }: ShapeProps) => {
  const [dimensions, setDimensions] = useState({
    width: typeof window !== "undefined" ? window.innerWidth : 100,
    height: typeof window !== "undefined" ? window.innerHeight : 100,
  });

  useEffect(() => {
    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className={`relative ${className}`}>
      <div
        className="absolute w-[100px] h-[100px] bg-[#999]"
        style={{
          transformOrigin: "0 0",
          transform: "rotate(-30deg) skewX(-30deg) scaleY(0.864)",
        }}
      ></div>
      <div
        className="absolute w-[100px] bg-[#aaa]"
        style={{
          height: `${dimensions.width}px`, // Still dimension width, rotation is weird
          transformOrigin: "0 0",
          transform: "rotate(90deg) skewX(-30deg) scaleY(0.864)",
        }}
      ></div>
      <div
        className="absolute h-[100px] bg-[#ccc]"
        style={{
          width: `${dimensions.width}px`,
          transformOrigin: "0 0",
          transform: "rotate(210deg) skew(-30deg) scaleY(0.864)",
        }}
      ></div>
    </div>
  );
};

export default IsometricShape;
