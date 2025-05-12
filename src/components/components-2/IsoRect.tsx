import React from "react";

interface ShapePropsSize {
  children?: React.ReactNode;
  className?: string;
  size: number | string;
  height?: never;
  lWidth?: never;
  rWidth?: never;
  face?: "left" | "right" | "top"; // Added "top"
}

interface ShapePropsWH {
  children?: React.ReactNode;
  className?: string;
  lWidth: number | string;
  rWidth: number | string;
  height: number | string;
  size?: never;
  face?: "left" | "right" | "top"; // Added "top"
}

type ShapeProps = ShapePropsSize | ShapePropsWH;

const IsometricShape: React.FC<ShapeProps> = ({
  children,
  className,
  face = "left",
  ...props
}) => {
  let lWidth: number | string;
  let rWidth: number | string;
  let height: number | string;

  if ("size" in props) {
    const size = props.size ?? 100;
    lWidth = rWidth = height = size;
  } else {
    lWidth = props.lWidth ?? 100;
    rWidth = props.rWidth ?? 100;
    height = props.height ?? 100;
  }

  const leftFaceStyle = {
    width: `${rWidth}px`,
    height: `${height}px`,
    transformOrigin: "0 0",
    transform: "rotate(-30deg) skewX(-30deg) scaleY(0.864)",
  };

  const rightFaceStyle = {
    height: `${lWidth}px`,
    width: `${height}px`,
    transformOrigin: "0 0",
    transform: "rotate(90deg) skewX(-30deg) scaleY(0.864)",
  };

  const topFaceStyle = {
    // Added style for the top face
    width: `${lWidth}px`,
    height: `${rWidth}px`,
    transformOrigin: "0 0",
    transform: "rotate(210deg) skew(-30deg) scaleY(0.864)",
  };

  return (
    <div className={`relative ${className}`}>
      <div className="absolute bg-[#999]" style={leftFaceStyle}>
        {face === "right" && <div className="break-words p-1">{children}</div>}
      </div>
      <div className="absolute bg-[#aaa]" style={rightFaceStyle}>
        {face === "left" && (
          <div
            className="absolute inset-0 p-1 px-2 flex justify-end"
            style={{ writingMode: "sideways-lr", textOrientation: "mixed" }}
          >
            {children}
          </div>
        )}
      </div>
      <div className="absolute bg-[#ccc]" style={topFaceStyle}>
        {face === "top" && (
          <div
            className="absolute inset-0 p-1 px-2 break-words"
            style={{ writingMode: "vertical-lr", textOrientation: "mixed" }}
          >
            {children}
          </div>
        )}
      </div>
    </div>
  );
};

export default IsometricShape;
