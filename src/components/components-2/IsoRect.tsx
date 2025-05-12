import React from "react";

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
  size?: never;
}

type ShapeProps = ShapePropsSize | ShapePropsWH;

const IsometricShape: React.FC<ShapeProps> = ({ className, ...props }) => {
  let lWidth: number | string;
  let rWidth: number | string;
  let height: number | string;

  if ('size' in props) {
    const size = props.size ?? 100; // Default if undefined
    lWidth = rWidth = height = size;
  } else {
    lWidth = props.lWidth ?? 100;
    rWidth = props.rWidth ?? 100;
    height = props.height ?? 100;
  }

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
          height: `${lWidth}px`,
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