import { useEffect, useState } from "react";

interface ShapeProps {
  className?: string;
size?: string;
lWidth?: string;
rWidth?: string;
height?: string;
}

const IsometricShape = ({ className, size="100" }: ShapeProps) => {
            
  return (
    <div className={`relative ${className}`}>
      <div
        className="absolute bg-[#999]"
        style={{
          width: `${rWidth}px`,
          height: `${height}px`,
          transformOrigin: "0 0",
          transform: "rotate(-30deg) skewX(-30deg) scaleY(0.864)",
        }}
      ></div>
      <div
        className="absolute bg-[#aaa]"
        style={{
          height: `${lWidth}px`, // Still dimension width, rotation is weird
          width: `${height}px`,
          transformOrigin: "0 0",
          transform: "rotate(90deg) skewX(-30deg) scaleY(0.864)",
        }}
      ></div>
      <div
        className="absolute bg-[#ccc]"
        style={{
          width: `${lWidth}px`,
          height: `${height}px`,
          transformOrigin: "0 0",
          transform: "rotate(210deg) skew(-30deg) scaleY(0.864)",
        }}
      ></div>
    </div>
  );
};

export default IsometricShape;
