import { useEffect, useState } from "react";

interface ShapePropsSize {
  className?: string;
  size: number | string;
  height?: never;
  lWidth?: never;
  rWidth?: never;
}

interface ShapePropsWH {
  className?: string;
  lWidth: number | string;
  rWidth: number | string;
  height: number | string;
  size?: never
}

const IsometricShape: React.FC<ShapeProps> = ({ className, ...props }) => {
  if ('size' in props) {
    // Handle size-based shape
    return <div className={className, size=100}>
>
</div>;
  } else {
    // Handle width-based shape
    return <div className={className, lWidth=100, rWidth=100, height=100}>
</div>;
  }
};

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
